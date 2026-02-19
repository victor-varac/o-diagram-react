// ═══════════════════════════════════════════════════════════════════════
// PROCESO DIGITAL: COLABORADOR / TRABAJADOR ORANGE
// Nivel 2-3: Operativa + Automatización
// Cómo cambia la experiencia del colaborador con el sistema digital
// ═══════════════════════════════════════════════════════════════════════
//
// LEYENDA DE NODOS (clases CSS):
//   node-digital-section    → Encabezados de sección (azul oscuro)
//   node-digital-auto       → 100% automatizado por el sistema (azul eléctrico)
//   node-digital-rules      → Motor de reglas / lógica de negocio (cyan/teal)
//   node-digital-hybrid     → Humano + sistema colaboran (verde azulado)
//   node-digital-human      → Todavía requiere intervención humana (naranja)
//   node-digital-notification → Notificaciones/alertas automáticas (amarillo tech)
//   node-digital-eliminated → Proceso eliminado / ya no existe (gris tachado)
//
// SECCIONES:
//   1. Auto-Registro y Onboarding Digital
//   2. Gates Automáticos (30%/60%/100%)
//   3. Matching y Asignación Inteligente
//   4. Onboarding Híbrido (Digital + Inspector)
//   5. Ponchado GPS Automático + Geofencing
//   6. Nómina y Pago Automatizado
//   7. Solicitudes con Workflow Digital
//   8. No-Show: Detección y Escalación Automática
//   9. Vacaciones: Cálculo y Contador en Tiempo Real
//  10. 16% Fiscal: Alertas y Reembolso Automático
//  11. Cambio Cuenta Bancaria: Proceso Formal Digital
//  12. Injury Report Digital
//  13. Retención Inteligente
//  14. Máquina de Estados Automática
//
// ═══════════════════════════════════════════════════════════════════════

