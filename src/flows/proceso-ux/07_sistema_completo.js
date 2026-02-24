// ═══════════════════════════════════════════════════════════════════════
// USER EXPERIENCE: SISTEMA COMPLETO — TODOS LOS ROLES INTEGRADOS
// Vista unificada: qué VE cada usuario en su pantalla cuando
// interactúa con acciones de otros roles
// Basado en: Rol flow (627 líneas) + Digital flow (316 líneas)
// Traducido a experiencia de usuario integrada
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
//   1.  Home Screens — 6 roles con sus pantallas principales
//   2.  Proceso Requisición — Hotel→Reclutadora→Inspector→Colaborador
//   3.  Proceso Nómina — Hotel→Inspector→Contabilidad→Admin→Colaborador
//   4.  Proceso Onboarding — Reclutadora→Inspector→Colaborador
//   5.  Proceso Calidad — Inspector→Hotel→Admin
//   6.  Proceso Incidentes — Hotel/Inspector→Admin→Blacklist→Todos
//   7.  Proceso Facturación — Contabilidad→Hotel→Admin
//   8.  Proceso Vacaciones — Colaborador→Inspector→Contabilidad→Admin
//   9.  Proceso Uniformes — Inspector→Colaborador→Contabilidad
//  10.  Proceso Retención — Reclutadora→Colaborador→Hotel
//  11.  Proceso Cuentas Bancarias — Colaborador→Admin
//  12.  Proceso No-Show — Sistema→Hotel→Reclutadora→Colaborador
//  13.  Leyenda Inter-Rol
//
// ═══════════════════════════════════════════════════════════════════════

