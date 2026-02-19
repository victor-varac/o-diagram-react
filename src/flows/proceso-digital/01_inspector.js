// ═══════════════════════════════════════════════════════════════════════
// PROCESO DIGITAL: INSPECTOR DE CALIDAD
// Nivel 2-3: Operativa + Automatización
// Cómo cambia el rol del inspector con el sistema digital
// ═══════════════════════════════════════════════════════════════════════
//
// SECCIONES:
//   1. Onboarding Digital con Checklist
//   2. Evaluaciones con Formulario Digital
//   3. Uniformes con Tracking Automático
//   4. Supervisión GPS-Optimizada
//   5. Satisfacción y Encuestas Auto
//   6. Solicitudes de Managers (Workflow)
//   7. TimeSheet y Nómina Digital
//   8. Incidentes e Injury Report Digital
//   9. Métricas Automáticas
//
// ═══════════════════════════════════════════════════════════════════════

const inspectorDigitalFlow = {
  nodes: [
    // ── INICIO ──
    { id: 'start', type: 'input', position: { x: 700, y: 0 }, data: { label: '⚡ Inspector Digital\nde Calidad\ncon Sistema Orange' }, className: 'node-digital-section' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 1: ONBOARDING DIGITAL
    // ═══════════════════════════════════════════════════════
    { id: 'section_onboard', type: 'default', position: { x: 50, y: 150 }, data: { label: '📋 ONBOARDING\nDIGITAL' }, className: 'node-digital-section' },

    { id: 'onb_notif', type: 'default', position: { x: 50, y: 300 }, data: { label: '🔔 Push Notification:\n"Nuevo empleado asignado\na Hotel [X] mañana 8AM"\n+ Perfil del empleado\n+ % completado app' }, className: 'node-digital-notification' },

    { id: 'onb_ruta', type: 'default', position: { x: 50, y: 480 }, data: { label: '🗺️ Ruta GPS Optimizada:\nSistema calcula mejor\nruta entre propiedades\ndel día\n(antes: inspector decidía)' }, className: 'node-digital-auto' },

    { id: 'onb_checklist', type: 'default', position: { x: 50, y: 650 }, data: { label: '✅ Checklist Digital\nen Tablet/Celular:\n☐ Presentación al emp.\n☐ Tour de propiedad\n☐ Contacto gerencia\n☐ Foto ID capturada\n☐ App ≥60% verificado' }, className: 'node-digital-hybrid' },

    { id: 'onb_app_help', type: 'default', position: { x: 250, y: 650 }, data: { label: '📱 Ayudar con App:\nSi emp <60% →\nayudar a completar\nen el momento\ncon OCR de docs' }, className: 'node-digital-hybrid' },

    { id: 'onb_tracking', type: 'default', position: { x: 50, y: 830 }, data: { label: '⏰ Auto-Tracking 72h:\nSistema monitorea\nsi emp llega a 60%\n24h/48h/72h alertas\n→ STRIKE auto si falla\n(antes: inspector recordaba)' }, className: 'node-digital-rules' },

    // ELIMINADO
    { id: 'onb_eliminado', type: 'default', position: { x: 250, y: 830 }, data: { label: '❌ Formato de ingreso\nen papel + recordar\nmanualmente los 72h\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 2: EVALUACIONES DIGITALES
    // ═══════════════════════════════════════════════════════
    { id: 'section_eval', type: 'default', position: { x: 50, y: 1000 }, data: { label: '📊 EVALUACIONES\nDIGITALES' }, className: 'node-digital-section' },

    { id: 'eval_push_5', type: 'default', position: { x: 50, y: 1150 }, data: { label: '🔔 Push Auto Día 5:\n"Evaluar a [empleado]\nen Hotel [X]"\n→ Formulario digital\n4 dimensiones:\nDesempeño/Actitud/\nPuntualidad/Calidad' }, className: 'node-digital-notification' },

    { id: 'eval_push_10', type: 'default', position: { x: 250, y: 1150 }, data: { label: '🔔 Push Auto Día 10:\n"Evaluación integración\n[empleado] en Hotel [X]"\n→ Mismo formulario\n+ input gerencia hotel' }, className: 'node-digital-notification' },

    { id: 'eval_espontanea', type: 'default', position: { x: 150, y: 1320 }, data: { label: '🎲 Eval. Espontánea:\nInspector abre formulario\nen cualquier momento\n→ Revisión: habitación,\norden, productos, actitud\n→ Objetivo: subir estándar' }, className: 'node-digital-hybrid' },

    { id: 'eval_resultados', type: 'default', position: { x: 150, y: 1490 }, data: { label: '📊 Resultados Auto:\nScore promedio visible\nen perfil del empleado\n→ Afecta matching futuro\n→ Dashboard Dirección' }, className: 'node-digital-auto' },

    // ELIMINADO
    { id: 'eval_eliminado', type: 'default', position: { x: 350, y: 1320 }, data: { label: '❌ Evaluaciones\nverbales / papel\nsin registro\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 3: UNIFORMES TRACKING AUTO
    // ═══════════════════════════════════════════════════════
    { id: 'section_uniform', type: 'default', position: { x: 450, y: 150 }, data: { label: '👕 UNIFORMES\nTRACKING AUTO' }, className: 'node-digital-section' },

    { id: 'uni_push', type: 'default', position: { x: 450, y: 300 }, data: { label: '🔔 Push Automático:\n"Entregar uniforme a\n[empleado] en Hotel [X]\nDía 3 (fijo) / Día 5 (temp)"\n(antes: recordar mentalmente)' }, className: 'node-digital-notification' },

    { id: 'uni_entrega', type: 'default', position: { x: 450, y: 470 }, data: { label: '👕 Entrega + Registro:\n• Seleccionar talla\n• Firma digital en pantalla\n• Foto evidencia con cámara\n• Auto-notifica contabilidad' }, className: 'node-digital-hybrid' },

    { id: 'uni_cobro', type: 'default', position: { x: 450, y: 640 }, data: { label: '💵 $30 Auto-Aplicado:\nSistema agrega descuento\nal primer cheque\nautomáticamente\n(antes: notificar a Mónica)' }, className: 'node-digital-auto' },

    { id: 'uni_inventario', type: 'default', position: { x: 650, y: 470 }, data: { label: '📦 Inventario Auto:\nStock de uniformes\npor talla visible\nen app del inspector\n→ Alerta cuando bajo' }, className: 'node-digital-auto' },

    // ELIMINADO
    { id: 'uni_eliminado', type: 'default', position: { x: 650, y: 640 }, data: { label: '❌ Notificar a\ncontabilidad manualmente\npor WhatsApp/Monday\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 4: SUPERVISIÓN GPS-OPTIMIZADA
    // ═══════════════════════════════════════════════════════
    { id: 'section_supervision', type: 'default', position: { x: 800, y: 150 }, data: { label: '🗺️ SUPERVISIÓN\nGPS-OPTIMIZADA' }, className: 'node-digital-section' },

    { id: 'sup_ruta_auto', type: 'default', position: { x: 800, y: 300 }, data: { label: '⚙️ Ruta Diaria Auto:\nPrioridad calculada:\n1) Ingresos nuevos\n2) Onboarding 5 días\n3) Calidad cada 3ra visita\n+ Kilómetros optimizados' }, className: 'node-digital-rules' },

    { id: 'sup_visita', type: 'default', position: { x: 800, y: 480 }, data: { label: '🏨 Al Llegar al Hotel:\nGPS registra llegada auto\n→ Timer de visita activo\n→ Checklist supervisión\n  se despliega' }, className: 'node-digital-hybrid' },

    { id: 'sup_checklist', type: 'default', position: { x: 800, y: 650 }, data: { label: '✅ Checklist Digital:\n☐ Uniforme correcto\n☐ Estándares cumplidos\n☐ Problemas detectados\n☐ Reunión con gerencia\n→ Cada item con foto opcional' }, className: 'node-digital-hybrid' },

    { id: 'sup_reporte', type: 'default', position: { x: 800, y: 830 }, data: { label: '📋 Reporte de Visita\nAuto-Generado:\nAl completar checklist\n→ PDF enviado a Dirección\n→ Ticket si hay problemas\n(antes: WhatsApp manual)' }, className: 'node-digital-auto' },

    { id: 'sup_escalar', type: 'default', position: { x: 1000, y: 830 }, data: { label: '🔺 Escalación Auto:\nProblema grave marcado\n→ Alerta inmediata a\nIrene/Coordinación\n→ SLA respuesta <24h' }, className: 'node-digital-notification' },

    // ELIMINADO
    { id: 'sup_eliminado', type: 'default', position: { x: 1000, y: 480 }, data: { label: '❌ Reportar visitas\npor WhatsApp sin\nestructura ni tracking\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 5: SATISFACCIÓN Y ENCUESTAS
    // ═══════════════════════════════════════════════════════
    { id: 'section_satisfaccion', type: 'default', position: { x: 1150, y: 150 }, data: { label: '⭐ ENCUESTAS\nAUTO-ENVIADAS' }, className: 'node-digital-section' },

    { id: 'sat_trigger', type: 'default', position: { x: 1150, y: 300 }, data: { label: '⚙️ Trigger Auto:\nAl completar visita\n→ Encuesta enviada\nal gerente hotel\nvía App + Email\n(antes: manual después)' }, className: 'node-digital-auto' },

    { id: 'sat_formulario', type: 'default', position: { x: 1150, y: 470 }, data: { label: '📋 Formulario Digital:\n• Calidad del personal\n• Puntualidad\n• Actitud/Servicio\n• Comentarios libres\n→ 5 min para completar' }, className: 'node-digital-auto' },

    { id: 'sat_resultados', type: 'default', position: { x: 1150, y: 640 }, data: { label: '📊 Resultados Auto:\nNPS calculado\n→ Dashboard Dirección\n→ Tickets auto-generados\nsi score bajo\n→ Trends por hotel' }, className: 'node-digital-rules' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 6: SOLICITUDES MANAGERS (WORKFLOW)
    // ═══════════════════════════════════════════════════════
    { id: 'section_mgr', type: 'default', position: { x: 1150, y: 820 }, data: { label: '🏨 SOLICITUDES\nMANAGERS WORKFLOW' }, className: 'node-digital-section' },

    { id: 'mgr_tipos', type: 'default', position: { x: 1050, y: 970 }, data: { label: '📋 8 Tipos Auto-Routing:\n• Ajuste contrato → Dir.\n• Ajuste rate → Dir.\n• Facturas → Contab.\n• Reporte empleados → Auto\n• Cambio personal → Reclu.\n• Terminate → Dir.\n• Seg. nómina → Contab.\n• Quejas → Inspector' }, className: 'node-digital-rules' },

    { id: 'mgr_tracking', type: 'default', position: { x: 1250, y: 970 }, data: { label: '📊 Tracking Auto:\nCada solicitud tiene\nSLA configurable\n→ Escalación si vence\n→ Manager ve estado\n  en su portal' }, className: 'node-digital-auto' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 7: TIMESHEET DIGITAL
    // ═══════════════════════════════════════════════════════
    { id: 'section_ts', type: 'default', position: { x: 450, y: 1000 }, data: { label: '📊 TIMESHEET\nDIGITAL' }, className: 'node-digital-section' },

    { id: 'ts_auto_remind', type: 'default', position: { x: 450, y: 1150 }, data: { label: '🔔 Reminder Auto:\nLun-Mar push a managers\n"Enviar TimeSheet"\nMié: alerta urgente\n→ Escalación si falta\n(antes: inspector llamaba)' }, className: 'node-digital-notification' },

    { id: 'ts_digital_upload', type: 'default', position: { x: 650, y: 1150 }, data: { label: '📤 Manager sube TS\nen portal digital\n→ Validación auto\n  de formato y horas\n→ Alerta si >12h/día' }, className: 'node-digital-auto' },

    { id: 'ts_discrepancia', type: 'default', position: { x: 450, y: 1320 }, data: { label: '⚠️ Discrepancias:\nFormulario digital\nen app del empleado\n→ Auto-routing a\n  contabilidad\n→ SLA 48h respuesta' }, className: 'node-digital-rules' },

    { id: 'ts_deadline', type: 'default', position: { x: 650, y: 1320 }, data: { label: '🔴 Cierre Mié Auto:\nSistema bloquea\nentregar TS después\ndel deadline\n→ Extemporáneo = \n  proceso aparte' }, className: 'node-digital-rules' },

    // ELIMINADO
    { id: 'ts_eliminado', type: 'default', position: { x: 850, y: 1150 }, data: { label: '❌ Recibir TS por\nemail/foto + recopilar\nhoras manualmente\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 8: INCIDENTES E INJURY REPORT
    // ═══════════════════════════════════════════════════════
    { id: 'section_incident', type: 'default', position: { x: 450, y: 1500 }, data: { label: '🚑 INCIDENTES\nDIGITALES' }, className: 'node-digital-section' },

    { id: 'inc_form', type: 'default', position: { x: 350, y: 1650 }, data: { label: '📱 Reporte Digital:\n• Tipo: menor/grave/injury\n• Descripción guiada\n• Fotos con cámara\n• GPS + timestamp auto\n• Firma digital' }, className: 'node-digital-hybrid' },

    { id: 'inc_routing', type: 'default', position: { x: 550, y: 1650 }, data: { label: '⚙️ Auto-Routing:\nMenor → Ticket seguimiento\nGrave → Alerta Dirección\n  + Proponer BL\nInjury → Workers Comp\n  auto-iniciado' }, className: 'node-digital-rules' },

    { id: 'inc_blacklist', type: 'default', position: { x: 350, y: 1820 }, data: { label: '🚫 Proponer BL:\nFormulario con evidencia\n→ Dirección aprueba\n  con click en dashboard\n(antes: llamar/WhatsApp)' }, className: 'node-digital-hybrid' },

    { id: 'inc_workcomp', type: 'default', position: { x: 550, y: 1820 }, data: { label: '🏥 Workers Comp:\nFormularios pre-llenados\nautomáticamente con\ndatos del sistema\n→ Solo revisar y enviar' }, className: 'node-digital-auto' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 9: MÉTRICAS AUTO
    // ═══════════════════════════════════════════════════════
    { id: 'section_metricas', type: 'default', position: { x: 800, y: 1000 }, data: { label: '📈 MÉTRICAS\nAUTOMÁTICAS' }, className: 'node-digital-section' },

    { id: 'met_dashboard', type: 'default', position: { x: 800, y: 1150 }, data: { label: '📊 Dashboard Auto:\n• Hoteles visitados/sem\n• Km recorridos\n• Tiempo resp. solicitudes\n• Evals completadas\n• Uniformes entregados\n• Incidentes reportados' }, className: 'node-digital-auto' },

    { id: 'met_kpi_depto', type: 'default', position: { x: 800, y: 1340 }, data: { label: '📊 KPIs Depto:\n• Calidad general\n  (score promedio evals)\n• Satisfacción hoteles\n  (NPS promedio)\n• Tiempo cobertura\n  onboarding' }, className: 'node-digital-auto' },

    // ── FIN ──
    { id: 'end', type: 'output', position: { x: 700, y: 1950 }, data: { label: '⚡ Inspector Digital\nCompleto\nNivel 2-3: Operativa\n+ Automatización' }, className: 'node-digital-section' },
  ],

  edges: [
    // Inicio
    { id: 'e_s1', source: 'start', target: 'section_onboard' },
    { id: 'e_s2', source: 'start', target: 'section_uniform' },
    { id: 'e_s3', source: 'start', target: 'section_supervision' },
    { id: 'e_s4', source: 'start', target: 'section_satisfaccion' },

    // ══ 1. Onboarding ══
    { id: 'e_o1', source: 'section_onboard', target: 'onb_notif' },
    { id: 'e_o2', source: 'onb_notif', target: 'onb_ruta', animated: true },
    { id: 'e_o3', source: 'onb_ruta', target: 'onb_checklist' },
    { id: 'e_o4', source: 'onb_checklist', target: 'onb_app_help', style: { strokeDasharray: '5,5' } },
    { id: 'e_o5', source: 'onb_checklist', target: 'onb_tracking', animated: true },

    // Onboarding → Evaluaciones
    { id: 'e_oe', source: 'onb_tracking', target: 'section_eval' },

    // ══ 2. Evaluaciones ══
    { id: 'e_ev1', source: 'section_eval', target: 'eval_push_5' },
    { id: 'e_ev2', source: 'section_eval', target: 'eval_push_10' },
    { id: 'e_ev3', source: 'eval_push_5', target: 'eval_espontanea', style: { strokeDasharray: '5,5' } },
    { id: 'e_ev4', source: 'eval_push_10', target: 'eval_espontanea', style: { strokeDasharray: '5,5' } },
    { id: 'e_ev5', source: 'eval_espontanea', target: 'eval_resultados', animated: true },

    // ══ 3. Uniformes ══
    { id: 'e_u1', source: 'section_uniform', target: 'uni_push' },
    { id: 'e_u2', source: 'uni_push', target: 'uni_entrega' },
    { id: 'e_u3', source: 'uni_entrega', target: 'uni_cobro', animated: true },
    { id: 'e_u4', source: 'uni_entrega', target: 'uni_inventario', style: { strokeDasharray: '5,5' } },

    // ══ 4. Supervisión ══
    { id: 'e_sp1', source: 'section_supervision', target: 'sup_ruta_auto', animated: true },
    { id: 'e_sp2', source: 'sup_ruta_auto', target: 'sup_visita' },
    { id: 'e_sp3', source: 'sup_visita', target: 'sup_checklist' },
    { id: 'e_sp4', source: 'sup_checklist', target: 'sup_reporte', animated: true },
    { id: 'e_sp5', source: 'sup_reporte', target: 'sup_escalar', label: 'Si grave', style: { stroke: '#c62828' } },

    // ══ 5. Satisfacción ══
    { id: 'e_sat1', source: 'section_satisfaccion', target: 'sat_trigger', animated: true },
    { id: 'e_sat2', source: 'sat_trigger', target: 'sat_formulario' },
    { id: 'e_sat3', source: 'sat_formulario', target: 'sat_resultados', animated: true },
    { id: 'e_sat4', source: 'sat_resultados', target: 'section_mgr' },

    // ══ 6. Solicitudes Managers ══
    { id: 'e_mg1', source: 'section_mgr', target: 'mgr_tipos' },
    { id: 'e_mg2', source: 'section_mgr', target: 'mgr_tracking' },

    // ══ 7. TimeSheet ══
    { id: 'e_ts1', source: 'section_eval', target: 'section_ts', style: { strokeDasharray: '5,5' } },
    { id: 'e_ts2', source: 'section_ts', target: 'ts_auto_remind' },
    { id: 'e_ts3', source: 'section_ts', target: 'ts_digital_upload' },
    { id: 'e_ts4', source: 'ts_auto_remind', target: 'ts_discrepancia', style: { strokeDasharray: '5,5' } },
    { id: 'e_ts5', source: 'ts_digital_upload', target: 'ts_deadline' },

    // ══ 8. Incidentes ══
    { id: 'e_inc0', source: 'sup_reporte', target: 'section_incident', label: 'Si incidente', style: { strokeDasharray: '5,5' } },
    { id: 'e_inc1', source: 'section_incident', target: 'inc_form' },
    { id: 'e_inc2', source: 'inc_form', target: 'inc_routing', animated: true },
    { id: 'e_inc3', source: 'inc_routing', target: 'inc_blacklist', label: 'Grave' },
    { id: 'e_inc4', source: 'inc_routing', target: 'inc_workcomp', label: 'Injury' },

    // ══ 9. Métricas ══
    { id: 'e_met0', source: 'sup_reporte', target: 'section_metricas', style: { strokeDasharray: '5,5' } },
    { id: 'e_met1', source: 'section_metricas', target: 'met_dashboard' },
    { id: 'e_met2', source: 'met_dashboard', target: 'met_kpi_depto' },
    { id: 'e_met3', source: 'eval_resultados', target: 'met_kpi_depto', style: { strokeDasharray: '8,4' } },

    // Fin
    { id: 'e_end1', source: 'inc_blacklist', target: 'end' },
    { id: 'e_end2', source: 'inc_workcomp', target: 'end' },
    { id: 'e_end3', source: 'met_kpi_depto', target: 'end' },
  ]
}

export default inspectorDigitalFlow
