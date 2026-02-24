// ═══════════════════════════════════════════════════════════════════════
// USER EXPERIENCE: ADMIN ORANGE / DIRECCIÓN (Silvia / Irene)
// Pantalla por pantalla: todo lo que ve y hace Dirección en el sistema
// Basado en: Rol flow (10 secciones) + Digital flow (9 secciones)
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
// SECCIONES (11):
//   1.  Login y Acceso Dirección
//   2.  Dashboard Ejecutivo (KPIs + Alertas + Cola Aprobaciones)
//   3.  Aprobación de Nómina (Jueves 12-3PM, 2FA, procesamiento)
//   4.  Aprobaciones Especiales (Vacaciones, Reembolso 16%, Extemporáneos)
//   5.  Cuentas Bancarias (SOLO Dirección, verificación, 2FA)
//   6.  Blacklist Workflow (Triggers, Expediente, Decisión)
//   7.  Gestión de Personal (Pools, Semáforo, Strikes)
//   8.  Business Dev & Onboarding Hotel (Pipeline, Contrato, Setup)
//   9.  Gestión de Contratos (Vencimientos, Alertas, Renovar/No-Renovar)
//  10.  Seguridad y Control (RBAC, 2FA, Audit Trail)
//  11.  KPIs y Métricas (Operación, Financiero, Satisfacción, Estrategia)
//
// ═══════════════════════════════════════════════════════════════════════

