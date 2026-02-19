const adminHotelRolFlow = {
  nodes: [
    // INICIO
    { id: 'start', type: 'input', position: { x: 400, y: 0 }, data: { label: '👨‍💼 Manager Hotel\nAdministración' }, className: 'node-hotel' },

    // === SECCIÓN 1: SOLICITAR PERSONAL ===
    { id: 'section_solicitar', type: 'default', position: { x: 100, y: 140 }, data: { label: '📋 SOLICITAR\nPERSONAL' }, className: 'node-hotel' },
    { id: 'identificar_necesidad', type: 'default', position: { x: 100, y: 260 }, data: { label: '📊 Identificar\nNecesidad de Personal' }, className: 'node-info' },
    { id: 'crear_requisicion', type: 'default', position: { x: 100, y: 380 }, data: { label: '📋 Crear\nRequisición' }, className: 'node-hotel' },
    { id: 'definir_posicion', type: 'default', position: { x: 250, y: 260 }, data: { label: '👤 Definir Posición\ny Horario' }, className: 'node-info' },
    { id: 'definir_cantidad', type: 'default', position: { x: 250, y: 380 }, data: { label: '📊 Definir Cantidad\nde Empleados' }, className: 'node-info' },
    { id: 'anticipacion', type: 'default', position: { x: 100, y: 500 }, data: { label: '⏰ Anticipación\nRecomendada >120h' }, className: 'node-warning' },
    { id: 'prio_verde', type: 'default', position: { x: 250, y: 460 }, data: { label: '🟢 >120h\nNormal' }, className: 'node-success' },
    { id: 'prio_amarillo', type: 'default', position: { x: 250, y: 520 }, data: { label: '🟡 72-120h\nMedia' }, className: 'node-warning' },
    { id: 'prio_rojo', type: 'default', position: { x: 250, y: 580 }, data: { label: '🔴 <72h\nUrgente' }, className: 'node-critical' },

    // === SECCIÓN 2: CONTRATO Y TARIFAS ===
    { id: 'section_contrato', type: 'default', position: { x: 500, y: 140 }, data: { label: '📄 CONTRATO\nY TARIFAS' }, className: 'node-accounting' },
    { id: 'service_contract', type: 'default', position: { x: 500, y: 260 }, data: { label: '📄 Service Contract\nFirmado' }, className: 'node-accounting' },
    { id: 'bill_rate', type: 'default', position: { x: 450, y: 380 }, data: { label: '💰 Bill Rate\n~$19.58/hr\n(Hotel paga)' }, className: 'node-hotel' },
    { id: 'margin_note', type: 'default', position: { x: 600, y: 380 }, data: { label: '📊 Orange gestiona\nmargen 30-35%' }, className: 'node-info' },

    // === SECCIÓN 3: RECIBIR EMPLEADOS ===
    { id: 'section_recibir', type: 'default', position: { x: 850, y: 140 }, data: { label: '🤝 RECIBIR\nEMPLEADOS' }, className: 'node-success' },
    { id: 'emp_asignado', type: 'default', position: { x: 850, y: 260 }, data: { label: '👤 Empleado\nAsignado llega' }, className: 'node-info' },
    { id: 'inspector_onboard', type: 'default', position: { x: 850, y: 380 }, data: { label: '🏆 Inspector hace\nOnboarding Día 1' }, className: 'node-quality' },
    { id: 'emp_trabaja', type: 'default', position: { x: 850, y: 500 }, data: { label: '👔 Empleado\nTrabajando' }, className: 'node-success' },
    { id: 'tracking_emp', type: 'default', position: { x: 1000, y: 380 }, data: { label: '📍 Tracking\nEmpleados Activos' }, className: 'node-info' },

    // === SECCIÓN 4: REPORTE DE HORAS ===
    { id: 'section_horas', type: 'default', position: { x: 200, y: 720 }, data: { label: '⏰ REPORTE\nDE HORAS' }, className: 'node-critical' },
    { id: 'semana_laboral', type: 'default', position: { x: 50, y: 840 }, data: { label: '📅 Semana Laboral\nDom-Sáb' }, className: 'node-info' },
    { id: 'empleados_ponchan', type: 'default', position: { x: 200, y: 840 }, data: { label: '⏰ Empleados\nPonchando' }, className: 'node-info' },
    { id: 'hotel_tracking', type: 'default', position: { x: 350, y: 840 }, data: { label: '🏨 Hotel\nTracking Horas' }, className: 'node-hotel' },
    { id: 'acumular_horas', type: 'default', position: { x: 200, y: 960 }, data: { label: '📊 Acumulación\nde Horas' }, className: 'node-info' },
    { id: 'deadline_mie', type: 'default', position: { x: 200, y: 1080 }, data: { label: '🔴 MIÉRCOLES\n11:59 PM\nDEADLINE' }, className: 'node-critical' },
    { id: 'reportar_horas', type: 'default', position: { x: 200, y: 1200 }, data: { label: '📊 Reportar Horas\nFinales a Orange' }, className: 'node-hotel' },
    { id: 'desfase_nota', type: 'default', position: { x: 400, y: 1080 }, data: { label: '⚠️ DESFASE 1 SEMANA\nPaga semana anterior' }, className: 'node-warning' },

    // === SECCIÓN 5: REPORTAR INCIDENTES ===
    { id: 'section_incidentes', type: 'default', position: { x: 700, y: 720 }, data: { label: '⚠️ REPORTAR\nINCIDENTES' }, className: 'node-warning' },
    { id: 'inc_calidad', type: 'default', position: { x: 600, y: 840 }, data: { label: '📝 Problema de\nCalidad/Servicio' }, className: 'node-warning' },
    { id: 'inc_ausencia', type: 'default', position: { x: 750, y: 840 }, data: { label: '❌ Ausencia /\nNo-Show' }, className: 'node-critical' },
    { id: 'inc_comportamiento', type: 'default', position: { x: 900, y: 840 }, data: { label: '🔴 Problema de\nComportamiento' }, className: 'node-critical' },
    { id: 'notificar_orange', type: 'default', position: { x: 750, y: 960 }, data: { label: '📞 Notificar a\nOrange Staffing' }, className: 'node-info' },
    { id: 'solicitar_reemplazo', type: 'default', position: { x: 750, y: 1080 }, data: { label: '🔄 Solicitar\nReemplazo' }, className: 'node-hotel' },

    // === SECCIÓN 6: FACTURACIÓN ===
    { id: 'section_facturacion', type: 'default', position: { x: 1050, y: 720 }, data: { label: '🧾 FACTURACIÓN' }, className: 'node-accounting' },
    { id: 'recibir_invoice', type: 'default', position: { x: 1050, y: 840 }, data: { label: '🧾 Recibir\nInvoice' }, className: 'node-accounting' },
    { id: 'revisar_horas_fact', type: 'default', position: { x: 1050, y: 960 }, data: { label: '✅ Revisar Horas\nvs Factura' }, className: 'node-info' },
    { id: 'pago_net15', type: 'default', position: { x: 1050, y: 1080 }, data: { label: '💳 Pago\nNet 15' }, className: 'node-success' },
    { id: 'confirmar_servicio', type: 'default', position: { x: 1050, y: 1200 }, data: { label: '✅ Confirmar\nCalidad Servicio' }, className: 'node-success' },
  ],
  edges: [
    // Inicio a secciones
    { id: 'e1', source: 'start', target: 'section_solicitar' },
    { id: 'e2', source: 'start', target: 'section_contrato' },
    { id: 'e3', source: 'start', target: 'section_recibir' },

    // Solicitar personal
    { id: 'e4', source: 'section_solicitar', target: 'identificar_necesidad' },
    { id: 'e5', source: 'identificar_necesidad', target: 'definir_posicion' },
    { id: 'e6', source: 'identificar_necesidad', target: 'crear_requisicion' },
    { id: 'e7', source: 'definir_posicion', target: 'definir_cantidad' },
    { id: 'e8', source: 'definir_cantidad', target: 'crear_requisicion', style: { strokeDasharray: '5,5' } },
    { id: 'e9', source: 'crear_requisicion', target: 'anticipacion' },
    { id: 'e10', source: 'anticipacion', target: 'prio_verde' },
    { id: 'e11', source: 'anticipacion', target: 'prio_amarillo' },
    { id: 'e12', source: 'anticipacion', target: 'prio_rojo' },

    // Contrato
    { id: 'e13', source: 'section_contrato', target: 'service_contract' },
    { id: 'e14', source: 'service_contract', target: 'bill_rate' },
    { id: 'e15', source: 'service_contract', target: 'margin_note', style: { strokeDasharray: '5,5' } },

    // Recibir empleados
    { id: 'e16', source: 'section_recibir', target: 'emp_asignado' },
    { id: 'e17', source: 'emp_asignado', target: 'inspector_onboard' },
    { id: 'e18', source: 'inspector_onboard', target: 'emp_trabaja' },
    { id: 'e19', source: 'emp_asignado', target: 'tracking_emp', style: { strokeDasharray: '5,5' } },

    // Conexión a secciones inferiores
    { id: 'e20', source: 'emp_trabaja', target: 'section_horas' },
    { id: 'e21', source: 'emp_trabaja', target: 'section_incidentes', style: { strokeDasharray: '5,5' } },
    { id: 'e21b', source: 'emp_trabaja', target: 'section_facturacion', style: { strokeDasharray: '5,5' } },

    // Reporte de horas
    { id: 'e22', source: 'section_horas', target: 'semana_laboral' },
    { id: 'e23', source: 'semana_laboral', target: 'empleados_ponchan' },
    { id: 'e24', source: 'empleados_ponchan', target: 'hotel_tracking' },
    { id: 'e25', source: 'empleados_ponchan', target: 'acumular_horas' },
    { id: 'e26', source: 'hotel_tracking', target: 'acumular_horas' },
    { id: 'e27', source: 'acumular_horas', target: 'deadline_mie', animated: true },
    { id: 'e28', source: 'deadline_mie', target: 'reportar_horas' },
    { id: 'e29', source: 'deadline_mie', target: 'desfase_nota', style: { strokeDasharray: '5,5' } },

    // Incidentes
    { id: 'e30', source: 'section_incidentes', target: 'inc_calidad' },
    { id: 'e31', source: 'section_incidentes', target: 'inc_ausencia' },
    { id: 'e32', source: 'section_incidentes', target: 'inc_comportamiento' },
    { id: 'e33', source: 'inc_calidad', target: 'notificar_orange' },
    { id: 'e34', source: 'inc_ausencia', target: 'notificar_orange' },
    { id: 'e35', source: 'inc_comportamiento', target: 'notificar_orange' },
    { id: 'e36', source: 'notificar_orange', target: 'solicitar_reemplazo' },

    // Facturación
    { id: 'e37', source: 'section_facturacion', target: 'recibir_invoice' },
    { id: 'e38', source: 'recibir_invoice', target: 'revisar_horas_fact' },
    { id: 'e39', source: 'revisar_horas_fact', target: 'pago_net15' },
    { id: 'e40', source: 'pago_net15', target: 'confirmar_servicio' },
  ]
}

export default adminHotelRolFlow
