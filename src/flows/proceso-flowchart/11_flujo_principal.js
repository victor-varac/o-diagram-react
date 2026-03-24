const flujoPrincipalFlowchartFlow = {
  nodes: [
    // ═══════════════════════════════════════════════════════
    // INICIO
    // ═══════════════════════════════════════════════════════
    { id: 'start', type: 'input', position: { x: 500, y: 0 }, data: { label: '🍊 Oranje Flow Chart\nFlujo Principal del Negocio' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // FASE 1: ADQUISICIÓN DE CLIENTES (BD + BDC)
    // ═══════════════════════════════════════════════════════
    { id: 'phase1', type: 'default', position: { x: 500, y: 130 }, data: { label: '🚗 FASE 1\nAdquisición de Clientes' }, className: 'node-warning' },

    { id: 'bdc_assign', type: 'default', position: { x: 300, y: 260 }, data: { label: '📋 BDC Asigna\nZona/Ruta al BD' }, className: 'node-info' },
    { id: 'bd_field', type: 'default', position: { x: 300, y: 380 }, data: { label: '🚗 BD Field Visit\nVisitas en frío a hoteles' }, className: 'node-info' },
    { id: 'bd_prospect', type: 'default', position: { x: 300, y: 500 }, data: { label: '1️⃣ New Prospect\nContacto + Notas' }, className: 'node-info' },
    { id: 'bd_proposal', type: 'default', position: { x: 300, y: 620 }, data: { label: '2️⃣ Prospect → Proposal\nPropuesta personalizada' }, className: 'node-info' },
    { id: 'bd_negotiate', type: 'default', position: { x: 300, y: 740 }, data: { label: '3️⃣ Negotiation\nTérminos + Precios' }, className: 'node-info' },
    { id: 'bd_client', type: 'default', position: { x: 300, y: 860 }, data: { label: '4️⃣ ⭐ HOTEL = CLIENTE\nAcuerdo firmado' }, className: 'node-success' },

    // BDC side
    { id: 'bdc_live_track', type: 'default', position: { x: 650, y: 260 }, data: { label: '🗺️ BDC Live Tracking\nMapa en tiempo real' }, className: 'node-info' },
    { id: 'bdc_review', type: 'default', position: { x: 650, y: 380 }, data: { label: '🔍 BDC Revisa\nProspectos' }, className: 'node-info' },
    { id: 'bdc_move', type: 'default', position: { x: 650, y: 500 }, data: { label: '✅ BDC Mueve\nProspecto → Cliente' }, className: 'node-success' },

    // Auto-emails
    { id: 'auto_welcome', type: 'default', position: { x: 500, y: 980 }, data: { label: '📧 [AUTO] Email Bienvenida\n+ Set Geofencing\n+ Reminder 1era Requisición' }, className: 'node-success' },

    // TRANSICIÓN
    { id: 'transition1', type: 'default', position: { x: 500, y: 1100 }, data: { label: '⚡ TRANSICIÓN\nBD/BDC ya no ven hotel\n→ QA + Recruiters' }, className: 'node-critical' },

    // ═══════════════════════════════════════════════════════
    // FASE 2: INICIO DE SERVICIO (QA Coordinator)
    // ═══════════════════════════════════════════════════════
    { id: 'phase2', type: 'default', position: { x: 200, y: 1250 }, data: { label: '🏆 FASE 2\nInicio de Servicio' }, className: 'node-quality' },
    { id: 'qa_coord_init', type: 'default', position: { x: 200, y: 1370 }, data: { label: '🏆 QA Coordinator\nSupervisar despliegue\ninicialde servicios' }, className: 'node-quality' },

    // ═══════════════════════════════════════════════════════
    // FASE 3: REQUISICIÓN (Hotel Manager → Recruiter)
    // ═══════════════════════════════════════════════════════
    { id: 'phase3', type: 'default', position: { x: 500, y: 1250 }, data: { label: '👥 FASE 3\nRequisición de Personal' }, className: 'node-recruitment' },
    { id: 'hm_requisition', type: 'default', position: { x: 500, y: 1370 }, data: { label: '🏨 Hotel Manager\nEnvía Requisición\nde Personal' }, className: 'node-hotel' },
    { id: 'recruiter_receive', type: 'default', position: { x: 500, y: 1490 }, data: { label: '👥 Recruiter Recibe\ny Procesa Requisición' }, className: 'node-recruitment' },
    { id: 'blacklist_check', type: 'default', position: { x: 500, y: 1610 }, data: { label: '🚫 Verificación\nBlacklist' }, className: 'node-warning' },
    { id: 'assign_candidate', type: 'default', position: { x: 500, y: 1730 }, data: { label: '✅ Asignar Candidato\nal Hotel' }, className: 'node-success' },

    // Notificaciones
    { id: 'notif_hm', type: 'default', position: { x: 350, y: 1860 }, data: { label: '🔔 [NOTIF] Hotel Manager\nEmpleado asignado' }, className: 'node-hotel' },
    { id: 'notif_qa', type: 'default', position: { x: 650, y: 1860 }, data: { label: '🔔 [NOTIF] QA Inspector\nDetalles del candidato' }, className: 'node-quality' },

    // ═══════════════════════════════════════════════════════
    // FASE 4: ONBOARDING (QA Inspector + Colaborador)
    // ═══════════════════════════════════════════════════════
    { id: 'phase4', type: 'default', position: { x: 800, y: 1250 }, data: { label: '📋 FASE 4\nOnboarding' }, className: 'node-warning' },
    { id: 'colab_login', type: 'default', position: { x: 800, y: 1370 }, data: { label: '📱 Colaborador\nRecibe Login App\n+ Envía Documentos' }, className: 'node-info' },
    { id: 'qa_diligence', type: 'default', position: { x: 800, y: 1490 }, data: { label: '🔍 QA Inspector\nDiligence Checks\n+ Formularios' }, className: 'node-quality' },
    { id: 'qa_uniform', type: 'default', position: { x: 800, y: 1610 }, data: { label: '👕 Entrega Uniforme\nOnboarding Completado' }, className: 'node-success' },

    // ═══════════════════════════════════════════════════════
    // FASE 5: OPERACIÓN DIARIA
    // ═══════════════════════════════════════════════════════
    { id: 'phase5', type: 'default', position: { x: 500, y: 2000 }, data: { label: '⚡ FASE 5\nOperación Diaria' }, className: 'node-warning' },

    { id: 'colab_checkin', type: 'default', position: { x: 300, y: 2130 }, data: { label: '📲 Colaborador\nCheck-in QR\n+ Geofencing' }, className: 'node-success' },
    { id: 'colab_tasks', type: 'default', position: { x: 300, y: 2260 }, data: { label: '✅ Ejecutar Tareas\nReportar trabajo' }, className: 'node-info' },
    { id: 'colab_checkout', type: 'default', position: { x: 300, y: 2390 }, data: { label: '📲 Check-out QR' }, className: 'node-success' },

    { id: 'qa_inspect', type: 'default', position: { x: 650, y: 2130 }, data: { label: '🔍 QA Inspector\nFormularios QA\n2-3 inspecciones' }, className: 'node-quality' },
    { id: 'qa_compliance', type: 'default', position: { x: 650, y: 2260 }, data: { label: '✅ Compliance Checks\nTime Spent (1-100%)' }, className: 'node-quality' },

    // ═══════════════════════════════════════════════════════
    // FASE 6: GESTIÓN Y MONITOREO
    // ═══════════════════════════════════════════════════════
    { id: 'phase6', type: 'default', position: { x: 200, y: 2530 }, data: { label: '📊 FASE 6\nGestión y Monitoreo' }, className: 'node-warning' },
    { id: 'hm_approve', type: 'default', position: { x: 200, y: 2660 }, data: { label: '🏨 Hotel Manager\nAprobar Worksheets\nde Horas' }, className: 'node-hotel' },
    { id: 'qa_coord_monitor', type: 'default', position: { x: 450, y: 2660 }, data: { label: '🏆 QA Coordinator\nActivity Monitoring\nDashboard' }, className: 'node-quality' },

    // ═══════════════════════════════════════════════════════
    // FASE 7: FINANCIERO (Accountant)
    // ═══════════════════════════════════════════════════════
    { id: 'phase7', type: 'default', position: { x: 500, y: 2820 }, data: { label: '💰 FASE 7\nProcesamiento Financiero' }, className: 'node-accounting' },
    { id: 'acc_payroll', type: 'default', position: { x: 350, y: 2950 }, data: { label: '💵 Accountant\nProcesar Nómina\nVerificar Horas' }, className: 'node-accounting' },
    { id: 'acc_payment', type: 'default', position: { x: 350, y: 3080 }, data: { label: '💸 Generar Pagos' }, className: 'node-accounting' },
    { id: 'acc_invoice', type: 'default', position: { x: 600, y: 2950 }, data: { label: '🧾 Generar Facturas\npara Hoteles' }, className: 'node-accounting' },
    { id: 'acc_additional', type: 'default', position: { x: 600, y: 3080 }, data: { label: '➕➖ Bonos + Deducciones' }, className: 'node-accounting' },

    // ═══════════════════════════════════════════════════════
    // SOPORTE TRANSVERSAL
    // ═══════════════════════════════════════════════════════
    { id: 'support_admin', type: 'default', position: { x: 100, y: 2950 }, data: { label: '🔧 Admin\nGestionar Usuarios\nPermisos + Inventario' }, className: 'node-info' },
    { id: 'support_user', type: 'default', position: { x: 100, y: 3080 }, data: { label: '🛟 User Support\nResolver Issues\nMantenimiento' }, className: 'node-info' },
  ],
  edges: [
    // Start
    { id: 'e1', source: 'start', target: 'phase1' },

    // Fase 1: BD Pipeline
    { id: 'e2', source: 'phase1', target: 'bdc_assign' },
    { id: 'e3', source: 'bdc_assign', target: 'bd_field' },
    { id: 'e4', source: 'bd_field', target: 'bd_prospect' },
    { id: 'e5', source: 'bd_prospect', target: 'bd_proposal' },
    { id: 'e6', source: 'bd_proposal', target: 'bd_negotiate' },
    { id: 'e7', source: 'bd_negotiate', target: 'bd_client', animated: true },

    // BDC side
    { id: 'e8', source: 'phase1', target: 'bdc_live_track' },
    { id: 'e9', source: 'bdc_live_track', target: 'bdc_review' },
    { id: 'e10', source: 'bdc_review', target: 'bdc_move' },
    { id: 'e11', source: 'bdc_move', target: 'bd_client', style: { strokeDasharray: '5,5' } },

    // Auto
    { id: 'e12', source: 'bd_client', target: 'auto_welcome', animated: true },
    { id: 'e13', source: 'auto_welcome', target: 'transition1', style: { stroke: '#c62828' } },

    // Transition → Fases 2, 3, 4
    { id: 'e14', source: 'transition1', target: 'phase2' },
    { id: 'e15', source: 'transition1', target: 'phase3' },
    { id: 'e16', source: 'transition1', target: 'phase4' },

    // Fase 2
    { id: 'e17', source: 'phase2', target: 'qa_coord_init' },

    // Fase 3
    { id: 'e18', source: 'phase3', target: 'hm_requisition' },
    { id: 'e19', source: 'hm_requisition', target: 'recruiter_receive' },
    { id: 'e20', source: 'recruiter_receive', target: 'blacklist_check' },
    { id: 'e21', source: 'blacklist_check', target: 'assign_candidate', animated: true, label: 'Limpio' },
    { id: 'e22', source: 'assign_candidate', target: 'notif_hm' },
    { id: 'e23', source: 'assign_candidate', target: 'notif_qa' },

    // Fase 4
    { id: 'e24', source: 'phase4', target: 'colab_login' },
    { id: 'e25', source: 'notif_qa', target: 'qa_diligence', animated: true },
    { id: 'e26', source: 'colab_login', target: 'qa_diligence' },
    { id: 'e27', source: 'qa_diligence', target: 'qa_uniform' },

    // → Fase 5
    { id: 'e28', source: 'qa_uniform', target: 'phase5', animated: true },
    { id: 'e29', source: 'qa_coord_init', target: 'phase5', style: { strokeDasharray: '5,5' } },
    { id: 'e30', source: 'notif_hm', target: 'phase5', style: { strokeDasharray: '5,5' } },

    // Fase 5
    { id: 'e31', source: 'phase5', target: 'colab_checkin' },
    { id: 'e32', source: 'colab_checkin', target: 'colab_tasks' },
    { id: 'e33', source: 'colab_tasks', target: 'colab_checkout' },
    { id: 'e34', source: 'phase5', target: 'qa_inspect' },
    { id: 'e35', source: 'qa_inspect', target: 'qa_compliance' },

    // → Fase 6
    { id: 'e36', source: 'colab_checkout', target: 'phase6' },
    { id: 'e37', source: 'qa_compliance', target: 'phase6' },

    // Fase 6
    { id: 'e38', source: 'phase6', target: 'hm_approve' },
    { id: 'e39', source: 'phase6', target: 'qa_coord_monitor' },

    // → Fase 7
    { id: 'e40', source: 'hm_approve', target: 'phase7', animated: true, label: 'Aprobado' },
    { id: 'e41', source: 'qa_coord_monitor', target: 'phase7', style: { strokeDasharray: '5,5' } },

    // Fase 7
    { id: 'e42', source: 'phase7', target: 'acc_payroll' },
    { id: 'e43', source: 'phase7', target: 'acc_invoice' },
    { id: 'e44', source: 'acc_payroll', target: 'acc_payment' },
    { id: 'e45', source: 'acc_invoice', target: 'acc_additional' },

    // Soporte transversal
    { id: 'e46', source: 'phase7', target: 'support_admin', style: { strokeDasharray: '5,5' } },
    { id: 'e47', source: 'support_admin', target: 'support_user' },
  ]
}

export default flujoPrincipalFlowchartFlow
