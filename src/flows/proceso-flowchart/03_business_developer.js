const businessDeveloperFlowchartFlow = {
  nodes: [
    // INICIO
    { id: 'start', type: 'input', position: { x: 400, y: 0 }, data: { label: '🚗 Business Developer\n(BD User)' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 1: FIELD VISIT
    // ═══════════════════════════════════════════════════════
    { id: 'section_field', type: 'default', position: { x: 100, y: 150 }, data: { label: '🚗 FIELD VISIT\nVisita en Campo' }, className: 'node-warning' },
    { id: 'receive_zone', type: 'default', position: { x: 100, y: 270 }, data: { label: '📍 Recibe Zona/Territorio\nAsignado por BDC' }, className: 'node-info' },
    { id: 'cold_visit', type: 'default', position: { x: 100, y: 390 }, data: { label: '🏨 Visita en Frío\nIdentifica hoteles\npotenciales' }, className: 'node-info' },
    { id: 'introduce_services', type: 'default', position: { x: 100, y: 520 }, data: { label: '🤝 Presentar servicios\ny medir interés\npreliminar' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 2: PIPELINE - STEP 1: NEW PROSPECT
    // ═══════════════════════════════════════════════════════
    { id: 'step1', type: 'default', position: { x: 400, y: 150 }, data: { label: '1️⃣ STEP 1\nNew Prospect' }, className: 'node-warning' },
    { id: 'save_contact', type: 'default', position: { x: 350, y: 270 }, data: { label: '💾 Guardar Contacto\nEmail, Teléfono,\nDirección' }, className: 'node-info' },
    { id: 'save_position', type: 'default', position: { x: 520, y: 270 }, data: { label: '👤 Nombre + Posición\nGM, HSKP, Concierge,\nFB Manager, Other' }, className: 'node-info' },
    { id: 'write_notes', type: 'default', position: { x: 400, y: 390 }, data: { label: '📝 Escribir notas sobre\nla comunicación' }, className: 'node-info' },

    // CLIENT DATA COLLECTION
    { id: 'data_collection', type: 'default', position: { x: 400, y: 510 }, data: { label: '📊 Client Data Collection\nCrear perfil de prospecto\ncon toda la información' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 3: PIPELINE - STEP 2: PROSPECT
    // ═══════════════════════════════════════════════════════
    { id: 'step2', type: 'default', position: { x: 400, y: 650 }, data: { label: '2️⃣ STEP 2\nProspect' }, className: 'node-warning' },
    { id: 'proposal_dev', type: 'default', position: { x: 250, y: 770 }, data: { label: '📄 Proposal Development\nRedactar propuesta\npersonalizada' }, className: 'node-info' },
    { id: 'proposal_details', type: 'default', position: { x: 250, y: 900 }, data: { label: '📋 Servicios ofrecidos,\nPrecios y Términos' }, className: 'node-info' },
    { id: 'attach_proposal', type: 'default', position: { x: 500, y: 770 }, data: { label: '📎 Adjuntar Propuesta\nal Sistema' }, className: 'node-success' },

    // FOLLOW-UP
    { id: 'followup', type: 'default', position: { x: 500, y: 900 }, data: { label: '📞 Client Follow-up\nDiscutir detalles,\nresolver consultas' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 4: PIPELINE - STEP 3: PROPOSAL
    // ═══════════════════════════════════════════════════════
    { id: 'step3', type: 'default', position: { x: 400, y: 1050 }, data: { label: '3️⃣ STEP 3\nProposal' }, className: 'node-warning' },
    { id: 'negotiation', type: 'default', position: { x: 250, y: 1170 }, data: { label: '🤝 Negotiation\nNegociar términos,\najustes, precios finales' }, className: 'node-info' },
    { id: 'attach_agreement', type: 'default', position: { x: 500, y: 1170 }, data: { label: '📎 Adjuntar Acuerdo\nFinal al Sistema' }, className: 'node-success' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 5: PIPELINE - STEP 4: CLIENT
    // ═══════════════════════════════════════════════════════
    { id: 'step4', type: 'default', position: { x: 400, y: 1310 }, data: { label: '4️⃣ STEP 4\n⭐ Hotel es CLIENTE' }, className: 'node-success' },

    // AGREEMENT & ONBOARDING
    { id: 'agreement', type: 'default', position: { x: 200, y: 1440 }, data: { label: '✍️ Agreement & Onboarding\nRevisar y firmar acuerdo\nde servicio' }, className: 'node-success' },
    { id: 'set_geofencing', type: 'default', position: { x: 200, y: 1560 }, data: { label: '📍 Set Hotel Location\npara Geofencing' }, className: 'node-info' },

    // AUTOMATIZACIONES
    { id: 'auto_email_welcome', type: 'default', position: { x: 500, y: 1440 }, data: { label: '📧 [AUTO] Email Bienvenida\nTemplate con info del cliente\n+ nota personalizada' }, className: 'node-success' },
    { id: 'auto_status_change', type: 'default', position: { x: 500, y: 1560 }, data: { label: '🔄 [AUTO] Cliente cambia\nautomáticamente a\nstatus "Proposal"' }, className: 'node-info' },
    { id: 'auto_email_reminder', type: 'default', position: { x: 500, y: 1670 }, data: { label: '📧 [AUTO] Email a cliente\ny BD para primera\nrequisición' }, className: 'node-warning' },

    // TRANSICIÓN
    { id: 'transition', type: 'default', position: { x: 350, y: 1800 }, data: { label: '⚡ TRANSICIÓN\nResponsabilidad pasa a\nQA Inspectors, QA Coordinator\ny Recruiters' }, className: 'node-critical' },
  ],
  edges: [
    // Start → Secciones
    { id: 'e1', source: 'start', target: 'section_field' },
    { id: 'e2', source: 'start', target: 'step1' },

    // Field Visit
    { id: 'e3', source: 'section_field', target: 'receive_zone' },
    { id: 'e4', source: 'receive_zone', target: 'cold_visit' },
    { id: 'e5', source: 'cold_visit', target: 'introduce_services' },
    { id: 'e6', source: 'introduce_services', target: 'step1', style: { strokeDasharray: '5,5' }, label: 'Interés' },

    // Step 1: New Prospect
    { id: 'e7', source: 'step1', target: 'save_contact' },
    { id: 'e8', source: 'step1', target: 'save_position' },
    { id: 'e9', source: 'save_contact', target: 'write_notes' },
    { id: 'e10', source: 'save_position', target: 'write_notes' },
    { id: 'e11', source: 'write_notes', target: 'data_collection' },

    // Data Collection → Step 2
    { id: 'e12', source: 'data_collection', target: 'step2', animated: true },

    // Step 2: Prospect
    { id: 'e13', source: 'step2', target: 'proposal_dev' },
    { id: 'e14', source: 'step2', target: 'attach_proposal' },
    { id: 'e15', source: 'proposal_dev', target: 'proposal_details' },
    { id: 'e16', source: 'attach_proposal', target: 'followup' },
    { id: 'e17', source: 'proposal_details', target: 'followup', style: { strokeDasharray: '5,5' } },

    // Follow-up → Step 3
    { id: 'e18', source: 'followup', target: 'step3', animated: true },

    // Step 3: Proposal
    { id: 'e19', source: 'step3', target: 'negotiation' },
    { id: 'e20', source: 'step3', target: 'attach_agreement' },
    { id: 'e21', source: 'negotiation', target: 'step4', animated: true, label: 'Acuerdo' },
    { id: 'e22', source: 'attach_agreement', target: 'step4' },

    // Step 4: Client
    { id: 'e23', source: 'step4', target: 'agreement' },
    { id: 'e24', source: 'step4', target: 'auto_email_welcome' },
    { id: 'e25', source: 'agreement', target: 'set_geofencing' },
    { id: 'e26', source: 'auto_email_welcome', target: 'auto_status_change' },
    { id: 'e27', source: 'auto_status_change', target: 'auto_email_reminder' },

    // Transición
    { id: 'e28', source: 'set_geofencing', target: 'transition', style: { stroke: '#c62828' } },
    { id: 'e29', source: 'auto_email_reminder', target: 'transition', style: { stroke: '#c62828' } },
  ]
}

export default businessDeveloperFlowchartFlow
