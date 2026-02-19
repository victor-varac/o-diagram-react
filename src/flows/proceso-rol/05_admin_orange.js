const adminOrangeRolFlow = {
  nodes: [
    // INICIO
    { id: 'start', type: 'input', position: { x: 500, y: 0 }, data: { label: '👔 Silvia / Dirección\nAdmin Orange Staffing' }, className: 'node-critical' },

    // === SECCIÓN 1: BUSINESS DEVELOPMENT ===
    { id: 'section_biz', type: 'default', position: { x: 50, y: 150 }, data: { label: '🏢 BUSINESS\nDEVELOPMENT' }, className: 'node-recruitment' },
    { id: 'vendedor', type: 'default', position: { x: 50, y: 270 }, data: { label: '👔 Vendedor\nBusiness Dev' }, className: 'node-recruitment' },
    { id: 'prospecto', type: 'default', position: { x: 50, y: 390 }, data: { label: '🏨 Hotel\nProspecto' }, className: 'node-hotel' },
    { id: 'negociacion', type: 'default', position: { x: 50, y: 510 }, data: { label: '🤝 Negociación\nde Contrato' }, className: 'node-info' },
    { id: 'firma_contrato', type: 'default', position: { x: 50, y: 630 }, data: { label: '📄 Firma Service\nContract' }, className: 'node-success' },
    { id: 'definir_rates', type: 'default', position: { x: 200, y: 510 }, data: { label: '💰 Definir Bill\n& Pay Rate' }, className: 'node-accounting' },
    { id: 'margen_objetivo', type: 'default', position: { x: 200, y: 630 }, data: { label: '📊 Margen Objetivo\n30-35%' }, className: 'node-accounting' },

    // === SECCIÓN 2: GESTIÓN DE PERSONAL ===
    { id: 'section_personal', type: 'default', position: { x: 400, y: 150 }, data: { label: '👥 GESTIÓN DE\nPERSONAL' }, className: 'node-info' },
    { id: 'vista_general', type: 'default', position: { x: 400, y: 270 }, data: { label: '📊 Vista General\nTodos los Empleados' }, className: 'node-info' },
    { id: 'pool_recepcion', type: 'default', position: { x: 300, y: 390 }, data: { label: '⚪ Pool Recepción\nNuevos' }, className: 'node-info' },
    { id: 'pool_activos', type: 'default', position: { x: 450, y: 390 }, data: { label: '🟢 Pool Activos\nTrabajando' }, className: 'node-success' },
    { id: 'pool_collab', type: 'default', position: { x: 600, y: 390 }, data: { label: '🎯 Pool\nColaboradores' }, className: 'node-success' },
    { id: 'semaforo_emp', type: 'default', position: { x: 400, y: 510 }, data: { label: '🚦 Semáforo\nEmpleados' }, className: 'node-warning' },
    { id: 'emp_verde', type: 'default', position: { x: 300, y: 610 }, data: { label: '🟢 App ≥60%\nListos' }, className: 'node-success' },
    { id: 'emp_amarillo', type: 'default', position: { x: 450, y: 610 }, data: { label: '🟡 App 40-60%\nAdvertencia' }, className: 'node-warning' },
    { id: 'emp_rojo', type: 'default', position: { x: 600, y: 610 }, data: { label: '🔴 App <60%\nNo Pagables' }, className: 'node-critical' },

    // === SECCIÓN 3: APROBACIÓN DE NÓMINA ===
    { id: 'section_nomina', type: 'default', position: { x: 800, y: 150 }, data: { label: '💰 APROBACIÓN\nDE NÓMINA' }, className: 'node-accounting' },
    { id: 'recibir_reporte', type: 'default', position: { x: 800, y: 270 }, data: { label: '📄 Recibir Reporte\nPre-Nómina' }, className: 'node-accounting' },
    { id: 'monica_preaprueba', type: 'default', position: { x: 800, y: 390 }, data: { label: '💰 Mónica ya validó\n12 verificaciones' }, className: 'node-accounting' },
    { id: 'revision_jueves', type: 'default', position: { x: 800, y: 510 }, data: { label: '⏰ JUEVES 2 PM\nRevisión Final' }, className: 'node-critical' },
    { id: 'revisar_totales', type: 'default', position: { x: 700, y: 630 }, data: { label: '📊 Revisar\nTotales' }, className: 'node-info' },
    { id: 'revisar_discrepancias', type: 'default', position: { x: 850, y: 630 }, data: { label: '⚠️ Revisar\nDiscrepancias' }, className: 'node-warning' },
    { id: 'aprobar_nomina', type: 'default', position: { x: 800, y: 750 }, data: { label: '✅ APROBAR\nNómina Final' }, className: 'node-success' },
    { id: 'rechazar_nomina', type: 'default', position: { x: 1000, y: 630 }, data: { label: '❌ Rechazar\nCorregir' }, className: 'node-critical' },
    { id: 'procesamiento', type: 'default', position: { x: 800, y: 870 }, data: { label: '⚙️ Procesamiento\nJue Noche' }, className: 'node-info' },
    { id: 'pago_viernes', type: 'default', position: { x: 800, y: 990 }, data: { label: '💰 Pago Vie 5 AM\nDinero Disponible' }, className: 'node-success' },

    // === SECCIÓN 4: SUPERVISIÓN GENERAL ===
    { id: 'section_supervision', type: 'default', position: { x: 200, y: 780 }, data: { label: '📊 SUPERVISIÓN\nGENERAL' }, className: 'node-info' },
    { id: 'dashboard_general', type: 'default', position: { x: 50, y: 900 }, data: { label: '📊 Dashboard\nGeneral' }, className: 'node-info' },
    { id: 'rentabilidad', type: 'default', position: { x: 200, y: 900 }, data: { label: '💰 Rentabilidad\npor Hotel' }, className: 'node-accounting' },
    { id: 'kpis', type: 'default', position: { x: 350, y: 900 }, data: { label: '📈 KPIs\nOperativos' }, className: 'node-info' },
    { id: 'req_activas', type: 'default', position: { x: 50, y: 1020 }, data: { label: '📋 Requisiciones\nActivas' }, className: 'node-hotel' },
    { id: 'tasa_show', type: 'default', position: { x: 200, y: 1020 }, data: { label: '📊 Tasa de\nShow/No-Show' }, className: 'node-warning' },
    { id: 'satisfaccion', type: 'default', position: { x: 350, y: 1020 }, data: { label: '⭐ Satisfacción\nHoteles' }, className: 'node-success' },

    // === SECCIÓN 5: DECISIONES CRÍTICAS ===
    { id: 'section_decisiones', type: 'default', position: { x: 600, y: 1100 }, data: { label: '⚖️ DECISIONES\nCRÍTICAS' }, className: 'node-critical' },
    { id: 'aprobar_blacklist', type: 'default', position: { x: 450, y: 1220 }, data: { label: '🚫 Aprobar/Rechazar\nBlack List' }, className: 'node-blacklist' },
    { id: 'resolver_claims', type: 'default', position: { x: 600, y: 1220 }, data: { label: '📋 Decidir sobre\nReclamaciones' }, className: 'node-warning' },
    { id: 'gestionar_contratos', type: 'default', position: { x: 750, y: 1220 }, data: { label: '📄 Gestionar\nContratos Hotel' }, className: 'node-hotel' },
    { id: 'politicas_rh', type: 'default', position: { x: 600, y: 1340 }, data: { label: '📋 Políticas de\nRecursos Humanos' }, className: 'node-info' },

    // === SEGURIDAD ===
    { id: 'security', type: 'default', position: { x: 1100, y: 150 }, data: { label: '🔐 SEGURIDAD\nY CONTROL' }, className: 'node-critical' },
    { id: 'unica_aprueba', type: 'default', position: { x: 1100, y: 270 }, data: { label: '✅ ÚNICA persona\nque aprueba nómina' }, className: 'node-success' },
    { id: 'modifica_banco', type: 'default', position: { x: 1100, y: 390 }, data: { label: '🏦 Puede modificar\ndatos bancarios' }, className: 'node-warning' },
    { id: 'blacklist_power', type: 'default', position: { x: 1100, y: 510 }, data: { label: '🚫 Poder de Black\nList permanente' }, className: 'node-blacklist' },
  ],
  edges: [
    // Inicio a secciones
    { id: 'e1', source: 'start', target: 'section_biz' },
    { id: 'e2', source: 'start', target: 'section_personal' },
    { id: 'e3', source: 'start', target: 'section_nomina' },
    { id: 'e4', source: 'start', target: 'security', style: { strokeDasharray: '5,5', stroke: '#c62828' } },

    // Business development
    { id: 'e5', source: 'section_biz', target: 'vendedor' },
    { id: 'e6', source: 'vendedor', target: 'prospecto' },
    { id: 'e7', source: 'prospecto', target: 'negociacion' },
    { id: 'e8', source: 'negociacion', target: 'definir_rates' },
    { id: 'e9', source: 'negociacion', target: 'firma_contrato' },
    { id: 'e10', source: 'definir_rates', target: 'margen_objetivo' },
    { id: 'e11', source: 'margen_objetivo', target: 'firma_contrato', animated: true },

    // Gestión de personal
    { id: 'e12', source: 'section_personal', target: 'vista_general' },
    { id: 'e13', source: 'vista_general', target: 'pool_recepcion' },
    { id: 'e14', source: 'vista_general', target: 'pool_activos' },
    { id: 'e15', source: 'vista_general', target: 'pool_collab' },
    { id: 'e16', source: 'pool_activos', target: 'semaforo_emp' },
    { id: 'e17', source: 'semaforo_emp', target: 'emp_verde', label: '🟢' },
    { id: 'e18', source: 'semaforo_emp', target: 'emp_amarillo', label: '🟡' },
    { id: 'e19', source: 'semaforo_emp', target: 'emp_rojo', label: '🔴' },

    // Aprobación de nómina
    { id: 'e20', source: 'section_nomina', target: 'recibir_reporte' },
    { id: 'e21', source: 'recibir_reporte', target: 'monica_preaprueba' },
    { id: 'e22', source: 'monica_preaprueba', target: 'revision_jueves' },
    { id: 'e23', source: 'revision_jueves', target: 'revisar_totales' },
    { id: 'e24', source: 'revision_jueves', target: 'revisar_discrepancias' },
    { id: 'e25', source: 'revisar_totales', target: 'aprobar_nomina' },
    { id: 'e26', source: 'revisar_discrepancias', target: 'rechazar_nomina', label: 'Hay errores', style: { stroke: '#c62828' } },
    { id: 'e27', source: 'revisar_discrepancias', target: 'aprobar_nomina', label: 'OK' },
    { id: 'e28', source: 'rechazar_nomina', target: 'recibir_reporte', label: 'Devolver', style: { stroke: '#c62828', strokeDasharray: '5,5' } },
    { id: 'e29', source: 'aprobar_nomina', target: 'procesamiento' },
    { id: 'e30', source: 'procesamiento', target: 'pago_viernes', animated: true },

    // Supervisión general
    { id: 'e31', source: 'section_personal', target: 'section_supervision', style: { strokeDasharray: '5,5' } },
    { id: 'e32', source: 'section_supervision', target: 'dashboard_general' },
    { id: 'e33', source: 'section_supervision', target: 'rentabilidad' },
    { id: 'e34', source: 'section_supervision', target: 'kpis' },
    { id: 'e35', source: 'dashboard_general', target: 'req_activas' },
    { id: 'e36', source: 'rentabilidad', target: 'tasa_show' },
    { id: 'e37', source: 'kpis', target: 'satisfaccion' },

    // Decisiones críticas
    { id: 'e38', source: 'section_supervision', target: 'section_decisiones', style: { strokeDasharray: '5,5' } },
    { id: 'e39', source: 'pago_viernes', target: 'section_decisiones', style: { strokeDasharray: '5,5' } },
    { id: 'e40', source: 'section_decisiones', target: 'aprobar_blacklist' },
    { id: 'e41', source: 'section_decisiones', target: 'resolver_claims' },
    { id: 'e42', source: 'section_decisiones', target: 'gestionar_contratos' },
    { id: 'e43', source: 'resolver_claims', target: 'politicas_rh', style: { strokeDasharray: '5,5' } },

    // Seguridad
    { id: 'e44', source: 'security', target: 'unica_aprueba' },
    { id: 'e45', source: 'security', target: 'modifica_banco' },
    { id: 'e46', source: 'security', target: 'blacklist_power' },
  ]
}

export default adminOrangeRolFlow
