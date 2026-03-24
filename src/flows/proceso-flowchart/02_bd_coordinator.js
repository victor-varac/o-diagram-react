const bdCoordinatorFlowchartFlow = {
  nodes: [
    // INICIO
    { id: 'start', type: 'input', position: { x: 400, y: 0 }, data: { label: '📋 BD Coordinator\n(BDC User)' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 1: GESTIÓN DE ÁREAS Y RUTAS
    // ═══════════════════════════════════════════════════════
    { id: 'section_routes', type: 'default', position: { x: 100, y: 150 }, data: { label: '🗺️ GESTIÓN DE\nÁREAS Y RUTAS' }, className: 'node-warning' },
    { id: 'create_areas', type: 'default', position: { x: 50, y: 280 }, data: { label: '📍 Crear Áreas\ny Territorios' }, className: 'node-info' },
    { id: 'create_routes', type: 'default', position: { x: 200, y: 280 }, data: { label: '🛣️ Crear Nuevas\nRutas' }, className: 'node-info' },
    { id: 'assign_route', type: 'default', position: { x: 100, y: 400 }, data: { label: '🎯 Asignar Zona/Territorio\na Business Developer' }, className: 'node-success' },
    { id: 'review_strategy', type: 'default', position: { x: 100, y: 520 }, data: { label: '📊 Revisar Estrategia\nde Ventas + Datos\nGeográficos' }, className: 'node-info' },
    { id: 'optimal_coverage', type: 'default', position: { x: 100, y: 650 }, data: { label: '✅ Cobertura Óptima\nde Territorios' }, className: 'node-success' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 2: MONITOREO
    // ═══════════════════════════════════════════════════════
    { id: 'section_monitor', type: 'default', position: { x: 400, y: 150 }, data: { label: '📡 MONITOREO\nDE BDs' }, className: 'node-warning' },
    { id: 'live_tracking', type: 'default', position: { x: 400, y: 280 }, data: { label: '🗺️ Live Tracking Map\nBusiness Developers' }, className: 'node-info' },
    { id: 'monitor_adjust', type: 'default', position: { x: 400, y: 400 }, data: { label: '🔄 Monitorear y\nAjustar Rutas' }, className: 'node-warning' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 3: GESTIÓN DE PROSPECTOS
    // ═══════════════════════════════════════════════════════
    { id: 'section_prospects', type: 'default', position: { x: 700, y: 150 }, data: { label: '🏨 GESTIÓN DE\nPROSPECTOS' }, className: 'node-warning' },
    { id: 'review_prospects', type: 'default', position: { x: 700, y: 280 }, data: { label: '🔍 Revisar Prospectos\ncreados por BDs' }, className: 'node-info' },
    { id: 'set_status', type: 'default', position: { x: 700, y: 400 }, data: { label: '📊 Establecer Status\npor Prospecto' }, className: 'node-info' },
    { id: 'move_to_client', type: 'default', position: { x: 700, y: 520 }, data: { label: '⭐ Mover Prospecto\n→ CLIENTE' }, className: 'node-success' },
    { id: 'transition_note', type: 'default', position: { x: 700, y: 650 }, data: { label: '⚠️ Hotel desaparece\nde BD/BDC\n→ Pasa a QA + Recruiters' }, className: 'node-critical' },

    // NOTA IMPORTANTE
    { id: 'note_bd', type: 'default', position: { x: 350, y: 780 }, data: { label: '📝 BD crea áreas, rutas,\nprospectos de hoteles y\nestablece status por prospecto' }, className: 'node-info' },
  ],
  edges: [
    // Start → Secciones
    { id: 'e1', source: 'start', target: 'section_routes' },
    { id: 'e2', source: 'start', target: 'section_monitor' },
    { id: 'e3', source: 'start', target: 'section_prospects' },

    // Rutas
    { id: 'e4', source: 'section_routes', target: 'create_areas' },
    { id: 'e5', source: 'section_routes', target: 'create_routes' },
    { id: 'e6', source: 'create_areas', target: 'assign_route' },
    { id: 'e7', source: 'create_routes', target: 'assign_route' },
    { id: 'e8', source: 'assign_route', target: 'review_strategy' },
    { id: 'e9', source: 'review_strategy', target: 'optimal_coverage' },

    // Monitoreo
    { id: 'e10', source: 'section_monitor', target: 'live_tracking' },
    { id: 'e11', source: 'live_tracking', target: 'monitor_adjust' },

    // Prospectos
    { id: 'e12', source: 'section_prospects', target: 'review_prospects' },
    { id: 'e13', source: 'review_prospects', target: 'set_status' },
    { id: 'e14', source: 'set_status', target: 'move_to_client', animated: true, label: 'Aprobado' },
    { id: 'e15', source: 'move_to_client', target: 'transition_note', style: { stroke: '#c62828' } },

    // Nota
    { id: 'e16', source: 'optimal_coverage', target: 'note_bd', style: { strokeDasharray: '5,5' } },
    { id: 'e17', source: 'monitor_adjust', target: 'note_bd', style: { strokeDasharray: '5,5' } },
  ]
}

export default bdCoordinatorFlowchartFlow
