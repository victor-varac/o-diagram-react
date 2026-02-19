const requisicionRolFlow = {
  nodes: [
    // INICIO
    { id: 'start', type: 'input', position: { x: 400, y: 0 }, data: { label: '👥 Reclutadora\nRequisiciones' }, className: 'node-recruitment' },

    // === SECCIÓN 1: RECEPCIÓN DE REQUISICIÓN ===
    { id: 'section_recepcion', type: 'default', position: { x: 400, y: 120 }, data: { label: '📋 RECEPCIÓN DE\nREQUISICIÓN' }, className: 'node-hotel' },
    { id: 'hotel_solicita', type: 'default', position: { x: 200, y: 240 }, data: { label: '👨‍💼 Manager Hotel\nNecesita Personal' }, className: 'node-hotel' },
    { id: 'crear_req', type: 'default', position: { x: 400, y: 240 }, data: { label: '📋 Crear\nRequisición' }, className: 'node-hotel' },
    { id: 'calc_priority', type: 'default', position: { x: 600, y: 240 }, data: { label: 'Calcular\nAnticipación' }, className: 'node-info' },

    // Prioridades
    { id: 'priority_green', type: 'default', position: { x: 800, y: 160 }, data: { label: '🟢 VERDE\n>120h Normal' }, className: 'node-success' },
    { id: 'priority_yellow', type: 'default', position: { x: 800, y: 240 }, data: { label: '🟡 AMARILLO\n72-120h Media' }, className: 'node-warning' },
    { id: 'priority_red', type: 'default', position: { x: 800, y: 320 }, data: { label: '🔴 ROJO\n<72h Urgente' }, className: 'node-critical' },

    // Serial y contrato
    { id: 'gen_serial', type: 'default', position: { x: 1000, y: 240 }, data: { label: 'Generar Serial\n#' }, className: 'node-info' },

    // === SECCIÓN 2: COSTOS Y CONTRATOS ===
    { id: 'section_costos', type: 'default', position: { x: 1000, y: 380 }, data: { label: '💰 COSTOS Y\nCONTRATOS' }, className: 'node-accounting' },
    { id: 'get_contract', type: 'default', position: { x: 850, y: 480 }, data: { label: '📄 Service\nContract' }, className: 'node-accounting' },
    { id: 'get_rates', type: 'default', position: { x: 1000, y: 480 }, data: { label: '💰 Bill & Pay\nRate' }, className: 'node-accounting' },
    { id: 'bill_rate', type: 'default', position: { x: 850, y: 580 }, data: { label: '🏨→Orange\n~$19.58/hr' }, className: 'node-hotel' },
    { id: 'pay_rate', type: 'default', position: { x: 1000, y: 580 }, data: { label: 'Orange→Emp\n~$15/hr' }, className: 'node-success' },
    { id: 'calc_cost', type: 'default', position: { x: 1150, y: 480 }, data: { label: '📊 Costos\nProyectados' }, className: 'node-accounting' },
    { id: 'calc_margin', type: 'default', position: { x: 1150, y: 580 }, data: { label: 'Validar\nMargen %' }, className: 'node-accounting' },
    { id: 'margin_ok', type: 'default', position: { x: 1150, y: 680 }, data: { label: '🟢 Margen 30-35%\n($4.58/hr ejemplo)' }, className: 'node-success' },
    { id: 'to_accounting', type: 'default', position: { x: 1000, y: 680 }, data: { label: '💰 Dashboard\nMónica' }, className: 'node-accounting' },

    // === SECCIÓN 3: BÚSQUEDA EN POOLS ===
    { id: 'section_busqueda', type: 'default', position: { x: 200, y: 380 }, data: { label: '🔍 BÚSQUEDA\nEN POOLS' }, className: 'node-recruitment' },
    { id: 'search', type: 'default', position: { x: 200, y: 480 }, data: { label: '🔍 Búsqueda\nen Pools' }, className: 'node-recruitment' },
    { id: 'filters', type: 'default', position: { x: 200, y: 580 }, data: { label: '⚙️ Filtros\nAutomáticos' }, className: 'node-info' },
    { id: 'distance', type: 'default', position: { x: 50, y: 680 }, data: { label: '📍 Distancia\n≤30 min' }, className: 'node-info' },
    { id: 'availability', type: 'default', position: { x: 200, y: 680 }, data: { label: '📅 Disponibilidad' }, className: 'node-info' },
    { id: 'blacklist', type: 'default', position: { x: 350, y: 680 }, data: { label: '🚫 No Black List' }, className: 'node-warning' },
    { id: 'matches', type: 'default', position: { x: 200, y: 780 }, data: { label: '✅ Matches\nOrdenados' }, className: 'node-success' },

    // === SECCIÓN 4: ASIGNACIÓN ===
    { id: 'section_asignacion', type: 'default', position: { x: 200, y: 900 }, data: { label: '📌 ASIGNACIÓN\nDE PERSONAL' }, className: 'node-recruitment' },
    { id: 'assign', type: 'default', position: { x: 50, y: 1000 }, data: { label: '📌 Asignar\nEmpleados' }, className: 'node-recruitment' },
    { id: 'notify_emp', type: 'default', position: { x: 200, y: 1000 }, data: { label: '📱 Notificar\nEmpleado' }, className: 'node-info' },
    { id: 'emp_decision', type: 'default', position: { x: 350, y: 1000 }, data: { label: 'Empleado\nDecide' }, className: 'node-warning' },
    { id: 'accepts', type: 'default', position: { x: 500, y: 950 }, data: { label: '✅ Acepta' }, className: 'node-success' },
    { id: 'rejects', type: 'default', position: { x: 500, y: 1050 }, data: { label: '❌ Rechaza' }, className: 'node-critical' },

    // === SECCIÓN 5: SEGUIMIENTO ===
    { id: 'complete', type: 'default', position: { x: 650, y: 950 }, data: { label: '📋 Requisición\nCOMPLETADA' }, className: 'node-success' },
    { id: 'tracking', type: 'default', position: { x: 650, y: 1050 }, data: { label: '📍 Tracking\nTiempo Real' }, className: 'node-info' },
    { id: 'show', type: 'default', position: { x: 800, y: 950 }, data: { label: '✅ Presentó\nÉxito' }, className: 'node-success' },
    { id: 'no_show', type: 'default', position: { x: 800, y: 1050 }, data: { label: '❌ NO-SHOW\nPenalización' }, className: 'node-critical' },
  ],
  edges: [
    // Inicio
    { id: 'e1', source: 'start', target: 'section_recepcion' },

    // Recepción
    { id: 'e2', source: 'section_recepcion', target: 'hotel_solicita' },
    { id: 'e2b', source: 'section_recepcion', target: 'crear_req' },
    { id: 'e3', source: 'hotel_solicita', target: 'crear_req' },
    { id: 'e4', source: 'crear_req', target: 'calc_priority' },
    { id: 'e5', source: 'calc_priority', target: 'priority_green', label: '>120h' },
    { id: 'e6', source: 'calc_priority', target: 'priority_yellow', label: '72-120h' },
    { id: 'e7', source: 'calc_priority', target: 'priority_red', label: '<72h' },
    { id: 'e8', source: 'priority_green', target: 'gen_serial' },
    { id: 'e9', source: 'priority_yellow', target: 'gen_serial' },
    { id: 'e10', source: 'priority_red', target: 'gen_serial' },

    // Costos
    { id: 'e11', source: 'gen_serial', target: 'section_costos' },
    { id: 'e12', source: 'section_costos', target: 'get_contract' },
    { id: 'e13', source: 'get_contract', target: 'get_rates' },
    { id: 'e14', source: 'get_rates', target: 'bill_rate' },
    { id: 'e15', source: 'get_rates', target: 'pay_rate' },
    { id: 'e16', source: 'get_rates', target: 'calc_cost' },
    { id: 'e17', source: 'calc_cost', target: 'calc_margin' },
    { id: 'e18', source: 'calc_margin', target: 'margin_ok' },
    { id: 'e19', source: 'calc_margin', target: 'to_accounting', animated: true },

    // Búsqueda
    { id: 'e20', source: 'gen_serial', target: 'section_busqueda' },
    { id: 'e21', source: 'section_busqueda', target: 'search' },
    { id: 'e22', source: 'search', target: 'filters' },
    { id: 'e23', source: 'filters', target: 'distance' },
    { id: 'e24', source: 'filters', target: 'availability' },
    { id: 'e25', source: 'filters', target: 'blacklist' },
    { id: 'e26', source: 'distance', target: 'matches' },
    { id: 'e27', source: 'availability', target: 'matches' },
    { id: 'e28', source: 'blacklist', target: 'matches' },

    // Asignación
    { id: 'e29', source: 'matches', target: 'section_asignacion' },
    { id: 'e30', source: 'section_asignacion', target: 'assign' },
    { id: 'e31', source: 'assign', target: 'notify_emp' },
    { id: 'e32', source: 'notify_emp', target: 'emp_decision' },
    { id: 'e33', source: 'emp_decision', target: 'accepts' },
    { id: 'e34', source: 'emp_decision', target: 'rejects' },
    { id: 'e35', source: 'rejects', target: 'search', label: 'Buscar otro', style: { stroke: '#c62828' } },

    // Seguimiento
    { id: 'e36', source: 'accepts', target: 'complete' },
    { id: 'e37', source: 'complete', target: 'tracking' },
    { id: 'e38', source: 'tracking', target: 'show' },
    { id: 'e39', source: 'tracking', target: 'no_show' },
  ]
}

export default requisicionRolFlow
