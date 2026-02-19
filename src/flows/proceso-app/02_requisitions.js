const requisitionsFlowApp = {
  nodes: [
    // Self-service portal
    { id: 'start', type: 'input', position: { x: 50, y: 50 }, data: { label: '📱 Manager Hotel\nPortal Self-Service' }, className: 'node-automated' },
    { id: 'auto_create', type: 'default', position: { x: 250, y: 50 }, data: { label: '⚡ Crear Requisición\nFormulario Guiado' }, className: 'node-automated' },
    { id: 'auto_priority', type: 'default', position: { x: 450, y: 50 }, data: { label: '🤖 Cálculo Auto\nPrioridad' }, className: 'node-automated' },
    
    { id: 'priority_green', type: 'default', position: { x: 650, y: 0 }, data: { label: '🟢 VERDE\n>120h Normal' }, className: 'node-success' },
    { id: 'priority_yellow', type: 'default', position: { x: 650, y: 70 }, data: { label: '🟡 AMARILLO\n72-120h Media' }, className: 'node-warning' },
    { id: 'priority_red', type: 'default', position: { x: 650, y: 140 }, data: { label: '🔴 ROJO\n<72h Urgente' }, className: 'node-critical' },
    
    { id: 'auto_serial', type: 'default', position: { x: 850, y: 70 }, data: { label: '⚡ Serial #\nAutomático' }, className: 'node-automated' },
    
    // Auto rates lookup
    { id: 'auto_contract', type: 'default', position: { x: 1050, y: 20 }, data: { label: '⚡ Contract\nAuto-Lookup' }, className: 'node-automated' },
    { id: 'auto_rates', type: 'default', position: { x: 1050, y: 100 }, data: { label: '🤖 Rates\nAuto-Aplicados' }, className: 'node-automated' },
    { id: 'bill_rate', type: 'default', position: { x: 50, y: 250 }, data: { label: '🏨→Orange\n~$19.58/hr' }, className: 'node-hotel' },
    { id: 'pay_rate', type: 'default', position: { x: 150, y: 250 }, data: { label: 'Orange→Emp\n~$15/hr' }, className: 'node-success' },
    { id: 'auto_cost', type: 'default', position: { x: 300, y: 250 }, data: { label: '⚡ Costos Auto\nCalculados' }, className: 'node-automated' },
    { id: 'auto_margin', type: 'default', position: { x: 500, y: 250 }, data: { label: '🤖 Validación\nMargen Auto' }, className: 'node-automated' },
    { id: 'margin_ok', type: 'default', position: { x: 700, y: 250 }, data: { label: '🟢 Margen 30-35%\n($4.58/hr)' }, className: 'node-success' },
    { id: 'dashboard_monica', type: 'default', position: { x: 900, y: 250 }, data: { label: '📊 Dashboard Mónica\nTiempo Real' }, className: 'node-automated' },
    
    // AI matching
    { id: 'ai_search', type: 'default', position: { x: 50, y: 400 }, data: { label: '🤖 IA Búsqueda\nInteligente' }, className: 'node-automated' },
    { id: 'auto_filters', type: 'default', position: { x: 250, y: 400 }, data: { label: '⚡ Filtros\nAutomáticos' }, className: 'node-automated' },
    
    { id: 'distance', type: 'default', position: { x: 450, y: 350 }, data: { label: '🗺️ GPS Distancia\n≤30 min' }, className: 'node-automated' },
    { id: 'availability', type: 'default', position: { x: 450, y: 420 }, data: { label: '📅 Disponibilidad\nCalendario' }, className: 'node-automated' },
    { id: 'blacklist', type: 'default', position: { x: 450, y: 490 }, data: { label: '⚡ Check Auto\nBlack List' }, className: 'node-automated' },
    { id: 'rating', type: 'default', position: { x: 450, y: 560 }, data: { label: '⭐ Score/Rating\nHistórico' }, className: 'node-automated' },
    
    { id: 'ai_ranking', type: 'default', position: { x: 650, y: 450 }, data: { label: '🤖 IA Ranking\nMejores Matches' }, className: 'node-automated' },
    
    // Auto assignment
    { id: 'auto_assign', type: 'default', position: { x: 850, y: 450 }, data: { label: '⚡ Asignación\nAutomática' }, className: 'node-automated' },
    { id: 'notif_emp', type: 'default', position: { x: 1050, y: 400 }, data: { label: '📲 Push Notif\nEmpleado' }, className: 'node-automated' },
    { id: 'notif_recruiter', type: 'default', position: { x: 1050, y: 480 }, data: { label: '📲 Notif\nReclutadora' }, className: 'node-automated' },
    
    { id: 'emp_app_decision', type: 'default', position: { x: 850, y: 600 }, data: { label: '📱 Empleado Responde\nen App' }, className: 'node-automated' },
    { id: 'accepts', type: 'default', position: { x: 1050, y: 560 }, data: { label: '✅ Acepta' }, className: 'node-success' },
    { id: 'rejects', type: 'default', position: { x: 1050, y: 640 }, data: { label: '❌ Rechaza\nNext Match' }, className: 'node-warning' },
    
    { id: 'auto_complete', type: 'default', position: { x: 50, y: 750 }, data: { label: '⚡ Requisición\nAuto-Cerrada' }, className: 'node-automated' },
    { id: 'gps_tracking', type: 'default', position: { x: 250, y: 750 }, data: { label: '📍 GPS Tracking\nTiempo Real' }, className: 'node-automated' },
    { id: 'geofence', type: 'default', position: { x: 450, y: 750 }, data: { label: '🗺️ Geofence\nCheck-in Auto' }, className: 'node-automated' },
    { id: 'show', type: 'default', position: { x: 650, y: 700 }, data: { label: '✅ Check-in\nExitoso' }, className: 'node-success' },
    { id: 'no_show_alert', type: 'default', position: { x: 650, y: 800 }, data: { label: '⚠️ Alerta\nNo Check-in' }, className: 'node-warning' },
    { id: 'auto_penalty', type: 'default', position: { x: 850, y: 800 }, data: { label: '❌ Penalización\nAutomática' }, className: 'node-critical' },
  ],
  edges: [
    // Self-service creation
    { id: 'e1', source: 'start', target: 'auto_create', animated: true },
    { id: 'e2', source: 'auto_create', target: 'auto_priority', animated: true },
    { id: 'e3', source: 'auto_priority', target: 'priority_green', label: '>120h', animated: true },
    { id: 'e4', source: 'auto_priority', target: 'priority_yellow', label: '72-120h', animated: true },
    { id: 'e5', source: 'auto_priority', target: 'priority_red', label: '<72h', animated: true },
    { id: 'e6', source: 'priority_green', target: 'auto_serial', animated: true },
    { id: 'e7', source: 'priority_yellow', target: 'auto_serial', animated: true },
    { id: 'e8', source: 'priority_red', target: 'auto_serial', animated: true },
    
    // Auto rates
    { id: 'e9', source: 'auto_serial', target: 'auto_contract', animated: true },
    { id: 'e10', source: 'auto_contract', target: 'auto_rates', animated: true },
    { id: 'e11', source: 'auto_rates', target: 'bill_rate', animated: true },
    { id: 'e12', source: 'auto_rates', target: 'pay_rate', animated: true },
    { id: 'e13', source: 'bill_rate', target: 'auto_cost', animated: true },
    { id: 'e14', source: 'pay_rate', target: 'auto_cost', animated: true },
    { id: 'e15', source: 'auto_cost', target: 'auto_margin', animated: true },
    { id: 'e16', source: 'auto_margin', target: 'margin_ok', animated: true },
    { id: 'e17', source: 'margin_ok', target: 'dashboard_monica', animated: true },
    
    // AI matching
    { id: 'e18', source: 'auto_serial', target: 'ai_search', animated: true },
    { id: 'e19', source: 'ai_search', target: 'auto_filters', animated: true },
    { id: 'e20', source: 'auto_filters', target: 'distance', animated: true },
    { id: 'e21', source: 'auto_filters', target: 'availability', animated: true },
    { id: 'e22', source: 'auto_filters', target: 'blacklist', animated: true },
    { id: 'e23', source: 'auto_filters', target: 'rating', animated: true },
    { id: 'e24', source: 'distance', target: 'ai_ranking', animated: true },
    { id: 'e25', source: 'availability', target: 'ai_ranking', animated: true },
    { id: 'e26', source: 'blacklist', target: 'ai_ranking', animated: true },
    { id: 'e27', source: 'rating', target: 'ai_ranking', animated: true },
    
    // Auto assignment
    { id: 'e28', source: 'ai_ranking', target: 'auto_assign', animated: true },
    { id: 'e29', source: 'auto_assign', target: 'notif_emp', animated: true },
    { id: 'e30', source: 'auto_assign', target: 'notif_recruiter', animated: true },
    { id: 'e31', source: 'notif_emp', target: 'emp_app_decision', animated: true },
    { id: 'e32', source: 'emp_app_decision', target: 'accepts', label: 'Acepta', animated: true },
    { id: 'e33', source: 'emp_app_decision', target: 'rejects', label: 'Rechaza' },
    { id: 'e34', source: 'rejects', target: 'ai_ranking', style: { stroke: '#ff9800' }, animated: true },
    
    // Completion
    { id: 'e35', source: 'accepts', target: 'auto_complete', animated: true },
    { id: 'e36', source: 'auto_complete', target: 'gps_tracking', animated: true },
    { id: 'e37', source: 'gps_tracking', target: 'geofence', animated: true },
    { id: 'e38', source: 'geofence', target: 'show', label: 'Check-in', animated: true },
    { id: 'e39', source: 'geofence', target: 'no_show_alert', label: 'No show' },
    { id: 'e40', source: 'no_show_alert', target: 'auto_penalty', animated: true },
  ]
}

export default requisitionsFlowApp
