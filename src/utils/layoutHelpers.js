import dagre from 'dagre'
import ELK from 'elkjs/lib/elk.bundled.js'

const elk = new ELK()

/**
 * Estimate node dimensions based on label content.
 * Our nodes have multi-line labels, so we need to account for the actual
 * rendered size rather than using React Flow's tiny defaults (172x36).
 */
const estimateNodeSize = (node) => {
  const label = node.data?.label || ''
  const lines = label.split('\n')
  const maxLineLength = Math.max(...lines.map(l => l.length))
  
  // Approximate: ~8px per character width, ~22px per line height
  // Plus padding (24px horizontal, 20px vertical)
  const width = Math.max(180, maxLineLength * 8 + 24)
  const height = Math.max(50, lines.length * 22 + 20)
  
  return { width, height }
}

/**
 * Auto-layout usando Dagre (algoritmo jerárquico)
 * Mejor para flujos lineales y árboles
 */
export const getLayoutedElementsDagre = (nodes, edges, direction = 'TB') => {
  const dagreGraph = new dagre.graphlib.Graph()
  dagreGraph.setDefaultEdgeLabel(() => ({}))
  
  const isHorizontal = direction === 'LR'
  dagreGraph.setGraph({ 
    rankdir: direction,
    nodesep: isHorizontal ? 100 : 60,
    ranksep: isHorizontal ? 200 : 100,
    marginx: 50,
    marginy: 50
  })

  // Use estimated sizes per node so dagre knows how much space they need
  const nodeSizes = {}
  nodes.forEach((node) => {
    const size = estimateNodeSize(node)
    nodeSizes[node.id] = size
    dagreGraph.setNode(node.id, { width: size.width, height: size.height })
  })

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target)
  })

  dagre.layout(dagreGraph)

  const layoutedNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id)
    const size = nodeSizes[node.id]
    return {
      ...node,
      position: {
        x: nodeWithPosition.x - size.width / 2,
        y: nodeWithPosition.y - size.height / 2,
      },
    }
  })

  return { nodes: layoutedNodes, edges }
}

/**
 * Auto-layout usando ELK (algoritmo avanzado)
 * Mejor para grafos complejos con muchas conexiones
 */
export const getLayoutedElementsELK = async (nodes, edges, options = {}) => {
  const graph = {
    id: 'root',
    layoutOptions: {
      'elk.algorithm': options.algorithm || 'layered',
      'elk.direction': options.direction || 'DOWN',
      'elk.spacing.nodeNode': '100',
      'elk.layered.spacing.nodeNodeBetweenLayers': '120',
      'elk.spacing.edgeNode': '50',
      'elk.layered.nodePlacement.strategy': 'SIMPLE',
      'elk.layered.crossingMinimization.strategy': 'LAYER_SWEEP',
    },
    children: nodes.map((node) => {
      const size = estimateNodeSize(node)
      return {
        id: node.id,
        width: size.width,
        height: size.height,
      }
    }),
    edges: edges.map((edge) => ({
      id: edge.id,
      sources: [edge.source],
      targets: [edge.target],
    })),
  }

  const layoutedGraph = await elk.layout(graph)

  const layoutedNodes = nodes.map((node) => {
    const layoutedNode = layoutedGraph.children.find((n) => n.id === node.id)
    return {
      ...node,
      position: {
        x: layoutedNode.x,
        y: layoutedNode.y,
      },
    }
  })

  return { nodes: layoutedNodes, edges }
}

/**
 * Layout en Grid (cuadrícula)
 * Distribuye nodos uniformemente
 */
export const getGridLayout = (nodes, edges, columns = 5) => {
  const horizontalSpacing = 280
  const verticalSpacing = 180

  const layoutedNodes = nodes.map((node, index) => {
    const col = index % columns
    const row = Math.floor(index / columns)
    
    return {
      ...node,
      position: {
        x: col * horizontalSpacing + 50,
        y: row * verticalSpacing + 50,
      },
    }
  })

  return { nodes: layoutedNodes, edges }
}

