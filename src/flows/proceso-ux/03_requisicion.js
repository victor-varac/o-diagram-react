// ═══════════════════════════════════════════════════════════════════════
// USER EXPERIENCE: RECLUTADORA / REQUISICIÓN
// Pantalla por pantalla: todo lo que ve y hace la reclutadora (Cecy/Candy)
// Basado en: Rol flow (9 secciones) + Digital flow (9 secciones)
// Traducido a experiencia de usuario completa
// ═══════════════════════════════════════════════════════════════════════
//
// LEYENDA DE NODOS UX (clases CSS):
//   node-ux-section  → Headers de sección (teal oscuro)
//   node-ux-screen   → Pantalla/Vista completa (teal)
//   node-ux-form     → Formulario con campos (indigo)
//   node-ux-action   → Acción del usuario: tap, swipe, click (verde)
//   node-ux-feedback → Resultado/notificación/mensaje al usuario (ámbar)
//   node-ux-decision → Punto de decisión del usuario (rosa)
//   node-ux-system   → Acción en background del sistema (gris)
//
// SECCIONES (13):
//   1.  Login y Acceso Reclutadora
//   2.  Dashboard Reclutadora (KPIs + Pipeline)
//   3.  Captación Multi-Canal (Canales + ROI)
//   4.  Entrevista y Filtro (Scoring + Checklist por Posición)
//   5.  Recopilación de Datos (Form Candidato + Docs)
//   6.  Pool de Candidatos (Disponibles + Nuevos + Filtros)
//   7.  Recepción de Requisición (Lista + Prioridad + Serial)
//   8.  Costos y Contratos (Bill/Pay Rate + Margen)
//   9.  Auto-Matching (Sugerencias + Perfil Card)
//  10.  Asignación y Notificación (Contactar + Confirmar + Tipo)
//  11.  Onboarding Digital (Bienvenida + Instrucciones + Beneficios)
//  12.  Seguimiento Día 1 (GPS + Show/No-Show + Foto ID)
//  13.  Retención y Métricas (Re-Match + KPIs + Alertas)
//
// ═══════════════════════════════════════════════════════════════════════

