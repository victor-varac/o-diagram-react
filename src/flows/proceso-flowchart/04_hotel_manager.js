const hotelManagerFlowchartFlow = {
  nodes: [
    // INICIO
    { id: 'start', type: 'input', position: { x: 500, y: 0 }, data: { label: '🏨 Hotel Manager\nCliente del Sistema' }, className: 'node-hotel' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 1: REQUISICIONES DE PERSONAL
    // ═══════════════════════════════════════════════════════
    { id: 'section_staff', type: 'default', position: { x: 50, y: 150 }, data: { label: '👥 STAFFING\nREQUISITIONS' }, className: 'node-warning' },
    { id: 'assess_needs', type: 'default', position: { x: 50, y: 280 }, data: { label: '📊 Evaluar Necesidades\nPosiciones + Cantidad\nde Personal' }, className: 'node-info' },
    { id: 'submit_requisition', type: 'default', position: { x: 50, y: 420 }, data: { label: '📋 Enviar Requisición\nal Sistema' }, className: 'node-info' },
    { id: 'req_note', type: 'default', position: { x: 50, y: 550 }, data: { label: '⚠️ Puede ser creada\npor BD o cliente\nNecesita aprobación\npor email' }, className: 'node-warning' },
    { id: 'new_req', type: 'default', position: { x: 50, y: 680 }, data: { label: '➕ New Staff\nRequisition Requests' }, className: 'node-success' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 2: STAFF MANAGEMENT
    // ═══════════════════════════════════════════════════════
    { id: 'section_manage', type: 'default', position: { x: 300, y: 150 }, data: { label: '👷 STAFF\nMANAGEMENT' }, className: 'node-warning' },
    { id: 'view_staff', type: 'default', position: { x: 300, y: 280 }, data: { label: '📋 Ver Lista de\nPersonal Asignado' }, className: 'node-info' },
    { id: 'onboarding', type: 'default', position: { x: 300, y: 400 }, data: { label: '📚 Staff Onboarding\nOrientación, Capacitación,\nIntegración' }, className: 'node-info' },
    { id: 'performance', type: 'default', position: { x: 300, y: 530 }, data: { label: '📈 Performance Monitoring\nEvaluación continua\n+ Feedback' }, className: 'node-info' },
    { id: 'notif_assigned', type: 'default', position: { x: 300, y: 660 }, data: { label: '🔔 [NOTIF] Sistema informa\nempleado asignado\na la propiedad' }, className: 'node-success' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 3: FINANCIERO
    // ═══════════════════════════════════════════════════════
    { id: 'section_finance', type: 'default', position: { x: 550, y: 150 }, data: { label: '💰 FINANCIERO' }, className: 'node-accounting' },
    { id: 'approve_worksheet', type: 'default', position: { x: 550, y: 280 }, data: { label: '✅ Aprobar\nWorksheet' }, className: 'node-success' },
    { id: 'download_invoices', type: 'default', position: { x: 550, y: 400 }, data: { label: '📥 Descargar\nFacturas' }, className: 'node-accounting' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 4: INJURY REPORTS
    // ═══════════════════════════════════════════════════════
    { id: 'section_injury', type: 'default', position: { x: 800, y: 150 }, data: { label: '🏥 INJURY\nREPORTS' }, className: 'node-critical' },
    { id: 'submit_report', type: 'default', position: { x: 800, y: 280 }, data: { label: '➕ Submit Accident Report\nPresionar "+Report"' }, className: 'node-critical' },
    { id: 'report_forms', type: 'default', position: { x: 800, y: 410 }, data: { label: '📝 Complete Forms\nEmployee Data\nSupervisor Data\nMedical Center Data' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 5: QUALITY ASSURANCE
    // ═══════════════════════════════════════════════════════
    { id: 'section_qa', type: 'default', position: { x: 550, y: 530 }, data: { label: '🏆 QUALITY\nASSURANCE' }, className: 'node-quality' },
    { id: 'eval_employees', type: 'default', position: { x: 500, y: 660 }, data: { label: '👷 Evaluaciones\nEmpleados' }, className: 'node-quality' },
    { id: 'eval_inspectors', type: 'default', position: { x: 650, y: 660 }, data: { label: '🔍 Evaluaciones\nInspectores' }, className: 'node-quality' },
    { id: 'eval_hospitality', type: 'default', position: { x: 575, y: 780 }, data: { label: '⭐ Evaluaciones\nHospitalidad' }, className: 'node-quality' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 6: INVENTARIO Y SOPORTE
    // ═══════════════════════════════════════════════════════
    { id: 'section_inventory', type: 'default', position: { x: 800, y: 560 }, data: { label: '📦 INVENTARIO' }, className: 'node-warning' },
    { id: 'view_inventory', type: 'default', position: { x: 800, y: 680 }, data: { label: '👁️ Ver Inventario\nDetalles de Items' }, className: 'node-info' },
    { id: 'cart_checkout', type: 'default', position: { x: 800, y: 800 }, data: { label: '🛒 Agregar al Carrito\n→ Checkout → Pago' }, className: 'node-accounting' },

    { id: 'section_support', type: 'default', position: { x: 1000, y: 150 }, data: { label: '🛟 SOPORTE' }, className: 'node-info' },
    { id: 'faqs', type: 'default', position: { x: 950, y: 280 }, data: { label: '❓ FAQs' }, className: 'node-info' },
    { id: 'chat_support', type: 'default', position: { x: 1050, y: 280 }, data: { label: '💬 Chat With Us' }, className: 'node-info' },

    // QR CODE
    { id: 'qr_code', type: 'default', position: { x: 1000, y: 430 }, data: { label: '📱 Hotel QR Code\nPara check-in/out\nde colaboradores' }, className: 'node-success' },
  ],
  edges: [
    // Start → Secciones
    { id: 'e1', source: 'start', target: 'section_staff' },
    { id: 'e2', source: 'start', target: 'section_manage' },
    { id: 'e3', source: 'start', target: 'section_finance' },
    { id: 'e4', source: 'start', target: 'section_injury' },
    { id: 'e5', source: 'start', target: 'section_support' },

    // Staffing
    { id: 'e6', source: 'section_staff', target: 'assess_needs' },
    { id: 'e7', source: 'assess_needs', target: 'submit_requisition' },
    { id: 'e8', source: 'submit_requisition', target: 'req_note' },
    { id: 'e9', source: 'req_note', target: 'new_req' },

    // Staff Management
    { id: 'e10', source: 'section_manage', target: 'view_staff' },
    { id: 'e11', source: 'view_staff', target: 'onboarding' },
    { id: 'e12', source: 'onboarding', target: 'performance' },
    { id: 'e13', source: 'performance', target: 'notif_assigned' },

    // Financiero
    { id: 'e14', source: 'section_finance', target: 'approve_worksheet' },
    { id: 'e15', source: 'section_finance', target: 'download_invoices' },
    { id: 'e16', source: 'section_finance', target: 'section_qa' },

    // Injury Reports
    { id: 'e17', source: 'section_injury', target: 'submit_report' },
    { id: 'e18', source: 'submit_report', target: 'report_forms' },

    // QA
    { id: 'e19', source: 'section_qa', target: 'eval_employees' },
    { id: 'e20', source: 'section_qa', target: 'eval_inspectors' },
    { id: 'e21', source: 'eval_employees', target: 'eval_hospitality' },
    { id: 'e22', source: 'eval_inspectors', target: 'eval_hospitality' },

    // Inventario
    { id: 'e23', source: 'section_injury', target: 'section_inventory', style: { strokeDasharray: '5,5' } },
    { id: 'e24', source: 'section_inventory', target: 'view_inventory' },
    { id: 'e25', source: 'view_inventory', target: 'cart_checkout' },

    // Soporte
    { id: 'e26', source: 'section_support', target: 'faqs' },
    { id: 'e27', source: 'section_support', target: 'chat_support' },
    { id: 'e28', source: 'section_support', target: 'qr_code', style: { strokeDasharray: '5,5' } },
  ]
}

export default hotelManagerFlowchartFlow