/**
 * Layout Circular
 * Distribuye nodos en círculo
 */
export const getCircularLayout = (nodes, edges) => {
  const radius = Math.max(400, nodes.length * 30)
  const centerX = radius + 100
  const centerY = radius + 100
  
  const layoutedNodes = nodes.map((node, index) => {
    const angle = (2 * Math.PI * index) / nodes.length
    
    return {
      ...node,
      position: {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      },
    }
  })

  return { nodes: layoutedNodes, edges }
}

/**
 * Layout Force-Directed (simulación de fuerzas)
 * Distribuye nodos minimizando cruces
 */
export const getForceLayout = (nodes, edges, iterations = 50) => {
  // Inicializar posiciones aleatorias si no existen
  let positions = nodes.map((node, i) => ({
    id: node.id,
    x: node.position?.x || Math.random() * 1000,
    y: node.position?.y || Math.random() * 800,
    vx: 0,
    vy: 0,
  }))

  const getNode = (id) => positions.find(n => n.id === id)

  // Simulación de fuerzas
  for (let iter = 0; iter < iterations; iter++) {
    // Fuerza de repulsión entre nodos
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const nodeA = positions[i]
        const nodeB = positions[j]
        
        const dx = nodeB.x - nodeA.x
        const dy = nodeB.y - nodeA.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 300) {
          const force = 2000 / (distance * distance + 1)
          const fx = (dx / distance) * force
          const fy = (dy / distance) * force
          
          nodeA.vx -= fx
          nodeA.vy -= fy
          nodeB.vx += fx
          nodeB.vy += fy
        }
      }
    }

    // Fuerza de atracción en edges
    edges.forEach(edge => {
      const source = getNode(edge.source)
      const target = getNode(edge.target)
      
      if (source && target) {
        const dx = target.x - source.x
        const dy = target.y - source.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        const idealDistance = 250
        const force = (distance - idealDistance) * 0.01
        const fx = (dx / distance) * force
        const fy = (dy / distance) * force
        
        source.vx += fx
        source.vy += fy
        target.vx -= fx
        target.vy -= fy
      }
    })

    // Aplicar velocidades con damping
    positions.forEach(node => {
      node.x += node.vx
      node.y += node.vy
      node.vx *= 0.8
      node.vy *= 0.8
    })
  }

  // Centrar y normalizar
  const minX = Math.min(...positions.map(n => n.x))
  const minY = Math.min(...positions.map(n => n.y))
  
  const layoutedNodes = nodes.map(node => {
    const pos = positions.find(p => p.id === node.id)
    return {
      ...node,
      position: {
        x: pos.x - minX + 100,
        y: pos.y - minY + 100,
      },
    }
  })

  return { nodes: layoutedNodes, edges }
}

/**
 * Layout Vertical Compacto
 * Organiza por tipo/clase de nodo
 */
export const getGroupedLayout = (nodes, edges) => {
  // Agrupar por clase
  const groups = {}
  nodes.forEach(node => {
    const className = node.className || 'default'
    if (!groups[className]) {
      groups[className] = []
    }
    groups[className].push(node)
  })

  const groupNames = Object.keys(groups)
  const columnWidth = 280
  const rowHeight = 160

  let layoutedNodes = []
  groupNames.forEach((groupName, groupIndex) => {
    const groupNodes = groups[groupName]
    groupNodes.forEach((node, nodeIndex) => {
      layoutedNodes.push({
        ...node,
        position: {
          x: groupIndex * columnWidth + 50,
          y: nodeIndex * rowHeight + 50,
        },
      })
    })
  })

  return { nodes: layoutedNodes, edges }
}

/**
 * Obtener estadísticas del layout actual
 */
