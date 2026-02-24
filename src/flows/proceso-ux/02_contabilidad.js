// ═══════════════════════════════════════════════════════════════════════
// USER EXPERIENCE: CONTABILIDAD (Mónica / billing@)
// Pantalla por pantalla: todo lo que ve y hace Contabilidad en el sistema
// Basado en Rol flow (80 nodos, 13 secciones) + Digital flow (35 nodos, 9 secciones)
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
//   1.  Login y Acceso (Rol Contabilidad)
//   2.  Dashboard Contabilidad (KPIs + Calendario Semanal)
//   3.  Recepción de TimeSheets (Lista + Reminders + Deadline)
//   4.  Validaciones Automáticas (12 Checks + Semáforo)
//   5.  Cálculo de Nómina (3 Archivos + Envío Sandra)
//   6.  Journal Review (Comparar + Error Loop)
//   7.  Invoices (Auto-Gen + Envío + Tracking Pagos)
//   8.  Vacaciones (Solicitud + Elegibilidad + Irene)
//   9.  Cheques y Extemporáneos (Cancel + Reissue + Auth)
//  10.  Descuentos y Credit Notes (Auto-Aplicar + CN)
//  11.  Paychex Integration (Crear/Desactivar IDs + Work Records)
//  12.  Reportes y Carpeta Semanal (Auto-Reportes + Prep)
//  13.  Notificaciones y Alertas (Tiempo Real)
//
// ═══════════════════════════════════════════════════════════════════════

