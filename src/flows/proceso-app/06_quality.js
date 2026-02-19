const qualityFlowApp = {
  nodes: [
    // Inspector Dashboard
    { id: 'start', type: 'input', position: { x: 50, y: 50 }, data: { label: '🏆 Inspector\nApp Móvil' }, className: 'node-automated' },
    { id: 'dashboard', type: 'default', position: { x: 50, y: 150 }, data: { label: '📱 Dashboard\nTiempo Real' }, className: 'node-automated' },
    
    // Auto-assigned tasks
    { id: 'auto_assign', type: 'default', position: { x: 250, y: 50 }, data: { label: '⚡ Asignación\nAutomática' }, className: 'node-automated' },
    { id: 'optimized_route', type: 'default', position: { x: 250, y: 150 }, data: { label: '🗺️ Rutas\nOptimizadas GPS' }, className: 'node-automated' },
    { id: 'priorities', type: 'default', position: { x: 250, y: 250 }, data: { label: '🎯 Prioridades\nIA' }, className: 'node-automated' },
    
    // Onboarding section (hybrid)
    { id: 'onboard_notif', type: 'default', position: { x: 450, y: 50 }, data: { label: '🔔 Notificación\nNuevo Onboarding' }, className: 'node-automated' },
    { id: 'auto_schedule', type: 'default', position: { x: 650, y: 50 }, data: { label: '⚡ Cita Auto\nCoordinada' }, className: 'node-automated' },
    { id: 'emp_notified', type: 'default', position: { x: 650, y: 150 }, data: { label: '📲 Empleado\nNotificado' }, className: 'node-automated' },
    { id: 'day_1_human', type: 'default', position: { x: 850, y: 100 }, data: { label: '👤 Inspector\nPresencial Día 1' }, className: 'node-human' },
    { id: 'help_app', type: 'default', position: { x: 1050, y: 100 }, data: { label: '👤 Ayuda Completar\nApp en Tablet' }, className: 'node-human' },
    
    // Auto tracking
    { id: 'auto_track', type: 'default', position: { x: 850, y: 250 }, data: { label: '⚡ Tracking 72h\nAutomático' }, className: 'node-automated' },
    { id: 'notif_24h', type: 'default', position: { x: 1050, y: 200 }, data: { label: '🤖 24h: Push +\nSMS + Email' }, className: 'node-automated' },
    { id: 'notif_48h', type: 'default', position: { x: 1050, y: 280 }, data: { label: '🤖 48h: Alerta\n🟠 NARANJA' }, className: 'node-automated' },
    { id: 'notif_72h', type: 'default', position: { x: 1050, y: 360 }, data: { label: '⚠️ 72h: Inspector\nLlamada Manual' }, className: 'node-human' },
    
    { id: 'check_60', type: 'default', position: { x: 850, y: 450 }, data: { label: '⚡ Sistema Valida\n≥60%?' }, className: 'node-automated' },
    { id: 'auto_strike', type: 'default', position: { x: 1050, y: 500 }, data: { label: '❌ Strike Automático\nal Inspector' }, className: 'node-critical' },
    { id: 'success', type: 'default', position: { x: 1050, y: 400 }, data: { label: '✅ Onboarding\nExitoso' }, className: 'node-success' },
    
    // Uniform delivery (semi-automated)
    { id: 'uniform_trigger', type: 'default', position: { x: 50, y: 400 }, data: { label: '⚡ Día 3/5\nOrden Automática' }, className: 'node-automated' },
    { id: 'route_uniform', type: 'default', position: { x: 250, y: 400 }, data: { label: '🗺️ Ruta GPS\nOptimizada' }, className: 'node-automated' },
    { id: 'prep_uniform', type: 'default', position: { x: 450, y: 400 }, data: { label: '👤 Preparar\nUniforme $85' }, className: 'node-human' },
    { id: 'deliver', type: 'default', position: { x: 650, y: 400 }, data: { label: '👤 Entrega\nPresencial' }, className: 'node-human' },
    { id: 'digital_sign', type: 'default', position: { x: 650, y: 500 }, data: { label: '📱 Firma Digital\nen App' }, className: 'node-automated' },
    { id: 'auto_sync', type: 'default', position: { x: 850, y: 550 }, data: { label: '⚡ Sync Automático\nContabilidad' }, className: 'node-automated' },
    { id: 'auto_discount', type: 'default', position: { x: 1050, y: 550 }, data: { label: '🤖 Descuento\nAutomático 4x$21.25' }, className: 'node-automated' },
    
    // Inspections (human + digital reporting)
    { id: 'weekly_route', type: 'default', position: { x: 50, y: 650 }, data: { label: '⚡ Rutas Semanales\nAuto-generadas' }, className: 'node-automated' },
    { id: 'visit', type: 'default', position: { x: 250, y: 650 }, data: { label: '👤 Visita\nPresencial Hotel' }, className: 'node-human' },
    { id: 'check_quality', type: 'default', position: { x: 450, y: 650 }, data: { label: '👤 Verificar\nEstándares' }, className: 'node-human' },
    { id: 'report_app', type: 'default', position: { x: 650, y: 650 }, data: { label: '📱 Reportar en App\n+ Fotos + GPS' }, className: 'node-automated' },
    { id: 'ticket_system', type: 'default', position: { x: 850, y: 650 }, data: { label: '⚡ Ticket Automático\nSi hay problemas' }, className: 'node-automated' },
    
    // Incidents (auto-categorized)
    { id: 'incident_report', type: 'default', position: { x: 50, y: 800 }, data: { label: '📱 Reporte Incidente\nEn App' }, className: 'node-automated' },
    { id: 'ai_category', type: 'default', position: { x: 250, y: 800 }, data: { label: '🤖 IA Categoriza\nAutomáticamente' }, className: 'node-automated' },
    { id: 'minor_auto', type: 'default', position: { x: 450, y: 750 }, data: { label: '🟡 Menor\nSolución Automática' }, className: 'node-automated' },
    { id: 'severe_human', type: 'default', position: { x: 450, y: 850 }, data: { label: '🔴 Grave\nInspector Investiga' }, className: 'node-human' },
    { id: 'blacklist_proposal', type: 'default', position: { x: 650, y: 850 }, data: { label: '👤 Proponer\nBlack List' }, className: 'node-human' },
    { id: 'direction_approve', type: 'default', position: { x: 850, y: 850 }, data: { label: '👤 Dirección\nAprueba' }, className: 'node-critical' },
    { id: 'auto_blacklist', type: 'default', position: { x: 1050, y: 850 }, data: { label: '⚡ Sistema Actualiza\nBlack List' }, className: 'node-automated' },
    
    // Timesheet validation
    { id: 'timesheet', type: 'default', position: { x: 50, y: 1000 }, data: { label: '⚡ Timesheet\nValidación Auto' }, className: 'node-automated' },
    { id: 'punch_integration', type: 'default', position: { x: 250, y: 1000 }, data: { label: '🤖 Integración\nSistema Ponchado' }, className: 'node-automated' },
    { id: 'discrepancy_alert', type: 'default', position: { x: 450, y: 1000 }, data: { label: '⚠️ Alerta Solo\nsi Discrepancia' }, className: 'node-automated' },
    { id: 'inspector_review', type: 'default', position: { x: 650, y: 1000 }, data: { label: '👤 Inspector Revisa\nSolo Excepciones' }, className: 'node-human' },
    
    // Vacations (self-service)
    { id: 'vacation_request', type: 'default', position: { x: 50, y: 1150 }, data: { label: '📱 Empleado Solicita\nVacaciones (App)' }, className: 'node-automated' },
    { id: 'auto_eligibility', type: 'default', position: { x: 250, y: 1150 }, data: { label: '⚡ Sistema Valida\n52 semanas' }, className: 'node-automated' },
    { id: 'hotel_notif', type: 'default', position: { x: 450, y: 1150 }, data: { label: '🤖 Notificación\nAutomática Hotel' }, className: 'node-automated' },
    { id: 'inspector_approve', type: 'default', position: { x: 650, y: 1150 }, data: { label: '👤 Inspector Aprueba\nen App' }, className: 'node-human' },
    { id: 'auto_calendar', type: 'default', position: { x: 850, y: 1150 }, data: { label: '⚡ Calendario\nActualizado' }, className: 'node-automated' },
    
    // Prospecting (automated funnel)
    { id: 'web_form', type: 'default', position: { x: 50, y: 1300 }, data: { label: '📱 Formulario Web\nSelf-Service' }, className: 'node-automated' },
    { id: 'chatbot', type: 'default', position: { x: 250, y: 1300 }, data: { label: '🤖 Chatbot\nScreening Inicial' }, className: 'node-automated' },
    { id: 'auto_filter', type: 'default', position: { x: 450, y: 1300 }, data: { label: '⚡ Filtrado\nAutomático' }, className: 'node-automated' },
    { id: 'inspector_review_pros', type: 'default', position: { x: 650, y: 1300 }, data: { label: '👤 Inspector Revisa\nSolo Matches' }, className: 'node-human' },
    { id: 'to_recruiter', type: 'default', position: { x: 850, y: 1300 }, data: { label: '⚡ Auto-Asignado\na Reclutadora' }, className: 'node-automated' },
  ],
  edges: [
    // Dashboard
    { id: 'e1', source: 'start', target: 'dashboard', animated: true },
    { id: 'e2', source: 'dashboard', target: 'auto_assign', animated: true },
    { id: 'e3', source: 'auto_assign', target: 'optimized_route', animated: true },
    { id: 'e4', source: 'auto_assign', target: 'priorities', animated: true },
    
    // Onboarding
    { id: 'e5', source: 'auto_assign', target: 'onboard_notif', animated: true },
    { id: 'e6', source: 'onboard_notif', target: 'auto_schedule', animated: true },
    { id: 'e7', source: 'auto_schedule', target: 'emp_notified', animated: true },
    { id: 'e8', source: 'emp_notified', target: 'day_1_human' },
    { id: 'e9', source: 'day_1_human', target: 'help_app' },
    { id: 'e10', source: 'help_app', target: 'auto_track', animated: true },
    { id: 'e11', source: 'auto_track', target: 'notif_24h', animated: true },
    { id: 'e12', source: 'notif_24h', target: 'notif_48h', animated: true },
    { id: 'e13', source: 'notif_48h', target: 'notif_72h' },
    { id: 'e14', source: 'notif_72h', target: 'check_60', animated: true },
    { id: 'e15', source: 'check_60', target: 'auto_strike', label: '<60%', style: { stroke: '#c62828' } },
    { id: 'e16', source: 'check_60', target: 'success', label: '≥60%', animated: true },
    
    // Uniforms
    { id: 'e17', source: 'dashboard', target: 'uniform_trigger', animated: true },
    { id: 'e18', source: 'uniform_trigger', target: 'route_uniform', animated: true },
    { id: 'e19', source: 'route_uniform', target: 'prep_uniform' },
    { id: 'e20', source: 'prep_uniform', target: 'deliver' },
    { id: 'e21', source: 'deliver', target: 'digital_sign' },
    { id: 'e22', source: 'digital_sign', target: 'auto_sync', animated: true },
    { id: 'e23', source: 'auto_sync', target: 'auto_discount', animated: true },
    
    // Inspections
    { id: 'e24', source: 'dashboard', target: 'weekly_route', animated: true },
    { id: 'e25', source: 'weekly_route', target: 'visit' },
    { id: 'e26', source: 'visit', target: 'check_quality' },
    { id: 'e27', source: 'check_quality', target: 'report_app' },
    { id: 'e28', source: 'report_app', target: 'ticket_system', animated: true },
    
    // Incidents
    { id: 'e29', source: 'ticket_system', target: 'incident_report', style: { strokeDasharray: '5,5' } },
    { id: 'e30', source: 'incident_report', target: 'ai_category', animated: true },
    { id: 'e31', source: 'ai_category', target: 'minor_auto', label: 'Menor', animated: true },
    { id: 'e32', source: 'ai_category', target: 'severe_human', label: 'Grave' },
    { id: 'e33', source: 'severe_human', target: 'blacklist_proposal' },
    { id: 'e34', source: 'blacklist_proposal', target: 'direction_approve' },
    { id: 'e35', source: 'direction_approve', target: 'auto_blacklist', label: 'Aprueba', animated: true },
    
    // Timesheet
    { id: 'e36', source: 'dashboard', target: 'timesheet', animated: true },
    { id: 'e37', source: 'timesheet', target: 'punch_integration', animated: true },
    { id: 'e38', source: 'punch_integration', target: 'discrepancy_alert', animated: true },
    { id: 'e39', source: 'discrepancy_alert', target: 'inspector_review', label: 'Si hay error' },
    
    // Vacations
    { id: 'e40', source: 'dashboard', target: 'vacation_request', style: { strokeDasharray: '5,5' } },
    { id: 'e41', source: 'vacation_request', target: 'auto_eligibility', animated: true },
    { id: 'e42', source: 'auto_eligibility', target: 'hotel_notif', animated: true },
    { id: 'e43', source: 'hotel_notif', target: 'inspector_approve' },
    { id: 'e44', source: 'inspector_approve', target: 'auto_calendar', animated: true },
    
    // Prospecting
    { id: 'e45', source: 'dashboard', target: 'web_form', style: { strokeDasharray: '5,5' } },
    { id: 'e46', source: 'web_form', target: 'chatbot', animated: true },
    { id: 'e47', source: 'chatbot', target: 'auto_filter', animated: true },
    { id: 'e48', source: 'auto_filter', target: 'inspector_review_pros' },
    { id: 'e49', source: 'inspector_review_pros', target: 'to_recruiter', animated: true },
  ]
}

export default qualityFlowApp