export const getLayoutStats = (nodes, edges) => {
  if (nodes.length === 0) return null

  const xs = nodes.map(n => n.position.x)
  const ys = nodes.map(n => n.position.y)
  
  const minX = Math.min(...xs)
  const maxX = Math.max(...xs)
  const minY = Math.min(...ys)
  const maxY = Math.max(...ys)
  
  const width = maxX - minX
  const height = maxY - minY
  
  // Calcular cruces de edges (aproximado)
  let crossings = 0
  for (let i = 0; i < edges.length; i++) {
    for (let j = i + 1; j < edges.length; j++) {
      const e1 = edges[i]
      const e2 = edges[j]
      
      const n1s = nodes.find(n => n.id === e1.source)
      const n1t = nodes.find(n => n.id === e1.target)
      const n2s = nodes.find(n => n.id === e2.source)
      const n2t = nodes.find(n => n.id === e2.target)
      
      if (n1s && n1t && n2s && n2t) {
        // Simplificado: detectar si las líneas se cruzan
        const crosses = linesCross(
          n1s.position.x, n1s.position.y,
          n1t.position.x, n1t.position.y,
          n2s.position.x, n2s.position.y,
          n2t.position.x, n2t.position.y
        )
        if (crosses) crossings++
      }
    }
  }
  
  return {
    nodes: nodes.length,
    edges: edges.length,
    width: Math.round(width),
    height: Math.round(height),
    crossings,
    density: (edges.length / (nodes.length * (nodes.length - 1) / 2) * 100).toFixed(1)
  }
}

/**
 * ═══════════════════════════════════════════════════════════════════════
 * SECTION-AWARE LAYOUT
 * Detects section headers, groups nodes by section, does mini-Dagre
 * internally per section, then arranges sections in a grid.
 * ═══════════════════════════════════════════════════════════════════════
 *
 * Section detection strategy (3 families):
 *   1. proceso-ux:      s{N}_header  → children have s{N}_ prefix
 *   2. proceso-digital: section_*    → className 'node-digital-section'
 *   3. proceso-rol:     section_*    → various classNames
 *
 * Cross-section edges: strokeDasharray in style (but NOT reliable alone
 * since some intra-section edges also use dashes for alt paths).
 * Primary grouping: ID prefix matching + BFS from section headers
 * using only non-dashed edges.
 */