const adminOrangeUXFlow = {
  nodes: [
    // ── INICIO ──
    { id: 'start', type: 'input', position: { x: 500, y: 0 }, data: { label: '👔 Admin Orange UX\n(Silvia / Irene)\nDirección\n11 Secciones' }, className: 'node-ux-section' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 1: LOGIN Y ACCESO DIRECCIÓN
    // ═══════════════════════════════════════════════════════
    { id: 's1_header', type: 'default', position: { x: 50, y: 150 }, data: { label: '🔐 1. LOGIN\nY ACCESO' }, className: 'node-ux-section' },

    { id: 's1_login', type: 'default', position: { x: -100, y: 310 }, data: { label: '🔐 Pantalla Login:\n• Campo Email*\n• Campo Contraseña*\n• [Iniciar Sesión] botón\n• Logo Orange 🍊\n• Rol: Dirección\n  (Silvia o Irene)' }, className: 'node-ux-form' },

    { id: 's1_auth', type: 'default', position: { x: 70, y: 310 }, data: { label: '⚙️ Sistema verifica:\n→ Credenciales válidas?\n→ 2FA obligatorio\n  (código SMS/app)\n→ Rol = dirección\n  → permisos máximos\n→ Si sesión activa\n  → skip login' }, className: 'node-ux-system' },

    { id: 's1_error', type: 'default', position: { x: 240, y: 310 }, data: { label: '❌ Error Login:\n"Credenciales inválidas"\nSnackbar rojo 3s\n→ Campos se mantienen\n→ 2FA incorrecto:\n  "Código inválido,\n  intente de nuevo"' }, className: 'node-ux-feedback' },

    { id: 's1_layout', type: 'default', position: { x: 70, y: 510 }, data: { label: '📱 Layout Dirección:\n━━━━━━━━━━━━━\nAppBar superior:\n• 🍊 Logo Orange\n• 🔔 Alertas (badge #)\n• 👤 Mi Perfil\nMenú ejecutivo:\n/ Dashboard\n/nomina\n/aprobaciones\n/personal\n/bancos\n/blacklist\n/hoteles\n/contratos\n/metricas\n/seguridad' }, className: 'node-ux-screen' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 2: DASHBOARD EJECUTIVO
    // ═══════════════════════════════════════════════════════
    { id: 's2_header', type: 'default', position: { x: 450, y: 150 }, data: { label: '📊 2. DASHBOARD\nEJECUTIVO' }, className: 'node-ux-section' },

    { id: 's2_overview', type: 'default', position: { x: 380, y: 310 }, data: { label: '📊 Overview Cards:\n4 KPI cards principales:\n━━━━━━━━━━━━━\n🏨 39 Hoteles activos\n👥 187 Empleados activos\n📋 12 Requisiciones abiertas\n🔴 5 Alertas pendientes\n━━━━━━━━━━━━━\nCada card: valor grande\n+ trend arrow ↑↓\n+ % vs semana anterior' }, className: 'node-ux-screen' },

    { id: 's2_financiero', type: 'default', position: { x: 600, y: 310 }, data: { label: '💰 Panel Financiero:\n━━━━━━━━━━━━━\n📈 Facturado: $142,500\n  (bill rate total/sem)\n💵 Pagado: $105,300\n  (pay rate total/sem)\n📊 Margen: $37,200\n  = 26.1% 🟡\n━━━━━━━━━━━━━\nMeta: 30-35%\nBarChart por hotel\n→ Click = detalle hotel' }, className: 'node-ux-screen' },

    { id: 's2_alertas', type: 'default', position: { x: 380, y: 530 }, data: { label: '🔔 Centro de Alertas:\nBandeja unificada:\n━━━━━━━━━━━━━\n🔴 Nómina pendiente (1)\n🔴 Cuenta banco pendiente (2)\n🟡 Contratos por vencer (3)\n🟡 Vacaciones pendientes (4)\n🟢 Blacklist por revisar (1)\n━━━━━━━━━━━━━\nPush notifications:\nVibracion + sonido\nTap = ir a acción' }, className: 'node-ux-screen' },

    { id: 's2_cola', type: 'default', position: { x: 600, y: 530 }, data: { label: '✅ Cola Aprobaciones:\nBandeja 1-click:\n━━━━━━━━━━━━━\n💰 Nómina Semanal\n  [Revisar →]\n🏖️ Vacaciones (4)\n  [Ver Lista →]\n🏦 Cambios Banco (2)\n  [Revisar →]\n🚫 Blacklist (1)\n  [Decidir →]\n━━━━━━━━━━━━━\nBadge rojo = urgente\nCada item: 1-click access' }, className: 'node-ux-action' },

    { id: 's2_rotacion', type: 'default', position: { x: 490, y: 730 }, data: { label: '📉 Widget Rotación:\n━━━━━━━━━━━━━\n🆕 Nuevos esta semana: 8\n🚪 Salieron esta semana: 3\n📊 Tasa mensual: 12%\n━━━━━━━━━━━━━\n% >72h activos: 82%\n% >1 mes: 68%\n% >6 meses: 41%\n→ LineChart tendencia\n→ Hover = detalle' }, className: 'node-ux-screen' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 3: APROBACIÓN DE NÓMINA
    // ═══════════════════════════════════════════════════════
    { id: 's3_header', type: 'default', position: { x: 50, y: 900 }, data: { label: '💰 3. APROBACIÓN\nDE NÓMINA' }, className: 'node-ux-section' },

    { id: 's3_notif', type: 'default', position: { x: -100, y: 1070 }, data: { label: '🔔 Notificación Jueves:\nPush automático 12:00 PM:\n"Nómina lista para\nrevisión"\n━━━━━━━━━━━━━\n✅ 12/12 validaciones OK\n  (pre-verificado por\n  Mónica / Contabilidad)\n→ Tap [Revisar Nómina]' }, className: 'node-ux-feedback' },

    { id: 's3_dashboard', type: 'default', position: { x: 120, y: 1070 }, data: { label: '📊 Dashboard Nómina:\nVista resumen:\n━━━━━━━━━━━━━\n💰 Total: $105,300.00\n👥 Empleados: 187\n✅ Validados: 100%\n⚠️ Anomalías: 3\n━━━━━━━━━━━━━\n3 archivos adjuntos:\n📎 pre-nómina.xlsx\n📎 excepciones.xlsx\n📎 totales_hotel.xlsx' }, className: 'node-ux-screen' },

    { id: 's3_anomalias', type: 'default', position: { x: -100, y: 1280 }, data: { label: '⚠️ Panel Anomalías:\nAuto-detectadas:\n━━━━━━━━━━━━━\n1. Juan R: >12h sin break\n   Hotel Marriott\n2. Ana L: variación +32%\n   vs promedio 4 semanas\n3. Pedro M: nuevo, sin\n   cuenta bancaria\n━━━━━━━━━━━━━\nCada una: expandible\ncon detalle y evidencia' }, className: 'node-ux-screen' },

    { id: 's3_decision', type: 'default', position: { x: 120, y: 1280 }, data: { label: '❓ ¿Aprobar Nómina?\nRevisión final:\n━━━━━━━━━━━━━\nTotales correctos?\nExcepciones justificadas?\nAnomaliás resueltas?\n━━━━━━━━━━━━━\n[✅ Aprobar con 2FA]\n[❌ Rechazar con Razón]' }, className: 'node-ux-decision' },

    { id: 's3_aprobar', type: 'default', position: { x: -100, y: 1480 }, data: { label: '✅ Aprobar Nómina:\n1. Tap [Aprobar]\n2. 2FA: código SMS/app\n3. Firma digital\n   (timestamp inmutable)\n━━━━━━━━━━━━━\n✅ "Nómina aprobada\nJue 14:35:22"\nIrrevocable, con audit' }, className: 'node-ux-action' },

    { id: 's3_rechazar', type: 'default', position: { x: 120, y: 1480 }, data: { label: '❌ Rechazar Nómina:\nModal con campo:\n"Razón del rechazo:"\n[textarea obligatorio]\n━━━━━━━━━━━━━\n→ SLA 2h para corregir\n→ Notifica a Mónica\n  inmediatamente\n→ "Nómina rechazada\n  por: [razón]"' }, className: 'node-ux-feedback' },

    { id: 's3_procesamiento', type: 'default', position: { x: -100, y: 1680 }, data: { label: '⚙️ Procesamiento Auto:\nJue 3:00 PM → 11:00 PM\n━━━━━━━━━━━━━\n→ ACH transfers\n→ Cheques vía Paychex\n→ Progress bar visible\n  "Procesando 187/187"\n━━━━━━━━━━━━━\n✅ VIE 5:00 AM\n"Dinero disponible\npara empleados"' }, className: 'node-ux-system' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 4: APROBACIONES ESPECIALES
    // ═══════════════════════════════════════════════════════
    { id: 's4_header', type: 'default', position: { x: 450, y: 900 }, data: { label: '🏖️ 4. APROBACIONES\nESPECIALES' }, className: 'node-ux-section' },

    { id: 's4_vacaciones', type: 'default', position: { x: 380, y: 1070 }, data: { label: '🏖️ Vacaciones:\n🔴 TODOS requieren\naprobación Irene/Dir\n━━━━━━━━━━━━━\nCard solicitud:\n👤 María García\n📅 Solicita: 15-22 Ene\n✅ 52 sem continuas: Sí\n✅ Prom >32h/sem: 38h\n⏰ Horas disponibles: 40h\n━━━━━━━━━━━━━\nPre-validado por sistema\n[✅ Aprobar] [❌ Rechazar]' }, className: 'node-ux-screen' },

    { id: 's4_vac_decision', type: 'default', position: { x: 600, y: 1070 }, data: { label: '❓ Vacaciones:\n¿Aprobar solicitud?\n━━━━━━━━━━━━━\n✅ Requisitos cumplidos\n⚠️ Verificar cobertura\n  del puesto durante\n  ausencia\n━━━━━━━━━━━━━\n1-click: [Aprobar]\n→ Notifica empleado\n→ Notifica inspector\n→ Bloquea calendario' }, className: 'node-ux-decision' },

    { id: 's4_reembolso', type: 'default', position: { x: 380, y: 1280 }, data: { label: '💰 Reembolso 16%:\nCuando empleado entrega\nTax ID / SSN:\n━━━━━━━━━━━━━\n👤 Juan Rodríguez\n📄 Tax ID entregado: ✅\n📅 Retención desde: Mar\n💰 Monto acumulado: $842\n⏰ Año fiscal: 2025\n━━━━━━━━━━━━━\n⚠️ Alertas: 🟡60d 🟠30d\n🔴15d → 31 Dic PIERDE\n[Aprobar Reembolso]' }, className: 'node-ux-screen' },

    { id: 's4_extemporaneo', type: 'default', position: { x: 600, y: 1280 }, data: { label: '📝 Cheque Extemporáneo:\nAutorización Irene\nvía WhatsApp con Karina:\n━━━━━━━━━━━━━\n👤 Empleado: Ana López\n💰 Monto: $320.00\n📝 Razón: error nómina\n📱 WhatsApp a Karina:\n  "Autorizo cheque\n  extemporáneo $320\n  para Ana López"\n→ Karina procesa' }, className: 'node-ux-form' },

    { id: 's4_feedback', type: 'default', position: { x: 490, y: 1480 }, data: { label: '✅ Aprobación Especial:\nSnackbar verde:\n"Aprobación procesada"\n━━━━━━━━━━━━━\n→ Vacación: empleado\n  notificado + calendario\n→ Reembolso: en próxima\n  nómina automáticamente\n→ Extemporáneo: Karina\n  confirma emisión' }, className: 'node-ux-feedback' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 5: CUENTAS BANCARIAS
    // ═══════════════════════════════════════════════════════
    { id: 's5_header', type: 'default', position: { x: 850, y: 150 }, data: { label: '🏦 5. CUENTAS\nBANCARIAS' }, className: 'node-ux-section' },

    { id: 's5_restriccion', type: 'default', position: { x: 830, y: 310 }, data: { label: '🔒 Restricción Total:\n━━━━━━━━━━━━━\nSOLO Dirección puede\nmodificar cuentas\n━━━━━━━━━━━━━\n❌ Mónica NO\n❌ Calidad NO\n❌ Reclutamiento NO\n❌ Empleado NO\n━━━━━━━━━━━━━\nPrevenir fraudes\nResponsabilidad clara' }, className: 'node-ux-feedback' },

    { id: 's5_solicitud', type: 'default', position: { x: 1060, y: 310 }, data: { label: '📋 Solicitud Cambio:\nEmpleado solicita en app:\n━━━━━━━━━━━━━\n👤 Pedro Martínez\n🏦 Banco actual: Chase\n🏦 Nuevo: Bank of America\n📝 Razón: cambio de banco\n📷 Selfie + ID verificado\n━━━━━━━━━━━━━\nTicket formal automático\n→ Notifica a Dirección' }, className: 'node-ux-screen' },

    { id: 's5_verificar', type: 'default', position: { x: 830, y: 530 }, data: { label: '🔍 Verificación:\nDirección revisa:\n━━━━━━━━━━━━━\n✅ Identidad confirmada\n  (selfie + ID match)\n✅ Razón razonable\n✅ Datos bancarios\n  completos\n━━━━━━━━━━━━━\n[✅ Aprobar + 2FA]\n[❌ Rechazar con razón]' }, className: 'node-ux-decision' },

    { id: 's5_aprobar', type: 'default', position: { x: 830, y: 740 }, data: { label: '✅ Aprobar Cambio:\n1. Tap [Aprobar]\n2. 2FA obligatorio\n3. Validación $0.01\n   (depósito prueba)\n━━━━━━━━━━━━━\n→ Cuenta anterior\n  → INVALIDADA\n→ Nueva cuenta activa\n→ Audit: IP+dispositivo\n→ ✅ "Cuenta actualizada"' }, className: 'node-ux-action' },

    { id: 's5_rechazar', type: 'default', position: { x: 1060, y: 740 }, data: { label: '❌ Rechazar Cambio:\n"Solicitud rechazada"\nModal: razón obligatoria\n━━━━━━━━━━━━━\n→ Notifica al empleado:\n  "Tu solicitud de cambio\n  fue rechazada: [razón]"\n→ Cuenta actual permanece\n→ Puede re-solicitar' }, className: 'node-ux-feedback' },

    { id: 's5_audit', type: 'default', position: { x: 945, y: 930 }, data: { label: '📋 Auditoría Completa:\nRegistro inmutable:\n━━━━━━━━━━━━━\n📅 Fecha/hora exacta\n👤 Quién aprobó\n🔐 2FA verificado\n💻 IP + dispositivo\n🏦 Banco anterior\n🏦 Banco nuevo\n📝 Razón del cambio\n━━━━━━━━━━━━━\nExportable para auditors' }, className: 'node-ux-system' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 6: BLACKLIST WORKFLOW
    // ═══════════════════════════════════════════════════════
    { id: 's6_header', type: 'default', position: { x: 50, y: 1860 }, data: { label: '🚫 6. BLACKLIST\nWORKFLOW' }, className: 'node-ux-section' },

    { id: 's6_triggers', type: 'default', position: { x: -100, y: 2030 }, data: { label: '⚡ Triggers Automáticos:\nSistema detecta:\n━━━━━━━━━━━━━\n🔴 3 No-Shows acumulados\n🔴 3 Strikes de inspector\n🔴 Fraude detectado\n🔴 Hotel solicita retiro\n━━━━━━━━━━━━━\n→ Auto-genera expediente\n→ Notificación push a\n  Dirección con urgencia' }, className: 'node-ux-system' },

    { id: 's6_expediente', type: 'default', position: { x: 120, y: 2030 }, data: { label: '📁 Expediente Digital:\nGenerado automáticamente:\n━━━━━━━━━━━━━\n👤 Juan Rodríguez\n📊 Historial completo\n📋 Evaluaciones inspector\n🚩 Incidentes (3)\n📎 Evidencia adjunta\n🤖 Recomendación sistema:\n  "Blacklist Global"\n━━━━━━━━━━━━━\nTodo en una sola vista' }, className: 'node-ux-screen' },

    { id: 's6_decision', type: 'default', position: { x: 10, y: 2240 }, data: { label: '❓ Decisión Blacklist:\n¿Qué acción tomar?\n━━━━━━━━━━━━━\n1. 🏨 BL Solo Hotel\n   (no puede en ESE hotel)\n2. 🌐 BL Global\n   (ningún hotel Orange)\n3. ⏸️ Suspensión Temporal\n   (revisar en 30 días)\n4. ❌ Rechazar\n   (no aplica BL)' }, className: 'node-ux-decision' },

    { id: 's6_bl_hotel', type: 'default', position: { x: -150, y: 2440 }, data: { label: '🏨 Blacklist Hotel:\n1-click + notas\n"Juan R. → BL en\nHotel Marriott DT"\n→ No aparece en\n  matching para ESE hotel\n→ Puede seguir en otros\n→ Notifica: inspector,\n  hotel, reclutadora' }, className: 'node-ux-action' },

    { id: 's6_bl_global', type: 'default', position: { x: 50, y: 2440 }, data: { label: '🌐 Blacklist Global:\n1-click + notas + 2FA\n"Juan R. → BL\nTODOS los hoteles"\n→ PERMANENTE\n→ Desactivar Paychex\n→ Notifica TODOS roles\n→ Solo Dirección puede\n  revertir (excepcional)' }, className: 'node-ux-action' },

    { id: 's6_suspension', type: 'default', position: { x: 240, y: 2440 }, data: { label: '⏸️ Suspensión Temporal:\n"Suspendido 30 días"\n→ No disponible para\n  asignaciones\n→ Alerta automática\n  en 30 días: "Revisar\n  caso de Juan R."\n→ Decisión final\n  pendiente' }, className: 'node-ux-feedback' },

    { id: 's6_notifica', type: 'default', position: { x: 50, y: 2630 }, data: { label: '📢 Notificación Roles:\nAuto-notifica:\n━━━━━━━━━━━━━\n👷 Inspector del hotel\n📋 Reclutadora\n🏨 Admin Hotel\n💼 Contabilidad\n━━━━━━━━━━━━━\nCada uno recibe notif\nen su app con detalle\ny acción correspondiente' }, className: 'node-ux-system' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 7: GESTIÓN DE PERSONAL
    // ═══════════════════════════════════════════════════════
    { id: 's7_header', type: 'default', position: { x: 450, y: 1860 }, data: { label: '👥 7. GESTIÓN\nDE PERSONAL' }, className: 'node-ux-section' },

    { id: 's7_vista', type: 'default', position: { x: 380, y: 2030 }, data: { label: '👥 Vista General:\nTodos los empleados:\n━━━━━━━━━━━━━\n👥 Total: 187 activos\n🏨 En 39 hoteles\n📊 % Cobertura: 94%\n━━━━━━━━━━━━━\nFiltros rápidos:\n• Por hotel\n• Por posición\n• Por semáforo\n• Por antigüedad\n→ Tabla sortable' }, className: 'node-ux-screen' },

    { id: 's7_pools', type: 'default', position: { x: 600, y: 2030 }, data: { label: '📦 3 Pools:\n3 tabs horizontales:\n━━━━━━━━━━━━━\n📥 Recepción Nuevos (15)\n  Recién contratados\n✅ Activos (187)\n  Trabajando actualmente\n🤝 Colaboradores (42)\n  Pool disponible\n━━━━━━━━━━━━━\nCada pool: lista cards\ncon semáforo visible' }, className: 'node-ux-screen' },

    { id: 's7_semaforo', type: 'default', position: { x: 380, y: 2240 }, data: { label: '🚦 Semáforo Empleados:\nBasado en % app usage:\n━━━━━━━━━━━━━\n🟢 App ≥60%\n  → Listo para pago\n  → Sin problemas\n🟡 App 40-60%\n  → Advertencia\n  → Inspector ayuda\n🔴 App <40%\n  → NO pagables\n  → STRIKE si >72h\n━━━━━━━━━━━━━\nBadge color en cada card' }, className: 'node-ux-screen' },

    { id: 's7_strikes', type: 'default', position: { x: 600, y: 2240 }, data: { label: '⚡ Sistema de Strikes:\nCard alerta:\n━━━━━━━━━━━━━\n👤 Carlos M.\n🔴 2/3 Strikes\n  1. No-show 12 Ene\n  2. Evaluación <40%\n━━━━━━━━━━━━━\n⚠️ "Próximo strike\n= Blacklist automático"\n→ [Ver Expediente]\n→ [Hablar con Inspector]' }, className: 'node-ux-feedback' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 8: BUSINESS DEV & ONBOARDING HOTEL
    // ═══════════════════════════════════════════════════════
    { id: 's8_header', type: 'default', position: { x: 850, y: 1100 }, data: { label: '🏨 8. BUSINESS DEV\n& ONBOARDING' }, className: 'node-ux-section' },

    { id: 's8_pipeline', type: 'default', position: { x: 830, y: 1270 }, data: { label: '📈 Pipeline CRM:\nKanban de ventas:\n━━━━━━━━━━━━━\n🟡 Prospecto (3)\n  Hotel Grand, Westin...\n🔵 Negociación (2)\n  Hilton Garden, IHG...\n🟢 Propuesta (1)\n  Hyatt Place\n✅ Cerrado (39 activos)\n━━━━━━━━━━━━━\nDrag card entre columnas\n→ Click = ver detalle' }, className: 'node-ux-screen' },

    { id: 's8_negociacion', type: 'default', position: { x: 1060, y: 1270 }, data: { label: '💼 Negociación Hotel:\nDetalle del prospecto:\n━━━━━━━━━━━━━\n🏨 Hilton Garden Inn\n👤 Contacto: GM John S.\n📍 Downtown, Miami\n━━━━━━━━━━━━━\nDefinir rates por posición:\n🧹 HK: Bill $19.58 / Pay $15\n🧹 HM: Bill $18.00 / Pay $14\n📊 Margen objetivo: 30-35%\n→ [Generar Propuesta]' }, className: 'node-ux-form' },

    { id: 's8_contrato', type: 'default', position: { x: 830, y: 1480 }, data: { label: '📝 Firma Contrato:\nContrato digital:\n━━━━━━━━━━━━━\nService Contract\nOrange ↔ Hilton Garden\nVigencia: 12 meses\nFirma electrónica ✍️\n━━━━━━━━━━━━━\n→ Auto-crea:\n  • Carpeta payroll\n  • Rates configurados\n  • Estructura posiciones' }, className: 'node-ux-action' },

    { id: 's8_setup', type: 'default', position: { x: 1060, y: 1480 }, data: { label: '⚙️ Setup Automático:\nAl firmar contrato:\n━━━━━━━━━━━━━\n→ Generar credenciales\n  admin del hotel\n→ Email bienvenida con:\n  • Login portal hotel\n  • Video tutorials\n  • Contacto de soporte\n→ Hotel listo en horas\n  (antes: días)\n✅ "Hotel activado"' }, className: 'node-ux-system' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 9: GESTIÓN DE CONTRATOS
    // ═══════════════════════════════════════════════════════
    { id: 's9_header', type: 'default', position: { x: 850, y: 1860 }, data: { label: '📄 9. GESTIÓN\nDE CONTRATOS' }, className: 'node-ux-section' },

    { id: 's9_tracking', type: 'default', position: { x: 830, y: 2030 }, data: { label: '📄 Tracking Contratos:\nTabla de contratos:\n━━━━━━━━━━━━━\nHotel | Vence | Status\nMarriott | Mar 25 | 🟢\nHilton | Feb 25 | 🟡 60d\nHyatt | Ene 25 | 🔴 15d\n━━━━━━━━━━━━━\nRenovación anual\nSortable por vencimiento\nFiltro: activos/por vencer' }, className: 'node-ux-screen' },

    { id: 's9_alertas', type: 'default', position: { x: 1060, y: 2030 }, data: { label: '🔔 Alertas Escalonadas:\nProgresivas automáticas:\n━━━━━━━━━━━━━\n🟡 90 días: info\n🟠 60 días: atención\n🔴 30 días: urgente\n📛 15 días: CRÍTICO\n━━━━━━━━━━━━━\nCada alerta = push\n+ email + banner en\ndashboard\n→ Tap = ver contrato' }, className: 'node-ux-feedback' },

    { id: 's9_decision', type: 'default', position: { x: 945, y: 2240 }, data: { label: '❓ ¿Renovar Contrato?\n━━━━━━━━━━━━━\n📊 Datos del hotel:\n• Requisiciones último año\n• Pagos al día?\n• Quejas/incidentes\n• Satisfacción NPS\n━━━━━━━━━━━━━\n[🔄 Renovar]\n[❌ No Renovar]' }, className: 'node-ux-decision' },

    { id: 's9_renovar', type: 'default', position: { x: 830, y: 2440 }, data: { label: '🔄 Renovar Contrato:\n¿Renegociar rates?\n━━━━━━━━━━━━━\nFirma digital renovación\n→ Auto-actualiza:\n  • Vigencia +12 meses\n  • Rates (si cambiaron)\n  • Notifica al hotel\n✅ "Contrato renovado\nhasta Mar 2026"' }, className: 'node-ux-action' },

    { id: 's9_no_renovar', type: 'default', position: { x: 1060, y: 2440 }, data: { label: '❌ No Renovar:\nProceso de cierre:\n━━━━━━━━━━━━━\n→ Reasignar empleados\n  activos en ese hotel\n→ Cerrar carpeta payroll\n→ Notificar al hotel\n→ Archivar contrato\n━━━━━━━━━━━━━\n⚠️ "Contrato Hyatt\nno renovado - cierre\nen proceso"' }, className: 'node-ux-feedback' },

    { id: 's9_riesgo', type: 'default', position: { x: 945, y: 2630 }, data: { label: '⚠️ Contratos en Riesgo:\nAuto-detectados:\n━━━━━━━━━━━━━\n🔴 Pocas requisiciones\n  (Hotel ABC: 0 en 60d)\n🔴 Quejas recurrentes\n🔴 Pagos atrasados\n━━━━━━━━━━━━━\n→ [Contactar GM]\n→ [Agendar reunión]\n→ Acción preventiva' }, className: 'node-ux-screen' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 10: SEGURIDAD Y CONTROL
    // ═══════════════════════════════════════════════════════
    { id: 's10_header', type: 'default', position: { x: 50, y: 2830 }, data: { label: '🔒 10. SEGURIDAD\nY CONTROL' }, className: 'node-ux-section' },

    { id: 's10_rbac', type: 'default', position: { x: -100, y: 3000 }, data: { label: '🔐 Separación Funciones:\nRBAC enforced por sistema:\n━━━━━━━━━━━━━\n📊 Contabilidad:\n  → NO aprueba nómina\n👔 Dirección:\n  → NO captura datos\n📋 Reclutamiento:\n  → NO modifica bancos\n━━━━━━━━━━━━━\nPermisos automáticos\nNo overridable' }, className: 'node-ux-screen' },

    { id: 's10_2fa', type: 'default', position: { x: 120, y: 3000 }, data: { label: '🔑 2FA Obligatorio:\nRequerido para:\n━━━━━━━━━━━━━\n💰 Aprobar nómina\n🏦 Modificar bancos\n🚫 Blacklist global\n📝 Firma contratos\n━━━━━━━━━━━━━\nMétodos:\n📱 App Authenticator\n📲 SMS código\n→ Timeout: 30 segundos' }, className: 'node-ux-screen' },

    { id: 's10_audit', type: 'default', position: { x: -100, y: 3200 }, data: { label: '📋 Audit Trail:\nRegistro inmutable:\n━━━━━━━━━━━━━\nCada acción registra:\n📅 Timestamp exacto\n👤 Quién (usuario)\n🔧 Qué (acción)\n📝 Detalle\n💻 IP + dispositivo\n━━━━━━━━━━━━━\nExportable PDF/Excel\nNo borrable\nPara auditorías externas' }, className: 'node-ux-screen' },

    { id: 's10_permisos', type: 'default', position: { x: 120, y: 3200 }, data: { label: '👔 Permisos Exclusivos:\nSOLO Dirección puede:\n━━━━━━━━━━━━━\n✅ Aprobar nómina\n✅ Modificar cuentas\n✅ Blacklist permanente\n✅ Firmar contratos\n✅ Ver audit trail\n✅ Modificar políticas\n━━━━━━━━━━━━━\nNadie más tiene acceso\na estas funciones' }, className: 'node-ux-feedback' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 11: KPIS Y MÉTRICAS
    // ═══════════════════════════════════════════════════════
    { id: 's11_header', type: 'default', position: { x: 450, y: 2830 }, data: { label: '📈 11. KPIs\nY MÉTRICAS' }, className: 'node-ux-section' },

    { id: 's11_operacion', type: 'default', position: { x: 380, y: 3000 }, data: { label: '📊 KPIs Operación:\n━━━━━━━━━━━━━\n🏨 39 Hoteles activos\n👥 187 Empleados\n📊 94% Cobertura\n⏱️ Tiempo cobertura:\n  promedio 18h\n━━━━━━━━━━━━━\nGauge charts circulares\nColor: 🟢>90% 🟡>75%\n🔴<75%\n→ Click = drill-down' }, className: 'node-ux-screen' },

    { id: 's11_financiero', type: 'default', position: { x: 600, y: 3000 }, data: { label: '💰 KPIs Financiero:\n━━━━━━━━━━━━━\n📈 Bill Rate total:\n  $142,500/sem\n💵 Pay Rate total:\n  $105,300/sem\n📊 Margen bruto: 26.1%\n💼 Costos operativos\n📊 Rentabilidad por hotel\n━━━━━━━━━━━━━\nBarChart comparativo\nTop 10 / Bottom 10\n🟢 Rentable / 🔴 No' }, className: 'node-ux-screen' },

    { id: 's11_satisfaccion', type: 'default', position: { x: 380, y: 3200 }, data: { label: '😊 KPIs Satisfacción:\n━━━━━━━━━━━━━\n⭐ NPS Hoteles: 72\n⭐ NPS Empleados: 65\n🚩 Quejas abiertas: 4\n🚩 Incidentes: 2\n✅ Resolución <24h: 85%\n━━━━━━━━━━━━━\nTrend charts mensuales\n🟢>70 🟡>50 🔴<50\n→ Click queja = detalle' }, className: 'node-ux-screen' },

    { id: 's11_estrategia', type: 'default', position: { x: 600, y: 3200 }, data: { label: '🎯 KPIs Estrategia:\n━━━━━━━━━━━━━\n📈 Pipeline ventas: 6\n⚠️ Contratos riesgo: 2\n📊 Temporal vs Fijo:\n  60% / 40%\n🌎 Expansión ciudades:\n  Miami ✅ Orlando 🔵\n📉 Tendencias trimestrales\n━━━━━━━━━━━━━\nDashboard estratégico\nReportes auto semanal' }, className: 'node-ux-screen' },

    { id: 's11_export', type: 'default', position: { x: 490, y: 3400 }, data: { label: '📤 Exportar Reportes:\nTap [📤 Exportar]:\n━━━━━━━━━━━━━\n📊 Excel completo\n📄 PDF ejecutivo\n📧 Email programado\n  (semanal automático)\n━━━━━━━━━━━━━\nContenido: todos los KPIs\n+ gráficas + tendencias\n→ reporte_direccion\n  _{fecha}.xlsx' }, className: 'node-ux-action' },

    // ── FIN ──
    { id: 'end', type: 'output', position: { x: 500, y: 3600 }, data: { label: '🏆 Admin Orange UX\nCompleto\n11 Secciones\n~80 Pantallas\n100% Cobertura\nDirección' }, className: 'node-ux-section' },
  ],

  edges: [
    // ══════════════════════════════════════════════
    // Inicio → Secciones principales
    // ══════════════════════════════════════════════
    { id: 'e_s1', source: 'start', target: 's1_header' },
    { id: 'e_s2', source: 'start', target: 's2_header' },
    { id: 'e_s5', source: 'start', target: 's5_header' },

    // ══════════════════════════════════════════════
    // 1. LOGIN Y ACCESO
    // ══════════════════════════════════════════════
    { id: 'e_1a', source: 's1_header', target: 's1_login' },
    { id: 'e_1b', source: 's1_header', target: 's1_auth' },
    { id: 'e_1c', source: 's1_login', target: 's1_error', label: 'Error', style: { stroke: '#c62828' } },
    { id: 'e_1d', source: 's1_login', target: 's1_layout', label: 'Login + 2FA OK', style: { stroke: '#2e7d32' } },
    { id: 'e_1e', source: 's1_auth', target: 's1_layout', label: 'Sesión activa', style: { strokeDasharray: '5,5' } },

    // Layout → Secciones navegación
    { id: 'e_1_dash', source: 's1_layout', target: 's2_header', label: '/ (default)', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },
    { id: 'e_1_nomina', source: 's1_layout', target: 's3_header', label: '/nomina', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },
    { id: 'e_1_aprob', source: 's1_layout', target: 's4_header', label: '/aprobaciones', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },
    { id: 'e_1_personal', source: 's1_layout', target: 's7_header', label: '/personal', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },
    { id: 'e_1_bancos', source: 's1_layout', target: 's5_header', label: '/bancos', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },

    // ══════════════════════════════════════════════
    // 2. DASHBOARD EJECUTIVO
    // ══════════════════════════════════════════════
    { id: 'e_2a', source: 's2_header', target: 's2_overview' },
    { id: 'e_2b', source: 's2_header', target: 's2_financiero' },
    { id: 'e_2c', source: 's2_overview', target: 's2_alertas' },
    { id: 'e_2d', source: 's2_financiero', target: 's2_cola' },
    { id: 'e_2e', source: 's2_alertas', target: 's2_rotacion' },
    { id: 'e_2f', source: 's2_cola', target: 's2_rotacion' },

    // Cola → Secciones de aprobación
    { id: 'e_2_nomina', source: 's2_cola', target: 's3_header', label: 'Revisar Nómina', style: { strokeDasharray: '8,4', stroke: '#c62828' } },
    { id: 'e_2_vac', source: 's2_cola', target: 's4_header', label: 'Ver Vacaciones', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },
    { id: 'e_2_banco', source: 's2_cola', target: 's5_header', label: 'Revisar Bancos', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },
    { id: 'e_2_bl', source: 's2_cola', target: 's6_header', label: 'Decidir Blacklist', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },

    // ══════════════════════════════════════════════
    // 3. APROBACIÓN DE NÓMINA
    // ══════════════════════════════════════════════
    { id: 'e_3a', source: 's3_header', target: 's3_notif' },
    { id: 'e_3b', source: 's3_header', target: 's3_dashboard' },
    { id: 'e_3c', source: 's3_notif', target: 's3_anomalias', label: 'Ver anomalías' },
    { id: 'e_3d', source: 's3_dashboard', target: 's3_decision', label: 'Revisar totales' },
    { id: 'e_3e', source: 's3_anomalias', target: 's3_decision' },
    { id: 'e_3f', source: 's3_decision', target: 's3_aprobar', label: 'Aprobar', style: { stroke: '#2e7d32' } },
    { id: 'e_3g', source: 's3_decision', target: 's3_rechazar', label: 'Rechazar', style: { stroke: '#c62828' } },
    { id: 'e_3h', source: 's3_aprobar', target: 's3_procesamiento', label: 'Con 2FA', style: { stroke: '#2e7d32' } },
    { id: 'e_3i', source: 's3_rechazar', target: 's3_notif', label: 'Corregir y volver', style: { stroke: '#c62828', strokeDasharray: '5,5' } },

    // ══════════════════════════════════════════════
    // 4. APROBACIONES ESPECIALES
    // ══════════════════════════════════════════════
    { id: 'e_4a', source: 's4_header', target: 's4_vacaciones' },
    { id: 'e_4b', source: 's4_header', target: 's4_vac_decision' },
    { id: 'e_4c', source: 's4_vacaciones', target: 's4_vac_decision', label: 'Revisar' },
    { id: 'e_4d', source: 's4_header', target: 's4_reembolso' },
    { id: 'e_4e', source: 's4_header', target: 's4_extemporaneo' },
    { id: 'e_4f', source: 's4_vac_decision', target: 's4_feedback', label: 'Aprobar', style: { stroke: '#2e7d32' } },
    { id: 'e_4g', source: 's4_reembolso', target: 's4_feedback', label: 'Aprobar', style: { stroke: '#2e7d32' } },
    { id: 'e_4h', source: 's4_extemporaneo', target: 's4_feedback', label: 'WhatsApp enviado', style: { strokeDasharray: '5,5' } },

    // ══════════════════════════════════════════════
    // 5. CUENTAS BANCARIAS
    // ══════════════════════════════════════════════
    { id: 'e_5a', source: 's5_header', target: 's5_restriccion' },
    { id: 'e_5b', source: 's5_header', target: 's5_solicitud' },
    { id: 'e_5c', source: 's5_solicitud', target: 's5_verificar', label: 'Revisar solicitud' },
    { id: 'e_5d', source: 's5_restriccion', target: 's5_verificar', style: { strokeDasharray: '5,5' } },
    { id: 'e_5e', source: 's5_verificar', target: 's5_aprobar', label: 'Aprobar + 2FA', style: { stroke: '#2e7d32' } },
    { id: 'e_5f', source: 's5_verificar', target: 's5_rechazar', label: 'Rechazar', style: { stroke: '#c62828' } },
    { id: 'e_5g', source: 's5_aprobar', target: 's5_audit', style: { stroke: '#2e7d32' } },
    { id: 'e_5h', source: 's5_rechazar', target: 's5_audit', style: { strokeDasharray: '5,5' } },

    // ══════════════════════════════════════════════
    // 6. BLACKLIST WORKFLOW
    // ══════════════════════════════════════════════
    { id: 'e_6a', source: 's6_header', target: 's6_triggers' },
    { id: 'e_6b', source: 's6_header', target: 's6_expediente' },
    { id: 'e_6c', source: 's6_triggers', target: 's6_expediente', label: 'Auto-genera', style: { strokeDasharray: '5,5' } },
    { id: 'e_6d', source: 's6_expediente', target: 's6_decision', label: 'Revisar caso' },
    { id: 'e_6e', source: 's6_decision', target: 's6_bl_hotel', label: 'Solo hotel', style: { stroke: '#f57f17' } },
    { id: 'e_6f', source: 's6_decision', target: 's6_bl_global', label: 'Global', style: { stroke: '#c62828' } },
    { id: 'e_6g', source: 's6_decision', target: 's6_suspension', label: 'Temporal', style: { stroke: '#f57f17', strokeDasharray: '5,5' } },
    { id: 'e_6h', source: 's6_bl_hotel', target: 's6_notifica', style: { strokeDasharray: '5,5' } },
    { id: 'e_6i', source: 's6_bl_global', target: 's6_notifica', style: { strokeDasharray: '5,5' } },
    { id: 'e_6j', source: 's6_suspension', target: 's6_notifica', style: { strokeDasharray: '5,5' } },

    // ══════════════════════════════════════════════
    // 7. GESTIÓN DE PERSONAL
    // ══════════════════════════════════════════════
    { id: 'e_7a', source: 's7_header', target: 's7_vista' },
    { id: 'e_7b', source: 's7_header', target: 's7_pools' },
    { id: 'e_7c', source: 's7_vista', target: 's7_semaforo', label: 'Ver semáforo' },
    { id: 'e_7d', source: 's7_pools', target: 's7_semaforo' },
    { id: 'e_7e', source: 's7_semaforo', target: 's7_strikes', label: '🔴 detectado', style: { stroke: '#c62828' } },
    { id: 'e_7f', source: 's7_strikes', target: 's6_header', label: '3 strikes → BL', style: { strokeDasharray: '8,4', stroke: '#c62828' } },

    // ══════════════════════════════════════════════
    // 8. BUSINESS DEV & ONBOARDING
    // ══════════════════════════════════════════════
    { id: 'e_8a', source: 's8_header', target: 's8_pipeline' },
    { id: 'e_8b', source: 's8_header', target: 's8_negociacion' },
    { id: 'e_8c', source: 's8_pipeline', target: 's8_negociacion', label: 'Drag a Negociación' },
    { id: 'e_8d', source: 's8_negociacion', target: 's8_contrato', label: 'Propuesta aceptada', style: { stroke: '#2e7d32' } },
    { id: 'e_8e', source: 's8_contrato', target: 's8_setup', label: 'Firma → auto-setup', style: { stroke: '#2e7d32' } },
    { id: 'e_8f', source: 's8_setup', target: 's9_header', label: 'Hotel activo', style: { strokeDasharray: '8,4', stroke: '#2e7d32' } },

    // ══════════════════════════════════════════════
    // 9. GESTIÓN DE CONTRATOS
    // ══════════════════════════════════════════════
    { id: 'e_9a', source: 's9_header', target: 's9_tracking' },
    { id: 'e_9b', source: 's9_header', target: 's9_alertas' },
    { id: 'e_9c', source: 's9_tracking', target: 's9_decision', label: 'Tap contrato' },
    { id: 'e_9d', source: 's9_alertas', target: 's9_decision', label: 'Alerta → revisar' },
    { id: 'e_9e', source: 's9_decision', target: 's9_renovar', label: 'Renovar', style: { stroke: '#2e7d32' } },
    { id: 'e_9f', source: 's9_decision', target: 's9_no_renovar', label: 'No renovar', style: { stroke: '#c62828' } },
    { id: 'e_9g', source: 's9_tracking', target: 's9_riesgo', label: 'Auto-detecta riesgo', style: { stroke: '#f57f17', strokeDasharray: '5,5' } },
    { id: 'e_9h', source: 's9_no_renovar', target: 's7_header', label: 'Reasignar empleados', style: { strokeDasharray: '8,4', stroke: '#c62828' } },

    // ══════════════════════════════════════════════
    // 10. SEGURIDAD Y CONTROL
    // ══════════════════════════════════════════════
    { id: 'e_10a', source: 's10_header', target: 's10_rbac' },
    { id: 'e_10b', source: 's10_header', target: 's10_2fa' },
    { id: 'e_10c', source: 's10_rbac', target: 's10_audit' },
    { id: 'e_10d', source: 's10_2fa', target: 's10_permisos' },
    { id: 'e_10e', source: 's10_audit', target: 'end', label: 'Log completo' },
    { id: 'e_10f', source: 's10_permisos', target: 'end' },

    // ══════════════════════════════════════════════
    // 11. KPIs Y MÉTRICAS
    // ══════════════════════════════════════════════
    { id: 'e_11a', source: 's11_header', target: 's11_operacion' },
    { id: 'e_11b', source: 's11_header', target: 's11_financiero' },
    { id: 'e_11c', source: 's11_operacion', target: 's11_satisfaccion' },
    { id: 'e_11d', source: 's11_financiero', target: 's11_estrategia' },
    { id: 'e_11e', source: 's11_satisfaccion', target: 's11_export' },
    { id: 'e_11f', source: 's11_estrategia', target: 's11_export' },
    { id: 'e_11g', source: 's11_export', target: 'end', label: 'Reportes listos' },

    // ══════════════════════════════════════════════
    // CROSS-SECTION CONNECTIONS
    // ══════════════════════════════════════════════

    // Dashboard alertas → Secciones específicas
    { id: 'e_cross_alert_nomina', source: 's2_alertas', target: 's3_header', label: '🔴 Nómina pendiente', style: { strokeDasharray: '8,4', stroke: '#c62828' } },
    { id: 'e_cross_alert_contrato', source: 's2_alertas', target: 's9_header', label: '🟡 Contrato por vencer', style: { strokeDasharray: '8,4', stroke: '#f57f17' } },

    // Nómina procesada → Métricas financieras
    { id: 'e_cross_nomina_fin', source: 's3_procesamiento', target: 's11_header', label: 'Alimenta KPIs', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },

    // Business Dev → Dashboard financiero
    { id: 'e_cross_biz_dash', source: 's8_contrato', target: 's2_financiero', label: 'Nuevo hotel → ingresos', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },

    // Blacklist → Personal (empleado removido)
    { id: 'e_cross_bl_personal', source: 's6_bl_global', target: 's7_header', label: 'Empleado desactivado', style: { strokeDasharray: '8,4', stroke: '#c62828' } },

    // Riesgo contratos → Business Dev (retención)
    { id: 'e_cross_riesgo_biz', source: 's9_riesgo', target: 's8_header', label: 'Renegociar', style: { strokeDasharray: '8,4', stroke: '#f57f17' } },

    // Layout → Seguridad y Métricas
    { id: 'e_1_seg', source: 's1_layout', target: 's10_header', label: '/seguridad', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },
    { id: 'e_1_met', source: 's1_layout', target: 's11_header', label: '/metricas', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },
  ]
}

export default adminOrangeUXFlow
