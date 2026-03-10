import { useCallback, useEffect, useState, useRef } from 'react'
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
  useReactFlow,
  getRectOfNodes,
  getTransformForBounds,
} from 'reactflow'
import 'reactflow/dist/style.css'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import {
  getLayoutedElementsDagre,
  getLayoutedElementsELK,
  getGridLayout,
  getCircularLayout,
  getForceLayout,
  getGroupedLayout,
  getSectionAwareLayout,
  getLayoutStats
} from '../utils/layoutHelpers'
import JSONPreviewModal from './JSONPreviewModal'

const FlowViewer = ({ 
  flowData, 
  flowTitle,
  flowKey,
  flowDescription,
  flowIcon,
  folder,
  allFlows
}) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(flowData.nodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(flowData.edges)
  const [layouting, setLayouting] = useState(false)
  const [exporting, setExporting] = useState(false)
  const [showLayoutMenu, setShowLayoutMenu] = useState(false)
  const [stats, setStats] = useState(null)
  const [showJSONModal, setShowJSONModal] = useState(false)
  const [jsonContext, setJsonContext] = useState(null)
  const { fitView, getNodes } = useReactFlow()
  const flowRef = useRef(null)

  const onConnect = useCallback(
    (params) => setEdges((eds) => [...eds, params]),
    [setEdges]
  )

  // Reset nodes and edges when flow changes
  // Option D: auto-apply section-aware layout for large flows without saved positions
  useEffect(() => {
    const savedPositions = localStorage.getItem(`flow-positions-${flowTitle}`)
    
    if (savedPositions) {
      try {
        const positions = JSON.parse(savedPositions)
        const nodesWithSavedPositions = flowData.nodes.map(node => ({
          ...node,
          position: positions[node.id] || node.position
        }))
        setNodes(nodesWithSavedPositions)
      } catch (e) {
        setNodes(flowData.nodes)
      }
    } else if (flowData.nodes.length > 30) {
      // Large flow with no saved positions → auto-apply section-aware layout
      const { nodes: layoutedNodes } = getSectionAwareLayout(flowData.nodes, flowData.edges)
      setNodes(layoutedNodes)
      // Save the computed positions so they persist
      const positions = layoutedNodes.reduce((acc, n) => {
        acc[n.id] = n.position
        return acc
      }, {})
      localStorage.setItem(`flow-positions-${flowTitle}`, JSON.stringify(positions))
    } else {
      setNodes(flowData.nodes)
    }
    setEdges(flowData.edges)
  }, [flowTitle, flowData, setNodes, setEdges])

  // Calculate stats when nodes change
  useEffect(() => {
    if (nodes.length > 0) {
      setStats(getLayoutStats(nodes, edges))
    }
  }, [nodes, edges])

  // Save positions when nodes are moved
  const onNodeDragStop = useCallback(
    (event, node) => {
      const positions = nodes.reduce((acc, n) => {
        acc[n.id] = n.position
        return acc
      }, {})
      localStorage.setItem(`flow-positions-${flowTitle}`, JSON.stringify(positions))
    },
    [nodes, flowTitle]
  )

  // Apply layout algorithm
  const applyLayout = useCallback(async (layoutType) => {
    setLayouting(true)
    setShowLayoutMenu(false)

    try {
      let layoutedElements

      switch (layoutType) {
        case 'section-aware':
          layoutedElements = getSectionAwareLayout(nodes, edges)
          break
        case 'dagre-tb':
          layoutedElements = getLayoutedElementsDagre(nodes, edges, 'TB')
          break
        case 'dagre-lr':
          layoutedElements = getLayoutedElementsDagre(nodes, edges, 'LR')
          break
        case 'elk-layered':
          layoutedElements = await getLayoutedElementsELK(nodes, edges, { 
            algorithm: 'layered',
            direction: 'DOWN' 
          })
          break
        case 'elk-force':
          layoutedElements = await getLayoutedElementsELK(nodes, edges, { 
            algorithm: 'force' 
          })
          break
        case 'grid':
          layoutedElements = getGridLayout(nodes, edges, 5)
          break
        case 'circular':
          layoutedElements = getCircularLayout(nodes, edges)
          break
        case 'force':
          layoutedElements = getForceLayout(nodes, edges, 50)
          break
        case 'grouped':
          layoutedElements = getGroupedLayout(nodes, edges)
          break
        default:
          layoutedElements = { nodes, edges }
      }

      setNodes(layoutedElements.nodes)
      
      // Save new positions
      const positions = layoutedElements.nodes.reduce((acc, n) => {
        acc[n.id] = n.position
        return acc
      }, {})
      localStorage.setItem(`flow-positions-${flowTitle}`, JSON.stringify(positions))

      // Fit view after layout
      setTimeout(() => {
        fitView({ padding: 0.2, duration: 800 })
      }, 100)

    } catch (error) {
      console.error('Error applying layout:', error)
    } finally {
      setLayouting(false)
    }
  }, [nodes, edges, flowTitle, setNodes, fitView])

  // Reset positions to default
  const handleResetPositions = useCallback(() => {
    localStorage.removeItem(`flow-positions-${flowTitle}`)
    setNodes(flowData.nodes)
    setTimeout(() => {
      fitView({ padding: 0.2, duration: 800 })
    }, 100)
  }, [flowTitle, flowData.nodes, setNodes, fitView])

  // Export to PDF using SVG-based approach for complete diagram capture
  const handleExportPDF = useCallback(async () => {
    if (!flowRef.current) return
    setExporting(true)

    try {
      const currentNodes = getNodes()
      if (currentNodes.length === 0) throw new Error('No nodes')

      // 1. Calculate full bounds of the diagram
      const nodesBounds = getRectOfNodes(currentNodes)
      const padding = 50

      // Image dimensions for the full diagram
      const imageWidth = nodesBounds.width + padding * 2
      const imageHeight = nodesBounds.height + padding * 2

      // 2. Get the transform to fit all nodes
      const transform = getTransformForBounds(
        nodesBounds,
        imageWidth,
        imageHeight,
        0.5,
        2
      )

      // 3. Find key elements and save their original styles
      const viewportEl = flowRef.current.querySelector('.react-flow__viewport')
      if (!viewportEl) throw new Error('Viewport not found')

      const flowContainer = flowRef.current.querySelector('.react-flow')
      if (!flowContainer) throw new Error('Flow container not found')

      const wrapperEl = flowRef.current // our outer div

      // Save originals
      const origViewportTransform = viewportEl.style.transform
      const origWrapperWidth = wrapperEl.style.width
      const origWrapperHeight = wrapperEl.style.height
      const origWrapperPosition = wrapperEl.style.position
      const origWrapperOverflow = wrapperEl.style.overflow
      const origFlowWidth = flowContainer.style.width
      const origFlowHeight = flowContainer.style.height

      // 4. Temporarily expand the container to fit the entire diagram
      wrapperEl.style.width = imageWidth + 'px'
      wrapperEl.style.height = imageHeight + 'px'
      wrapperEl.style.overflow = 'visible'
      flowContainer.style.width = imageWidth + 'px'
      flowContainer.style.height = imageHeight + 'px'

      // Set viewport transform to show ALL nodes
      viewportEl.style.transform = `translate(${transform[0]}px, ${transform[1]}px) scale(${transform[2]})`

      // Wait for browser to render with new dimensions
      await new Promise(resolve => setTimeout(resolve, 400))

      // 5. Capture with html2canvas
      const canvas = await html2canvas(flowContainer, {
        backgroundColor: '#ffffff',
        width: imageWidth,
        height: imageHeight,
        windowWidth: imageWidth,
        windowHeight: imageHeight,
        scrollX: 0,
        scrollY: 0,
        scale: 2,
        useCORS: true,
        logging: false,
        allowTaint: true,
        ignoreElements: (element) => {
          if (element.classList && (
            element.classList.contains('react-flow__minimap') ||
            element.classList.contains('react-flow__controls') ||
            element.classList.contains('react-flow__attribution') ||
            element.classList.contains('react-flow__background') ||
            element.classList.contains('react-flow__panel')
          )) return true
          return false
        }
      })

      // 6. Restore ALL original styles immediately
      viewportEl.style.transform = origViewportTransform
      wrapperEl.style.width = origWrapperWidth
      wrapperEl.style.height = origWrapperHeight
      wrapperEl.style.position = origWrapperPosition
      wrapperEl.style.overflow = origWrapperOverflow
      flowContainer.style.width = origFlowWidth
      flowContainer.style.height = origFlowHeight

      // 6. Create PDF
      const imgData = canvas.toDataURL('image/png', 1.0)
      const imgWidth = canvas.width
      const imgHeight = canvas.height

      // Determine PDF orientation based on diagram aspect ratio
      const isLandscape = nodesBounds.width >= nodesBounds.height
      const pdf = new jsPDF({
        orientation: isLandscape ? 'landscape' : 'portrait',
        unit: 'mm',
        format: 'a4'
      })

      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()

      // Add title header
      const headerHeight = 20
      pdf.setFillColor(51, 51, 51)
      pdf.rect(0, 0, pdfWidth, headerHeight, 'F')
      pdf.setTextColor(255, 255, 255)
      pdf.setFontSize(14)
      pdf.setFont('helvetica', 'bold')
      pdf.text(`Orange Staffing - ${flowTitle}`, 10, 9)
      pdf.setFontSize(9)
      pdf.setFont('helvetica', 'normal')
      const now = new Date()
      const dateStr = now.toLocaleDateString('es-MX', {
        year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit'
      })
      pdf.text(`Exportado: ${dateStr}`, 10, 16)

      // Calculate image dimensions to fit in remaining space
      const availableHeight = pdfHeight - headerHeight - 10
      const availableWidth = pdfWidth - 10
      const ratio = Math.min(availableWidth / imgWidth, availableHeight / imgHeight)
      const finalWidth = imgWidth * ratio
      const finalHeight = imgHeight * ratio
      const xOffset = (pdfWidth - finalWidth) / 2
      const yOffset = headerHeight + (availableHeight - finalHeight) / 2 + 2

      pdf.addImage(imgData, 'PNG', xOffset, yOffset, finalWidth, finalHeight)

      // Add footer
      pdf.setTextColor(150, 150, 150)
      pdf.setFontSize(8)
      pdf.text('Orange Staffing - Documento confidencial', pdfWidth / 2, pdfHeight - 4, { align: 'center' })

      // Save the PDF
      const safeTitle = flowTitle.replace(/[^a-zA-Z0-9áéíóúñ\s]/g, '').trim().replace(/\s+/g, '_')
      pdf.save(`Orange_Staffing_${safeTitle}.pdf`)

    } catch (error) {
      console.error('Error exporting PDF:', error)
      alert('Error al exportar PDF. Intenta de nuevo.')
    } finally {
      setExporting(false)
      // Always restore the view properly after export
      setTimeout(() => {
        fitView({ padding: 0.2, duration: 400 })
      }, 150)
    }
  }, [flowTitle, getNodes, fitView])

  // Helper: Get semantic type from className
  const getSemanticType = (className) => {
    if (!className) return 'process'
    if (className.includes('critical')) return 'critical'
    if (className.includes('urgent')) return 'urgent'
    if (className.includes('warning')) return 'warning'
    if (className.includes('success')) return 'success'
    if (className.includes('info')) return 'info'
    if (className.includes('accounting')) return 'accounting'
    if (className.includes('hotel')) return 'hotel'
    if (className.includes('recruitment')) return 'recruitment'
    if (className.includes('quality')) return 'quality'
    if (className.includes('blacklist')) return 'blacklist'
    if (className.includes('ux-screen')) return 'screen'
    if (className.includes('ux-form')) return 'form'
    if (className.includes('ux-action')) return 'action'
    if (className.includes('ux-feedback')) return 'feedback'
    if (className.includes('digital-auto')) return 'automated'
    if (className.includes('digital-hybrid')) return 'hybrid'
    if (className.includes('digital-rules')) return 'business-rules'
    if (className.includes('digital-section')) return 'section'
    return 'process'
  }

  // Helper: Get layer display name
  const getLayerName = (folderName) => {
    switch (folderName) {
      case 'proceso-rol': return 'Proceso por Rol'
      case 'proceso-digital': return 'Proceso Digital'
      case 'proceso-ux': return 'User Experience'
      default: return folderName
    }
  }

  // Helper: Count nodes by type
  const countByType = (steps) => {
    return steps.reduce((acc, step) => {
      acc[step.type] = (acc[step.type] || 0) + 1
      return acc
    }, {})
  }

  // Helper: Find entry points (nodes with no incoming edges)
  const findEntryPoints = (nodeList, edgeList) => {
    const targets = new Set(edgeList.map(e => e.target))
    return nodeList.filter(n => !targets.has(n.id)).map(n => n.id)
  }

  // Helper: Find exit points (nodes with no outgoing edges)
  const findExitPoints = (nodeList, edgeList) => {
    const sources = new Set(edgeList.map(e => e.source))
    return nodeList.filter(n => !sources.has(n.id)).map(n => n.id)
  }

  // Helper: Summarize a flow for related context
  const summarizeFlow = (flowNodes, flowEdges) => {
    const types = {}
    flowNodes.forEach(n => {
      const type = getSemanticType(n.className)
      types[type] = (types[type] || 0) + 1
    })
    
    const criticalNodes = flowNodes.filter(n => 
      n.className?.includes('critical') || n.className?.includes('blacklist')
    ).map(n => n.data?.label).filter(Boolean)

    return {
      totalSteps: flowNodes.length,
      totalConnections: flowEdges.length,
      byType: types,
      criticalPoints: criticalNodes.slice(0, 5) // Max 5
    }
  }

  // Build related context from other layers
  const buildRelatedContext = useCallback(() => {
    if (!allFlows || !flowKey) return null
    
    const related = {}
    
    // Si estamos en UX o Digital, incluir proceso-rol
    if (folder === 'proceso-ux' || folder === 'proceso-digital') {
      const rolFlow = allFlows.rol?.[flowKey]
      if (rolFlow?.data) {
        related.procesoRol = {
          layer: 'proceso-rol',
          layerName: 'Proceso por Rol',
          role: rolFlow.title,
          description: rolFlow.description,
          summary: summarizeFlow(rolFlow.data.nodes, rolFlow.data.edges)
        }
      }
    }
    
    // Si estamos en UX, incluir proceso-digital
    if (folder === 'proceso-ux') {
      const digitalFlow = allFlows.digital?.[flowKey]
      if (digitalFlow?.data) {
        related.procesoDigital = {
          layer: 'proceso-digital',
          layerName: 'Proceso Digital',
          role: digitalFlow.title,
          description: digitalFlow.description,
          summary: summarizeFlow(digitalFlow.data.nodes, digitalFlow.data.edges)
        }
      }
    }
    
    return Object.keys(related).length > 0 ? related : null
  }, [folder, flowKey, allFlows])

  // Build complete LLM context
  const buildLLMContext = useCallback(() => {
    // Transform nodes to semantic format
    const steps = nodes.map(node => ({
      id: node.id,
      name: node.data?.label || 'Sin nombre',
      type: getSemanticType(node.className),
      connectsTo: edges
        .filter(e => e.source === node.id)
        .map(e => ({
          targetId: e.target,
          targetName: nodes.find(n => n.id === e.target)?.data?.label || null,
          label: e.label || null
        }))
    }))

    // Find critical and success flows
    const criticalNodes = nodes
      .filter(n => n.className?.includes('critical') || n.className?.includes('blacklist'))
      .map(n => ({ id: n.id, name: n.data?.label }))
    
    const successNodes = nodes
      .filter(n => n.className?.includes('success'))
      .map(n => ({ id: n.id, name: n.data?.label }))

    // Detect suggested components based on node types
    const suggestedComponents = []
    const classNames = nodes.map(n => n.className || '').join(' ')
    if (classNames.includes('ux-form') || classNames.includes('form')) suggestedComponents.push('form')
    if (classNames.includes('ux-screen')) suggestedComponents.push('screen')
    if (classNames.includes('checklist') || nodes.some(n => n.data?.label?.toLowerCase().includes('checklist'))) suggestedComponents.push('checklist')
    if (nodes.some(n => n.data?.label?.toLowerCase().includes('foto') || n.data?.label?.toLowerCase().includes('photo'))) suggestedComponents.push('photo_capture')
    if (nodes.some(n => n.data?.label?.toLowerCase().includes('gps') || n.data?.label?.toLowerCase().includes('ubicacion'))) suggestedComponents.push('gps_indicator')
    if (nodes.some(n => n.data?.label?.toLowerCase().includes('tabla') || n.data?.label?.toLowerCase().includes('table'))) suggestedComponents.push('table')
    if (nodes.some(n => n.data?.label?.toLowerCase().includes('dashboard'))) suggestedComponents.push('dashboard')
    if (nodes.some(n => n.data?.label?.toLowerCase().includes('notifica'))) suggestedComponents.push('notifications')

    const context = {
      systemContext: {
        product: "Orange Staffing",
        description: "Sistema de gestion de personal temporal para hoteles",
        domain: "HR Tech / Staffing"
      },
      
      currentView: {
        layer: folder,
        layerName: getLayerName(folder),
        role: {
          id: flowKey,
          name: flowTitle,
          icon: flowIcon,
          description: flowDescription
        }
      },
      
      flow: {
        steps,
        summary: {
          totalSteps: nodes.length,
          totalConnections: edges.length,
          byType: countByType(steps),
          entryPoints: findEntryPoints(nodes, edges),
          exitPoints: findExitPoints(nodes, edges)
        }
      },
      
      relatedContext: buildRelatedContext(),
      
      designHints: {
        platform: "mixed",
        suggestedComponents: [...new Set(suggestedComponents)],
        criticalFlows: criticalNodes,
        successFlows: successNodes
      },
      
      exportMetadata: {
        exportDate: new Date().toISOString(),
        version: "1.0",
        sourceFile: `Orange_Staffing_${folder}_${flowKey}.json`
      }
    }
    
    return context
  }, [nodes, edges, folder, flowKey, flowTitle, flowDescription, flowIcon, buildRelatedContext])

  // Handle export JSON
  const handleExportJSON = useCallback(() => {
    const context = buildLLMContext()
    setJsonContext(context)
    setShowJSONModal(true)
  }, [buildLLMContext])

  return (
    <div style={{ flex: 1, position: 'relative' }} ref={flowRef}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeDragStop={onNodeDragStop}
        nodesDraggable={!layouting}
        nodesConnectable={false}
        elementsSelectable={true}
        fitView
        attributionPosition="bottom-left"
        defaultEdgeOptions={{
          type: 'smoothstep',
          animated: false,
          markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 20,
            height: 20,
          },
        }}
      >
        <Controls />
        <MiniMap 
          nodeColor={(node) => {
            if (node.className?.includes('critical')) return '#ffcdd2'
            if (node.className?.includes('warning')) return '#fff9c4'
            if (node.className?.includes('success')) return '#c8e6c9'
            if (node.className?.includes('accounting')) return '#fce4ec'
            if (node.className?.includes('quality')) return '#fff9c4'
            if (node.className?.includes('blacklist')) return '#212121'
            return '#e1f5fe'
          }}
          maskColor="rgba(0, 0, 0, 0.05)"
        />
        <Background variant="dots" gap={16} size={1} />
      </ReactFlow>
      
      {/* Auto-Layout Controls */}
      <div style={{
        position: 'absolute',
        top: '16px',
        left: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        zIndex: 5
      }}>
        {/* Main Layout Button */}
        <button
          onClick={() => setShowLayoutMenu(!showLayoutMenu)}
          disabled={layouting}
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '12px 20px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
            border: 'none',
            color: 'white',
            fontWeight: 600,
            fontSize: '14px',
            cursor: layouting ? 'wait' : 'pointer',
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            opacity: layouting ? 0.6 : 1
          }}
          onMouseEnter={(e) => {
            if (!layouting) {
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 6px 16px rgba(102, 126, 234, 0.5)'
            }
          }}
          onMouseLeave={(e) => {
            if (!layouting) {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)'
            }
          }}
        >
          <span style={{ fontSize: '18px' }}>✨</span>
          <span>{layouting ? 'Aplicando...' : 'Auto-Layout'}</span>
          <span style={{ fontSize: '12px' }}>{showLayoutMenu ? '▲' : '▼'}</span>
        </button>

        {/* Layout Options Menu */}
        {showLayoutMenu && !layouting && (
          <div style={{
            background: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            padding: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            minWidth: '220px'
          }}>
            <LayoutButton
              onClick={() => applyLayout('section-aware')}
              icon="🧩"
              label="Ordenar por Secciones"
              description="Agrupa y ordena por sección — Recomendado"
            />

            <div style={{
              borderTop: '1px solid #eee',
              margin: '4px 0'
            }}></div>

            <div style={{
              fontSize: '11px',
              fontWeight: 600,
              color: '#666',
              padding: '8px 12px 4px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Algoritmos Jerárquicos
            </div>
            
            <LayoutButton
              onClick={() => applyLayout('dagre-tb')}
              icon="⬇️"
              label="Vertical (Top-Bottom)"
              description="Flujo de arriba a abajo"
            />
            
            <LayoutButton
              onClick={() => applyLayout('dagre-lr')}
              icon="➡️"
              label="Horizontal (Left-Right)"
              description="Flujo de izquierda a derecha"
            />

            <LayoutButton
              onClick={() => applyLayout('elk-layered')}
              icon="🎯"
              label="ELK Jerárquico"
              description="Optimizado para pocos cruces"
            />

            <div style={{
              borderTop: '1px solid #eee',
              margin: '4px 0'
            }}></div>

            <div style={{
              fontSize: '11px',
              fontWeight: 600,
              color: '#666',
              padding: '8px 12px 4px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Otros Layouts
            </div>

            <LayoutButton
              onClick={() => applyLayout('force')}
              icon="🌐"
              label="Force-Directed"
              description="Simulación de fuerzas"
            />

            <LayoutButton
              onClick={() => applyLayout('grid')}
              icon="📐"
              label="Cuadrícula (Grid)"
              description="Distribución uniforme"
            />

            <LayoutButton
              onClick={() => applyLayout('circular')}
              icon="⭕"
              label="Circular"
              description="Nodos en círculo"
            />

            <LayoutButton
              onClick={() => applyLayout('grouped')}
              icon="📊"
              label="Agrupado por Color"
              description="Por tipo de nodo"
            />
          </div>
        )}

        {/* Stats Panel */}
        {stats && (
          <div style={{
            background: 'white',
            padding: '10px 12px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            fontSize: '11px',
            color: '#666'
          }}>
            <div style={{ fontWeight: 600, marginBottom: '4px', color: '#333' }}>
              📊 Layout Stats
            </div>
            <div>Nodos: {stats.nodes} | Edges: {stats.edges}</div>
            <div>Dimensiones: {stats.width}×{stats.height}px</div>
            <div>Cruces: {stats.crossings} | Densidad: {stats.density}%</div>
          </div>
        )}
      </div>

      {/* Right Side Controls */}
      <div style={{
        position: 'absolute',
        top: '16px',
        right: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        zIndex: 5
      }}>
        {/* Export PDF Button */}
        <button
          onClick={handleExportPDF}
          disabled={exporting}
          style={{
            background: 'linear-gradient(135deg, #e53935 0%, #c62828 100%)',
            padding: '12px 20px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(229, 57, 53, 0.4)',
            border: 'none',
            color: 'white',
            fontWeight: 600,
            fontSize: '14px',
            cursor: exporting ? 'wait' : 'pointer',
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            opacity: exporting ? 0.6 : 1
          }}
          onMouseEnter={(e) => {
            if (!exporting) {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(229, 57, 53, 0.5)'
            }
          }}
          onMouseLeave={(e) => {
            if (!exporting) {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(229, 57, 53, 0.4)'
            }
          }}
        >
          <span style={{ fontSize: '18px' }}>📄</span>
          <span>{exporting ? 'Exportando...' : 'Exportar PDF'}</span>
        </button>

        {/* Export JSON Button */}
        <button
          onClick={handleExportJSON}
          style={{
            background: 'linear-gradient(135deg, #00897b 0%, #00695c 100%)',
            padding: '12px 20px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 137, 123, 0.4)',
            border: 'none',
            color: 'white',
            fontWeight: 600,
            fontSize: '14px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 137, 123, 0.5)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 137, 123, 0.4)'
          }}
        >
          <span style={{ fontSize: '18px' }}>{ }</span>
          <span>Exportar JSON (LLM)</span>
        </button>

        {/* Reset Button */}
        <button
          onClick={handleResetPositions}
          style={{
            background: 'white',
            padding: '10px 16px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            border: '2px solid #1976d2',
            color: '#1976d2',
            fontWeight: 600,
            fontSize: '13px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#e3f2fd'
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'white'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)'
          }}
        >
          <span>🔄</span>
          <span>Restaurar Original</span>
        </button>

        {/* Instructions */}
        <div style={{
          background: 'white',
          padding: '12px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          fontSize: '11px',
          color: '#666',
          maxWidth: '220px'
        }}>
          <div style={{ fontWeight: 600, marginBottom: '6px', color: '#333' }}>
            💡 Controles
          </div>
          <div style={{ lineHeight: 1.5 }}>
            • <strong>Auto-Layout:</strong> Reorganiza inteligentemente<br/>
            • <strong>Arrastra nodos:</strong> Ajustes manuales<br/>
            • <strong>Restaurar:</strong> Vuelve al original
          </div>
        </div>

        {/* Legend */}
        <div style={{
          background: 'white',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          fontSize: '12px',
          maxWidth: '220px'
        }}>
          <div style={{ fontWeight: 600, marginBottom: '8px', color: '#333' }}>
            Código de Colores:
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '16px', height: '16px', background: '#ffcdd2', border: '1px solid #c62828', borderRadius: '4px' }}></div>
              <span>🔴 Crítico</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '16px', height: '16px', background: '#fff9c4', border: '1px solid #f57f17', borderRadius: '4px' }}></div>
              <span>🟡 Advertencia</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '16px', height: '16px', background: '#c8e6c9', border: '1px solid #2e7d32', borderRadius: '4px' }}></div>
              <span>🟢 Éxito</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '16px', height: '16px', background: '#fce4ec', border: '1px solid #c2185b', borderRadius: '4px' }}></div>
              <span>💰 Contabilidad</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '16px', height: '16px', background: '#e1f5fe', border: '1px solid #0277bd', borderRadius: '4px' }}></div>
              <span>💙 Info/Proceso</span>
            </div>
          </div>
        </div>
      </div>

      {/* Exporting Overlay */}
      {exporting && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(255, 255, 255, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          backdropFilter: 'blur(4px)'
        }}>
          <div style={{
            background: 'white',
            padding: '24px 32px',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>📄</div>
            <div style={{ fontSize: '16px', fontWeight: 600, color: '#333' }}>
              Generando PDF...
            </div>
            <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>
              Capturando diagrama completo
            </div>
          </div>
        </div>
      )}

      {/* Loading Overlay */}
      {layouting && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(255, 255, 255, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          backdropFilter: 'blur(4px)'
        }}>
          <div style={{
            background: 'white',
            padding: '24px 32px',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>✨</div>
            <div style={{ fontSize: '16px', fontWeight: 600, color: '#333' }}>
              Aplicando Layout...
            </div>
            <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>
              Reorganizando nodos inteligentemente
            </div>
          </div>
        </div>
      )}

      {/* JSON Preview Modal */}
      {showJSONModal && (
        <JSONPreviewModal
          isOpen={showJSONModal}
          jsonData={jsonContext}
          onClose={() => setShowJSONModal(false)}
          flowTitle={flowTitle}
          folder={folder}
          flowKey={flowKey}
        />
      )}
    </div>
  )
}

// Helper component for layout buttons
const LayoutButton = ({ onClick, icon, label, description }) => (
  <button
    onClick={onClick}
    style={{
      background: 'white',
      border: '1px solid #e0e0e0',
      borderRadius: '6px',
      padding: '10px 12px',
      cursor: 'pointer',
      transition: 'all 0.15s',
      textAlign: 'left',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '10px'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = '#f5f5f5'
      e.currentTarget.style.borderColor = '#1976d2'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = 'white'
      e.currentTarget.style.borderColor = '#e0e0e0'
    }}
  >
    <span style={{ fontSize: '18px' }}>{icon}</span>
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: '13px', fontWeight: 600, color: '#333', marginBottom: '2px' }}>
        {label}
      </div>
      <div style={{ fontSize: '11px', color: '#666' }}>
        {description}
      </div>
    </div>
  </button>
)

export default FlowViewer
