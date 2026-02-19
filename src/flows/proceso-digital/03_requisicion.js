// ═══════════════════════════════════════════════════════════════════════
// PROCESO DIGITAL: RECLUTADORA (Cecy/Candy)
// Nivel 2-3: Operativa + Automatización
// Cómo cambia el proceso de reclutamiento con el sistema digital
// ═══════════════════════════════════════════════════════════════════════
//
// SECCIONES:
//   1. Captación Multi-Canal Automatizada
//   2. Filtro y Scoring Automático de Candidatos
//   3. Pool Inteligente con Auto-Clasificación
//   4. Requisiciones Digitales con Prioridad Automática
//   5. Auto-Matching y Asignación
//   6. Onboarding Digital del Candidato
//   7. Seguimiento Día 1 Automatizado
//   8. Retención Proactiva Automatizada
//   9. Métricas y Dashboard en Tiempo Real
//
// ═══════════════════════════════════════════════════════════════════════

const requisicionDigitalFlow = {
  nodes: [
    // ── INICIO ──
    { id: 'start', type: 'input', position: { x: 600, y: 0 }, data: { label: '⚡ Reclutadora Digital\nCecy / Candy\ncon Sistema Orange' }, className: 'node-digital-section' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 1: CAPTACIÓN MULTI-CANAL
    // ═══════════════════════════════════════════════════════
    { id: 'section_captacion', type: 'default', position: { x: 100, y: 150 }, data: { label: '📢 CAPTACIÓN\nMULTI-CANAL AUTO' }, className: 'node-digital-section' },

    { id: 'cap_facebook', type: 'default', position: { x: 0, y: 300 }, data: { label: '📱 Facebook Ads\n→ Landing con\nformulario + descarga\napp automática' }, className: 'node-digital-auto' },
    { id: 'cap_sms', type: 'default', position: { x: 200, y: 300 }, data: { label: '💬 SMS/WhatsApp\n→ Deep Link directo\na descarga app\n(datos pre-cargados)' }, className: 'node-digital-auto' },
    { id: 'cap_referidos', type: 'default', position: { x: 400, y: 300 }, data: { label: '🤝 Referidos\n→ Código QR único\npor empleado\n→ Bonus auto si contrata' }, className: 'node-digital-auto' },

    { id: 'cap_tracking', type: 'default', position: { x: 200, y: 460 }, data: { label: '📊 Auto-Tracking:\nFuente de cada candidato\n→ ROI por canal\n→ Cual canal trae mejores\n(antes: no se medía)' }, className: 'node-digital-rules' },

    // ELIMINADO
    { id: 'cap_eliminado', type: 'default', position: { x: 400, y: 460 }, data: { label: '❌ Contacto manual\nuno por uno vía\nWhatsApp/llamada\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 2: FILTRO Y SCORING AUTOMÁTICO
    // ═══════════════════════════════════════════════════════
    { id: 'section_filtro', type: 'default', position: { x: 100, y: 620 }, data: { label: '🎯 FILTRO Y SCORING\nAUTOMÁTICO' }, className: 'node-digital-section' },

    { id: 'fil_auto_registro', type: 'default', position: { x: 0, y: 770 }, data: { label: '📱 Candidato se\nauto-registra en App\n→ Datos validados\n  en tiempo real\n→ OCR documentos' }, className: 'node-digital-auto' },

    { id: 'fil_scoring', type: 'default', position: { x: 200, y: 770 }, data: { label: '⚙️ Auto-Scoring:\n• Zona GPS (distancia)\n• Experiencia hotel\n• Documentos completos\n• Disponibilidad horaria\n→ Puntuación 0-100' }, className: 'node-digital-rules' },

    { id: 'fil_alertas_rojas', type: 'default', position: { x: 400, y: 770 }, data: { label: '🚩 Alertas Rojas Auto:\n• Zona >30 min\n• Sin experiencia hotel\n• Restricciones extremas\n• Blacklist check instant' }, className: 'node-digital-rules' },

    { id: 'fil_decision', type: 'default', position: { x: 200, y: 950 }, data: { label: '⚙️ Decisión Auto:\nScore ≥70 → Pool directo\nScore 40-69 → Entrevista\nScore <40 → Rechazado\n(antes: todas a entrevista)' }, className: 'node-digital-rules' },

    { id: 'fil_entrevista', type: 'default', position: { x: 0, y: 1100 }, data: { label: '🎙️ Entrevista\nSolo casos 40-69:\nGuía digital por posición\n(HK/HM/LY/MT)\ncon checklist en app' }, className: 'node-digital-hybrid' },

    // ELIMINADO
    { id: 'fil_eliminado', type: 'default', position: { x: 400, y: 950 }, data: { label: '❌ Entrevistar TODOS\nlos candidatos por\nteléfono manualmente\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 3: POOL INTELIGENTE
    // ═══════════════════════════════════════════════════════
    { id: 'section_pool', type: 'default', position: { x: 600, y: 150 }, data: { label: '👥 POOL\nINTELIGENTE' }, className: 'node-digital-section' },

    { id: 'pool_auto_clasif', type: 'default', position: { x: 600, y: 300 }, data: { label: '⚙️ Auto-Clasificación:\n• Por zona GPS\n• Por habilidades/posición\n• Por disponibilidad\n• Por score/rating\n• Por idioma' }, className: 'node-digital-rules' },

    { id: 'pool_disponibles', type: 'default', position: { x: 550, y: 470 }, data: { label: '🟢 Pool Disponibles\n(listos para asignar)\nOrdenados por\ncompatibilidad' }, className: 'node-digital-auto' },
    { id: 'pool_nuevos', type: 'default', position: { x: 750, y: 470 }, data: { label: '🆕 Pool Nuevos\n(recién registrados,\npendiente completar\nperfil)' }, className: 'node-digital-notification' },

    { id: 'pool_busqueda', type: 'default', position: { x: 600, y: 620 }, data: { label: '🔍 Búsqueda Avanzada:\nFiltros combinados\n→ Resultados instantáneos\n→ Match score visible\n(antes: búsqueda manual)' }, className: 'node-digital-auto' },

    // ELIMINADO
    { id: 'pool_eliminado', type: 'default', position: { x: 750, y: 620 }, data: { label: '❌ Pools en Excel/\nTrello sin filtros\nautomáticos\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 4: REQUISICIONES DIGITALES
    // ═══════════════════════════════════════════════════════
    { id: 'section_requisicion', type: 'default', position: { x: 600, y: 780 }, data: { label: '📋 REQUISICIONES\nDIGITALES' }, className: 'node-digital-section' },

    { id: 'req_recepcion', type: 'default', position: { x: 600, y: 930 }, data: { label: '📱 Recepción Auto:\nHotel crea requisición\nen portal → llega\ninstantáneamente\n→ Serial REQ-# auto' }, className: 'node-digital-auto' },

    { id: 'req_prioridad', type: 'default', position: { x: 800, y: 930 }, data: { label: '⚙️ Prioridad Auto:\n🟢 >120h Normal\n🟡 72-120h Media\n🔴 <72h Urgente\n(calculada por fecha)' }, className: 'node-digital-rules' },

    { id: 'req_costos', type: 'default', position: { x: 800, y: 1090 }, data: { label: '💰 Costos Auto:\nBill Rate del contrato\n× horas estimadas\n= Costo proyectado\nMargen auto-validado' }, className: 'node-digital-auto' },

    { id: 'req_matching', type: 'default', position: { x: 600, y: 1090 }, data: { label: '🎯 Auto-Matching:\nSistema sugiere mejores\ncandidatos del pool\nBasado en requisición\n→ Lista ordenada' }, className: 'node-digital-rules' },

    // ELIMINADOS
    { id: 'req_eliminado1', type: 'default', position: { x: 1000, y: 930 }, data: { label: '❌ Requisiciones vía\nWhatsApp Chat 4\nsin tracking\n→ ELIMINADO' }, className: 'node-digital-eliminated' },
    { id: 'req_eliminado2', type: 'default', position: { x: 1000, y: 1090 }, data: { label: '❌ Crear tarjeta\nTrello manualmente\npara cada asignación\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 5: AUTO-MATCHING Y ASIGNACIÓN
    // ═══════════════════════════════════════════════════════
    { id: 'section_asignacion', type: 'default', position: { x: 200, y: 1250 }, data: { label: '📌 ASIGNACIÓN\nINTELIGENTE' }, className: 'node-digital-section' },

    { id: 'asig_auto_notify', type: 'default', position: { x: 200, y: 1400 }, data: { label: '🔔 Notificación Auto\nal mejor candidato:\n"Hay trabajo en\nHotel [X] a [Y] min"\n→ Acepta/Rechaza en app' }, className: 'node-digital-notification' },

    { id: 'asig_acepta', type: 'default', position: { x: 100, y: 1560 }, data: { label: '✅ Acepta:\n→ Asignación confirmada\n→ Notifica hotel auto\n→ Mapa GPS enviado\n→ Instrucciones auto' }, className: 'node-digital-auto' },

    { id: 'asig_rechaza', type: 'default', position: { x: 350, y: 1560 }, data: { label: '❌ Rechaza:\n→ Auto-ofrece al\nsiguiente candidato\nen la lista\n(loop automático)' }, className: 'node-digital-rules' },

    { id: 'asig_tipo', type: 'default', position: { x: 100, y: 1710 }, data: { label: '📌 Tipo Asignación:\n• Nueva Fija\n• Nueva (Entrevista hotel)\n• Temporal\n• Reemplazo urgente\n(clasificación auto)' }, className: 'node-digital-auto' },

    // ELIMINADO
    { id: 'asig_eliminado', type: 'default', position: { x: 350, y: 1400 }, data: { label: '❌ Llamar uno por uno\npara ofrecer vacante\n+ esperar respuesta\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 6: ONBOARDING DIGITAL CANDIDATO
    // ═══════════════════════════════════════════════════════
    { id: 'section_onboard', type: 'default', position: { x: 600, y: 1250 }, data: { label: '🍊 ONBOARDING\nDIGITAL' }, className: 'node-digital-section' },

    { id: 'onb_auto_msg', type: 'default', position: { x: 600, y: 1400 }, data: { label: '📱 Mensaje Bienvenida\nAutomático en App:\n"BIENVENID@ A\nORANGE STAFFING 🍊"\n+ Instrucciones auto' }, className: 'node-digital-auto' },

    { id: 'onb_instrucciones', type: 'default', position: { x: 600, y: 1560 }, data: { label: '📋 Push Automático:\n• Vestimenta (negro)\n• Hora y lugar (GPS)\n• Qué decir al llegar\n• TimeSheet obligatorio\n• Regla 16% si aplica' }, className: 'node-digital-notification' },

    { id: 'onb_beneficios', type: 'default', position: { x: 800, y: 1560 }, data: { label: '💰 Info Beneficios\nvisible en app:\n• Pago semanal\n• Uniforme 2da semana\n• Vacaciones/año\n• Desglose salario' }, className: 'node-digital-auto' },

    { id: 'onb_confirmacion', type: 'default', position: { x: 600, y: 1710 }, data: { label: '✅ Confirmar Asistencia\nen App (1 día antes):\n"Confirmo que asistiré\nmañana a las [hora]"\n(antes: llamar para confirmar)' }, className: 'node-digital-hybrid' },

    // ELIMINADO
    { id: 'onb_eliminado', type: 'default', position: { x: 800, y: 1400 }, data: { label: '❌ Enviar mensaje\nde bienvenida manual\npor WhatsApp\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 7: SEGUIMIENTO DÍA 1 AUTO
    // ═══════════════════════════════════════════════════════
    { id: 'section_seguimiento', type: 'default', position: { x: 200, y: 1870 }, data: { label: '📍 SEGUIMIENTO\nDÍA 1 AUTO' }, className: 'node-digital-section' },

    { id: 'seg_gps_confirm', type: 'default', position: { x: 200, y: 2020 }, data: { label: '📍 GPS Confirma\nllegada automática:\n"Empleado [X] llegó\na Hotel [Y] a las\n[hora]"\n(antes: llamar para verificar)' }, className: 'node-digital-auto' },

    { id: 'seg_noshow_auto', type: 'default', position: { x: 400, y: 2020 }, data: { label: '🚨 No-Show Auto:\n8:30 sin GPS confirm\n→ Alerta a reclutadora\n→ Escalación automática\n→ Buscar reemplazo auto' }, className: 'node-digital-notification' },

    { id: 'seg_foto_id', type: 'default', position: { x: 200, y: 2180 }, data: { label: '📸 Foto ID Auto:\nInspector sube foto\nen app → Asignación\nmarcada "LLEGÓ"\nautomáticamente' }, className: 'node-digital-hybrid' },

    { id: 'seg_reporte', type: 'default', position: { x: 400, y: 2180 }, data: { label: '📊 Reporte Diario\nAutoGenerado:\n• Ingresos del día\n• No-Shows\n• Requisiciones cubiertas\n(antes: reporte manual)' }, className: 'node-digital-auto' },

    // ELIMINADOS
    { id: 'seg_eliminado1', type: 'default', position: { x: 600, y: 2020 }, data: { label: '❌ Monitoreo día 1\npor WhatsApp/llamada\n→ ELIMINADO' }, className: 'node-digital-eliminated' },
    { id: 'seg_eliminado2', type: 'default', position: { x: 600, y: 2180 }, data: { label: '❌ Reportar al Chat 4\nmanualmente cada evento\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 8: RETENCIÓN PROACTIVA
    // ═══════════════════════════════════════════════════════
    { id: 'section_retencion', type: 'default', position: { x: 700, y: 1870 }, data: { label: '🔄 RETENCIÓN\nPROACTIVA AUTO' }, className: 'node-digital-section' },

    { id: 'ret_auto_detect', type: 'default', position: { x: 700, y: 2020 }, data: { label: '⚙️ Auto-Detecta:\nAsignación temporal\npor terminar en [X] días\n→ Busca siguiente hotel\npor proximidad GPS\n(antes: llamar manualmente)' }, className: 'node-digital-rules' },

    { id: 'ret_sugerencia', type: 'default', position: { x: 700, y: 2200 }, data: { label: '🔔 Auto-Sugiere:\nNotificación a reclutadora\n+ al empleado:\n"Tenemos opciones\ncerca de ti"' }, className: 'node-digital-notification' },

    { id: 'ret_kpi', type: 'default', position: { x: 900, y: 2200 }, data: { label: '📊 KPI Retención:\n• Meta: >72h continua\n• Actual: ~70%\n• Objetivo: >85%\nVisible en dashboard' }, className: 'node-digital-auto' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 9: MÉTRICAS Y DASHBOARD
    // ═══════════════════════════════════════════════════════
    { id: 'section_metricas', type: 'default', position: { x: 450, y: 2350 }, data: { label: '📈 MÉTRICAS\nEN TIEMPO REAL' }, className: 'node-digital-section' },

    { id: 'met_dashboard', type: 'default', position: { x: 300, y: 2500 }, data: { label: '📊 Dashboard Auto:\n• Tasa cumplimiento req.\n• Tiempo prom. cobertura\n• % No-Shows\n• % Req <72h\n• Retención 1er mes\n• ROI por canal captación' }, className: 'node-digital-auto' },

    { id: 'met_alertas', type: 'default', position: { x: 550, y: 2500 }, data: { label: '🔔 Alertas Proactivas:\n• Requisiciones sin cubrir\n• Pool bajo en zona\n• Empleado con 2 strikes\n• Retención en riesgo\n(antes: revisar manualmente)' }, className: 'node-digital-notification' },

    // ELIMINADO
    { id: 'met_eliminado', type: 'default', position: { x: 750, y: 2500 }, data: { label: '❌ Métricas manuales\ncalculadas al cierre\ndel mes sin visibilidad\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ── FIN ──
    { id: 'end', type: 'output', position: { x: 450, y: 2660 }, data: { label: '⚡ Reclutamiento Digital\nCompleto\nNivel 2-3: Operativa\n+ Automatización' }, className: 'node-digital-section' },
  ],

  edges: [
    // Inicio
    { id: 'e_s1', source: 'start', target: 'section_captacion' },
    { id: 'e_s2', source: 'start', target: 'section_pool' },

    // ══ 1. Captación ══
    { id: 'e_c1', source: 'section_captacion', target: 'cap_facebook' },
    { id: 'e_c2', source: 'section_captacion', target: 'cap_sms' },
    { id: 'e_c3', source: 'section_captacion', target: 'cap_referidos' },
    { id: 'e_c4', source: 'cap_facebook', target: 'cap_tracking' },
    { id: 'e_c5', source: 'cap_sms', target: 'cap_tracking' },
    { id: 'e_c6', source: 'cap_referidos', target: 'cap_tracking' },
    { id: 'e_c7', source: 'cap_tracking', target: 'section_filtro' },

    // ══ 2. Filtro y Scoring ══
    { id: 'e_f1', source: 'section_filtro', target: 'fil_auto_registro', animated: true },
    { id: 'e_f2', source: 'fil_auto_registro', target: 'fil_scoring' },
    { id: 'e_f3', source: 'fil_scoring', target: 'fil_alertas_rojas', style: { strokeDasharray: '5,5' } },
    { id: 'e_f4', source: 'fil_scoring', target: 'fil_decision', animated: true },
    { id: 'e_f5', source: 'fil_decision', target: 'fil_entrevista', label: 'Score 40-69' },
    { id: 'e_f6', source: 'fil_decision', target: 'pool_disponibles', label: 'Score ≥70', animated: true },
    { id: 'e_f7', source: 'fil_entrevista', target: 'pool_disponibles', label: 'Aprobado' },

    // ══ 3. Pool Inteligente ══
    { id: 'e_p1', source: 'section_pool', target: 'pool_auto_clasif', animated: true },
    { id: 'e_p2', source: 'pool_auto_clasif', target: 'pool_disponibles' },
    { id: 'e_p3', source: 'pool_auto_clasif', target: 'pool_nuevos' },
    { id: 'e_p4', source: 'pool_disponibles', target: 'pool_busqueda' },
    { id: 'e_p5', source: 'pool_nuevos', target: 'pool_busqueda', style: { strokeDasharray: '5,5' } },

    // ══ 4. Requisiciones ══
    { id: 'e_r1', source: 'pool_busqueda', target: 'section_requisicion' },
    { id: 'e_r2', source: 'section_requisicion', target: 'req_recepcion', animated: true },
    { id: 'e_r3', source: 'req_recepcion', target: 'req_prioridad' },
    { id: 'e_r4', source: 'req_prioridad', target: 'req_costos' },
    { id: 'e_r5', source: 'req_recepcion', target: 'req_matching', animated: true },

    // ══ 5. Asignación ══
    { id: 'e_a1', source: 'req_matching', target: 'section_asignacion' },
    { id: 'e_a2', source: 'section_asignacion', target: 'asig_auto_notify', animated: true },
    { id: 'e_a3', source: 'asig_auto_notify', target: 'asig_acepta', label: 'Acepta' },
    { id: 'e_a4', source: 'asig_auto_notify', target: 'asig_rechaza', label: 'Rechaza', style: { stroke: '#c62828' } },
    { id: 'e_a5', source: 'asig_rechaza', target: 'asig_auto_notify', label: 'Siguiente candidato', style: { strokeDasharray: '5,5' } },
    { id: 'e_a6', source: 'asig_acepta', target: 'asig_tipo' },
    { id: 'e_a7', source: 'asig_acepta', target: 'section_onboard', animated: true },

    // ══ 6. Onboarding ══
    { id: 'e_o1', source: 'section_onboard', target: 'onb_auto_msg', animated: true },
    { id: 'e_o2', source: 'onb_auto_msg', target: 'onb_instrucciones' },
    { id: 'e_o3', source: 'onb_auto_msg', target: 'onb_beneficios', style: { strokeDasharray: '5,5' } },
    { id: 'e_o4', source: 'onb_instrucciones', target: 'onb_confirmacion' },

    // ══ 7. Seguimiento Día 1 ══
    { id: 'e_sg1', source: 'onb_confirmacion', target: 'section_seguimiento' },
    { id: 'e_sg2', source: 'section_seguimiento', target: 'seg_gps_confirm', animated: true },
    { id: 'e_sg3', source: 'section_seguimiento', target: 'seg_noshow_auto' },
    { id: 'e_sg4', source: 'seg_gps_confirm', target: 'seg_foto_id' },
    { id: 'e_sg5', source: 'seg_foto_id', target: 'seg_reporte' },
    { id: 'e_sg6', source: 'seg_noshow_auto', target: 'pool_busqueda', label: 'Buscar reemplazo', style: { stroke: '#c62828', strokeDasharray: '5,5' } },

    // ══ 8. Retención ══
    { id: 'e_rt1', source: 'seg_reporte', target: 'section_retencion', style: { strokeDasharray: '8,4' } },
    { id: 'e_rt2', source: 'section_retencion', target: 'ret_auto_detect', animated: true },
    { id: 'e_rt3', source: 'ret_auto_detect', target: 'ret_sugerencia' },
    { id: 'e_rt4', source: 'ret_sugerencia', target: 'ret_kpi', style: { strokeDasharray: '5,5' } },
    { id: 'e_rt5', source: 'ret_sugerencia', target: 'asig_auto_notify', label: 'Nueva oferta', style: { strokeDasharray: '8,4' } },

    // ══ 9. Métricas ══
    { id: 'e_m1', source: 'seg_reporte', target: 'section_metricas' },
    { id: 'e_m2', source: 'ret_kpi', target: 'section_metricas', style: { strokeDasharray: '5,5' } },
    { id: 'e_m3', source: 'section_metricas', target: 'met_dashboard' },
    { id: 'e_m4', source: 'section_metricas', target: 'met_alertas' },

    // Fin
    { id: 'e_end1', source: 'met_dashboard', target: 'end' },
    { id: 'e_end2', source: 'met_alertas', target: 'end' },
  ]
}

export default requisicionDigitalFlow
