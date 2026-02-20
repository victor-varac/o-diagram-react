// ═══════════════════════════════════════════════════════════════════════
// USER EXPERIENCE: RECLUTADORA / REQUISICIÓN
// Pantalla por pantalla: todo lo que ve y hace la reclutadora en el sistema
// ═══════════════════════════════════════════════════════════════════════
//
// PLACEHOLDER — Próximamente: flujo completo de UX
//
// SECCIONES PLANIFICADAS:
//   1. Dashboard de Requisiciones
//   2. Búsqueda en Pool (con filtros)
//   3. Matching Automático y Manual
//   4. Asignación y Confirmación
//   5. Tracking de Pipeline
//   6. Retención y Re-Matching
//
// ═══════════════════════════════════════════════════════════════════════

const requisicionUXFlow = {
  nodes: [
    { id: 'start', type: 'input', position: { x: 400, y: 0 }, data: { label: '📋 Reclutadora UX\nPantallas del Sistema\n(Próximamente)' }, className: 'node-ux-section' },

    { id: 'placeholder_1', type: 'default', position: { x: 100, y: 200 }, data: { label: '📊 Dashboard\nde Requisiciones\n(pendiente)' }, className: 'node-ux-screen' },
    { id: 'placeholder_2', type: 'default', position: { x: 400, y: 200 }, data: { label: '🔍 Búsqueda\nen Pool\n(pendiente)' }, className: 'node-ux-screen' },
    { id: 'placeholder_3', type: 'default', position: { x: 700, y: 200 }, data: { label: '🤖 Matching\nAutomático\n(pendiente)' }, className: 'node-ux-screen' },

    { id: 'placeholder_4', type: 'default', position: { x: 100, y: 400 }, data: { label: '✅ Asignación\ny Confirmación\n(pendiente)' }, className: 'node-ux-screen' },
    { id: 'placeholder_5', type: 'default', position: { x: 400, y: 400 }, data: { label: '📈 Tracking\nde Pipeline\n(pendiente)' }, className: 'node-ux-screen' },
    { id: 'placeholder_6', type: 'default', position: { x: 700, y: 400 }, data: { label: '🔄 Retención\ny Re-Matching\n(pendiente)' }, className: 'node-ux-screen' },

    { id: 'note', type: 'output', position: { x: 400, y: 600 }, data: { label: '🚧 Este flujo UX está en desarrollo.\nSe completará con todas las\npantallas de la reclutadora.' }, className: 'node-ux-feedback' },
  ],
  edges: [
    { id: 'e-start-1', source: 'start', target: 'placeholder_1' },
    { id: 'e-start-2', source: 'start', target: 'placeholder_2' },
    { id: 'e-start-3', source: 'start', target: 'placeholder_3' },
    { id: 'e-1-4', source: 'placeholder_1', target: 'placeholder_4' },
    { id: 'e-2-5', source: 'placeholder_2', target: 'placeholder_5' },
    { id: 'e-3-6', source: 'placeholder_3', target: 'placeholder_6' },
    { id: 'e-4-note', source: 'placeholder_4', target: 'note' },
    { id: 'e-5-note', source: 'placeholder_5', target: 'note' },
    { id: 'e-6-note', source: 'placeholder_6', target: 'note' },
  ]
}

export default requisicionUXFlow