export const getSectionAwareLayout = (nodes, edges) => {
  if (nodes.length === 0) return { nodes, edges }

  // ── Step 1: Identify section headers and special nodes ──
  const nodeMap = new Map(nodes.map(n => [n.id, n]))
  const startNode = nodes.find(n => n.id === 'start')
  const endNode = nodes.find(n => n.id === 'end')

  // Detect section headers
  const sectionHeaders = nodes.filter(n => {
    if (n.id === 'start' || n.id === 'end') return false
    // UX pattern: s{N}_header
    if (/^s\d+_header$/.test(n.id)) return true
    // Digital/Rol pattern: section_*
    if (n.id.startsWith('section_')) return true
    return false
  })

  // If no section headers found, fall back to Dagre
  if (sectionHeaders.length === 0) {
    return getLayoutedElementsDagre(nodes, edges, 'TB')
  }

  // ── Step 2: Build adjacency lists (only non-cross-section edges) ──
  // An edge is considered "cross-section" if it has strokeDasharray in style
  const internalEdges = edges.filter(e => !e.style?.strokeDasharray)
  const adjForward = new Map()  // source → [targets]
  const adjReverse = new Map()  // target → [sources]

  internalEdges.forEach(e => {
    if (!adjForward.has(e.source)) adjForward.set(e.source, [])
    adjForward.get(e.source).push(e.target)
    if (!adjReverse.has(e.target)) adjReverse.set(e.target, [])
    adjReverse.get(e.target).push(e.source)
  })

  // ── Step 3: Group nodes into sections ──
  // Strategy: For each section header, collect nodes that:
  //   a) Share the same ID prefix (s1_, s2_, etc. for UX; or nearest section_ prefix)
  //   b) Are reachable via BFS through internal edges from the header
  const assigned = new Set()
  const sections = []  // [{header, nodes}]

  // Sort headers by their order in the original node array (preserves file order)
  const headerOrder = nodes.map(n => n.id)
  sectionHeaders.sort((a, b) => headerOrder.indexOf(a.id) - headerOrder.indexOf(b.id))

  // Determine prefix for each section header
  const getSectionPrefix = (headerId) => {
    // UX: s1_header → s1_
    const uxMatch = headerId.match(/^(s\d+)_header$/)
    if (uxMatch) return uxMatch[1] + '_'
    // Digital/Rol: section_onboard → try to find common prefix from children
    // We'll use BFS-only for these
    return null
  }

  sectionHeaders.forEach(header => {
    const sectionNodes = [header]
    assigned.add(header.id)

    const prefix = getSectionPrefix(header.id)

    // Method A: prefix matching (most reliable for UX flows)
    if (prefix) {
      nodes.forEach(n => {
        if (!assigned.has(n.id) && n.id !== 'start' && n.id !== 'end' && n.id.startsWith(prefix) && n.id !== header.id) {
          sectionNodes.push(n)
          assigned.add(n.id)
        }
      })
    }

    // Method B: BFS from header via internal edges (catches remaining nodes)
    const queue = [header.id]
    const visited = new Set([header.id])
    while (queue.length > 0) {
      const current = queue.shift()
      const neighbors = adjForward.get(current) || []
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor) && !assigned.has(neighbor) && neighbor !== 'start' && neighbor !== 'end') {
          // Don't cross into another section header
          const neighborNode = nodeMap.get(neighbor)
          if (neighborNode && !sectionHeaders.includes(neighborNode)) {
            sectionNodes.push(neighborNode)
            assigned.add(neighbor)
            visited.add(neighbor)
            queue.push(neighbor)
          }
        }
      }
    }

    sections.push({ header, nodes: sectionNodes })
  })

  // Collect orphan nodes (not assigned to any section, not start/end)
  const orphans = nodes.filter(n => !assigned.has(n.id) && n.id !== 'start' && n.id !== 'end')
  if (orphans.length > 0) {
    // Try to assign orphans to the nearest section by checking edges
    orphans.forEach(orphan => {
      // Check which section has edges connecting to this orphan
      let bestSection = null
      let bestScore = 0
      for (const section of sections) {
        const sectionIds = new Set(section.nodes.map(n => n.id))
        let score = 0
        edges.forEach(e => {
          if (e.source === orphan.id && sectionIds.has(e.target)) score++
          if (e.target === orphan.id && sectionIds.has(e.source)) score++
        })
        if (score > bestScore) {
          bestScore = score
          bestSection = section
        }
      }
      if (bestSection) {
        bestSection.nodes.push(orphan)
        assigned.add(orphan.id)
      }
    })
    // Any remaining true orphans get their own section
    const trueOrphans = nodes.filter(n => !assigned.has(n.id) && n.id !== 'start' && n.id !== 'end')
    if (trueOrphans.length > 0) {
      sections.push({ header: null, nodes: trueOrphans })
    }
  }

  // ── Step 4: Mini-Dagre layout per section ──
  const sectionBounds = []  // [{x, y, width, height, nodes}]

  sections.forEach(section => {
    const sNodes = section.nodes
    if (sNodes.length === 0) return

    // Get edges that are internal to this section
    const sectionIds = new Set(sNodes.map(n => n.id))
    const sectionEdges = edges.filter(e => sectionIds.has(e.source) && sectionIds.has(e.target))

    if (sNodes.length === 1) {
      // Single node section — just place at origin
      const size = estimateNodeSize(sNodes[0])
      sNodes[0] = { ...sNodes[0], position: { x: 0, y: 0 } }
      sectionBounds.push({ width: size.width, height: size.height, nodes: sNodes })
      return
    }

    // Use Dagre for internal layout
    const dagreGraph = new dagre.graphlib.Graph()
    dagreGraph.setDefaultEdgeLabel(() => ({}))
    dagreGraph.setGraph({
      rankdir: 'TB',
      nodesep: 40,
      ranksep: 70,
      marginx: 20,
      marginy: 20
    })

    const nodeSizes = {}
    sNodes.forEach(n => {
      const size = estimateNodeSize(n)
      nodeSizes[n.id] = size
      dagreGraph.setNode(n.id, { width: size.width, height: size.height })
    })

    sectionEdges.forEach(e => {
      dagreGraph.setEdge(e.source, e.target)
    })

    dagre.layout(dagreGraph)

    // Normalize to origin (0,0) and compute bounding box
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
    const positions = {}
    sNodes.forEach(n => {
      const pos = dagreGraph.node(n.id)
      const size = nodeSizes[n.id]
      const x = pos.x - size.width / 2
      const y = pos.y - size.height / 2
      positions[n.id] = { x, y }
      minX = Math.min(minX, x)
      minY = Math.min(minY, y)
      maxX = Math.max(maxX, x + size.width)
      maxY = Math.max(maxY, y + size.height)
    })

    // Normalize all positions so section starts at (0,0)
    const layoutedSectionNodes = sNodes.map(n => ({
      ...n,
      position: {
        x: positions[n.id].x - minX,
        y: positions[n.id].y - minY,
      }
    }))

    sectionBounds.push({
      width: maxX - minX,
      height: maxY - minY,
      nodes: layoutedSectionNodes
    })
  })

  // ── Step 5: Arrange sections in a grid ──
  const COLUMNS = Math.min(4, Math.ceil(Math.sqrt(sectionBounds.length)))
  const SECTION_GAP_X = 120
  const SECTION_GAP_Y = 100
  const START_Y_OFFSET = 120  // Space for the start node above the grid

  // Calculate column widths and row heights
  const colWidths = new Array(COLUMNS).fill(0)
  const rows = []
  for (let i = 0; i < sectionBounds.length; i += COLUMNS) {
    rows.push(sectionBounds.slice(i, i + COLUMNS))
  }

  rows.forEach(row => {
    row.forEach((section, colIdx) => {
      colWidths[colIdx] = Math.max(colWidths[colIdx], section.width)
    })
  })

  const rowHeights = rows.map(row => Math.max(...row.map(s => s.height)))

  // Compute x/y offsets per grid cell
  const colOffsets = [0]
  for (let c = 1; c < COLUMNS; c++) {
    colOffsets[c] = colOffsets[c - 1] + colWidths[c - 1] + SECTION_GAP_X
  }
  const rowOffsets = [START_Y_OFFSET]
  for (let r = 1; r < rowHeights.length; r++) {
    rowOffsets[r] = rowOffsets[r - 1] + rowHeights[r - 1] + SECTION_GAP_Y
  }

  // Place all section nodes at their grid positions
  const allLayoutedNodes = []
  sectionBounds.forEach((section, sIdx) => {
    const rowIdx = Math.floor(sIdx / COLUMNS)
    const colIdx = sIdx % COLUMNS
    const offsetX = colOffsets[colIdx]
    const offsetY = rowOffsets[rowIdx]

    section.nodes.forEach(n => {
      allLayoutedNodes.push({
        ...n,
        position: {
          x: n.position.x + offsetX,
          y: n.position.y + offsetY,
        }
      })
    })
  })

  // ── Step 6: Place start and end nodes ──
  const totalGridWidth = colOffsets[COLUMNS - 1] + colWidths[COLUMNS - 1]

  if (startNode) {
    allLayoutedNodes.push({
      ...startNode,
      position: {
        x: totalGridWidth / 2 - 80,
        y: 0,
      }
    })
  }

  if (endNode) {
    const lastRowBottom = rowOffsets[rowOffsets.length - 1] + rowHeights[rowHeights.length - 1]
    allLayoutedNodes.push({
      ...endNode,
      position: {
        x: totalGridWidth / 2 - 80,
        y: lastRowBottom + SECTION_GAP_Y,
      }
    })
  }

  return { nodes: allLayoutedNodes, edges }
}

// Helper para detectar cruce de líneas
function linesCross(x1, y1, x2, y2, x3, y3, x4, y4) {
  const denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1)
  if (denom === 0) return false
  
  const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denom
  const ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denom
  
  return ua > 0 && ua < 1 && ub > 0 && ub < 1
}
