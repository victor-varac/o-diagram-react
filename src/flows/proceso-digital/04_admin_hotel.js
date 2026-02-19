// ═══════════════════════════════════════════════════════════════════════
// PROCESO DIGITAL: ADMIN HOTEL (CLIENTE)
// Nivel 2-3: Operativa + Automatización
// Portal del cliente: cómo cambia la experiencia del hotel
// ═══════════════════════════════════════════════════════════════════════
//
// SECCIONES:
//   1. Onboarding Digital como Cliente
//   2. Portal de Solicitud de Personal
//   3. Recibir y Gestionar Empleados
//   4. Reporte de Horas Digital
//   5. Incidentes y No-Show
//   6. Facturación y Pagos
//   7. Encuesta de Satisfacción Auto
//   8. Dashboard del Hotel
//
// ═══════════════════════════════════════════════════════════════════════

const adminHotelDigitalFlow = {
  nodes: [
    // ── INICIO ──
    { id: 'start', type: 'input', position: { x: 500, y: 0 }, data: { label: '⚡ Admin Hotel Digital\nPortal del Cliente\ncon Sistema Orange' }, className: 'node-digital-section' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 1: ONBOARDING DIGITAL
    // ═══════════════════════════════════════════════════════
    { id: 'section_onboard', type: 'default', position: { x: 500, y: 150 }, data: { label: '🤝 ONBOARDING\nDIGITAL CLIENTE' }, className: 'node-digital-section' },

    { id: 'onb_contrato', type: 'default', position: { x: 300, y: 300 }, data: { label: '📄 Contrato Digital:\nFirma electrónica\n→ Rates pre-configurados\n  por tipo de trabajador\n→ Términos aceptados' }, className: 'node-digital-auto' },

    { id: 'onb_credenciales', type: 'default', position: { x: 500, y: 300 }, data: { label: '🔐 Credenciales Auto:\nEmail con link portal\n→ Crear usuarios gerentes\n→ Definir supervisores\n→ Estructura hotel' }, className: 'node-digital-auto' },

    { id: 'onb_capacitacion', type: 'default', position: { x: 700, y: 300 }, data: { label: '📚 Capacitación Digital:\nVideo tutorials en portal\n→ Cómo crear requisiciones\n→ Cómo aprobar horas\n→ Cómo reportar incidentes' }, className: 'node-digital-auto' },

    { id: 'onb_listo', type: 'default', position: { x: 500, y: 460 }, data: { label: '✅ Hotel Listo\npara Operar\n→ Primera requisición\nen minutos\n(antes: días de setup)' }, className: 'node-digital-auto' },

    // ELIMINADO
    { id: 'onb_eliminado', type: 'default', position: { x: 700, y: 460 }, data: { label: '❌ Negociación y\nsetup presencial\ncon múltiples reuniones\n→ SIMPLIFICADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 2: SOLICITAR PERSONAL
    // ═══════════════════════════════════════════════════════
    { id: 'section_solicitar', type: 'default', position: { x: 100, y: 620 }, data: { label: '📋 SOLICITAR\nPERSONAL ONLINE' }, className: 'node-digital-section' },

    { id: 'sol_formulario', type: 'default', position: { x: 100, y: 770 }, data: { label: '📱 Formulario en Portal:\n• Posición (dropdown)\n• Cantidad\n• Fecha inicio\n• Horario\n• Requisitos especiales\n→ 2 minutos' }, className: 'node-digital-auto' },

    { id: 'sol_prioridad', type: 'default', position: { x: 300, y: 770 }, data: { label: '⚙️ Prioridad Auto:\n🟢 >120h Normal\n🟡 72-120h Media\n🔴 <72h Urgente\nCalculada por sistema\n+ Educación: planificar\ncon >120h anticipación' }, className: 'node-digital-rules' },

    { id: 'sol_confirmacion', type: 'default', position: { x: 100, y: 940 }, data: { label: '✅ Confirmación\nInstantánea:\n"Requisición REQ-#\ncreada exitosamente.\nEstimamos cobertura\nen [X] horas"' }, className: 'node-digital-notification' },

    { id: 'sol_tracking', type: 'default', position: { x: 300, y: 940 }, data: { label: '📊 Tracking Visible:\n⏳ Buscando candidato\n👤 Candidato asignado\n✅ Confirmado para [fecha]\n→ Push notification\ncada cambio de estado' }, className: 'node-digital-auto' },

    // ELIMINADOS
    { id: 'sol_eliminado1', type: 'default', position: { x: 100, y: 1100 }, data: { label: '❌ Requisiciones vía\nWhatsApp Chat 4\nsin confirmación\n→ ELIMINADO' }, className: 'node-digital-eliminated' },
    { id: 'sol_eliminado2', type: 'default', position: { x: 300, y: 1100 }, data: { label: '❌ Pedir al inspector\nen su visita\nsin registro formal\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 3: RECIBIR EMPLEADOS
    // ═══════════════════════════════════════════════════════
    { id: 'section_recibir', type: 'default', position: { x: 550, y: 620 }, data: { label: '🤝 RECIBIR\nEMPLEADOS' }, className: 'node-digital-section' },

    { id: 'rec_notif', type: 'default', position: { x: 550, y: 770 }, data: { label: '🔔 Push Notification:\n"[Empleado] asignado\na su hotel.\nLlega [fecha] a las [hora]"\n+ Perfil con foto y rating' }, className: 'node-digital-notification' },

    { id: 'rec_gps_confirm', type: 'default', position: { x: 750, y: 770 }, data: { label: '📍 GPS Confirma\nLlegada Automática:\n"[Empleado] ha llegado\na su propiedad"\n(antes: "vengo de Orange")' }, className: 'node-digital-auto' },

    { id: 'rec_evaluar', type: 'default', position: { x: 550, y: 940 }, data: { label: '⭐ Evaluar Empleado:\nFormulario en portal\ndespués de Día 5/10\n→ Feedback visible para\nOrange + afecta rating' }, className: 'node-digital-hybrid' },

    { id: 'rec_tracking', type: 'default', position: { x: 750, y: 940 }, data: { label: '📊 Panel Empleados:\nVer todos los empleados\nactivos en su propiedad\n• Nombre / Posición\n• Horas esta semana\n• Rating / Evaluaciones' }, className: 'node-digital-auto' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 4: REPORTE DE HORAS
    // ═══════════════════════════════════════════════════════
    { id: 'section_horas', type: 'default', position: { x: 100, y: 1250 }, data: { label: '⏰ REPORTE DE\nHORAS DIGITAL' }, className: 'node-digital-section' },

    { id: 'hrs_auto_ponchado', type: 'default', position: { x: 100, y: 1400 }, data: { label: '📍 Horas Auto:\nEmpleado poncha GPS\n→ Horas visibles en\n  portal del hotel\nen tiempo real\n(antes: tracking propio)' }, className: 'node-digital-auto' },

    { id: 'hrs_aprobar', type: 'default', position: { x: 300, y: 1400 }, data: { label: '✅ Manager Aprueba:\nRevisar horas semanales\n→ Aprobar con click\n→ Deadline Mié 11:59PM\n→ Push reminder auto\n(antes: subir TS manual)' }, className: 'node-digital-hybrid' },

    { id: 'hrs_discrepancia', type: 'default', position: { x: 100, y: 1570 }, data: { label: '⚠️ Discrepancia:\nSi horas no coinciden\n→ Marcar en portal\n→ Auto-notifica Orange\n→ Resolución en 48h\n(antes: llamar/email)' }, className: 'node-digital-auto' },

    { id: 'hrs_desfase', type: 'default', position: { x: 300, y: 1570 }, data: { label: '📅 Info Desfase:\nPortal muestra claro:\n"Pagando semana [X]\nque corresponde a\nfechas [DD-DD]"\n(antes: confusión)' }, className: 'node-digital-auto' },

    // ELIMINADO
    { id: 'hrs_eliminado', type: 'default', position: { x: 500, y: 1400 }, data: { label: '❌ Hotel lleva tracking\npropio + subir TS\npor email/app al cierre\n→ SIMPLIFICADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 5: INCIDENTES Y NO-SHOW
    // ═══════════════════════════════════════════════════════
    { id: 'section_incidentes', type: 'default', position: { x: 600, y: 1250 }, data: { label: '⚠️ INCIDENTES\nDIGITALES' }, className: 'node-digital-section' },

    { id: 'inc_reportar', type: 'default', position: { x: 600, y: 1400 }, data: { label: '📱 Reportar en Portal:\n• Calidad / Servicio\n• Ausencia / No-Show\n• Comportamiento\n→ Formulario guiado\n→ Orange notificado\n  inmediatamente' }, className: 'node-digital-auto' },

    { id: 'inc_noshow', type: 'default', position: { x: 800, y: 1400 }, data: { label: '🚨 No-Show Auto:\nSistema detecta antes\nque hotel llame:\n8:30 sin GPS →\n"Estamos gestionando\nreemplazo para [Hotel]"\n(antes: hotel llamaba)' }, className: 'node-digital-auto' },

    { id: 'inc_reemplazo', type: 'default', position: { x: 600, y: 1570 }, data: { label: '🔄 Reemplazo:\nSolicitar en portal\n→ Orange busca auto\n→ "Reemplazo en camino\n  ETA: [X] minutos"\n→ Push notification' }, className: 'node-digital-notification' },

    { id: 'inc_cambio_perm', type: 'default', position: { x: 800, y: 1570 }, data: { label: '🔄 Cambio Permanente:\nSolicitar en portal\ncon razón\n→ Orange gestiona todo:\n  retiro uniforme,\n  desactivación, reemplazo' }, className: 'node-digital-hybrid' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 6: FACTURACIÓN
    // ═══════════════════════════════════════════════════════
    { id: 'section_facturacion', type: 'default', position: { x: 100, y: 1730 }, data: { label: '🧾 FACTURACIÓN\nDIGITAL' }, className: 'node-digital-section' },

    { id: 'fac_auto_invoice', type: 'default', position: { x: 100, y: 1880 }, data: { label: '🧾 Invoice Auto:\nGenerada cada Jueves\nbasada en horas aprobadas\n→ PDF disponible\n  en portal + email\n(antes: solo email)' }, className: 'node-digital-auto' },

    { id: 'fac_desglose', type: 'default', position: { x: 300, y: 1880 }, data: { label: '📊 Desglose Visible:\n• Empleado por empleado\n• Horas × Bill Rate\n• Total por posición\n• Descuentos/CN si aplica\n→ Transparencia total' }, className: 'node-digital-auto' },

    { id: 'fac_pago', type: 'default', position: { x: 100, y: 2050 }, data: { label: '💳 Pago Net 15:\nRecordatorio automático\n5 días antes + 1 día antes\n→ Portal acepta pago\n  online (futuro)\n→ Historial completo' }, className: 'node-digital-notification' },

    { id: 'fac_discrepancia', type: 'default', position: { x: 300, y: 2050 }, data: { label: '⚠️ Discrepancia:\nMarcar en portal\n→ Auto-genera ticket\n→ Contabilidad revisa\n→ Credit Note si aplica\n(antes: email ida/vuelta)' }, className: 'node-digital-auto' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 7: ENCUESTA SATISFACCIÓN
    // ═══════════════════════════════════════════════════════
    { id: 'section_encuesta', type: 'default', position: { x: 600, y: 1730 }, data: { label: '⭐ ENCUESTA\nSATISFACCIÓN AUTO' }, className: 'node-digital-section' },

    { id: 'enc_auto_trigger', type: 'default', position: { x: 600, y: 1880 }, data: { label: '⚙️ Trigger Auto:\nDespués de visita inspector\n→ Encuesta en portal\n+ push notification\n"¿Cómo fue el servicio\nesta semana?"' }, className: 'node-digital-auto' },

    { id: 'enc_feedback', type: 'default', position: { x: 800, y: 1880 }, data: { label: '📋 Feedback Digital:\n• Rating empleados\n• Calidad servicio\n• Solicitudes especiales\n→ 3 min para completar\n→ Orange actúa en <24h' }, className: 'node-digital-hybrid' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 8: DASHBOARD
    // ═══════════════════════════════════════════════════════
    { id: 'section_dashboard', type: 'default', position: { x: 450, y: 2180 }, data: { label: '📊 DASHBOARD\nDEL HOTEL' }, className: 'node-digital-section' },

    { id: 'dash_resumen', type: 'default', position: { x: 300, y: 2330 }, data: { label: '📊 Vista General:\n• Empleados activos\n• Horas esta semana\n• Requisiciones abiertas\n• Invoices pendientes\n• Incidentes abiertos\n→ Todo en un vistazo' }, className: 'node-digital-auto' },

    { id: 'dash_historial', type: 'default', position: { x: 550, y: 2330 }, data: { label: '📋 Historial:\n• Todas las requisiciones\n• Todos los empleados\n• Todas las invoices\n• Evaluaciones dadas\n→ Exportable a Excel' }, className: 'node-digital-auto' },

    // ── FIN ──
    { id: 'end', type: 'output', position: { x: 450, y: 2490 }, data: { label: '⚡ Portal Hotel Digital\nCompleto\nNivel 2-3: Operativa\n+ Automatización' }, className: 'node-digital-section' },
  ],

  edges: [
    // Inicio
    { id: 'e_s1', source: 'start', target: 'section_onboard' },

    // ══ 1. Onboarding ══
    { id: 'e_o1', source: 'section_onboard', target: 'onb_contrato' },
    { id: 'e_o2', source: 'section_onboard', target: 'onb_credenciales' },
    { id: 'e_o3', source: 'section_onboard', target: 'onb_capacitacion' },
    { id: 'e_o4', source: 'onb_contrato', target: 'onb_listo' },
    { id: 'e_o5', source: 'onb_credenciales', target: 'onb_listo' },
    { id: 'e_o6', source: 'onb_capacitacion', target: 'onb_listo' },

    // Listo → Secciones
    { id: 'e_op1', source: 'onb_listo', target: 'section_solicitar' },
    { id: 'e_op2', source: 'onb_listo', target: 'section_recibir' },

    // ══ 2. Solicitar Personal ══
    { id: 'e_sl1', source: 'section_solicitar', target: 'sol_formulario' },
    { id: 'e_sl2', source: 'sol_formulario', target: 'sol_prioridad', animated: true },
    { id: 'e_sl3', source: 'sol_formulario', target: 'sol_confirmacion', animated: true },
    { id: 'e_sl4', source: 'sol_confirmacion', target: 'sol_tracking' },

    // ══ 3. Recibir Empleados ══
    { id: 'e_r1', source: 'section_recibir', target: 'rec_notif' },
    { id: 'e_r2', source: 'rec_notif', target: 'rec_gps_confirm', animated: true },
    { id: 'e_r3', source: 'rec_gps_confirm', target: 'rec_evaluar' },
    { id: 'e_r4', source: 'rec_gps_confirm', target: 'rec_tracking', style: { strokeDasharray: '5,5' } },

    // Empleados activos → Secciones inferiores
    { id: 'e_r5', source: 'rec_tracking', target: 'section_horas' },
    { id: 'e_r6', source: 'rec_tracking', target: 'section_incidentes', style: { strokeDasharray: '5,5' } },

    // ══ 4. Reporte de Horas ══
    { id: 'e_h1', source: 'section_horas', target: 'hrs_auto_ponchado', animated: true },
    { id: 'e_h2', source: 'section_horas', target: 'hrs_aprobar' },
    { id: 'e_h3', source: 'hrs_auto_ponchado', target: 'hrs_discrepancia', style: { strokeDasharray: '5,5' } },
    { id: 'e_h4', source: 'hrs_aprobar', target: 'hrs_desfase', style: { strokeDasharray: '5,5' } },

    // ══ 5. Incidentes ══
    { id: 'e_i1', source: 'section_incidentes', target: 'inc_reportar' },
    { id: 'e_i2', source: 'section_incidentes', target: 'inc_noshow' },
    { id: 'e_i3', source: 'inc_reportar', target: 'inc_reemplazo' },
    { id: 'e_i4', source: 'inc_noshow', target: 'inc_reemplazo', animated: true },
    { id: 'e_i5', source: 'inc_reemplazo', target: 'inc_cambio_perm', style: { strokeDasharray: '5,5' } },

    // ══ 6. Facturación ══
    { id: 'e_f1', source: 'hrs_aprobar', target: 'section_facturacion', label: 'Horas → Invoice', style: { strokeDasharray: '8,4' } },
    { id: 'e_f2', source: 'section_facturacion', target: 'fac_auto_invoice', animated: true },
    { id: 'e_f3', source: 'section_facturacion', target: 'fac_desglose' },
    { id: 'e_f4', source: 'fac_auto_invoice', target: 'fac_pago' },
    { id: 'e_f5', source: 'fac_desglose', target: 'fac_discrepancia', style: { strokeDasharray: '5,5' } },

    // ══ 7. Encuesta ══
    { id: 'e_enc1', source: 'rec_evaluar', target: 'section_encuesta', style: { strokeDasharray: '8,4' } },
    { id: 'e_enc2', source: 'section_encuesta', target: 'enc_auto_trigger', animated: true },
    { id: 'e_enc3', source: 'enc_auto_trigger', target: 'enc_feedback' },

    // ══ 8. Dashboard ══
    { id: 'e_d1', source: 'fac_pago', target: 'section_dashboard', style: { strokeDasharray: '5,5' } },
    { id: 'e_d2', source: 'enc_feedback', target: 'section_dashboard', style: { strokeDasharray: '5,5' } },
    { id: 'e_d3', source: 'section_dashboard', target: 'dash_resumen' },
    { id: 'e_d4', source: 'section_dashboard', target: 'dash_historial' },

    // Fin
    { id: 'e_end1', source: 'dash_resumen', target: 'end' },
    { id: 'e_end2', source: 'dash_historial', target: 'end' },
  ]
}

export default adminHotelDigitalFlow
