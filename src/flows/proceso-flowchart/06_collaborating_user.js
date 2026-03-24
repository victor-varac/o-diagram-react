const collaboratingUserFlowchartFlow = {
  nodes: [
    // INICIO
    { id: 'start', type: 'input', position: { x: 350, y: 0 }, data: { label: '👷 Collaborating User\nColaborador' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 1: ONBOARDING
    // ═══════════════════════════════════════════════════════
    { id: 'section_onboard', type: 'default', position: { x: 350, y: 150 }, data: { label: '📋 ONBOARDING' }, className: 'node-warning' },
    { id: 'receive_login', type: 'default', position: { x: 250, y: 280 }, data: { label: '📱 Recibir Login\npara App Móvil\n(Sign Up)' }, className: 'node-info' },
    { id: 'submit_docs', type: 'default', position: { x: 450, y: 280 }, data: { label: '📄 Enviar Todos los\nDocumentos Requeridos' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 2: TAREAS ASIGNADAS
    // ═══════════════════════════════════════════════════════
    { id: 'section_tasks', type: 'default', position: { x: 350, y: 430 }, data: { label: '📋 VIEW ASSIGNED\nTASKS' }, className: 'node-warning' },
    { id: 'check_tasks', type: 'default', position: { x: 350, y: 560 }, data: { label: '👁️ Revisar y Aceptar\nTareas Asignadas\nen el Sistema' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 3: CHECK-IN
    // ═══════════════════════════════════════════════════════
    { id: 'section_checkin', type: 'default', position: { x: 100, y: 700 }, data: { label: '📲 CHECK-IN' }, className: 'node-success' },
    { id: 'scan_qr_in', type: 'default', position: { x: 100, y: 830 }, data: { label: '📱 Escanear QR Code\nen el Hotel' }, className: 'node-success' },
    { id: 'geofencing', type: 'default', position: { x: 100, y: 950 }, data: { label: '📍 Geofencing\nUbicación Habilitada' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 4: EJECUCIÓN DE TAREAS
    // ═══════════════════════════════════════════════════════
    { id: 'section_execute', type: 'default', position: { x: 350, y: 700 }, data: { label: '⚡ TASK\nCOMPLETION' }, className: 'node-warning' },
    { id: 'follow_routes', type: 'default', position: { x: 350, y: 830 }, data: { label: '🛣️ Seguir Rutas\nEstablecidas' }, className: 'node-info' },
    { id: 'complete_tasks', type: 'default', position: { x: 350, y: 950 }, data: { label: '✅ Completar\nTareas' }, className: 'node-success' },
    { id: 'report_work', type: 'default', position: { x: 350, y: 1070 }, data: { label: '📝 Reportar Trabajo\nCompletado + Problemas\nEncontrados' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 5: CHECK-OUT
    // ═══════════════════════════════════════════════════════
    { id: 'section_checkout', type: 'default', position: { x: 600, y: 700 }, data: { label: '📲 CHECK-OUT' }, className: 'node-critical' },
    { id: 'press_checkout', type: 'default', position: { x: 600, y: 830 }, data: { label: '🔘 Presionar\n"Check-out"' }, className: 'node-info' },
    { id: 'activate_camera', type: 'default', position: { x: 600, y: 950 }, data: { label: '📷 Activar Cámara' }, className: 'node-info' },
    { id: 'scan_qr_out', type: 'default', position: { x: 600, y: 1070 }, data: { label: '📱 Escanear QR Code\nnuevamente para\nCheckout' }, className: 'node-success' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 6: WORK ANALYTICS
    // ═══════════════════════════════════════════════════════
    { id: 'section_analytics', type: 'default', position: { x: 150, y: 1220 }, data: { label: '📊 WORK\nANALYTICS' }, className: 'node-warning' },
    { id: 'view_analytics', type: 'default', position: { x: 50, y: 1350 }, data: { label: '📊 Seleccionar\n"Work Analytics"\ndel menú principal' }, className: 'node-info' },
    { id: 'dashboard', type: 'default', position: { x: 50, y: 1480 }, data: { label: '📈 User Dashboard\nQuality Score\nWork History\nTimetables' }, className: 'node-success' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 7: SOPORTE
    // ═══════════════════════════════════════════════════════
    { id: 'section_support', type: 'default', position: { x: 500, y: 1220 }, data: { label: '🛟 SUPPORT &\nCOMMUNICATION' }, className: 'node-info' },
    { id: 'press_chat', type: 'default', position: { x: 500, y: 1350 }, data: { label: '💬 Presionar ícono\nde Chat' }, className: 'node-info' },
    { id: 'faq_option', type: 'default', position: { x: 420, y: 1480 }, data: { label: '❓ FAQ' }, className: 'node-info' },
    { id: 'chat_option', type: 'default', position: { x: 570, y: 1480 }, data: { label: '💬 Chat\nWith Us' }, className: 'node-info' },
  ],
  edges: [
    // Start → Onboarding
    { id: 'e1', source: 'start', target: 'section_onboard' },

    // Onboarding
    { id: 'e2', source: 'section_onboard', target: 'receive_login' },
    { id: 'e3', source: 'section_onboard', target: 'submit_docs' },

    // Onboarding → Tasks
    { id: 'e4', source: 'receive_login', target: 'section_tasks', animated: true },
    { id: 'e5', source: 'submit_docs', target: 'section_tasks' },

    // Tasks
    { id: 'e6', source: 'section_tasks', target: 'check_tasks' },

    // Tasks → Check-in, Execute, Check-out
    { id: 'e7', source: 'check_tasks', target: 'section_checkin' },
    { id: 'e8', source: 'check_tasks', target: 'section_execute' },
    { id: 'e9', source: 'check_tasks', target: 'section_checkout' },

    // Check-in
    { id: 'e10', source: 'section_checkin', target: 'scan_qr_in' },
    { id: 'e11', source: 'scan_qr_in', target: 'geofencing' },

    // Execute
    { id: 'e12', source: 'section_execute', target: 'follow_routes' },
    { id: 'e13', source: 'follow_routes', target: 'complete_tasks' },
    { id: 'e14', source: 'complete_tasks', target: 'report_work' },

    // Check-out
    { id: 'e15', source: 'section_checkout', target: 'press_checkout' },
    { id: 'e16', source: 'press_checkout', target: 'activate_camera' },
    { id: 'e17', source: 'activate_camera', target: 'scan_qr_out' },

    // Flow: Check-in → Execute → Check-out
    { id: 'e18', source: 'geofencing', target: 'section_execute', animated: true, label: 'Ubicación OK' },
    { id: 'e19', source: 'report_work', target: 'section_checkout', animated: true, label: 'Tareas listas' },

    // Analytics & Support
    { id: 'e20', source: 'scan_qr_out', target: 'section_analytics', style: { strokeDasharray: '5,5' } },
    { id: 'e21', source: 'scan_qr_out', target: 'section_support', style: { strokeDasharray: '5,5' } },

    // Analytics
    { id: 'e22', source: 'section_analytics', target: 'view_analytics' },
    { id: 'e23', source: 'view_analytics', target: 'dashboard' },

    // Support
    { id: 'e24', source: 'section_support', target: 'press_chat' },
    { id: 'e25', source: 'press_chat', target: 'faq_option' },
    { id: 'e26', source: 'press_chat', target: 'chat_option' },
  ]
}

export default collaboratingUserFlowchartFlow
