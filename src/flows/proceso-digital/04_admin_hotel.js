// ═══════════════════════════════════════════════════════════════════════
// PROCESO DIGITAL: ADMIN HOTEL (CLIENTE)
// Nivel 2-3: Operativa + Automatización
// PLACEHOLDER — Pendiente de desarrollo
// ═══════════════════════════════════════════════════════════════════════

const adminHotelDigitalFlow = {
  nodes: [
    { id: 'start', type: 'input', position: { x: 400, y: 0 }, data: { label: '⚡ Admin Hotel Digital\nNivel 2-3\n(En desarrollo)' }, className: 'node-digital-section' },
    { id: 'pending', type: 'default', position: { x: 400, y: 150 }, data: { label: '🚧 Este diagrama\nestá en desarrollo.\n\nPróximamente:\n• Portal de cliente\n• Solicitar personal online\n• Aprobación horas digital\n• Dashboard facturación\n• Incidentes en tiempo real' }, className: 'node-digital-notification' },
    { id: 'end', type: 'output', position: { x: 400, y: 370 }, data: { label: '📋 Basado en proceso\nmanual del Admin Hotel\n(Tab: Diagramas por Rol)' }, className: 'node-digital-section' },
  ],
  edges: [
    { id: 'e1', source: 'start', target: 'pending' },
    { id: 'e2', source: 'pending', target: 'end' },
  ]
}

export default adminHotelDigitalFlow
