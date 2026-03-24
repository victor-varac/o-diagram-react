const userSupportFlowchartFlow = {
  nodes: [
    // INICIO
    { id: 'start', type: 'input', position: { x: 300, y: 0 }, data: { label: '🛟 User Support\nSoporte del Sistema' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 1: ISSUE TRACKING
    // ═══════════════════════════════════════════════════════
    { id: 'section_issues', type: 'default', position: { x: 300, y: 150 }, data: { label: '🐛 ISSUE\nTRACKING' }, className: 'node-warning' },
    { id: 'view_issues', type: 'default', position: { x: 300, y: 280 }, data: { label: '📋 Ver Lista de\nIssues Reportados' }, className: 'node-info' },
    { id: 'select_issue', type: 'default', position: { x: 300, y: 400 }, data: { label: '🔍 Seleccionar Issue\npara Ver Detalles' }, className: 'node-info' },

    // DECISIÓN: RESOLVER O ESCALAR
    { id: 'decide_action', type: 'default', position: { x: 300, y: 530 }, data: { label: '⚖️ Evaluar Issue\n¿Se puede resolver?' }, className: 'node-warning' },
    { id: 'resolve_issue', type: 'default', position: { x: 150, y: 670 }, data: { label: '✅ Resolver\nel Issue' }, className: 'node-success' },
    { id: 'escalate_issue', type: 'default', position: { x: 450, y: 670 }, data: { label: '🔺 Escalar\nsi es Necesario' }, className: 'node-critical' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 2: ROUTINE CHECKS
    // ═══════════════════════════════════════════════════════
    { id: 'section_routine', type: 'default', position: { x: 100, y: 830 }, data: { label: '🔄 ROUTINE\nCHECKS' }, className: 'node-warning' },
    { id: 'perform_checks', type: 'default', position: { x: 100, y: 960 }, data: { label: '🔍 Realizar Checks\nRutinarios y\nActualizaciones' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 3: SYSTEM STABILITY
    // ═══════════════════════════════════════════════════════
    { id: 'section_stability', type: 'default', position: { x: 300, y: 830 }, data: { label: '🏗️ SYSTEM\nSTABILITY' }, className: 'node-warning' },
    { id: 'run_tests', type: 'default', position: { x: 300, y: 960 }, data: { label: '🧪 Ejecutar Pruebas\npara Asegurar\nEstabilidad del Sistema' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 4: BUG FIXING
    // ═══════════════════════════════════════════════════════
    { id: 'section_bugs', type: 'default', position: { x: 500, y: 830 }, data: { label: '🐞 BUG\nFIXING' }, className: 'node-critical' },
    { id: 'document_bugs', type: 'default', position: { x: 500, y: 960 }, data: { label: '📝 Documentar Bugs\nIdentificados' }, className: 'node-info' },
    { id: 'fix_bugs', type: 'default', position: { x: 500, y: 1090 }, data: { label: '🔧 Corregir Bugs\nIdentificados' }, className: 'node-success' },

    // CICLO CONTINUO
    { id: 'cycle', type: 'default', position: { x: 300, y: 1200 }, data: { label: '🔄 Ciclo Continuo\nMonitoreo → Detección\n→ Resolución' }, className: 'node-info' },
  ],
  edges: [
    // Start → Issues
    { id: 'e1', source: 'start', target: 'section_issues' },

    // Issue Tracking
    { id: 'e2', source: 'section_issues', target: 'view_issues' },
    { id: 'e3', source: 'view_issues', target: 'select_issue' },
    { id: 'e4', source: 'select_issue', target: 'decide_action' },

    // Decisión
    { id: 'e5', source: 'decide_action', target: 'resolve_issue', label: 'Sí', animated: true },
    { id: 'e6', source: 'decide_action', target: 'escalate_issue', label: 'No', style: { stroke: '#c62828' } },

    // → Secciones operativas
    { id: 'e7', source: 'resolve_issue', target: 'section_routine' },
    { id: 'e8', source: 'resolve_issue', target: 'section_stability' },
    { id: 'e9', source: 'escalate_issue', target: 'section_bugs' },

    // Routine Checks
    { id: 'e10', source: 'section_routine', target: 'perform_checks' },

    // System Stability
    { id: 'e11', source: 'section_stability', target: 'run_tests' },

    // Bug Fixing
    { id: 'e12', source: 'section_bugs', target: 'document_bugs' },
    { id: 'e13', source: 'document_bugs', target: 'fix_bugs' },

    // Ciclo
    { id: 'e14', source: 'perform_checks', target: 'cycle', style: { strokeDasharray: '5,5' } },
    { id: 'e15', source: 'run_tests', target: 'cycle', style: { strokeDasharray: '5,5' } },
    { id: 'e16', source: 'fix_bugs', target: 'cycle', style: { strokeDasharray: '5,5' } },
    { id: 'e17', source: 'cycle', target: 'section_issues', animated: true, label: 'Repite' },
  ]
}

export default userSupportFlowchartFlow
