const adminOrangeRolFlow = {
  nodes: [
    // =============================================
    // INICIO
    // =============================================
    { id: 'start', type: 'input', position: { x: 600, y: 0 }, data: { label: '👔 Silvia / Irene\nDirección Orange Staffing\n(Aprueba todo, decide todo)' }, className: 'node-critical' },

    // =============================================
    // === SECCIÓN 1: BUSINESS DEVELOPMENT ===
    // =============================================
    { id: 'section_biz', type: 'default', position: { x: 100, y: 150 }, data: { label: '🏢 BUSINESS\nDEVELOPMENT' }, className: 'node-recruitment' },
    { id: 'vendedor', type: 'default', position: { x: 50, y: 280 }, data: { label: '👔 Vendedor\nBusiness Dev' }, className: 'node-recruitment' },
    { id: 'prospecto', type: 'default', position: { x: 50, y: 400 }, data: { label: '🏨 Hotel\nProspecto' }, className: 'node-hotel' },
    { id: 'negociacion', type: 'default', position: { x: 50, y: 520 }, data: { label: '🤝 Negociación\nde Contrato' }, className: 'node-info' },
    { id: 'definir_rates', type: 'default', position: { x: 220, y: 400 }, data: { label: '💰 Definir Bill\n& Pay Rate\npor posición' }, className: 'node-accounting' },
    { id: 'margen_objetivo', type: 'default', position: { x: 220, y: 520 }, data: { label: '📊 Margen Objetivo\n30-35%' }, className: 'node-accounting' },
    { id: 'firma_contrato', type: 'default', position: { x: 100, y: 640 }, data: { label: '📄 Firma Service\nContract\n(términos y condiciones)' }, className: 'node-success' },

    // =============================================
    // === SECCIÓN 1b: ONBOARDING ADMIN HOTEL NUEVO ===
    // =============================================
    { id: 'section_onboard_hotel', type: 'default', position: { x: 100, y: 790 }, data: { label: '🏨 ONBOARDING\nADMIN HOTEL NUEVO' }, className: 'node-hotel' },

    // Acciones administrativas de Orange
    { id: 'crear_contrato_sys', type: 'default', position: { x: 0, y: 920 }, data: { label: '📄 Crear Contrato\nen Sistema\n• Bill rates por tipo\n• Rates de pago\n• Términos' }, className: 'node-info' },
    { id: 'crear_carpeta_payroll', type: 'default', position: { x: 200, y: 920 }, data: { label: '📁 Crear Carpeta\nPayRoll del Hotel\n• Estructura archivos\n• Contratos firmados' }, className: 'node-info' },
    { id: 'generar_credenciales', type: 'default', position: { x: 400, y: 920 }, data: { label: '🔐 Generar\nCredenciales\nde Acceso' }, className: 'node-info' },

    // Enviar al hotel
    { id: 'enviar_hotel', type: 'default', position: { x: 200, y: 1050 }, data: { label: '📧 Enviar al Hotel:\n• Email con credenciales\n• Link al portal\n• Documentación' }, className: 'node-hotel' },
    { id: 'hotel_listo', type: 'default', position: { x: 200, y: 1170 }, data: { label: '✅ Hotel Listo\npara Operar\n→ Puede crear requisiciones\n→ Puede recibir trabajadores\n→ Puede reportar horas' }, className: 'node-success' },

    // =============================================
    // === SECCIÓN 2: GESTIÓN DE PERSONAL ===
    // =============================================
    { id: 'section_personal', type: 'default', position: { x: 500, y: 150 }, data: { label: '👥 GESTIÓN DE\nPERSONAL' }, className: 'node-info' },
    { id: 'vista_general', type: 'default', position: { x: 500, y: 280 }, data: { label: '📊 Vista General\nTodos los Empleados' }, className: 'node-info' },
    { id: 'pool_recepcion', type: 'default', position: { x: 400, y: 400 }, data: { label: '⚪ Pool Recepción\nNuevos' }, className: 'node-info' },
    { id: 'pool_activos', type: 'default', position: { x: 550, y: 400 }, data: { label: '🟢 Pool Activos\nTrabajando' }, className: 'node-success' },
    { id: 'pool_collab', type: 'default', position: { x: 700, y: 400 }, data: { label: '🎯 Pool\nColaboradores' }, className: 'node-success' },
    { id: 'semaforo_emp', type: 'default', position: { x: 500, y: 520 }, data: { label: '🚦 Semáforo\nEmpleados' }, className: 'node-warning' },
    { id: 'emp_verde', type: 'default', position: { x: 400, y: 640 }, data: { label: '🟢 App ≥60%\nListos para pago' }, className: 'node-success' },
    { id: 'emp_amarillo', type: 'default', position: { x: 550, y: 640 }, data: { label: '🟡 App 40-60%\nAdvertencia\n→ Inspector ayuda' }, className: 'node-warning' },
    { id: 'emp_rojo', type: 'default', position: { x: 700, y: 640 }, data: { label: '🔴 App <40%\nNo Pagables\n→ STRIKE si >72h' }, className: 'node-critical' },

    // =============================================
    // === SECCIÓN 3: APROBACIÓN DE NÓMINA ===
    // =============================================
    { id: 'section_nomina', type: 'default', position: { x: 900, y: 150 }, data: { label: '💰 APROBACIÓN\nDE NÓMINA' }, className: 'node-accounting' },
    { id: 'recibir_reporte', type: 'default', position: { x: 900, y: 280 }, data: { label: '📄 Recibir Reporte\nPre-Nómina\n(de Mónica)' }, className: 'node-accounting' },
    { id: 'monica_preaprueba', type: 'default', position: { x: 900, y: 400 }, data: { label: '💰 Mónica ya validó\n12 verificaciones\n(3 archivos listos)' }, className: 'node-accounting' },
    { id: 'revision_jueves', type: 'default', position: { x: 900, y: 520 }, data: { label: '⏰ JUEVES 12-3 PM\nRevisión Final' }, className: 'node-critical' },
    { id: 'revisar_totales', type: 'default', position: { x: 800, y: 640 }, data: { label: '📊 Revisar:\n• Totales generales\n• Excepciones/anomalías\n• Cheques extemporáneos\n• Reportes especiales' }, className: 'node-info' },
    { id: 'revisar_discrepancias', type: 'default', position: { x: 1000, y: 640 }, data: { label: '⚠️ Revisar\nDiscrepancias' }, className: 'node-warning' },
    { id: 'aprobar_nomina', type: 'default', position: { x: 900, y: 770 }, data: { label: '✅ APROBAR\nNómina Final' }, className: 'node-success' },
    { id: 'rechazar_nomina', type: 'default', position: { x: 1100, y: 770 }, data: { label: '❌ Rechazar\n→ Devolver a Mónica\npara corregir' }, className: 'node-critical' },
    { id: 'procesamiento', type: 'default', position: { x: 900, y: 900 }, data: { label: '⚙️ Procesamiento\nJue 3PM-11PM\n• Transferencias (ACH)\n• Cheques (Paychex)' }, className: 'node-info' },
    { id: 'pago_viernes', type: 'default', position: { x: 900, y: 1030 }, data: { label: '💰 VIE 5 AM\nDinero Disponible\n→ Notifica empleados\n"Tu pago de $XXX\nha sido depositado"' }, className: 'node-success' },

    // =============================================
    // === SECCIÓN 3b: APROBACIONES ESPECIALES ===
    // =============================================
    { id: 'section_aprobaciones', type: 'default', position: { x: 900, y: 1180 }, data: { label: '🔑 APROBACIONES\nESPECIALES' }, className: 'node-critical' },

    // Vacaciones
    { id: 'aprobar_vacaciones', type: 'default', position: { x: 750, y: 1310 }, data: { label: '🌴 VACACIONES\n🔴 TODOS los pagos\nrequieren aprobación\nde Irene/Dirección' }, className: 'node-critical' },
    { id: 'vac_requisitos', type: 'default', position: { x: 750, y: 1440 }, data: { label: '📋 Requisitos:\n• 52 semanas continuas\n• Promedio >32h/sem\n• Horas = promedio\nhrs trabajadas' }, className: 'node-info' },

    // Cheques extemporáneos
    { id: 'aprobar_cheques_ext', type: 'default', position: { x: 950, y: 1310 }, data: { label: '📑 CHEQUES\nEXTEMPORÁNEOS\nAutorización Irene\nvía WhatsApp\n(con Karina)' }, className: 'node-critical' },

    // Reembolsos 16%
    { id: 'aprobar_reembolsos', type: 'default', position: { x: 1150, y: 1310 }, data: { label: '💸 REEMBOLSOS\n16% impuestos\nCuando empleado\nentrega Tax ID\n(solo año fiscal corriente)' }, className: 'node-warning' },

    // Nómina reportada a Irene
    { id: 'reporte_irene', type: 'default', position: { x: 950, y: 1440 }, data: { label: '📊 Nómina Liberada\n→ Reportar a Irene\n(cada semana)' }, className: 'node-info' },

    // =============================================
    // === SECCIÓN 4: CUENTAS BANCARIAS ===
    // =============================================
    { id: 'section_cuentas', type: 'default', position: { x: 1200, y: 150 }, data: { label: '🏦 CUENTAS\nBANCARIAS' }, className: 'node-critical' },

    // Solo Dirección
    { id: 'solo_direccion', type: 'default', position: { x: 1200, y: 280 }, data: { label: '🔐 SOLO Dirección\npuede modificar\ncuentas bancarias' }, className: 'node-critical' },
    { id: 'no_puede', type: 'default', position: { x: 1350, y: 280 }, data: { label: '❌ NO pueden:\n• Mónica (Contabilidad)\n• Calidad\n• Reclutamiento\n• El mismo empleado' }, className: 'node-critical' },

    // Proceso de cambio
    { id: 'emp_solicita', type: 'default', position: { x: 1200, y: 420 }, data: { label: '📋 Empleado solicita\ncambio de cuenta\n(ticket formal + razón)' }, className: 'node-info' },
    { id: 'dir_verifica', type: 'default', position: { x: 1200, y: 540 }, data: { label: '🔍 Dirección:\n• Verifica identidad\n• Valida razón\n• Aprueba o rechaza' }, className: 'node-warning' },
    { id: 'dir_aprueba_cuenta', type: 'default', position: { x: 1100, y: 660 }, data: { label: '✅ Aprobada:\n• Modifica cuenta\n• Invalida anterior\n• Nueva validación $0.01' }, className: 'node-success' },
    { id: 'dir_rechaza_cuenta', type: 'default', position: { x: 1300, y: 660 }, data: { label: '❌ Rechazada:\nEmpleado mantiene\ncuenta actual' }, className: 'node-critical' },
    { id: 'auditoria_cuenta', type: 'default', position: { x: 1200, y: 780 }, data: { label: '📋 Auditoría:\n• Quién modificó\n• Cuándo\n• Cuenta anterior/nueva\n• Razón del cambio' }, className: 'node-info' },
    { id: 'responsabilidad', type: 'default', position: { x: 1200, y: 910 }, data: { label: '⚖️ Responsabilidad:\n• Datos incorrectos del emp\n  → Resp. del empleado\n• Dirección modificó\n  → Resp. de Dirección\n• NUNCA Contabilidad' }, className: 'node-warning' },

    // =============================================
    // === SECCIÓN 5: SUPERVISIÓN Y KPIs ===
    // =============================================
    { id: 'section_supervision', type: 'default', position: { x: 500, y: 1310 }, data: { label: '📊 SUPERVISIÓN\nY KPIs' }, className: 'node-info' },

    // KPIs Operación
    { id: 'kpi_operacion', type: 'default', position: { x: 300, y: 1440 }, data: { label: '🏨 OPERACIÓN\n• 39 hoteles activos\n• Empleados activos\n  (fijos + temporales)\n• % cobertura requisiciones\n• Tiempo prom. cobertura' }, className: 'node-info' },

    // KPIs Rotación
    { id: 'kpi_rotacion', type: 'default', position: { x: 500, y: 1440 }, data: { label: '🔄 ROTACIÓN/RETENCIÓN\n• Nuevos esta semana\n• Salieron esta semana\n• Tasa rotación mensual\n• % empleados >72h\n• % >1 mes / >6 meses' }, className: 'node-warning' },

    // KPIs Financiero
    { id: 'kpi_financiero', type: 'default', position: { x: 300, y: 1590 }, data: { label: '💰 FINANCIERO\n• Total facturado (Bill Rate)\n• Total pagado (Rate)\n• Margen bruto\n• Costos operativos\n• Rentabilidad por hotel' }, className: 'node-accounting' },

    // KPIs Satisfacción
    { id: 'kpi_satisfaccion', type: 'default', position: { x: 500, y: 1590 }, data: { label: '⭐ SATISFACCIÓN\n• NPS hoteles (encuestas)\n• NPS empleados\n• Quejas/incidentes por hotel\n• Resolución <24h' }, className: 'node-success' },

    // KPIs Estrategia
    { id: 'kpi_estrategia', type: 'default', position: { x: 400, y: 1730 }, data: { label: '🎯 ESTRATEGIA\n• Pipeline de ventas\n• Contratos en riesgo\n• Temporal vs Fijo (%)\n• Expansión nuevas ciudades' }, className: 'node-recruitment' },

    // =============================================
    // === SECCIÓN 5b: GESTIÓN DE CONTRATOS ===
    // =============================================
    { id: 'section_contratos', type: 'default', position: { x: 100, y: 1310 }, data: { label: '📄 GESTIÓN DE\nCONTRATOS HOTEL' }, className: 'node-hotel' },

    { id: 'contratos_vigentes', type: 'default', position: { x: 0, y: 1440 }, data: { label: '📋 Contratos\nVigentes\n(renovación anual)' }, className: 'node-hotel' },
    { id: 'alerta_60d', type: 'default', position: { x: 0, y: 1570 }, data: { label: '🟡 60 días antes:\nAdvertencia\nvencimiento' }, className: 'node-warning' },
    { id: 'alerta_30d', type: 'default', position: { x: 0, y: 1660 }, data: { label: '🟠 30 días antes:\nAlerta urgente' }, className: 'node-critical' },
    { id: 'alerta_15d', type: 'default', position: { x: 0, y: 1750 }, data: { label: '🔴 15 días antes:\nAlerta CRÍTICA' }, className: 'node-critical' },
    { id: 'renovar_contrato', type: 'default', position: { x: 150, y: 1570 }, data: { label: '✅ Renovar\nContrato\n(nuevos rates?)' }, className: 'node-success' },
    { id: 'no_renovar', type: 'default', position: { x: 150, y: 1700 }, data: { label: '❌ No Renovar\n→ Reasignar empleados\n→ Cerrar carpeta PayRoll' }, className: 'node-critical' },

    // =============================================
    // === SECCIÓN 6: DECISIONES CRÍTICAS ===
    // =============================================
    { id: 'section_decisiones', type: 'default', position: { x: 600, y: 1880 }, data: { label: '⚖️ DECISIONES\nCRÍTICAS' }, className: 'node-critical' },
    { id: 'aprobar_blacklist', type: 'default', position: { x: 450, y: 2010 }, data: { label: '🚫 Aprobar/Rechazar\nBlack List\n(hotel o global)' }, className: 'node-blacklist' },
    { id: 'resolver_claims', type: 'default', position: { x: 600, y: 2010 }, data: { label: '📋 Decidir sobre\nReclamaciones\nde hoteles/empleados' }, className: 'node-warning' },
    { id: 'gestionar_terminaciones', type: 'default', position: { x: 750, y: 2010 }, data: { label: '🔴 Terminaciones:\n• Desactivar Paychex\n• Recoger uniforme\n• Buscar reemplazo' }, className: 'node-critical' },
    { id: 'politicas_rh', type: 'default', position: { x: 600, y: 2140 }, data: { label: '📋 Políticas RH:\n• Reglas de strikes\n• Criterios blacklist\n• Estrategia retención' }, className: 'node-info' },

    // =============================================
    // === SECCIÓN 7: SEGURIDAD Y CONTROL ===
    // =============================================
    { id: 'section_security', type: 'default', position: { x: 1200, y: 1050 }, data: { label: '🔐 SEGURIDAD\nY CONTROL' }, className: 'node-critical' },
    { id: 'unica_aprueba', type: 'default', position: { x: 1100, y: 1180 }, data: { label: '✅ ÚNICA persona\nque aprueba nómina' }, className: 'node-success' },
    { id: 'modifica_banco', type: 'default', position: { x: 1250, y: 1180 }, data: { label: '🏦 ÚNICA que modifica\ncuentas bancarias\n(prevenir fraudes)' }, className: 'node-warning' },
    { id: 'blacklist_power', type: 'default', position: { x: 1400, y: 1180 }, data: { label: '🚫 Poder de Black\nList permanente\n(hotel o global)' }, className: 'node-blacklist' },
    { id: 'separacion_funciones', type: 'default', position: { x: 1250, y: 1310 }, data: { label: '⚖️ Separación de\nFunciones:\nContabilidad NO aprueba\nDirección NO captura' }, className: 'node-info' },

    // =============================================
    // FIN
    // =============================================
    { id: 'end', type: 'output', position: { x: 600, y: 2280 }, data: { label: '🏁 Dirección Orange\nControl Total del Negocio' }, className: 'node-critical' },
  ],

  edges: [
    // =============================================
    // Inicio → Secciones
    // =============================================
    { id: 'e1', source: 'start', target: 'section_biz' },
    { id: 'e2', source: 'start', target: 'section_personal' },
    { id: 'e3', source: 'start', target: 'section_nomina' },
    { id: 'e3b', source: 'start', target: 'section_cuentas' },

    // =============================================
    // Business Development
    // =============================================
    { id: 'e5', source: 'section_biz', target: 'vendedor' },
    { id: 'e6', source: 'vendedor', target: 'prospecto' },
    { id: 'e7', source: 'prospecto', target: 'negociacion' },
    { id: 'e8', source: 'negociacion', target: 'definir_rates' },
    { id: 'e9', source: 'negociacion', target: 'firma_contrato' },
    { id: 'e10', source: 'definir_rates', target: 'margen_objetivo' },
    { id: 'e11', source: 'margen_objetivo', target: 'firma_contrato', animated: true },

    // =============================================
    // Onboarding Admin Hotel Nuevo
    // =============================================
    { id: 'e_oh1', source: 'firma_contrato', target: 'section_onboard_hotel' },
    { id: 'e_oh2', source: 'section_onboard_hotel', target: 'crear_contrato_sys' },
    { id: 'e_oh3', source: 'section_onboard_hotel', target: 'crear_carpeta_payroll' },
    { id: 'e_oh4', source: 'section_onboard_hotel', target: 'generar_credenciales' },
    { id: 'e_oh5', source: 'crear_contrato_sys', target: 'enviar_hotel' },
    { id: 'e_oh6', source: 'crear_carpeta_payroll', target: 'enviar_hotel' },
    { id: 'e_oh7', source: 'generar_credenciales', target: 'enviar_hotel' },
    { id: 'e_oh8', source: 'enviar_hotel', target: 'hotel_listo' },

    // =============================================
    // Gestión de Personal
    // =============================================
    { id: 'e12', source: 'section_personal', target: 'vista_general' },
    { id: 'e13', source: 'vista_general', target: 'pool_recepcion' },
    { id: 'e14', source: 'vista_general', target: 'pool_activos' },
    { id: 'e15', source: 'vista_general', target: 'pool_collab' },
    { id: 'e16', source: 'pool_activos', target: 'semaforo_emp' },
    { id: 'e17', source: 'semaforo_emp', target: 'emp_verde', label: '🟢' },
    { id: 'e18', source: 'semaforo_emp', target: 'emp_amarillo', label: '🟡' },
    { id: 'e19', source: 'semaforo_emp', target: 'emp_rojo', label: '🔴' },

    // =============================================
    // Aprobación de Nómina
    // =============================================
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

    // =============================================
    // Aprobaciones Especiales
    // =============================================
    { id: 'e_ap1', source: 'pago_viernes', target: 'section_aprobaciones', style: { strokeDasharray: '5,5' } },
    { id: 'e_ap2', source: 'section_aprobaciones', target: 'aprobar_vacaciones' },
    { id: 'e_ap3', source: 'section_aprobaciones', target: 'aprobar_cheques_ext' },
    { id: 'e_ap4', source: 'section_aprobaciones', target: 'aprobar_reembolsos' },
    { id: 'e_ap5', source: 'aprobar_vacaciones', target: 'vac_requisitos' },
    { id: 'e_ap6', source: 'aprobar_cheques_ext', target: 'reporte_irene', style: { strokeDasharray: '5,5' } },
    { id: 'e_ap7', source: 'aprobar_vacaciones', target: 'reporte_irene', style: { strokeDasharray: '5,5' } },

    // =============================================
    // Cuentas Bancarias
    // =============================================
    { id: 'e_cb1', source: 'section_cuentas', target: 'solo_direccion' },
    { id: 'e_cb2', source: 'solo_direccion', target: 'no_puede', style: { stroke: '#c62828', strokeDasharray: '5,5' } },
    { id: 'e_cb3', source: 'solo_direccion', target: 'emp_solicita' },
    { id: 'e_cb4', source: 'emp_solicita', target: 'dir_verifica' },
    { id: 'e_cb5', source: 'dir_verifica', target: 'dir_aprueba_cuenta', label: 'Aprueba' },
    { id: 'e_cb6', source: 'dir_verifica', target: 'dir_rechaza_cuenta', label: 'Rechaza', style: { stroke: '#c62828' } },
    { id: 'e_cb7', source: 'dir_aprueba_cuenta', target: 'auditoria_cuenta' },
    { id: 'e_cb8', source: 'dir_rechaza_cuenta', target: 'auditoria_cuenta', style: { strokeDasharray: '5,5' } },
    { id: 'e_cb9', source: 'auditoria_cuenta', target: 'responsabilidad' },

    // =============================================
    // Supervisión y KPIs
    // =============================================
    { id: 'e_kpi1', source: 'section_personal', target: 'section_supervision', style: { strokeDasharray: '5,5' } },
    { id: 'e_kpi2', source: 'section_supervision', target: 'kpi_operacion' },
    { id: 'e_kpi3', source: 'section_supervision', target: 'kpi_rotacion' },
    { id: 'e_kpi4', source: 'kpi_operacion', target: 'kpi_financiero' },
    { id: 'e_kpi5', source: 'kpi_rotacion', target: 'kpi_satisfaccion' },
    { id: 'e_kpi6', source: 'kpi_financiero', target: 'kpi_estrategia' },
    { id: 'e_kpi7', source: 'kpi_satisfaccion', target: 'kpi_estrategia' },

    // =============================================
    // Gestión de Contratos
    // =============================================
    { id: 'e_gc1', source: 'section_supervision', target: 'section_contratos', style: { strokeDasharray: '5,5' } },
    { id: 'e_gc2', source: 'section_contratos', target: 'contratos_vigentes' },
    { id: 'e_gc3', source: 'contratos_vigentes', target: 'alerta_60d' },
    { id: 'e_gc4', source: 'alerta_60d', target: 'alerta_30d' },
    { id: 'e_gc5', source: 'alerta_30d', target: 'alerta_15d' },
    { id: 'e_gc6', source: 'alerta_60d', target: 'renovar_contrato' },
    { id: 'e_gc7', source: 'alerta_15d', target: 'no_renovar', style: { stroke: '#c62828' } },
    { id: 'e_gc8', source: 'renovar_contrato', target: 'section_biz', label: 'Renegociar rates', style: { strokeDasharray: '8,4' } },

    // =============================================
    // Decisiones Críticas
    // =============================================
    { id: 'e_dc1', source: 'kpi_estrategia', target: 'section_decisiones', style: { strokeDasharray: '5,5' } },
    { id: 'e_dc2', source: 'section_aprobaciones', target: 'section_decisiones', style: { strokeDasharray: '5,5' } },
    { id: 'e40', source: 'section_decisiones', target: 'aprobar_blacklist' },
    { id: 'e41', source: 'section_decisiones', target: 'resolver_claims' },
    { id: 'e42', source: 'section_decisiones', target: 'gestionar_terminaciones' },
    { id: 'e43', source: 'resolver_claims', target: 'politicas_rh', style: { strokeDasharray: '5,5' } },
    { id: 'e43b', source: 'gestionar_terminaciones', target: 'politicas_rh', style: { strokeDasharray: '5,5' } },

    // =============================================
    // Seguridad y Control
    // =============================================
    { id: 'e_sec1', source: 'pago_viernes', target: 'section_security', style: { strokeDasharray: '5,5', stroke: '#c62828' } },
    { id: 'e44', source: 'section_security', target: 'unica_aprueba' },
    { id: 'e45', source: 'section_security', target: 'modifica_banco' },
    { id: 'e46', source: 'section_security', target: 'blacklist_power' },
    { id: 'e47', source: 'unica_aprueba', target: 'separacion_funciones', style: { strokeDasharray: '5,5' } },
    { id: 'e48', source: 'modifica_banco', target: 'separacion_funciones', style: { strokeDasharray: '5,5' } },

    // =============================================
    // Fin
    // =============================================
    { id: 'e_end1', source: 'politicas_rh', target: 'end' },
    { id: 'e_end2', source: 'aprobar_blacklist', target: 'end', style: { strokeDasharray: '5,5' } },
  ]
}

export default adminOrangeRolFlow
