const payrollFlowApp = {
  nodes: [
    // Employee types (same as actual)
    { id: 'emp_types', type: 'default', position: { x: 50, y: 50 }, data: { label: '👥 Empleados Orange\n2 Tipos' }, className: 'node-info' },
    { id: 'contratista', type: 'default', position: { x: 250, y: 20 }, data: { label: '👔 Contratistas' }, className: 'node-success' },
    { id: 'directa', type: 'default', position: { x: 250, y: 80 }, data: { label: '👤 Personas Directas' }, className: 'node-success' },
    { id: 'both_payroll', type: 'default', position: { x: 450, y: 50 }, data: { label: '💰 Ambos en\nNómina Orange' }, className: 'node-accounting' },
    
    // Rates model
    { id: 'rates_model', type: 'default', position: { x: 650, y: 50 }, data: { label: '💵 Modelo de Pago' }, className: 'node-accounting' },
    { id: 'bill_rate', type: 'default', position: { x: 850, y: 20 }, data: { label: '🏨 Hotel → Orange\n$19.58/hr (Bill Rate)' }, className: 'node-hotel' },
    { id: 'pay_rate', type: 'default', position: { x: 850, y: 100 }, data: { label: '💰 Orange → Empleado\n$15/hr (Pay Rate)' }, className: 'node-success' },
    { id: 'margin', type: 'default', position: { x: 1050, y: 60 }, data: { label: '📊 Margen Orange\n30-35% ($4.58/hr)' }, className: 'node-accounting' },
    
    // Automated weekly cycle
    { id: 'start', type: 'default', position: { x: 50, y: 250 }, data: { label: '📅 Domingo\nInicio Semana' }, className: 'node-info' },
    { id: 'week_note', type: 'default', position: { x: 250, y: 200 }, data: { label: '⚠️ Período típico:\nDom-Sáb\n(3 hoteles diferentes)' }, className: 'node-warning' },
    { id: 'work_week', type: 'default', position: { x: 50, y: 350 }, data: { label: 'Dom-Sáb\nSemana Laboral' }, className: 'node-info' },
    
    // Automated tracking
    { id: 'auto_punch', type: 'default', position: { x: 250, y: 300 }, data: { label: '⚡ Sistema Ponchado\nAutomático' }, className: 'node-automated' },
    { id: 'integration', type: 'default', position: { x: 250, y: 400 }, data: { label: '🤖 Integración\nTiempo Real' }, className: 'node-automated' },
    { id: 'auto_accumulate', type: 'default', position: { x: 450, y: 350 }, data: { label: '⚡ Acumulación\nAutomática Horas' }, className: 'node-automated' },
    { id: 'hotel_portal', type: 'default', position: { x: 650, y: 300 }, data: { label: '📱 Hotel: Portal\nSelf-Service' }, className: 'node-automated' },
    { id: 'auto_validate', type: 'default', position: { x: 650, y: 400 }, data: { label: '⚡ Validación\nCruzada Auto' }, className: 'node-automated' },
    
    { id: 'deadline', type: 'default', position: { x: 850, y: 350 }, data: { label: '🔴 MIÉRCOLES\n11:59 PM\nDEADLINE' }, className: 'node-critical' },
    { id: 'auto_report', type: 'default', position: { x: 1050, y: 350 }, data: { label: '⚡ Reporte Auto\nGenerado' }, className: 'node-automated' },
    { id: 'delay_note', type: 'default', position: { x: 1050, y: 450 }, data: { label: '⚠️ DESFASE 1 SEMANA\nPaga semana anterior' }, className: 'node-warning' },
    
    // Automated pre-approval
    { id: 'thursday_am', type: 'default', position: { x: 50, y: 550 }, data: { label: '⏰ JUEVES 8 AM\nInicia Proceso' }, className: 'node-accounting' },
    { id: 'auto_pre_approval', type: 'default', position: { x: 250, y: 550 }, data: { label: '⚡ PRE-APROBACIÓN\nAutomática' }, className: 'node-automated' },
    
    // Automated 12 validations
    { id: 'validations_auto', type: 'default', position: { x: 450, y: 550 }, data: { label: '🤖 12 Validaciones\nAutomáticas' }, className: 'node-automated' },
    { id: 'val_group_1', type: 'default', position: { x: 650, y: 500 }, data: { label: '⚡ 1-5: Horas, Pago,\nDesc, Vac, Rates' }, className: 'node-automated' },
    { id: 'val_group_2', type: 'default', position: { x: 650, y: 580 }, data: { label: '⚡ 6-10: Tax, Emp#,\nBank, Net, Gross' }, className: 'node-automated' },
    { id: 'val_group_3', type: 'default', position: { x: 650, y: 660 }, data: { label: '⚡ 11-12: Claims,\nM Lav' }, className: 'node-automated' },
    
    { id: 'ai_discrepancy', type: 'default', position: { x: 850, y: 580 }, data: { label: '🤖 IA Detecta\nDiscrepancias' }, className: 'node-automated' },
    { id: 'auto_fix', type: 'default', position: { x: 1050, y: 530 }, data: { label: '⚡ Auto-Corrección\nErrores Simples' }, className: 'node-automated' },
    { id: 'monica_review', type: 'default', position: { x: 1050, y: 630 }, data: { label: '👤 Mónica Revisa\nSolo Excepciones' }, className: 'node-human' },
    
    // Automated reporting
    { id: 'auto_report_gen', type: 'default', position: { x: 250, y: 750 }, data: { label: '⚡ Reporte Auto\nGenerado' }, className: 'node-automated' },
    { id: 'dashboard_realtime', type: 'default', position: { x: 450, y: 750 }, data: { label: '📊 Dashboard\nTiempo Real' }, className: 'node-automated' },
    { id: 'thursday_pm', type: 'default', position: { x: 650, y: 750 }, data: { label: '⏰ JUEVES 2 PM\nSilvia Revisa' }, className: 'node-human' },
    { id: 'approve', type: 'default', position: { x: 850, y: 750 }, data: { label: '👤 APROBAR\nNómina Final' }, className: 'node-human' },
    
    // Automated processing
    { id: 'thursday_night', type: 'default', position: { x: 50, y: 900 }, data: { label: '⏰ JUEVES 8 PM\nProcesamiento Auto' }, className: 'node-automated' },
    { id: 'auto_transfers', type: 'default', position: { x: 250, y: 900 }, data: { label: '⚡ ACH Automático\n80%+' }, className: 'node-automated' },
    { id: 'auto_checks', type: 'default', position: { x: 450, y: 900 }, data: { label: '⚡ Cheques Auto\nPaychex <20%' }, className: 'node-automated' },
    { id: 'friday', type: 'default', position: { x: 650, y: 900 }, data: { label: '💰 VIERNES 5 AM\nDINERO DISPONIBLE' }, className: 'node-success' },
    { id: 'friday_note', type: 'default', position: { x: 850, y: 900 }, data: { label: '📅 Pago por semana\nDom-Sáb anterior' }, className: 'node-warning' },
    
    // Self-service claims
    { id: 'claims_app', type: 'default', position: { x: 50, y: 1050 }, data: { label: '📱 Empleado Reporta\nen App <48h' }, className: 'node-automated' },
    { id: 'auto_validate_claim', type: 'default', position: { x: 250, y: 1050 }, data: { label: '🤖 Validación\nAutomática' }, className: 'node-automated' },
    { id: 'auto_resolve', type: 'default', position: { x: 450, y: 1000 }, data: { label: '⚡ Resolución Auto\nErrores Simples' }, className: 'node-automated' },
    { id: 'human_review', type: 'default', position: { x: 450, y: 1100 }, data: { label: '👤 Revisión Humana\nCasos Complejos' }, className: 'node-human' },
    { id: 'end', type: 'output', position: { x: 650, y: 1050 }, data: { label: '✅ NÓMINA\nCOMPLETADA' }, className: 'node-success' },
  ],
  edges: [
    // Employee types
    { id: 'e0a', source: 'emp_types', target: 'contratista' },
    { id: 'e0b', source: 'emp_types', target: 'directa' },
    { id: 'e0c', source: 'contratista', target: 'both_payroll' },
    { id: 'e0d', source: 'directa', target: 'both_payroll' },
    { id: 'e0e', source: 'both_payroll', target: 'rates_model' },
    
    // Rates model
    { id: 'e0f', source: 'rates_model', target: 'bill_rate' },
    { id: 'e0g', source: 'rates_model', target: 'pay_rate' },
    { id: 'e0h', source: 'bill_rate', target: 'margin', animated: true },
    { id: 'e0i', source: 'pay_rate', target: 'margin', animated: true },
    
    // Automated cycle
    { id: 'e1', source: 'start', target: 'week_note' },
    { id: 'e1b', source: 'start', target: 'work_week' },
    { id: 'e2', source: 'work_week', target: 'auto_punch', animated: true },
    { id: 'e3', source: 'work_week', target: 'integration', animated: true },
    { id: 'e4', source: 'auto_punch', target: 'auto_accumulate', animated: true },
    { id: 'e5', source: 'integration', target: 'auto_accumulate', animated: true },
    { id: 'e6', source: 'auto_accumulate', target: 'hotel_portal', animated: true },
    { id: 'e6b', source: 'auto_accumulate', target: 'auto_validate', animated: true },
    { id: 'e7', source: 'hotel_portal', target: 'deadline' },
    { id: 'e7b', source: 'auto_validate', target: 'deadline', animated: true },
    { id: 'e8', source: 'deadline', target: 'auto_report', animated: true },
    { id: 'e8b', source: 'auto_report', target: 'delay_note' },
    { id: 'e9', source: 'auto_report', target: 'thursday_am' },
    
    // Automated validations
    { id: 'e10', source: 'thursday_am', target: 'auto_pre_approval', animated: true },
    { id: 'e11', source: 'auto_pre_approval', target: 'validations_auto', animated: true },
    { id: 'e12', source: 'validations_auto', target: 'val_group_1', animated: true },
    { id: 'e13', source: 'validations_auto', target: 'val_group_2', animated: true },
    { id: 'e14', source: 'validations_auto', target: 'val_group_3', animated: true },
    { id: 'e15', source: 'val_group_1', target: 'ai_discrepancy', animated: true },
    { id: 'e16', source: 'val_group_2', target: 'ai_discrepancy', animated: true },
    { id: 'e17', source: 'val_group_3', target: 'ai_discrepancy', animated: true },
    { id: 'e18', source: 'ai_discrepancy', target: 'auto_fix', label: 'Simple', animated: true },
    { id: 'e19', source: 'ai_discrepancy', target: 'monica_review', label: 'Complejo' },
    { id: 'e20', source: 'auto_fix', target: 'auto_report_gen', animated: true },
    { id: 'e21', source: 'monica_review', target: 'auto_report_gen' },
    
    // Approval
    { id: 'e22', source: 'auto_report_gen', target: 'dashboard_realtime', animated: true },
    { id: 'e23', source: 'dashboard_realtime', target: 'thursday_pm' },
    { id: 'e24', source: 'thursday_pm', target: 'approve' },
    
    // Processing
    { id: 'e25', source: 'approve', target: 'thursday_night', animated: true },
    { id: 'e26', source: 'thursday_night', target: 'auto_transfers', animated: true },
    { id: 'e27', source: 'thursday_night', target: 'auto_checks', animated: true },
    { id: 'e28', source: 'auto_transfers', target: 'friday', animated: true },
    { id: 'e29', source: 'auto_checks', target: 'friday', animated: true },
    { id: 'e30', source: 'friday', target: 'friday_note' },
    
    // Claims
    { id: 'e31', source: 'friday', target: 'claims_app', style: { strokeDasharray: '5,5' } },
    { id: 'e32', source: 'claims_app', target: 'auto_validate_claim', animated: true },
    { id: 'e33', source: 'auto_validate_claim', target: 'auto_resolve', label: 'Simple', animated: true },
    { id: 'e34', source: 'auto_validate_claim', target: 'human_review', label: 'Complejo' },
    { id: 'e35', source: 'auto_resolve', target: 'end', animated: true },
    { id: 'e36', source: 'human_review', target: 'end' },
    { id: 'e37', source: 'friday', target: 'end' },
  ]
}

export default payrollFlowApp
