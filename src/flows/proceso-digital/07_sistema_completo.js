// ═══════════════════════════════════════════════════════════════════════
// PROCESO DIGITAL: SISTEMA COMPLETO - TODOS LOS ROLES
// Nivel 2-3: Operativa + Automatización
// PLACEHOLDER — Pendiente de desarrollo
// ═══════════════════════════════════════════════════════════════════════

const sistemaCompletoDigitalFlow = {
  nodes: [
    { id: 'start', type: 'input', position: { x: 400, y: 0 }, data: { label: '⚡ Sistema Completo Digital\nNivel 2-3\n(En desarrollo)' }, className: 'node-digital-section' },
    { id: 'pending', type: 'default', position: { x: 400, y: 150 }, data: { label: '🚧 Este diagrama\nestá en desarrollo.\n\nPróximamente:\n• 6 roles digitalizados\n• Conexiones inter-rol\n  automatizadas\n• Workflows end-to-end\n• Notificaciones cruzadas\n• Máquina de estados\n  integrada' }, className: 'node-digital-notification' },
    { id: 'end', type: 'output', position: { x: 400, y: 400 }, data: { label: '📋 Basado en Sistema\nCompleto manual\n(Tab: Diagramas por Rol)' }, className: 'node-digital-section' },
  ],
  edges: [
    { id: 'e1', source: 'start', target: 'pending' },
    { id: 'e2', source: 'pending', target: 'end' },
  ]
}

export default sistemaCompletoDigitalFlow
