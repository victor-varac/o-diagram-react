const masterOverviewFlow = {
  nodes: [
    // ACQUISITION
    { id: 'vendor', type: 'default', position: { x: 50, y: 50 }, data: { label: '👔 Vendedor\nBusiness Dev' }, className: 'node-recruitment' },
    { id: 'prospecto', type: 'default', position: { x: 50, y: 150 }, data: { label: '🏨 Hotel\nProspecto' }, className: 'node-hotel' },
    { id: 'contrato_hotel', type: 'default', position: { x: 50, y: 250 }, data: { label: '📄 Service Contract\nFirma' }, className: 'node-success' },
    
    // HOTEL OPERATIONS
    { id: 'manager', type: 'default', position: { x: 300, y: 50 }, data: { label: '👨‍💼 Manager Hotel\nCliente' }, className: 'node-hotel' },
    { id: 'requisicion', type: 'default', position: { x: 300, y: 150 }, data: { label: '📋 Requisición\nPersonal' }, className: 'node-hotel' },
    { id: 'rates', type: 'default', position: { x: 300, y: 250 }, data: { label: '💰 Bill $19.58\nPay $15\nMargen 30-35%' }, className: 'node-accounting' },
    
    // RECRUITMENT
    { id: 'candidato', type: 'default', position: { x: 550, y: 50 }, data: { label: '👤 Candidato\nNuevo' }, className: 'node-recruitment' },
    { id: 'reclutadora', type: 'default', position: { x: 550, y: 150 }, data: { label: '👥 Reclutadora\nCecilia' }, className: 'node-recruitment' },
    { id: 'pool', type: 'default', position: { x: 550, y: 250 }, data: { label: '📦 Pool de\nCandidatos' }, className: 'node-info' },
    { id: 'blacklist', type: 'default', position: { x: 700, y: 50 }, data: { label: '🚫 Black List' }, className: 'node-blacklist' },
    { id: 'emp_type', type: 'default', position: { x: 700, y: 200 }, data: { label: '👥 2 Tipos:\nContratista/Directa' }, className: 'node-warning' },
    
    // EMPLOYEE LIFECYCLE
    { id: 'app_30', type: 'default', position: { x: 800, y: 50 }, data: { label: '📋 30% Aplicación\n📄 Docs legales' }, className: 'node-warning' },
    { id: 'app_60', type: 'default', position: { x: 800, y: 150 }, data: { label: '✅ 60% Aplicación\nPuede trabajar' }, className: 'node-success' },
    { id: 'working', type: 'default', position: { x: 800, y: 250 }, data: { label: '👔 Trabajando\nPool Colaboradores' }, className: 'node-success' },
    
    // QUALITY
    { id: 'inspector', type: 'default', position: { x: 1000, y: 50 }, data: { label: '🏆 Inspector\nAna García' }, className: 'node-quality' },
    { id: 'onboarding', type: 'default', position: { x: 1000, y: 150 }, data: { label: '🤝 Onboarding\nDía 1' }, className: 'node-quality' },
    { id: 'uniform', type: 'default', position: { x: 1000, y: 250 }, data: { label: '👕 Uniforme\nDía 3/5' }, className: 'node-quality' },
    
    // WORK WEEK
    { id: 'ponchado', type: 'default', position: { x: 50, y: 450 }, data: { label: '⏰ Ponchado\nDom-Sáb' }, className: 'node-info' },
    { id: 'reporte_hotel', type: 'default', position: { x: 200, y: 450 }, data: { label: '📊 Reporte Hotel\nMié 11:59 PM' }, className: 'node-critical' },
    { id: 'horas', type: 'default', position: { x: 125, y: 550 }, data: { label: '📈 Horas\nTrabajadas' }, className: 'node-info' },
    { id: 'payroll_note', type: 'default', position: { x: 50, y: 350 }, data: { label: '📅 Desfase 1 sem\nPaga anterior' }, className: 'node-warning' },
    
    // ACCOUNTING
    { id: 'monica', type: 'default', position: { x: 350, y: 450 }, data: { label: '💰 Mónica\nContabilidad' }, className: 'node-accounting' },
    { id: 'dashboard', type: 'default', position: { x: 350, y: 550 }, data: { label: '📊 Dashboard\nDiario' }, className: 'node-accounting' },
    { id: 'validation', type: 'default', position: { x: 500, y: 450 }, data: { label: '✅ Validaciones\n12 críticas' }, className: 'node-accounting' },
    { id: 'pre_approval', type: 'default', position: { x: 500, y: 550 }, data: { label: '✓ Pre-Aprobación\nJueves AM' }, className: 'node-accounting' },
    
    // PAYROLL
    { id: 'direccion', type: 'default', position: { x: 700, y: 450 }, data: { label: '👔 Silvia\nDirección' }, className: 'node-critical' },
    { id: 'approval', type: 'default', position: { x: 700, y: 550 }, data: { label: '✅ Aprobación\nFinal' }, className: 'node-success' },
    { id: 'processing', type: 'default', position: { x: 850, y: 450 }, data: { label: '⚙️ Procesamiento\nJueves Noche' }, className: 'node-info' },
    { id: 'payment', type: 'default', position: { x: 850, y: 550 }, data: { label: '💰 Pago\nViernes 5 AM' }, className: 'node-success' },
    
    // BILLING
    { id: 'invoice', type: 'default', position: { x: 1050, y: 450 }, data: { label: '🧾 Factura\nHotel' }, className: 'node-accounting' },
    { id: 'payment_hotel', type: 'default', position: { x: 1050, y: 550 }, data: { label: '💳 Pago Hotel\nNet 15' }, className: 'node-success' },
  ],
  edges: [
    // Acquisition flow
    { id: 'e1', source: 'vendor', target: 'prospecto', animated: false },
    { id: 'e2', source: 'prospecto', target: 'contrato_hotel', animated: false },
    { id: 'e3', source: 'contrato_hotel', target: 'manager', animated: false },
    { id: 'e4', source: 'contrato_hotel', target: 'rates', animated: true, style: { stroke: '#c2185b' } },
    
    // Hotel operations
    { id: 'e5', source: 'manager', target: 'requisicion', animated: false },
    { id: 'e6', source: 'requisicion', target: 'reclutadora', animated: false },
    
    // Recruitment
    { id: 'e7', source: 'candidato', target: 'reclutadora', animated: false },
    { id: 'e8', source: 'candidato', target: 'blacklist', animated: false, style: { strokeDasharray: '5,5' } },
    { id: 'e9', source: 'blacklist', target: 'pool', label: 'No encontrado', animated: false },
    { id: 'e10', source: 'reclutadora', target: 'pool', animated: false },
    { id: 'e10b', source: 'pool', target: 'emp_type', animated: false },
    { id: 'e11', source: 'emp_type', target: 'app_30', label: 'Ambos Orange', animated: false },
    
    // Employee lifecycle
    { id: 'e12', source: 'app_30', target: 'inspector', animated: false },
    { id: 'e13', source: 'inspector', target: 'onboarding', animated: false },
    { id: 'e14', source: 'onboarding', target: 'app_60', label: 'Ayuda', animated: false },
    { id: 'e15', source: 'app_60', target: 'working', animated: false },
    { id: 'e16', source: 'inspector', target: 'uniform', animated: false },
    { id: 'e17', source: 'uniform', target: 'monica', label: 'Notifica', animated: true, style: { stroke: '#c2185b', strokeDasharray: '5,5' } },
    
    // Work week
    { id: 'e17b', source: 'working', target: 'payroll_note', animated: false },
    { id: 'e18', source: 'working', target: 'ponchado', animated: false },
    { id: 'e19', source: 'manager', target: 'reporte_hotel', animated: false },
    { id: 'e20', source: 'ponchado', target: 'horas', animated: false },
    { id: 'e21', source: 'reporte_hotel', target: 'horas', animated: false },
    
    // Accounting flow
    { id: 'e22', source: 'horas', target: 'monica', animated: false },
    { id: 'e23', source: 'requisicion', target: 'monica', label: 'Costos', animated: true, style: { stroke: '#c2185b', strokeDasharray: '5,5' } },
    { id: 'e24', source: 'monica', target: 'dashboard', animated: false },
    { id: 'e25', source: 'dashboard', target: 'validation', animated: false },
    { id: 'e26', source: 'validation', target: 'pre_approval', animated: false },
    
    // Payroll
    { id: 'e27', source: 'pre_approval', target: 'direccion', animated: false },
    { id: 'e28', source: 'direccion', target: 'approval', animated: false },
    { id: 'e29', source: 'approval', target: 'processing', animated: false },
    { id: 'e30', source: 'processing', target: 'payment', animated: false },
    { id: 'e31', source: 'payment', target: 'working', animated: true, style: { stroke: '#2e7d32' } },
    
    // Billing
    { id: 'e32', source: 'rates', target: 'invoice', animated: true, style: { stroke: '#c2185b' } },
    { id: 'e33', source: 'horas', target: 'invoice', animated: true, style: { strokeDasharray: '5,5' } },
    { id: 'e34', source: 'invoice', target: 'payment_hotel', animated: false },
    { id: 'e35', source: 'payment_hotel', target: 'monica', label: 'Ingreso', animated: true, style: { stroke: '#2e7d32' } },
  ]
}

export default masterOverviewFlow
