const inspectorRolFlow = {
  nodes: [
    // INICIO
    { id: 'start', type: 'input', position: { x: 700, y: 0 }, data: { label: '🏆 Inspector de Calidad\nRol Principal' }, className: 'node-quality' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 1: ONBOARDING (Ingresos)
    // ═══════════════════════════════════════════════════════
    { id: 'section_onboard', type: 'default', position: { x: 50, y: 150 }, data: { label: '📋 ONBOARDING\nIngresos Nuevos' }, className: 'node-warning' },
    { id: 'notif_asignacion', type: 'default', position: { x: 50, y: 260 }, data: { label: '🔔 Recibe Notificación\nEmpleado Asignado' }, className: 'node-info' },
    { id: 'dia_1', type: 'default', position: { x: 50, y: 370 }, data: { label: '📅 Día 1 - 8:00 AM\nSe presenta en hotel' }, className: 'node-success' },
    { id: 'encuentro', type: 'default', position: { x: 50, y: 480 }, data: { label: '🤝 Encuentro en Propiedad\nIntroducción general' }, className: 'node-quality' },
    { id: 'formato_ingreso', type: 'default', position: { x: 50, y: 590 }, data: { label: '📝 Formato de Ingreso\nDatos + Foto Documentos' }, className: 'node-quality' },
    { id: 'foto_docs', type: 'default', position: { x: 210, y: 590 }, data: { label: '📷 Fotografiar:\nPermiso trabajo, SSN,\nPasaporte' }, className: 'node-info' },
    { id: 'explicar_trabajo', type: 'default', position: { x: 50, y: 700 }, data: { label: '💬 Explicar trabajo,\nsupervisores, tiempos\npor habitación' }, className: 'node-quality' },
    { id: 'ayudar_app', type: 'default', position: { x: 50, y: 820 }, data: { label: '📱 Ayudar a Completar\nAplicación de Ingreso' }, className: 'node-quality' },
    { id: 'meta_60', type: 'default', position: { x: 50, y: 930 }, data: { label: '🎯 Meta: App 60%\nen 72 horas' }, className: 'node-warning' },
    { id: 'contabilidad_pago', type: 'default', position: { x: 210, y: 930 }, data: { label: '💰 Ingreso en App\n→ Mónica puede pagar' }, className: 'node-accounting' },
    { id: 'track_72h', type: 'default', position: { x: 50, y: 1040 }, data: { label: '⏰ Tracking\n72 Horas' }, className: 'node-critical' },
    { id: 'check_app', type: 'default', position: { x: 50, y: 1150 }, data: { label: '✅ Aplicación\n≥60%?' }, className: 'node-warning' },
    { id: 'onboard_ok', type: 'default', position: { x: 210, y: 1150 }, data: { label: '✅ Onboarding\nExitoso' }, className: 'node-success' },
    { id: 'strike', type: 'default', position: { x: 210, y: 1040 }, data: { label: '❌ STRIKE\nal Inspector' }, className: 'node-critical' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 2: EVALUACIONES DE SEGUIMIENTO
    // ═══════════════════════════════════════════════════════
    { id: 'section_eval', type: 'default', position: { x: 50, y: 1300 }, data: { label: '📊 EVALUACIONES\nDE SEGUIMIENTO' }, className: 'node-quality' },
    { id: 'eval_dia5', type: 'default', position: { x: 50, y: 1420 }, data: { label: '📅 Evaluación Día 5\nColaborador + Gerencia' }, className: 'node-quality' },
    { id: 'eval_dia5_colab', type: 'default', position: { x: -80, y: 1530 }, data: { label: '👷 Evaluar al\nColaborador' }, className: 'node-info' },
    { id: 'eval_dia5_mgr', type: 'default', position: { x: 80, y: 1530 }, data: { label: '🏨 Evaluar con\nGerencia Hotel' }, className: 'node-hotel' },
    { id: 'eval_dia10', type: 'default', position: { x: 50, y: 1650 }, data: { label: '📅 Evaluación Día 10\nIntegración y Desempeño' }, className: 'node-quality' },
    { id: 'eval_espontanea', type: 'default', position: { x: 230, y: 1420 }, data: { label: '🎲 Evaluación\nEspontánea' }, className: 'node-warning' },
    { id: 'eval_espon_detalle', type: 'default', position: { x: 230, y: 1530 }, data: { label: '🔍 Revisar:\nHabitación, Orden,\nProductos, Actitud' }, className: 'node-info' },
    { id: 'eval_espon_obj', type: 'default', position: { x: 230, y: 1650 }, data: { label: '⭐ Objetivo: Subir\nEstándar Housekeeping' }, className: 'node-success' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 3: UNIFORMES
    // ═══════════════════════════════════════════════════════
    { id: 'section_uniform', type: 'default', position: { x: 420, y: 150 }, data: { label: '👕 ENTREGA DE\nUNIFORMES' }, className: 'node-quality' },
    { id: 'emp_califica', type: 'default', position: { x: 420, y: 260 }, data: { label: '🔍 Empleado\nCalifica?' }, className: 'node-warning' },
    { id: 'dia_3_fijo', type: 'default', position: { x: 350, y: 370 }, data: { label: '📅 Día 3\nEmpleado Fijo' }, className: 'node-quality' },
    { id: 'dia_5_temp', type: 'default', position: { x: 490, y: 370 }, data: { label: '📅 Día 5\nEmpleado Temporal' }, className: 'node-quality' },
    { id: 'prep_uniforme', type: 'default', position: { x: 420, y: 480 }, data: { label: '📦 Preparar Uniforme\nFranela / Pantalón / Talla' }, className: 'node-quality' },
    { id: 'ir_propiedad', type: 'default', position: { x: 420, y: 590 }, data: { label: '🚗 Ir a\nPropiedad' }, className: 'node-quality' },
    { id: 'cobro_uniforme', type: 'default', position: { x: 420, y: 700 }, data: { label: '💵 Cobro $30 USD\nDescontado de cheque' }, className: 'node-accounting' },
    { id: 'firma_digital', type: 'default', position: { x: 420, y: 810 }, data: { label: '✍️ Firma Digital\n+ Foto Evidencia' }, className: 'node-quality' },
    { id: 'confirmar_entrega', type: 'default', position: { x: 420, y: 920 }, data: { label: '✅ Confirmar\nEntrega' }, className: 'node-success' },
    { id: 'notif_contabilidad', type: 'default', position: { x: 420, y: 1030 }, data: { label: '💰 Notificar\nContabilidad' }, className: 'node-accounting' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 4: SUPERVISIÓN Y CALIDAD
    // ═══════════════════════════════════════════════════════
    { id: 'section_supervision', type: 'default', position: { x: 700, y: 150 }, data: { label: '🔍 SUPERVISIÓN\nY CALIDAD' }, className: 'node-info' },
    { id: 'regla_km', type: 'default', position: { x: 700, y: 260 }, data: { label: '🗺️ Regla de Negocio:\nPropiedades + Kilómetros' }, className: 'node-warning' },
    { id: 'rutas_semanales', type: 'default', position: { x: 700, y: 380 }, data: { label: '📍 Prioridad de Ruta:\n1) Ingresos\n2) Onboarding 5d\n3) Calidad cada 3ra' }, className: 'node-info' },
    { id: 'visitar_hotel', type: 'default', position: { x: 700, y: 510 }, data: { label: '🏨 Visitar\nHotel' }, className: 'node-quality' },
    { id: 'verificar_uniforme', type: 'default', position: { x: 700, y: 620 }, data: { label: '✅ Verificar\nUniforme' }, className: 'node-quality' },
    { id: 'verificar_estandares', type: 'default', position: { x: 700, y: 730 }, data: { label: '✅ Verificar\nEstándares' }, className: 'node-quality' },
    { id: 'problemas', type: 'default', position: { x: 700, y: 840 }, data: { label: '⚠️ Problemas\nDetectados?' }, className: 'node-warning' },
    { id: 'resolver_problemas', type: 'default', position: { x: 700, y: 950 }, data: { label: '🔧 Solucionar Problemas\ncon Personal Enviado' }, className: 'node-warning' },

    // Reporte de Visita (WhatsApp → App)
    { id: 'reporte_visita', type: 'default', position: { x: 700, y: 1080 }, data: { label: '📋 Reporte de Visita\nen App (antes WhatsApp)' }, className: 'node-info' },
    { id: 'escalar_irene', type: 'default', position: { x: 850, y: 1080 }, data: { label: '🔺 Escalar a\nCoordinación (Irene)' }, className: 'node-critical' },
    { id: 'ticket_seguimiento', type: 'default', position: { x: 700, y: 1190 }, data: { label: '🎫 Genera Ticket\nde Seguimiento' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 5: INSPECCIÓN DE SATISFACCIÓN
    // ═══════════════════════════════════════════════════════
    { id: 'section_satisfaccion', type: 'default', position: { x: 1000, y: 150 }, data: { label: '⭐ INSPECCIÓN DE\nSATISFACCIÓN' }, className: 'node-success' },
    { id: 'registrar_visita', type: 'default', position: { x: 1000, y: 260 }, data: { label: '📲 Inspector Registra\nVisita en App' }, className: 'node-quality' },
    { id: 'trigger_encuesta', type: 'default', position: { x: 1000, y: 370 }, data: { label: '📧 Envío Automático\nEncuesta al Gerente' }, className: 'node-hotel' },
    { id: 'canal_encuesta', type: 'default', position: { x: 1000, y: 480 }, data: { label: '📨 Vía App\ny/o Email' }, className: 'node-info' },
    { id: 'comentarios_mgr', type: 'default', position: { x: 1000, y: 590 }, data: { label: '💬 Comentarios\npara Gerencia/Dirección' }, className: 'node-hotel' },
    { id: 'genera_ticket', type: 'default', position: { x: 1000, y: 700 }, data: { label: '🎫 Genera Ticket\nde Seguimiento' }, className: 'node-warning' },
    { id: 'seguimiento_ticket', type: 'default', position: { x: 1000, y: 810 }, data: { label: '📋 Seguimiento\ny Resolución' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 6: SOLICITUDES DE MANAGERS (NUEVO)
    // ═══════════════════════════════════════════════════════
    { id: 'section_mgr_sol', type: 'default', position: { x: 1000, y: 950 }, data: { label: '🏨 SOLICITUDES\nDE MANAGERS' }, className: 'node-hotel' },
    { id: 'mgr_ajuste_contrato', type: 'default', position: { x: 880, y: 1070 }, data: { label: '📄 Ajuste de\nContrato' }, className: 'node-hotel' },
    { id: 'mgr_ajuste_rate', type: 'default', position: { x: 1020, y: 1070 }, data: { label: '💲 Ajuste de\nRate (Tarifa)' }, className: 'node-hotel' },
    { id: 'mgr_facturas', type: 'default', position: { x: 1160, y: 1070 }, data: { label: '🧾 Solicitud de\nFacturas' }, className: 'node-accounting' },
    { id: 'mgr_reporte_colab', type: 'default', position: { x: 880, y: 1180 }, data: { label: '📊 Reporte de\nColaboradores' }, className: 'node-info' },
    { id: 'mgr_cambio_personal', type: 'default', position: { x: 1020, y: 1180 }, data: { label: '🔄 Cambio de\nPersonal' }, className: 'node-recruitment' },
    { id: 'mgr_terminate', type: 'default', position: { x: 1160, y: 1180 }, data: { label: '🔴 TERMINATE\nDespido' }, className: 'node-critical' },
    { id: 'mgr_seg_nomina', type: 'default', position: { x: 880, y: 1290 }, data: { label: '📊 Seguimiento\nde Nómina' }, className: 'node-accounting' },
    { id: 'mgr_quejas', type: 'default', position: { x: 1020, y: 1290 }, data: { label: '📢 Quejas de\nServicio' }, className: 'node-warning' },
    { id: 'mgr_routing', type: 'default', position: { x: 1160, y: 1290 }, data: { label: '📤 Requisición →\nReclutamiento +\nInspectores' }, className: 'node-recruitment' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 7: SOLICITUDES DE HOTELES / VR
    // ═══════════════════════════════════════════════════════
    { id: 'section_solicitudes', type: 'default', position: { x: 1350, y: 150 }, data: { label: '📩 SOLICITUDES\nDE HOTELES' }, className: 'node-hotel' },
    { id: 'recibir_solicitud', type: 'default', position: { x: 1350, y: 260 }, data: { label: '📩 Recibir Solicitud\ndel Hotel' }, className: 'node-hotel' },
    { id: 'evaluar_necesidad', type: 'default', position: { x: 1350, y: 370 }, data: { label: '📋 Evaluar\nNecesidad' }, className: 'node-info' },
    { id: 'coordinar_personal', type: 'default', position: { x: 1350, y: 480 }, data: { label: '👥 Coordinar\nPersonal' }, className: 'node-recruitment' },

    // Vacation Review
    { id: 'section_vr', type: 'default', position: { x: 1350, y: 620 }, data: { label: '🌴 VACATION\nREVIEW (VR)' }, className: 'node-info' },
    { id: 'vr_request', type: 'default', position: { x: 1350, y: 730 }, data: { label: '📋 Request VR\nPor # Teléfono o ID' }, className: 'node-info' },
    { id: 'vr_revisar', type: 'default', position: { x: 1350, y: 840 }, data: { label: '🔍 Revisar Historial\n52 semanas continuas' }, className: 'node-info' },
    { id: 'vr_regla', type: 'default', position: { x: 1350, y: 950 }, data: { label: '📏 Regla: Promedio hrs\ntrabajadas en 52 sem' }, className: 'node-warning' },
    { id: 'vr_menos40', type: 'default', position: { x: 1250, y: 1060 }, data: { label: '⚠️ <40h/sem regular\nPre-aprobar pago\nsin descanso físico' }, className: 'node-warning' },
    { id: 'vr_40plus', type: 'default', position: { x: 1420, y: 1060 }, data: { label: '✅ ≥40h/sem\nVacaciones normales\n(descansar)' }, className: 'node-success' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 8: NÓMINA / TIMESHEET
    // ═══════════════════════════════════════════════════════
    { id: 'section_nomina', type: 'default', position: { x: 1650, y: 150 }, data: { label: '📊 NÓMINA /\nTIMESHEET' }, className: 'node-accounting' },
    { id: 'lun_mar_reminder', type: 'default', position: { x: 1650, y: 260 }, data: { label: '📞 Lun-Mar:\nRecordar a Managers\nenviar Time Sheets' }, className: 'node-info' },
    { id: 'mgr_sube_ts', type: 'default', position: { x: 1650, y: 390 }, data: { label: '📤 Manager sube\nTime Sheet vía App\n(no fotos/email)' }, className: 'node-hotel' },
    { id: 'recopilar_horas', type: 'default', position: { x: 1650, y: 510 }, data: { label: '⏰ Recopilar y Validar\nHoras Trabajadas' }, className: 'node-info' },
    { id: 'enviar_timesheet', type: 'default', position: { x: 1650, y: 620 }, data: { label: '📤 Enviar Timesheet\na Contabilidad' }, className: 'node-accounting' },
    { id: 'deadline_mie', type: 'default', position: { x: 1650, y: 730 }, data: { label: '🔴 Cierre Nómina\nMiércoles' }, className: 'node-critical' },

    // Discrepancias de pago
    { id: 'section_discrepancias', type: 'default', position: { x: 1650, y: 870 }, data: { label: '💸 DISCREPANCIAS\nDE PAGO' }, className: 'node-accounting' },
    { id: 'colab_reporta', type: 'default', position: { x: 1650, y: 980 }, data: { label: '👷 Colaborador Reporta\nHrs Faltantes / Pago\nIncorrecto' }, className: 'node-warning' },
    { id: 'form_discrepancia', type: 'default', position: { x: 1650, y: 1110 }, data: { label: '📝 Formato Digital\nDiscrepancia de Pago\n(antes: chat, ahora: app)' }, className: 'node-accounting' },
    { id: 'enviar_contabilidad', type: 'default', position: { x: 1650, y: 1230 }, data: { label: '📤 Enviar a\nContabilidad vía App' }, className: 'node-accounting' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 9: INCIDENTES Y ACCIDENTES
    // ═══════════════════════════════════════════════════════
    { id: 'section_incidentes', type: 'default', position: { x: 500, y: 1450 }, data: { label: '⚠️ INCIDENTES\nY REPORTES' }, className: 'node-critical' },
    { id: 'inc_menor', type: 'default', position: { x: 380, y: 1570 }, data: { label: '📝 Incidente\nMenor' }, className: 'node-warning' },
    { id: 'inc_grave', type: 'default', position: { x: 500, y: 1570 }, data: { label: '🔴 Incidente\nGRAVE' }, className: 'node-critical' },

    // Injury Report (módulo nuevo digital)
    { id: 'section_injury', type: 'default', position: { x: 700, y: 1450 }, data: { label: '🚑 INJURY REPORT\nMódulo Digital (🆕)' }, className: 'node-critical' },
    { id: 'injury_horas', type: 'default', position: { x: 620, y: 1570 }, data: { label: '⏰ Horas trabajadas\nal momento + Hora\nexacta del incidente' }, className: 'node-info' },
    { id: 'injury_historial', type: 'default', position: { x: 780, y: 1570 }, data: { label: '📋 Reclamos\nanteriores?' }, className: 'node-warning' },
    { id: 'injury_desc', type: 'default', position: { x: 620, y: 1690 }, data: { label: '📝 Descripción del\nIncidente + Parte\ndel Cuerpo Afectada' }, className: 'node-info' },
    { id: 'injury_fotos', type: 'default', position: { x: 780, y: 1690 }, data: { label: '📷 Fotografías\nAdjuntas' }, className: 'node-info' },
    { id: 'injury_firma', type: 'default', position: { x: 700, y: 1800 }, data: { label: '✍️ Firma Digital\ndel Colaborador' }, className: 'node-quality' },
    { id: 'injury_tablero', type: 'default', position: { x: 700, y: 1910 }, data: { label: '📊 Visible en\nTablero del Colaborador' }, className: 'node-success' },

    // Black List
    { id: 'proponer_blacklist', type: 'default', position: { x: 500, y: 1690 }, data: { label: '🚫 Proponer\nBlack List' }, className: 'node-blacklist' },
    { id: 'dir_aprueba', type: 'default', position: { x: 500, y: 1800 }, data: { label: '👔 Dirección\nAprueba' }, className: 'node-critical' },
    { id: 'blacklist_final', type: 'default', position: { x: 500, y: 1910 }, data: { label: '🚫 BLACK LIST\nPERMANENTE' }, className: 'node-blacklist' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 10: RECLUTAMIENTO / PROSPECTOS
    // ═══════════════════════════════════════════════════════
    { id: 'section_prospectos', type: 'default', position: { x: 1650, y: 1380 }, data: { label: '📞 RECLUTAMIENTO\nPROSPECTOS' }, className: 'node-recruitment' },
    { id: 'recibir_llamadas', type: 'default', position: { x: 1650, y: 1490 }, data: { label: '📞 Recibir Llamadas\nNuevos Prospectos' }, className: 'node-recruitment' },
    { id: 'referir_reclut', type: 'default', position: { x: 1650, y: 1600 }, data: { label: '👥 Referir a\nReclutadora' }, className: 'node-recruitment' },
    { id: 'pool_candidatos', type: 'default', position: { x: 1650, y: 1710 }, data: { label: '📦 Pool de\nCandidatos' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 11: MÉTRICAS
    // ═══════════════════════════════════════════════════════
    { id: 'section_metricas', type: 'default', position: { x: 1350, y: 1380 }, data: { label: '📈 MÉTRICAS\nAUTOMÁTICAS' }, className: 'node-success' },
    { id: 'metric_tiempo_resp', type: 'default', position: { x: 1250, y: 1490 }, data: { label: '⏱️ Tiempo de Respuesta\nante Solicitudes\nde Managers' }, className: 'node-info' },
    { id: 'metric_eval_depto', type: 'default', position: { x: 1420, y: 1490 }, data: { label: '📊 Evaluación General\nDepto Inspección\nde Calidad' }, className: 'node-info' },
    { id: 'metric_eval_reclut', type: 'default', position: { x: 1350, y: 1600 }, data: { label: '📊 Evaluación\nDepto Reclutamiento' }, className: 'node-info' },
  ],
  edges: [
    // Desde inicio a secciones principales
    { id: 'e_s1', source: 'start', target: 'section_onboard' },
    { id: 'e_s2', source: 'start', target: 'section_uniform' },
    { id: 'e_s3', source: 'start', target: 'section_supervision' },
    { id: 'e_s4', source: 'start', target: 'section_satisfaccion' },
    { id: 'e_s5', source: 'start', target: 'section_solicitudes' },
    { id: 'e_s6', source: 'start', target: 'section_nomina' },

    // ── Onboarding ──
    { id: 'e1', source: 'section_onboard', target: 'notif_asignacion' },
    { id: 'e2', source: 'notif_asignacion', target: 'dia_1' },
    { id: 'e3', source: 'dia_1', target: 'encuentro' },
    { id: 'e4', source: 'encuentro', target: 'formato_ingreso' },
    { id: 'e4b', source: 'formato_ingreso', target: 'foto_docs', style: { strokeDasharray: '5,5' } },
    { id: 'e5', source: 'formato_ingreso', target: 'explicar_trabajo' },
    { id: 'e5b', source: 'explicar_trabajo', target: 'ayudar_app' },
    { id: 'e6', source: 'ayudar_app', target: 'meta_60' },
    { id: 'e6b', source: 'meta_60', target: 'contabilidad_pago', animated: true, label: 'Habilita pago' },
    { id: 'e7', source: 'meta_60', target: 'track_72h', animated: true },
    { id: 'e8', source: 'track_72h', target: 'check_app' },
    { id: 'e9', source: 'check_app', target: 'onboard_ok', label: '≥60%' },
    { id: 'e10', source: 'check_app', target: 'strike', label: '<60%', style: { stroke: '#c62828' } },

    // Onboarding → Evaluaciones
    { id: 'e_ev1', source: 'onboard_ok', target: 'section_eval' },
    { id: 'e_ev2', source: 'section_eval', target: 'eval_dia5' },
    { id: 'e_ev3', source: 'eval_dia5', target: 'eval_dia5_colab' },
    { id: 'e_ev4', source: 'eval_dia5', target: 'eval_dia5_mgr' },
    { id: 'e_ev5', source: 'eval_dia5_colab', target: 'eval_dia10' },
    { id: 'e_ev6', source: 'eval_dia5_mgr', target: 'eval_dia10' },
    { id: 'e_ev7', source: 'section_eval', target: 'eval_espontanea', style: { strokeDasharray: '5,5' } },
    { id: 'e_ev8', source: 'eval_espontanea', target: 'eval_espon_detalle' },
    { id: 'e_ev9', source: 'eval_espon_detalle', target: 'eval_espon_obj' },

    // ── Uniformes ──
    { id: 'e11', source: 'section_uniform', target: 'emp_califica' },
    { id: 'e12', source: 'emp_califica', target: 'dia_3_fijo', label: 'Fijo' },
    { id: 'e13', source: 'emp_califica', target: 'dia_5_temp', label: 'Temp' },
    { id: 'e14', source: 'dia_3_fijo', target: 'prep_uniforme' },
    { id: 'e15', source: 'dia_5_temp', target: 'prep_uniforme' },
    { id: 'e16', source: 'prep_uniforme', target: 'ir_propiedad' },
    { id: 'e17', source: 'ir_propiedad', target: 'cobro_uniforme' },
    { id: 'e18', source: 'cobro_uniforme', target: 'firma_digital' },
    { id: 'e19', source: 'firma_digital', target: 'confirmar_entrega' },
    { id: 'e20', source: 'confirmar_entrega', target: 'notif_contabilidad', animated: true },

    // ── Supervisión y Calidad ──
    { id: 'e21', source: 'section_supervision', target: 'regla_km' },
    { id: 'e22', source: 'regla_km', target: 'rutas_semanales' },
    { id: 'e23', source: 'rutas_semanales', target: 'visitar_hotel' },
    { id: 'e24', source: 'visitar_hotel', target: 'verificar_uniforme' },
    { id: 'e25', source: 'verificar_uniforme', target: 'verificar_estandares' },
    { id: 'e26', source: 'verificar_estandares', target: 'problemas' },
    { id: 'e27', source: 'problemas', target: 'resolver_problemas', label: 'Sí' },
    { id: 'e28', source: 'resolver_problemas', target: 'reporte_visita' },
    { id: 'e28b', source: 'reporte_visita', target: 'escalar_irene', label: 'Grave', style: { stroke: '#c62828' } },
    { id: 'e28c', source: 'reporte_visita', target: 'ticket_seguimiento' },
    { id: 'e29', source: 'resolver_problemas', target: 'section_incidentes', style: { stroke: '#c62828', strokeDasharray: '5,5' } },
    // Supervision → Satisfacción
    { id: 'e_sat', source: 'visitar_hotel', target: 'registrar_visita', style: { strokeDasharray: '5,5' }, label: 'Post-visita' },

    // ── Inspección de Satisfacción ──
    { id: 'e30', source: 'section_satisfaccion', target: 'registrar_visita' },
    { id: 'e31', source: 'registrar_visita', target: 'trigger_encuesta' },
    { id: 'e32', source: 'trigger_encuesta', target: 'canal_encuesta' },
    { id: 'e33', source: 'canal_encuesta', target: 'comentarios_mgr' },
    { id: 'e34', source: 'comentarios_mgr', target: 'genera_ticket' },
    { id: 'e35', source: 'genera_ticket', target: 'seguimiento_ticket', animated: true },
    // Satisfacción → Manager solicitudes
    { id: 'e_sat_mgr', source: 'seguimiento_ticket', target: 'section_mgr_sol', style: { strokeDasharray: '5,5' } },

    // ── Solicitudes de Managers ──
    { id: 'e_mgr1', source: 'section_mgr_sol', target: 'mgr_ajuste_contrato' },
    { id: 'e_mgr2', source: 'section_mgr_sol', target: 'mgr_ajuste_rate' },
    { id: 'e_mgr3', source: 'section_mgr_sol', target: 'mgr_facturas' },
    { id: 'e_mgr4', source: 'section_mgr_sol', target: 'mgr_reporte_colab' },
    { id: 'e_mgr5', source: 'section_mgr_sol', target: 'mgr_cambio_personal' },
    { id: 'e_mgr6', source: 'section_mgr_sol', target: 'mgr_terminate' },
    { id: 'e_mgr7', source: 'section_mgr_sol', target: 'mgr_seg_nomina' },
    { id: 'e_mgr8', source: 'section_mgr_sol', target: 'mgr_quejas' },
    { id: 'e_mgr9', source: 'mgr_cambio_personal', target: 'mgr_routing', animated: true },

    // ── Solicitudes de Hoteles / VR ──
    { id: 'e36', source: 'section_solicitudes', target: 'recibir_solicitud' },
    { id: 'e37', source: 'recibir_solicitud', target: 'evaluar_necesidad' },
    { id: 'e38', source: 'evaluar_necesidad', target: 'coordinar_personal' },
    { id: 'e_vr1', source: 'coordinar_personal', target: 'section_vr', style: { strokeDasharray: '5,5' } },
    { id: 'e_vr2', source: 'section_vr', target: 'vr_request' },
    { id: 'e_vr3', source: 'vr_request', target: 'vr_revisar' },
    { id: 'e_vr4', source: 'vr_revisar', target: 'vr_regla' },
    { id: 'e_vr5', source: 'vr_regla', target: 'vr_menos40', label: '<40h/sem' },
    { id: 'e_vr6', source: 'vr_regla', target: 'vr_40plus', label: '≥40h/sem' },

    // ── Nómina / Timesheet ──
    { id: 'e39', source: 'section_nomina', target: 'lun_mar_reminder' },
    { id: 'e40', source: 'lun_mar_reminder', target: 'mgr_sube_ts' },
    { id: 'e41', source: 'mgr_sube_ts', target: 'recopilar_horas' },
    { id: 'e42', source: 'recopilar_horas', target: 'enviar_timesheet' },
    { id: 'e43', source: 'enviar_timesheet', target: 'deadline_mie', animated: true },

    // Discrepancias
    { id: 'e_disc1', source: 'deadline_mie', target: 'section_discrepancias', style: { strokeDasharray: '5,5' } },
    { id: 'e_disc2', source: 'section_discrepancias', target: 'colab_reporta' },
    { id: 'e_disc3', source: 'colab_reporta', target: 'form_discrepancia' },
    { id: 'e_disc4', source: 'form_discrepancia', target: 'enviar_contabilidad', animated: true },

    // ── Incidentes ──
    { id: 'e44', source: 'section_incidentes', target: 'inc_menor' },
    { id: 'e45', source: 'section_incidentes', target: 'inc_grave' },
    { id: 'e46', source: 'section_incidentes', target: 'section_injury' },
    { id: 'e47', source: 'inc_grave', target: 'proponer_blacklist' },

    // Injury Report
    { id: 'e_inj1', source: 'section_injury', target: 'injury_horas' },
    { id: 'e_inj2', source: 'section_injury', target: 'injury_historial' },
    { id: 'e_inj3', source: 'injury_horas', target: 'injury_desc' },
    { id: 'e_inj4', source: 'injury_historial', target: 'injury_fotos' },
    { id: 'e_inj5', source: 'injury_desc', target: 'injury_firma' },
    { id: 'e_inj6', source: 'injury_fotos', target: 'injury_firma' },
    { id: 'e_inj7', source: 'injury_firma', target: 'injury_tablero', animated: true },

    // Black List
    { id: 'e48', source: 'proponer_blacklist', target: 'dir_aprueba' },
    { id: 'e49', source: 'dir_aprueba', target: 'blacklist_final', label: 'Aprueba' },

    // ── Prospectos ──
    { id: 'e_s7', source: 'section_nomina', target: 'section_prospectos', style: { strokeDasharray: '5,5' } },
    { id: 'e50', source: 'section_prospectos', target: 'recibir_llamadas' },
    { id: 'e51', source: 'recibir_llamadas', target: 'referir_reclut' },
    { id: 'e52', source: 'referir_reclut', target: 'pool_candidatos' },

    // ── Métricas ──
    { id: 'e_met0', source: 'section_satisfaccion', target: 'section_metricas', style: { strokeDasharray: '5,5' } },
    { id: 'e_met1', source: 'section_metricas', target: 'metric_tiempo_resp' },
    { id: 'e_met2', source: 'section_metricas', target: 'metric_eval_depto' },
    { id: 'e_met3', source: 'metric_tiempo_resp', target: 'metric_eval_reclut', style: { strokeDasharray: '5,5' } },
  ]
}

export default inspectorRolFlow
