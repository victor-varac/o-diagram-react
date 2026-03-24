const qaCoordinatorFlowchartFlow = {
  nodes: [
    // INICIO
    { id: 'start', type: 'input', position: { x: 450, y: 0 }, data: { label: '🏆 QA Coordinator\nSupervisión de Calidad' }, className: 'node-quality' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 1: SERVICE INITIATION
    // ═══════════════════════════════════════════════════════
    { id: 'section_service', type: 'default', position: { x: 100, y: 150 }, data: { label: '🚀 QA & SERVICE\nINITIATION' }, className: 'node-warning' },
    { id: 'ensure_compliance', type: 'default', position: { x: 100, y: 280 }, data: { label: '✅ Asegurar Cumplimiento\ny Calidad del Servicio' }, className: 'node-quality' },
    { id: 'oversee_deploy', type: 'default', position: { x: 100, y: 410 }, data: { label: '📋 Supervisar Despliegue\nInicial de Servicios' }, className: 'node-info' },
    { id: 'schedule_inspections', type: 'default', position: { x: 100, y: 540 }, data: { label: '📅 Programar Inspecciones\ny Auditorías Regulares' }, className: 'node-quality' },
    { id: 'focus_new_staff', type: 'default', position: { x: 100, y: 670 }, data: { label: '🎯 Foco: Desempeño\nNuevo Personal +\nCumplimiento Operativo' }, className: 'node-warning' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 2: ACTIVITY MONITORING
    // ═══════════════════════════════════════════════════════
    { id: 'section_monitor', type: 'default', position: { x: 350, y: 150 }, data: { label: '📊 ACTIVITY\nMONITORING' }, className: 'node-warning' },
    { id: 'nav_dashboard', type: 'default', position: { x: 350, y: 280 }, data: { label: '📊 Navegar al Dashboard\n"Activity Monitoring"' }, className: 'node-info' },
    { id: 'review_logs', type: 'default', position: { x: 350, y: 410 }, data: { label: '📋 Revisar Actividades\nDiarias y Logs de\nInspectores y Colaboradores' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 3: REQUISITIONS MANAGEMENT
    // ═══════════════════════════════════════════════════════
    { id: 'section_requisitions', type: 'default', position: { x: 600, y: 150 }, data: { label: '📋 REQUISITIONS\nMANAGEMENT' }, className: 'node-warning' },
    { id: 'view_requisitions', type: 'default', position: { x: 600, y: 280 }, data: { label: '👁️ Ver Todas las\nRequisiciones' }, className: 'node-info' },
    { id: 'filter_req', type: 'default', position: { x: 600, y: 400 }, data: { label: '🔍 Filtrar por Status\no Rango de Fechas' }, className: 'node-info' },
    { id: 'detail_req', type: 'default', position: { x: 600, y: 520 }, data: { label: '📄 Ver Detalles\n(click tres puntos → View)' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 4: ACCIDENT REPORTS
    // ═══════════════════════════════════════════════════════
    { id: 'section_accidents', type: 'default', position: { x: 850, y: 150 }, data: { label: '🏥 ACCIDENT\nREPORTS' }, className: 'node-critical' },
    { id: 'access_reports', type: 'default', position: { x: 850, y: 280 }, data: { label: '📋 Click "Accident Report"\nVer reportes enviados' }, className: 'node-info' },
    { id: 'manage_reports', type: 'default', position: { x: 850, y: 400 }, data: { label: '⚙️ Gestionar Reportes\nVer o Eliminar\n(tres puntos → acción)' }, className: 'node-info' },
    { id: 'detailed_review', type: 'default', position: { x: 850, y: 530 }, data: { label: '📄 Revisión Detallada\nEmployee Data\nSupervisor Data' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 5: INCIDENT REPORTS
    // ═══════════════════════════════════════════════════════
    { id: 'section_incidents', type: 'default', position: { x: 250, y: 800 }, data: { label: '⚠️ INCIDENT\nREPORTS' }, className: 'node-critical' },
    { id: 'add_incident', type: 'default', position: { x: 250, y: 930 }, data: { label: '➕ Add Incident Report\nClick "+ Incident"' }, className: 'node-info' },
    { id: 'fill_incident', type: 'default', position: { x: 250, y: 1060 }, data: { label: '📝 Completar Descripción\n+ Declaraciones Testigos\nClick "Next"' }, className: 'node-info' },
    { id: 'submit_incident', type: 'default', position: { x: 250, y: 1190 }, data: { label: '✅ Revisar → "Request"\npara enviar reporte' }, className: 'node-success' },
    { id: 'view_incidents', type: 'default', position: { x: 400, y: 1060 }, data: { label: '👁️ Ver Reportes\nEnviados\n(tres puntos → View)' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 6: REFUSAL INFORMATION
    // ═══════════════════════════════════════════════════════
    { id: 'section_refusal', type: 'default', position: { x: 600, y: 800 }, data: { label: '🚫 REFUSAL\nINFORMATION' }, className: 'node-critical' },
    { id: 'add_refusal', type: 'default', position: { x: 600, y: 930 }, data: { label: '➕ Add Refusal Report\nClick "+ Refusal"' }, className: 'node-info' },
    { id: 'fill_refusal', type: 'default', position: { x: 600, y: 1060 }, data: { label: '📝 Completar Info\nDescripción + Testigos\nClick "Next"' }, className: 'node-info' },
    { id: 'submit_refusal', type: 'default', position: { x: 600, y: 1190 }, data: { label: '✅ Revisar → "Request"\npara finalizar' }, className: 'node-success' },
    { id: 'view_refusal', type: 'default', position: { x: 750, y: 1060 }, data: { label: '👁️ Ver Detalles\nde Rechazos\n(tres puntos → View)' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 7: CLAIMS HANDLING
    // ═══════════════════════════════════════════════════════
    { id: 'section_claims', type: 'default', position: { x: 450, y: 1340 }, data: { label: '💰 CLAIMS\nHANDLING' }, className: 'node-accounting' },
    { id: 'track_claims', type: 'default', position: { x: 350, y: 1470 }, data: { label: '📊 Rastrear Reclamos\nde Hoteles, Colaboradores\no QA Inspectors' }, className: 'node-info' },
    { id: 'view_claims_detail', type: 'default', position: { x: 550, y: 1470 }, data: { label: '👁️ Ver Detalles\nDiscrepancias de pago\ny datos relacionados' }, className: 'node-accounting' },
  ],
  edges: [
    // Start → Secciones
    { id: 'e1', source: 'start', target: 'section_service' },
    { id: 'e2', source: 'start', target: 'section_monitor' },
    { id: 'e3', source: 'start', target: 'section_requisitions' },
    { id: 'e4', source: 'start', target: 'section_accidents' },

    // Service Initiation
    { id: 'e5', source: 'section_service', target: 'ensure_compliance' },
    { id: 'e6', source: 'ensure_compliance', target: 'oversee_deploy' },
    { id: 'e7', source: 'oversee_deploy', target: 'schedule_inspections' },
    { id: 'e8', source: 'schedule_inspections', target: 'focus_new_staff' },

    // Activity Monitoring
    { id: 'e9', source: 'section_monitor', target: 'nav_dashboard' },
    { id: 'e10', source: 'nav_dashboard', target: 'review_logs' },

    // Requisitions
    { id: 'e11', source: 'section_requisitions', target: 'view_requisitions' },
    { id: 'e12', source: 'view_requisitions', target: 'filter_req' },
    { id: 'e13', source: 'filter_req', target: 'detail_req' },

    // Accident Reports
    { id: 'e14', source: 'section_accidents', target: 'access_reports' },
    { id: 'e15', source: 'access_reports', target: 'manage_reports' },
    { id: 'e16', source: 'manage_reports', target: 'detailed_review' },

    // → Incidents & Refusals
    { id: 'e17', source: 'focus_new_staff', target: 'section_incidents' },
    { id: 'e18', source: 'review_logs', target: 'section_incidents', style: { strokeDasharray: '5,5' } },
    { id: 'e19', source: 'detailed_review', target: 'section_refusal', style: { strokeDasharray: '5,5' } },
    { id: 'e20', source: 'detail_req', target: 'section_refusal', style: { strokeDasharray: '5,5' } },

    // Incidents
    { id: 'e21', source: 'section_incidents', target: 'add_incident' },
    { id: 'e22', source: 'add_incident', target: 'fill_incident' },
    { id: 'e23', source: 'fill_incident', target: 'submit_incident' },
    { id: 'e24', source: 'section_incidents', target: 'view_incidents' },

    // Refusals
    { id: 'e25', source: 'section_refusal', target: 'add_refusal' },
    { id: 'e26', source: 'add_refusal', target: 'fill_refusal' },
    { id: 'e27', source: 'fill_refusal', target: 'submit_refusal' },
    { id: 'e28', source: 'section_refusal', target: 'view_refusal' },

    // → Claims
    { id: 'e29', source: 'submit_incident', target: 'section_claims', animated: true },
    { id: 'e30', source: 'submit_refusal', target: 'section_claims', animated: true },

    // Claims
    { id: 'e31', source: 'section_claims', target: 'track_claims' },
    { id: 'e32', source: 'section_claims', target: 'view_claims_detail' },
  ]
}

export default qaCoordinatorFlowchartFlow