const colaboradorDigitalFlow = {
  nodes: [
    // ── INICIO ──
    { id: 'start', type: 'input', position: { x: 750, y: 0 }, data: { label: '⚡ Colaborador Digital\nExperiencia del Trabajador\ncon Sistema Orange' }, className: 'node-digital-section' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 1: AUTO-REGISTRO Y ONBOARDING DIGITAL
    // ═══════════════════════════════════════════════════════
    { id: 'section_registro', type: 'default', position: { x: 50, y: 150 }, data: { label: '📱 AUTO-REGISTRO\nDIGITAL' }, className: 'node-digital-section' },

    { id: 'reg_multicanal', type: 'default', position: { x: 50, y: 290 }, data: { label: '📲 Reclutamiento\nMulticanal:\nFacebook Ads → Landing\nSMS → Deep Link\nReferido → Código QR\n🔗 Todos a descarga App' }, className: 'node-digital-auto' },

    { id: 'reg_descarga', type: 'default', position: { x: 50, y: 460 }, data: { label: '📥 Descarga App\n→ Cuenta pre-creada\nautomáticamente\n(SMS ya tiene datos\nbásicos pre-cargados)' }, className: 'node-digital-auto' },

    { id: 'reg_form_validado', type: 'default', position: { x: 50, y: 610 }, data: { label: '📝 Formulario In-App\ncon validación en\ntiempo real:\n• Campos obligatorios\n• Formato de datos\n• Tipo empleo W2/1099' }, className: 'node-digital-auto' },

    { id: 'reg_ocr', type: 'default', position: { x: 250, y: 610 }, data: { label: '📷 OCR Documentos:\nFoto ID → extrae datos\nPermiso Trabajo → valida\nSSN/Tax ID → formato\n✅ Auto-llenado campos' }, className: 'node-digital-auto' },

    { id: 'reg_blacklist', type: 'default', position: { x: 50, y: 780 }, data: { label: '🔍 Blacklist Check\nINSTANTÁNEO\nal completar registro\n⏱️ <2 segundos\n(antes: manual, horas)' }, className: 'node-digital-auto' },

    { id: 'reg_blacklisted', type: 'default', position: { x: 250, y: 780 }, data: { label: '🚫 En Blacklist:\nRechazo inmediato\n+ Mensaje genérico\n(sin revelar BL)' }, className: 'node-digital-eliminated' },

    { id: 'reg_pool', type: 'default', position: { x: 50, y: 920 }, data: { label: '✅ Pasa a Pool\nAutomáticamente\n→ Clasificado por:\n  zona GPS, habilidades,\n  disponibilidad, idioma' }, className: 'node-digital-rules' },

    { id: 'reg_sin_taxid', type: 'default', position: { x: 250, y: 920 }, data: { label: '⚠️ Sin Tax ID:\nSistema auto-activa\nretención 16% +\nalertas programadas\n(sin intervención humana)' }, className: 'node-digital-notification' },

    // ELIMINADOS
    { id: 'reg_eliminado_papel', type: 'default', position: { x: 450, y: 290 }, data: { label: '❌ Llenar datos en\npapel / llamada\n→ ELIMINADO' }, className: 'node-digital-eliminated' },
    { id: 'reg_eliminado_bl', type: 'default', position: { x: 450, y: 460 }, data: { label: '❌ Blacklist check\nmanual por reclutadora\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 2: GATES AUTOMÁTICOS
    // ═══════════════════════════════════════════════════════
    { id: 'section_gates', type: 'default', position: { x: 50, y: 1080 }, data: { label: '🚦 GATES\nAUTOMÁTICOS' }, className: 'node-digital-section' },

    { id: 'gate_engine', type: 'default', position: { x: 50, y: 1220 }, data: { label: '⚙️ Motor de Reglas\ncalcula % en tiempo real\ncada vez que colaborador\nactualiza un campo\n→ Barra de progreso\n  visible en App' }, className: 'node-digital-rules' },

    { id: 'gate_30_auto', type: 'default', position: { x: 0, y: 1380 }, data: { label: '🔴 <30%: BLOQUEADO\nSistema auto-bloquea\nponchado de entrada\n→ Pantalla: "Completa\n  tu perfil para trabajar"' }, className: 'node-digital-rules' },

    { id: 'gate_60_auto', type: 'default', position: { x: 220, y: 1380 }, data: { label: '🟡 30-59%: TRABAJA\npero NO PAGABLE\nSistema muestra\npantalla roja +\nauto-escalación 72h' }, className: 'node-digital-notification' },

    { id: 'gate_100_auto', type: 'default', position: { x: 440, y: 1380 }, data: { label: '🟢 ≥60%: PAGABLE\n100%: STATUS VERDE\nSistema auto-genera\n# empleado + activa\nnómina automática' }, className: 'node-digital-auto' },

    { id: 'gate_escalacion', type: 'default', position: { x: 220, y: 1540 }, data: { label: '⏰ Auto-Escalación:\n24h: Push + SMS auto\n48h: Alerta reclutadora\n72h: 🔴 CRÍTICO\n→ Strike a Inspector' }, className: 'node-digital-notification' },

    // ELIMINADO
    { id: 'gate_eliminado', type: 'default', position: { x: 440, y: 1540 }, data: { label: '❌ Inspector verifica\nmanualmente gates\n30/60/100%\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 3: MATCHING Y ASIGNACIÓN INTELIGENTE
    // ═══════════════════════════════════════════════════════
    { id: 'section_matching', type: 'default', position: { x: 500, y: 150 }, data: { label: '🎯 MATCHING\nINTELIGENTE' }, className: 'node-digital-section' },

    { id: 'match_auto', type: 'default', position: { x: 500, y: 290 }, data: { label: '⚙️ Sistema sugiere\nmejores matches:\n• Zona GPS (≤30 min)\n• Habilidades requeridas\n• Disponibilidad horaria\n• Rating del colaborador' }, className: 'node-digital-rules' },

    { id: 'match_notif', type: 'default', position: { x: 500, y: 470 }, data: { label: '🔔 Push Notification:\n"Hay trabajo disponible\nen Hotel [X] a [Y] min\nde tu ubicación"\n→ Ver Detalles / Rechazar' }, className: 'node-digital-notification' },

    { id: 'match_acepta', type: 'default', position: { x: 500, y: 630 }, data: { label: '✅ Acepta en App\ncon un toque\n→ Confirmación inmediata\n→ Mapa GPS + instrucciones\n→ Notifica al hotel' }, className: 'node-digital-auto' },

    { id: 'match_rechaza', type: 'default', position: { x: 680, y: 630 }, data: { label: '❌ Rechaza\n→ Vuelve al Pool\n→ Sistema ofrece\n  siguiente mejor match' }, className: 'node-digital-rules' },

    // ELIMINADO
    { id: 'match_eliminado', type: 'default', position: { x: 680, y: 470 }, data: { label: '❌ Reclutadora llama\nuno por uno para\nofrecer trabajo\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 4: ONBOARDING HÍBRIDO
    // ═══════════════════════════════════════════════════════
    { id: 'section_onboard', type: 'default', position: { x: 500, y: 800 }, data: { label: '🤝 ONBOARDING\nHÍBRIDO' }, className: 'node-digital-section' },

    { id: 'onb_pre_digital', type: 'default', position: { x: 500, y: 940 }, data: { label: '📱 PRE-ONBOARDING\nDigital (antes de ir):\n• Video tutorial hotel\n• Checklist de lo que llevar\n• Mapa de ruta óptima\n• Confirmar asistencia' }, className: 'node-digital-auto' },

    { id: 'onb_dia1', type: 'default', position: { x: 500, y: 1120 }, data: { label: '📅 Día 1 Presencial:\nInspector recibe +\nApp confirma llegada\nvía GPS automático\n(ya no "vengo de Orange")' }, className: 'node-digital-hybrid' },

    { id: 'onb_checklist', type: 'default', position: { x: 680, y: 1120 }, data: { label: '✅ Checklist Digital:\nInspector marca items\nen tablet/celular:\n☐ Presentación\n☐ Tour\n☐ Contacto gerencia' }, className: 'node-digital-hybrid' },

    { id: 'onb_eval_auto', type: 'default', position: { x: 500, y: 1290 }, data: { label: '📊 Evaluaciones Auto:\nDía 5 → push al inspector\nDía 10 → push al inspector\n4 dimensiones con\nformulario digital\n(antes: papel/verbal)' }, className: 'node-digital-hybrid' },

    { id: 'onb_uniforme', type: 'default', position: { x: 680, y: 1290 }, data: { label: '👕 Uniforme Digital:\nDía 3/5 → Notif auto\nInspector entrega\n→ Firma digital + foto\n→ $30 auto-descontado\n  del primer cheque' }, className: 'node-digital-hybrid' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 5: PONCHADO GPS AUTOMÁTICO
    // ═══════════════════════════════════════════════════════
    { id: 'section_ponchado', type: 'default', position: { x: 900, y: 150 }, data: { label: '📍 PONCHADO GPS\nAUTOMÁTICO' }, className: 'node-digital-section' },

    { id: 'punch_geofence', type: 'default', position: { x: 900, y: 290 }, data: { label: '🌐 Geofencing:\nApp detecta cuando\nentra/sale del radio\ndel hotel automáticamente\n→ Propone ponchado\ncon un toque' }, className: 'node-digital-auto' },

    { id: 'punch_gps_verify', type: 'default', position: { x: 900, y: 460 }, data: { label: '📍 Verificación GPS\nAutomática:\n• Ubicación dentro\n  del radio del hotel\n• Si no coincide:\n  BLOQUEO + alerta' }, className: 'node-digital-rules' },

    { id: 'punch_fingerprint', type: 'default', position: { x: 1100, y: 460 }, data: { label: '👆 Huella Digital\n(método primario)\nBackup: manual con\naprobación supervisor\nvía app' }, className: 'node-digital-hybrid' },

    { id: 'punch_forgotten', type: 'default', position: { x: 900, y: 630 }, data: { label: '🔔 Olvido de Salida:\nPush auto 30 min\ndespués de hora\nestimada de salida\n"¿Olvidaste ponchar?"' }, className: 'node-digital-notification' },

    { id: 'punch_validation', type: 'default', position: { x: 1100, y: 630 }, data: { label: '⚙️ Validación Auto:\n>12h sin break?\n→ Requiere aprobación\n  supervisor (en app)\nHoras anómalas\n→ Alerta contabilidad' }, className: 'node-digital-rules' },

    // ELIMINADOS
    { id: 'punch_eliminado1', type: 'default', position: { x: 1100, y: 290 }, data: { label: '❌ Ponchado solo\npor huella sin GPS\n→ MEJORADO con\n  geofencing' }, className: 'node-digital-eliminated' },
    { id: 'punch_eliminado2', type: 'default', position: { x: 1280, y: 290 }, data: { label: '❌ Recordar hora\nde salida vía\nWhatsApp\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 6: NÓMINA Y PAGO AUTOMATIZADO
    // ═══════════════════════════════════════════════════════
    { id: 'section_nomina', type: 'default', position: { x: 900, y: 820 }, data: { label: '💰 NÓMINA\nAUTOMATIZADA' }, className: 'node-digital-section' },

    { id: 'nom_calculo', type: 'default', position: { x: 900, y: 960 }, data: { label: '⚙️ Cálculo Automático:\nHoras × Rate\n- Deducciones auto\n  (tax, uniforme, 16%)\n+ M Lav si aplica\n= Neto a depositar\n📊 Visible en app' }, className: 'node-digital-auto' },

    { id: 'nom_mlav', type: 'default', position: { x: 1120, y: 960 }, data: { label: '🏨 M Lav Digital:\nEmpleado sube cuartos\n→ Supervisor valida\n  en app (antes: papel)\n→ Auto-cálculo\n  cuartos × rate' }, className: 'node-digital-hybrid' },

    { id: 'nom_desfase', type: 'default', position: { x: 900, y: 1130 }, data: { label: '📅 Ciclo de Pago:\nTrabaja Dom-Sáb\nDeadline Mié 11:59PM\n→ Auto-procesa Jueves\n→ Deposito VIE 5AM\n(antes: Mónica manual)' }, className: 'node-digital-auto' },

    { id: 'nom_notif_pago', type: 'default', position: { x: 1120, y: 1130 }, data: { label: '🔔 Push Automático:\n"Tu pago de $XXX\nha sido depositado"\n+ Desglose completo\nBruto/Deducciones/Neto\n(visible siempre en app)' }, className: 'node-digital-notification' },

    { id: 'nom_config_pago', type: 'default', position: { x: 900, y: 1300 }, data: { label: '💳 Config Pago:\nTransfer ACH o Cheque\n→ Validación $0.01 auto\n→ Status verde automático\ncuando ≥60% + banco OK' }, className: 'node-digital-auto' },

    // ELIMINADO
    { id: 'nom_eliminado', type: 'default', position: { x: 1120, y: 1300 }, data: { label: '❌ Cálculo manual\npor Mónica/Contabilidad\ncada semana\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 7: SOLICITUDES CON WORKFLOW DIGITAL
    // ═══════════════════════════════════════════════════════
    { id: 'section_solicitudes', type: 'default', position: { x: 1350, y: 150 }, data: { label: '📋 SOLICITUDES\nWORKFLOW DIGITAL' }, className: 'node-digital-section' },

    { id: 'sol_menu', type: 'default', position: { x: 1350, y: 290 }, data: { label: '📱 Menú en App:\n9 tipos de solicitud\ncada una con formulario\nespecífico y campos\nobligatorios\n(antes: WhatsApp/llamada)' }, className: 'node-digital-auto' },

    { id: 'sol_tipos', type: 'default', position: { x: 1350, y: 470 }, data: { label: '📋 Tipos:\n• Ajuste de Pago\n• Reubicación\n• Más Horas/Días\n• Discrepancia Pago\n• Compensación Anual\n• Tiempo Libre\n• 40 Horas Off\n• Reembolso 16%\n• Ajuste Contrato' }, className: 'node-digital-auto' },

    { id: 'sol_workflow', type: 'default', position: { x: 1550, y: 470 }, data: { label: '⚙️ Workflow Automático:\nSolicitud → Routing\nauto según tipo:\n• Pago → Contabilidad\n• Reubicación → Reclut.\n• Contrato → Dirección\nSLA: 24-48h respuesta' }, className: 'node-digital-rules' },

    { id: 'sol_tracking', type: 'default', position: { x: 1350, y: 650 }, data: { label: '📊 Tracking en App:\nEstado visible:\n⏳ Pendiente\n👁️ En Revisión\n✅ Aprobada\n❌ Rechazada\n+ Historial completo' }, className: 'node-digital-auto' },

    { id: 'sol_notif', type: 'default', position: { x: 1550, y: 650 }, data: { label: '🔔 Notificaciones:\nCada cambio de estado\n→ Push al colaborador\nSLA vencido\n→ Escalación automática\n  al siguiente nivel' }, className: 'node-digital-notification' },

    // ELIMINADO
    { id: 'sol_eliminado', type: 'default', position: { x: 1550, y: 290 }, data: { label: '❌ Solicitudes vía\nWhatsApp / llamada\nsin tracking\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 8: NO-SHOW DETECCIÓN AUTOMÁTICA
    // ═══════════════════════════════════════════════════════
    { id: 'section_noshow', type: 'default', position: { x: 50, y: 1700 }, data: { label: '🚨 NO-SHOW\nDETECCIÓN AUTO' }, className: 'node-digital-section' },

    { id: 'ns_detect', type: 'default', position: { x: 50, y: 1840 }, data: { label: '⏰ Auto-Detección:\n8:30 AM sin ponchado\n→ Sistema marca\n  "posible no-show"\n  INMEDIATAMENTE\n(antes: hotel llamaba)' }, className: 'node-digital-auto' },

    { id: 'ns_escalacion', type: 'default', position: { x: 50, y: 2020 }, data: { label: '📱 Escalación Auto:\n8:30 → Push al colab.\n8:45 → SMS al colab.\n9:00 → Alerta reclutadora\n9:15 → Activar reemplazo\n(antes: 3 llamadas manuales)' }, className: 'node-digital-notification' },

    { id: 'ns_responde', type: 'default', position: { x: 250, y: 2020 }, data: { label: '📱 Colaborador\nresponde en app:\n"Estoy en camino"\n"Estoy enfermo"\n"No puedo ir"\n→ Routing automático' }, className: 'node-digital-auto' },

    { id: 'ns_justificado', type: 'default', position: { x: 250, y: 2200 }, data: { label: '✅ Justificado:\nSistema registra\nrazón + evidencia\n(foto nota médica,\netc.) → Sin strike' }, className: 'node-digital-hybrid' },

    { id: 'ns_strikes', type: 'default', position: { x: 50, y: 2200 }, data: { label: '⚙️ 3 Strikes Auto:\n1° → Warning + registro\n2° → Última advertencia\n     + junta con Cecilia\n3° → BL temporal auto\n     (permanente=Dirección)' }, className: 'node-digital-rules' },

    { id: 'ns_patron', type: 'default', position: { x: 50, y: 2380 }, data: { label: '🔍 Detección Patrones:\nSistema analiza:\n"¿Siempre lunes?"\n"¿Después de pago?"\n→ Alerta especial\n  a reclutadora' }, className: 'node-digital-rules' },

    // ELIMINADO
    { id: 'ns_eliminado', type: 'default', position: { x: 250, y: 1840 }, data: { label: '❌ Detección por\nllamada del hotel\n+ 3 llamadas manuales\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 9: VACACIONES TIEMPO REAL
    // ═══════════════════════════════════════════════════════
    { id: 'section_vacaciones', type: 'default', position: { x: 450, y: 1700 }, data: { label: '🌴 VACACIONES\nTIEMPO REAL' }, className: 'node-digital-section' },

    { id: 'vac_contador', type: 'default', position: { x: 450, y: 1840 }, data: { label: '📊 Contador Visible\nen App siempre:\n"Llevas 38 de 52\nsemanas continuas"\n"Te faltan 14 semanas"\n(antes: preguntar a RRHH)' }, className: 'node-digital-auto' },

    { id: 'vac_calculo', type: 'default', position: { x: 450, y: 2020 }, data: { label: '⚙️ Cálculo Auto:\nPromedio horas en\n52 semanas × tasa\n= Monto vacaciones\nVisible: "Tendrás\napróx $XXX"' }, className: 'node-digital-rules' },

    { id: 'vac_freeze', type: 'default', position: { x: 650, y: 2020 }, data: { label: '❄️ Freeze Automático:\nLicencia médica/maternidad\n→ Contador se CONGELA\nautomáticamente\n→ Retoma al volver\n(antes: cálculo manual)' }, className: 'node-digital-auto' },

    { id: 'vac_solicitar', type: 'default', position: { x: 450, y: 2200 }, data: { label: '📱 Solicitar en App:\nFormulario digital\n→ Auto-valida 52 sem\n→ Calcula monto\n→ Envía a Irene/Dir.\n  para aprobación' }, className: 'node-digital-hybrid' },

    { id: 'vac_aprobacion', type: 'default', position: { x: 650, y: 2200 }, data: { label: '🔑 Irene/Dirección\naprueba con un click\nen su dashboard\n→ Auto-programa pago\n→ Notifica empleado\n(TODOS requieren aprobación)' }, className: 'node-digital-human' },

    // ELIMINADO
    { id: 'vac_eliminado', type: 'default', position: { x: 650, y: 1840 }, data: { label: '❌ Cálculo manual\nde vacaciones\n+ preguntar cuántas\nsemanas lleva\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 10: 16% FISCAL AUTOMÁTICO
    // ═══════════════════════════════════════════════════════
    { id: 'section_16pct', type: 'default', position: { x: 850, y: 1700 }, data: { label: '💸 RETENCIÓN 16%\nAUTOMÁTICA' }, className: 'node-digital-section' },

    { id: 'pct_auto_aplica', type: 'default', position: { x: 850, y: 1840 }, data: { label: '⚙️ Auto-Aplicado:\n1099 sin Tax ID\n→ 16% retenido\nautomáticamente\ncada semana\n(antes: Mónica calculaba)' }, className: 'node-digital-auto' },

    { id: 'pct_alertas', type: 'default', position: { x: 850, y: 2020 }, data: { label: '🔔 Alertas Fiscales\nProgramadas:\n🟡 60 días antes cierre\n🟠 30 días\n🔴 15 días\n→ Push + SMS + Email\n  al colaborador' }, className: 'node-digital-notification' },

    { id: 'pct_entrega', type: 'default', position: { x: 850, y: 2200 }, data: { label: '✅ Entrega Tax ID\nen App (foto OCR)\n→ Verifica formato auto\n→ Reembolso 16%\n  auto-calculado\n→ Dirección aprueba' }, className: 'node-digital-hybrid' },

    { id: 'pct_pierde', type: 'default', position: { x: 1050, y: 2200 }, data: { label: '❌ 31 Dic sin Tax ID:\n→ 1099 auto-generado\n  en Enero\n→ Pierde 16%\n→ Notificación final\n→ Su responsabilidad' }, className: 'node-digital-rules' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 11: CAMBIO CUENTA BANCARIA DIGITAL
    // ═══════════════════════════════════════════════════════
    { id: 'section_banco', type: 'default', position: { x: 1350, y: 820 }, data: { label: '🏦 CAMBIO CUENTA\nBANCARIA DIGITAL' }, className: 'node-digital-section' },

    { id: 'banco_formal', type: 'default', position: { x: 1350, y: 960 }, data: { label: '📱 Proceso Formal\nen App:\n• Solicitud con razón\n• Nuevos datos bancarios\n• Verificación identidad\n  (selfie + ID match)' }, className: 'node-digital-auto' },

    { id: 'banco_dir_aprueba', type: 'default', position: { x: 1350, y: 1130 }, data: { label: '🔐 SOLO Dirección\naprueba con click\nen dashboard\n❌ Contabilidad NO\n❌ Empleado NO\n❌ Inspector NO' }, className: 'node-digital-human' },

    { id: 'banco_validacion', type: 'default', position: { x: 1350, y: 1300 }, data: { label: '✅ Aprobado:\n→ Auto $0.01 validación\n→ Auditoría completa\n  (quién, cuándo, desde\n  dónde, IP, dispositivo)\n→ Notifica al empleado' }, className: 'node-digital-auto' },

    // ELIMINADO
    { id: 'banco_eliminado', type: 'default', position: { x: 1550, y: 960 }, data: { label: '❌ Cambio de cuenta\nvía ticket informal\n/ WhatsApp\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 12: INJURY REPORT DIGITAL
    // ═══════════════════════════════════════════════════════
    { id: 'section_injury', type: 'default', position: { x: 1200, y: 1700 }, data: { label: '🚑 INJURY REPORT\nDIGITAL' }, className: 'node-digital-section' },

    { id: 'inj_form', type: 'default', position: { x: 1200, y: 1840 }, data: { label: '📱 Reporte en App:\n• Formulario guiado\n• Cámara integrada\n  (fotos evidencia)\n• GPS auto-capturado\n• Timestamp auto' }, className: 'node-digital-auto' },

    { id: 'inj_firma_auto', type: 'default', position: { x: 1200, y: 2020 }, data: { label: '✍️ Firma Digital\nen pantalla +\nDatos automáticos:\n• Horas trabajadas hoy\n• Parte cuerpo (selector)\n• Descripción guiada' }, className: 'node-digital-hybrid' },

    { id: 'inj_workcomp', type: 'default', position: { x: 1200, y: 2200 }, data: { label: '🏥 Workers Comp:\nAuto-iniciado\n→ Formularios pre-llenados\n→ Notifica a Admin Orange\n→ Freeze vacaciones auto\n(antes: papel + fax)' }, className: 'node-digital-auto' },

    // ELIMINADO
    { id: 'inj_eliminado', type: 'default', position: { x: 1400, y: 1840 }, data: { label: '❌ Reporte en papel\n+ llamada telefónica\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 13: RETENCIÓN INTELIGENTE
    // ═══════════════════════════════════════════════════════
    { id: 'section_retencion', type: 'default', position: { x: 450, y: 2500 }, data: { label: '🔄 RETENCIÓN\nINTELIGENTE' }, className: 'node-digital-section' },

    { id: 'ret_auto_suggest', type: 'default', position: { x: 450, y: 2640 }, data: { label: '⚙️ Sistema Auto-Sugiere\nsiguiente hotel cuando\nasignación termina:\n• Por proximidad GPS\n• Por habilidades\n• Por rating anterior\n(antes: reclutadora llamaba)' }, className: 'node-digital-rules' },

    { id: 'ret_notif', type: 'default', position: { x: 650, y: 2640 }, data: { label: '🔔 Notificación:\n"Tu asignación en\nHotel [X] termina\nel [fecha]. Tenemos\nopciones cerca de ti"\n→ Ver / Rechazar' }, className: 'node-digital-notification' },

    { id: 'ret_acepta', type: 'default', position: { x: 450, y: 2810 }, data: { label: '✅ Acepta nueva\nasignación en app\n→ Transición sin gaps\n→ Meta: >72h retención\n  continua (KPI: >85%)' }, className: 'node-digital-auto' },

    { id: 'ret_inactivo', type: 'default', position: { x: 650, y: 2810 }, data: { label: '⚪ Sin match:\nEstado INACTIVO auto\n→ Sistema sigue buscando\n→ Alerta semanal\n→ Reclutadora monitorea\n  en dashboard' }, className: 'node-digital-rules' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 14: MÁQUINA DE ESTADOS AUTOMÁTICA
    // ═══════════════════════════════════════════════════════
    { id: 'section_estados', type: 'default', position: { x: 750, y: 2950 }, data: { label: '🔀 MÁQUINA DE\nESTADOS AUTO' }, className: 'node-digital-section' },

    { id: 'est_machine', type: 'default', position: { x: 750, y: 3090 }, data: { label: '⚙️ State Machine:\nTransiciones automáticas\ncon notificaciones a\ncada rol afectado\n(antes: cambios informales)' }, className: 'node-digital-rules' },

    { id: 'est_activo', type: 'default', position: { x: 550, y: 3240 }, data: { label: '🟢 ACTIVO\nCon asignación\n→ Ponchado habilitado\n→ Nómina activa' }, className: 'node-digital-auto' },
    { id: 'est_inactivo', type: 'default', position: { x: 750, y: 3240 }, data: { label: '⚪ INACTIVO\nSin asignación\n→ Retención activa\n→ Sin ponchado' }, className: 'node-digital-notification' },
    { id: 'est_suspendido', type: 'default', position: { x: 950, y: 3240 }, data: { label: '🟡 SUSPENDIDO\nInvestigación/Licencia\n→ Todo congelado\n→ Freeze vacaciones' }, className: 'node-digital-notification' },

    { id: 'est_terminado', type: 'default', position: { x: 750, y: 3400 }, data: { label: '🔴 TERMINADO\nSalida/Despido\n→ Auto-desactiva Paychex\n→ Notif recoger uniforme\n→ Cierra acceso app' }, className: 'node-digital-rules' },
    { id: 'est_bl_hotel', type: 'default', position: { x: 550, y: 3400 }, data: { label: '🚫 BL Hotel\n(puede otros hoteles)\n→ Auto-excluye de\n  matching ese hotel' }, className: 'node-digital-rules' },
    { id: 'est_bl_global', type: 'default', position: { x: 950, y: 3400 }, data: { label: '🚫 BL GLOBAL\n(aprueba Dirección)\n→ Cierra TODO acceso\n→ No puede volver' }, className: 'node-digital-human' },

    // ── FIN ──
    { id: 'end', type: 'output', position: { x: 750, y: 3560 }, data: { label: '⚡ Ciclo Digital Completo\nColaborador Orange\nNivel 2-3: Operativa\n+ Automatización' }, className: 'node-digital-section' },
  ],

  edges: [
    // ── Inicio a secciones principales ──
    { id: 'e_s1', source: 'start', target: 'section_registro' },
    { id: 'e_s2', source: 'start', target: 'section_matching' },
    { id: 'e_s3', source: 'start', target: 'section_ponchado' },
    { id: 'e_s4', source: 'start', target: 'section_solicitudes' },

    // ══ 1. Auto-Registro Digital ══
    { id: 'e_r1', source: 'section_registro', target: 'reg_multicanal' },
    { id: 'e_r2', source: 'reg_multicanal', target: 'reg_descarga', animated: true },
    { id: 'e_r3', source: 'reg_descarga', target: 'reg_form_validado' },
    { id: 'e_r3b', source: 'reg_form_validado', target: 'reg_ocr', style: { strokeDasharray: '5,5' }, label: 'OCR docs' },
    { id: 'e_r4', source: 'reg_form_validado', target: 'reg_blacklist', animated: true },
    { id: 'e_r5', source: 'reg_blacklist', target: 'reg_blacklisted', label: 'En BL', style: { stroke: '#c62828' } },
    { id: 'e_r6', source: 'reg_blacklist', target: 'reg_pool', label: 'Limpio', animated: true },
    { id: 'e_r7', source: 'reg_pool', target: 'reg_sin_taxid', label: 'Sin Tax ID', style: { stroke: '#f9a825', strokeDasharray: '5,5' } },

    // Registro → Gates
    { id: 'e_r8', source: 'reg_pool', target: 'section_gates' },

    // ══ 2. Gates Automáticos ══
    { id: 'e_g1', source: 'section_gates', target: 'gate_engine', animated: true },
    { id: 'e_g2', source: 'gate_engine', target: 'gate_30_auto' },
    { id: 'e_g3', source: 'gate_engine', target: 'gate_60_auto' },
    { id: 'e_g4', source: 'gate_engine', target: 'gate_100_auto' },
    { id: 'e_g5', source: 'gate_60_auto', target: 'gate_escalacion', label: 'Auto-escala', style: { stroke: '#f9a825' } },
    { id: 'e_g6', source: 'gate_30_auto', target: 'gate_60_auto', label: '→ 60%', style: { strokeDasharray: '5,5' } },
    { id: 'e_g7', source: 'gate_60_auto', target: 'gate_100_auto', label: '→ 100%', style: { strokeDasharray: '5,5' } },

    // ══ 3. Matching Inteligente ══
    { id: 'e_m1', source: 'section_matching', target: 'match_auto', animated: true },
    { id: 'e_m2', source: 'match_auto', target: 'match_notif' },
    { id: 'e_m3', source: 'match_notif', target: 'match_acepta', label: 'Acepta' },
    { id: 'e_m4', source: 'match_notif', target: 'match_rechaza', label: 'Rechaza', style: { stroke: '#c62828' } },
    { id: 'e_m5', source: 'match_rechaza', target: 'reg_pool', label: 'Vuelve al pool', style: { strokeDasharray: '5,5', stroke: '#c62828' } },
    { id: 'e_m6', source: 'match_acepta', target: 'section_onboard', animated: true },

    // Pool → Matching
    { id: 'e_pm1', source: 'reg_pool', target: 'section_matching', label: 'Auto-match', style: { strokeDasharray: '8,4', stroke: '#1565c0' } },

    // ══ 4. Onboarding Híbrido ══
    { id: 'e_o1', source: 'section_onboard', target: 'onb_pre_digital' },
    { id: 'e_o2', source: 'onb_pre_digital', target: 'onb_dia1' },
    { id: 'e_o3', source: 'onb_dia1', target: 'onb_checklist', style: { strokeDasharray: '5,5' } },
    { id: 'e_o4', source: 'onb_dia1', target: 'onb_eval_auto' },
    { id: 'e_o5', source: 'onb_dia1', target: 'onb_uniforme', style: { strokeDasharray: '5,5' } },

    // ══ 5. Ponchado GPS ══
    { id: 'e_p1', source: 'section_ponchado', target: 'punch_geofence', animated: true },
    { id: 'e_p2', source: 'punch_geofence', target: 'punch_gps_verify' },
    { id: 'e_p3', source: 'punch_geofence', target: 'punch_fingerprint', style: { strokeDasharray: '5,5' } },
    { id: 'e_p4', source: 'punch_gps_verify', target: 'punch_forgotten' },
    { id: 'e_p5', source: 'punch_fingerprint', target: 'punch_validation' },
    { id: 'e_p6', source: 'punch_forgotten', target: 'section_nomina', style: { strokeDasharray: '5,5' } },
    { id: 'e_p7', source: 'punch_validation', target: 'section_nomina' },

    // ══ 6. Nómina Automatizada ══
    { id: 'e_n1', source: 'section_nomina', target: 'nom_calculo', animated: true },
    { id: 'e_n2', source: 'nom_calculo', target: 'nom_mlav', label: 'Si M Lav', style: { strokeDasharray: '5,5' } },
    { id: 'e_n3', source: 'nom_calculo', target: 'nom_desfase' },
    { id: 'e_n4', source: 'nom_desfase', target: 'nom_notif_pago', animated: true },
    { id: 'e_n5', source: 'nom_calculo', target: 'nom_config_pago', style: { strokeDasharray: '5,5' } },

    // ══ 7. Solicitudes Workflow ══
    { id: 'e_sol1', source: 'section_solicitudes', target: 'sol_menu' },
    { id: 'e_sol2', source: 'sol_menu', target: 'sol_tipos' },
    { id: 'e_sol3', source: 'sol_tipos', target: 'sol_workflow', animated: true },
    { id: 'e_sol4', source: 'sol_workflow', target: 'sol_tracking' },
    { id: 'e_sol5', source: 'sol_workflow', target: 'sol_notif' },
    { id: 'e_sol6', source: 'sol_tracking', target: 'sol_notif', style: { strokeDasharray: '5,5' } },

    // Nómina → Solicitudes (empleado activo puede solicitar)
    { id: 'e_ns1', source: 'nom_notif_pago', target: 'section_solicitudes', label: 'Si discrepancia', style: { strokeDasharray: '8,4' } },

    // ══ 8. No-Show Detección ══
    { id: 'e_ns_0', source: 'punch_geofence', target: 'section_noshow', label: 'No poncha', style: { stroke: '#c62828', strokeDasharray: '5,5' } },
    { id: 'e_ns_1', source: 'section_noshow', target: 'ns_detect', animated: true },
    { id: 'e_ns_2', source: 'ns_detect', target: 'ns_escalacion' },
    { id: 'e_ns_3', source: 'ns_escalacion', target: 'ns_responde', style: { strokeDasharray: '5,5' } },
    { id: 'e_ns_4', source: 'ns_responde', target: 'ns_justificado', label: 'Justifica' },
    { id: 'e_ns_5', source: 'ns_responde', target: 'ns_strikes', label: 'Injustificado', style: { stroke: '#c62828' } },
    { id: 'e_ns_6', source: 'ns_escalacion', target: 'ns_strikes', label: 'Sin respuesta', style: { stroke: '#c62828' } },
    { id: 'e_ns_7', source: 'ns_strikes', target: 'ns_patron', style: { strokeDasharray: '5,5' } },

    // ══ 9. Vacaciones ══
    { id: 'e_v1', source: 'section_vacaciones', target: 'vac_contador', animated: true },
    { id: 'e_v2', source: 'vac_contador', target: 'vac_calculo' },
    { id: 'e_v3', source: 'vac_calculo', target: 'vac_freeze', style: { strokeDasharray: '5,5' } },
    { id: 'e_v4', source: 'vac_calculo', target: 'vac_solicitar' },
    { id: 'e_v5', source: 'vac_solicitar', target: 'vac_aprobacion', animated: true },

    // ══ 10. 16% Fiscal ══
    { id: 'e_16_1', source: 'reg_sin_taxid', target: 'section_16pct', label: 'Detalle', style: { strokeDasharray: '8,4', stroke: '#f9a825' } },
    { id: 'e_16_2', source: 'section_16pct', target: 'pct_auto_aplica', animated: true },
    { id: 'e_16_3', source: 'pct_auto_aplica', target: 'pct_alertas' },
    { id: 'e_16_4', source: 'pct_alertas', target: 'pct_entrega', label: 'Entrega' },
    { id: 'e_16_5', source: 'pct_alertas', target: 'pct_pierde', label: 'No entrega', style: { stroke: '#c62828' } },

    // ══ 11. Cambio Cuenta Bancaria ══
    { id: 'e_bk1', source: 'section_banco', target: 'banco_formal' },
    { id: 'e_bk2', source: 'banco_formal', target: 'banco_dir_aprueba', animated: true },
    { id: 'e_bk3', source: 'banco_dir_aprueba', target: 'banco_validacion' },

    // Solicitudes → Banco (uno de los tipos)
    { id: 'e_sol_bk', source: 'sol_tipos', target: 'section_banco', label: 'Cambio cuenta', style: { strokeDasharray: '8,4' } },

    // ══ 12. Injury Report ══
    { id: 'e_inj0', source: 'punch_geofence', target: 'section_injury', label: 'Accidente', style: { strokeDasharray: '5,5', stroke: '#c62828' } },
    { id: 'e_inj1', source: 'section_injury', target: 'inj_form' },
    { id: 'e_inj2', source: 'inj_form', target: 'inj_firma_auto' },
    { id: 'e_inj3', source: 'inj_firma_auto', target: 'inj_workcomp', animated: true },

    // ══ 13. Retención Inteligente ══
    { id: 'e_rt0', source: 'nom_desfase', target: 'section_retencion', label: 'Termina asignación', style: { strokeDasharray: '8,4' } },
    { id: 'e_rt1', source: 'section_retencion', target: 'ret_auto_suggest', animated: true },
    { id: 'e_rt2', source: 'ret_auto_suggest', target: 'ret_notif' },
    { id: 'e_rt3', source: 'ret_notif', target: 'ret_acepta', label: 'Acepta' },
    { id: 'e_rt4', source: 'ret_notif', target: 'ret_inactivo', label: 'No hay match' },
    { id: 'e_rt5', source: 'ret_acepta', target: 'section_ponchado', label: 'Nuevo hotel', style: { strokeDasharray: '8,4', stroke: '#1565c0' } },

    // Vacaciones link
    { id: 'e_vac_link', source: 'nom_notif_pago', target: 'section_vacaciones', label: 'Ver vacaciones', style: { strokeDasharray: '8,4' } },

    // ══ 14. Máquina de Estados ══
    { id: 'e_est0', source: 'section_estados', target: 'est_machine', animated: true },
    { id: 'e_est1', source: 'est_machine', target: 'est_activo' },
    { id: 'e_est2', source: 'est_machine', target: 'est_inactivo' },
    { id: 'e_est3', source: 'est_machine', target: 'est_suspendido' },
    { id: 'e_est4', source: 'est_activo', target: 'est_terminado', label: 'Salida', style: { stroke: '#c62828', strokeDasharray: '5,5' } },
    { id: 'e_est5', source: 'est_activo', target: 'est_bl_hotel', label: 'BL hotel', style: { stroke: '#c62828', strokeDasharray: '5,5' } },
    { id: 'e_est6', source: 'est_suspendido', target: 'est_activo', label: 'Regresa', style: { strokeDasharray: '5,5' } },
    { id: 'e_est7', source: 'est_suspendido', target: 'est_terminado', label: 'No regresa', style: { stroke: '#c62828' } },
    { id: 'e_est8', source: 'est_inactivo', target: 'est_activo', label: 'Reasignado', style: { strokeDasharray: '5,5' } },
    { id: 'e_est9', source: 'ns_strikes', target: 'est_bl_global', label: '3er strike → BL', style: { stroke: '#c62828' } },
    { id: 'e_est10', source: 'est_bl_hotel', target: 'est_activo', label: 'Otro hotel', style: { strokeDasharray: '8,4' } },
    { id: 'e_est11', source: 'ret_inactivo', target: 'est_inactivo', style: { strokeDasharray: '5,5' } },
    { id: 'e_est12', source: 'inj_workcomp', target: 'est_suspendido', label: 'Licencia médica', style: { strokeDasharray: '8,4' } },

    // ── Fin ──
    { id: 'e_end1', source: 'est_terminado', target: 'end' },
    { id: 'e_end2', source: 'est_bl_global', target: 'end', style: { stroke: '#c62828' } },
  ]
}

export default colaboradorDigitalFlow
