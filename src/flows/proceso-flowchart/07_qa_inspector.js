const qaInspectorFlowchartFlow = {
  nodes: [
    // INICIO
    { id: 'start', type: 'input', position: { x: 400, y: 0 }, data: { label: '🔍 QA Inspector\nInspección de Calidad' }, className: 'node-quality' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 1: ONBOARDING DE NUEVO COLABORADOR
    // ═══════════════════════════════════════════════════════
    { id: 'section_onboard', type: 'default', position: { x: 100, y: 150 }, data: { label: '📋 ONBOARDING\nNUEVO COLABORADOR' }, className: 'node-warning' },
    { id: 'notif_new_colab', type: 'default', position: { x: 100, y: 280 }, data: { label: '🔔 Recibe Notificación\nNuevo Colaborador\nAgregado' }, className: 'node-info' },
    { id: 'diligence_checks', type: 'default', position: { x: 100, y: 410 }, data: { label: '📝 Diligence Checks\nVerificaciones detalladas\n+ Formularios' }, className: 'node-quality' },
    { id: 'fill_application', type: 'default', position: { x: 100, y: 550 }, data: { label: '📄 Llenar Formulario\nde Aplicación\n(con detalles del candidato)' }, className: 'node-info' },
    { id: 'uniform_delivery', type: 'default', position: { x: 100, y: 690 }, data: { label: '👕 Uniform Delivery\nEntregar uniforme\nFinalizar onboarding' }, className: 'node-success' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 2: RUTAS E INSPECCIONES
    // ═══════════════════════════════════════════════════════
    { id: 'section_routes', type: 'default', position: { x: 400, y: 150 }, data: { label: '🛣️ ROUTES\nSECTION' }, className: 'node-warning' },
    { id: 'assign_qa', type: 'default', position: { x: 350, y: 280 }, data: { label: '🎯 Assign QA\na propiedades' }, className: 'node-info' },
    { id: 'route_selection', type: 'default', position: { x: 500, y: 280 }, data: { label: '🗺️ Route Selection\nSeleccionar ruta\npara visitar hoteles' }, className: 'node-info' },
    { id: 'manage_routes', type: 'default', position: { x: 400, y: 410 }, data: { label: '📍 Gestionar Rutas\nCríticas para logística\nde BDs y operaciones' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 3: QA FORM COMPLETION
    // ═══════════════════════════════════════════════════════
    { id: 'section_qa_forms', type: 'default', position: { x: 400, y: 560 }, data: { label: '📝 QA FORM\nCOMPLETION' }, className: 'node-quality' },
    { id: 'qa_form_hotel', type: 'default', position: { x: 300, y: 690 }, data: { label: '🏨 Formulario QA\npor Hotel Asignado' }, className: 'node-hotel' },
    { id: 'qa_form_colab', type: 'default', position: { x: 500, y: 690 }, data: { label: '👷 Formulario QA\npor Colaborador' }, className: 'node-info' },
    { id: 'time_spent', type: 'default', position: { x: 300, y: 820 }, data: { label: '⏱️ Campo "Time Spent"\nPorcentaje de tiempo\n(1-100%)' }, className: 'node-warning' },
    { id: 'compliance_check', type: 'default', position: { x: 500, y: 820 }, data: { label: '✅ Compliance Checks\nYes = Full Score\nNo = 0 Score' }, className: 'node-quality' },
    { id: 'inspections_count', type: 'default', position: { x: 400, y: 950 }, data: { label: '🔍 Inspector realiza\n2-3 inspecciones\nen equipo actual\nde la propiedad' }, className: 'node-quality' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 4: HOTELS SECTION
    // ═══════════════════════════════════════════════════════
    { id: 'section_hotels', type: 'default', position: { x: 700, y: 150 }, data: { label: '🏨 HOTELS\nSECTION' }, className: 'node-hotel' },
    { id: 'view_assigned', type: 'default', position: { x: 700, y: 280 }, data: { label: '👁️ Ver Hoteles\nAsignados al Área\ndel QA Inspector' }, className: 'node-hotel' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 5: CLAIMS
    // ═══════════════════════════════════════════════════════
    { id: 'section_claims', type: 'default', position: { x: 700, y: 430 }, data: { label: '📋 CLAIMS\nSECTION' }, className: 'node-warning' },
    { id: 'submit_claims', type: 'default', position: { x: 650, y: 560 }, data: { label: '➕ Enviar Nuevos\nReclamos' }, className: 'node-info' },
    { id: 'view_claims', type: 'default', position: { x: 800, y: 560 }, data: { label: '👁️ Ver Reclamos\nExistentes' }, className: 'node-info' },
    { id: 'handle_issues', type: 'default', position: { x: 700, y: 690 }, data: { label: '⚙️ Manejar discrepancias\no problemas de\noperaciones hotel\no colaboradores' }, className: 'node-warning' },
  ],
  edges: [
    // Start → Secciones
    { id: 'e1', source: 'start', target: 'section_onboard' },
    { id: 'e2', source: 'start', target: 'section_routes' },
    { id: 'e3', source: 'start', target: 'section_hotels' },

    // Onboarding
    { id: 'e4', source: 'section_onboard', target: 'notif_new_colab' },
    { id: 'e5', source: 'notif_new_colab', target: 'diligence_checks' },
    { id: 'e6', source: 'diligence_checks', target: 'fill_application' },
    { id: 'e7', source: 'fill_application', target: 'uniform_delivery', animated: true },

    // Routes
    { id: 'e8', source: 'section_routes', target: 'assign_qa' },
    { id: 'e9', source: 'section_routes', target: 'route_selection' },
    { id: 'e10', source: 'assign_qa', target: 'manage_routes' },
    { id: 'e11', source: 'route_selection', target: 'manage_routes' },

    // Routes → QA Forms
    { id: 'e12', source: 'manage_routes', target: 'section_qa_forms', animated: true },

    // QA Forms
    { id: 'e13', source: 'section_qa_forms', target: 'qa_form_hotel' },
    { id: 'e14', source: 'section_qa_forms', target: 'qa_form_colab' },
    { id: 'e15', source: 'qa_form_hotel', target: 'time_spent' },
    { id: 'e16', source: 'qa_form_colab', target: 'compliance_check' },
    { id: 'e17', source: 'time_spent', target: 'inspections_count' },
    { id: 'e18', source: 'compliance_check', target: 'inspections_count' },

    // Hotels
    { id: 'e19', source: 'section_hotels', target: 'view_assigned' },
    { id: 'e20', source: 'view_assigned', target: 'section_claims' },

    // Claims
    { id: 'e21', source: 'section_claims', target: 'submit_claims' },
    { id: 'e22', source: 'section_claims', target: 'view_claims' },
    { id: 'e23', source: 'submit_claims', target: 'handle_issues' },
    { id: 'e24', source: 'view_claims', target: 'handle_issues' },
  ]
}

export default qaInspectorFlowchartFlow
