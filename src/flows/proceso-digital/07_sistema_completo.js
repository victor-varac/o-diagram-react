// ═══════════════════════════════════════════════════════════════════════
// PROCESO DIGITAL: SISTEMA COMPLETO - TODOS LOS ROLES DIGITALIZADOS
// Nivel 2-3: Operativa + Automatización
// Vista unificada: 6 roles conectados con workflows automatizados
// ═══════════════════════════════════════════════════════════════════════
//
// COLORES DIGITALES POR ROL:
//   🏆 Inspector       → node-digital-hybrid    (human + system)
//   💰 Contabilidad    → node-digital-auto      (100% automated)
//   👥 Reclutadora     → node-digital-rules     (rules engine)
//   🏨 Admin Hotel     → node-digital-auto      (portal autoservicio)
//   👔 Admin Orange    → node-digital-human     (aprobaciones)
//   👷 Colaborador     → node-digital-auto      (app self-service)
//   ⚡ Proceso Auto    → node-digital-notification (workflows)
//   ❌ Eliminado       → node-digital-eliminated
//
// ═══════════════════════════════════════════════════════════════════════

const sistemaCompletoDigitalFlow = {
  nodes: [
    // ═══════════════════════════════════════════════════════
    // NODO CENTRAL
    // ═══════════════════════════════════════════════════════
    { id: 'center', type: 'input', position: { x: 1200, y: 0 }, data: { label: '⚡ ORANGE STAFFING\nSistema Digital Completo\n6 Roles Automatizados\nNivel 2-3' }, className: 'node-digital-section' },

    // ═══════════════════════════════════════════════════════
    // HEADERS DE CADA ROL DIGITAL
    // ═══════════════════════════════════════════════════════
    { id: 'h_admin', type: 'default', position: { x: 1200, y: 160 }, data: { label: '👔 DIRECCIÓN DIGITAL\nDashboard + 1-Click Approvals\n+ Seguridad RBAC + Auditoría' }, className: 'node-digital-human' },
    { id: 'h_hotel', type: 'default', position: { x: 2200, y: 160 }, data: { label: '🏨 HOTEL PORTAL\nAutoservicio: Requisiciones,\nHoras, Incidentes, Facturas' }, className: 'node-digital-auto' },
    { id: 'h_inspector', type: 'default', position: { x: 0, y: 160 }, data: { label: '🏆 INSPECTOR DIGITAL\nApp Móvil + GPS Routing\n+ Checklists + Evidencia' }, className: 'node-digital-hybrid' },
    { id: 'h_contabilidad', type: 'default', position: { x: 600, y: 160 }, data: { label: '💰 CONTABILIDAD AUTO\n12 Validaciones Automáticas\nNómina → Invoice → Paychex' }, className: 'node-digital-auto' },
    { id: 'h_requisicion', type: 'default', position: { x: 1800, y: 160 }, data: { label: '👥 RECLUTAMIENTO DIGITAL\nMulti-canal + Auto-scoring\n+ Smart Matching + Pool AI' }, className: 'node-digital-rules' },
    { id: 'h_colaborador', type: 'default', position: { x: 1200, y: 1750 }, data: { label: '👷 COLABORADOR APP\nSelf-Service: Registro, Docs,\nPonchado GPS, Solicitudes' }, className: 'node-digital-auto' },

    // ═══════════════════════════════════════════════════════
    // ROL: ADMIN ORANGE / DIRECCIÓN
    // ═══════════════════════════════════════════════════════
    { id: 'a_dashboard', type: 'default', position: { x: 1050, y: 340 }, data: { label: '📊 Dashboard\nTiempo Real\nKPIs + Alertas' }, className: 'node-digital-auto' },
    { id: 'a_nomina', type: 'default', position: { x: 1200, y: 340 }, data: { label: '💰 Aprobar Nómina\n1-Click + 2FA\nPre-validada auto' }, className: 'node-digital-human' },
    { id: 'a_especiales', type: 'default', position: { x: 1350, y: 340 }, data: { label: '🔑 Aprobaciones:\n🌴 Vacaciones\n💸 16% Reembolsos\n📑 Extemporáneos' }, className: 'node-digital-human' },
    { id: 'a_cuentas', type: 'default', position: { x: 1500, y: 340 }, data: { label: '🏦 Cuentas Banco\nSOLO Dirección\n+ 2FA + Auditoría' }, className: 'node-digital-human' },
    { id: 'a_blacklist', type: 'default', position: { x: 1200, y: 470 }, data: { label: '🚫 Blacklist Digital:\nExpediente auto +\n1-click aprobar\nHotel o Global' }, className: 'node-digital-human' },
    { id: 'a_contratos', type: 'default', position: { x: 1050, y: 470 }, data: { label: '📄 Contratos:\nAlertas 90/60/30/15d\nFirma digital\nRenovación auto' }, className: 'node-digital-rules' },
    { id: 'a_onboard_hotel', type: 'default', position: { x: 1050, y: 600 }, data: { label: '🏨 Onboarding Hotel:\nContrato digital +\nSetup auto + Credenciales\n→ Hotel listo en horas' }, className: 'node-digital-auto' },
    { id: 'a_security', type: 'default', position: { x: 1350, y: 470 }, data: { label: '🔐 Seguridad RBAC:\nSeparación funciones\n2FA + Audit trail\nPermisos enforced' }, className: 'node-digital-rules' },
    { id: 'a_kpis', type: 'default', position: { x: 1350, y: 600 }, data: { label: '📈 KPIs Auto:\nOperación, Rotación,\nFinanciero, NPS,\nEstrategia' }, className: 'node-digital-auto' },

    // ═══════════════════════════════════════════════════════
    // ROL: CONTABILIDAD (MÓNICA)
    // ═══════════════════════════════════════════════════════
    { id: 'c_recepcion', type: 'default', position: { x: 500, y: 340 }, data: { label: '📥 Recepción Auto TS:\nHoteles suben digital\n→ Descarga auto\n0 intervención' }, className: 'node-digital-auto' },
    { id: 'c_validaciones', type: 'default', position: { x: 650, y: 340 }, data: { label: '⚙️ 12 Validaciones\nAutomáticas:\nRates, horas, banco,\nBL, estado, deducción' }, className: 'node-digital-rules' },
    { id: 'c_calculo', type: 'default', position: { x: 500, y: 470 }, data: { label: '🧮 Cálculo Nómina:\n100% automático\nPre-Pay + Factors +\nInvoice generados' }, className: 'node-digital-auto' },
    { id: 'c_paychex', type: 'default', position: { x: 650, y: 470 }, data: { label: '📤 Paychex Auto:\nJournal generado\n→ Sandra recibe\narchivos auto' }, className: 'node-digital-auto' },
    { id: 'c_invoices', type: 'default', position: { x: 500, y: 600 }, data: { label: '🧾 Invoices Auto:\nGenerados Jueves\n→ Email auto a hoteles\n→ Portal descarga' }, className: 'node-digital-auto' },
    { id: 'c_vacaciones', type: 'default', position: { x: 650, y: 600 }, data: { label: '🌴 Vacaciones Auto:\n52 sem tracking\nCálculo automático\n→ Irene aprueba' }, className: 'node-digital-rules' },
    { id: 'c_descuentos', type: 'default', position: { x: 500, y: 730 }, data: { label: '💸 Descuentos Auto:\nUniformes, 16%,\nCredit notes\n→ Auto aplicados' }, className: 'node-digital-auto' },

    // ═══════════════════════════════════════════════════════
    // ROL: INSPECTOR DE CALIDAD
    // ═══════════════════════════════════════════════════════
    { id: 'i_onboard', type: 'default', position: { x: -100, y: 340 }, data: { label: '📋 Onboarding Digital:\nVideo + Checklist\nApp asistido\nGates auto' }, className: 'node-digital-hybrid' },
    { id: 'i_evaluaciones', type: 'default', position: { x: -100, y: 470 }, data: { label: '📊 Evaluaciones:\nFormulario app\n4 dimensiones\nFotos + GPS' }, className: 'node-digital-hybrid' },
    { id: 'i_uniformes', type: 'default', position: { x: 50, y: 340 }, data: { label: '👕 Uniformes:\nTracking auto\nDía 3/5 alerta\nDescuento auto' }, className: 'node-digital-auto' },
    { id: 'i_supervision', type: 'default', position: { x: 200, y: 340 }, data: { label: '🔍 Supervisión GPS:\nRutas optimizadas\nChecklists digitales\nEvidencia cámara' }, className: 'node-digital-hybrid' },
    { id: 'i_encuestas', type: 'default', position: { x: 200, y: 470 }, data: { label: '⭐ Encuestas Auto:\nPost-visita trigger\nNPS calculado\n→ Dashboard auto' }, className: 'node-digital-auto' },
    { id: 'i_timesheet', type: 'default', position: { x: 50, y: 470 }, data: { label: '📊 TS Digital:\nAuto-recordatorio\nAuto-descarga\n→ Contabilidad' }, className: 'node-digital-auto' },
    { id: 'i_incidentes', type: 'default', position: { x: -100, y: 600 }, data: { label: '⚠️ Incidentes:\nFormulario digital\nCámara + GPS +\nTimestamp auto' }, className: 'node-digital-hybrid' },
    { id: 'i_solicitudes', type: 'default', position: { x: 50, y: 600 }, data: { label: '🏨 Solicitudes Mgr:\nWorkflow digital\nSLA tracking\nEscalación auto' }, className: 'node-digital-rules' },
    { id: 'i_metricas', type: 'default', position: { x: 200, y: 600 }, data: { label: '📈 Métricas Auto:\nStrikes, onboardings,\nuniforms, KPI\ncalculados auto' }, className: 'node-digital-auto' },

    // ═══════════════════════════════════════════════════════
    // ROL: RECLUTADORA
    // ═══════════════════════════════════════════════════════
    { id: 'r_captacion', type: 'default', position: { x: 1700, y: 340 }, data: { label: '📢 Captación Multi-canal:\nApp + Web + SMS +\nReferidos auto-tracking\nScoring automático' }, className: 'node-digital-rules' },
    { id: 'r_filtro', type: 'default', position: { x: 1850, y: 340 }, data: { label: '⚙️ Filtro Auto:\nBL check instantáneo\nDocs OCR validados\nScore de aptitud' }, className: 'node-digital-rules' },
    { id: 'r_pool', type: 'default', position: { x: 2000, y: 340 }, data: { label: '👥 Pool Inteligente:\nFiltros: zona, exp,\ncalificación, disp.\nRanking automático' }, className: 'node-digital-auto' },
    { id: 'r_requisicion', type: 'default', position: { x: 1700, y: 470 }, data: { label: '📋 Requisición Digital:\nHotel crea en portal\n→ Prioridad auto\n🟢🟡🔴 por tiempo' }, className: 'node-digital-auto' },
    { id: 'r_matching', type: 'default', position: { x: 1850, y: 470 }, data: { label: '🎯 Auto-Matching:\nProximidad <30min\n+ Disponibilidad\n+ Score + Experiencia' }, className: 'node-digital-rules' },
    { id: 'r_asignacion', type: 'default', position: { x: 2000, y: 470 }, data: { label: '📲 Asignación:\nNotificación app\nAcepta/Rechaza\n→ Tablero auto' }, className: 'node-digital-auto' },
    { id: 'r_onboard_msg', type: 'default', position: { x: 1700, y: 600 }, data: { label: '🍊 Onboarding Auto:\nMsg bienvenida\nInstrucciones app\nVideo + checklist' }, className: 'node-digital-notification' },
    { id: 'r_dia1', type: 'default', position: { x: 1850, y: 600 }, data: { label: '📱 Día 1 Auto:\nGPS detecta llegada\n→ Notifica inspector\n→ Confirma en app' }, className: 'node-digital-auto' },
    { id: 'r_retencion', type: 'default', position: { x: 2000, y: 600 }, data: { label: '🔄 Retención Auto:\nCuando asignación\ntermina → sugerir\nsiguiente hotel' }, className: 'node-digital-rules' },
    { id: 'r_metricas', type: 'default', position: { x: 1850, y: 730 }, data: { label: '📈 Métricas Auto:\nConversión, cobertura,\ntiempo, retención,\nno-shows' }, className: 'node-digital-auto' },

    // ═══════════════════════════════════════════════════════
    // ROL: ADMIN HOTEL (PORTAL CLIENTE)
    // ═══════════════════════════════════════════════════════
    { id: 'ho_onboard', type: 'default', position: { x: 2150, y: 340 }, data: { label: '🤝 Onboarding Auto:\nContrato digital\nCredenciales auto\nVideo tutorials' }, className: 'node-digital-auto' },
    { id: 'ho_solicitar', type: 'default', position: { x: 2300, y: 340 }, data: { label: '📋 Solicitar Personal:\nFormulario portal\n2 minutos\nConfirmación instant' }, className: 'node-digital-auto' },
    { id: 'ho_recibir', type: 'default', position: { x: 2150, y: 470 }, data: { label: '👤 Recibir Empleados:\nPerfil en portal\nFoto + Calificación\n"En camino" tracking' }, className: 'node-digital-auto' },
    { id: 'ho_horas', type: 'default', position: { x: 2300, y: 470 }, data: { label: '⏰ Horas Digital:\nAprobar en portal\nGPS pre-llenado\nDeadline auto-alert' }, className: 'node-digital-auto' },
    { id: 'ho_incidentes', type: 'default', position: { x: 2150, y: 600 }, data: { label: '⚠️ Incidentes Portal:\nFormulario + fotos\nNo-show auto-detect\nReemplazo tracking' }, className: 'node-digital-auto' },
    { id: 'ho_factura', type: 'default', position: { x: 2300, y: 600 }, data: { label: '🧾 Factura Digital:\nAuto-generada\nDescargable portal\nPago online' }, className: 'node-digital-auto' },
    { id: 'ho_encuesta', type: 'default', position: { x: 2150, y: 730 }, data: { label: '⭐ Encuesta Auto:\nPost-servicio\nNPS calculado\n→ KPIs Dirección' }, className: 'node-digital-auto' },
    { id: 'ho_dashboard', type: 'default', position: { x: 2300, y: 730 }, data: { label: '📊 Dashboard Hotel:\nEmpleados activos\nHoras, costos,\ncalidad, historial' }, className: 'node-digital-auto' },

    // ═══════════════════════════════════════════════════════
    // ROL: COLABORADOR (APP)
    // ═══════════════════════════════════════════════════════
    { id: 'co_registro', type: 'default', position: { x: 950, y: 1920 }, data: { label: '📲 Registro App:\nSelf-service\nOCR docs auto\nBL check instant' }, className: 'node-digital-auto' },
    { id: 'co_gates', type: 'default', position: { x: 950, y: 2060 }, data: { label: '📊 Gates Auto:\n🔴30% bloquea\n🟡60% = pagable\n🟢100% completo\nAuto-enforce' }, className: 'node-digital-rules' },
    { id: 'co_onboard', type: 'default', position: { x: 1100, y: 1920 }, data: { label: '🤝 Onboarding Hybrid:\nVideo tutorial +\nChecklist digital +\nInspector confirma' }, className: 'node-digital-hybrid' },
    { id: 'co_ponchado', type: 'default', position: { x: 1250, y: 1920 }, data: { label: '📍 Ponchado GPS:\nGeofencing auto\n+ Huella backup\nRecordatorio salida' }, className: 'node-digital-auto' },
    { id: 'co_pago', type: 'default', position: { x: 1400, y: 1920 }, data: { label: '💳 Pago Digital:\n$0.01 validación\nTransferencia auto\nVie 5AM notificación' }, className: 'node-digital-auto' },
    { id: 'co_solicitudes', type: 'default', position: { x: 1100, y: 2060 }, data: { label: '📋 9 Solicitudes:\nFormulario app\nWorkflow auto\nSLA tracking' }, className: 'node-digital-auto' },
    { id: 'co_vacaciones', type: 'default', position: { x: 1250, y: 2060 }, data: { label: '🌴 Vacaciones:\nContador visible\nCálculo auto\nSolicitud digital' }, className: 'node-digital-auto' },
    { id: 'co_noshow', type: 'default', position: { x: 1400, y: 2060 }, data: { label: '🚨 No-Show Auto:\n8:30AM detección\nEscalación auto\n3 strikes → BL' }, className: 'node-digital-rules' },
    { id: 'co_estados', type: 'default', position: { x: 1200, y: 2200 }, data: { label: '🔀 State Machine:\nAuto-transiciones\nNotifica cada rol\n6 estados gestionados' }, className: 'node-digital-rules' },
    { id: 'co_injury', type: 'default', position: { x: 1400, y: 2200 }, data: { label: '🚑 Injury Digital:\nForm + cámara +\nGPS + timestamp\n→ Workers Comp auto' }, className: 'node-digital-hybrid' },

    // ═══════════════════════════════════════════════════════
    // WORKFLOWS AUTOMATIZADOS INTER-ROL
    // ═══════════════════════════════════════════════════════
    { id: 'wf_requisicion', type: 'default', position: { x: 1850, y: 900 }, data: { label: '⚡ WORKFLOW:\nREQUISICIÓN AUTO\nHotel→Sistema→Match\n→Inspector→Colaborador\n(antes: WhatsApp/llamadas)' }, className: 'node-digital-notification' },
    { id: 'wf_nomina', type: 'default', position: { x: 600, y: 900 }, data: { label: '⚡ WORKFLOW:\nNÓMINA AUTO\nTS→Validación→Cálculo\n→Pre-Approve→Dirección\n→Pago→Notificación' }, className: 'node-digital-notification' },
    { id: 'wf_onboarding', type: 'default', position: { x: 200, y: 800 }, data: { label: '⚡ WORKFLOW:\nONBOARDING AUTO\nRegistro→BL Check→\nAsignación→Msg→Inspector\n→Gates auto-enforce' }, className: 'node-digital-notification' },
    { id: 'wf_incidentes', type: 'default', position: { x: 600, y: 1100 }, data: { label: '⚡ WORKFLOW:\nINCIDENTES AUTO\nDetección→Escalación\n→Investigación→BL/Strike\n→Notifica todos roles' }, className: 'node-digital-notification' },
    { id: 'wf_facturacion', type: 'default', position: { x: 1850, y: 1100 }, data: { label: '⚡ WORKFLOW:\nFACTURACIÓN AUTO\nHoras→Calc→Invoice\n→Hotel portal→Pago\n→Reconciliación auto' }, className: 'node-digital-notification' },
    { id: 'wf_vacaciones', type: 'default', position: { x: 1200, y: 1100 }, data: { label: '⚡ WORKFLOW:\nVACACIONES AUTO\n52sem tracking→Calc\n→Solicitud→Irene 1-click\n→Pago auto' }, className: 'node-digital-notification' },

    // ═══════════════════════════════════════════════════════
    // ELIMINADOS (procesos manuales que desaparecen)
    // ═══════════════════════════════════════════════════════
    { id: 'elim_1', type: 'default', position: { x: 400, y: 1300 }, data: { label: '❌ ELIMINADOS:\n• WhatsApp como canal\n  operativo\n• Trello manual\n• Excel nómina\n• Llamadas para TS' }, className: 'node-digital-eliminated' },
    { id: 'elim_2', type: 'default', position: { x: 600, y: 1300 }, data: { label: '❌ ELIMINADOS:\n• Fotos de timesheet\n• Cálculos manuales\n• Aprobaciones informales\n• Reportes por chat\n• Setup presencial hotel' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // LEYENDA DIGITAL
    // ═══════════════════════════════════════════════════════
    { id: 'legend_title', type: 'default', position: { x: -300, y: 1300 }, data: { label: '🎨 LEYENDA\nTIPOS DE NODO' }, className: 'node-digital-section' },
    { id: 'legend_auto', type: 'default', position: { x: -400, y: 1440 }, data: { label: '⚡ 100%\nAutomático' }, className: 'node-digital-auto' },
    { id: 'legend_rules', type: 'default', position: { x: -250, y: 1440 }, data: { label: '⚙️ Motor de\nReglas' }, className: 'node-digital-rules' },
    { id: 'legend_human', type: 'default', position: { x: -100, y: 1440 }, data: { label: '👤 Requiere\nHumano' }, className: 'node-digital-human' },
    { id: 'legend_hybrid', type: 'default', position: { x: -400, y: 1560 }, data: { label: '🤝 Híbrido\nHumano+Sistema' }, className: 'node-digital-hybrid' },
    { id: 'legend_notif', type: 'default', position: { x: -250, y: 1560 }, data: { label: '🔔 Notificación\nWorkflow' }, className: 'node-digital-notification' },
    { id: 'legend_elim', type: 'default', position: { x: -100, y: 1560 }, data: { label: '❌ Eliminado\n(manual)' }, className: 'node-digital-eliminated' },
  ],

  edges: [
    // ═══════════════════════════════════════════════════════
    // CENTRO → HEADERS
    // ═══════════════════════════════════════════════════════
    { id: 'e_c1', source: 'center', target: 'h_admin', style: { stroke: '#0d47a1', strokeWidth: 3 } },
    { id: 'e_c2', source: 'center', target: 'h_hotel', style: { stroke: '#1565c0', strokeWidth: 3 } },
    { id: 'e_c3', source: 'center', target: 'h_inspector', style: { stroke: '#00838f', strokeWidth: 3 } },
    { id: 'e_c4', source: 'center', target: 'h_contabilidad', style: { stroke: '#1565c0', strokeWidth: 3 } },
    { id: 'e_c5', source: 'center', target: 'h_requisicion', style: { stroke: '#00838f', strokeWidth: 3 } },
    { id: 'e_c6', source: 'center', target: 'h_colaborador', style: { stroke: '#1565c0', strokeWidth: 3 } },

    // ═══════════════════════════════════════════════════════
    // ADMIN ORANGE (flujo interno)
    // ═══════════════════════════════════════════════════════
    { id: 'e_a1', source: 'h_admin', target: 'a_dashboard', style: { stroke: '#e65100' } },
    { id: 'e_a2', source: 'h_admin', target: 'a_nomina', style: { stroke: '#e65100' } },
    { id: 'e_a3', source: 'h_admin', target: 'a_especiales', style: { stroke: '#e65100' } },
    { id: 'e_a4', source: 'h_admin', target: 'a_cuentas', style: { stroke: '#e65100' } },
    { id: 'e_a5', source: 'a_dashboard', target: 'a_contratos', style: { stroke: '#e65100' } },
    { id: 'e_a6', source: 'a_nomina', target: 'a_blacklist', style: { stroke: '#e65100', strokeDasharray: '5,5' } },
    { id: 'e_a7', source: 'a_especiales', target: 'a_security', style: { stroke: '#e65100', strokeDasharray: '5,5' } },
    { id: 'e_a8', source: 'a_contratos', target: 'a_onboard_hotel', style: { stroke: '#e65100' } },
    { id: 'e_a9', source: 'a_security', target: 'a_kpis', style: { stroke: '#e65100', strokeDasharray: '5,5' } },

    // ═══════════════════════════════════════════════════════
    // CONTABILIDAD (flujo interno)
    // ═══════════════════════════════════════════════════════
    { id: 'e_co1', source: 'h_contabilidad', target: 'c_recepcion', style: { stroke: '#1565c0' } },
    { id: 'e_co2', source: 'h_contabilidad', target: 'c_validaciones', style: { stroke: '#1565c0' } },
    { id: 'e_co3', source: 'c_recepcion', target: 'c_calculo', style: { stroke: '#1565c0' } },
    { id: 'e_co4', source: 'c_validaciones', target: 'c_paychex', style: { stroke: '#1565c0' } },
    { id: 'e_co5', source: 'c_calculo', target: 'c_invoices', style: { stroke: '#1565c0' } },
    { id: 'e_co6', source: 'c_paychex', target: 'c_vacaciones', style: { stroke: '#1565c0', strokeDasharray: '5,5' } },
    { id: 'e_co7', source: 'c_invoices', target: 'c_descuentos', style: { stroke: '#1565c0', strokeDasharray: '5,5' } },

    // ═══════════════════════════════════════════════════════
    // INSPECTOR (flujo interno)
    // ═══════════════════════════════════════════════════════
    { id: 'e_i1', source: 'h_inspector', target: 'i_onboard', style: { stroke: '#00838f' } },
    { id: 'e_i2', source: 'h_inspector', target: 'i_uniformes', style: { stroke: '#00838f' } },
    { id: 'e_i3', source: 'h_inspector', target: 'i_supervision', style: { stroke: '#00838f' } },
    { id: 'e_i4', source: 'i_onboard', target: 'i_evaluaciones', style: { stroke: '#00838f' } },
    { id: 'e_i5', source: 'i_uniformes', target: 'i_timesheet', style: { stroke: '#00838f' } },
    { id: 'e_i6', source: 'i_supervision', target: 'i_encuestas', style: { stroke: '#00838f' } },
    { id: 'e_i7', source: 'i_evaluaciones', target: 'i_incidentes', style: { stroke: '#00838f', strokeDasharray: '5,5' } },
    { id: 'e_i8', source: 'i_timesheet', target: 'i_solicitudes', style: { stroke: '#00838f', strokeDasharray: '5,5' } },
    { id: 'e_i9', source: 'i_encuestas', target: 'i_metricas', style: { stroke: '#00838f' } },

    // ═══════════════════════════════════════════════════════
    // RECLUTADORA (flujo interno)
    // ═══════════════════════════════════════════════════════
    { id: 'e_r1', source: 'h_requisicion', target: 'r_captacion', style: { stroke: '#00838f' } },
    { id: 'e_r2', source: 'h_requisicion', target: 'r_filtro', style: { stroke: '#00838f' } },
    { id: 'e_r3', source: 'h_requisicion', target: 'r_pool', style: { stroke: '#00838f' } },
    { id: 'e_r4', source: 'r_captacion', target: 'r_requisicion', style: { stroke: '#00838f' } },
    { id: 'e_r5', source: 'r_filtro', target: 'r_matching', style: { stroke: '#00838f' } },
    { id: 'e_r6', source: 'r_pool', target: 'r_asignacion', style: { stroke: '#00838f' } },
    { id: 'e_r7', source: 'r_requisicion', target: 'r_onboard_msg', style: { stroke: '#00838f' } },
    { id: 'e_r8', source: 'r_matching', target: 'r_dia1', style: { stroke: '#00838f' } },
    { id: 'e_r9', source: 'r_asignacion', target: 'r_retencion', style: { stroke: '#00838f', strokeDasharray: '5,5' } },
    { id: 'e_r10', source: 'r_dia1', target: 'r_metricas', style: { stroke: '#00838f', strokeDasharray: '5,5' } },

    // ═══════════════════════════════════════════════════════
    // ADMIN HOTEL (flujo interno)
    // ═══════════════════════════════════════════════════════
    { id: 'e_h1', source: 'h_hotel', target: 'ho_onboard', style: { stroke: '#1565c0' } },
    { id: 'e_h2', source: 'h_hotel', target: 'ho_solicitar', style: { stroke: '#1565c0' } },
    { id: 'e_h3', source: 'ho_onboard', target: 'ho_recibir', style: { stroke: '#1565c0' } },
    { id: 'e_h4', source: 'ho_solicitar', target: 'ho_horas', style: { stroke: '#1565c0' } },
    { id: 'e_h5', source: 'ho_recibir', target: 'ho_incidentes', style: { stroke: '#1565c0', strokeDasharray: '5,5' } },
    { id: 'e_h6', source: 'ho_horas', target: 'ho_factura', style: { stroke: '#1565c0' } },
    { id: 'e_h7', source: 'ho_incidentes', target: 'ho_encuesta', style: { stroke: '#1565c0', strokeDasharray: '5,5' } },
    { id: 'e_h8', source: 'ho_factura', target: 'ho_dashboard', style: { stroke: '#1565c0' } },

    // ═══════════════════════════════════════════════════════
    // COLABORADOR (flujo interno)
    // ═══════════════════════════════════════════════════════
    { id: 'e_cb1', source: 'h_colaborador', target: 'co_registro', style: { stroke: '#1565c0' } },
    { id: 'e_cb2', source: 'h_colaborador', target: 'co_onboard', style: { stroke: '#1565c0' } },
    { id: 'e_cb3', source: 'h_colaborador', target: 'co_ponchado', style: { stroke: '#1565c0' } },
    { id: 'e_cb4', source: 'h_colaborador', target: 'co_pago', style: { stroke: '#1565c0' } },
    { id: 'e_cb5', source: 'co_registro', target: 'co_gates', style: { stroke: '#1565c0' } },
    { id: 'e_cb6', source: 'co_onboard', target: 'co_solicitudes', style: { stroke: '#1565c0', strokeDasharray: '5,5' } },
    { id: 'e_cb7', source: 'co_ponchado', target: 'co_vacaciones', style: { stroke: '#1565c0', strokeDasharray: '5,5' } },
    { id: 'e_cb8', source: 'co_pago', target: 'co_noshow', style: { stroke: '#1565c0', strokeDasharray: '5,5' } },
    { id: 'e_cb9', source: 'co_gates', target: 'co_estados', style: { stroke: '#1565c0', strokeDasharray: '5,5' } },
    { id: 'e_cb10', source: 'co_solicitudes', target: 'co_estados', style: { stroke: '#1565c0', strokeDasharray: '5,5' } },
    { id: 'e_cb11', source: 'co_noshow', target: 'co_injury', style: { stroke: '#1565c0', strokeDasharray: '5,5' } },
    { id: 'e_cb12', source: 'co_injury', target: 'co_estados', style: { stroke: '#1565c0', strokeDasharray: '5,5' } },

    // ═══════════════════════════════════════════════════════
    // WORKFLOWS AUTOMATIZADOS (conexiones inter-rol)
    // ═══════════════════════════════════════════════════════

    // Workflow Requisición
    { id: 'e_wf_r1', source: 'ho_solicitar', target: 'wf_requisicion', label: 'Solicita', animated: true, style: { stroke: '#ff6f00', strokeWidth: 2 } },
    { id: 'e_wf_r2', source: 'r_matching', target: 'wf_requisicion', style: { stroke: '#ff6f00', strokeWidth: 2, strokeDasharray: '8,4' } },
    { id: 'e_wf_r3', source: 'i_onboard', target: 'wf_requisicion', label: 'Onboard', style: { stroke: '#ff6f00', strokeWidth: 2, strokeDasharray: '8,4' } },

    // Workflow Nómina
    { id: 'e_wf_n1', source: 'c_calculo', target: 'wf_nomina', label: 'Calculada', animated: true, style: { stroke: '#ff6f00', strokeWidth: 2 } },
    { id: 'e_wf_n2', source: 'a_nomina', target: 'wf_nomina', label: 'Aprueba', style: { stroke: '#ff6f00', strokeWidth: 2, strokeDasharray: '8,4' } },
    { id: 'e_wf_n3', source: 'i_timesheet', target: 'wf_nomina', label: 'TS validados', style: { stroke: '#ff6f00', strokeWidth: 2, strokeDasharray: '8,4' } },

    // Workflow Onboarding
    { id: 'e_wf_o1', source: 'r_onboard_msg', target: 'wf_onboarding', label: 'Msg auto', style: { stroke: '#ff6f00', strokeWidth: 2, strokeDasharray: '8,4' } },
    { id: 'e_wf_o2', source: 'i_onboard', target: 'wf_onboarding', label: 'Día 1', style: { stroke: '#ff6f00', strokeWidth: 2, strokeDasharray: '8,4' } },
    { id: 'e_wf_o3', source: 'co_onboard', target: 'wf_onboarding', style: { stroke: '#ff6f00', strokeWidth: 2, strokeDasharray: '8,4' } },

    // Workflow Incidentes
    { id: 'e_wf_i1', source: 'i_incidentes', target: 'wf_incidentes', label: 'Reporta', style: { stroke: '#ff6f00', strokeWidth: 2, strokeDasharray: '8,4' } },
    { id: 'e_wf_i2', source: 'ho_incidentes', target: 'wf_incidentes', label: 'Reporta', style: { stroke: '#ff6f00', strokeWidth: 2, strokeDasharray: '8,4' } },
    { id: 'e_wf_i3', source: 'a_blacklist', target: 'wf_incidentes', label: 'Decide BL', style: { stroke: '#ff6f00', strokeWidth: 2, strokeDasharray: '8,4' } },

    // Workflow Facturación
    { id: 'e_wf_f1', source: 'c_invoices', target: 'wf_facturacion', label: 'Invoice auto', style: { stroke: '#ff6f00', strokeWidth: 2, strokeDasharray: '8,4' } },
    { id: 'e_wf_f2', source: 'ho_factura', target: 'wf_facturacion', label: 'Revisa/Paga', style: { stroke: '#ff6f00', strokeWidth: 2, strokeDasharray: '8,4' } },

    // Workflow Vacaciones
    { id: 'e_wf_v1', source: 'co_vacaciones', target: 'wf_vacaciones', label: 'Solicita', style: { stroke: '#ff6f00', strokeWidth: 2, strokeDasharray: '8,4' } },
    { id: 'e_wf_v2', source: 'c_vacaciones', target: 'wf_vacaciones', label: 'Calcula', style: { stroke: '#ff6f00', strokeWidth: 2, strokeDasharray: '8,4' } },
    { id: 'e_wf_v3', source: 'a_especiales', target: 'wf_vacaciones', label: 'Irene aprueba', style: { stroke: '#ff6f00', strokeWidth: 2, strokeDasharray: '8,4' } },

    // ═══════════════════════════════════════════════════════
    // CONEXIONES DIRECTAS INTER-ROL (las más importantes)
    // ═══════════════════════════════════════════════════════

    // Contabilidad → Admin (nómina pre-aprobada)
    { id: 'e_d1', source: 'c_paychex', target: 'a_nomina', label: 'Nómina lista', animated: true, style: { stroke: '#ff6f00', strokeWidth: 3 } },

    // Admin → Hotel (onboarding)
    { id: 'e_d2', source: 'a_onboard_hotel', target: 'ho_onboard', label: 'Setup auto', animated: true, style: { stroke: '#ff6f00', strokeWidth: 3 } },

    // Hotel → Reclutadora (requisición)
    { id: 'e_d3', source: 'ho_solicitar', target: 'r_requisicion', label: 'Requisición auto', animated: true, style: { stroke: '#ff6f00', strokeWidth: 3 } },

    // Reclutadora → Inspector (empleado asignado)
    { id: 'e_d4', source: 'r_asignacion', target: 'i_onboard', label: 'Nuevo empleado → onboard', animated: true, style: { stroke: '#ff6f00', strokeWidth: 3 } },

    // Inspector → Contabilidad (TS + uniformes)
    { id: 'e_d5', source: 'i_timesheet', target: 'c_recepcion', label: 'TS auto', animated: true, style: { stroke: '#ff6f00', strokeWidth: 3 } },

    // Hotel → Contabilidad (horas)
    { id: 'e_d6', source: 'ho_horas', target: 'c_recepcion', label: 'Horas portal', animated: true, style: { stroke: '#ff6f00', strokeWidth: 3 } },

    // Admin → Colaborador (pago)
    { id: 'e_d7', source: 'a_nomina', target: 'co_pago', label: 'Pago Vie 5AM', animated: true, style: { stroke: '#ff6f00', strokeWidth: 3 } },

    // Contabilidad → Hotel (invoice)
    { id: 'e_d8', source: 'c_invoices', target: 'ho_factura', label: 'Invoice auto', animated: true, style: { stroke: '#ff6f00', strokeWidth: 3 } },

    // Inspector → Hotel (encuesta)
    { id: 'e_d9', source: 'i_encuestas', target: 'ho_encuesta', label: 'NPS auto', style: { stroke: '#00838f', strokeWidth: 2, strokeDasharray: '8,4' } },

    // Colaborador → Reclutadora (pool / retención)
    { id: 'e_d10', source: 'co_registro', target: 'r_pool', label: 'Auto-registro', style: { stroke: '#1565c0', strokeWidth: 2, strokeDasharray: '8,4' } },

    // No-Show → Reclutadora (reemplazo auto)
    { id: 'e_d11', source: 'co_noshow', target: 'r_matching', label: 'Buscar reemplazo', animated: true, style: { stroke: '#c62828', strokeWidth: 2 } },

    // Colaborador estados → Admin (blacklist)
    { id: 'e_d12', source: 'co_estados', target: 'a_blacklist', label: 'BL → Dirección', style: { stroke: '#c62828', strokeWidth: 2, strokeDasharray: '8,4' } },

    // Inspector evaluaciones → Admin KPIs
    { id: 'e_d13', source: 'i_metricas', target: 'a_kpis', label: 'KPIs auto', style: { stroke: '#00838f', strokeWidth: 2, strokeDasharray: '8,4' } },

    // Reclutadora métricas → Admin KPIs
    { id: 'e_d14', source: 'r_metricas', target: 'a_kpis', label: 'KPIs auto', style: { stroke: '#00838f', strokeWidth: 2, strokeDasharray: '8,4' } },

    // Workflow → Eliminados (lo que reemplazan)
    { id: 'e_el1', source: 'wf_nomina', target: 'elim_1', style: { stroke: '#777', strokeDasharray: '5,5' } },
    { id: 'e_el2', source: 'wf_facturacion', target: 'elim_2', style: { stroke: '#777', strokeDasharray: '5,5' } },
  ]
}

export default sistemaCompletoDigitalFlow
