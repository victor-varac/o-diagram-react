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

// Helper para detectar cruce de líneas
function linesCross(x1, y1, x2, y2, x3, y3, x4, y4) {
  const denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1)
  if (denom === 0) return false
  
  const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denom
  const ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denom
  
  return ua > 0 && ua < 1 && ub > 0 && ub < 1
}
