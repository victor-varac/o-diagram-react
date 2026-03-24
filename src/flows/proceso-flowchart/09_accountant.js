const accountantFlowchartFlow = {
  nodes: [
    // INICIO
    { id: 'start', type: 'input', position: { x: 400, y: 0 }, data: { label: '💰 Accountant\nGestión Financiera' }, className: 'node-accounting' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 1: PAYROLL PROCESSING
    // ═══════════════════════════════════════════════════════
    { id: 'section_payroll', type: 'default', position: { x: 100, y: 150 }, data: { label: '💵 PAYROLL\nPROCESSING' }, className: 'node-warning' },
    { id: 'access_payroll', type: 'default', position: { x: 100, y: 280 }, data: { label: '📂 Access Payroll\nSection' }, className: 'node-info' },
    { id: 'review_hours', type: 'default', position: { x: 100, y: 400 }, data: { label: '⏰ Revisar y Verificar\nHoras de Trabajo\ndel Empleado' }, className: 'node-info' },
    { id: 'verify_payment', type: 'default', position: { x: 100, y: 530 }, data: { label: '💳 Verificar Detalles\nde Pago' }, className: 'node-info' },
    { id: 'approve_payroll', type: 'default', position: { x: 100, y: 660 }, data: { label: '✅ Aprobar y Finalizar\nNómina del Empleado' }, className: 'node-success' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 2: GENERATE PAYMENT
    // ═══════════════════════════════════════════════════════
    { id: 'section_payment', type: 'default', position: { x: 100, y: 810 }, data: { label: '💰 GENERATE\nPAYMENT' }, className: 'node-accounting' },
    { id: 'gen_payment', type: 'default', position: { x: 100, y: 940 }, data: { label: '💸 Generar Pagos\nBasados en Nómina\nAprobada' }, className: 'node-accounting' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 3: TIME TABLE
    // ═══════════════════════════════════════════════════════
    { id: 'section_timetable', type: 'default', position: { x: 350, y: 150 }, data: { label: '📊 VIEW\nTIME TABLE' }, className: 'node-warning' },
    { id: 'view_more', type: 'default', position: { x: 350, y: 280 }, data: { label: '🔗 Click "View More"\nen Dashboard' }, className: 'node-info' },
    { id: 'full_timetable', type: 'default', position: { x: 350, y: 400 }, data: { label: '📋 Lista Completa\nde Todas las\nTime Tables' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 4: ADDITIONAL PAYMENTS & DEDUCTIONS
    // ═══════════════════════════════════════════════════════
    { id: 'section_additional', type: 'default', position: { x: 350, y: 540 }, data: { label: '➕➖ ADDITIONAL\nPAYMENTS & DEDUCTIONS' }, className: 'node-warning' },
    { id: 'select_employee', type: 'default', position: { x: 350, y: 670 }, data: { label: '👤 Seleccionar Empleado\nde la Lista' }, className: 'node-info' },
    { id: 'add_payments', type: 'default', position: { x: 250, y: 800 }, data: { label: '➕ Pagos Adicionales\nBonos, Incentivos' }, className: 'node-success' },
    { id: 'add_deductions', type: 'default', position: { x: 450, y: 800 }, data: { label: '➖ Deducciones\nUniformes, Sobrepagos' }, className: 'node-critical' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 5: INVOICES
    // ═══════════════════════════════════════════════════════
    { id: 'section_invoices', type: 'default', position: { x: 650, y: 150 }, data: { label: '🧾 GENERATE\nINVOICE' }, className: 'node-warning' },
    { id: 'click_hotel', type: 'default', position: { x: 650, y: 280 }, data: { label: '🏨 Click Nombre Hotel\nen Paycheck Record' }, className: 'node-hotel' },
    { id: 'hotel_financial', type: 'default', position: { x: 650, y: 400 }, data: { label: '📊 Acceder a Datos\nFinancieros Detallados\ndel Hotel' }, className: 'node-accounting' },
    { id: 'create_invoice', type: 'default', position: { x: 650, y: 530 }, data: { label: '🖨️ Crear e Imprimir\nFacturas' }, className: 'node-success' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 6: PAYCHECK MANAGEMENT
    // ═══════════════════════════════════════════════════════
    { id: 'section_paycheck', type: 'default', position: { x: 650, y: 680 }, data: { label: '📄 PAYCHECK\nMANAGEMENT' }, className: 'node-warning' },
    { id: 'view_paychecks', type: 'default', position: { x: 650, y: 810 }, data: { label: '👁️ Ver, Buscar y\nFiltrar Paychecks\nen sección "Paycheck"' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 7: HOTEL VIEW
    // ═══════════════════════════════════════════════════════
    { id: 'section_hotel_view', type: 'default', position: { x: 900, y: 150 }, data: { label: '🏨 HOTEL\nVIEW' }, className: 'node-hotel' },
    { id: 'hours_per_hotel', type: 'default', position: { x: 900, y: 280 }, data: { label: '⏰ Mostrar Horas\npor Hotel\n(no por colaborador)' }, className: 'node-info' },
    { id: 'hotel_approved', type: 'default', position: { x: 900, y: 420 }, data: { label: '✅ Status "Approved"\ncuando Hotel Manager\naprueba todos los pagos' }, className: 'node-success' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 8: CLAIMS & REPORTS
    // ═══════════════════════════════════════════════════════
    { id: 'section_claims', type: 'default', position: { x: 900, y: 570 }, data: { label: '📋 CLAIMS\nSECTION' }, className: 'node-warning' },
    { id: 'view_claims', type: 'default', position: { x: 900, y: 700 }, data: { label: '👁️ Ver y Gestionar\nReclamos Financieros\nde Hoteles o Colaboradores' }, className: 'node-accounting' },

    { id: 'review_reports', type: 'default', position: { x: 900, y: 840 }, data: { label: '📊 Review Financial\nReports' }, className: 'node-info' },
    { id: 'respond_inquiries', type: 'default', position: { x: 900, y: 960 }, data: { label: '💬 Respond to\nPayment Inquiries' }, className: 'node-info' },
  ],
  edges: [
    // Start → Secciones
    { id: 'e1', source: 'start', target: 'section_payroll' },
    { id: 'e2', source: 'start', target: 'section_timetable' },
    { id: 'e3', source: 'start', target: 'section_invoices' },
    { id: 'e4', source: 'start', target: 'section_hotel_view' },

    // Payroll
    { id: 'e5', source: 'section_payroll', target: 'access_payroll' },
    { id: 'e6', source: 'access_payroll', target: 'review_hours' },
    { id: 'e7', source: 'review_hours', target: 'verify_payment' },
    { id: 'e8', source: 'verify_payment', target: 'approve_payroll' },
    { id: 'e9', source: 'approve_payroll', target: 'section_payment', animated: true },
    { id: 'e10', source: 'section_payment', target: 'gen_payment' },

    // Time Table
    { id: 'e11', source: 'section_timetable', target: 'view_more' },
    { id: 'e12', source: 'view_more', target: 'full_timetable' },

    // Additional Payments
    { id: 'e13', source: 'full_timetable', target: 'section_additional' },
    { id: 'e14', source: 'section_additional', target: 'select_employee' },
    { id: 'e15', source: 'select_employee', target: 'add_payments' },
    { id: 'e16', source: 'select_employee', target: 'add_deductions' },

    // Invoices
    { id: 'e17', source: 'section_invoices', target: 'click_hotel' },
    { id: 'e18', source: 'click_hotel', target: 'hotel_financial' },
    { id: 'e19', source: 'hotel_financial', target: 'create_invoice' },
    { id: 'e20', source: 'create_invoice', target: 'section_paycheck' },

    // Paycheck
    { id: 'e21', source: 'section_paycheck', target: 'view_paychecks' },

    // Hotel View
    { id: 'e22', source: 'section_hotel_view', target: 'hours_per_hotel' },
    { id: 'e23', source: 'hours_per_hotel', target: 'hotel_approved' },
    { id: 'e24', source: 'hotel_approved', target: 'section_claims' },

    // Claims & Reports
    { id: 'e25', source: 'section_claims', target: 'view_claims' },
    { id: 'e26', source: 'view_claims', target: 'review_reports' },
    { id: 'e27', source: 'review_reports', target: 'respond_inquiries' },

    // Cross-connections
    { id: 'e28', source: 'gen_payment', target: 'create_invoice', animated: true, label: 'Genera factura' },
    { id: 'e29', source: 'add_payments', target: 'gen_payment', style: { strokeDasharray: '5,5' } },
    { id: 'e30', source: 'add_deductions', target: 'gen_payment', style: { strokeDasharray: '5,5' } },
  ]
}

export default accountantFlowchartFlow