const requisicionUXFlow = {
  nodes: [
    // ── INICIO ──
    { id: 'start', type: 'input', position: { x: 500, y: 0 }, data: { label: '📋 Reclutadora UX\n(Cecy / Candy)\nPantalla por Pantalla\n13 Secciones' }, className: 'node-ux-section' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 1: LOGIN Y ACCESO RECLUTADORA
    // ═══════════════════════════════════════════════════════
    { id: 's1_header', type: 'default', position: { x: 50, y: 150 }, data: { label: '🔐 1. LOGIN\nY ACCESO' }, className: 'node-ux-section' },

    { id: 's1_login', type: 'default', position: { x: -100, y: 310 }, data: { label: '🔐 Pantalla Login:\n• Campo Email*\n• Campo Contraseña*\n• [Iniciar Sesión] botón\n• Logo Orange 🍊\n• Rol: Reclutadora\n  (Cecy o Candy)' }, className: 'node-ux-form' },

    { id: 's1_auth_check', type: 'default', position: { x: 70, y: 310 }, data: { label: '⚙️ Sistema verifica:\n→ Credenciales válidas?\n→ Si sesión activa\n  → skip login\n→ Rol = reclutadora\n  → menú específico' }, className: 'node-ux-system' },

    { id: 's1_error', type: 'default', position: { x: 240, y: 310 }, data: { label: '❌ Error Login:\n"Credenciales inválidas"\nSnackbar rojo\n→ Campos se mantienen\n→ Retry disponible' }, className: 'node-ux-feedback' },

    { id: 's1_layout', type: 'default', position: { x: 70, y: 500 }, data: { label: '📱 Layout Reclutadora:\n━━━━━━━━━━━━━\nAppBar superior:\n• 🍊 Logo Orange\n• 🔔 Notificaciones\n• 👤 Mi Perfil\nMenú lateral:\n/ Dashboard\n/captacion\n/candidatos (pool)\n/requisiciones\n/asignaciones\n/metricas' }, className: 'node-ux-screen' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 2: DASHBOARD RECLUTADORA
    // ═══════════════════════════════════════════════════════
    { id: 's2_header', type: 'default', position: { x: 450, y: 150 }, data: { label: '📊 2. DASHBOARD\nRECLUTADORA' }, className: 'node-ux-section' },

    { id: 's2_kpis', type: 'default', position: { x: 400, y: 310 }, data: { label: '📊 6 KPI Cards:\n━━━━━━━━━━━━━\n📋 Req. Abiertas: 5\n👥 Pool Disponible: 42\n📍 Asignaciones Hoy: 3\n❌ No-Shows (7d): 2\n🔄 Retención 1er Mes: 78%\n⏱️ Tiempo Prom: 18h\nCada card: icono + valor\n+ trend arrow ↑↓' }, className: 'node-ux-screen' },

    { id: 's2_pipeline', type: 'default', position: { x: 620, y: 310 }, data: { label: '📈 Pipeline Visual:\nKanban mini horizontal:\n━━━━━━━━━━━━━\n🟡 Nuevos: 8\n🔵 Filtrados: 15\n🟢 En Pool: 42\n📌 Asignados: 12\n✅ Activos: 87\n→ Click card =\n  navega a sección' }, className: 'node-ux-screen' },

    { id: 's2_urgentes', type: 'default', position: { x: 400, y: 510 }, data: { label: '🔴 Requisiciones Urgentes:\nCards rojo pulsante:\n• Hotel Marriott - HK\n  🔴 <24h - URGENTE\n• Hotel Hilton - HM\n  🟡 72h - Media\n→ Tap = ir a requisición' }, className: 'node-ux-screen' },

    { id: 's2_chart', type: 'default', position: { x: 620, y: 510 }, data: { label: '📉 Gráficas Rápidas:\n• PieChart: candidatos\n  por zona\n• BarChart: requisiciones\n  por hotel (últimos 30d)\n• LineChart: no-shows\n  trend semanal\n→ Hover para detalle' }, className: 'node-ux-screen' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 3: CAPTACIÓN MULTI-CANAL
    // ═══════════════════════════════════════════════════════
    { id: 's3_header', type: 'default', position: { x: 850, y: 150 }, data: { label: '📢 3. CAPTACIÓN\nMULTI-CANAL' }, className: 'node-ux-section' },

    { id: 's3_channels', type: 'default', position: { x: 830, y: 310 }, data: { label: '📱 Gestión de Canales:\n4 cards de canal:\n━━━━━━━━━━━━━\n📱 Facebook Ads\n  Activo | 24 leads/sem\n💬 SMS/WhatsApp\n  Activo | 18 leads/sem\n🤝 Referidos (QR)\n  Activo | 12 leads/sem\n📲 Landing Page\n  Activo | 8 leads/sem\n→ Toggle On/Off cada canal' }, className: 'node-ux-screen' },

    { id: 's3_referral', type: 'default', position: { x: 1060, y: 310 }, data: { label: '🔗 Códigos de Referido:\nPor empleado activo:\n• QR único generado\n• Link compartible\n• Tracking auto:\n  Quién refirió a quién\n• Bonus auto si contrata\n→ [Generar QR] botón' }, className: 'node-ux-screen' },

    { id: 's3_roi', type: 'default', position: { x: 830, y: 510 }, data: { label: '📊 ROI por Canal:\nTabla comparativa:\n Canal | Leads | Hires | Costo\n FB    | 24    | 5     | $200\n SMS   | 18    | 4     | $50\n Ref   | 12    | 8     | $0\n→ Mejor: Referidos\n→ Color: 🟢 ROI alto\n  🔴 ROI bajo' }, className: 'node-ux-screen' },

    { id: 's3_new_lead', type: 'default', position: { x: 1060, y: 510 }, data: { label: '🔔 Nuevo Lead:\nNotificación push:\n"Nuevo candidato desde\nFacebook: María García\n📍 Zona Norte"\n→ Tap = ver perfil\n→ Sistema auto-registra\n  fuente del candidato' }, className: 'node-ux-feedback' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 4: ENTREVISTA Y FILTRO
    // Auto-scoring, checklist por posición, alertas rojas
    // ═══════════════════════════════════════════════════════
    { id: 's4_header', type: 'default', position: { x: 50, y: 700 }, data: { label: '🎙️ 4. ENTREVISTA\nY FILTRO' }, className: 'node-ux-section' },

    { id: 's4_scoring', type: 'default', position: { x: -100, y: 870 }, data: { label: '🎯 Auto-Scoring Vista:\nPerfil del candidato:\n━━━━━━━━━━━━━\nScore: 72/100 🟢\n━━━━━━━━━━━━━\n📍 Zona: 15 min ✅ 25pts\n🏨 Exp: 2 años ✅ 25pts\n📄 Docs: parcial ⚠️ 12pts\n📅 Disp: completa ✅ 10pts\n→ Barra de progreso\n  color por nivel' }, className: 'node-ux-screen' },

    { id: 's4_decision_auto', type: 'default', position: { x: 120, y: 870 }, data: { label: '❓ Decisión Automática:\n━━━━━━━━━━━━━\nScore ≥70:\n→ 🟢 "Directo al Pool"\nScore 40-69:\n→ 🟡 "Requiere Entrevista"\nScore <40:\n→ 🔴 "Rechazado"\n━━━━━━━━━━━━━\nChip color visible' }, className: 'node-ux-decision' },

    { id: 's4_checklist', type: 'default', position: { x: -100, y: 1080 }, data: { label: '📋 Checklist por Posición:\nSelect: HK | HM | LY | MT\n━━━━━ HK (Housekeeper) ━━━━━\n☐ Hab. salida vs ocupadas\n☐ Cuántas por turno\n☐ Experiencia con duvet\n☐ Trabajo físico OK\n━━━━━━━━━━━━━\n→ Tap checkbox = marcado\n→ Guía preguntas debajo' }, className: 'node-ux-form' },

    { id: 's4_alertas_rojas', type: 'default', position: { x: 120, y: 1080 }, data: { label: '🚩 Alertas Rojas:\nBanner rojo si detecta:\n━━━━━━━━━━━━━\n⚠️ "Me muevo a donde sea"\n  → No llegan por distancia\n⚠️ Molesta/apurada\n  → Falta de compromiso\n⚠️ No recuerda hotel\n  → Sin experiencia real\n⚠️ Respuestas vagas\n  → "a veces", "tal vez"' }, className: 'node-ux-feedback' },

    { id: 's4_result_apto', type: 'default', position: { x: -100, y: 1290 }, data: { label: '✅ Candidato Apto:\nSnackbar verde:\n"Candidato aprobado\n→ Pasa a Recopilación\n  de Datos"\n→ Botón [Continuar →]' }, className: 'node-ux-feedback' },

    { id: 's4_result_no_apto', type: 'default', position: { x: 120, y: 1290 }, data: { label: '❌ No Apto:\nMensaje plantilla:\n"Gracias por tu tiempo,\nvoy a revisar si tenemos\nvacante, te aviso"\n→ [Guardar en Espera]\n→ [Descartar]' }, className: 'node-ux-feedback' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 5: RECOPILACIÓN DE DATOS
    // Form candidato, documentos, 16% alert
    // ═══════════════════════════════════════════════════════
    { id: 's5_header', type: 'default', position: { x: 50, y: 1460 }, data: { label: '📝 5. RECOPILACIÓN\nDE DATOS' }, className: 'node-ux-section' },

    { id: 's5_form', type: 'default', position: { x: -100, y: 1630 }, data: { label: '📝 Form Candidato:\n• Nombre completo*\n• Teléfono*\n• Zona domicilio* (GPS)\n• Experiencia hotel*\n• Posición deseada*\n  (select: HK/HM/LY/MT)\n• Nivel inglés\n  (slider 0-100%)\n• Medio transporte\n  (select: auto/bus/etc)\n→ [Siguiente: Docs →]' }, className: 'node-ux-form' },

    { id: 's5_docs', type: 'default', position: { x: 120, y: 1630 }, data: { label: '📄 Upload Documentos:\n4 slots de documento:\n━━━━━━━━━━━━━\n🆔 Tax ID / SSN\n  [📷 Subir foto]\n📋 Permiso de Trabajo\n  [📷 Subir foto]\n🛂 Pasaporte\n  [📷 Subir foto]\n🪪 Cédula Consular\n  [📷 Subir foto]\n→ OCR auto-lee datos\n→ ✅/⚠️ status cada doc' }, className: 'node-ux-form' },

    { id: 's5_alert_16', type: 'default', position: { x: 120, y: 1870 }, data: { label: '⚠️ Alerta 16%:\nBanner amarillo:\n"Sin Tax ID ni SSN\n→ Se aplicará retención\n  del 16% de impuestos"\n→ [Entendido]\n→ Candidato debe firmar\n  reconocimiento' }, className: 'node-ux-feedback' },

    { id: 's5_save', type: 'default', position: { x: -100, y: 1870 }, data: { label: '👆 Tap [Guardar]:\n→ Validación campos\n  requeridos (*)\n→ ✅ "Candidato registrado\n  en Pool de Disponibles"\n→ Score recalculado\n  con docs completos' }, className: 'node-ux-action' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 6: POOL DE CANDIDATOS
    // Disponibles + Nuevos, filtros avanzados, match score
    // ═══════════════════════════════════════════════════════
    { id: 's6_header', type: 'default', position: { x: 370, y: 700 }, data: { label: '👥 6. POOL DE\nCANDIDATOS' }, className: 'node-ux-section' },

    { id: 's6_tabs', type: 'default', position: { x: 300, y: 870 }, data: { label: '👥 Pool Vista Principal:\n2 tabs superiores:\n━━━━━━━━━━━━━\n🟢 Disponibles (42)\n🆕 Nuevos (15)\n━━━━━━━━━━━━━\nCada candidato = card:\n• Nombre + Score (badge)\n• 📍 Zona + distancia\n• 🏨 Posición deseada\n• 📄 Docs: ✅ o ⚠️\n• 📅 Disponibilidad' }, className: 'node-ux-screen' },

    { id: 's6_filters', type: 'default', position: { x: 530, y: 870 }, data: { label: '🔍 Filtros Avanzados:\n• 🔎 Buscar por nombre\n• 📍 Zona / distancia\n  (slider: ≤15/30/45 min)\n• 🏨 Posición (multi-select)\n• ⭐ Score mínimo (slider)\n• 🗣️ Nivel inglés\n• 📄 Docs completos (toggle)\n• 🚫 Excluir blacklist (auto)\n→ Resultados instantáneos\n  con match % visible' }, className: 'node-ux-action' },

    { id: 's6_card_detail', type: 'default', position: { x: 300, y: 1080 }, data: { label: '👤 Detalle Candidato:\nTap en card → modal:\n━━━━━━━━━━━━━\nScore: 82 🟢\n📍 Zona Norte, 12 min\n🏨 Exp: Marriott 2 años\n📄 Docs: 3/4 completos\n🗣️ Inglés: 60%\n🚗 Auto propio\n📅 Lun-Vie disponible\n━━━━━━━━━━━━━\n[Asignar] [Llamar] [Editar]' }, className: 'node-ux-screen' },

    { id: 's6_blacklist', type: 'default', position: { x: 530, y: 1080 }, data: { label: '🚫 Candidato en Blacklist:\nCard gris tachada:\n"Este candidato está\nen Lista Negra"\n→ Motivo visible\n→ No aparece en\n  búsquedas normales\n→ Solo visible con\n  filtro "Mostrar todos"' }, className: 'node-ux-feedback' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 7: RECEPCIÓN DE REQUISICIÓN
    // Lista, prioridad auto, serial REQ-#
    // ═══════════════════════════════════════════════════════
    { id: 's7_header', type: 'default', position: { x: 370, y: 1310 }, data: { label: '📋 7. RECEPCIÓN DE\nREQUISICIÓN' }, className: 'node-ux-section' },

    { id: 's7_list', type: 'default', position: { x: 300, y: 1480 }, data: { label: '📋 Lista Requisiciones:\nTabla con columnas:\n• Serial (REQ-142)\n• Hotel\n• Posición / Personas\n• Fecha inicio\n• Prioridad (chip color):\n  🟢 Normal (>120h)\n  🟡 Media (72-120h)\n  🔴 Urgente (<72h)\n• Status: Abierta/Cubierta\n→ Sortable por prioridad' }, className: 'node-ux-screen' },

    { id: 's7_new_req', type: 'default', position: { x: 530, y: 1480 }, data: { label: '🔔 Nueva Requisición:\nNotificación push:\n"Hotel Marriott necesita\n2 Housekeepers\nInicio: Mañana 7am"\n🔴 URGENTE (<24h)\n━━━━━━━━━━━━━\nFuente:\n• Portal hotel (auto)\n• Inspector (Chat 4)\n• Manager directo' }, className: 'node-ux-feedback' },

    { id: 's7_detail', type: 'default', position: { x: 300, y: 1690 }, data: { label: '📋 Detalle Requisición:\nTap en fila → vista:\n• REQ-142\n• 🏨 Hotel Marriott DT\n• 🧹 Housekeeper × 2\n• 📅 Inicio: 15 Ene 7:00am\n• ⏰ Prioridad: 🔴 Urgente\n• 💰 Bill Rate: $19.58/hr\n• 📝 Notas del hotel\n→ [Buscar Candidatos]\n→ [Ver Costos]' }, className: 'node-ux-screen' },

    { id: 's7_auto_serial', type: 'default', position: { x: 530, y: 1690 }, data: { label: '⚙️ Auto-generado:\n→ Serial REQ-# secuencial\n→ Prioridad calculada\n  automáticamente por\n  horas hasta inicio\n→ Costos pre-calculados\n  desde contrato activo\n→ Timestamp registro' }, className: 'node-ux-system' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 8: COSTOS Y CONTRATOS
    // Bill/Pay Rate, costo proyectado, margen
    // ═══════════════════════════════════════════════════════
    { id: 's8_header', type: 'default', position: { x: 750, y: 700 }, data: { label: '💰 8. COSTOS\nY CONTRATOS' }, className: 'node-ux-section' },

    { id: 's8_contract', type: 'default', position: { x: 700, y: 870 }, data: { label: '📄 Vista Contrato:\nHotel Marriott Downtown\n━━━━━━━━━━━━━\nContrato: SC-2025-014\nVigencia: Ene-Dic 2025\nStatus: 🟢 Activo\n━━━━━━━━━━━━━\nPosiciones cubiertas:\n• Housekeeper\n• Houseman\n• Laundry' }, className: 'node-ux-screen' },

    { id: 's8_rates', type: 'default', position: { x: 930, y: 870 }, data: { label: '💰 Desglose Tarifas:\n━━━━━ Housekeeper ━━━━━\n🏨→Orange: $19.58/hr\n  (Bill Rate)\nOrange→Emp: $15.00/hr\n  (Pay Rate)\n━━━━━━━━━━━━━\nMargen: $4.58/hr\n= 23.4% del bill rate\n→ Barra visual del margen\n→ 🟢 OK / 🔴 Bajo' }, className: 'node-ux-screen' },

    { id: 's8_projected', type: 'default', position: { x: 700, y: 1080 }, data: { label: '📊 Costo Proyectado:\nReq: 2 HK × 40h/sem\n━━━━━━━━━━━━━\nBill Total: $1,566.40/sem\nPay Total: $1,200.00/sem\nMargen: $366.40/sem\n= 23.4%\n━━━━━━━━━━━━━\nMeta margen: 30-35%\n⚠️ "Margen debajo meta"' }, className: 'node-ux-screen' },

    { id: 's8_margin_alert', type: 'default', position: { x: 930, y: 1080 }, data: { label: '⚠️ Alerta Margen:\nSi margen <25%:\nBanner naranja:\n"Margen de 23.4% está\npor debajo de la meta\nde 30-35%"\n→ [Notificar a Mónica]\n→ [Aprobar de todas\n  formas]' }, className: 'node-ux-feedback' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 9: AUTO-MATCHING
    // Sugerencias ordenadas, candidato perfil, aceptar/rechazar
    // ═══════════════════════════════════════════════════════
    { id: 's9_header', type: 'default', position: { x: 750, y: 1310 }, data: { label: '🎯 9. AUTO-\nMATCHING' }, className: 'node-ux-section' },

    { id: 's9_suggestions', type: 'default', position: { x: 700, y: 1480 }, data: { label: '🎯 Sugerencias Match:\nLista ordenada por score:\n━━━━━━━━━━━━━\n1. María G. - 92% match\n   📍 8 min | 🏨 3 años\n2. Juan R. - 85% match\n   📍 15 min | 🏨 1 año\n3. Ana L. - 78% match\n   📍 22 min | 🏨 6 meses\n━━━━━━━━━━━━━\n→ Match % en badge color\n→ 🟢 >80% | 🟡 60-80%' }, className: 'node-ux-screen' },

    { id: 's9_profile_card', type: 'default', position: { x: 930, y: 1480 }, data: { label: '👤 Perfil Candidato Card:\nTap en sugerencia →\n━━━━━━━━━━━━━\nMaría García López\nScore: 92/100 🟢\n📍 Zona Norte, 8 min\n🏨 Marriott 2019-2022\n🧹 HK - 3 años exp\n🗣️ Inglés: 70%\n📄 Docs: 4/4 ✅\n🚗 Auto propio\n━━━━━━━━━━━━━\n[✅ Asignar] [❌ Pasar]' }, className: 'node-ux-screen' },

    { id: 's9_no_match', type: 'default', position: { x: 700, y: 1690 }, data: { label: '⚠️ Sin Matches:\nSi no hay candidatos:\n"No se encontraron\ncandidatos compatibles\npara esta requisición"\n→ [Ampliar búsqueda]\n  (aumentar distancia)\n→ [Buscar manual]\n→ [Activar captación]' }, className: 'node-ux-feedback' },

    { id: 's9_auto_notify', type: 'default', position: { x: 930, y: 1690 }, data: { label: '⚙️ Notificación Auto:\nAl mejor candidato:\n"Hay trabajo en\nHotel Marriott a 8 min\nde tu zona. ¿Aceptas?"\n→ Push notification\n→ Respuesta en app:\n  ✅ Acepto | ❌ No' }, className: 'node-ux-system' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 10: ASIGNACIÓN Y NOTIFICACIÓN
    // Contactar candidato, acepta/rechaza, tipo, notif hotel
    // ═══════════════════════════════════════════════════════
    { id: 's10_header', type: 'default', position: { x: 50, y: 2060 }, data: { label: '📌 10. ASIGNACIÓN\nY NOTIFICACIÓN' }, className: 'node-ux-section' },

    { id: 's10_contact', type: 'default', position: { x: -100, y: 2230 }, data: { label: '📞 Contactar Candidato:\nOpciones de contacto:\n• 📱 Llamar directo\n• 💬 WhatsApp\n• 🔔 Push en App\n━━━━━━━━━━━━━\n"Hola María, tenemos\nvacante en Marriott\ncomo Housekeeper\ninicio mañana 7am"' }, className: 'node-ux-action' },

    { id: 's10_response', type: 'default', position: { x: 120, y: 2230 }, data: { label: '❓ Respuesta:\n¿Candidato acepta?' }, className: 'node-ux-decision' },

    { id: 's10_accepts', type: 'default', position: { x: -100, y: 2420 }, data: { label: '✅ Acepta Asignación:\nSnackbar verde:\n"María García asignada\na Marriott - HK"\n→ Tipo asignación:\n  📌 Nueva Fija\n  🎙️ Nueva (Entrevista)\n  🔄 Temporal\n  🚨 Reemplazo urgente\n→ Auto: notifica al hotel' }, className: 'node-ux-feedback' },

    { id: 's10_rejects', type: 'default', position: { x: 120, y: 2420 }, data: { label: '❌ Rechaza:\n"Candidato no disponible"\n→ Sistema pasa al\n  siguiente en la lista\n→ Auto-notifica al\n  siguiente candidato\n→ Loop hasta cubrir\n  o agotar lista' }, className: 'node-ux-feedback' },

    { id: 's10_confirm', type: 'default', position: { x: -100, y: 2620 }, data: { label: '📋 Confirmación:\nCard de asignación:\n━━━━━━━━━━━━━\nREQ-142 ✅ Asignada\n👤 María García\n🏨 Marriott Downtown\n🧹 Housekeeper\n📅 15 Ene 2025 - 7:00am\n📌 Nueva Fija\n━━━━━━━━━━━━━\n→ [Enviar Onboarding]' }, className: 'node-ux-screen' },

    { id: 's10_notify_hotel', type: 'default', position: { x: 120, y: 2620 }, data: { label: '⚙️ Notifica Hotel:\nAuto-envío al hotel:\n"Orange Staffing confirma:\nMaría García - HK\nInicio: 15 Ene 7:00am\nTeléfono: (555) 123-4567"\n→ Al inspector también\n→ Visible en portal hotel' }, className: 'node-ux-system' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 11: ONBOARDING DIGITAL
    // Mensaje bienvenida, instrucciones push, beneficios
    // ═══════════════════════════════════════════════════════
    { id: 's11_header', type: 'default', position: { x: 370, y: 2060 }, data: { label: '🍊 11. ONBOARDING\nDIGITAL' }, className: 'node-ux-section' },

    { id: 's11_welcome', type: 'default', position: { x: 300, y: 2230 }, data: { label: '📱 Mensaje Bienvenida:\nPush automático:\n━━━━━━━━━━━━━\n"BIENVENID@ A\nORANGE STAFFING 🍊"\n━━━━━━━━━━━━━\n"Te esperamos mañana\nen Hotel Marriott DT"\nHora: 7:00 AM\nDirección + mapa GPS' }, className: 'node-ux-screen' },

    { id: 's11_instructions', type: 'default', position: { x: 530, y: 2230 }, data: { label: '📋 Instrucciones Push:\nCards en app del candidato:\n━━━━━━━━━━━━━\n👔 Vestimenta:\n  Pantalón negro\n  Camisa negra\n  Calzado cerrado\n🏨 Al llegar:\n  "Vengo de Orange\n  Staffing para [puesto]"\n🕒 TimeSheet OBLIGATORIO\n⚠️ Si no puedes: cancela\n  con anticipación' }, className: 'node-ux-screen' },

    { id: 's11_benefits', type: 'default', position: { x: 300, y: 2440 }, data: { label: '💰 Beneficios Visibles:\nSección en app:\n━━━━━━━━━━━━━\n💵 Pago semanal (sáb)\n👔 Uniforme desde 2da sem\n🏖️ 1 semana vac/año\n✅ Cheque certificado\n📅 5 días trabajo\n  / 2 descanso\n━━━━━━━━━━━━━\n📌 1er día = entrenamiento\n  (sin pago, política hotel)' }, className: 'node-ux-screen' },

    { id: 's11_confirm_attend', type: 'default', position: { x: 530, y: 2440 }, data: { label: '✅ Confirmar Asistencia:\nPush 1 día antes:\n"¿Confirmas asistencia\nmañana a las 7:00am\nen Hotel Marriott?"\n━━━━━━━━━━━━━\n[✅ Confirmo]\n[❌ No puedo]\n→ Si no confirma:\n  alerta a reclutadora' }, className: 'node-ux-action' },

    { id: 's11_regla_16', type: 'default', position: { x: 415, y: 2620 }, data: { label: '⚠️ Aviso 16% (si aplica):\nSi candidato sin Tax ID:\n"Se aplicará retención\ndel 16% de impuestos\nhasta regularizar docs"\n→ Checkbox: "Entendido\ny acepto"' }, className: 'node-ux-feedback' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 12: SEGUIMIENTO DÍA 1
    // GPS confirm, show/no-show, foto ID, reporte diario
    // ═══════════════════════════════════════════════════════
    { id: 's12_header', type: 'default', position: { x: 750, y: 2060 }, data: { label: '📍 12. SEGUIMIENTO\nDÍA 1' }, className: 'node-ux-section' },

    { id: 's12_gps', type: 'default', position: { x: 700, y: 2230 }, data: { label: '📍 GPS Confirma Llegada:\nAuto-detecta:\n"María García llegó a\nHotel Marriott Downtown\na las 6:52 AM"\n→ Status: ✅ LLEGÓ\n→ Badge verde en card\n→ Notifica a reclutadora' }, className: 'node-ux-system' },

    { id: 's12_show_noshow', type: 'default', position: { x: 930, y: 2230 }, data: { label: '❓ ¿Se presentó?\n━━━━━━━━━━━━━\nGPS confirma → ✅ Show\n━━━━━━━━━━━━━\n8:30 sin GPS:\n→ 🔴 No-Show Alert\n→ Notificación push:\n  "María García no ha\n  llegado a Marriott"' }, className: 'node-ux-decision' },

    { id: 's12_show_ok', type: 'default', position: { x: 700, y: 2440 }, data: { label: '✅ Se Presentó:\n→ Inspector sube foto ID\n  desde su app\n→ Card se mueve a\n  "LLEGÓ" automático\n→ Foto visible en\n  perfil del candidato\n→ Asignación confirmada' }, className: 'node-ux-feedback' },

    { id: 's12_noshow', type: 'default', position: { x: 930, y: 2440 }, data: { label: '❌ No-Show:\nCard roja pulsante:\n"NO SE PRESENTÓ"\n→ [Buscar Reemplazo]\n  → Vuelve a matching\n→ [Marcar Strike]\n  → 2 strikes = blacklist\n→ [Contactar candidato]\n→ Alerta a inspector' }, className: 'node-ux-feedback' },

    { id: 's12_report', type: 'default', position: { x: 700, y: 2640 }, data: { label: '📊 Reporte Diario Auto:\nGenerado automáticamente:\n━━━━━━━━━━━━━\n📅 15 Ene 2025\n✅ Ingresos: 3\n❌ No-Shows: 1\n📋 Req cubiertas: 4/5\n🔴 Req pendientes: 1\n━━━━━━━━━━━━━\n→ Enviado a Dashboard\n→ Histórico acumulado' }, className: 'node-ux-screen' },

    { id: 's12_trello_update', type: 'default', position: { x: 930, y: 2640 }, data: { label: '⚙️ Actualización Auto:\n→ Tablero requisiciones:\n  REQ-142 → "CUBIERTA"\n→ Candidato → "Activo"\n→ Métricas actualizadas\n  en tiempo real\n→ Si no-show: req vuelve\n  a "Abierta"' }, className: 'node-ux-system' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 13: RETENCIÓN Y MÉTRICAS
    // Auto-detect temporal, re-match, KPIs, alertas
    // ═══════════════════════════════════════════════════════
    { id: 's13_header', type: 'default', position: { x: 450, y: 2850 }, data: { label: '📈 13. RETENCIÓN\nY MÉTRICAS' }, className: 'node-ux-section' },

    { id: 's13_retention', type: 'default', position: { x: 300, y: 3020 }, data: { label: '🔄 Auto-Detect Temporal:\nSistema detecta:\n"Asignación de María G.\nen Marriott termina\nen 3 días"\n→ [Sugerir Re-Match]\n→ Busca hotel cercano\n  por GPS proximidad\n→ Notifica a reclutadora\n  + empleado' }, className: 'node-ux-screen' },

    { id: 's13_rematch', type: 'default', position: { x: 530, y: 3020 }, data: { label: '🎯 Re-Match Sugerido:\n"Tenemos opciones cerca":\n━━━━━━━━━━━━━\n1. Hilton Garden - HK\n   📍 5 min | $16/hr\n2. Holiday Inn - HK\n   📍 12 min | $15/hr\n━━━━━━━━━━━━━\n→ Push al empleado\n→ [Aceptar] [Rechazar]\n→ Meta: retención >85%' }, className: 'node-ux-screen' },

    { id: 's13_dashboard', type: 'default', position: { x: 300, y: 3230 }, data: { label: '📊 Dashboard Métricas:\nTiempo real, auto-gen:\n━━━━━━━━━━━━━\n✅ Tasa Cumplimiento: 87%\n⏱️ Tiempo Cobertura: 18h\n❌ % No-Shows: 8%\n🔴 % Req <72h: 22%\n🔄 Retención 1er Mes: 78%\n📱 ROI Canal: Ref 🟢\n━━━━━━━━━━━━━\n→ Cada métrica: click\n  = drill-down detalle' }, className: 'node-ux-screen' },

    { id: 's13_alerts', type: 'default', position: { x: 530, y: 3230 }, data: { label: '🔔 Alertas Proactivas:\nCards con urgencia:\n━━━━━━━━━━━━━\n🔴 REQ-145 sin cubrir\n  72h → escalar\n🟡 Pool bajo Zona Sur\n  (<5 candidatos)\n⚠️ Juan R. tiene 2 strikes\n  → próximo = blacklist\n🔄 Retención en riesgo\n  Zona Norte: 65%\n→ Tap = acción directa' }, className: 'node-ux-screen' },

    { id: 's13_charts', type: 'default', position: { x: 300, y: 3440 }, data: { label: '📈 Gráficas Tendencia:\n• LineChart: cumplimiento\n  últimos 3 meses\n• BarChart: no-shows\n  por hotel\n• PieChart: tipos\n  de asignación\n• AreaChart: pool size\n  evolución semanal\n→ Hover = tooltip datos' }, className: 'node-ux-screen' },

    { id: 's13_export', type: 'default', position: { x: 530, y: 3440 }, data: { label: '📤 Exportar Reporte:\nTap [📤 Exportar]:\n━━━━━━━━━━━━━\nFormatos:\n• 📊 Excel (.xlsx)\n• 📄 PDF resumen\n━━━━━━━━━━━━━\nContenido:\n• KPIs del período\n• Requisiciones detalle\n• No-shows\n• Retención\n• ROI canales\n→ metricas_reclutamiento\n  _{fecha}.xlsx' }, className: 'node-ux-action' },

    // ── FIN ──
    { id: 'end', type: 'output', position: { x: 450, y: 3650 }, data: { label: '🏆 Reclutadora UX\nCompleto\n13 Secciones\n~88 Pantallas\n100% Cobertura Proceso' }, className: 'node-ux-section' },
  ],

  edges: [
    // ══════════════════════════════════════════════
    // Inicio → Secciones principales
    // ══════════════════════════════════════════════
    { id: 'e_s1', source: 'start', target: 's1_header' },
    { id: 'e_s2', source: 'start', target: 's2_header' },
    { id: 'e_s3', source: 'start', target: 's3_header' },

    // ══════════════════════════════════════════════
    // 1. LOGIN Y ACCESO
    // ══════════════════════════════════════════════
    { id: 'e_1a', source: 's1_header', target: 's1_login' },
    { id: 'e_1b', source: 's1_header', target: 's1_auth_check' },
    { id: 'e_1c', source: 's1_login', target: 's1_error', label: 'Error', style: { stroke: '#c62828' } },
    { id: 'e_1d', source: 's1_login', target: 's1_layout', label: 'Login OK', style: { stroke: '#2e7d32' } },
    { id: 'e_1e', source: 's1_auth_check', target: 's1_layout', label: 'Sesión activa', style: { strokeDasharray: '5,5' } },

    // Layout → Secciones navegación
    { id: 'e_1_dash', source: 's1_layout', target: 's2_header', label: '/ (default)', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },
    { id: 'e_1_captacion', source: 's1_layout', target: 's3_header', label: '/captacion', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },
    { id: 'e_1_pool', source: 's1_layout', target: 's6_header', label: '/candidatos', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },
    { id: 'e_1_req', source: 's1_layout', target: 's7_header', label: '/requisiciones', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },

    // ══════════════════════════════════════════════
    // 2. DASHBOARD RECLUTADORA
    // ══════════════════════════════════════════════
    { id: 'e_2a', source: 's2_header', target: 's2_kpis' },
    { id: 'e_2b', source: 's2_header', target: 's2_pipeline' },
    { id: 'e_2c', source: 's2_kpis', target: 's2_urgentes' },
    { id: 'e_2d', source: 's2_pipeline', target: 's2_chart' },
    { id: 'e_2e', source: 's2_urgentes', target: 's7_header', label: 'Tap req urgente', style: { strokeDasharray: '8,4', stroke: '#c62828' } },

    // ══════════════════════════════════════════════
    // 3. CAPTACIÓN MULTI-CANAL
    // ══════════════════════════════════════════════
    { id: 'e_3a', source: 's3_header', target: 's3_channels' },
    { id: 'e_3b', source: 's3_header', target: 's3_referral' },
    { id: 'e_3c', source: 's3_channels', target: 's3_roi' },
    { id: 'e_3d', source: 's3_referral', target: 's3_new_lead' },
    { id: 'e_3e', source: 's3_new_lead', target: 's4_header', label: 'Nuevo lead → Filtro', style: { strokeDasharray: '8,4', stroke: '#00695c' } },

    // ══════════════════════════════════════════════
    // 4. ENTREVISTA Y FILTRO
    // ══════════════════════════════════════════════
    { id: 'e_4a', source: 's4_header', target: 's4_scoring' },
    { id: 'e_4b', source: 's4_header', target: 's4_decision_auto' },
    { id: 'e_4c', source: 's4_scoring', target: 's4_checklist', label: 'Score 40-69' },
    { id: 'e_4d', source: 's4_decision_auto', target: 's4_alertas_rojas', label: 'Si alertas', style: { stroke: '#c62828', strokeDasharray: '5,5' } },
    { id: 'e_4e', source: 's4_checklist', target: 's4_result_apto', label: 'Aprobado', style: { stroke: '#2e7d32' } },
    { id: 'e_4f', source: 's4_checklist', target: 's4_result_no_apto', label: 'No apto', style: { stroke: '#c62828' } },
    { id: 'e_4g', source: 's4_decision_auto', target: 's4_result_apto', label: 'Score ≥70', style: { stroke: '#2e7d32', strokeDasharray: '5,5' } },
    { id: 'e_4h', source: 's4_decision_auto', target: 's4_result_no_apto', label: 'Score <40', style: { stroke: '#c62828', strokeDasharray: '5,5' } },

    // ══════════════════════════════════════════════
    // 5. RECOPILACIÓN DE DATOS
    // ══════════════════════════════════════════════
    { id: 'e_5a', source: 's5_header', target: 's5_form' },
    { id: 'e_5b', source: 's5_header', target: 's5_docs' },
    { id: 'e_5c', source: 's5_docs', target: 's5_alert_16', label: 'Sin Tax ID', style: { stroke: '#f57f17' } },
    { id: 'e_5d', source: 's5_form', target: 's5_save', label: 'Tap Guardar' },
    { id: 'e_5e', source: 's5_save', target: 's6_header', label: '→ Al Pool', style: { strokeDasharray: '8,4', stroke: '#2e7d32' } },

    // Apto → Datos
    { id: 'e_4_to_5', source: 's4_result_apto', target: 's5_header', label: 'Continuar', style: { strokeDasharray: '8,4', stroke: '#00695c' } },

    // ══════════════════════════════════════════════
    // 6. POOL DE CANDIDATOS
    // ══════════════════════════════════════════════
    { id: 'e_6a', source: 's6_header', target: 's6_tabs' },
    { id: 'e_6b', source: 's6_header', target: 's6_filters' },
    { id: 'e_6c', source: 's6_tabs', target: 's6_card_detail', label: 'Tap candidato' },
    { id: 'e_6d', source: 's6_filters', target: 's6_blacklist', label: 'Si en lista negra', style: { stroke: '#c62828', strokeDasharray: '5,5' } },
    { id: 'e_6e', source: 's6_card_detail', target: 's9_header', label: '[Asignar]', style: { strokeDasharray: '8,4', stroke: '#00695c' } },

    // ══════════════════════════════════════════════
    // 7. RECEPCIÓN DE REQUISICIÓN
    // ══════════════════════════════════════════════
    { id: 'e_7a', source: 's7_header', target: 's7_list' },
    { id: 'e_7b', source: 's7_header', target: 's7_new_req' },
    { id: 'e_7c', source: 's7_list', target: 's7_detail', label: 'Tap fila' },
    { id: 'e_7d', source: 's7_new_req', target: 's7_auto_serial', style: { strokeDasharray: '5,5' } },
    { id: 'e_7e', source: 's7_detail', target: 's8_header', label: '[Ver Costos]', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },
    { id: 'e_7f', source: 's7_detail', target: 's9_header', label: '[Buscar Candidatos]', style: { strokeDasharray: '8,4', stroke: '#00695c' } },

    // ══════════════════════════════════════════════
    // 8. COSTOS Y CONTRATOS
    // ══════════════════════════════════════════════
    { id: 'e_8a', source: 's8_header', target: 's8_contract' },
    { id: 'e_8b', source: 's8_header', target: 's8_rates' },
    { id: 'e_8c', source: 's8_contract', target: 's8_projected' },
    { id: 'e_8d', source: 's8_rates', target: 's8_projected' },
    { id: 'e_8e', source: 's8_projected', target: 's8_margin_alert', label: 'Si margen <25%', style: { stroke: '#f57f17', strokeDasharray: '5,5' } },

    // ══════════════════════════════════════════════
    // 9. AUTO-MATCHING
    // ══════════════════════════════════════════════
    { id: 'e_9a', source: 's9_header', target: 's9_suggestions' },
    { id: 'e_9b', source: 's9_header', target: 's9_profile_card' },
    { id: 'e_9c', source: 's9_suggestions', target: 's9_no_match', label: 'Sin candidatos', style: { stroke: '#f57f17', strokeDasharray: '5,5' } },
    { id: 'e_9d', source: 's9_profile_card', target: 's9_auto_notify', label: 'Notificar auto', style: { strokeDasharray: '5,5' } },
    { id: 'e_9e', source: 's9_profile_card', target: 's10_header', label: '[Asignar]', style: { strokeDasharray: '8,4', stroke: '#2e7d32' } },
    { id: 'e_9f', source: 's9_no_match', target: 's6_header', label: 'Ampliar búsqueda', style: { strokeDasharray: '8,4', stroke: '#f57f17' } },

    // ══════════════════════════════════════════════
    // 10. ASIGNACIÓN Y NOTIFICACIÓN
    // ══════════════════════════════════════════════
    { id: 'e_10a', source: 's10_header', target: 's10_contact' },
    { id: 'e_10b', source: 's10_contact', target: 's10_response' },
    { id: 'e_10c', source: 's10_response', target: 's10_accepts', label: 'Sí, acepta', style: { stroke: '#2e7d32' } },
    { id: 'e_10d', source: 's10_response', target: 's10_rejects', label: 'No, rechaza', style: { stroke: '#c62828' } },
    { id: 'e_10e', source: 's10_rejects', target: 's9_suggestions', label: 'Siguiente candidato', style: { strokeDasharray: '8,4', stroke: '#c62828' } },
    { id: 'e_10f', source: 's10_accepts', target: 's10_confirm', style: { stroke: '#2e7d32' } },
    { id: 'e_10g', source: 's10_accepts', target: 's10_notify_hotel', style: { strokeDasharray: '5,5' } },
    { id: 'e_10h', source: 's10_confirm', target: 's11_header', label: '[Enviar Onboarding]', style: { strokeDasharray: '8,4', stroke: '#00695c' } },

    // ══════════════════════════════════════════════
    // 11. ONBOARDING DIGITAL
    // ══════════════════════════════════════════════
    { id: 'e_11a', source: 's11_header', target: 's11_welcome' },
    { id: 'e_11b', source: 's11_header', target: 's11_instructions' },
    { id: 'e_11c', source: 's11_welcome', target: 's11_benefits' },
    { id: 'e_11d', source: 's11_instructions', target: 's11_confirm_attend' },
    { id: 'e_11e', source: 's11_benefits', target: 's11_regla_16', label: 'Si sin Tax ID', style: { stroke: '#f57f17', strokeDasharray: '5,5' } },
    { id: 'e_11f', source: 's11_confirm_attend', target: 's12_header', label: 'Confirma → Día 1', style: { strokeDasharray: '8,4', stroke: '#2e7d32' } },
    { id: 'e_11g', source: 's11_confirm_attend', target: 's10_contact', label: 'No confirma', style: { strokeDasharray: '8,4', stroke: '#c62828' } },

    // ══════════════════════════════════════════════
    // 12. SEGUIMIENTO DÍA 1
    // ══════════════════════════════════════════════
    { id: 'e_12a', source: 's12_header', target: 's12_gps' },
    { id: 'e_12b', source: 's12_header', target: 's12_show_noshow' },
    { id: 'e_12c', source: 's12_gps', target: 's12_show_ok', label: 'GPS confirma', style: { stroke: '#2e7d32' } },
    { id: 'e_12d', source: 's12_show_noshow', target: 's12_show_ok', label: '✅ Show', style: { stroke: '#2e7d32' } },
    { id: 'e_12e', source: 's12_show_noshow', target: 's12_noshow', label: '❌ No-Show', style: { stroke: '#c62828' } },
    { id: 'e_12f', source: 's12_show_ok', target: 's12_report' },
    { id: 'e_12g', source: 's12_noshow', target: 's9_header', label: 'Buscar reemplazo', style: { strokeDasharray: '8,4', stroke: '#c62828' } },
    { id: 'e_12h', source: 's12_report', target: 's12_trello_update', style: { strokeDasharray: '5,5' } },

    // ══════════════════════════════════════════════
    // 13. RETENCIÓN Y MÉTRICAS
    // ══════════════════════════════════════════════
    { id: 'e_13a', source: 's13_header', target: 's13_retention' },
    { id: 'e_13b', source: 's13_header', target: 's13_rematch' },
    { id: 'e_13c', source: 's13_retention', target: 's13_dashboard' },
    { id: 'e_13d', source: 's13_rematch', target: 's13_alerts' },
    { id: 'e_13e', source: 's13_rematch', target: 's10_contact', label: 'Re-asignar', style: { strokeDasharray: '8,4', stroke: '#00695c' } },
    { id: 'e_13f', source: 's13_dashboard', target: 's13_charts' },
    { id: 'e_13g', source: 's13_alerts', target: 's13_export', style: { strokeDasharray: '5,5' } },
    { id: 'e_13h', source: 's13_charts', target: 'end' },
    { id: 'e_13i', source: 's13_export', target: 'end' },

    // ══════════════════════════════════════════════
    // CROSS-SECTION CONNECTIONS
    // ══════════════════════════════════════════════

    // Dashboard → Captación (pipeline click)
    { id: 'e_cross_dash_cap', source: 's2_pipeline', target: 's3_header', label: 'Click "Nuevos"', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },

    // Dashboard → Pool (pipeline click)
    { id: 'e_cross_dash_pool', source: 's2_pipeline', target: 's6_header', label: 'Click "En Pool"', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },

    // Report → Métricas
    { id: 'e_cross_report_met', source: 's12_report', target: 's13_header', label: 'Alimenta métricas', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },

    // Costos → Contabilidad (cross-role)
    { id: 'e_cross_cost_acc', source: 's8_margin_alert', target: 'end', label: '→ Dashboard Mónica', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },

    // No apto → Pool espera (puede revisitarse)
    { id: 'e_cross_noapto_pool', source: 's4_result_no_apto', target: 's6_tabs', label: 'Guardar en espera', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },
  ]
}

export default requisicionUXFlow
