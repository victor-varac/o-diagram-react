const recruiterFlowchartFlow = {
  nodes: [
    // INICIO
    { id: 'start', type: 'input', position: { x: 350, y: 0 }, data: { label: '👥 Recruiter\nReclutamiento y Asignación' }, className: 'node-recruitment' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 1: RECEPCIÓN DE REQUISICIONES
    // ═══════════════════════════════════════════════════════
    { id: 'section_req', type: 'default', position: { x: 350, y: 150 }, data: { label: '📋 RECRUITMENT\nAND SCREENING' }, className: 'node-warning' },
    { id: 'receive_req', type: 'default', position: { x: 350, y: 280 }, data: { label: '📥 Recibe Requisición\ndel Hotel Manager' }, className: 'node-info' },
    { id: 'review_req', type: 'default', position: { x: 350, y: 400 }, data: { label: '🔍 Revisar Requisición\nRequisitos del puesto\n+ Estándares empresa' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 2: CANDIDATE SOURCING
    // ═══════════════════════════════════════════════════════
    { id: 'section_sourcing', type: 'default', position: { x: 100, y: 530 }, data: { label: '📞 CANDIDATE\nSOURCING' }, className: 'node-warning' },
    { id: 'call_candidates', type: 'default', position: { x: 100, y: 660 }, data: { label: '📞 Llamar candidatos\nprospectivos' }, className: 'node-info' },
    { id: 'gather_info', type: 'default', position: { x: 100, y: 780 }, data: { label: '📊 Recopilar información\ny crear base de datos' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 3: BLACKLIST VERIFICATION
    // ═══════════════════════════════════════════════════════
    { id: 'section_blacklist', type: 'default', position: { x: 350, y: 530 }, data: { label: '🚫 BLACKLIST\nVERIFICATION' }, className: 'node-critical' },
    { id: 'verify_blacklist', type: 'default', position: { x: 350, y: 660 }, data: { label: '🔍 Verificar contra\nBlacklist Database' }, className: 'node-warning' },
    { id: 'blacklist_fail', type: 'default', position: { x: 250, y: 800 }, data: { label: '❌ En Blacklist\nRECHAZADO' }, className: 'node-critical' },
    { id: 'blacklist_pass', type: 'default', position: { x: 450, y: 800 }, data: { label: '✅ Pasa Filtro\n→ Pool de Candidatos' }, className: 'node-success' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 4: SELECTION AND PLACEMENT
    // ═══════════════════════════════════════════════════════
    { id: 'section_selection', type: 'default', position: { x: 550, y: 530 }, data: { label: '🎯 CANDIDATE\nSELECTION' }, className: 'node-warning' },
    { id: 'evaluate_quals', type: 'default', position: { x: 550, y: 660 }, data: { label: '📊 Evaluar Calificaciones\nvs Requisitos del Hotel' }, className: 'node-info' },
    { id: 'select_candidate', type: 'default', position: { x: 550, y: 790 }, data: { label: '✅ Seleccionar\nCandidatos Aptos' }, className: 'node-success' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 5: ASSIGNMENT
    // ═══════════════════════════════════════════════════════
    { id: 'section_assign', type: 'default', position: { x: 350, y: 940 }, data: { label: '📌 CANDIDATE\nASSIGNMENT' }, className: 'node-success' },
    { id: 'assign_hotel', type: 'default', position: { x: 350, y: 1070 }, data: { label: '🏨 Asignar Candidato\na Hotel Específico' }, className: 'node-hotel' },
    { id: 'relational_note', type: 'default', position: { x: 550, y: 1070 }, data: { label: '🔗 Colaboradores\nRelacionales pueden\nasignarse a múltiples\nhoteles' }, className: 'node-info' },

    // NOTIFICACIONES
    { id: 'notif_manager', type: 'default', position: { x: 250, y: 1200 }, data: { label: '🔔 [NOTIF] al Manager\nEmpleado asignado\na la propiedad' }, className: 'node-hotel' },
    { id: 'notif_qa', type: 'default', position: { x: 450, y: 1200 }, data: { label: '🔔 [NOTIF] al QA Inspector\nDetalles del candidato\npara formulario' }, className: 'node-quality' },

    // COLABORADOR
    { id: 'colab_login', type: 'default', position: { x: 350, y: 1340 }, data: { label: '📱 Colaborador recibe\nLogin para App Móvil\n+ Enviar documentos' }, className: 'node-success' },
  ],
  edges: [
    // Start → Requisición
    { id: 'e1', source: 'start', target: 'section_req' },

    // Requisición
    { id: 'e2', source: 'section_req', target: 'receive_req' },
    { id: 'e3', source: 'receive_req', target: 'review_req' },

    // Review → Sourcing + Blacklist + Selection
    { id: 'e4', source: 'review_req', target: 'section_sourcing' },
    { id: 'e5', source: 'review_req', target: 'section_blacklist' },
    { id: 'e6', source: 'review_req', target: 'section_selection' },

    // Sourcing
    { id: 'e7', source: 'section_sourcing', target: 'call_candidates' },
    { id: 'e8', source: 'call_candidates', target: 'gather_info' },
    { id: 'e9', source: 'gather_info', target: 'section_blacklist', style: { strokeDasharray: '5,5' } },

    // Blacklist
    { id: 'e10', source: 'section_blacklist', target: 'verify_blacklist' },
    { id: 'e11', source: 'verify_blacklist', target: 'blacklist_fail', label: 'En blacklist', style: { stroke: '#c62828' } },
    { id: 'e12', source: 'verify_blacklist', target: 'blacklist_pass', label: 'Limpio', animated: true },

    // Selection
    { id: 'e13', source: 'section_selection', target: 'evaluate_quals' },
    { id: 'e14', source: 'evaluate_quals', target: 'select_candidate' },

    // Pool → Assignment
    { id: 'e15', source: 'blacklist_pass', target: 'section_assign' },
    { id: 'e16', source: 'select_candidate', target: 'section_assign' },

    // Assignment
    { id: 'e17', source: 'section_assign', target: 'assign_hotel' },
    { id: 'e18', source: 'section_assign', target: 'relational_note', style: { strokeDasharray: '5,5' } },

    // Notificaciones
    { id: 'e19', source: 'assign_hotel', target: 'notif_manager', animated: true },
    { id: 'e20', source: 'assign_hotel', target: 'notif_qa', animated: true },

    // Colaborador
    { id: 'e21', source: 'notif_manager', target: 'colab_login' },
    { id: 'e22', source: 'notif_qa', target: 'colab_login' },
  ]
}

export default recruiterFlowchartFlow