const sistemaCompletoUXFlow = {
  nodes: [
    // ── INICIO ──
    { id: 'start', type: 'input', position: { x: 1100, y: 0 }, data: { label: '🍊 ORANGE STAFFING\nSistema Completo UX\n6 Roles Integrados\n12 Procesos Inter-Rol' }, className: 'node-ux-section' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 1: HOME SCREENS — 6 ROLES
    // Pantalla principal que ve cada usuario al abrir la app
    // ═══════════════════════════════════════════════════════
    { id: 'homes_header', type: 'default', position: { x: 1100, y: 150 }, data: { label: '📱 PANTALLAS PRINCIPALES\n6 Roles — Home Screen' }, className: 'node-ux-section' },

    // --- Inspector Home ---
    { id: 'home_insp', type: 'default', position: { x: 0, y: 320 }, data: { label: '🏆 Inspector Home:\n━━━━━━━━━━━━━\n📋 Hoy: 3 visitas\n🆕 1 onboarding nuevo\n👕 2 entregas uniforme\n📊 Checklist pendiente\n━━━━━━━━━━━━━\nTabs: Ruta | Trello |\nEvals | Reportar\nApp Móvil/Tablet' }, className: 'node-ux-screen' },

    // --- Contabilidad Home ---
    { id: 'home_cont', type: 'default', position: { x: 400, y: 320 }, data: { label: '💰 Contabilidad Home:\n━━━━━━━━━━━━━\n📅 Calendario Semanal\n📥 TS pendientes: 8/39\n💵 Nómina: en proceso\n🧾 Invoices: 12 listos\n━━━━━━━━━━━━━\nTabs: Nómina | Invoice |\nPaychex | Vacaciones\nDashboard Web' }, className: 'node-ux-screen' },

    // --- Reclutadora Home ---
    { id: 'home_recl', type: 'default', position: { x: 800, y: 320 }, data: { label: '📋 Reclutadora Home:\n━━━━━━━━━━━━━\n📋 Requisiciones: 12\n🔴 Urgentes (<72h): 3\n👥 Pool disponible: 42\n📱 Día 1 monitoreo: 2\n━━━━━━━━━━━━━\nTabs: Pipeline | Pools |\nTrello | Métricas\nDashboard Web' }, className: 'node-ux-screen' },

    // --- Hotel Home ---
    { id: 'home_hotel', type: 'default', position: { x: 1200, y: 320 }, data: { label: '🏨 Admin Hotel Home:\n━━━━━━━━━━━━━\n👥 Empleados hoy: 12\n📋 Requisición abierta: 1\n⏰ Time Sheet: pendiente\n🧾 Invoice: revisar\n━━━━━━━━━━━━━\nTabs: Personal | Horas |\nIncidentes | Facturas\nPortal Web' }, className: 'node-ux-screen' },

    // --- Admin Orange Home ---
    { id: 'home_admin', type: 'default', position: { x: 1600, y: 320 }, data: { label: '👔 Admin Orange Home:\n━━━━━━━━━━━━━\n📊 KPIs: 39 hoteles\n💰 Nómina: pendiente\n🔔 Alertas: 5 urgentes\n✅ Cola aprobaciones: 8\n━━━━━━━━━━━━━\nTabs: Dashboard | Nómina |\nBancos | BL | Contratos\nDashboard Web' }, className: 'node-ux-screen' },

    // --- Colaborador Home ---
    { id: 'home_colab', type: 'default', position: { x: 2000, y: 320 }, data: { label: '👷 Colaborador Home:\n━━━━━━━━━━━━━\n📍 Hotel: Marriott DT\n⏰ Turno: 7AM-3PM\n📊 App: 60% ✅\n💰 Próx pago: Viernes\n━━━━━━━━━━━━━\nTabs: Ponchar | Perfil |\nSolicitudes | Pago\nApp Móvil' }, className: 'node-ux-screen' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 2: PROCESO REQUISICIÓN
    // Hotel solicita → Reclutadora busca → Inspector onboard
    // ═══════════════════════════════════════════════════════
    { id: 'req_header', type: 'default', position: { x: 200, y: 580 }, data: { label: '📋 PROCESO REQUISICIÓN\nHotel → Reclutadora →\nInspector → Colaborador' }, className: 'node-ux-section' },

    { id: 'req_hotel_form', type: 'default', position: { x: 0, y: 750 }, data: { label: '🏨 Hotel: Solicitar Personal\nFormulario portal:\n━━━━━━━━━━━━━\n📝 Posición: [Housekeeper ▾]\n📅 Fecha inicio: [picker]\n⏰ Horario: [7AM-3PM]\n🔢 Cantidad: [2]\n━━━━━━━━━━━━━\n[Enviar Solicitud]\n→ 2 minutos máximo' }, className: 'node-ux-form' },

    { id: 'req_hotel_confirm', type: 'default', position: { x: 0, y: 970 }, data: { label: '✅ Hotel Recibe:\n"Solicitud #1234 enviada"\nSnackbar verde\n━━━━━━━━━━━━━\nEstado: 🟡 En proceso\nSe actualizará cuando\nhaya candidato asignado' }, className: 'node-ux-feedback' },

    { id: 'req_recl_notif', type: 'default', position: { x: 230, y: 750 }, data: { label: '📋 Reclutadora Ve:\n🔔 Push: "Nueva requisición\nMarriott DT — 2 HK"\n━━━━━━━━━━━━━\nPrioridad: 🟡 72-120h\nPipeline se actualiza:\n[Nueva] → card amarilla\n→ Tap para ver detalle' }, className: 'node-ux-feedback' },

    { id: 'req_recl_match', type: 'default', position: { x: 230, y: 970 }, data: { label: '📋 Reclutadora: Matching\nPantalla Pool filtrado:\n━━━━━━━━━━━━━\nFiltros auto-aplicados:\n📍 <30min Marriott\n✅ No Blacklist\n📊 Score > 60\n━━━━━━━━━━━━━\nResultado: 5 candidatos\n→ Tap candidato → Llamar\n📞 "¿Disponible Lunes?"' }, className: 'node-ux-action' },

    { id: 'req_recl_trello', type: 'default', position: { x: 230, y: 1170 }, data: { label: '📋 Reclutadora: Asignar\nTap [Crear Tarjeta Trello]\n━━━━━━━━━━━━━\nAuto-genera:\n📇 "15Ene María G\n  📞 555-1234\n  🏨 Marriott DT"\n━━━━━━━━━━━━━\n→ Tablero Inspector\n→ Msg Bienvenida auto\n✅ "Asignación creada"' }, className: 'node-ux-action' },

    { id: 'req_insp_trello', type: 'default', position: { x: 0, y: 1170 }, data: { label: '🏆 Inspector Ve:\n🔔 Push: "Nuevo ingreso\nMarriott DT — María G"\n━━━━━━━━━━━━━\nTrello: nueva tarjeta\nen columna "Pendientes"\n→ Prioridad ruta:\n  1) Ingresos primero\n→ Swipe → "En proceso"' }, className: 'node-ux-feedback' },

    { id: 'req_colab_msg', type: 'default', position: { x: 460, y: 1170 }, data: { label: '👷 Colaborador Ve:\n📲 WhatsApp automático:\n━━━━━━━━━━━━━\n"🍊 Bienvenido/a a Orange!\nLunes 15 Ene — Marriott DT\n⏰ 7:00 AM\n👕 Vestimenta: negro\n📝 Pedir Time Sheet Día 1\nBeneficios Orange: ..."\n━━━━━━━━━━━━━\n→ Llegar con ID' }, className: 'node-ux-feedback' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 3: PROCESO NÓMINA SEMANAL
    // Hotel sube TS → Inspector valida → Contabilidad procesa
    // → Admin aprueba → Colaborador cobra
    // ═══════════════════════════════════════════════════════
    { id: 'nom_header', type: 'default', position: { x: 800, y: 580 }, data: { label: '💵 PROCESO NÓMINA\nHotel → Inspector →\nContabilidad → Admin →\nColaborador' }, className: 'node-ux-section' },

    { id: 'nom_hotel_ts', type: 'default', position: { x: 620, y: 750 }, data: { label: '🏨 Hotel: Subir Time Sheet\nPortal → pestaña Horas:\n━━━━━━━━━━━━━\n📊 Tabla editable:\nEmpleado | L M X J V S D\nMaría G  | 8 8 8 8 8 0 0\nJuan R   | 0 8 8 8 8 8 0\n━━━━━━━━━━━━━\n[Guardar Horas]\n🔴 Deadline: Miércoles\n⚠️ "Faltan 2 días"' }, className: 'node-ux-form' },

    { id: 'nom_insp_remind', type: 'default', position: { x: 850, y: 750 }, data: { label: '🏆 Inspector: Recordar TS\nLun-Mar en cada hotel:\n━━━━━━━━━━━━━\n"Manager, ¿ya subió\nlas horas esta semana?"\n━━━━━━━━━━━━━\n📊 Dashboard muestra:\n🟢 32/39 hoteles subidos\n🔴 7 pendientes\n→ [Enviar Recordatorio]' }, className: 'node-ux-screen' },

    { id: 'nom_cont_descarga', type: 'default', position: { x: 620, y: 970 }, data: { label: '💰 Contabilidad: Descargar\nLun-Mar: auto-descarga TS\n━━━━━━━━━━━━━\n📥 39 Time Sheets\n  recibidos digitalmente\n⚙️ 12 validaciones auto:\n  rates, horas, BL, banco,\n  estado, deducciones\n━━━━━━━━━━━━━\n→ Generar 3 archivos\n  Pre-Pay / Factors / Invoice' }, className: 'node-ux-system' },

    { id: 'nom_cont_cierre', type: 'default', position: { x: 850, y: 970 }, data: { label: '💰 Contabilidad: Miércoles\n🔴 CIERRE NÓMINA\n━━━━━━━━━━━━━\n📤 Enviar a Sandra (Paychex)\n  4 archivos generados\n📋 Revisar Journal\n  vs Pre-Payroll\n━━━━━━━━━━━━━\n✅ "Nómina enviada\na Paychex — lista\npara aprobación"' }, className: 'node-ux-action' },

    { id: 'nom_admin_approve', type: 'default', position: { x: 620, y: 1170 }, data: { label: '👔 Admin: Jueves 12-3PM\n🔔 Push: "Nómina lista"\n━━━━━━━━━━━━━\n📊 Total: $105,300\n👥 187 empleados\n✅ 12/12 validaciones OK\n⚠️ 3 anomalías → revisar\n━━━━━━━━━━━━━\n[✅ Aprobar + 2FA]\n[❌ Rechazar + Razón]\n→ Firma digital inmutable' }, className: 'node-ux-decision' },

    { id: 'nom_colab_pago', type: 'default', position: { x: 850, y: 1170 }, data: { label: '👷 Colaborador: Viernes 5AM\n🔔 Push: "💰 Pago disponible"\n━━━━━━━━━━━━━\nApp → pestaña Pago:\n💵 $585.00 depositado\n🏦 Chase ****4521\n📊 Desglose:\n  40h × $15.00 = $600\n  - $15 (uniforme)\n━━━━━━━━━━━━━\n"Dinero ya disponible\nen tu cuenta" ✅' }, className: 'node-ux-feedback' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 4: PROCESO ONBOARDING
    // Reclutadora msg → Inspector Día 1 → Colaborador App
    // ═══════════════════════════════════════════════════════
    { id: 'onb_header', type: 'default', position: { x: 1400, y: 580 }, data: { label: '🤝 PROCESO ONBOARDING\nReclutadora → Inspector\n→ Colaborador' }, className: 'node-ux-section' },

    { id: 'onb_recl_msg', type: 'default', position: { x: 1250, y: 750 }, data: { label: '📋 Reclutadora: Envía Msg\nPost-asignación automático:\n━━━━━━━━━━━━━\n🍊 Msg WhatsApp enviado\n→ Vestimenta negra\n→ Pedir TS día 1\n→ Beneficios Orange\n━━━━━━━━━━━━━\n✅ "Mensaje enviado a\nMaría García"' }, className: 'node-ux-system' },

    { id: 'onb_insp_dia1', type: 'default', position: { x: 1480, y: 750 }, data: { label: '🏆 Inspector: Día 1 — 8AM\nLlegada al hotel:\n━━━━━━━━━━━━━\n📋 Checklist Onboarding:\n☐ Presentar al manager\n☐ Tour del área\n☐ Formato ingreso\n☐ Foto ID empleado\n☐ Ayudar App 60%\n━━━━━━━━━━━━━\n→ Completar en app\n→ Fotos + GPS automático' }, className: 'node-ux-form' },

    { id: 'onb_colab_app', type: 'default', position: { x: 1250, y: 970 }, data: { label: '👷 Colaborador: App 60%\n📱 Con ayuda del inspector:\n━━━━━━━━━━━━━\n📊 Progress bar: 0% → 60%\n☐ Datos personales\n☐ Foto perfil\n☐ Documentos (ID, SSN)\n☐ Cuenta bancaria\n☐ Contacto emergencia\n━━━━━━━━━━━━━\n⏰ Meta: 72h para 60%\n🔴 Alert 24h/48h/72h\n❌ STRIKE si no cumple' }, className: 'node-ux-screen' },

    { id: 'onb_recl_dia1', type: 'default', position: { x: 1480, y: 970 }, data: { label: '📋 Reclutadora: Monitoreo\nDía 1 seguimiento:\n━━━━━━━━━━━━━\n📱 WhatsApp/Llamada:\n"¿Cómo fue tu primer día?"\n━━━━━━━━━━━━━\n✅ LLEGÓ → Foto ID\n  → Tablero: CUBIERTA\n  → Reporte Ingresos\n━━━━━━━━━━━━━\n❌ NO LLEGÓ → Buscar\n  reemplazo inmediato' }, className: 'node-ux-decision' },

    { id: 'onb_insp_eval', type: 'default', position: { x: 1365, y: 1170 }, data: { label: '🏆 Inspector: Evaluaciones\nDía 5 + Día 10:\n━━━━━━━━━━━━━\nFormulario 4 dimensiones:\n⭐ Desempeño: [1-5]\n⭐ Actitud: [1-5]\n⭐ Puntualidad: [1-5]\n⭐ Calidad: [1-5]\n━━━━━━━━━━━━━\nScore: 82/100 🟢\nFoto evidencia + GPS\n→ [Guardar Evaluación]' }, className: 'node-ux-form' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 5: PROCESO CALIDAD
    // Inspector visita → Hotel encuesta → Admin KPIs
    // ═══════════════════════════════════════════════════════
    { id: 'cal_header', type: 'default', position: { x: 2000, y: 580 }, data: { label: '⭐ PROCESO CALIDAD\nInspector → Hotel → Admin' }, className: 'node-ux-section' },

    { id: 'cal_insp_visita', type: 'default', position: { x: 1850, y: 750 }, data: { label: '🏆 Inspector: Visita Hotel\nRuta optimizada del día:\n━━━━━━━━━━━━━\n📍 Prioridad:\n1) Ingresos (nuevos)\n2) Onboard 5 días\n3) Calidad c/3ra semana\n━━━━━━━━━━━━━\nChecklist digital:\n☐ Uniformes correctos\n☐ Estándares OK\n☐ Hablar con manager\n→ Foto evidencia' }, className: 'node-ux-form' },

    { id: 'cal_hotel_encuesta', type: 'default', position: { x: 2100, y: 750 }, data: { label: '🏨 Hotel: Encuesta Auto\nPost-visita del inspector:\n━━━━━━━━━━━━━\n⭐ Calidad servicio: [1-5]\n⭐ Puntualidad: [1-5]\n⭐ Presentación: [1-5]\n⭐ Actitud: [1-5]\n📝 Comentarios: [___]\n━━━━━━━━━━━━━\nNPS calculado auto\n→ Envío instantáneo\n→ "Gracias por evaluar"' }, className: 'node-ux-form' },

    { id: 'cal_admin_kpi', type: 'default', position: { x: 1975, y: 970 }, data: { label: '👔 Admin Ve:\nDashboard auto-actualizado:\n━━━━━━━━━━━━━\n⭐ NPS Hoteles: 72 🟢\n📊 Satisfacción promedio:\n  4.2/5.0 (↑ 0.3)\n🏨 Top 5 hoteles\n🔴 Bottom 3 hoteles\n━━━━━━━━━━━━━\nTrend chart mensual\n→ Click hotel = detalle\nAuto-alimenta KPIs' }, className: 'node-ux-screen' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 6: PROCESO INCIDENTES
    // Hotel/Inspector detecta → Admin evalúa → BL → Todos
    // ═══════════════════════════════════════════════════════
    { id: 'inc_header', type: 'default', position: { x: 200, y: 1400 }, data: { label: '⚠️ PROCESO INCIDENTES\nHotel/Inspector → Admin\n→ Blacklist → Todos' }, className: 'node-ux-section' },

    { id: 'inc_detecta', type: 'default', position: { x: 0, y: 1570 }, data: { label: '🏨/🏆 Detecta Incidente:\nFormulario en app/portal:\n━━━━━━━━━━━━━\n👤 Empleado: [select]\n📝 Tipo: [Ausencia ▾]\n  Calidad | Comportamiento\n  | Injury | No-Show\n📝 Descripción: [___]\n📷 Foto evidencia\n━━━━━━━━━━━━━\n[Reportar Incidente]\n→ GPS + timestamp auto' }, className: 'node-ux-form' },

    { id: 'inc_admin_notif', type: 'default', position: { x: 230, y: 1570 }, data: { label: '👔 Admin Recibe:\n🔔 Push URGENTE:\n"⚠️ Incidente reportado\nJuan R — Marriott DT\nTipo: Comportamiento"\n━━━━━━━━━━━━━\n📁 Expediente auto-generado:\n• Historial completo\n• Evaluaciones previas\n• Incidentes anteriores\n• Recomendación sistema\n→ [Revisar Caso]' }, className: 'node-ux-feedback' },

    { id: 'inc_admin_decide', type: 'default', position: { x: 0, y: 1780 }, data: { label: '👔 Admin Decide:\n━━━━━━━━━━━━━\n1. 🏨 BL Solo Hotel\n   (no puede en ESE hotel)\n2. 🌐 BL Global + 2FA\n   (NINGÚN hotel Orange)\n3. ⏸️ Suspensión 30 días\n4. ⚠️ Warning (strike)\n5. ❌ Rechazar reporte\n━━━━━━━━━━━━━\n1-click + notas obligatorias' }, className: 'node-ux-decision' },

    { id: 'inc_todos_notif', type: 'default', position: { x: 230, y: 1780 }, data: { label: '📢 Todos los Roles Ven:\nNotificación simultánea:\n━━━━━━━━━━━━━\n🏆 Inspector:\n  "Juan R — BL Marriott"\n📋 Reclutadora:\n  "Juan R — retirado pool"\n🏨 Hotel:\n  "Juan R — ya no asignado"\n💰 Contabilidad:\n  "Juan R — desactivar Paychex"\n━━━━━━━━━━━━━\nCada rol: acción en su app' }, className: 'node-ux-system' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 7: PROCESO FACTURACIÓN
    // Contabilidad genera → Hotel revisa → Pago
    // ═══════════════════════════════════════════════════════
    { id: 'fact_header', type: 'default', position: { x: 800, y: 1400 }, data: { label: '🧾 PROCESO FACTURACIÓN\nContabilidad → Hotel\n→ Pago' }, className: 'node-ux-section' },

    { id: 'fact_cont_genera', type: 'default', position: { x: 620, y: 1570 }, data: { label: '💰 Contabilidad: Jueves\nGenerar Invoices auto:\n━━━━━━━━━━━━━\n🧾 39 facturas generadas\nBasadas en Time Sheets\naprobados + rates contrato\n━━━━━━━━━━━━━\nPor hotel: detalle horas\nEmpleado × Bill Rate\n→ [Enviar a Hoteles]\n→ Email automático c/u' }, className: 'node-ux-action' },

    { id: 'fact_hotel_recibe', type: 'default', position: { x: 850, y: 1570 }, data: { label: '🏨 Hotel Recibe Invoice:\n📧 Email + Portal:\n━━━━━━━━━━━━━\n🧾 Invoice #INV-2025-0042\n💰 Total: $3,842.50\n📊 Desglose por empleado:\n  María G: 40h × $19.58\n  Juan R: 32h × $18.00\n━━━━━━━━━━━━━\n📥 [Descargar PDF]\n✅ [Confirmar Recibido]' }, className: 'node-ux-screen' },

    { id: 'fact_hotel_pago', type: 'default', position: { x: 620, y: 1780 }, data: { label: '🏨 Hotel: Pago Net 15\n💳 Proceso de pago:\n━━━━━━━━━━━━━\n📅 Fecha límite: 15 días\n💳 Transferencia/Cheque\n━━━━━━━━━━━━━\n⚠️ Recordatorios auto:\n🟡 7 días restantes\n🔴 2 días restantes\n📛 Vencido → escalar\n→ ✅ "Pago confirmado"' }, className: 'node-ux-action' },

    { id: 'fact_admin_ve', type: 'default', position: { x: 850, y: 1780 }, data: { label: '👔 Admin Ve:\nDashboard financiero:\n━━━━━━━━━━━━━\n💰 Facturado: $142,500\n✅ Pagados: 35/39\n🔴 Pendientes: 4\n📊 Margen: 26.1% 🟡\n━━━━━━━━━━━━━\n🏨 Top deudores\nClick → detalle hotel\nExportable Excel/PDF' }, className: 'node-ux-screen' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 8: PROCESO VACACIONES
    // Colaborador solicita → Inspector canaliza →
    // Contabilidad calcula → Admin (Irene) aprueba
    // ═══════════════════════════════════════════════════════
    { id: 'vac_header', type: 'default', position: { x: 1400, y: 1400 }, data: { label: '🏖️ PROCESO VACACIONES\nColaborador → Inspector →\nContabilidad → Admin' }, className: 'node-ux-section' },

    { id: 'vac_colab_solicita', type: 'default', position: { x: 1250, y: 1570 }, data: { label: '👷 Colaborador: Solicitar\nApp → Solicitudes → Vacaciones:\n━━━━━━━━━━━━━\n📊 Horas disponibles: 40h\n✅ 52 semanas continuas: Sí\n✅ Promedio >32h/sem: 38h\n📅 Fecha inicio: [picker]\n📅 Fecha fin: [picker]\n━━━━━━━━━━━━━\n[Enviar Solicitud]\n→ "Solicitud enviada,\n  pendiente aprobación"' }, className: 'node-ux-form' },

    { id: 'vac_insp_canaliza', type: 'default', position: { x: 1480, y: 1570 }, data: { label: '🏆 Inspector Ve:\n🔔 "Solicitud vacaciones\nMaría G — 15-22 Ene"\n━━━━━━━━━━━━━\nVerifica cobertura:\n¿Hay reemplazo para\nMarriott DT esa semana?\n━━━━━━━━━━━━━\n[✅ Canalizar a Contab]\n[⚠️ Cobertura insuficiente]\n→ Nota al admin' }, className: 'node-ux-decision' },

    { id: 'vac_cont_calcula', type: 'default', position: { x: 1250, y: 1780 }, data: { label: '💰 Contabilidad: Cálculo\nAuto-validación:\n━━━━━━━━━━━━━\n✅ 52 sem continuas: OK\n✅ >32h promedio: 38h OK\n💵 Monto vacaciones:\n  40h × $15.00 = $600\n📅 Freeze licencia: Sí\n━━━━━━━━━━━━━\n→ "Cálculo listo,\n  enviado a Dirección\n  para aprobación"' }, className: 'node-ux-system' },

    { id: 'vac_admin_aprueba', type: 'default', position: { x: 1480, y: 1780 }, data: { label: '👔 Admin (Irene): Aprobar\n🔴 TODAS las vacaciones\nrequieren aprobación Irene\n━━━━━━━━━━━━━\n👤 María García\n📅 15-22 Ene (40h)\n💵 $600.00\n✅ Requisitos: cumplidos\n━━━━━━━━━━━━━\n[✅ Aprobar] 1-click\n→ Notifica empleado\n→ Bloquea calendario\n→ En próxima nómina' }, className: 'node-ux-action' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 9: PROCESO UNIFORMES
    // Inspector entrega → Colaborador firma → Contabilidad descuenta
    // ═══════════════════════════════════════════════════════
    { id: 'uni_header', type: 'default', position: { x: 2000, y: 1400 }, data: { label: '👕 PROCESO UNIFORMES\nInspector → Colaborador\n→ Contabilidad' }, className: 'node-ux-section' },

    { id: 'uni_insp_entrega', type: 'default', position: { x: 1850, y: 1570 }, data: { label: '🏆 Inspector: Día 3/5\nEntrega uniforme:\n━━━━━━━━━━━━━\n📋 Formulario entrega:\n👤 Empleado: María G\n👕 Talla: M\n📍 Hotel: Marriott DT\n📷 Foto evidencia\n✍️ Firma digital empleado\n━━━━━━━━━━━━━\n[Confirmar Entrega]\n→ Auto-genera deducción' }, className: 'node-ux-form' },

    { id: 'uni_colab_firma', type: 'default', position: { x: 2100, y: 1570 }, data: { label: '👷 Colaborador: Firma\nEn tablet del inspector:\n━━━━━━━━━━━━━\n"Confirmo recibir\nuniforma talla M.\nDescuento $30 en\npróxima nómina."\n━━━━━━━━━━━━━\n✍️ [Firmar con dedo]\n📷 Foto evidencia\n━━━━━━━━━━━━━\n✅ "Uniforme recibido"' }, className: 'node-ux-action' },

    { id: 'uni_cont_descuento', type: 'default', position: { x: 1975, y: 1780 }, data: { label: '💰 Contabilidad Ve:\nDescuento auto-aplicado:\n━━━━━━━━━━━━━\n📋 María G — Uniforme\n💵 -$30.00 en nómina\n📷 Evidencia: foto + firma\n📅 Fecha: 18 Ene 2025\n━━━━━━━━━━━━━\n0 intervención manual\nAparece en Pre-Pay\nautomáticamente' }, className: 'node-ux-system' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 10: PROCESO NO-SHOW
    // Sistema detecta → Hotel llama → Reclutadora reemplaza
    // ═══════════════════════════════════════════════════════
    { id: 'ns_header', type: 'default', position: { x: 200, y: 2030 }, data: { label: '🚨 PROCESO NO-SHOW\nSistema → Hotel →\nReclutadora → Strikes' }, className: 'node-ux-section' },

    { id: 'ns_hotel_detecta', type: 'default', position: { x: 0, y: 2200 }, data: { label: '🏨 Hotel: 8:30 AM\n"Juan R no se presentó"\n━━━━━━━━━━━━━\nPortal → Incidentes:\n[Reportar No-Show]\n👤 Juan Rodríguez\n📅 Hoy 8:30 AM\n━━━━━━━━━━━━━\n→ Llama a Orange:\n"Necesitamos reemplazo\nen los próximos X min"' }, className: 'node-ux-action' },

    { id: 'ns_recl_reemplazo', type: 'default', position: { x: 230, y: 2200 }, data: { label: '📋 Reclutadora Ve:\n🔴 Push URGENTE:\n"No-Show Marriott DT"\n━━━━━━━━━━━━━\nBúsqueda inmediata:\nPool → filtro zona\n→ 3 candidatos cercanos\n→ Llamar 1 por 1\n━━━━━━━━━━━━━\n✅ "Reemplazo asignado\nen camino — ETA 45min"' }, className: 'node-ux-action' },

    { id: 'ns_colab_strike', type: 'default', position: { x: 0, y: 2400 }, data: { label: '👷 Colaborador Ve:\n🔴 Push: "No-Show registrado"\n━━━━━━━━━━━━━\n📊 Strikes: 2/3\n1° Warning enviado\n2° Junta con supervisor\n━━━━━━━━━━━━━\n⚠️ "Próximo No-Show\n= Blacklist automático"\n→ Aparece en perfil\n→ Afecta Score' }, className: 'node-ux-feedback' },

    { id: 'ns_admin_ve', type: 'default', position: { x: 230, y: 2400 }, data: { label: '👔 Admin Ve:\nDashboard alertas:\n━━━━━━━━━━━━━\n🚨 No-Show hoy: 2\n📊 Esta semana: 5\n📉 Tendencia: ↑ 15%\n━━━━━━━━━━━━━\n⚡ 3 strikes = auto BL\nSistema escala a\nBlacklist workflow\n→ [Ver Expediente]' }, className: 'node-ux-screen' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 11: PROCESO CUENTAS BANCARIAS
    // Colaborador solicita → Admin verifica → Validación $0.01
    // ═══════════════════════════════════════════════════════
    { id: 'banco_header', type: 'default', position: { x: 800, y: 2030 }, data: { label: '🏦 CUENTAS BANCARIAS\nColaborador → Admin\nSOLO Dirección modifica' }, className: 'node-ux-section' },

    { id: 'banco_colab_solicita', type: 'default', position: { x: 620, y: 2200 }, data: { label: '👷 Colaborador: Cambio\nApp → Perfil → Banco:\n━━━━━━━━━━━━━\n🏦 Banco actual: Chase\n🏦 Nuevo: [Bank of America]\n📝 Routing: [XXXXXXXXX]\n📝 Account: [XXXXXXXX]\n📷 Selfie + ID\n━━━━━━━━━━━━━\n[Enviar Solicitud]\n→ "Enviada a Dirección\npara verificación"' }, className: 'node-ux-form' },

    { id: 'banco_admin_verifica', type: 'default', position: { x: 850, y: 2200 }, data: { label: '👔 Admin: Verificar\n🔔 Push: "Cambio banco\nPedro M — pendiente"\n━━━━━━━━━━━━━\n✅ Selfie + ID: match\n✅ Razón: razonable\n✅ Datos completos\n━━━━━━━━━━━━━\n[✅ Aprobar + 2FA]\n→ Depósito $0.01\n→ Cuenta anterior\n  INVALIDADA\n→ Audit: IP+dispositivo' }, className: 'node-ux-decision' },

    { id: 'banco_feedback', type: 'default', position: { x: 735, y: 2400 }, data: { label: '📢 Resultados:\n━━━━━━━━━━━━━\n👷 Colaborador:\n  "✅ Cuenta actualizada.\n  Verificar depósito $0.01\n  en Bank of America"\n━━━━━━━━━━━━━\n💰 Contabilidad:\n  "Cuenta Pedro M\n  actualizada — siguiente\n  nómina a nueva cuenta"\n━━━━━━━━━━━━━\n📋 Audit log inmutable' }, className: 'node-ux-feedback' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 12: PROCESO RETENCIÓN / 16%
    // Reclutadora busca → Colaborador → Contabilidad
    // ═══════════════════════════════════════════════════════
    { id: 'ret_header', type: 'default', position: { x: 1400, y: 2030 }, data: { label: '🔄 RETENCIÓN Y 16%\nReclutadora ↔ Colaborador\n↔ Contabilidad' }, className: 'node-ux-section' },

    { id: 'ret_recl_busca', type: 'default', position: { x: 1250, y: 2200 }, data: { label: '📋 Reclutadora: Retención\nCuando asignación termina:\n━━━━━━━━━━━━━\n📊 Empleado: María G\n⏰ Hotel Marriott: fin\n🔍 Buscar siguiente hotel:\n  Hilton (15 min) ✅\n  Hyatt (22 min) ✅\n━━━━━━━━━━━━━\n→ Meta: reasignar >72h\n→ [Asignar a Hilton]\n→ "Reasignación exitosa"' }, className: 'node-ux-screen' },

    { id: 'ret_colab_16', type: 'default', position: { x: 1480, y: 2200 }, data: { label: '👷 Colaborador: 16%\nSin Tax ID / SSN:\n━━━━━━━━━━━━━\nApp → Alertas:\n⚠️ "Retención 16% activa\nEntrega Tax ID para\nrecuperar impuestos"\n━━━━━━━━━━━━━\n📅 Alertas progresivas:\n🟡 60 días antes\n🔴 30 días antes\n📛 15 días: ÚLTIMO AVISO\n💸 31 Dic: PIERDE TODO' }, className: 'node-ux-feedback' },

    { id: 'ret_cont_reembolso', type: 'default', position: { x: 1365, y: 2400 }, data: { label: '💰 Contabilidad Ve:\nCuando entrega Tax ID:\n━━━━━━━━━━━━━\n📋 Pedro M — Tax ID ✅\n💵 Acumulado: $842.00\n📅 Retención desde: Marzo\n━━━━━━━━━━━━━\n→ Escalar a Dirección\n→ Admin aprueba reembolso\n→ En próxima nómina\n✅ "Reembolso procesado"' }, className: 'node-ux-system' },

    // ═══════════════════════════════════════════════════════
    // LEYENDA INTER-ROL
    // ═══════════════════════════════════════════════════════
    { id: 'legend_header', type: 'default', position: { x: 2000, y: 2030 }, data: { label: '🎨 LEYENDA\nINTER-ROL UX' }, className: 'node-ux-section' },

    { id: 'legend_roles', type: 'default', position: { x: 1900, y: 2200 }, data: { label: '📱 Roles y Plataformas:\n━━━━━━━━━━━━━\n🏆 Inspector — App Móvil\n💰 Contabilidad — Web\n📋 Reclutadora — Web\n🏨 Hotel — Portal Web\n👔 Admin Orange — Web\n👷 Colaborador — App Móvil' }, className: 'node-ux-screen' },

    { id: 'legend_edges', type: 'default', position: { x: 2130, y: 2200 }, data: { label: '🔗 Conexiones:\n━━━━━━━━━━━━━\n━━━ Flujo principal\n- - - Secundario/opcional\n─ ─ ─ Cross-sección\n🟢 Éxito/confirmación\n🔴 Error/rechazo\n🟡 Alerta/atención\n⚡ Push notification' }, className: 'node-ux-feedback' },

    // ── FIN ──
    { id: 'end', type: 'output', position: { x: 1100, y: 2620 }, data: { label: '🍊 Sistema Completo UX\n12 Procesos Inter-Rol\n6 Roles Integrados\n~85 Pantallas Mapeadas\n100% Cobertura' }, className: 'node-ux-section' },
  ],

  edges: [
    // ══════════════════════════════════════════════
    // Inicio → Home Screens
    // ══════════════════════════════════════════════
    { id: 'e_start_homes', source: 'start', target: 'homes_header' },

    { id: 'e_homes_insp', source: 'homes_header', target: 'home_insp', style: { strokeDasharray: '5,5' } },
    { id: 'e_homes_cont', source: 'homes_header', target: 'home_cont', style: { strokeDasharray: '5,5' } },
    { id: 'e_homes_recl', source: 'homes_header', target: 'home_recl', style: { strokeDasharray: '5,5' } },
    { id: 'e_homes_hotel', source: 'homes_header', target: 'home_hotel', style: { strokeDasharray: '5,5' } },
    { id: 'e_homes_admin', source: 'homes_header', target: 'home_admin', style: { strokeDasharray: '5,5' } },
    { id: 'e_homes_colab', source: 'homes_header', target: 'home_colab', style: { strokeDasharray: '5,5' } },

    // Home → Section headers (qué procesos usa cada rol)
    { id: 'e_home_insp_req', source: 'home_insp', target: 'req_header', label: 'Onboarding', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },
    { id: 'e_home_hotel_req', source: 'home_hotel', target: 'req_header', label: 'Solicitar personal', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },
    { id: 'e_home_cont_nom', source: 'home_cont', target: 'nom_header', label: 'Nómina semanal', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },
    { id: 'e_home_recl_req', source: 'home_recl', target: 'req_header', label: 'Pipeline', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },
    { id: 'e_home_admin_nom', source: 'home_admin', target: 'nom_header', label: 'Aprobar nómina', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },
    { id: 'e_home_colab_onb', source: 'home_colab', target: 'onb_header', label: 'Mi onboarding', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },

    // ══════════════════════════════════════════════
    // PROCESO REQUISICIÓN (edges internos)
    // ══════════════════════════════════════════════
    { id: 'e_req_a', source: 'req_header', target: 'req_hotel_form' },
    { id: 'e_req_b', source: 'req_header', target: 'req_recl_notif' },
    { id: 'e_req_c', source: 'req_hotel_form', target: 'req_hotel_confirm', label: 'Enviar', style: { stroke: '#2e7d32' } },
    { id: 'e_req_d', source: 'req_hotel_form', target: 'req_recl_notif', label: '🔔 Push auto', animated: true, style: { stroke: '#ff6f00', strokeWidth: 2 } },
    { id: 'e_req_e', source: 'req_recl_notif', target: 'req_recl_match', label: 'Tap → buscar' },
    { id: 'e_req_f', source: 'req_recl_match', target: 'req_recl_trello', label: 'Candidato acepta', style: { stroke: '#2e7d32' } },
    { id: 'e_req_g', source: 'req_recl_trello', target: 'req_insp_trello', label: '🔔 Trello auto', animated: true, style: { stroke: '#ff6f00', strokeWidth: 2 } },
    { id: 'e_req_h', source: 'req_recl_trello', target: 'req_colab_msg', label: '📲 WhatsApp auto', animated: true, style: { stroke: '#ff6f00', strokeWidth: 2 } },
    { id: 'e_req_i', source: 'req_hotel_confirm', target: 'req_recl_match', label: 'Estado actualiza', style: { strokeDasharray: '5,5' } },

    // ══════════════════════════════════════════════
    // PROCESO NÓMINA (edges internos)
    // ══════════════════════════════════════════════
    { id: 'e_nom_a', source: 'nom_header', target: 'nom_hotel_ts' },
    { id: 'e_nom_b', source: 'nom_header', target: 'nom_insp_remind' },
    { id: 'e_nom_c', source: 'nom_insp_remind', target: 'nom_hotel_ts', label: 'Recordar Lun-Mar', style: { strokeDasharray: '8,4', stroke: '#f57f17' } },
    { id: 'e_nom_d', source: 'nom_hotel_ts', target: 'nom_cont_descarga', label: 'TS subido → auto', animated: true, style: { stroke: '#ff6f00', strokeWidth: 2 } },
    { id: 'e_nom_e', source: 'nom_cont_descarga', target: 'nom_cont_cierre', label: 'Validación OK' },
    { id: 'e_nom_f', source: 'nom_cont_cierre', target: 'nom_admin_approve', label: '🔔 Jueves auto', animated: true, style: { stroke: '#ff6f00', strokeWidth: 2 } },
    { id: 'e_nom_g', source: 'nom_admin_approve', target: 'nom_colab_pago', label: 'Aprobada → Vie 5AM', style: { stroke: '#2e7d32', strokeWidth: 2 } },
    { id: 'e_nom_h', source: 'nom_insp_remind', target: 'nom_cont_descarga', label: 'TS validados', style: { strokeDasharray: '5,5' } },

    // ══════════════════════════════════════════════
    // PROCESO ONBOARDING (edges internos)
    // ══════════════════════════════════════════════
    { id: 'e_onb_a', source: 'onb_header', target: 'onb_recl_msg' },
    { id: 'e_onb_b', source: 'onb_header', target: 'onb_insp_dia1' },
    { id: 'e_onb_c', source: 'onb_recl_msg', target: 'onb_colab_app', label: 'Empleado descarga app' },
    { id: 'e_onb_d', source: 'onb_insp_dia1', target: 'onb_colab_app', label: 'Ayuda 60%', style: { stroke: '#2e7d32' } },
    { id: 'e_onb_e', source: 'onb_insp_dia1', target: 'onb_recl_dia1', label: 'Confirma llegada', animated: true, style: { stroke: '#ff6f00', strokeWidth: 2 } },
    { id: 'e_onb_f', source: 'onb_colab_app', target: 'onb_insp_eval', label: 'App 60% → eval' },
    { id: 'e_onb_g', source: 'onb_recl_dia1', target: 'onb_insp_eval', label: 'Día 1 OK', style: { stroke: '#2e7d32', strokeDasharray: '5,5' } },
    { id: 'e_onb_h', source: 'onb_recl_dia1', target: 'req_recl_match', label: '❌ No llegó → reemplazo', style: { stroke: '#c62828', strokeDasharray: '8,4' } },

    // ══════════════════════════════════════════════
    // PROCESO CALIDAD (edges internos)
    // ══════════════════════════════════════════════
    { id: 'e_cal_a', source: 'cal_header', target: 'cal_insp_visita' },
    { id: 'e_cal_b', source: 'cal_header', target: 'cal_hotel_encuesta' },
    { id: 'e_cal_c', source: 'cal_insp_visita', target: 'cal_hotel_encuesta', label: 'Post-visita auto', animated: true, style: { stroke: '#ff6f00', strokeWidth: 2 } },
    { id: 'e_cal_d', source: 'cal_hotel_encuesta', target: 'cal_admin_kpi', label: 'NPS → Dashboard', style: { stroke: '#2e7d32' } },
    { id: 'e_cal_e', source: 'cal_insp_visita', target: 'cal_admin_kpi', label: 'Evaluaciones → KPIs', style: { strokeDasharray: '5,5' } },

    // ══════════════════════════════════════════════
    // PROCESO INCIDENTES (edges internos)
    // ══════════════════════════════════════════════
    { id: 'e_inc_a', source: 'inc_header', target: 'inc_detecta' },
    { id: 'e_inc_b', source: 'inc_header', target: 'inc_admin_notif' },
    { id: 'e_inc_c', source: 'inc_detecta', target: 'inc_admin_notif', label: '🔔 Push urgente', animated: true, style: { stroke: '#c62828', strokeWidth: 2 } },
    { id: 'e_inc_d', source: 'inc_admin_notif', target: 'inc_admin_decide', label: 'Revisar expediente' },
    { id: 'e_inc_e', source: 'inc_admin_decide', target: 'inc_todos_notif', label: 'Decisión tomada', style: { stroke: '#c62828' } },

    // ══════════════════════════════════════════════
    // PROCESO FACTURACIÓN (edges internos)
    // ══════════════════════════════════════════════
    { id: 'e_fact_a', source: 'fact_header', target: 'fact_cont_genera' },
    { id: 'e_fact_b', source: 'fact_header', target: 'fact_hotel_recibe' },
    { id: 'e_fact_c', source: 'fact_cont_genera', target: 'fact_hotel_recibe', label: '📧 Email auto', animated: true, style: { stroke: '#ff6f00', strokeWidth: 2 } },
    { id: 'e_fact_d', source: 'fact_hotel_recibe', target: 'fact_hotel_pago', label: 'Revisar → Pagar' },
    { id: 'e_fact_e', source: 'fact_hotel_pago', target: 'fact_admin_ve', label: 'Pago confirmado', style: { stroke: '#2e7d32' } },
    { id: 'e_fact_f', source: 'fact_cont_genera', target: 'fact_admin_ve', label: 'Totales → Dashboard', style: { strokeDasharray: '5,5' } },

    // ══════════════════════════════════════════════
    // PROCESO VACACIONES (edges internos)
    // ══════════════════════════════════════════════
    { id: 'e_vac_a', source: 'vac_header', target: 'vac_colab_solicita' },
    { id: 'e_vac_b', source: 'vac_header', target: 'vac_insp_canaliza' },
    { id: 'e_vac_c', source: 'vac_colab_solicita', target: 'vac_insp_canaliza', label: '🔔 Push auto', animated: true, style: { stroke: '#ff6f00', strokeWidth: 2 } },
    { id: 'e_vac_d', source: 'vac_insp_canaliza', target: 'vac_cont_calcula', label: 'Canalizar ✅', style: { stroke: '#2e7d32' } },
    { id: 'e_vac_e', source: 'vac_cont_calcula', target: 'vac_admin_aprueba', label: 'Cálculo → Irene', animated: true, style: { stroke: '#ff6f00', strokeWidth: 2 } },
    { id: 'e_vac_f', source: 'vac_admin_aprueba', target: 'vac_colab_solicita', label: '✅ Notifica empleado', style: { stroke: '#2e7d32', strokeDasharray: '8,4' } },

    // ══════════════════════════════════════════════
    // PROCESO UNIFORMES (edges internos)
    // ══════════════════════════════════════════════
    { id: 'e_uni_a', source: 'uni_header', target: 'uni_insp_entrega' },
    { id: 'e_uni_b', source: 'uni_header', target: 'uni_colab_firma' },
    { id: 'e_uni_c', source: 'uni_insp_entrega', target: 'uni_colab_firma', label: 'Firma en tablet' },
    { id: 'e_uni_d', source: 'uni_colab_firma', target: 'uni_cont_descuento', label: '💵 Auto-deducción', animated: true, style: { stroke: '#ff6f00', strokeWidth: 2 } },
    { id: 'e_uni_e', source: 'uni_insp_entrega', target: 'uni_cont_descuento', label: 'Evidencia auto', style: { strokeDasharray: '5,5' } },

    // ══════════════════════════════════════════════
    // PROCESO NO-SHOW (edges internos)
    // ══════════════════════════════════════════════
    { id: 'e_ns_a', source: 'ns_header', target: 'ns_hotel_detecta' },
    { id: 'e_ns_b', source: 'ns_header', target: 'ns_recl_reemplazo' },
    { id: 'e_ns_c', source: 'ns_hotel_detecta', target: 'ns_recl_reemplazo', label: '🔔 Push urgente', animated: true, style: { stroke: '#c62828', strokeWidth: 2 } },
    { id: 'e_ns_d', source: 'ns_hotel_detecta', target: 'ns_colab_strike', label: 'Strike registrado', style: { stroke: '#c62828' } },
    { id: 'e_ns_e', source: 'ns_recl_reemplazo', target: 'ns_admin_ve', label: 'Reemplazo → KPIs', style: { strokeDasharray: '5,5' } },
    { id: 'e_ns_f', source: 'ns_colab_strike', target: 'ns_admin_ve', label: '3 strikes → BL', style: { stroke: '#c62828', strokeDasharray: '8,4' } },

    // ══════════════════════════════════════════════
    // PROCESO CUENTAS BANCARIAS (edges internos)
    // ══════════════════════════════════════════════
    { id: 'e_banco_a', source: 'banco_header', target: 'banco_colab_solicita' },
    { id: 'e_banco_b', source: 'banco_header', target: 'banco_admin_verifica' },
    { id: 'e_banco_c', source: 'banco_colab_solicita', target: 'banco_admin_verifica', label: '🔔 Push auto', animated: true, style: { stroke: '#ff6f00', strokeWidth: 2 } },
    { id: 'e_banco_d', source: 'banco_admin_verifica', target: 'banco_feedback', label: 'Aprobado + 2FA', style: { stroke: '#2e7d32' } },
    { id: 'e_banco_e', source: 'banco_admin_verifica', target: 'banco_feedback', label: 'Rechazado', style: { stroke: '#c62828', strokeDasharray: '5,5' } },

    // ══════════════════════════════════════════════
    // PROCESO RETENCIÓN / 16% (edges internos)
    // ══════════════════════════════════════════════
    { id: 'e_ret_a', source: 'ret_header', target: 'ret_recl_busca' },
    { id: 'e_ret_b', source: 'ret_header', target: 'ret_colab_16' },
    { id: 'e_ret_c', source: 'ret_colab_16', target: 'ret_cont_reembolso', label: 'Entrega Tax ID', style: { stroke: '#2e7d32' } },
    { id: 'e_ret_d', source: 'ret_cont_reembolso', target: 'vac_admin_aprueba', label: 'Admin aprueba reembolso', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },
    { id: 'e_ret_e', source: 'ret_recl_busca', target: 'ret_colab_16', label: 'Reasignado → alertas', style: { strokeDasharray: '5,5' } },

    // ══════════════════════════════════════════════
    // CROSS-SECTION: Conexiones entre procesos
    // ══════════════════════════════════════════════

    // Requisición → Onboarding (empleado asignado → día 1)
    { id: 'e_cross_req_onb', source: 'req_insp_trello', target: 'onb_header', label: 'Empleado → Onboarding', style: { strokeDasharray: '8,4', stroke: '#00838f', strokeWidth: 2 } },

    // Requisición → Colaborador msg → Onboarding app
    { id: 'e_cross_colab_onb', source: 'req_colab_msg', target: 'onb_colab_app', label: 'Descargar app', style: { strokeDasharray: '8,4', stroke: '#00838f' } },

    // Onboarding eval → Calidad (inicia ciclo calidad)
    { id: 'e_cross_onb_cal', source: 'onb_insp_eval', target: 'cal_header', label: 'Evaluaciones → Calidad', style: { strokeDasharray: '8,4', stroke: '#00838f' } },

    // Nómina → Facturación (mismos datos de horas)
    { id: 'e_cross_nom_fact', source: 'nom_cont_cierre', target: 'fact_cont_genera', label: 'Horas → Invoice', style: { strokeDasharray: '8,4', stroke: '#00838f' } },

    // Uniformes → Nómina (deducción en pre-pay)
    { id: 'e_cross_uni_nom', source: 'uni_cont_descuento', target: 'nom_cont_descarga', label: '$30 en nómina', style: { strokeDasharray: '8,4', stroke: '#00838f' } },

    // No-Show strikes → Incidentes (escalación)
    { id: 'e_cross_ns_inc', source: 'ns_colab_strike', target: 'inc_header', label: '3 strikes → Incidente', style: { strokeDasharray: '8,4', stroke: '#c62828' } },

    // Incidentes → No-Show (blacklist afecta todo)
    { id: 'e_cross_inc_colab', source: 'inc_todos_notif', target: 'ns_admin_ve', label: 'BL → métricas', style: { strokeDasharray: '8,4', stroke: '#c62828' } },

    // Vacaciones aprobadas → Nómina (pago extra)
    { id: 'e_cross_vac_nom', source: 'vac_admin_aprueba', target: 'nom_cont_descarga', label: 'Vacaciones en nómina', style: { strokeDasharray: '8,4', stroke: '#00838f' } },

    // Calidad → Incidentes (problema detectado)
    { id: 'e_cross_cal_inc', source: 'cal_insp_visita', target: 'inc_header', label: 'Problema → Incidente', style: { strokeDasharray: '8,4', stroke: '#f57f17' } },

    // Banco → Nómina (nueva cuenta para pago)
    { id: 'e_cross_banco_nom', source: 'banco_feedback', target: 'nom_colab_pago', label: 'Nueva cuenta → pago', style: { strokeDasharray: '8,4', stroke: '#00838f' } },

    // ══════════════════════════════════════════════
    // Convergencia → End
    // ══════════════════════════════════════════════
    { id: 'e_end_nom', source: 'nom_colab_pago', target: 'end', style: { strokeDasharray: '5,5' } },
    { id: 'e_end_fact', source: 'fact_admin_ve', target: 'end', style: { strokeDasharray: '5,5' } },
    { id: 'e_end_vac', source: 'vac_admin_aprueba', target: 'end', style: { strokeDasharray: '5,5' } },
    { id: 'e_end_inc', source: 'inc_todos_notif', target: 'end', style: { strokeDasharray: '5,5' } },
    { id: 'e_end_ns', source: 'ns_admin_ve', target: 'end', style: { strokeDasharray: '5,5' } },
    { id: 'e_end_banco', source: 'banco_feedback', target: 'end', style: { strokeDasharray: '5,5' } },
    { id: 'e_end_ret', source: 'ret_cont_reembolso', target: 'end', style: { strokeDasharray: '5,5' } },
    { id: 'e_end_uni', source: 'uni_cont_descuento', target: 'end', style: { strokeDasharray: '5,5' } },
    { id: 'e_end_cal', source: 'cal_admin_kpi', target: 'end', style: { strokeDasharray: '5,5' } },
    { id: 'e_end_onb', source: 'onb_insp_eval', target: 'end', style: { strokeDasharray: '5,5' } },
  ]
}

export default sistemaCompletoUXFlow
