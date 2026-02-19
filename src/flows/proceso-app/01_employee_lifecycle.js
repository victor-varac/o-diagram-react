const employeeLifecycleFlowApp = {
  nodes: [
    // Self-service application
    { id: 'start', type: 'input', position: { x: 50, y: 50 }, data: { label: '📱 Persona Aplica\nFormulario Web' }, className: 'node-automated' },
    { id: 'chatbot', type: 'default', position: { x: 250, y: 50 }, data: { label: '🤖 Chatbot\nScreening Inicial' }, className: 'node-automated' },
    { id: 'auto_blacklist', type: 'default', position: { x: 450, y: 50 }, data: { label: '⚡ Búsqueda Auto\nBlack List' }, className: 'node-automated' },
    { id: 'rejected', type: 'default', position: { x: 650, y: 50 }, data: { label: '❌ RECHAZADO\nNo puede registrarse' }, className: 'node-critical' },
    
    { id: 'auto_pool', type: 'default', position: { x: 450, y: 150 }, data: { label: '⚡ Pool Recepción\nAutomático' }, className: 'node-automated' },
    { id: 'ai_matching', type: 'default', position: { x: 450, y: 250 }, data: { label: '🤖 IA Matching\nRequisiciones' }, className: 'node-automated' },
    { id: 'auto_assigned', type: 'default', position: { x: 450, y: 350 }, data: { label: '⚡ Asignado Auto\na Requisición' }, className: 'node-automated' },
    { id: 'notif_candidate', type: 'default', position: { x: 650, y: 350 }, data: { label: '📲 Notificación\nCandidato' }, className: 'node-automated' },
    { id: 'notif_recruiter', type: 'default', position: { x: 650, y: 430 }, data: { label: '📲 Notificación\nReclutadora' }, className: 'node-automated' },
    
    // Employee type decision
    { id: 'emp_type_decision', type: 'default', position: { x: 50, y: 500 }, data: { label: '👤 Tipo de\nEmpleado' }, className: 'node-human' },
    { id: 'contratista_path', type: 'default', position: { x: 250, y: 450 }, data: { label: '👔 CONTRATISTA' }, className: 'node-success' },
    { id: 'directa_path', type: 'default', position: { x: 250, y: 550 }, data: { label: '👤 PERSONA DIRECTA' }, className: 'node-success' },
    { id: 'both_orange', type: 'default', position: { x: 450, y: 500 }, data: { label: '💰 Ambos empleados\nde Orange Staffing' }, className: 'node-accounting' },
    
    // Digital application
    { id: 'app_0', type: 'default', position: { x: 50, y: 650 }, data: { label: '📱 Aplicación 0%\nPortal Web/App' }, className: 'node-automated' },
    { id: 'app_30', type: 'default', position: { x: 250, y: 650 }, data: { label: '⚡ Aplicación 30%\nAuto-guardado' }, className: 'node-automated' },
    { id: 'digital_docs', type: 'default', position: { x: 450, y: 600 }, data: { label: '📱 Docs Digitales\nWaiver + Handbook' }, className: 'node-automated' },
    { id: 'e_signature', type: 'default', position: { x: 450, y: 700 }, data: { label: '✍️ Firma\nElectrónica' }, className: 'node-automated' },
    
    // Day 1 (hybrid)
    { id: 'auto_schedule', type: 'default', position: { x: 650, y: 650 }, data: { label: '⚡ Cita Auto\nCoordinada' }, className: 'node-automated' },
    { id: 'day_1', type: 'default', position: { x: 850, y: 650 }, data: { label: '👤 Día 1 - 8:00 AM\nInspector Presencial' }, className: 'node-human' },
    { id: 'onboarding', type: 'default', position: { x: 1050, y: 650 }, data: { label: '👤 Inspector\nAyuda Completar' }, className: 'node-human' },
    { id: 'working', type: 'default', position: { x: 850, y: 800 }, data: { label: '👔 Empleado Activo\nTrabajando' }, className: 'node-success' },
    
    // Automated 72h tracking
    { id: 'auto_timeline', type: 'default', position: { x: 1050, y: 800 }, data: { label: '⚡ Timeline 72h\nAutomático' }, className: 'node-automated' },
    { id: 'r24h', type: 'default', position: { x: 1050, y: 900 }, data: { label: '🤖 24h: Push +\nSMS + Email' }, className: 'node-automated' },
    { id: 'r48h', type: 'default', position: { x: 1050, y: 980 }, data: { label: '🤖 48h: Alerta\n🟠 NARANJA' }, className: 'node-automated' },
    { id: 'r72h', type: 'default', position: { x: 1050, y: 1060 }, data: { label: '⚠️ 72h: Inspector\nLlamada Manual' }, className: 'node-human' },
    
    { id: 'auto_check_60', type: 'default', position: { x: 850, y: 1000 }, data: { label: '⚡ Sistema Valida\n≥60%?' }, className: 'node-automated' },
    { id: 'strike', type: 'default', position: { x: 650, y: 1050 }, data: { label: '❌ Strike Auto\nInspector' }, className: 'node-critical' },
    
    // Auto payment setup
    { id: 'payment_portal', type: 'default', position: { x: 650, y: 950 }, data: { label: '📱 Portal: Setup\nMétodo Pago' }, className: 'node-automated' },
    { id: 'plaid_integration', type: 'default', position: { x: 450, y: 900 }, data: { label: '⚡ Plaid: Validación\nBancaria Instant' }, className: 'node-automated' },
    { id: 'check_option', type: 'default', position: { x: 450, y: 1000 }, data: { label: '📱 Opción Cheque\nSelf-Service' }, className: 'node-automated' },
    { id: 'ready_pay', type: 'default', position: { x: 250, y: 950 }, data: { label: '✅ Validado Auto\npara pago' }, className: 'node-automated' },
    { id: 'payroll_note', type: 'default', position: { x: 250, y: 1050 }, data: { label: '💰 Nómina Orange\nDom-Sáb, pago Viernes' }, className: 'node-accounting' },
    { id: 'green_status', type: 'default', position: { x: 50, y: 1000 }, data: { label: '🟢 STATUS VERDE\nDashboard Auto' }, className: 'node-automated' },
    
    // Automated uniform flow
    { id: 'uniform_trigger', type: 'default', position: { x: 50, y: 1150 }, data: { label: '⚡ Día 3/5 Trigger\nAutomático' }, className: 'node-automated' },
    { id: 'inspector_notif', type: 'default', position: { x: 250, y: 1150 }, data: { label: '📲 Inspector\nNotificado' }, className: 'node-automated' },
    { id: 'accounting_auto', type: 'default', position: { x: 450, y: 1150 }, data: { label: '⚡ Contabilidad\nSync Automático' }, className: 'node-automated' },
    { id: 'collab_pool', type: 'default', position: { x: 650, y: 1150 }, data: { label: '🎯 Pool de\nColaboradores' }, className: 'node-success' },
    
    // Self-service vacation
    { id: 'vacation_app', type: 'default', position: { x: 50, y: 1300 }, data: { label: '📱 Vacaciones\nSelf-Service App' }, className: 'node-automated' },
    { id: 'auto_eligibility', type: 'default', position: { x: 250, y: 1300 }, data: { label: '⚡ Validación Auto\n52 semanas' }, className: 'node-automated' },
    { id: 'request_flow', type: 'default', position: { x: 450, y: 1300 }, data: { label: '🤖 Workflow\nAprobación' }, className: 'node-automated' },
    
    // Auto blacklist
    { id: 'incident_trigger', type: 'default', position: { x: 650, y: 1300 }, data: { label: '⚠️ Incidente\nGrave Reportado' }, className: 'node-warning' },
    { id: 'direction_approve', type: 'default', position: { x: 850, y: 1300 }, data: { label: '👤 Dirección\nAprueba Black List' }, className: 'node-human' },
    { id: 'blacklist_final', type: 'default', position: { x: 1050, y: 1300 }, data: { label: '⚡ Sistema Actualiza\nBlack List' }, className: 'node-automated' },
  ],
  edges: [
    // Application flow
    { id: 'e1', source: 'start', target: 'chatbot', animated: true },
    { id: 'e2', source: 'chatbot', target: 'auto_blacklist', animated: true },
    { id: 'e3', source: 'auto_blacklist', target: 'rejected', label: 'Encontrado' },
    { id: 'e4', source: 'auto_blacklist', target: 'auto_pool', label: 'OK', animated: true },
    { id: 'e5', source: 'auto_pool', target: 'ai_matching', animated: true },
    { id: 'e6', source: 'ai_matching', target: 'auto_assigned', animated: true },
    { id: 'e7', source: 'auto_assigned', target: 'notif_candidate', animated: true },
    { id: 'e8', source: 'auto_assigned', target: 'notif_recruiter', animated: true },
    
    // Employee type
    { id: 'e9', source: 'auto_assigned', target: 'emp_type_decision' },
    { id: 'e10', source: 'emp_type_decision', target: 'contratista_path', label: 'Temporal' },
    { id: 'e11', source: 'emp_type_decision', target: 'directa_path', label: 'Directo' },
    { id: 'e12', source: 'contratista_path', target: 'both_orange' },
    { id: 'e13', source: 'directa_path', target: 'both_orange' },
    
    // Digital application
    { id: 'e14', source: 'both_orange', target: 'app_0', animated: true },
    { id: 'e15', source: 'app_0', target: 'app_30', animated: true },
    { id: 'e16', source: 'app_30', target: 'digital_docs', animated: true },
    { id: 'e17', source: 'app_30', target: 'e_signature', animated: true },
    { id: 'e18', source: 'digital_docs', target: 'auto_schedule', animated: true },
    { id: 'e19', source: 'e_signature', target: 'auto_schedule', animated: true },
    
    // Day 1
    { id: 'e20', source: 'auto_schedule', target: 'day_1', animated: true },
    { id: 'e21', source: 'day_1', target: 'onboarding' },
    { id: 'e22', source: 'onboarding', target: 'working' },
    
    // Automated tracking
    { id: 'e23', source: 'working', target: 'auto_timeline', animated: true },
    { id: 'e24', source: 'auto_timeline', target: 'r24h', animated: true },
    { id: 'e25', source: 'r24h', target: 'r48h', animated: true },
    { id: 'e26', source: 'r48h', target: 'r72h' },
    { id: 'e27', source: 'r72h', target: 'auto_check_60', animated: true },
    { id: 'e28', source: 'auto_check_60', target: 'strike', label: '<60%' },
    { id: 'e29', source: 'auto_check_60', target: 'payment_portal', label: '≥60%', animated: true },
    
    // Payment setup
    { id: 'e30', source: 'payment_portal', target: 'plaid_integration', label: 'Transfer', animated: true },
    { id: 'e31', source: 'payment_portal', target: 'check_option', label: 'Check', animated: true },
    { id: 'e32', source: 'plaid_integration', target: 'ready_pay', animated: true },
    { id: 'e33', source: 'check_option', target: 'ready_pay', animated: true },
    { id: 'e34', source: 'ready_pay', target: 'payroll_note' },
    { id: 'e35', source: 'ready_pay', target: 'green_status', animated: true },
    
    // Uniform
    { id: 'e36', source: 'green_status', target: 'uniform_trigger', animated: true },
    { id: 'e37', source: 'uniform_trigger', target: 'inspector_notif', animated: true },
    { id: 'e38', source: 'inspector_notif', target: 'accounting_auto', animated: true },
    { id: 'e39', source: 'accounting_auto', target: 'collab_pool', animated: true },
    
    // Vacation
    { id: 'e40', source: 'collab_pool', target: 'vacation_app', style: { strokeDasharray: '5,5' } },
    { id: 'e41', source: 'vacation_app', target: 'auto_eligibility', animated: true },
    { id: 'e42', source: 'auto_eligibility', target: 'request_flow', animated: true },
    
    // Blacklist
    { id: 'e43', source: 'collab_pool', target: 'incident_trigger', style: { strokeDasharray: '5,5' } },
    { id: 'e44', source: 'incident_trigger', target: 'direction_approve' },
    { id: 'e45', source: 'direction_approve', target: 'blacklist_final', label: 'Aprueba', animated: true },
  ]
}

export default employeeLifecycleFlowApp
