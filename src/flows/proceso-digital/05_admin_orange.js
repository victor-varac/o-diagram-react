// ═══════════════════════════════════════════════════════════════════════
// PROCESO DIGITAL: ADMIN ORANGE / DIRECCIÓN (SILVIA / IRENE)
// Nivel 2-3: Operativa + Automatización
// Dashboard ejecutivo con aprobaciones con un click y control total
// ═══════════════════════════════════════════════════════════════════════
//
// SECCIONES:
//   1. Dashboard Ejecutivo Tiempo Real
//   2. Aprobación de Nómina Digital
//   3. Aprobaciones Especiales (Vacaciones, 16%, Extemporáneos)
//   4. Cuentas Bancarias — Workflow Seguro
//   5. Blacklist Workflow Digital
//   6. Onboarding Hotel Digital
//   7. Gestión de Contratos y Alertas
//   8. Seguridad, Control y Auditoría
//   9. KPIs y Métricas Auto
//
// ═══════════════════════════════════════════════════════════════════════

const adminOrangeDigitalFlow = {
  nodes: [
    // ── INICIO ──
    { id: 'start', type: 'input', position: { x: 600, y: 0 }, data: { label: '⚡ Dirección Digital\nSilvia / Irene\nDashboard Ejecutivo\ncon Control Total' }, className: 'node-digital-section' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 1: DASHBOARD EJECUTIVO
    // ═══════════════════════════════════════════════════════
    { id: 'section_dashboard', type: 'default', position: { x: 200, y: 180 }, data: { label: '📊 DASHBOARD\nEJECUTIVO\nTIEMPO REAL' }, className: 'node-digital-section' },

    { id: 'dash_overview', type: 'default', position: { x: 50, y: 340 }, data: { label: '🏢 Overview General:\n• 39 hoteles activos\n• Empleados activos\n  (fijos + temporales)\n• Requisiciones abiertas\n• Alertas pendientes' }, className: 'node-digital-auto' },

    { id: 'dash_financiero', type: 'default', position: { x: 250, y: 340 }, data: { label: '💰 Panel Financiero:\n• Total facturado (Bill Rate)\n• Total pagado (Rate)\n• Margen bruto real-time\n• Costos operativos\n• Rentabilidad por hotel' }, className: 'node-digital-auto' },

    { id: 'dash_rotacion', type: 'default', position: { x: 450, y: 340 }, data: { label: '🔄 Rotación/Retención:\n• Nuevos esta semana\n• Salieron esta semana\n• Tasa rotación mensual\n• % >72h / >1 mes / >6 meses\n• Razones de salida (top 5)' }, className: 'node-digital-auto' },

    { id: 'dash_alertas', type: 'default', position: { x: 150, y: 510 }, data: { label: '🔔 Centro de Alertas:\n🔴 Pendientes urgentes\n🟡 Requieren atención\n🟢 Resueltos hoy\n→ Push + email\npara críticos' }, className: 'node-digital-notification' },

    { id: 'dash_aprobaciones', type: 'default', position: { x: 350, y: 510 }, data: { label: '✅ Cola de Aprobaciones:\nBandeja unificada\n→ Nómina\n→ Vacaciones\n→ Cuentas bancarias\n→ Blacklist\n1-click para cada una' }, className: 'node-digital-rules' },

    // ELIMINADO
    { id: 'dash_eliminado', type: 'default', position: { x: 550, y: 510 }, data: { label: '❌ Reportes manuales\nvía WhatsApp/llamadas\nsin visibilidad central\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 2: APROBACIÓN NÓMINA DIGITAL
    // ═══════════════════════════════════════════════════════
    { id: 'section_nomina', type: 'default', position: { x: 700, y: 180 }, data: { label: '💰 APROBACIÓN\nNÓMINA DIGITAL' }, className: 'node-digital-section' },

    { id: 'nom_recibir', type: 'default', position: { x: 700, y: 340 }, data: { label: '📩 Notificación Auto:\n"Nómina pre-aprobada\npor sistema.\n12/12 validaciones OK.\nRequiere su aprobación"\n→ Push Jueves 12pm' }, className: 'node-digital-notification' },

    { id: 'nom_dashboard', type: 'default', position: { x: 900, y: 340 }, data: { label: '📊 Dashboard Nómina:\n• Total a pagar: $XXX\n• # empleados: XXX\n• 🟢 Validados: XX%\n• 🟡 Parcial: XX%\n• 🔴 Excluidos: XX\n• Anomalías: X' }, className: 'node-digital-auto' },

    { id: 'nom_anomalias', type: 'default', position: { x: 900, y: 510 }, data: { label: '⚠️ Anomalías Auto:\nSistema marca:\n• Horas >12h sin break\n• Variación >30% vs prom\n• Nuevos sin validar banco\n• Extemporáneos pendientes\nCada una clickeable' }, className: 'node-digital-rules' },

    { id: 'nom_aprobar', type: 'default', position: { x: 700, y: 510 }, data: { label: '✅ Aprobar con 1 Click:\n🔐 Requiere 2FA\n→ "Apruebo nómina\nsemana [X] por $[Y]"\n→ Firma digital\n→ Timestamp inmutable' }, className: 'node-digital-auto' },

    { id: 'nom_rechazar', type: 'default', position: { x: 1100, y: 510 }, data: { label: '❌ Rechazar:\nSeleccionar razón\n→ Devuelve a Contabilidad\ncon notas específicas\n→ SLA: corregir en 2h\n→ Re-submit automático' }, className: 'node-digital-rules' },

    { id: 'nom_procesamiento', type: 'default', position: { x: 700, y: 670 }, data: { label: '⚙️ Procesamiento Auto:\nJue 3-11PM\n→ ACH transfers auto\n→ Cheques Paychex auto\n→ Progreso en tiempo real\nVie 5AM: confirmación' }, className: 'node-digital-auto' },

    // ELIMINADO
    { id: 'nom_eliminado', type: 'default', position: { x: 1100, y: 670 }, data: { label: '❌ Revisión manual\nde 3 archivos Excel\nen reunión Jue 12-3PM\n→ SIMPLIFICADO a\n1-click con dashboard' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 3: APROBACIONES ESPECIALES
    // ═══════════════════════════════════════════════════════
    { id: 'section_especiales', type: 'default', position: { x: 200, y: 700 }, data: { label: '🔑 APROBACIONES\nESPECIALES' }, className: 'node-digital-section' },

    // Vacaciones
    { id: 'esp_vacaciones', type: 'default', position: { x: 50, y: 860 }, data: { label: '🌴 Vacaciones Auto:\nSistema calcula auto:\n• 52 sem continuas ✅/❌\n• Prom hrs: XX h/sem\n• Horas disponibles: XX\n→ Pre-validado\n→ 1-click aprobar/rechazar' }, className: 'node-digital-rules' },

    { id: 'esp_vac_irene', type: 'default', position: { x: 50, y: 1040 }, data: { label: '🔐 TODOS los pagos\nvacaciones requieren\naprobación Irene/Dir\n→ Notificación auto\n→ Historial completo\ndel empleado adjunto' }, className: 'node-digital-human' },

    // 16% Reembolsos
    { id: 'esp_16', type: 'default', position: { x: 250, y: 860 }, data: { label: '💸 Reembolso 16%:\nSistema auto-detecta:\n• Tax ID entregado ✅\n• Mismo año fiscal ✅\n• Monto a reembolsar: $X\n→ Auto-alertas\n60/30/15 días antes' }, className: 'node-digital-rules' },

    { id: 'esp_16_deadline', type: 'default', position: { x: 250, y: 1040 }, data: { label: '⏰ Alertas Automáticas:\n🟡 60 días: recordatorio\n🟠 30 días: urgente\n🔴 15 días: CRÍTICO\n📛 31 Dic: se pierde\n→ Notifica empleado\n+ Dirección' }, className: 'node-digital-notification' },

    // Cheques Extemporáneos
    { id: 'esp_extemp', type: 'default', position: { x: 450, y: 860 }, data: { label: '📑 Extemporáneos:\nSolicitud digital\ncon justificación\n→ Pre-validado por\nContabilidad\n→ Dirección: 1-click\naprobar/rechazar' }, className: 'node-digital-hybrid' },

    // ELIMINADO
    { id: 'esp_eliminado', type: 'default', position: { x: 450, y: 1040 }, data: { label: '❌ Autorización\nvía WhatsApp\ncon Karina\nsin registro formal\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 4: CUENTAS BANCARIAS
    // ═══════════════════════════════════════════════════════
    { id: 'section_cuentas', type: 'default', position: { x: 1100, y: 180 }, data: { label: '🏦 CUENTAS BANCARIAS\nWORKFLOW SEGURO' }, className: 'node-digital-section' },

    { id: 'cta_solicitud', type: 'default', position: { x: 1100, y: 340 }, data: { label: '📱 Empleado Solicita:\nFormulario en app\n→ Razón del cambio\n→ Nueva info bancaria\n→ Selfie + ID verify\n→ Ticket formal auto' }, className: 'node-digital-auto' },

    { id: 'cta_bloqueo', type: 'default', position: { x: 1300, y: 340 }, data: { label: '🔒 Restricción Total:\n❌ Contabilidad\n❌ Calidad\n❌ Reclutamiento\n❌ El empleado mismo\nSOLO Dirección modifica' }, className: 'node-digital-rules' },

    { id: 'cta_notificacion', type: 'default', position: { x: 1100, y: 510 }, data: { label: '🔔 Dirección Recibe:\nNotificación con:\n• Datos del empleado\n• Cuenta anterior\n• Cuenta nueva\n• Razón del cambio\n• Verificación identidad' }, className: 'node-digital-notification' },

    { id: 'cta_decision', type: 'default', position: { x: 1100, y: 670 }, data: { label: '⚖️ Dirección Decide:\n✅ Aprobar → modifica\n  + nueva validación $0.01\n  + invalida cuenta anterior\n❌ Rechazar → mantiene\n  actual + notifica empleado\n🔐 Requiere 2FA' }, className: 'node-digital-human' },

    { id: 'cta_auditoria', type: 'default', position: { x: 1300, y: 670 }, data: { label: '📋 Auditoría Auto:\n• Quién modificó\n• Cuándo (timestamp)\n• Cuenta anterior/nueva\n• Razón del cambio\n• IP + dispositivo\n→ Inmutable, no editable' }, className: 'node-digital-auto' },

    { id: 'cta_responsabilidad', type: 'default', position: { x: 1200, y: 840 }, data: { label: '⚖️ Responsabilidad Clara:\n• Datos incorrectos emp\n  → Resp. del empleado\n  (firmó declaración)\n• Dirección modificó\n  → Resp. de Dirección\n• NUNCA Contabilidad' }, className: 'node-digital-rules' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 5: BLACKLIST WORKFLOW
    // ═══════════════════════════════════════════════════════
    { id: 'section_blacklist', type: 'default', position: { x: 600, y: 860 }, data: { label: '🚫 BLACKLIST\nWORKFLOW DIGITAL' }, className: 'node-digital-section' },

    { id: 'bl_trigger', type: 'default', position: { x: 600, y: 1020 }, data: { label: '⚙️ Triggers Automáticos:\n• 3 no-shows → proponer BL\n• 3 strikes inspector\n• Fraude detectado\n• Hotel solicita\n• Inspector reporta\n→ Caso creado auto' }, className: 'node-digital-rules' },

    { id: 'bl_expediente', type: 'default', position: { x: 800, y: 1020 }, data: { label: '📁 Expediente Digital:\nSistema recopila auto:\n• Historial completo\n• Evaluaciones\n• Incidentes previos\n• Evidencia adjunta\n• Recomendación del sistema' }, className: 'node-digital-auto' },

    { id: 'bl_decision', type: 'default', position: { x: 700, y: 1180 }, data: { label: '⚖️ Dirección Decide:\n• BL Hotel (solo esa prop)\n• BL Global (todas)\n• Suspensión temporal\n• Rechazar (no procede)\n→ 1-click con notas\n→ Notifica a todos\nlos roles afectados' }, className: 'node-digital-human' },

    // ELIMINADO
    { id: 'bl_eliminado', type: 'default', position: { x: 900, y: 1180 }, data: { label: '❌ Blacklist informal\nvía conversación\nsin registro\nsin expediente\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 6: ONBOARDING HOTEL DIGITAL
    // ═══════════════════════════════════════════════════════
    { id: 'section_onboard', type: 'default', position: { x: 200, y: 1200 }, data: { label: '🏨 ONBOARDING\nHOTEL DIGITAL' }, className: 'node-digital-section' },

    { id: 'onb_pipeline', type: 'default', position: { x: 50, y: 1360 }, data: { label: '📊 Pipeline Ventas:\nVendedor registra\nprospecto en CRM\n→ Negociación digital\n→ Rates configurados\n→ Margen 30-35% auto\ncalculado' }, className: 'node-digital-auto' },

    { id: 'onb_contrato', type: 'default', position: { x: 250, y: 1360 }, data: { label: '📄 Contrato Digital:\nFirma electrónica\n→ Auto-crea en sistema:\n• Carpeta PayRoll\n• Rates por posición\n• Estructura hotel\n→ 0 intervención manual' }, className: 'node-digital-auto' },

    { id: 'onb_credenciales', type: 'default', position: { x: 150, y: 1520 }, data: { label: '🔐 Setup Automático:\n→ Credenciales generadas\n→ Email bienvenida auto\n→ Video tutorials\n→ Hotel listo en horas\n(antes: días de setup)' }, className: 'node-digital-auto' },

    // ELIMINADO
    { id: 'onb_eliminado', type: 'default', position: { x: 350, y: 1520 }, data: { label: '❌ Setup manual:\nmúltiples reuniones\ncreación manual\nde carpetas y contratos\n→ AUTOMATIZADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 7: GESTIÓN CONTRATOS Y ALERTAS
    // ═══════════════════════════════════════════════════════
    { id: 'section_contratos', type: 'default', position: { x: 500, y: 1360 }, data: { label: '📄 CONTRATOS\nY ALERTAS AUTO' }, className: 'node-digital-section' },

    { id: 'con_tracking', type: 'default', position: { x: 500, y: 1520 }, data: { label: '📋 Tracking Contratos:\nRenovación anual auto\n→ Dashboard vencimientos\n→ Alertas escalonadas:\n🟡 90d 🟠 60d 🔴 30d\n📛 15d CRÍTICO' }, className: 'node-digital-rules' },

    { id: 'con_renovar', type: 'default', position: { x: 500, y: 1680 }, data: { label: '✅ Renovar:\n→ Revisar rates\n→ Firma digital\n→ Auto-actualiza sistema\n❌ No Renovar:\n→ Reasignar empleados\n→ Cerrar carpeta auto' }, className: 'node-digital-hybrid' },

    { id: 'con_riesgo', type: 'default', position: { x: 700, y: 1520 }, data: { label: '⚠️ Contratos en Riesgo:\nSistema detecta:\n• Pocas requisiciones\n• Quejas frecuentes\n• Pagos atrasados\n→ Alerta preventiva\nantes de no-renovación' }, className: 'node-digital-rules' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 8: SEGURIDAD Y CONTROL
    // ═══════════════════════════════════════════════════════
    { id: 'section_security', type: 'default', position: { x: 1100, y: 1020 }, data: { label: '🔐 SEGURIDAD\nY CONTROL' }, className: 'node-digital-section' },

    { id: 'sec_separacion', type: 'default', position: { x: 1100, y: 1180 }, data: { label: '⚖️ Separación Funciones:\n• Contabilidad NO aprueba\n  nómina\n• Dirección NO captura\n  datos\n• Roles enforced\n  por sistema (RBAC)' }, className: 'node-digital-rules' },

    { id: 'sec_2fa', type: 'default', position: { x: 1300, y: 1180 }, data: { label: '🔐 2FA Obligatorio:\nAcciones críticas:\n• Aprobar nómina\n• Modificar cuenta banco\n• Blacklist permanente\n→ SMS/Authenticator\n+ IP logging' }, className: 'node-digital-auto' },

    { id: 'sec_audit', type: 'default', position: { x: 1200, y: 1340 }, data: { label: '📋 Audit Trail Completo:\nTodas las acciones:\n• Quién hizo qué\n• Cuándo (timestamp)\n• Desde dónde (IP)\n• Valor anterior/nuevo\n→ Inmutable, exportable' }, className: 'node-digital-auto' },

    { id: 'sec_permisos', type: 'default', position: { x: 1200, y: 1500 }, data: { label: '🛡️ SOLO Dirección puede:\n✅ Aprobar nómina final\n✅ Modificar cuentas banco\n✅ Blacklist permanente\n✅ Acceso datos sensibles\n→ Enforced por sistema\nno por política informal' }, className: 'node-digital-rules' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 9: KPIs Y MÉTRICAS AUTO
    // ═══════════════════════════════════════════════════════
    { id: 'section_kpis', type: 'default', position: { x: 600, y: 1680 }, data: { label: '📈 KPIs Y MÉTRICAS\nAUTO-GENERADAS' }, className: 'node-digital-section' },

    { id: 'kpi_operacion', type: 'default', position: { x: 750, y: 1840 }, data: { label: '🏨 KPI Operación:\n• Hoteles activos\n• % cobertura requisiciones\n• Tiempo prom cobertura\n• Empleados activos\n→ Actualización real-time' }, className: 'node-digital-auto' },

    { id: 'kpi_satisfaccion', type: 'default', position: { x: 950, y: 1840 }, data: { label: '⭐ KPI Satisfacción:\n• NPS hoteles (encuestas)\n• NPS empleados\n• Quejas por hotel\n• Resolución <24h %\n→ Alertas si baja' }, className: 'node-digital-auto' },

    { id: 'kpi_estrategia', type: 'default', position: { x: 850, y: 2000 }, data: { label: '🎯 KPI Estrategia:\n• Pipeline ventas\n• Contratos en riesgo\n• Temporal vs Fijo %\n• Expansión ciudades\n• Tendencias industria\n→ Reportes semanales auto' }, className: 'node-digital-auto' },

    // ELIMINADO
    { id: 'kpi_eliminado', type: 'default', position: { x: 600, y: 1840 }, data: { label: '❌ KPIs calculados\nmanualmente en Excel\nreportados por WhatsApp\n→ AUTO-GENERADOS\nen dashboard' }, className: 'node-digital-eliminated' },

    // ── FIN ──
    { id: 'end', type: 'output', position: { x: 600, y: 2160 }, data: { label: '🏁 Dirección Digital\nControl Total con\nVisibilidad y Trazabilidad\n100% del Negocio' }, className: 'node-digital-section' },
  ],

  edges: [
    // Inicio → Secciones principales
    { id: 'e1', source: 'start', target: 'section_dashboard' },
    { id: 'e2', source: 'start', target: 'section_nomina' },
    { id: 'e3', source: 'start', target: 'section_cuentas' },

    // ── Dashboard Ejecutivo ──
    { id: 'e_d1', source: 'section_dashboard', target: 'dash_overview' },
    { id: 'e_d2', source: 'section_dashboard', target: 'dash_financiero' },
    { id: 'e_d3', source: 'section_dashboard', target: 'dash_rotacion' },
    { id: 'e_d4', source: 'dash_overview', target: 'dash_alertas' },
    { id: 'e_d5', source: 'dash_financiero', target: 'dash_aprobaciones' },
    { id: 'e_d6', source: 'dash_rotacion', target: 'dash_eliminado', style: { stroke: '#777', strokeDasharray: '5,5' } },

    // ── Aprobación Nómina Digital ──
    { id: 'e_n1', source: 'section_nomina', target: 'nom_recibir' },
    { id: 'e_n2', source: 'section_nomina', target: 'nom_dashboard' },
    { id: 'e_n3', source: 'nom_dashboard', target: 'nom_anomalias' },
    { id: 'e_n4', source: 'nom_recibir', target: 'nom_aprobar' },
    { id: 'e_n5', source: 'nom_anomalias', target: 'nom_aprobar', label: 'OK' },
    { id: 'e_n6', source: 'nom_anomalias', target: 'nom_rechazar', label: 'Errores', style: { stroke: '#c62828' } },
    { id: 'e_n7', source: 'nom_aprobar', target: 'nom_procesamiento', animated: true },
    { id: 'e_n8', source: 'nom_rechazar', target: 'nom_recibir', label: 'Re-submit', style: { stroke: '#c62828', strokeDasharray: '5,5' } },
    { id: 'e_n9', source: 'nom_procesamiento', target: 'nom_eliminado', style: { stroke: '#777', strokeDasharray: '5,5' } },

    // Nómina → Aprobaciones Especiales
    { id: 'e_ne1', source: 'nom_procesamiento', target: 'section_especiales', style: { strokeDasharray: '5,5' } },

    // ── Aprobaciones Especiales ──
    { id: 'e_e1', source: 'section_especiales', target: 'esp_vacaciones' },
    { id: 'e_e2', source: 'section_especiales', target: 'esp_16' },
    { id: 'e_e3', source: 'section_especiales', target: 'esp_extemp' },
    { id: 'e_e4', source: 'esp_vacaciones', target: 'esp_vac_irene' },
    { id: 'e_e5', source: 'esp_16', target: 'esp_16_deadline' },
    { id: 'e_e6', source: 'esp_extemp', target: 'esp_eliminado', style: { stroke: '#777', strokeDasharray: '5,5' } },

    // ── Cuentas Bancarias ──
    { id: 'e_c1', source: 'section_cuentas', target: 'cta_solicitud' },
    { id: 'e_c2', source: 'section_cuentas', target: 'cta_bloqueo' },
    { id: 'e_c3', source: 'cta_solicitud', target: 'cta_notificacion' },
    { id: 'e_c4', source: 'cta_notificacion', target: 'cta_decision' },
    { id: 'e_c5', source: 'cta_decision', target: 'cta_auditoria' },
    { id: 'e_c6', source: 'cta_auditoria', target: 'cta_responsabilidad' },

    // ── Blacklist Workflow ──
    { id: 'e_b1', source: 'dash_aprobaciones', target: 'section_blacklist', style: { strokeDasharray: '5,5' } },
    { id: 'e_b2', source: 'section_blacklist', target: 'bl_trigger' },
    { id: 'e_b3', source: 'section_blacklist', target: 'bl_expediente' },
    { id: 'e_b4', source: 'bl_trigger', target: 'bl_decision' },
    { id: 'e_b5', source: 'bl_expediente', target: 'bl_decision' },
    { id: 'e_b6', source: 'bl_decision', target: 'bl_eliminado', style: { stroke: '#777', strokeDasharray: '5,5' } },

    // ── Onboarding Hotel ──
    { id: 'e_o1', source: 'dash_overview', target: 'section_onboard', style: { strokeDasharray: '5,5' } },
    { id: 'e_o2', source: 'section_onboard', target: 'onb_pipeline' },
    { id: 'e_o3', source: 'section_onboard', target: 'onb_contrato' },
    { id: 'e_o4', source: 'onb_pipeline', target: 'onb_credenciales' },
    { id: 'e_o5', source: 'onb_contrato', target: 'onb_credenciales' },
    { id: 'e_o6', source: 'onb_credenciales', target: 'onb_eliminado', style: { stroke: '#777', strokeDasharray: '5,5' } },

    // ── Gestión Contratos ──
    { id: 'e_g1', source: 'section_onboard', target: 'section_contratos', style: { strokeDasharray: '5,5' } },
    { id: 'e_g2', source: 'section_contratos', target: 'con_tracking' },
    { id: 'e_g3', source: 'section_contratos', target: 'con_riesgo' },
    { id: 'e_g4', source: 'con_tracking', target: 'con_renovar' },
    { id: 'e_g5', source: 'con_riesgo', target: 'con_renovar', style: { strokeDasharray: '5,5' } },

    // ── Seguridad y Control ──
    { id: 'e_s1', source: 'cta_responsabilidad', target: 'section_security', style: { strokeDasharray: '5,5' } },
    { id: 'e_s2', source: 'section_security', target: 'sec_separacion' },
    { id: 'e_s3', source: 'section_security', target: 'sec_2fa' },
    { id: 'e_s4', source: 'sec_separacion', target: 'sec_audit' },
    { id: 'e_s5', source: 'sec_2fa', target: 'sec_audit' },
    { id: 'e_s6', source: 'sec_audit', target: 'sec_permisos' },

    // ── KPIs y Métricas ──
    { id: 'e_k1', source: 'con_renovar', target: 'section_kpis', style: { strokeDasharray: '5,5' } },
    { id: 'e_k2', source: 'section_kpis', target: 'kpi_operacion' },
    { id: 'e_k3', source: 'section_kpis', target: 'kpi_satisfaccion' },
    { id: 'e_k4', source: 'section_kpis', target: 'kpi_eliminado', style: { stroke: '#777', strokeDasharray: '5,5' } },
    { id: 'e_k5', source: 'kpi_operacion', target: 'kpi_estrategia' },
    { id: 'e_k6', source: 'kpi_satisfaccion', target: 'kpi_estrategia' },

    // ── Fin ──
    { id: 'e_end1', source: 'kpi_estrategia', target: 'end' },
    { id: 'e_end2', source: 'sec_permisos', target: 'end', style: { strokeDasharray: '5,5' } },
    { id: 'e_end3', source: 'bl_decision', target: 'end', style: { strokeDasharray: '5,5' } },
    { id: 'e_end4', source: 'esp_vac_irene', target: 'end', style: { strokeDasharray: '5,5' } },
  ]
}

export default adminOrangeDigitalFlow
