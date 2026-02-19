const colaboradorRolFlow = {
  nodes: [
    // INICIO
    { id: 'start', type: 'input', position: { x: 550, y: 0 }, data: { label: '👷 Colaborador\nTrabajador Orange' }, className: 'node-success' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 1: RECLUTAMIENTO Y REGISTRO (Corregido por Karina)
    // ═══════════════════════════════════════════════════════
    { id: 'section_registro', type: 'default', position: { x: 50, y: 150 }, data: { label: '📋 RECLUTAMIENTO\nY REGISTRO' }, className: 'node-info' },
    { id: 'reclut_facebook', type: 'default', position: { x: 50, y: 270 }, data: { label: '📱 Reclutamiento\nvía Facebook / Redes' }, className: 'node-recruitment' },
    { id: 'sms_link', type: 'default', position: { x: 50, y: 390 }, data: { label: '📲 Recibe SMS\ncon Link de Descarga' }, className: 'node-info' },
    { id: 'download_app', type: 'default', position: { x: 50, y: 510 }, data: { label: '📥 Descarga App\nTeléfono Pre-cargado' }, className: 'node-info' },
    { id: 'cuenta_precreada', type: 'default', position: { x: 50, y: 630 }, data: { label: '👤 Cuenta Pre-creada\nSolo ingresa sus datos\npara activarla' }, className: 'node-success' },
    { id: 'llenar_datos', type: 'default', position: { x: 50, y: 760 }, data: { label: '📝 Llena sus Datos\nInfo Personal, ID, Tax' }, className: 'node-warning' },
    { id: 'foto_docs', type: 'default', position: { x: 220, y: 760 }, data: { label: '📷 Foto Documentos:\nPermiso Trabajo,\nSSN, Pasaporte' }, className: 'node-info' },
    { id: 'blacklist_check', type: 'default', position: { x: 50, y: 890 }, data: { label: '🔍 Búsqueda\nBlack List' }, className: 'node-warning' },
    { id: 'rejected', type: 'default', position: { x: 220, y: 890 }, data: { label: '❌ RECHAZADO\nNo puede registrarse' }, className: 'node-critical' },
    { id: 'pool_recepcion', type: 'default', position: { x: 50, y: 1010 }, data: { label: '⚪ Pool Recepción\nEsperando asignación' }, className: 'node-info' },
    { id: 'emp_type', type: 'default', position: { x: 50, y: 1130 }, data: { label: '🔀 Tipo Empleado\nContratista / Directa' }, className: 'node-warning' },
    { id: 'both_orange', type: 'default', position: { x: 50, y: 1250 }, data: { label: '💼 Ambos empleados\nde Orange Staffing' }, className: 'node-accounting' },
    { id: 'waiver', type: 'default', position: { x: 220, y: 1190 }, data: { label: '📄 Waiver of\nLiability' }, className: 'node-info' },
    { id: 'handbook', type: 'default', position: { x: 220, y: 1270 }, data: { label: '📄 Employment\nHandbook' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 2: PRIMER DÍA Y ONBOARDING
    // ═══════════════════════════════════════════════════════
    { id: 'section_onboard', type: 'default', position: { x: 450, y: 150 }, data: { label: '🤝 PRIMER DÍA\nY ONBOARDING' }, className: 'node-quality' },
    { id: 'notif_asignacion', type: 'default', position: { x: 450, y: 270 }, data: { label: '🔔 Recibe Notificación\nAsignación a Hotel' }, className: 'node-info' },
    { id: 'decide', type: 'default', position: { x: 450, y: 380 }, data: { label: '🤔 Acepta o\nRechaza?' }, className: 'node-warning' },
    { id: 'rechaza_asig', type: 'default', position: { x: 610, y: 380 }, data: { label: '❌ Rechaza\nVuelve al Pool' }, className: 'node-critical' },
    { id: 'dia_1', type: 'default', position: { x: 450, y: 490 }, data: { label: '📅 Día 1 - 8:00 AM\nSe presenta en Hotel' }, className: 'node-success' },
    { id: 'inspector_onboard', type: 'default', position: { x: 450, y: 600 }, data: { label: '🏆 Inspector hace\nOnboarding + Intro' }, className: 'node-quality' },
    { id: 'app_60', type: 'default', position: { x: 450, y: 710 }, data: { label: '📱 Completar App 60%\nMétodo de Pago' }, className: 'node-warning' },
    { id: 'timeline_72h', type: 'default', position: { x: 450, y: 820 }, data: { label: '⏰ Timeline 72h\nDEADLINE App 100%' }, className: 'node-critical' },
    { id: 'r24h', type: 'default', position: { x: 610, y: 760 }, data: { label: '24h: Recordatorio\nAutomático' }, className: 'node-warning' },
    { id: 'r48h', type: 'default', position: { x: 610, y: 840 }, data: { label: '48h: Llamada\nReclutadora' }, className: 'node-warning' },
    { id: 'r72h', type: 'default', position: { x: 610, y: 920 }, data: { label: '72h: 🔴 CRÍTICO\nÚltima oportunidad' }, className: 'node-critical' },

    // Evaluaciones de seguimiento
    { id: 'section_evals', type: 'default', position: { x: 450, y: 960 }, data: { label: '📊 EVALUACIONES\nDE SEGUIMIENTO' }, className: 'node-quality' },
    { id: 'eval_dia5', type: 'default', position: { x: 450, y: 1080 }, data: { label: '📅 Evaluación Día 5\nCon Inspector + Gerencia' }, className: 'node-quality' },
    { id: 'eval_dia10', type: 'default', position: { x: 450, y: 1190 }, data: { label: '📅 Evaluación Día 10\nIntegración y Desempeño' }, className: 'node-quality' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 3: CONFIGURACIÓN DE PAGO
    // ═══════════════════════════════════════════════════════
    { id: 'section_pago', type: 'default', position: { x: 850, y: 150 }, data: { label: '💳 CONFIGURACIÓN\nDE PAGO' }, className: 'node-accounting' },
    { id: 'metodo_pago', type: 'default', position: { x: 850, y: 270 }, data: { label: 'Método de\nPago?' }, className: 'node-info' },
    { id: 'transferencia', type: 'default', position: { x: 770, y: 390 }, data: { label: '💳 Transferencia\nBancaria' }, className: 'node-info' },
    { id: 'cheque', type: 'default', position: { x: 930, y: 390 }, data: { label: '📄 Cheque\nPaychex' }, className: 'node-info' },
    { id: 'validar_bank', type: 'default', position: { x: 770, y: 510 }, data: { label: '✅ Validar $0.01\nCuenta bancaria' }, className: 'node-info' },
    { id: 'status_verde', type: 'default', position: { x: 850, y: 630 }, data: { label: '🟢 STATUS VERDE\nListo para Nómina' }, className: 'node-success' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 4: OPERACIÓN DIARIA
    // ═══════════════════════════════════════════════════════
    { id: 'section_operacion', type: 'default', position: { x: 850, y: 770 }, data: { label: '⏰ OPERACIÓN\nDIARIA' }, className: 'node-info' },
    { id: 'ponchado', type: 'default', position: { x: 770, y: 890 }, data: { label: '⏰ Ponchado\nEntrada / Salida' }, className: 'node-info' },
    { id: 'horas', type: 'default', position: { x: 930, y: 890 }, data: { label: '📊 Horas Trabajadas\nDom-Sáb' }, className: 'node-info' },
    { id: 'desfase', type: 'default', position: { x: 770, y: 1000 }, data: { label: '⚠️ Desfase 1 Semana\nPaga semana anterior' }, className: 'node-warning' },
    { id: 'pago_viernes', type: 'default', position: { x: 930, y: 1000 }, data: { label: '💰 Pago Viernes\n5:00 AM' }, className: 'node-success' },
    { id: 'trabajando', type: 'default', position: { x: 850, y: 1110 }, data: { label: '👔 Empleado Activo\nTrabajando' }, className: 'node-success' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 5: UNIFORME
    // ═══════════════════════════════════════════════════════
    { id: 'section_uniforme', type: 'default', position: { x: 1200, y: 150 }, data: { label: '👕 UNIFORME' }, className: 'node-quality' },
    { id: 'uniforme_dia', type: 'default', position: { x: 1200, y: 270 }, data: { label: '📅 Día 3 (Fijo)\nDía 5 (Temporal)' }, className: 'node-quality' },
    { id: 'recibe_uniforme', type: 'default', position: { x: 1200, y: 390 }, data: { label: '👕 Recibe Uniforme\nFranela / Pantalón' }, className: 'node-quality' },
    { id: 'cobro_uniforme', type: 'default', position: { x: 1200, y: 510 }, data: { label: '💵 Cobro $30 USD\nDescontado de cheque' }, className: 'node-accounting' },
    { id: 'firma_uniforme', type: 'default', position: { x: 1200, y: 630 }, data: { label: '✍️ Firma Digital\n+ Foto Evidencia' }, className: 'node-quality' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 6: SOLICITUDES DEL COLABORADOR (desde junta)
    // ═══════════════════════════════════════════════════════
    { id: 'section_solicitudes', type: 'default', position: { x: 1200, y: 770 }, data: { label: '📋 SOLICITUDES\nDEL COLABORADOR' }, className: 'node-warning' },
    { id: 'sol_ajuste_pago', type: 'default', position: { x: 1100, y: 900 }, data: { label: '💸 Ajuste\nde Pago' }, className: 'node-accounting' },
    { id: 'sol_reubicacion', type: 'default', position: { x: 1250, y: 900 }, data: { label: '🏨 Reubicación\nde Propiedad' }, className: 'node-hotel' },
    { id: 'sol_incremento', type: 'default', position: { x: 1400, y: 900 }, data: { label: '📈 Más Horas\n/ Días' }, className: 'node-info' },
    { id: 'sol_discrepancia', type: 'default', position: { x: 1100, y: 1010 }, data: { label: '❓ Discrepancia\nde Pago' }, className: 'node-warning' },
    { id: 'sol_comp_anual', type: 'default', position: { x: 1250, y: 1010 }, data: { label: '🌴 Compensación\nAnual (🆕)' }, className: 'node-accounting' },
    { id: 'sol_tiempo_libre', type: 'default', position: { x: 1400, y: 1010 }, data: { label: '🏖️ Requerir\nTiempo Libre (🆕)' }, className: 'node-info' },
    { id: 'sol_40h_off', type: 'default', position: { x: 1100, y: 1120 }, data: { label: '⏰ Requerir\n40 Horas Off (🆕)' }, className: 'node-info' },
    { id: 'sol_comp_extra', type: 'default', position: { x: 1250, y: 1120 }, data: { label: '💲 Reembolso\n16% (🆕)' }, className: 'node-accounting' },
    { id: 'sol_ajuste_contrato', type: 'default', position: { x: 1400, y: 1120 }, data: { label: '📄 Ajuste de\nContrato' }, className: 'node-info' },
    { id: 'sol_enviado', type: 'default', position: { x: 1250, y: 1240 }, data: { label: '📤 Solicitud Enviada\nvía App a Contabilidad' }, className: 'node-success' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 7: VACACIONES (Regla de Negocio)
    // ═══════════════════════════════════════════════════════
    { id: 'section_vacaciones', type: 'default', position: { x: 1550, y: 150 }, data: { label: '🌴 VACACIONES\nPolítica Actual' }, className: 'node-info' },
    { id: 'vac_52sem', type: 'default', position: { x: 1550, y: 270 }, data: { label: '📅 52 Semanas\nContinuas Trabajando' }, className: 'node-info' },
    { id: 'vac_promedio', type: 'default', position: { x: 1550, y: 390 }, data: { label: '📏 Pago = Promedio\nhrs trabajadas en 52 sem\n(ya no 40h fijas)' }, className: 'node-warning' },
    { id: 'vac_regla', type: 'default', position: { x: 1550, y: 520 }, data: { label: '📊 ¿Trabaja ≥40h\npor semana regular?' }, className: 'node-warning' },
    { id: 'vac_normal', type: 'default', position: { x: 1650, y: 640 }, data: { label: '✅ Vacaciones\nNormales\n(descansar 1 semana)' }, className: 'node-success' },
    { id: 'vac_menos40', type: 'default', position: { x: 1450, y: 640 }, data: { label: '⚠️ <40h/sem\nPre-aprobar pago\nsin descanso físico' }, className: 'node-warning' },
    { id: 'vac_nota', type: 'default', position: { x: 1450, y: 760 }, data: { label: '💡 Necesidad económica\nreal (ej: cheques\n$200-$300/sem)' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 8: INJURY REPORT (Accidente Laboral)
    // ═══════════════════════════════════════════════════════
    { id: 'section_injury', type: 'default', position: { x: 1550, y: 900 }, data: { label: '🚑 INJURY REPORT\nMódulo Digital (🆕)' }, className: 'node-critical' },
    { id: 'injury_reporte', type: 'default', position: { x: 1550, y: 1020 }, data: { label: '📝 Reportar Accidente\nDesde App' }, className: 'node-critical' },
    { id: 'injury_datos', type: 'default', position: { x: 1450, y: 1140 }, data: { label: '⏰ Hora incidente +\nHrs trabajadas +\nDescripción' }, className: 'node-info' },
    { id: 'injury_fotos', type: 'default', position: { x: 1650, y: 1140 }, data: { label: '📷 Fotos +\nParte del cuerpo\nafectada' }, className: 'node-info' },
    { id: 'injury_firma', type: 'default', position: { x: 1550, y: 1250 }, data: { label: '✍️ Firma Digital\ndel Colaborador' }, className: 'node-quality' },
    { id: 'injury_tablero', type: 'default', position: { x: 1550, y: 1360 }, data: { label: '📊 Visible en\nsu Tablero Personal' }, className: 'node-success' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 9: RIESGOS
    // ═══════════════════════════════════════════════════════
    { id: 'section_riesgos', type: 'default', position: { x: 550, y: 1350 }, data: { label: '⚠️ RIESGOS' }, className: 'node-critical' },
    { id: 'evaluaciones', type: 'default', position: { x: 400, y: 1470 }, data: { label: '📊 Evaluaciones\nde Desempeño' }, className: 'node-warning' },
    { id: 'calif_afecta', type: 'default', position: { x: 400, y: 1580 }, data: { label: '📉 Calificación afecta\nfuturas asignaciones' }, className: 'node-warning' },
    { id: 'incidente', type: 'default', position: { x: 550, y: 1470 }, data: { label: '🔴 Incidente\nGrave' }, className: 'node-critical' },
    { id: 'accidente', type: 'default', position: { x: 700, y: 1470 }, data: { label: '🚑 Accidente\nLaboral' }, className: 'node-critical' },
    { id: 'proponer_bl', type: 'default', position: { x: 550, y: 1580 }, data: { label: '🚫 Propuesta\nBlack List' }, className: 'node-blacklist' },
    { id: 'dir_aprueba', type: 'default', position: { x: 700, y: 1580 }, data: { label: '👔 Dirección\nAprueba' }, className: 'node-critical' },
    { id: 'blacklist_final', type: 'default', position: { x: 700, y: 1690 }, data: { label: '🚫 BLACK LIST\nPERMANENTE' }, className: 'node-blacklist' },
  ],
  edges: [
    // Inicio a secciones
    { id: 'e_s1', source: 'start', target: 'section_registro' },
    { id: 'e_s2', source: 'start', target: 'section_onboard' },
    { id: 'e_s3', source: 'start', target: 'section_pago' },
    { id: 'e_s4', source: 'start', target: 'section_uniforme' },
    { id: 'e_s5', source: 'start', target: 'section_vacaciones' },

    // ── Reclutamiento y Registro ──
    { id: 'e1', source: 'section_registro', target: 'reclut_facebook' },
    { id: 'e2', source: 'reclut_facebook', target: 'sms_link' },
    { id: 'e3', source: 'sms_link', target: 'download_app' },
    { id: 'e4', source: 'download_app', target: 'cuenta_precreada', animated: true },
    { id: 'e5', source: 'cuenta_precreada', target: 'llenar_datos' },
    { id: 'e5b', source: 'llenar_datos', target: 'foto_docs', style: { strokeDasharray: '5,5' } },
    { id: 'e6', source: 'llenar_datos', target: 'blacklist_check' },
    { id: 'e7', source: 'blacklist_check', target: 'rejected', label: 'Encontrado', style: { stroke: '#c62828' } },
    { id: 'e8', source: 'blacklist_check', target: 'pool_recepcion', label: 'Limpio' },
    { id: 'e9', source: 'pool_recepcion', target: 'emp_type' },
    { id: 'e10', source: 'emp_type', target: 'both_orange' },
    { id: 'e11', source: 'both_orange', target: 'waiver', style: { strokeDasharray: '5,5' } },
    { id: 'e12', source: 'both_orange', target: 'handbook', style: { strokeDasharray: '5,5' } },

    // ── Onboarding ──
    { id: 'e13', source: 'section_onboard', target: 'notif_asignacion' },
    { id: 'e14', source: 'notif_asignacion', target: 'decide' },
    { id: 'e15', source: 'decide', target: 'rechaza_asig', label: 'No', style: { stroke: '#c62828' } },
    { id: 'e15b', source: 'rechaza_asig', target: 'pool_recepcion', label: 'Vuelve al pool', style: { strokeDasharray: '5,5', stroke: '#c62828' } },
    { id: 'e16', source: 'decide', target: 'dia_1', label: 'Sí' },
    { id: 'e17', source: 'dia_1', target: 'inspector_onboard' },
    { id: 'e18', source: 'inspector_onboard', target: 'app_60' },
    { id: 'e19', source: 'app_60', target: 'timeline_72h', animated: true },
    { id: 'e20', source: 'timeline_72h', target: 'r24h' },
    { id: 'e21', source: 'r24h', target: 'r48h' },
    { id: 'e22', source: 'r48h', target: 'r72h' },

    // Evaluaciones de seguimiento
    { id: 'e_ev1', source: 'timeline_72h', target: 'section_evals', style: { strokeDasharray: '5,5' } },
    { id: 'e_ev2', source: 'section_evals', target: 'eval_dia5' },
    { id: 'e_ev3', source: 'eval_dia5', target: 'eval_dia10' },

    // ── Pago ──
    { id: 'e23', source: 'section_pago', target: 'metodo_pago' },
    { id: 'e24', source: 'metodo_pago', target: 'transferencia', label: 'Transfer' },
    { id: 'e25', source: 'metodo_pago', target: 'cheque', label: 'Check' },
    { id: 'e26', source: 'transferencia', target: 'validar_bank' },
    { id: 'e27', source: 'validar_bank', target: 'status_verde' },
    { id: 'e28', source: 'cheque', target: 'status_verde' },

    // ── Operación diaria ──
    { id: 'e29', source: 'status_verde', target: 'section_operacion' },
    { id: 'e30', source: 'section_operacion', target: 'ponchado' },
    { id: 'e31', source: 'section_operacion', target: 'horas' },
    { id: 'e32', source: 'ponchado', target: 'desfase' },
    { id: 'e33', source: 'horas', target: 'pago_viernes' },
    { id: 'e34', source: 'desfase', target: 'trabajando', style: { strokeDasharray: '5,5' } },
    { id: 'e35', source: 'pago_viernes', target: 'trabajando', animated: true },

    // ── Uniforme ──
    { id: 'e36', source: 'section_uniforme', target: 'uniforme_dia' },
    { id: 'e37', source: 'uniforme_dia', target: 'recibe_uniforme' },
    { id: 'e38', source: 'recibe_uniforme', target: 'cobro_uniforme' },
    { id: 'e39', source: 'cobro_uniforme', target: 'firma_uniforme', animated: true },

    // ── Solicitudes del Colaborador ──
    { id: 'e40', source: 'trabajando', target: 'section_solicitudes', style: { strokeDasharray: '5,5' } },
    { id: 'e41', source: 'section_solicitudes', target: 'sol_ajuste_pago' },
    { id: 'e42', source: 'section_solicitudes', target: 'sol_reubicacion' },
    { id: 'e43', source: 'section_solicitudes', target: 'sol_incremento' },
    { id: 'e44', source: 'section_solicitudes', target: 'sol_discrepancia' },
    { id: 'e45', source: 'section_solicitudes', target: 'sol_comp_anual' },
    { id: 'e46', source: 'section_solicitudes', target: 'sol_tiempo_libre' },
    { id: 'e47', source: 'section_solicitudes', target: 'sol_40h_off' },
    { id: 'e48', source: 'section_solicitudes', target: 'sol_comp_extra' },
    { id: 'e49', source: 'section_solicitudes', target: 'sol_ajuste_contrato' },
    { id: 'e50', source: 'sol_ajuste_pago', target: 'sol_enviado' },
    { id: 'e51', source: 'sol_reubicacion', target: 'sol_enviado' },
    { id: 'e52', source: 'sol_incremento', target: 'sol_enviado' },
    { id: 'e53', source: 'sol_discrepancia', target: 'sol_enviado' },
    { id: 'e54', source: 'sol_comp_anual', target: 'sol_enviado' },
    { id: 'e55', source: 'sol_tiempo_libre', target: 'sol_enviado' },
    { id: 'e56', source: 'sol_40h_off', target: 'sol_enviado' },
    { id: 'e57', source: 'sol_comp_extra', target: 'sol_enviado' },
    { id: 'e58', source: 'sol_ajuste_contrato', target: 'sol_enviado' },

    // ── Vacaciones ──
    { id: 'e_v1', source: 'section_vacaciones', target: 'vac_52sem' },
    { id: 'e_v2', source: 'vac_52sem', target: 'vac_promedio' },
    { id: 'e_v3', source: 'vac_promedio', target: 'vac_regla' },
    { id: 'e_v4', source: 'vac_regla', target: 'vac_normal', label: '≥40h/sem' },
    { id: 'e_v5', source: 'vac_regla', target: 'vac_menos40', label: '<40h/sem' },
    { id: 'e_v6', source: 'vac_menos40', target: 'vac_nota' },

    // ── Injury Report ──
    { id: 'e_inj0', source: 'trabajando', target: 'section_injury', style: { strokeDasharray: '5,5', stroke: '#c62828' } },
    { id: 'e_inj1', source: 'section_injury', target: 'injury_reporte' },
    { id: 'e_inj2', source: 'injury_reporte', target: 'injury_datos' },
    { id: 'e_inj3', source: 'injury_reporte', target: 'injury_fotos' },
    { id: 'e_inj4', source: 'injury_datos', target: 'injury_firma' },
    { id: 'e_inj5', source: 'injury_fotos', target: 'injury_firma' },
    { id: 'e_inj6', source: 'injury_firma', target: 'injury_tablero', animated: true },

    // ── Riesgos ──
    { id: 'e59', source: 'trabajando', target: 'section_riesgos', style: { strokeDasharray: '5,5', stroke: '#c62828' } },
    { id: 'e60', source: 'section_riesgos', target: 'evaluaciones' },
    { id: 'e61', source: 'section_riesgos', target: 'incidente' },
    { id: 'e62', source: 'section_riesgos', target: 'accidente' },
    { id: 'e63', source: 'evaluaciones', target: 'calif_afecta' },
    { id: 'e64', source: 'incidente', target: 'proponer_bl' },
    { id: 'e65', source: 'accidente', target: 'proponer_bl', style: { strokeDasharray: '5,5' } },
    { id: 'e66', source: 'proponer_bl', target: 'dir_aprueba' },
    { id: 'e67', source: 'dir_aprueba', target: 'blacklist_final', label: 'Aprueba' },
  ]
}

export default colaboradorRolFlow