const contabilidadUXFlow = {
  nodes: [
    // ── INICIO ──
    { id: 'start', type: 'input', position: { x: 500, y: 0 }, data: { label: '💰 Contabilidad UX\nMónica / billing@\nPantalla por Pantalla' }, className: 'node-ux-section' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 1: LOGIN Y ACCESO
    // ═══════════════════════════════════════════════════════
    { id: 's1_header', type: 'default', position: { x: 50, y: 150 }, data: { label: '🔐 1. LOGIN\nY ACCESO' }, className: 'node-ux-section' },

    { id: 's1_login', type: 'default', position: { x: -100, y: 310 }, data: { label: '🔐 Pantalla Login:\n• Campo Email*\n  (billing@strategycstaffing)\n• Campo Contraseña*\n• [Iniciar Sesión] botón\n• Logo Orange + fondo oscuro' }, className: 'node-ux-form' },

    { id: 's1_auth_check', type: 'default', position: { x: 80, y: 310 }, data: { label: '⚙️ Sistema verifica:\n→ Si sesión activa\n  → skip login\n  → redirect Dashboard\n→ Rol: "contabilidad"\n  → menú específico' }, className: 'node-ux-system' },

    { id: 's1_error', type: 'default', position: { x: 250, y: 310 }, data: { label: '❌ Error Login:\n"Credenciales inválidas"\nSnackbar rojo\n→ Campos se mantienen\n→ Retry disponible' }, className: 'node-ux-feedback' },

    { id: 's1_layout', type: 'default', position: { x: 80, y: 490 }, data: { label: '📱 Layout Contabilidad:\n━━━━━━━━━━━━━\nAppBar superior:\n• 🍊 Logo Orange\n• 🔔 Bell (alertas)\n• 🚪 Cerrar Sesión\nDrawer lateral:\n/ Dashboard\n/timesheets\n/nomina\n/invoices\n/vacaciones\n/cheques\n/paychex\n/reportes' }, className: 'node-ux-screen' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 2: DASHBOARD CONTABILIDAD
    // ═══════════════════════════════════════════════════════
    { id: 's2_header', type: 'default', position: { x: 450, y: 150 }, data: { label: '📊 2. DASHBOARD\nCONTABILIDAD' }, className: 'node-ux-section' },

    { id: 's2_kpis', type: 'default', position: { x: 400, y: 310 }, data: { label: '📊 KPI Cards Principales:\n━━━━━━━━━━━━━\n📥 TS Recibidos: 18/24\n  (barra progreso 75%)\n⏳ TS Faltantes: 6\n  (lista hoteles clic)\n💵 Nómina Total: $45,280\n🧾 Invoices Pendientes: 4\n⚠️ Discrepancias: 2\n📑 Extemporáneos: 1\nCada card: valor + trend' }, className: 'node-ux-screen' },

    { id: 's2_calendar', type: 'default', position: { x: 620, y: 310 }, data: { label: '📅 Calendario Semanal:\nBarra horizontal visual:\n━━━━━━━━━━━━━\nSÁB → Solicitar TS\nLUN → Captura datos\nMAR → Escalación\nMIÉ → 🔴 CIERRE\nJUE → Nómina + Invoices\nVIE → Carpeta nueva\n━━━━━━━━━━━━━\nHoy resaltado en azul\nIconos estado por día' }, className: 'node-ux-screen' },

    { id: 's2_status_bar', type: 'default', position: { x: 400, y: 520 }, data: { label: '🎨 Barra de Estado Global:\n🟢 Lista (hoteles completos)\n🟡 Pendiente (en proceso)\n🟣 Completa (archivos listos)\n🔵 Revisada (verificada)\n→ Click en color filtra\n  hoteles por ese estado' }, className: 'node-ux-screen' },

    { id: 's2_quick_actions', type: 'default', position: { x: 620, y: 520 }, data: { label: '⚡ Acciones Rápidas:\n1. 📥 "Ver TS Faltantes"\n   → /timesheets?filter=missing\n2. 💵 "Enviar Nómina"\n   → /nomina (si lista)\n3. 🧾 "Enviar Invoices"\n   → /invoices\n4. 📊 "Reporte Semanal"\n   → /reportes' }, className: 'node-ux-action' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 3: RECEPCIÓN DE TIMESHEETS
    // ═══════════════════════════════════════════════════════
    { id: 's3_header', type: 'default', position: { x: 850, y: 150 }, data: { label: '📥 3. RECEPCIÓN\nDE TIMESHEETS' }, className: 'node-ux-section' },

    { id: 's3_list', type: 'default', position: { x: 830, y: 310 }, data: { label: '📥 Lista de Hoteles/TS:\nTabla con columnas:\n• 🏨 Hotel\n• 📊 Status (chip color)\n  ✅ Recibido\n  ⏳ Pendiente\n  🔴 Faltante\n• 📅 Fecha recepción\n• 👤 Enviado por\n• Acciones: 👁️ 📥\nOrden: faltantes primero' }, className: 'node-ux-screen' },

    { id: 's3_detail', type: 'default', position: { x: 1050, y: 310 }, data: { label: '👁️ Vista TS Detalle:\nTap en hotel → expande:\n• Tabla empleados semana\n• Horas regulares / OT\n  (separadas automático)\n• Rate por empleado\n• Total Pay / Total Bill\n→ Validaciones inline\n  🟢🟡🔴 por fila' }, className: 'node-ux-screen' },

    { id: 's3_reminders', type: 'default', position: { x: 830, y: 500 }, data: { label: '🔔 Panel Reminders:\nTimeline de recordatorios:\n• Sáb: "Solicitud enviada ✓"\n• Lun c/3h: "Reminder #1"\n• Lun c/3h: "Reminder #2"\n• Mar: "Escalado a Irene ⚠️"\nEstado: Enviado/Pendiente\n→ Botón [Reenviar manual]' }, className: 'node-ux-screen' },

    { id: 's3_deadline', type: 'default', position: { x: 1050, y: 500 }, data: { label: '🔴 Indicador Deadline:\nBanner superior en rojo:\n"CIERRE MIÉRCOLES"\nCountdown: "Faltan 14h"\n━━━━━━━━━━━━━\nDespués de cierre:\n"Período cerrado ✓"\n"Extemporáneos →\n  requieren aprobación"' }, className: 'node-ux-feedback' },

    { id: 's3_confirm', type: 'default', position: { x: 940, y: 670 }, data: { label: '⚙️ Auto-Confirmación:\nAl recibir TS →\nSistema auto-envía\nemail confirmación\nal hotel\n→ Status cambia a ✅\n→ Dashboard se actualiza' }, className: 'node-ux-system' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 4: VALIDACIONES AUTOMÁTICAS
    // ═══════════════════════════════════════════════════════
    { id: 's4_header', type: 'default', position: { x: 50, y: 720 }, data: { label: '✅ 4. VALIDACIONES\nAUTOMÁTICAS' }, className: 'node-ux-section' },

    { id: 's4_overview', type: 'default', position: { x: -100, y: 880 }, data: { label: '📊 Vista Validaciones:\nPor hotel, tabla resumen:\n• 🏨 Hotel\n• ✅ Pasaron (verde)\n• ⚠️ Warnings (amarillo)\n• ❌ Errores (rojo)\n• % Cumplimiento\nBarra progreso por hotel\nClick → detalle checks' }, className: 'node-ux-screen' },

    { id: 's4_12checks', type: 'default', position: { x: 120, y: 880 }, data: { label: '🔍 12 Checks por Empleado:\n━━━━━━━━━━━━━\n1. ¿Empleado en sistema?\n2. ¿ID Paychex activo?\n3. Horas <40 regular ✓\n4. OT >40.01 correcto ✓\n5. Rate correcto vs hotel\n6. Hotel activo\n7. App ≥60% pagable\n8. Banco validado\n9. Sin duplicados\n10. Horas vs GPS\n11. Descuentos aplicados\n12. Totales cuadran\nCada uno: ✅/⚠️/❌' }, className: 'node-ux-screen' },

    { id: 's4_traffic', type: 'default', position: { x: -100, y: 1100 }, data: { label: '🚦 Semáforo Resultado:\n━━━━━━━━━━━━━\n✅ VERDE: Pasa todo\n  → Procede automático\n  → No requiere revisión\n⚠️ AMARILLO: Advertencia\n  → Revisar pero procede\n❌ ROJO: Error\n  → Bloquea hasta corregir\n━━━━━━━━━━━━━\n"90% pasa automático"' }, className: 'node-ux-decision' },

    { id: 's4_exception', type: 'default', position: { x: 120, y: 1100 }, data: { label: '🔍 Pantalla Excepciones:\nSolo items ⚠️ y ❌:\n• Empleado sin ID Paychex\n  → [Crear ID] botón\n• Rate incorrecto\n  → [Corregir] → form\n• Horas no cuadran\n  → [Ajustar] → detalle\nCada excepción: chip\ncolor + acción directa' }, className: 'node-ux-form' },

    { id: 's4_approve', type: 'default', position: { x: 10, y: 1280 }, data: { label: '👆 Tap [Aprobar Validación]:\n→ Excepciones resueltas ✓\n→ Snackbar verde:\n  "Validación completa\n  para [Hotel Marriott]"\n→ Hotel pasa a estado\n  🟣 Completa\n→ Siguiente hotel auto' }, className: 'node-ux-action' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 5: CÁLCULO DE NÓMINA
    // ═══════════════════════════════════════════════════════
    { id: 's5_header', type: 'default', position: { x: 450, y: 720 }, data: { label: '💵 5. CÁLCULO\nDE NÓMINA' }, className: 'node-ux-section' },

    { id: 's5_summary', type: 'default', position: { x: 400, y: 880 }, data: { label: '💵 Resumen Nómina:\nPantalla principal:\n━━━━━━━━━━━━━\n💰 Total Payroll: $45,280\n👷 Empleados: 187\n⏰ Horas totales: 6,420\n  Regular: 5,890\n  Overtime: 530\n📊 Por hotel: tabla\n  sortable con totales\nEstado: 🟡 En Proceso' }, className: 'node-ux-screen' },

    { id: 's5_3files', type: 'default', position: { x: 620, y: 880 }, data: { label: '📁 3 Archivos Generados:\n━━━━━━━━━━━━━\n📄 Pre-Payroll\n  ID → Total Pay + Hotel\n  (auto-verificado vs rates)\n📄 Factors\n  Total Bill por hotel\n  + folio invoice auto\n📄 Invoice\n  Total Pay Rate =\n  Total Bill (check ✓)\nCada uno: [👁️ Ver] [📥 Download]' }, className: 'node-ux-screen' },

    { id: 's5_review', type: 'default', position: { x: 400, y: 1080 }, data: { label: '🔍 Revisión Pre-Envío:\nTabla comparativa:\nPre-Payroll vs Factors\nvs Invoice — deben cuadrar\n━━━━━━━━━━━━━\n✅ Cuadra → verde\n❌ Discrepancia → rojo\n  con diff marcado\n→ Corregir antes de enviar' }, className: 'node-ux-screen' },

    { id: 's5_send_dialog', type: 'default', position: { x: 620, y: 1080 }, data: { label: '📤 Dialog Enviar Nómina:\n━━━━━━━━━━━━━\nDestinatario:\n  sljudge@paychex.com\nDesde:\n  irenetodoorange@gmail\n━━━━━━━━━━━━━\n📎 4 Archivos adjuntos:\n1. Pre-Payroll ✓\n2. Separate Check ✓\n3. Discounts ✓\n4. Bonus ✓\n→ [Enviar] [Cancelar]' }, className: 'node-ux-form' },

    { id: 's5_sent_ok', type: 'default', position: { x: 510, y: 1260 }, data: { label: '✅ Nómina Enviada:\nSnackbar verde:\n"Nómina enviada a Sandra\n4 archivos adjuntos"\n→ Status → 🟣 Completa\n→ Timestamp registrado\n→ Esperando Journal...' }, className: 'node-ux-feedback' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 6: JOURNAL REVIEW
    // ═══════════════════════════════════════════════════════
    { id: 's6_header', type: 'default', position: { x: 850, y: 720 }, data: { label: '📋 6. JOURNAL\nREVIEW' }, className: 'node-ux-section' },

    { id: 's6_waiting', type: 'default', position: { x: 830, y: 880 }, data: { label: '⏳ Esperando Journal:\nEstado: "Pendiente\nrespuesta de Sandra"\n━━━━━━━━━━━━━\nTimestamp envío nómina\nHace: 2h 15min\n→ Notificación al llegar' }, className: 'node-ux-screen' },

    { id: 's6_compare', type: 'default', position: { x: 1050, y: 880 }, data: { label: '📋 Comparar Journal:\nVista lado a lado:\n━━━━━━━━━━━━━\nIZQ: Pre-Payroll enviado\nDER: Journal de Sandra\n━━━━━━━━━━━━━\nDiferencias resaltadas:\n🔴 Rojo = discrepancia\n🟢 Verde = correcto\nTotal filas / diferencias' }, className: 'node-ux-screen' },

    { id: 's6_decision', type: 'default', position: { x: 940, y: 1060 }, data: { label: '❓ ¿Journal correcto?\nTodas las filas 🟢?' }, className: 'node-ux-decision' },

    { id: 's6_ok', type: 'default', position: { x: 830, y: 1210 }, data: { label: '✅ Journal OK:\nTap [Aprobar Journal]\n→ Auto-notifica Sandra:\n  "Proceder con impresión"\n→ Nómina liberada ✓\n→ Auto-reporta a Irene\n→ Status → 🔵 Revisada' }, className: 'node-ux-feedback' },

    { id: 's6_error', type: 'default', position: { x: 1050, y: 1210 }, data: { label: '❌ Journal con Errores:\nTap en fila roja →\nMarcar tipo de error:\n• Monto incorrecto\n• Empleado faltante\n• Check duplicado\n→ [Enviar Ajustes]\n→ Esperar 2do Journal\n(loop hasta correcto)' }, className: 'node-ux-form' },

    { id: 's6_loop', type: 'default', position: { x: 1050, y: 1380 }, data: { label: '🔄 Loop Corrección:\nAjustes enviados a Sandra\n→ Esperar nuevo Journal\n→ Re-comparar\n→ Hasta que cuadre 100%' }, className: 'node-ux-system' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 7: INVOICES
    // ═══════════════════════════════════════════════════════
    { id: 's7_header', type: 'default', position: { x: 50, y: 1420 }, data: { label: '🧾 7. INVOICES\nY FACTURACIÓN' }, className: 'node-ux-section' },

    { id: 's7_list', type: 'default', position: { x: -100, y: 1580 }, data: { label: '🧾 Lista de Invoices:\nTabla por hotel:\n• 🏨 Hotel\n• 📄 # Invoice (consecutivo)\n• 💰 Monto Total\n• 📅 Fecha generada\n• Status: Generada |\n  Enviada | Pagada\n• Acciones: 👁️ 📤 📥\nFiltro: semana/mes/estado' }, className: 'node-ux-screen' },

    { id: 's7_preview', type: 'default', position: { x: 120, y: 1580 }, data: { label: '👁️ Preview Invoice PDF:\n3 Tabs dentro del PDF:\n━━━━━━━━━━━━━\nTab 1: Detalle empleados\n  horas + rates + totales\nTab 2: Factors resumen\n  bill por hotel + folio\nTab 3: Resumen ejecutivo\n  total pay = total bill\n→ [📥 Download PDF]' }, className: 'node-ux-screen' },

    { id: 's7_send_all', type: 'default', position: { x: -100, y: 1770 }, data: { label: '📤 Enviar Todas (1-click):\nTap [Enviar Invoices] →\nDialog confirmación:\n"Enviar 24 invoices\na todos los hoteles?\nbilling@ CC irene@\n+ goodman@"\n→ [Confirmar] [Cancelar]' }, className: 'node-ux-action' },

    { id: 's7_send_single', type: 'default', position: { x: 120, y: 1770 }, data: { label: '📤 Enviar Individual:\nTap 📤 en fila →\nEnvía solo ese hotel\n→ Correo desde:\n  billing@strategycstaffing\n→ CC oculto:\n  irene@ + goodman@\n→ Status: "Enviada ✓"' }, className: 'node-ux-action' },

    { id: 's7_tracking', type: 'default', position: { x: 10, y: 1940 }, data: { label: '📊 Tracking de Pagos:\nPor cada invoice enviada:\n• Net 15 vencimiento\n• Días transcurridos\n• Status: Pendiente |\n  Pagada | Vencida\n⚠️ Alerta si >15 días\n  sin pago → chip rojo\n→ Dashboard cobros total' }, className: 'node-ux-screen' },

    { id: 's7_sent_ok', type: 'default', position: { x: -100, y: 2100 }, data: { label: '✅ Invoices Enviadas:\nSnackbar verde:\n"24 invoices enviadas\nexitosamente"\n→ Registro de envío\n→ CC confirmado' }, className: 'node-ux-feedback' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 8: VACACIONES
    // ═══════════════════════════════════════════════════════
    { id: 's8_header', type: 'default', position: { x: 450, y: 1420 }, data: { label: '🌴 8. VACACIONES' }, className: 'node-ux-section' },

    { id: 's8_inbox', type: 'default', position: { x: 400, y: 1580 }, data: { label: '📥 Solicitudes Vacaciones:\nLista de solicitudes:\n• 👷 Empleado\n• 🏨 Hotel\n• 📅 Fechas solicitadas\n• Status: Nueva |\n  En Revisión | Aprobada\n  | Rechazada\n• 📅 Fecha ingreso\n→ Tap → detalle' }, className: 'node-ux-screen' },

    { id: 's8_eligibility', type: 'default', position: { x: 620, y: 1580 }, data: { label: '🔍 Verificación Auto:\nSistema muestra:\n━━━━━━━━━━━━━\n✅ ≥52 semanas: Sí/No\n✅ Constancia semanal: OK\n📊 Promedio 52 sem:\n  36.5h/semana\n━━━━━━━━━━━━━\nSi <1 año:\n  ❌ "No elegible"\n  chip rojo + razón' }, className: 'node-ux-system' },

    { id: 's8_calc', type: 'default', position: { x: 400, y: 1770 }, data: { label: '💰 Cálculo Automático:\n━━━━━━━━━━━━━\nPromedio: 36.5h\n→ >32h → Se pagan 40h\nRate: $15.00/h (primer rate)\nMonto: 40 × $15 = $600\n━━━━━━━━━━━━━\nSi <32h promedio:\n⚠️ "Requiere autorización\n  de horas" → notificar' }, className: 'node-ux-screen' },

    { id: 's8_decision', type: 'default', position: { x: 620, y: 1770 }, data: { label: '❓ ¿Promedio >32h?' }, className: 'node-ux-decision' },

    { id: 's8_irene', type: 'default', position: { x: 510, y: 1940 }, data: { label: '🔑 Aprobación Irene:\n🔴 TODOS los pagos\nrequieren aprobación\n→ Notificación a Irene\n  con monto y desglose\n→ Irene tap [Aprobar] ✓\n  o [Rechazar] ✗\n→ Contabilidad ve\n  resultado en tiempo real' }, className: 'node-ux-action' },

    { id: 's8_approved', type: 'default', position: { x: 400, y: 2110 }, data: { label: '✅ Vacaciones Aprobadas:\n→ Auto-agrega a\n  Separate Check\n→ Registra en\n  "Control Vacaciones"\n→ Empleado notificado\n→ Snackbar verde' }, className: 'node-ux-feedback' },

    { id: 's8_rejected', type: 'default', position: { x: 620, y: 2110 }, data: { label: '❌ Vacaciones Rechazadas:\nSnackbar rojo:\n"Rechazado por Irene:\n[razón]"\n→ Notificar inspectora\n→ Status: Rechazada' }, className: 'node-ux-feedback' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 9: CHEQUES Y EXTEMPORÁNEOS
    // ═══════════════════════════════════════════════════════
    { id: 's9_header', type: 'default', position: { x: 850, y: 1420 }, data: { label: '📑 9. CHEQUES Y\nEXTEMPORÁNEOS' }, className: 'node-ux-section' },

    { id: 's9_list', type: 'default', position: { x: 830, y: 1580 }, data: { label: '📑 Gestión de Cheques:\nLista con tabs:\n━━━━━━━━━━━━━\nTab 1: Cancel Check\nTab 2: Cancel & Reissue\nTab 3: Extemporáneos\n━━━━━━━━━━━━━\nCada item:\n• Empleado + Hotel\n• Razón\n• Status + Fecha\n→ Tap → detalle/form' }, className: 'node-ux-screen' },

    { id: 's9_cancel_form', type: 'default', position: { x: 1050, y: 1580 }, data: { label: '📝 Form Cancel Check:\n• Empleado* (search)\n• Hotel* (auto-fill)\n• Razón*: select\n  - Nombre mal\n  - Cantidad incorrecta\n  - Extravío\n• Notas (texto libre)\n→ [Cancelar Cheque]\nSale en siguiente nómina' }, className: 'node-ux-form' },

    { id: 's9_extemp_form', type: 'default', position: { x: 830, y: 1770 }, data: { label: '📝 Form Extemporáneo:\n• Empleado* (search)\n• Hotel*\n• Razón*: select\n  - Horas no reportadas\n  - Cheque cancelado\n  - Caso extraordinario\n• Monto* ($)\n• 📎 Evidencia (opcional)\n→ Requiere aprobación →' }, className: 'node-ux-form' },

    { id: 's9_auth_irene', type: 'default', position: { x: 1050, y: 1770 }, data: { label: '🔑 Auth Irene (Extemp):\n🔴 Extemporáneos SIEMPRE\nrequieren aprobación\n→ Notificación a Irene\n→ Tap [Aprobar] ✓\n→ Auto-envía a Sandra\n  con datos pre-llenados' }, className: 'node-ux-action' },

    { id: 's9_sandra', type: 'default', position: { x: 940, y: 1940 }, data: { label: '⚙️ Envío a Sandra:\nAuto-genera formulario\npara Paychex con:\n• Datos del empleado\n• Monto autorizado\n• Tipo de cheque\n→ Sandra sube a Paychex\n→ Se refleja en sistema' }, className: 'node-ux-system' },

    { id: 's9_ok', type: 'default', position: { x: 940, y: 2100 }, data: { label: '✅ Cheque Procesado:\nSnackbar verde:\n"Cheque [tipo] procesado\npara [empleado]"\n→ Registro en historial\n→ Visible en reportes' }, className: 'node-ux-feedback' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 10: DESCUENTOS Y CREDIT NOTES
    // ═══════════════════════════════════════════════════════
    { id: 's10_header', type: 'default', position: { x: 50, y: 2250 }, data: { label: '💸 10. DESCUENTOS\nY CREDIT NOTES' }, className: 'node-ux-section' },

    { id: 's10_discounts', type: 'default', position: { x: -100, y: 2410 }, data: { label: '💸 Vista Descuentos:\nLista activa:\n• 👷 Empleado\n• Tipo: Uniforme $30/$15\n  | Pago duplicado\n  | Otro\n• Monto deducción\n• Status: Pendiente |\n  Aplicado | Cobrado\n→ Auto-aplicado al\n  siguiente cheque' }, className: 'node-ux-screen' },

    { id: 's10_add_disc', type: 'default', position: { x: 120, y: 2410 }, data: { label: '➕ Agregar Descuento:\n• Empleado* (search)\n• Tipo* (select):\n  👕 Uniforme completo $30\n  👕 Pieza uniforme $15\n  💰 Pago duplicado\n  📝 Otro (monto manual)\n• Notas\n→ [Agregar] → aparece\n  en archivo DISCOUNTS' }, className: 'node-ux-form' },

    { id: 's10_cn_list', type: 'default', position: { x: -100, y: 2600 }, data: { label: '📝 Credit Notes:\nLista de CN generadas:\n• 🏨 Hotel\n• 📄 Invoice original #\n• ❌ Error identificado\n• 💰 Diferencia/Saldo\n• Status: Generada |\n  Enviada | Aplicada\n→ Tap → ver detalle' }, className: 'node-ux-screen' },

    { id: 's10_cn_form', type: 'default', position: { x: 120, y: 2600 }, data: { label: '📝 Generar Credit Note:\nSistema auto-muestra:\n• Invoice original\n• Celdas con error\n  (resaltadas en color)\n• Diferencia calculada\n→ [Generar CN]\n→ PDF con tabla original\n  + corrección + saldo\n→ Auto-enviar a hotel' }, className: 'node-ux-form' },

    { id: 's10_applied', type: 'default', position: { x: 10, y: 2770 }, data: { label: '✅ Descuento/CN Aplicado:\n"Descuento de $30\naplicado a [empleado]"\no "Credit Note #42\nenviada a [hotel]"\n→ Saldo actualizado\nen Invoice principal' }, className: 'node-ux-feedback' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 11: PAYCHEX INTEGRATION
    // ═══════════════════════════════════════════════════════
    { id: 's11_header', type: 'default', position: { x: 450, y: 2250 }, data: { label: '🏦 11. PAYCHEX\nINTEGRACIÓN' }, className: 'node-ux-section' },

    { id: 's11_ids', type: 'default', position: { x: 400, y: 2410 }, data: { label: '🏦 Gestión IDs Paychex:\nLista de empleados:\n• 👷 Nombre\n• 🔢 Paychex ID\n• Tipo: W2 | 1099\n• Status: Activo | Inactivo\n• 📅 Fecha creación\nFiltros: Activo/Inactivo\n  + búsqueda nombre' }, className: 'node-ux-screen' },

    { id: 's11_create', type: 'default', position: { x: 620, y: 2410 }, data: { label: '➕ Crear ID Paychex:\nRequisitos mostrados:\n⚠️ "Requiere App en\n  Monday con ID oficial"\n• Tipo*: W2 (impuestos)\n  o 1099 (sin impuestos)\n• Datos de App Monday\n  (auto-importados)\n→ [Crear ID]\n→ # asignado auto' }, className: 'node-ux-form' },

    { id: 's11_deactivate', type: 'default', position: { x: 400, y: 2600 }, data: { label: '🔴 Desactivar ID:\nTap [Desactivar] →\nConfirmación:\n"¿Desactivar ID de\n[empleado]?"\n→ User → Employment\n→ Terminate → Save\n→ Status: Inactivo\n→ Snackbar confirmación' }, className: 'node-ux-action' },

    { id: 's11_workrecords', type: 'default', position: { x: 620, y: 2600 }, data: { label: '⏰ Work Records (5 hoteles):\n━━━━━━━━━━━━━\n🏨 Hampton Midtown\n🏨 Hilton Garden\n🏨 Hyatt House\n🏨 SpringHill Buford\n🏨 Georgian Terrace\n━━━━━━━━━━━━━\n🟢 Horas en verde =\n  Aprobadas\nSync automático con TS' }, className: 'node-ux-screen' },

    { id: 's11_wr_actions', type: 'default', position: { x: 510, y: 2770 }, data: { label: '👆 Acciones Work Records:\n• 👤 Agregar persona\n  (SSN = tel sin 3 dígitos\n  + 00 → compartir)\n• ⏰ Ajustar horas:\n  Save time card (editar)\n  Add time (nuevo día)\n  2 partes: entrada-lunch\n  / regreso-salida\n→ Cambios se reflejan\n  en TS automáticamente' }, className: 'node-ux-action' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 12: REPORTES Y CARPETA SEMANAL
    // ═══════════════════════════════════════════════════════
    { id: 's12_header', type: 'default', position: { x: 850, y: 2250 }, data: { label: '📊 12. REPORTES\nY CARPETA SEMANAL' }, className: 'node-ux-section' },

    { id: 's12_auto_reports', type: 'default', position: { x: 830, y: 2410 }, data: { label: '📊 Reportes Automáticos:\n━━━━━━━━━━━━━\n📱 Diario c/2h (auto)\n  TS recibidos + faltantes\n🏨 Faltantes (auto-alerta)\n  lista hoteles sin TS\n🏆 Pendientes inspectoras\n  auto cada tarde\n💵 Seguimiento nómina\n  status en tiempo real\n📁 Semanal completo\n  invoices + TS + totales' }, className: 'node-ux-screen' },

    { id: 's12_view_report', type: 'default', position: { x: 1050, y: 2410 }, data: { label: '👁️ Ver Reporte Detalle:\nTap en cualquier reporte →\nVista con:\n• Fecha/hora generación\n• Datos completos\n• Gráficas (si aplica)\n• [📥 Download Excel]\n• [📤 Enviar por Email]\n• [🖨️ Imprimir]' }, className: 'node-ux-screen' },

    { id: 's12_carpeta', type: 'default', position: { x: 830, y: 2600 }, data: { label: '📁 Preparar Carpeta Nueva:\n(Viernes automático)\n→ Sistema copia estructura\n  semana anterior\n→ Limpia: Pre-Payroll,\n  Factors, Separate Check,\n  Bonus, Descuentos\n→ Actualiza fechas\n→ # Invoice consecutivo\n  auto-incrementado' }, className: 'node-ux-system' },

    { id: 's12_monday', type: 'default', position: { x: 1050, y: 2600 }, data: { label: '📱 Integración Monday:\n━━━━━━━━━━━━━\n👤 RH: Apps nuevas\n  → auto-importar datos\n🏆 Supervisión: Uniformes\n  → auto-generar descuento\n💰 Accounting: Discrepancias\n  → notificación directa\n→ Sync bidireccional' }, className: 'node-ux-screen' },

    { id: 's12_export', type: 'default', position: { x: 940, y: 2770 }, data: { label: '📤 Exportar Semanal:\nTap [Reporte Semanal] →\nGenera Excel completo:\n• Strategic Deployment\n• Todas las carpetas\n• Invoices + TS\n• Totales consolidados\n→ reporte_semana_XX.xlsx' }, className: 'node-ux-action' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 13: NOTIFICACIONES Y ALERTAS
    // ═══════════════════════════════════════════════════════
    { id: 's13_header', type: 'default', position: { x: 450, y: 2930 }, data: { label: '🔔 13. NOTIFICACIONES\nY ALERTAS' }, className: 'node-ux-section' },

    { id: 's13_bell', type: 'default', position: { x: 350, y: 3090 }, data: { label: '🔔 Badge en AppBar:\nCampana con número rojo\nde items pendientes:\n• TS faltantes\n• Journal recibido\n• Aprobación Irene\n• Pagos vencidos\n→ Tap abre panel' }, className: 'node-ux-screen' },

    { id: 's13_panel', type: 'default', position: { x: 570, y: 3090 }, data: { label: '📋 Panel Notificaciones:\nLista cronológica:\n━━━━━━━━━━━━━\n🔴 "6 hoteles sin TS"\n  hace 2h → [Ver lista]\n📋 "Journal de Sandra"\n  hace 30min → [Revisar]\n✅ "Irene aprobó vac."\n  hace 15min → [Ver]\n⚠️ "Invoice #42 vencida"\n  hace 1d → [Seguimiento]' }, className: 'node-ux-screen' },

    { id: 's13_tap_action', type: 'default', position: { x: 350, y: 3270 }, data: { label: '👆 Tap en Notificación:\n→ Deep link directo\n  a la pantalla relevante\nEj: "Journal de Sandra"\n→ /nomina/journal\n  con Journal abierto\n→ Marca como leída\n→ Badge se actualiza' }, className: 'node-ux-action' },

    { id: 's13_auto_alerts', type: 'default', position: { x: 570, y: 3270 }, data: { label: '⚙️ Alertas Automáticas:\nSistema genera alertas:\n• Sáb AM: recordar TS\n• Lun c/3h: faltantes\n• Mar: escalar a Irene\n• Mié: deadline cierre\n• >15 días sin pago\n• Extemporáneo pendiente\n→ Push + email + in-app' }, className: 'node-ux-system' },

    // ── FIN ──
    { id: 'end', type: 'output', position: { x: 460, y: 3460 }, data: { label: '🏆 Contabilidad UX\nCompleto\n13 Secciones\n~100 Pantallas\n100% Cobertura\nRol + Digital' }, className: 'node-ux-section' },
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

    // Layout → Secciones de navegación
    { id: 'e_1_ts', source: 's1_layout', target: 's3_header', label: '/timesheets', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },
    { id: 'e_1_dash', source: 's1_layout', target: 's2_header', label: '/ (default)', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },
    { id: 'e_1_nom', source: 's1_layout', target: 's5_header', label: '/nomina', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },
    { id: 'e_1_inv', source: 's1_layout', target: 's7_header', label: '/invoices', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },

    // ══════════════════════════════════════════════
    // 2. DASHBOARD CONTABILIDAD
    // ══════════════════════════════════════════════
    { id: 'e_2a', source: 's2_header', target: 's2_kpis' },
    { id: 'e_2b', source: 's2_header', target: 's2_calendar' },
    { id: 'e_2c', source: 's2_kpis', target: 's2_status_bar' },
    { id: 'e_2d', source: 's2_calendar', target: 's2_quick_actions' },
    { id: 'e_2e', source: 's2_status_bar', target: 's2_quick_actions', style: { strokeDasharray: '5,5' } },

    // ══════════════════════════════════════════════
    // 3. RECEPCIÓN DE TIMESHEETS
    // ══════════════════════════════════════════════
    { id: 'e_3a', source: 's3_header', target: 's3_list' },
    { id: 'e_3b', source: 's3_header', target: 's3_detail' },
    { id: 'e_3c', source: 's3_list', target: 's3_reminders' },
    { id: 'e_3d', source: 's3_detail', target: 's3_deadline' },
    { id: 'e_3e', source: 's3_list', target: 's3_detail', label: 'Tap hotel', style: { strokeDasharray: '5,5' } },
    { id: 'e_3f', source: 's3_reminders', target: 's3_confirm', style: { strokeDasharray: '5,5' } },
    { id: 'e_3g', source: 's3_deadline', target: 's3_confirm' },

    // ══════════════════════════════════════════════
    // 4. VALIDACIONES AUTOMÁTICAS
    // ══════════════════════════════════════════════
    { id: 'e_4a', source: 's4_header', target: 's4_overview' },
    { id: 'e_4b', source: 's4_header', target: 's4_12checks' },
    { id: 'e_4c', source: 's4_overview', target: 's4_traffic', label: 'Ver resultado' },
    { id: 'e_4d', source: 's4_12checks', target: 's4_traffic' },
    { id: 'e_4e', source: 's4_traffic', target: 's4_exception', label: 'Si ⚠️/❌', style: { stroke: '#f57f17' } },
    { id: 'e_4f', source: 's4_exception', target: 's4_approve', label: 'Resolver todos', style: { stroke: '#2e7d32' } },
    { id: 'e_4g', source: 's4_traffic', target: 's4_approve', label: 'Si todo ✅', style: { stroke: '#2e7d32', strokeDasharray: '5,5' } },

    // ══════════════════════════════════════════════
    // 5. CÁLCULO DE NÓMINA
    // ══════════════════════════════════════════════
    { id: 'e_5a', source: 's5_header', target: 's5_summary' },
    { id: 'e_5b', source: 's5_header', target: 's5_3files' },
    { id: 'e_5c', source: 's5_summary', target: 's5_review' },
    { id: 'e_5d', source: 's5_3files', target: 's5_review', style: { strokeDasharray: '5,5' } },
    { id: 'e_5e', source: 's5_review', target: 's5_send_dialog', label: 'Todo cuadra ✓', style: { stroke: '#2e7d32' } },
    { id: 'e_5f', source: 's5_send_dialog', target: 's5_sent_ok', label: 'Tap Enviar', style: { stroke: '#2e7d32' } },

    // ══════════════════════════════════════════════
    // 6. JOURNAL REVIEW
    // ══════════════════════════════════════════════
    { id: 'e_6a', source: 's6_header', target: 's6_waiting' },
    { id: 'e_6b', source: 's6_header', target: 's6_compare' },
    { id: 'e_6c', source: 's6_waiting', target: 's6_compare', label: 'Journal llega', style: { stroke: '#2e7d32' } },
    { id: 'e_6d', source: 's6_compare', target: 's6_decision' },
    { id: 'e_6e', source: 's6_decision', target: 's6_ok', label: 'Sí, todo 🟢', style: { stroke: '#2e7d32' } },
    { id: 'e_6f', source: 's6_decision', target: 's6_error', label: 'No, hay 🔴', style: { stroke: '#c62828' } },
    { id: 'e_6g', source: 's6_error', target: 's6_loop' },
    { id: 'e_6h', source: 's6_loop', target: 's6_waiting', label: '2do Journal', style: { strokeDasharray: '5,5', stroke: '#c62828' } },

    // ══════════════════════════════════════════════
    // 7. INVOICES
    // ══════════════════════════════════════════════
    { id: 'e_7a', source: 's7_header', target: 's7_list' },
    { id: 'e_7b', source: 's7_header', target: 's7_preview' },
    { id: 'e_7c', source: 's7_list', target: 's7_preview', label: 'Tap 👁️', style: { strokeDasharray: '5,5' } },
    { id: 'e_7d', source: 's7_list', target: 's7_send_all', label: 'Enviar todas' },
    { id: 'e_7e', source: 's7_list', target: 's7_send_single', label: 'Enviar una', style: { strokeDasharray: '5,5' } },
    { id: 'e_7f', source: 's7_send_all', target: 's7_sent_ok', label: 'Confirmar', style: { stroke: '#2e7d32' } },
    { id: 'e_7g', source: 's7_send_single', target: 's7_tracking' },
    { id: 'e_7h', source: 's7_sent_ok', target: 's7_tracking', style: { strokeDasharray: '5,5' } },

    // ══════════════════════════════════════════════
    // 8. VACACIONES
    // ══════════════════════════════════════════════
    { id: 'e_8a', source: 's8_header', target: 's8_inbox' },
    { id: 'e_8b', source: 's8_header', target: 's8_eligibility' },
    { id: 'e_8c', source: 's8_inbox', target: 's8_eligibility', label: 'Tap solicitud', style: { strokeDasharray: '5,5' } },
    { id: 'e_8d', source: 's8_eligibility', target: 's8_calc', label: 'Elegible ✓', style: { stroke: '#2e7d32' } },
    { id: 'e_8e', source: 's8_calc', target: 's8_decision' },
    { id: 'e_8f', source: 's8_decision', target: 's8_irene', label: '>32h → 40h', style: { stroke: '#2e7d32' } },
    { id: 'e_8g', source: 's8_decision', target: 's8_irene', label: '<32h → notificar', style: { stroke: '#f57f17', strokeDasharray: '5,5' } },
    { id: 'e_8h', source: 's8_irene', target: 's8_approved', label: 'Aprobada ✓', style: { stroke: '#2e7d32' } },
    { id: 'e_8i', source: 's8_irene', target: 's8_rejected', label: 'Rechazada ✗', style: { stroke: '#c62828' } },

    // ══════════════════════════════════════════════
    // 9. CHEQUES Y EXTEMPORÁNEOS
    // ══════════════════════════════════════════════
    { id: 'e_9a', source: 's9_header', target: 's9_list' },
    { id: 'e_9b', source: 's9_list', target: 's9_cancel_form', label: 'Tab Cancel' },
    { id: 'e_9c', source: 's9_list', target: 's9_extemp_form', label: 'Tab Extemp.' },
    { id: 'e_9d', source: 's9_cancel_form', target: 's9_sandra', label: 'Enviar', style: { stroke: '#2e7d32' } },
    { id: 'e_9e', source: 's9_extemp_form', target: 's9_auth_irene', label: 'Requiere auth' },
    { id: 'e_9f', source: 's9_auth_irene', target: 's9_sandra', label: 'Aprobado ✓', style: { stroke: '#2e7d32' } },
    { id: 'e_9g', source: 's9_sandra', target: 's9_ok' },

    // ══════════════════════════════════════════════
    // 10. DESCUENTOS Y CREDIT NOTES
    // ══════════════════════════════════════════════
    { id: 'e_10a', source: 's10_header', target: 's10_discounts' },
    { id: 'e_10b', source: 's10_header', target: 's10_add_disc' },
    { id: 'e_10c', source: 's10_discounts', target: 's10_cn_list', label: 'Si error invoice', style: { strokeDasharray: '5,5' } },
    { id: 'e_10d', source: 's10_add_disc', target: 's10_applied', label: 'Agregar', style: { stroke: '#2e7d32' } },
    { id: 'e_10e', source: 's10_cn_list', target: 's10_cn_form', label: 'Tap CN' },
    { id: 'e_10f', source: 's10_cn_form', target: 's10_applied', label: 'Generar CN', style: { stroke: '#2e7d32' } },

    // ══════════════════════════════════════════════
    // 11. PAYCHEX INTEGRATION
    // ══════════════════════════════════════════════
    { id: 'e_11a', source: 's11_header', target: 's11_ids' },
    { id: 'e_11b', source: 's11_header', target: 's11_create' },
    { id: 'e_11c', source: 's11_ids', target: 's11_deactivate', label: 'Tap Desactivar', style: { stroke: '#c62828' } },
    { id: 'e_11d', source: 's11_ids', target: 's11_workrecords', style: { strokeDasharray: '5,5' } },
    { id: 'e_11e', source: 's11_workrecords', target: 's11_wr_actions' },
    { id: 'e_11f', source: 's11_create', target: 's11_ids', label: 'ID creado ✓', style: { stroke: '#2e7d32', strokeDasharray: '5,5' } },

    // ══════════════════════════════════════════════
    // 12. REPORTES Y CARPETA SEMANAL
    // ══════════════════════════════════════════════
    { id: 'e_12a', source: 's12_header', target: 's12_auto_reports' },
    { id: 'e_12b', source: 's12_header', target: 's12_view_report' },
    { id: 'e_12c', source: 's12_auto_reports', target: 's12_carpeta' },
    { id: 'e_12d', source: 's12_view_report', target: 's12_monday' },
    { id: 'e_12e', source: 's12_auto_reports', target: 's12_view_report', label: 'Tap reporte', style: { strokeDasharray: '5,5' } },
    { id: 'e_12f', source: 's12_carpeta', target: 's12_export', style: { strokeDasharray: '5,5' } },
    { id: 'e_12g', source: 's12_monday', target: 's12_export' },

    // ══════════════════════════════════════════════
    // 13. NOTIFICACIONES Y ALERTAS
    // ══════════════════════════════════════════════
    { id: 'e_13a', source: 's13_header', target: 's13_bell' },
    { id: 'e_13b', source: 's13_header', target: 's13_panel' },
    { id: 'e_13c', source: 's13_bell', target: 's13_panel', label: 'Tap 🔔', style: { strokeDasharray: '5,5' } },
    { id: 'e_13d', source: 's13_panel', target: 's13_tap_action', label: 'Tap item' },
    { id: 'e_13e', source: 's13_panel', target: 's13_auto_alerts', style: { strokeDasharray: '5,5' } },

    // ══════════════════════════════════════════════
    // CROSS-SECTION CONNECTIONS
    // ══════════════════════════════════════════════

    // Dashboard quick actions → specific sections
    { id: 'e_cross_dash_ts', source: 's2_quick_actions', target: 's3_header', label: 'Ver TS Faltantes', style: { strokeDasharray: '8,4', stroke: '#00695c', strokeWidth: 2 } },
    { id: 'e_cross_dash_nom', source: 's2_quick_actions', target: 's5_header', label: 'Enviar Nómina', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },
    { id: 'e_cross_dash_inv', source: 's2_quick_actions', target: 's7_header', label: 'Enviar Invoices', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },
    { id: 'e_cross_dash_rep', source: 's2_quick_actions', target: 's12_header', label: 'Reporte Semanal', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },

    // TS confirm → Validaciones (flow natural)
    { id: 'e_cross_ts_val', source: 's3_confirm', target: 's4_header', label: 'TS recibidos\n→ Validar', style: { strokeDasharray: '8,4', stroke: '#00695c', strokeWidth: 2 } },

    // Validaciones approve → Nómina (flow natural)
    { id: 'e_cross_val_nom', source: 's4_approve', target: 's5_header', label: 'Validado\n→ Calcular nómina', style: { strokeDasharray: '8,4', stroke: '#00695c', strokeWidth: 2 } },

    // Nómina sent → Journal (flow natural)
    { id: 'e_cross_nom_jnl', source: 's5_sent_ok', target: 's6_header', label: 'Nómina enviada\n→ Esperar Journal', style: { strokeDasharray: '8,4', stroke: '#00695c', strokeWidth: 2 } },

    // Journal OK → Invoices + Vacaciones + Cheques
    { id: 'e_cross_jnl_inv', source: 's6_ok', target: 's7_header', label: 'Nómina OK\n→ Enviar Invoices', style: { strokeDasharray: '8,4', stroke: '#00695c', strokeWidth: 2 } },
    { id: 'e_cross_jnl_vac', source: 's6_ok', target: 's8_header', label: 'Procesar\nvacaciones', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },
    { id: 'e_cross_jnl_chq', source: 's6_ok', target: 's9_header', label: 'Procesar\ncheques', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },

    // Validaciones exceptions → Paychex (crear ID faltante)
    { id: 'e_cross_val_pay', source: 's4_exception', target: 's11_header', label: 'Sin ID Paychex\n→ Crear', style: { strokeDasharray: '8,4', stroke: '#f57f17' } },

    // Descuentos ← Monday uniforms
    { id: 'e_cross_mon_disc', source: 's12_monday', target: 's10_header', label: 'Uniformes\n→ Descuento', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },

    // Bell → Notificaciones
    { id: 'e_cross_bell_notif', source: 's1_layout', target: 's13_header', label: 'Tap 🔔', style: { strokeDasharray: '8,4', stroke: '#f57f17', strokeWidth: 2 } },

    // Notif deep link → Journal
    { id: 'e_cross_notif_jnl', source: 's13_tap_action', target: 's6_compare', label: 'Deep link\n/nomina/journal', style: { strokeDasharray: '8,4', stroke: '#ff6f00' } },

    // Cheques → Sandra → Paychex
    { id: 'e_cross_chq_pay', source: 's9_sandra', target: 's11_header', label: 'Refleja en\nPaychex', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },

    // Vacaciones approved → Nómina separate check
    { id: 'e_cross_vac_nom', source: 's8_approved', target: 's5_header', label: 'Separate Check', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },

    // ══════════════════════════════════════════════
    // CONVERGENCIA → FIN
    // ══════════════════════════════════════════════
    { id: 'e_end1', source: 's7_tracking', target: 'end', style: { strokeDasharray: '5,5' } },
    { id: 'e_end2', source: 's10_applied', target: 'end', style: { strokeDasharray: '5,5' } },
    { id: 'e_end3', source: 's11_wr_actions', target: 'end', style: { strokeDasharray: '5,5' } },
    { id: 'e_end4', source: 's12_export', target: 'end' },
    { id: 'e_end5', source: 's13_auto_alerts', target: 'end', style: { strokeDasharray: '5,5' } },
    { id: 'e_end6', source: 's9_ok', target: 'end', style: { strokeDasharray: '5,5' } },
    { id: 'e_end7', source: 's8_approved', target: 'end', style: { strokeDasharray: '5,5' } },
    { id: 'e_end8', source: 's8_rejected', target: 'end', style: { strokeDasharray: '5,5' } },
  ]
}

export default contabilidadUXFlow
