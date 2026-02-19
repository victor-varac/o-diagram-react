const accountingFlowApp = {
  nodes: [
    // Real-time dashboard
    { id: 'start', type: 'input', position: { x: 50, y: 50 }, data: { label: '💰 Mónica\nDashboard Web' }, className: 'node-automated' },
    { id: 'realtime_dash', type: 'default', position: { x: 250, y: 50 }, data: { label: '📊 Dashboard\nTiempo Real' }, className: 'node-automated' },
    
    // Auto sections
    { id: 'auto_semaforo', type: 'default', position: { x: 450, y: 0 }, data: { label: '⚡ Semáforo Auto\nEmpleados' }, className: 'node-automated' },
    { id: 'auto_timeline', type: 'default', position: { x: 450, y: 70 }, data: { label: '🤖 Timeline 72h\nAutomático' }, className: 'node-automated' },
    { id: 'auto_uniforms', type: 'default', position: { x: 450, y: 140 }, data: { label: '⚡ Uniformes\nSync Auto' }, className: 'node-automated' },
    { id: 'auto_projections', type: 'default', position: { x: 450, y: 210 }, data: { label: '🤖 Proyecciones\nIA Predictiva' }, className: 'node-automated' },
    
    // Status auto-tracking
    { id: 'ai_track', type: 'default', position: { x: 650, y: 70 }, data: { label: '🤖 IA Tracking\nAutomático' }, className: 'node-automated' },
    { id: 'ready', type: 'default', position: { x: 850, y: 20 }, data: { label: '🟢 Listos\n>60%' }, className: 'node-success' },
    { id: 'warning', type: 'default', position: { x: 850, y: 90 }, data: { label: '🟡 Advertencia\n40-60%' }, className: 'node-warning' },
    { id: 'blocked', type: 'default', position: { x: 850, y: 160 }, data: { label: '🔴 No Pagables\n<60% >72h' }, className: 'node-critical' },
    
    // Auto uniform discount
    { id: 'auto_discount', type: 'default', position: { x: 650, y: 210 }, data: { label: '⚡ Descuento Auto\n$85 → 4x$21.25' }, className: 'node-automated' },
    
    // Auto projections
    { id: 'ml_forecast', type: 'default', position: { x: 650, y: 280 }, data: { label: '🤖 ML Forecast\nCostos Futuros' }, className: 'node-automated' },
    { id: 'auto_rates', type: 'default', position: { x: 850, y: 250 }, data: { label: '⚡ Bill/Pay Rates\nAuto-aplicados' }, className: 'node-automated' },
    { id: 'bill_example', type: 'default', position: { x: 850, y: 320 }, data: { label: '🏨 ~$19.58/hr' }, className: 'node-hotel' },
    { id: 'pay_example', type: 'default', position: { x: 850, y: 380 }, data: { label: '💰 ~$15/hr' }, className: 'node-success' },
    { id: 'margin_calc', type: 'default', position: { x: 1050, y: 320 }, data: { label: '⚡ Margen 30-35%\nAuto-validado' }, className: 'node-automated' },
    
    // Auto weekly cycle
    { id: 'auto_cycle', type: 'default', position: { x: 50, y: 450 }, data: { label: '⚡ Ciclo Semanal\nAutomático' }, className: 'node-automated' },
    { id: 'mon_wed', type: 'default', position: { x: 250, y: 450 }, data: { label: '🤖 Lun-Mié\nMonitoreo Auto' }, className: 'node-automated' },
    { id: 'wed_deadline', type: 'default', position: { x: 450, y: 450 }, data: { label: '🔴 Mié 11:59 PM\nAuto-Close' }, className: 'node-automated' },
    { id: 'thu_am', type: 'default', position: { x: 650, y: 450 }, data: { label: '⚡ Jue AM\nPre-Aprobación Auto' }, className: 'node-automated' },
    
    // Auto validations
    { id: 'auto_validations', type: 'default', position: { x: 850, y: 450 }, data: { label: '🤖 12 Validaciones\nAutomáticas' }, className: 'node-automated' },
    { id: 'v_all', type: 'default', position: { x: 1050, y: 450 }, data: { label: '⚡ 1-12 en\nParalelo' }, className: 'node-automated' },
    
    { id: 'ai_check', type: 'default', position: { x: 50, y: 600 }, data: { label: '🤖 IA Valida\nTodo OK?' }, className: 'node-automated' },
    { id: 'auto_fix', type: 'default', position: { x: 250, y: 550 }, data: { label: '⚡ Auto-Corrección\nErrores Simples' }, className: 'node-automated' },
    { id: 'monica_review', type: 'default', position: { x: 250, y: 650 }, data: { label: '👤 Mónica Revisa\nSolo Excepciones' }, className: 'node-human' },
    
    { id: 'auto_report', type: 'default', position: { x: 450, y: 600 }, data: { label: '⚡ Reporte Auto\nGenerado' }, className: 'node-automated' },
    { id: 'dir_review', type: 'default', position: { x: 650, y: 600 }, data: { label: '👤 Silvia\nAprueba Final' }, className: 'node-human' },
    { id: 'auto_processing', type: 'default', position: { x: 850, y: 600 }, data: { label: '⚡ Procesamiento\nAutomático' }, className: 'node-automated' },
    { id: 'payment', type: 'default', position: { x: 1050, y: 600 }, data: { label: '💰 Pago\nVie 5 AM' }, className: 'node-success' },
    
    // Auto billing
    { id: 'auto_billing', type: 'default', position: { x: 50, y: 750 }, data: { label: '⚡ Facturación\nAutomática' }, className: 'node-automated' },
    { id: 'auto_invoice', type: 'default', position: { x: 250, y: 750 }, data: { label: '🤖 Invoice Auto\nGenerado' }, className: 'node-automated' },
    { id: 'auto_send', type: 'default', position: { x: 450, y: 750 }, data: { label: '📧 Envío Auto\nEmail + Portal' }, className: 'node-automated' },
    { id: 'track_payment', type: 'default', position: { x: 650, y: 750 }, data: { label: '⚡ Tracking Auto\nNet 15' }, className: 'node-automated' },
    { id: 'revenue', type: 'default', position: { x: 850, y: 750 }, data: { label: '💰 Ingreso Auto\nRegistrado' }, className: 'node-automated' },
    
    // Self-service claims
    { id: 'claims_app', type: 'default', position: { x: 50, y: 900 }, data: { label: '📱 Empleado\nReporta en App' }, className: 'node-automated' },
    { id: 'ai_investigate', type: 'default', position: { x: 250, y: 900 }, data: { label: '🤖 IA Investiga\nAutomático' }, className: 'node-automated' },
    { id: 'auto_verify', type: 'default', position: { x: 450, y: 900 }, data: { label: '⚡ Verificación vs\nContrato Auto' }, className: 'node-automated' },
    { id: 'claim_valid', type: 'default', position: { x: 650, y: 900 }, data: { label: '🤖 IA Valida\nClaim' }, className: 'node-automated' },
    { id: 'auto_corrective', type: 'default', position: { x: 850, y: 850 }, data: { label: '⚡ Pago Correctivo\nAutomático' }, className: 'node-automated' },
    { id: 'human_review', type: 'default', position: { x: 850, y: 950 }, data: { label: '👤 Revisión Humana\nCasos Complejos' }, className: 'node-human' },
    
    // Security (same)
    { id: 'security', type: 'default', position: { x: 1050, y: 900 }, data: { label: '🔐 SEGURIDAD\nRBAC' }, className: 'node-critical' },
  ],
  edges: [
    // Dashboard
    { id: 'e1', source: 'start', target: 'realtime_dash', animated: true },
    { id: 'e2', source: 'realtime_dash', target: 'auto_semaforo', animated: true },
    { id: 'e3', source: 'realtime_dash', target: 'auto_timeline', animated: true },
    { id: 'e4', source: 'realtime_dash', target: 'auto_uniforms', animated: true },
    { id: 'e5', source: 'realtime_dash', target: 'auto_projections', animated: true },
    
    // Tracking
    { id: 'e6', source: 'auto_timeline', target: 'ai_track', animated: true },
    { id: 'e7', source: 'ai_track', target: 'ready', label: '🟢', animated: true },
    { id: 'e8', source: 'ai_track', target: 'warning', label: '🟡', animated: true },
    { id: 'e9', source: 'ai_track', target: 'blocked', label: '🔴', animated: true },
    
    // Uniforms
    { id: 'e10', source: 'auto_uniforms', target: 'auto_discount', animated: true },
    
    // Projections
    { id: 'e11', source: 'auto_projections', target: 'ml_forecast', animated: true },
    { id: 'e12', source: 'ml_forecast', target: 'auto_rates', animated: true },
    { id: 'e13', source: 'auto_rates', target: 'bill_example', animated: true },
    { id: 'e14', source: 'auto_rates', target: 'pay_example', animated: true },
    { id: 'e15', source: 'bill_example', target: 'margin_calc', animated: true },
    { id: 'e16', source: 'pay_example', target: 'margin_calc', animated: true },
    
    // Weekly cycle
    { id: 'e17', source: 'auto_semaforo', target: 'auto_cycle', animated: true },
    { id: 'e18', source: 'auto_cycle', target: 'mon_wed', animated: true },
    { id: 'e19', source: 'mon_wed', target: 'wed_deadline', animated: true },
    { id: 'e20', source: 'wed_deadline', target: 'thu_am', animated: true },
    { id: 'e21', source: 'thu_am', target: 'auto_validations', animated: true },
    { id: 'e22', source: 'auto_validations', target: 'v_all', animated: true },
    { id: 'e23', source: 'v_all', target: 'ai_check', animated: true },
    
    // Validation
    { id: 'e24', source: 'ai_check', target: 'auto_fix', label: 'Simple', animated: true },
    { id: 'e25', source: 'ai_check', target: 'monica_review', label: 'Complejo' },
    { id: 'e26', source: 'auto_fix', target: 'auto_report', animated: true },
    { id: 'e27', source: 'monica_review', target: 'auto_report' },
    
    // Approval
    { id: 'e28', source: 'auto_report', target: 'dir_review' },
    { id: 'e29', source: 'dir_review', target: 'auto_processing' },
    { id: 'e30', source: 'auto_processing', target: 'payment', animated: true },
    
    // Billing
    { id: 'e31', source: 'payment', target: 'auto_billing', animated: true },
    { id: 'e32', source: 'auto_billing', target: 'auto_invoice', animated: true },
    { id: 'e33', source: 'auto_invoice', target: 'auto_send', animated: true },
    { id: 'e34', source: 'auto_send', target: 'track_payment', animated: true },
    { id: 'e35', source: 'track_payment', target: 'revenue', animated: true },
    
    // Claims
    { id: 'e36', source: 'payment', target: 'claims_app', style: { strokeDasharray: '5,5' } },
    { id: 'e37', source: 'claims_app', target: 'ai_investigate', animated: true },
    { id: 'e38', source: 'ai_investigate', target: 'auto_verify', animated: true },
    { id: 'e39', source: 'auto_verify', target: 'claim_valid', animated: true },
    { id: 'e40', source: 'claim_valid', target: 'auto_corrective', label: 'Simple', animated: true },
    { id: 'e41', source: 'claim_valid', target: 'human_review', label: 'Complejo' },
    
    // Security
    { id: 'e42', source: 'realtime_dash', target: 'security', style: { strokeDasharray: '5,5' } },
  ]
}

export default accountingFlowApp
