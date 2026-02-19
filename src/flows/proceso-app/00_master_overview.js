const masterOverviewFlowApp = {
  nodes: [
    // ACQUISITION (Automated)
    { id: 'crm', type: 'default', position: { x: 50, y: 50 }, data: { label: '⚡ CRM Automático\nLeads' }, className: 'node-automated' },
    { id: 'auto_prospecto', type: 'default', position: { x: 50, y: 150 }, data: { label: '🤖 Lead Scoring\nIA' }, className: 'node-automated' },
    { id: 'e_contract', type: 'default', position: { x: 50, y: 250 }, data: { label: '📱 Contrato Digital\ne-Signature' }, className: 'node-automated' },
    
    // HOTEL OPERATIONS (Self-service)
    { id: 'portal_manager', type: 'default', position: { x: 300, y: 50 }, data: { label: '📱 Manager Portal\nSelf-Service' }, className: 'node-automated' },
    { id: 'auto_requisicion', type: 'default', position: { x: 300, y: 150 }, data: { label: '⚡ Requisición\nFormulario Guiado' }, className: 'node-automated' },
    { id: 'rates', type: 'default', position: { x: 300, y: 250 }, data: { label: '⚡ Bill $19.58\nPay $15\nMargen 30-35% Auto' }, className: 'node-automated' },
    
    // RECRUITMENT (AI-powered)
    { id: 'web_form', type: 'default', position: { x: 550, y: 50 }, data: { label: '📱 Formulario Web\nSelf-Service' }, className: 'node-automated' },
    { id: 'chatbot', type: 'default', position: { x: 550, y: 150 }, data: { label: '🤖 Chatbot\nScreening' }, className: 'node-automated' },
    { id: 'ai_pool', type: 'default', position: { x: 550, y: 250 }, data: { label: '🤖 IA Matching\nAutomático' }, className: 'node-automated' },
    { id: 'blacklist_auto', type: 'default', position: { x: 700, y: 50 }, data: { label: '⚡ Black List\nCheck Auto' }, className: 'node-automated' },
    { id: 'emp_type', type: 'default', position: { x: 700, y: 200 }, data: { label: '👥 2 Tipos:\nContratista/Directa\nAmbos Orange' }, className: 'node-warning' },
    
    // EMPLOYEE LIFECYCLE (Hybrid)
    { id: 'app_digital', type: 'default', position: { x: 800, y: 50 }, data: { label: '📱 Aplicación Digital\n30% Auto-guardado' }, className: 'node-automated' },
    { id: 'inspector_hybrid', type: 'default', position: { x: 800, y: 150 }, data: { label: '👤 Inspector Día 1\n+ ⚡ Tracking Auto' }, className: 'node-hybrid' },
    { id: 'working', type: 'default', position: { x: 800, y: 250 }, data: { label: '👔 Trabajando\n⚡ Dashboard Auto' }, className: 'node-automated' },
    
    // QUALITY (Semi-automated)
    { id: 'inspector_app', type: 'default', position: { x: 1000, y: 50 }, data: { label: '📱 Inspector App\nRutas GPS' }, className: 'node-automated' },
    { id: 'onboarding_auto', type: 'default', position: { x: 1000, y: 150 }, data: { label: '⚡ Onboarding\nCita Auto' }, className: 'node-automated' },
    { id: 'uniform_auto', type: 'default', position: { x: 1000, y: 250 }, data: { label: '⚡ Uniforme\nOrden Auto Día 3/5' }, className: 'node-automated' },
    
    // WORK WEEK (Fully automated)
    { id: 'payroll_note', type: 'default', position: { x: 50, y: 400 }, data: { label: '📅 Ciclo Dom-Sáb\nDesfase 1 sem' }, className: 'node-warning' },
    { id: 'auto_punch', type: 'default', position: { x: 50, y: 500 }, data: { label: '⚡ Ponchado Auto\nIntegrado' }, className: 'node-automated' },
    { id: 'portal_report', type: 'default', position: { x: 200, y: 500 }, data: { label: '📱 Reporte Hotel\nPortal Mié 11:59PM' }, className: 'node-automated' },
    { id: 'auto_hours', type: 'default', position: { x: 125, y: 600 }, data: { label: '⚡ Horas Auto\nValidadas' }, className: 'node-automated' },
    
    // ACCOUNTING (AI-powered)
    { id: 'ai_monica', type: 'default', position: { x: 350, y: 500 }, data: { label: '🤖 Mónica + IA\nDashboard Real-Time' }, className: 'node-automated' },
    { id: 'auto_dashboard', type: 'default', position: { x: 350, y: 600 }, data: { label: '⚡ 12 Validaciones\nAutomáticas' }, className: 'node-automated' },
    { id: 'auto_validation', type: 'default', position: { x: 500, y: 500 }, data: { label: '🤖 Auto-Corrección\nErrores Simples' }, className: 'node-automated' },
    { id: 'pre_approval', type: 'default', position: { x: 500, y: 600 }, data: { label: '👤 Pre-Aprobación\nSolo Excepciones' }, className: 'node-human' },
    
    // PAYROLL (Automated)
    { id: 'direccion', type: 'default', position: { x: 700, y: 500 }, data: { label: '👤 Silvia\nAprueba Final' }, className: 'node-human' },
    { id: 'approval', type: 'default', position: { x: 700, y: 600 }, data: { label: '⚡ Aprobación\nWorkflow' }, className: 'node-automated' },
    { id: 'processing', type: 'default', position: { x: 850, y: 500 }, data: { label: '⚡ Procesamiento\nAutomático Jue' }, className: 'node-automated' },
    { id: 'payment', type: 'default', position: { x: 850, y: 600 }, data: { label: '💰 Pago Auto\nViernes 5 AM' }, className: 'node-automated' },
    
    // BILLING (Automated)
    { id: 'auto_invoice', type: 'default', position: { x: 1050, y: 500 }, data: { label: '⚡ Invoice Auto\nGenerado' }, className: 'node-automated' },
    { id: 'payment_hotel', type: 'default', position: { x: 1050, y: 600 }, data: { label: '📱 Portal Hotel\nPago Net 15' }, className: 'node-automated' },
  ],
  edges: [
    // Acquisition
    { id: 'e1', source: 'crm', target: 'auto_prospecto', animated: true },
    { id: 'e2', source: 'auto_prospecto', target: 'e_contract', animated: true },
    { id: 'e3', source: 'e_contract', target: 'portal_manager', animated: true },
    { id: 'e4', source: 'e_contract', target: 'rates', animated: true, style: { stroke: '#c2185b' } },
    
    // Hotel operations
    { id: 'e5', source: 'portal_manager', target: 'auto_requisicion', animated: true },
    { id: 'e6', source: 'auto_requisicion', target: 'ai_pool', animated: true },
    
    // Recruitment
    { id: 'e7', source: 'web_form', target: 'chatbot', animated: true },
    { id: 'e8', source: 'chatbot', target: 'blacklist_auto', animated: true },
    { id: 'e9', source: 'blacklist_auto', target: 'ai_pool', label: 'No encontrado', animated: true },
    { id: 'e10', source: 'ai_pool', target: 'emp_type', animated: true },
    { id: 'e11', source: 'emp_type', target: 'app_digital', label: 'Ambos Orange', animated: true },
    
    // Employee lifecycle
    { id: 'e12', source: 'app_digital', target: 'inspector_hybrid', animated: true },
    { id: 'e13', source: 'inspector_hybrid', target: 'onboarding_auto', animated: true },
    { id: 'e14', source: 'onboarding_auto', target: 'working', animated: true },
    { id: 'e15', source: 'working', target: 'inspector_app', animated: true },
    { id: 'e16', source: 'inspector_app', target: 'uniform_auto', animated: true },
    { id: 'e17', source: 'uniform_auto', target: 'ai_monica', label: 'Notifica', animated: true, style: { stroke: '#c2185b', strokeDasharray: '5,5' } },
    
    // Work week
    { id: 'e18', source: 'working', target: 'payroll_note', animated: true },
    { id: 'e19', source: 'working', target: 'auto_punch', animated: true },
    { id: 'e20', source: 'portal_manager', target: 'portal_report', animated: true },
    { id: 'e21', source: 'auto_punch', target: 'auto_hours', animated: true },
    { id: 'e22', source: 'portal_report', target: 'auto_hours', animated: true },
    
    // Accounting flow
    { id: 'e23', source: 'auto_hours', target: 'ai_monica', animated: true },
    { id: 'e24', source: 'auto_requisicion', target: 'ai_monica', label: 'Costos', animated: true, style: { stroke: '#c2185b', strokeDasharray: '5,5' } },
    { id: 'e25', source: 'ai_monica', target: 'auto_dashboard', animated: true },
    { id: 'e26', source: 'auto_dashboard', target: 'auto_validation', animated: true },
    { id: 'e27', source: 'auto_validation', target: 'pre_approval', animated: true },
    
    // Payroll
    { id: 'e28', source: 'pre_approval', target: 'direccion' },
    { id: 'e29', source: 'direccion', target: 'approval' },
    { id: 'e30', source: 'approval', target: 'processing', animated: true },
    { id: 'e31', source: 'processing', target: 'payment', animated: true },
    { id: 'e32', source: 'payment', target: 'working', animated: true, style: { stroke: '#2e7d32' } },
    
    // Billing
    { id: 'e33', source: 'rates', target: 'auto_invoice', animated: true, style: { stroke: '#c2185b' } },
    { id: 'e34', source: 'auto_hours', target: 'auto_invoice', animated: true, style: { strokeDasharray: '5,5' } },
    { id: 'e35', source: 'auto_invoice', target: 'payment_hotel', animated: true },
    { id: 'e36', source: 'payment_hotel', target: 'ai_monica', label: 'Ingreso', animated: true, style: { stroke: '#2e7d32' } },
  ]
}

export default masterOverviewFlowApp
