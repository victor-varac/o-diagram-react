// ═══════════════════════════════════════════════════════════════════════
// USER EXPERIENCE: ADMIN HOTEL (PORTAL DEL CLIENTE)
// Pantalla por pantalla: todo lo que ve y hace el cliente hotel
// Portal Web Responsive + App Móvil — Bilingüe ES/EN
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
// SECCIONES:
//   1. Login y Primer Acceso
//   2. Dashboard Principal
//   3. Configuración del Hotel
//   4. Solicitar Personal (Requisiciones)
//   5. Recibir y Gestionar Empleados
//   6. Evaluar Colaboradores
//   7. Reporte y Aprobación de Horas
//   8. Validación M Lav (Habitaciones)
//   9. Reportar Incidentes
//  10. No-Show y Emergencias
//  11. Facturación y Pagos
//  12. Contrato y Tarifas
//  13. Historial y Reportes
//
// ═══════════════════════════════════════════════════════════════════════

const adminHotelUXFlow = {
  nodes: [
    // ── INICIO ──
    { id: 'start', type: 'input', position: { x: 500, y: 0 }, data: { label: '🏨 Portal Orange\nExperiencia Admin Hotel\nPortal Web + App Móvil' }, className: 'node-ux-section' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 1: LOGIN Y PRIMER ACCESO
    // ═══════════════════════════════════════════════════════
    { id: 's1_header', type: 'default', position: { x: 50, y: 150 }, data: { label: '🔐 1. LOGIN Y\nPRIMER ACCESO' }, className: 'node-ux-section' },

    { id: 's1_email_inv', type: 'default', position: { x: 50, y: 300 }, data: { label: '📧 Email Invitación:\n"Welcome to Orange Staffing Portal"\n• Hotel: [Nombre]\n• Link: [Acceder al Portal]\n• "Set up your password\n  to get started"\n→ Click link' }, className: 'node-ux-feedback' },

    { id: 's1_set_password', type: 'default', position: { x: 50, y: 500 }, data: { label: '🔑 Set Password:\n• New password*\n• Confirm password*\n• Password rules shown\n→ [Create Account]\n🌐 Idioma: ES | EN (toggle)' }, className: 'node-ux-form' },

    { id: 's1_login', type: 'default', position: { x: 50, y: 680 }, data: { label: '🔐 Login Screen:\n• Email (pre-filled)\n• Password\n• [Remember me]\n• [Forgot password?]\n→ [Sign In / Iniciar Sesión]\n🌐 Language toggle' }, className: 'node-ux-screen' },

    { id: 's1_splash', type: 'default', position: { x: 50, y: 880 }, data: { label: '🍊 Welcome Splash:\n"Welcome to Orange Portal"\nHotel: [Nombre]\nManager: [Nombre]\n→ Quick Tour (3 slides):\n1) "Manage your workforce"\n2) "Track hours in real-time"\n3) "Request staff instantly"\n→ [Get Started]' }, className: 'node-ux-screen' },

    { id: 's1_sys_setup', type: 'default', position: { x: 50, y: 1100 }, data: { label: '⚙️ Sistema:\n→ Crea perfil hotel\n→ Asigna contrato activo\n→ Envía a Reclutadora\n→ Habilita portal completo' }, className: 'node-ux-system' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 2: DASHBOARD PRINCIPAL
    // ═══════════════════════════════════════════════════════
    { id: 's2_header', type: 'default', position: { x: 400, y: 150 }, data: { label: '📊 2. DASHBOARD\nPRINCIPAL' }, className: 'node-ux-section' },

    { id: 's2_dashboard', type: 'default', position: { x: 400, y: 300 }, data: { label: '🏠 Dashboard Principal:\n━━━━━━━━━━━━━\nKPIs en tiempo real:\n• 👷 Empleados activos: 12\n• ⏱️ Horas esta semana: 384h\n• 📋 Requisiciones abiertas: 2\n• 🧾 Facturas pendientes: 1\n• ⚠️ Incidentes abiertos: 0\n━━━━━━━━━━━━━\nAcciones rápidas abajo\n🌐 ES | EN' }, className: 'node-ux-screen' },

    { id: 's2_notif_panel', type: 'default', position: { x: 300, y: 540 }, data: { label: '🔔 Panel Notificaciones:\n• "New employee assigned"\n• "Invoice #INV-234 ready"\n• "Time sheet due Wed"\n→ Tap = ir a detalle\n→ Mark all as read\n🔴 Badge con conteo' }, className: 'node-ux-screen' },

    { id: 's2_quick_actions', type: 'default', position: { x: 530, y: 540 }, data: { label: '⚡ Quick Actions:\n[+ Request Staff]\n[📊 View Hours]\n[⚠️ Report Issue]\n[🧾 View Invoices]\n→ Tap = navega a sección' }, className: 'node-ux-action' },

    { id: 's2_sidebar', type: 'default', position: { x: 400, y: 720 }, data: { label: '📋 Sidebar / Nav:\n(Portal) Menú lateral:\n• Dashboard\n• Requisitions\n• Employees\n• Hours & Time\n• Invoices\n• Reports\n• Settings\n(App) Tab bar inferior' }, className: 'node-ux-screen' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 3: CONFIGURACIÓN DEL HOTEL
    // ═══════════════════════════════════════════════════════
    { id: 's3_header', type: 'default', position: { x: 800, y: 150 }, data: { label: '⚙️ 3. CONFIGURACIÓN\nDEL HOTEL' }, className: 'node-ux-section' },

    { id: 's3_settings', type: 'default', position: { x: 800, y: 300 }, data: { label: '⚙️ Hotel Settings:\n• Hotel Name: [editable]\n• Address: [editable]\n• Contact: [phone/email]\n• Departments:\n  □ Housekeeping\n  □ Laundry\n  □ Maintenance\n→ [Save Changes]' }, className: 'node-ux-form' },

    { id: 's3_users', type: 'default', position: { x: 700, y: 480 }, data: { label: '👥 Users / Managers:\nLista de usuarios del hotel:\n• John Smith (Admin) 🟢\n• Maria López (Supervisor) 🟢\n• [+ Add User]\n→ Tap = ver permisos' }, className: 'node-ux-screen' },

    { id: 's3_add_user', type: 'default', position: { x: 700, y: 660 }, data: { label: '➕ Add User:\n• Full Name*\n• Email*\n• Role*:\n  ○ Manager (full access)\n  ○ Supervisor (hours only)\n• Departments: [multi-select]\n→ [Send Invitation]\n→ User recibe email' }, className: 'node-ux-form' },

    { id: 's3_notif_prefs', type: 'default', position: { x: 920, y: 480 }, data: { label: '🔔 Notification Preferences:\n□ Employee assigned (push+email)\n□ Hours submitted (email)\n□ Invoice ready (push+email)\n□ No-show alert (push)\n□ Inspector visit (email)\n→ [Save Preferences]' }, className: 'node-ux-form' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 4: SOLICITAR PERSONAL (REQUISICIONES)
    // ═══════════════════════════════════════════════════════
    { id: 's4_header', type: 'default', position: { x: 50, y: 1350 }, data: { label: '📋 4. SOLICITAR\nPERSONAL' }, className: 'node-ux-section' },

    { id: 's4_lista', type: 'default', position: { x: 50, y: 1500 }, data: { label: '📋 My Requisitions:\nLista con filtros:\n• #REQ-089 Housekeeper ×3\n  🟢 Filled | Start: Jan 20\n• #REQ-092 Houseman ×1\n  🟡 In Progress | Start: Jan 25\n• #REQ-095 Laundry ×2\n  🔴 Urgent | Start: Tomorrow\n→ [+ New Request]' }, className: 'node-ux-screen' },

    { id: 's4_form', type: 'default', position: { x: 50, y: 1730 }, data: { label: '📝 New Staff Request:\n• Position*: [dropdown]\n  Housekeeper | Houseman |\n  Laundry | Maintenance\n• Type*: ○ Temporary ○ Fixed\n• Quantity*: [1-10]\n• Start date*: [📅]\n• Shift: [8AM-4PM dropdown]\n• Special notes: [________]\n• Language pref: ES/EN/Any\n→ [Submit Request]' }, className: 'node-ux-form' },

    { id: 's4_priority', type: 'default', position: { x: -100, y: 1960 }, data: { label: '⚙️ Auto-Priority Calc:\n━━━━━━━━━━━━━\n≥72h advance = 🟢 Normal\n24-72h = 🟡 Rush\n<24h = 🔴 Emergency\n━━━━━━━━━━━━━\n"Your request: 🟢 Normal\nEstimated fill: 48h"' }, className: 'node-ux-system' },

    { id: 's4_confirm', type: 'default', position: { x: 80, y: 1960 }, data: { label: '✅ Request Confirmed:\n"Your request #REQ-098\nhas been submitted"\n• Position: Housekeeper ×2\n• Start: Jan 28\n• Priority: 🟢 Normal\n• Tracking: [View Status]\n→ Push when filled' }, className: 'node-ux-feedback' },

    { id: 's4_tracking', type: 'default', position: { x: 50, y: 2160 }, data: { label: '📊 Request Tracking:\n#REQ-098\n━━━━━━━━━━━━━\nTimeline:\n✅ Submitted (Mon 10:30)\n✅ Received by recruiter\n🔄 Matching candidates\n⬜ Employee assigned\n⬜ Start date\n━━━━━━━━━━━━━\nSLA: 48h | ETA: Wed' }, className: 'node-ux-screen' },

    { id: 's4_push_filled', type: 'default', position: { x: 50, y: 2380 }, data: { label: '🔔 Push Notification:\n"Good news! Your request\n#REQ-098 has been filled.\n2 employees assigned.\nStarting Jan 28."\n→ Tap = ver empleados' }, className: 'node-ux-feedback' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 5: RECIBIR Y GESTIONAR EMPLEADOS
    // ═══════════════════════════════════════════════════════
    { id: 's5_header', type: 'default', position: { x: 400, y: 1350 }, data: { label: '👥 5. RECIBIR Y\nGESTIONAR EMPLEADOS' }, className: 'node-ux-section' },

    { id: 's5_push_asignado', type: 'default', position: { x: 400, y: 1500 }, data: { label: '🔔 Employee Assigned:\n"New employee assigned\nto your property"\n━━━━━━━━━━━━━\n📷 [Photo]\nName: Juan Pérez\nPosition: Housekeeper\nRating: ⭐ 4.5\nStarts: Jan 28, 8:00 AM\n→ [View Profile]' }, className: 'node-ux-feedback' },

    { id: 's5_push_llego', type: 'default', position: { x: 400, y: 1730 }, data: { label: '📍 GPS Arrival:\n"Juan Pérez has arrived\nat your property"\nTime: 7:55 AM ✅\n→ Auto-confirmed via GPS\n→ Inspector notified' }, className: 'node-ux-system' },

    { id: 's5_panel_empleados', type: 'default', position: { x: 400, y: 1900 }, data: { label: '👥 Active Employees:\nPanel vista tabla/cards:\n━━━━━━━━━━━━━\n• Juan Pérez | HK | ⭐4.5\n  🟢 Working | Since Jan 15\n• Ana Gómez | HK | ⭐4.2\n  🟢 Working | Since Jan 10\n• Carlos R. | Laundry | ⭐3.8\n  🟡 Evaluation pending\n━━━━━━━━━━━━━\nFilter: Position | Status\n→ Tap = ver perfil' }, className: 'node-ux-screen' },

    { id: 's5_perfil_emp', type: 'default', position: { x: 300, y: 2110 }, data: { label: '👤 Employee Profile:\n📷 [Photo] Juan Pérez\nPosition: Housekeeper\nAssigned: Jan 15, 2025\nRating: ⭐ 4.5 (12 evals)\n━━━━━━━━━━━━━\nThis week: 32h worked\nTotal: 480h lifetime\n━━━━━━━━━━━━━\n→ [Evaluate]\n→ [Report Issue]\n→ [Request Change]' }, className: 'node-ux-screen' },

    { id: 's5_request_change', type: 'default', position: { x: 520, y: 2110 }, data: { label: '🔄 Request Change:\n• Type*:\n  ○ Temporary replacement\n  ○ Permanent change\n  ○ Remove employee\n• Reason*: [____________]\n• Urgency: ○ Normal ○ Urgent\n→ [Submit to Orange]\n→ Push when resolved' }, className: 'node-ux-form' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 6: EVALUAR COLABORADORES
    // ═══════════════════════════════════════════════════════
    { id: 's6_header', type: 'default', position: { x: 800, y: 1350 }, data: { label: '⭐ 6. EVALUAR\nCOLABORADORES' }, className: 'node-ux-section' },

    { id: 's6_push_eval', type: 'default', position: { x: 800, y: 1500 }, data: { label: '🔔 Evaluation Reminder:\n"How is Juan Pérez doing?\nHe\'s been at your hotel\nfor 5 days. Rate his\nperformance."\n→ [Evaluate Now]' }, className: 'node-ux-feedback' },

    { id: 's6_form_eval', type: 'default', position: { x: 800, y: 1680 }, data: { label: '📝 Employee Evaluation:\nEmployee: Juan Pérez\n━━━━━━━━━━━━━\n⭐ Performance: [1-5]\n⭐ Attitude: [1-5]\n⭐ Punctuality: [1-5]\n⭐ Quality of Work: [1-5]\n━━━━━━━━━━━━━\nComments: [____________]\nRecommend? ○ Yes ○ No\n→ [Submit Evaluation]' }, className: 'node-ux-form' },

    { id: 's6_survey_trigger', type: 'default', position: { x: 700, y: 1880 }, data: { label: '📧 Satisfaction Survey:\n(Triggered after Inspector visit)\n"How satisfied are you\nwith Orange Staffing?"\n→ Email + In-app link\n→ Open survey' }, className: 'node-ux-feedback' },

    { id: 's6_survey_form', type: 'default', position: { x: 700, y: 2060 }, data: { label: '📝 Survey Form:\n⭐ Overall satisfaction: [1-5]\n⭐ Quality of personnel: [1-5]\n⭐ Response time: [1-5]\n⭐ Communication: [1-5]\n━━━━━━━━━━━━━\nWould you recommend\nOrange? ○ Yes ○ No\nComments: [____________]\n→ [Submit Survey]' }, className: 'node-ux-form' },

    { id: 's6_eval_history', type: 'default', position: { x: 920, y: 1880 }, data: { label: '📊 Evaluation History:\n• Juan Pérez - Jan 20\n  Avg: ⭐ 4.5 👍 Recommend\n• Ana Gómez - Jan 15\n  Avg: ⭐ 4.2 👍 Recommend\n• Carlos R. - Jan 10\n  Avg: ⭐ 3.0 ⚠️ Issues\n→ Filter by employee/date\n→ Export to Excel' }, className: 'node-ux-screen' },

    { id: 's6_sys_eval', type: 'default', position: { x: 800, y: 2240 }, data: { label: '⚙️ Sistema:\n→ Eval va a Orange Dashboard\n→ Si score <3: alerta a\n  Coordinación\n→ Feedback a Inspector\n→ Actualiza rating empleado' }, className: 'node-ux-system' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 7: REPORTE Y APROBACIÓN DE HORAS
    // ═══════════════════════════════════════════════════════
    { id: 's7_header', type: 'default', position: { x: 50, y: 2600 }, data: { label: '⏱️ 7. REPORTE Y\nAPROBACIÓN DE HORAS' }, className: 'node-ux-section' },

    { id: 's7_hours_dash', type: 'default', position: { x: 50, y: 2770 }, data: { label: '⏱️ Hours Dashboard:\n(Real-time via GPS)\n━━━━━━━━━━━━━\nToday - Wed Jan 22:\n• Juan P. 🟢 Working 5h 23m\n• Ana G. 🟢 Working 4h 10m\n• Carlos R. ⚫ Off today\n━━━━━━━━━━━━━\nTotal today: 9h 33m\nWeek so far: 248h\n→ Tap employee = detail' }, className: 'node-ux-screen' },

    { id: 's7_weekly_summary', type: 'default', position: { x: 50, y: 3010 }, data: { label: '📊 Weekly Summary:\nWeek: Jan 19-25\n━━━━━━━━━━━━━━━━━━\nEmployee    | Mon|Tue|Wed|...\nJuan Pérez  | 8.0|8.0|7.5|...\nAna Gómez   | 8.0|8.0|8.0|...\nCarlos R.   | 6.5|7.0|OFF|...\n━━━━━━━━━━━━━━━━━━\nTotal: 384h | Est: $7,518\n→ [Approve & Submit]\n→ [Report Discrepancy]' }, className: 'node-ux-screen' },

    { id: 's7_approve', type: 'default', position: { x: -80, y: 3230 }, data: { label: '✅ Approve Hours:\n"Review and confirm\nthese hours are correct:"\n━━━━━━━━━━━━━\nTotal: 384h\nEmployees: 12\nPeriod: Jan 19-25\n━━━━━━━━━━━━━\n□ I confirm these hours\n  are accurate\n→ [Approve & Submit]\n→ Digital signature' }, className: 'node-ux-action' },

    { id: 's7_discrepancy', type: 'default', position: { x: 150, y: 3230 }, data: { label: '⚠️ Report Discrepancy:\n• Employee*: [dropdown]\n• Date*: [📅]\n• Orange hours: 8.0h\n• Our records: 7.5h\n• Difference: -0.5h\n• Notes*: [____________]\n• Evidence: [📷 Upload]\n→ [Submit to Orange]' }, className: 'node-ux-form' },

    { id: 's7_deadline_warn', type: 'default', position: { x: 50, y: 3440 }, data: { label: '🔴 Deadline Reminder:\n(Tuesday push):\n"Time sheet approval\ndue Wednesday 11:59 PM.\n384h pending your review."\n→ [Review Now]\n(Wednesday): "FINAL\nREMINDER: Deadline tonight"' }, className: 'node-ux-feedback' },

    { id: 's7_sys_hours', type: 'default', position: { x: 50, y: 3630 }, data: { label: '⚙️ Sistema:\n→ Horas aprobadas\n  van a Contabilidad\n→ Genera factura jueves\n→ Si no aprobó: auto-submit\n  con horas GPS como base' }, className: 'node-ux-system' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 8: VALIDACIÓN M LAV (HABITACIONES)
    // ═══════════════════════════════════════════════════════
    { id: 's8_header', type: 'default', position: { x: 400, y: 2600 }, data: { label: '🛏️ 8. VALIDACIÓN\nM LAV (HABITACIONES)' }, className: 'node-ux-section' },

    { id: 's8_room_list', type: 'default', position: { x: 400, y: 2770 }, data: { label: '🛏️ Room Report:\nToday - Juan Pérez:\n━━━━━━━━━━━━━\n✅ #201 - Cleaned 8:45AM\n✅ #203 - Cleaned 9:20AM\n✅ #205 - Cleaned 9:55AM\n🔄 #207 - In progress\n⬜ #209 - Pending\n━━━━━━━━━━━━━\nCompleted: 3/15\n→ Real-time updates' }, className: 'node-ux-screen' },

    { id: 's8_validate', type: 'default', position: { x: 400, y: 3010 }, data: { label: '✅ Supervisor Validates:\n"Confirm room count\nfor Juan Pérez:"\n━━━━━━━━━━━━━\nEmployee reports: 15 rooms\nSupervisor count: 14 rooms\n━━━━━━━━━━━━━\n→ [Confirm 15] (agree)\n→ [Adjust to 14] (correct)\n→ Notes: [____________]' }, className: 'node-ux-decision' },

    { id: 's8_adjust', type: 'default', position: { x: 300, y: 3200 }, data: { label: '📝 Adjust Count:\n• Original: 15 rooms\n• Adjusted: 14 rooms*\n• Reason*:\n  ○ Room not cleaned\n  ○ Quality issue\n  ○ Wrong count\n  ○ Other: [________]\n→ [Submit Adjustment]' }, className: 'node-ux-form' },

    { id: 's8_confirm', type: 'default', position: { x: 530, y: 3200 }, data: { label: '✅ Validation Complete:\n"Room count confirmed.\n14 rooms validated for\nJan 22 - Juan Pérez"\n→ Digital signature ✍️\n→ Sent to Orange' }, className: 'node-ux-feedback' },

    { id: 's8_sys_mlav', type: 'default', position: { x: 400, y: 3400 }, data: { label: '⚙️ Sistema:\n→ Conteo validado\n  integra a horas\n→ Si diferencia ≥3:\n  alerta a Inspector\n→ Historial por empleado' }, className: 'node-ux-system' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 9: REPORTAR INCIDENTES
    // ═══════════════════════════════════════════════════════
    { id: 's9_header', type: 'default', position: { x: 800, y: 2600 }, data: { label: '⚠️ 9. REPORTAR\nINCIDENTES' }, className: 'node-ux-section' },

    { id: 's9_menu', type: 'default', position: { x: 800, y: 2770 }, data: { label: '⚠️ Report Issue:\nSelect type:\n━━━━━━━━━━━━━\n🔵 Quality Issue\n   (cleaning, attitude)\n🟡 Absence / Late\n   (didn\'t show, late)\n🔴 Serious Conduct\n   (theft, harassment)\n🟠 Service Request\n   (need more staff)\n→ Tap to report' }, className: 'node-ux-screen' },

    { id: 's9_form', type: 'default', position: { x: 800, y: 3010 }, data: { label: '📝 Incident Report:\n• Type: [pre-selected]\n• Employee*: [dropdown]\n• Date/Time*: [auto-now]\n• Description*:\n  [________________]\n• Severity: ○ Low ○ Med ○ High\n• Photos: [📷 Upload]\n• Action needed:\n  □ Verbal warning\n  □ Replace employee\n  □ Urgent callback\n→ [Submit Report]' }, className: 'node-ux-form' },

    { id: 's9_replace', type: 'default', position: { x: 700, y: 3230 }, data: { label: '🔄 Request Replacement:\n"Need urgent replacement\nfor [Employee]?"\n• When: ○ Today ○ Tomorrow\n  ○ As soon as possible\n• Same position: [auto]\n• Special requirements:\n  [________________]\n→ [Request Replacement]\n→ ETA tracking' }, className: 'node-ux-form' },

    { id: 's9_eta', type: 'default', position: { x: 700, y: 3440 }, data: { label: '🔔 Replacement ETA:\n"We\'re sending a\nreplacement for you."\n━━━━━━━━━━━━━\nName: Maria López\nETA: ~45 min\nRating: ⭐ 4.3\n━━━━━━━━━━━━━\n📍 Live tracking map\n→ Push when arrives' }, className: 'node-ux-feedback' },

    { id: 's9_confirm_inc', type: 'default', position: { x: 940, y: 3230 }, data: { label: '✅ Report Submitted:\n"Your incident report\n#INC-056 has been filed."\n• Assigned to: [Inspector]\n• SLA: 24h response\n• Priority: 🟡 Medium\n→ [Track Status]\n→ Push when resolved' }, className: 'node-ux-feedback' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 10: NO-SHOW Y EMERGENCIAS
    // ═══════════════════════════════════════════════════════
    { id: 's10_header', type: 'default', position: { x: 50, y: 3900 }, data: { label: '🚨 10. NO-SHOW Y\nEMERGENCIAS' }, className: 'node-ux-section' },

    { id: 's10_alert', type: 'default', position: { x: 50, y: 4070 }, data: { label: '🚨 No-Show Alert:\n(8:30 AM push)\n"Juan Pérez has not\narrived at your hotel.\nExpected: 8:00 AM"\n━━━━━━━━━━━━━\nOptions:\n→ [Call Orange]\n→ [Wait 30 min]\n→ [Request Replacement]' }, className: 'node-ux-feedback' },

    { id: 's10_call_orange', type: 'default', position: { x: -80, y: 4270 }, data: { label: '📞 Call Orange:\n→ Direct call to\n  Inspector/Reclutadora\n→ "We\'re checking on\n  Juan Pérez. We\'ll\n  call you back in\n  15 minutes."' }, className: 'node-ux-action' },

    { id: 's10_replacement', type: 'default', position: { x: 120, y: 4270 }, data: { label: '🔄 Auto-Replacement:\n"We\'re sending a\nreplacement ASAP."\n━━━━━━━━━━━━━\n👤 Carlos Méndez\n⏱️ ETA: 35 min\n📍 [Live Map]\n━━━━━━━━━━━━━\n→ Push on arrival' }, className: 'node-ux-feedback' },

    { id: 's10_strike_info', type: 'default', position: { x: 50, y: 4470 }, data: { label: '⚠️ Employee Status:\n"Juan Pérez - No Show"\nStrikes: ●●○ (2 of 3)\n━━━━━━━━━━━━━\n"This employee has been\nnotified. Repeated no-shows\nmay result in removal."\n→ [Request Permanent Change]\n→ [OK, noted]' }, className: 'node-ux-screen' },

    { id: 's10_sys_noshow', type: 'default', position: { x: 50, y: 4670 }, data: { label: '⚙️ Sistema:\n→ Registra no-show\n→ Strike al empleado\n→ Notifica Inspector\n→ Busca reemplazo auto\n→ Si 3 strikes: propone\n  blacklist' }, className: 'node-ux-system' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 11: FACTURACIÓN Y PAGOS
    // ═══════════════════════════════════════════════════════
    { id: 's11_header', type: 'default', position: { x: 400, y: 3900 }, data: { label: '🧾 11. FACTURACIÓN\nY PAGOS' }, className: 'node-ux-section' },

    { id: 's11_push_invoice', type: 'default', position: { x: 400, y: 4070 }, data: { label: '🔔 Invoice Ready:\n(Thursday push)\n"Your invoice #INV-234\nfor week Jan 19-25\nis ready for review."\nTotal: $7,518.12\n→ [View Invoice]' }, className: 'node-ux-feedback' },

    { id: 's11_invoice_detail', type: 'default', position: { x: 400, y: 4270 }, data: { label: '🧾 Invoice Detail:\n#INV-234 | Week Jan 19-25\n━━━━━━━━━━━━━━━━━━\nEmployee     |Hrs |Rate  |Total\nJuan Pérez   |40.0|$19.58|$783\nAna Gómez    |40.0|$19.58|$783\nCarlos R.    |32.5|$17.50|$569\n... +9 more\n━━━━━━━━━━━━━━━━━━\nSubtotal: $7,100.12\nAdmin fee: $418.00\nTotal: $7,518.12\n→ [Download PDF]\n→ [Report Discrepancy]' }, className: 'node-ux-screen' },

    { id: 's11_compare', type: 'default', position: { x: 300, y: 4500 }, data: { label: '🔍 Compare Hours:\nOrange vs Your Records:\n━━━━━━━━━━━━━━━━━━\n           |Orange|Yours|Diff\nJuan P.    |40.0h |40.0h|  ✅\nAna G.     |40.0h |39.5h| ⚠️\nCarlos R.  |32.5h |32.5h|  ✅\n━━━━━━━━━━━━━━━━━━\n⚠️ 1 discrepancy found\n→ [Report] [Approve All]' }, className: 'node-ux-screen' },

    { id: 's11_disc_form', type: 'default', position: { x: 300, y: 4720 }, data: { label: '📝 Invoice Discrepancy:\n• Invoice: #INV-234\n• Employee: Ana Gómez\n• Orange hours: 40.0h\n• Our records: 39.5h\n• Difference: 0.5h ($9.79)\n• Description*: [________]\n• Evidence: [📷 Upload]\n→ [Submit Dispute]\n→ SLA: 48h resolution' }, className: 'node-ux-form' },

    { id: 's11_history', type: 'default', position: { x: 530, y: 4500 }, data: { label: '📊 Payment History:\n━━━━━━━━━━━━━\n• Jan 19-25: $7,518 🟡 Due\n  Due: Feb 8 (Net 15)\n• Jan 12-18: $6,920 🟢 Paid\n• Jan 5-11: $7,102 🟢 Paid\n• Dec 29-4: $5,890 🟢 Paid\n━━━━━━━━━━━━━\nOutstanding: $7,518\n→ Tap = ver detalle\n→ Export statement' }, className: 'node-ux-screen' },

    { id: 's11_reminder', type: 'default', position: { x: 530, y: 4720 }, data: { label: '🔔 Payment Reminders:\n• 5 days before due:\n  "Invoice #INV-234 due\n  in 5 days ($7,518)"\n• 1 day before:\n  "REMINDER: Payment due\n  tomorrow"\n• Overdue:\n  "⚠️ Invoice overdue.\n  Please contact us."' }, className: 'node-ux-feedback' },

    { id: 's11_sys_billing', type: 'default', position: { x: 400, y: 4920 }, data: { label: '⚙️ Sistema:\n→ Factura auto-generada\n  jueves AM\n→ Basada en horas GPS +\n  aprobación del hotel\n→ Descuentos/CN si aplica\n→ Net 15 days payment' }, className: 'node-ux-system' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 12: CONTRATO Y TARIFAS
    // ═══════════════════════════════════════════════════════
    { id: 's12_header', type: 'default', position: { x: 800, y: 3900 }, data: { label: '📄 12. CONTRATO\nY TARIFAS' }, className: 'node-ux-section' },

    { id: 's12_contract', type: 'default', position: { x: 800, y: 4070 }, data: { label: '📄 My Contract:\n━━━━━━━━━━━━━\nContract: #CTR-2024-089\nStatus: 🟢 Active\nSigned: Sep 15, 2024\nRenewal: Sep 15, 2025\n━━━━━━━━━━━━━\nType: Full Service\nPayment terms: Net 15\n→ [Download Contract PDF]\n→ [Contact Orange]' }, className: 'node-ux-screen' },

    { id: 's12_rates', type: 'default', position: { x: 800, y: 4290 }, data: { label: '💲 Rate Card:\n━━━━━━━━━━━━━━━━━━\nPosition      | Rate/hr\nHousekeeper   | $19.58\nHouseman      | $17.50\nLaundry       | $16.75\nMaintenance   | $21.00\n━━━━━━━━━━━━━━━━━━\nOvertime: 1.5× after 40h\nHoliday: 2× rate\n→ Rates effective since\n  Sep 15, 2024\n→ [Request Rate Review]' }, className: 'node-ux-screen' },

    { id: 's12_renewal', type: 'default', position: { x: 800, y: 4520 }, data: { label: '🔔 Renewal Notice:\n(60 days before)\n"Your contract renews\non Sep 15, 2025.\nReview current terms\nor request changes."\n→ [Review Terms]\n→ [Request Changes]\n→ [Auto-Renew ✅]' }, className: 'node-ux-feedback' },

    { id: 's12_request_adj', type: 'default', position: { x: 800, y: 4720 }, data: { label: '📝 Request Adjustment:\n• Type*:\n  ○ Rate adjustment\n  ○ Contract terms\n  ○ Add positions\n  ○ Change payment terms\n• Details*: [____________]\n→ [Submit Request]\n→ Orange rep will contact' }, className: 'node-ux-form' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 13: HISTORIAL Y REPORTES
    // ═══════════════════════════════════════════════════════
    { id: 's13_header', type: 'default', position: { x: 400, y: 5150 }, data: { label: '📈 13. HISTORIAL\nY REPORTES' }, className: 'node-ux-section' },

    { id: 's13_reports', type: 'default', position: { x: 400, y: 5320 }, data: { label: '📈 Reports & Analytics:\n• Workforce Report\n  (employees, hours, cost)\n• Requisition History\n  (all requests, fill rates)\n• Evaluation Summary\n  (avg scores, trends)\n• Invoice History\n  (all invoices, payments)\n• Incident Log\n  (all reported issues)\n→ Select report type' }, className: 'node-ux-screen' },

    { id: 's13_filters', type: 'default', position: { x: 300, y: 5520 }, data: { label: '🔍 Report Filters:\n• Date range: [📅] to [📅]\n• Employee: [dropdown/all]\n• Position: [dropdown/all]\n• Department: [dropdown/all]\n→ [Generate Report]\n→ Preview in table' }, className: 'node-ux-form' },

    { id: 's13_export', type: 'default', position: { x: 530, y: 5520 }, data: { label: '📥 Export Options:\n→ [📊 Export to Excel]\n→ [📄 Export to PDF]\n→ [📧 Email Report]\n→ [📅 Schedule Weekly]\n━━━━━━━━━━━━━\n"Report generated.\nDownloading..."' }, className: 'node-ux-action' },

    // ── FIN ──
    { id: 'end', type: 'output', position: { x: 400, y: 5750 }, data: { label: '🏁 Fin del Flujo\nAdmin Hotel UX' }, className: 'node-ux-section' },
  ],

  edges: [
    // ── Start → Secciones principales ──
    { id: 'e_start_1', source: 'start', target: 's1_header' },
    { id: 'e_start_2', source: 'start', target: 's2_header', style: { strokeDasharray: '8,4' } },
    { id: 'e_start_3', source: 'start', target: 's3_header', style: { strokeDasharray: '8,4' } },

    // ── Sección 1: Login y Primer Acceso ──
    { id: 'e1_1', source: 's1_header', target: 's1_email_inv' },
    { id: 'e1_2', source: 's1_email_inv', target: 's1_set_password' },
    { id: 'e1_3', source: 's1_set_password', target: 's1_login' },
    { id: 'e1_4', source: 's1_login', target: 's1_splash' },
    { id: 'e1_5', source: 's1_splash', target: 's1_sys_setup' },
    { id: 'e1_6', source: 's1_sys_setup', target: 's2_header', style: { strokeDasharray: '5,5' } },

    // ── Sección 2: Dashboard ──
    { id: 'e2_1', source: 's2_header', target: 's2_dashboard' },
    { id: 'e2_2', source: 's2_dashboard', target: 's2_notif_panel' },
    { id: 'e2_3', source: 's2_dashboard', target: 's2_quick_actions' },
    { id: 'e2_4', source: 's2_dashboard', target: 's2_sidebar' },

    // ── Sección 3: Configuración ──
    { id: 'e3_1', source: 's3_header', target: 's3_settings' },
    { id: 'e3_2', source: 's3_header', target: 's3_users' },
    { id: 'e3_3', source: 's3_users', target: 's3_add_user' },
    { id: 'e3_4', source: 's3_header', target: 's3_notif_prefs' },

    // ── Sección 4: Solicitar Personal ──
    { id: 'e4_1', source: 's4_header', target: 's4_lista' },
    { id: 'e4_2', source: 's4_lista', target: 's4_form', label: '+ New Request' },
    { id: 'e4_3', source: 's4_form', target: 's4_priority' },
    { id: 'e4_4', source: 's4_form', target: 's4_confirm' },
    { id: 'e4_5', source: 's4_confirm', target: 's4_tracking' },
    { id: 'e4_6', source: 's4_tracking', target: 's4_push_filled', label: 'Filled', style: { stroke: '#2e7d32' } },

    // ── Sección 5: Recibir Empleados ──
    { id: 'e5_1', source: 's5_header', target: 's5_push_asignado' },
    { id: 'e5_2', source: 's5_push_asignado', target: 's5_push_llego', label: 'Day 1' },
    { id: 'e5_3', source: 's5_push_llego', target: 's5_panel_empleados' },
    { id: 'e5_4', source: 's5_header', target: 's5_panel_empleados', style: { strokeDasharray: '5,5' } },
    { id: 'e5_5', source: 's5_panel_empleados', target: 's5_perfil_emp' },
    { id: 'e5_6', source: 's5_perfil_emp', target: 's5_request_change', label: 'Request Change' },

    // ── Sección 6: Evaluar Colaboradores ──
    { id: 'e6_1', source: 's6_header', target: 's6_push_eval' },
    { id: 'e6_2', source: 's6_push_eval', target: 's6_form_eval' },
    { id: 'e6_3', source: 's6_header', target: 's6_survey_trigger', style: { strokeDasharray: '5,5' } },
    { id: 'e6_4', source: 's6_survey_trigger', target: 's6_survey_form' },
    { id: 'e6_5', source: 's6_header', target: 's6_eval_history', style: { strokeDasharray: '5,5' } },
    { id: 'e6_6', source: 's6_form_eval', target: 's6_sys_eval' },
    { id: 'e6_7', source: 's6_survey_form', target: 's6_sys_eval' },

    // ── Sección 7: Horas ──
    { id: 'e7_1', source: 's7_header', target: 's7_hours_dash' },
    { id: 'e7_2', source: 's7_hours_dash', target: 's7_weekly_summary' },
    { id: 'e7_3', source: 's7_weekly_summary', target: 's7_approve', label: 'Approve' },
    { id: 'e7_4', source: 's7_weekly_summary', target: 's7_discrepancy', label: 'Discrepancy', style: { stroke: '#f57f17' } },
    { id: 'e7_5', source: 's7_approve', target: 's7_sys_hours' },
    { id: 'e7_6', source: 's7_discrepancy', target: 's7_sys_hours', style: { strokeDasharray: '5,5' } },
    { id: 'e7_7', source: 's7_header', target: 's7_deadline_warn', style: { strokeDasharray: '5,5' } },

    // ── Sección 8: M Lav ──
    { id: 'e8_1', source: 's8_header', target: 's8_room_list' },
    { id: 'e8_2', source: 's8_room_list', target: 's8_validate' },
    { id: 'e8_3', source: 's8_validate', target: 's8_adjust', label: 'Adjust', style: { stroke: '#f57f17' } },
    { id: 'e8_4', source: 's8_validate', target: 's8_confirm', label: 'Confirm', style: { stroke: '#2e7d32' } },
    { id: 'e8_5', source: 's8_adjust', target: 's8_confirm' },
    { id: 'e8_6', source: 's8_confirm', target: 's8_sys_mlav' },

    // ── Sección 9: Incidentes ──
    { id: 'e9_1', source: 's9_header', target: 's9_menu' },
    { id: 'e9_2', source: 's9_menu', target: 's9_form' },
    { id: 'e9_3', source: 's9_form', target: 's9_replace', label: 'Need replacement' },
    { id: 'e9_4', source: 's9_replace', target: 's9_eta' },
    { id: 'e9_5', source: 's9_form', target: 's9_confirm_inc', label: 'Submit' },

    // ── Sección 10: No-Show ──
    { id: 'e10_1', source: 's10_header', target: 's10_alert' },
    { id: 'e10_2', source: 's10_alert', target: 's10_call_orange', label: 'Call' },
    { id: 'e10_3', source: 's10_alert', target: 's10_replacement', label: 'Replace', style: { stroke: '#c62828' } },
    { id: 'e10_4', source: 's10_call_orange', target: 's10_strike_info' },
    { id: 'e10_5', source: 's10_replacement', target: 's10_strike_info' },
    { id: 'e10_6', source: 's10_strike_info', target: 's10_sys_noshow' },

    // ── Sección 11: Facturación ──
    { id: 'e11_1', source: 's11_header', target: 's11_push_invoice' },
    { id: 'e11_2', source: 's11_push_invoice', target: 's11_invoice_detail' },
    { id: 'e11_3', source: 's11_invoice_detail', target: 's11_compare', label: 'Review hours' },
    { id: 'e11_4', source: 's11_compare', target: 's11_disc_form', label: 'Discrepancy', style: { stroke: '#f57f17' } },
    { id: 'e11_5', source: 's11_header', target: 's11_history', style: { strokeDasharray: '5,5' } },
    { id: 'e11_6', source: 's11_history', target: 's11_reminder', style: { strokeDasharray: '5,5' } },
    { id: 'e11_7', source: 's11_invoice_detail', target: 's11_sys_billing', style: { strokeDasharray: '5,5' } },

    // ── Sección 12: Contrato ──
    { id: 'e12_1', source: 's12_header', target: 's12_contract' },
    { id: 'e12_2', source: 's12_contract', target: 's12_rates' },
    { id: 'e12_3', source: 's12_contract', target: 's12_renewal', style: { strokeDasharray: '5,5' } },
    { id: 'e12_4', source: 's12_renewal', target: 's12_request_adj' },

    // ── Sección 13: Historial ──
    { id: 'e13_1', source: 's13_header', target: 's13_reports' },
    { id: 'e13_2', source: 's13_reports', target: 's13_filters' },
    { id: 'e13_3', source: 's13_filters', target: 's13_export' },

    // ── Conexiones cruzadas entre secciones ──
    // Dashboard → Solicitar Personal
    { id: 'e_cross_1', source: 's2_quick_actions', target: 's4_header', label: 'Request Staff', style: { strokeDasharray: '8,4' } },
    // Dashboard → Horas
    { id: 'e_cross_2', source: 's2_quick_actions', target: 's7_header', label: 'View Hours', style: { strokeDasharray: '8,4' } },
    // Dashboard → Facturación
    { id: 'e_cross_3', source: 's2_quick_actions', target: 's11_header', label: 'View Invoices', style: { strokeDasharray: '8,4' } },
    // Requisición filled → Recibir empleados
    { id: 'e_cross_4', source: 's4_push_filled', target: 's5_header', label: 'View assigned', style: { stroke: '#2e7d32', strokeDasharray: '8,4' } },
    // Perfil empleado → Evaluar
    { id: 'e_cross_5', source: 's5_perfil_emp', target: 's6_header', label: 'Evaluate', style: { strokeDasharray: '8,4' } },
    // Perfil empleado → Reportar incidente
    { id: 'e_cross_6', source: 's5_perfil_emp', target: 's9_header', label: 'Report Issue', style: { stroke: '#c62828', strokeDasharray: '8,4' } },
    // Horas → M Lav
    { id: 'e_cross_7', source: 's7_hours_dash', target: 's8_header', label: 'M Lav rooms', style: { strokeDasharray: '8,4' } },
    // Horas aprobadas → Facturación
    { id: 'e_cross_8', source: 's7_sys_hours', target: 's11_header', label: 'Genera factura', style: { strokeDasharray: '8,4' } },
    // Incidente → No-Show
    { id: 'e_cross_9', source: 's9_menu', target: 's10_header', label: 'No-Show', style: { stroke: '#c62828', strokeDasharray: '8,4' } },
    // Contrato → Reportes
    { id: 'e_cross_10', source: 's12_contract', target: 's13_header', label: 'View reports', style: { strokeDasharray: '8,4' } },

    // ── Fin ──
    { id: 'e_end1', source: 's13_export', target: 'end', style: { strokeDasharray: '5,5' } },
    { id: 'e_end2', source: 's11_sys_billing', target: 'end', style: { strokeDasharray: '5,5' } },
    { id: 'e_end3', source: 's10_sys_noshow', target: 'end', style: { strokeDasharray: '5,5' } },
  ]
}

export default adminHotelUXFlow
