// ═══════════════════════════════════════════════════════════════════════
// PROCESO DIGITAL: ADMIN ORANGE / DIRECCIÓN (SILVIA)
// Nivel 2-3: Operativa + Automatización
// PLACEHOLDER — Pendiente de desarrollo
// ═══════════════════════════════════════════════════════════════════════

const adminOrangeDigitalFlow = {
  nodes: [
    { id: 'start', type: 'input', position: { x: 400, y: 0 }, data: { label: '⚡ Admin Orange Digital\nNivel 2-3\n(En desarrollo)' }, className: 'node-digital-section' },
    { id: 'pending', type: 'default', position: { x: 400, y: 150 }, data: { label: '🚧 Este diagrama\nestá en desarrollo.\n\nPróximamente:\n• Dashboard KPIs\n• Aprobaciones con click\n• Cuentas bancarias seguras\n• Blacklist workflow\n• Onboarding hotel digital' }, className: 'node-digital-notification' },
    { id: 'end', type: 'output', position: { x: 400, y: 370 }, data: { label: '📋 Basado en proceso\nmanual del Admin Orange\n(Tab: Diagramas por Rol)' }, className: 'node-digital-section' },
  ],
  edges: [
    { id: 'e1', source: 'start', target: 'pending' },
    { id: 'e2', source: 'pending', target: 'end' },
  ]
}

export default adminOrangeDigitalFlow
