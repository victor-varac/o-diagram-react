// ═══════════════════════════════════════════════════════════════════════
// USER EXPERIENCE: SISTEMA COMPLETO — TODOS LOS ROLES
// Vista integrada de cómo interactúan las pantallas de todos los roles
// ═══════════════════════════════════════════════════════════════════════
//
// PLACEHOLDER — Próximamente: flujo completo de UX
//
// SECCIONES PLANIFICADAS:
//   1. Colaborador App (Mobile)
//   2. Admin Hotel Portal (Web)
//   3. Reclutadora Dashboard (Web)
//   4. Inspector App (Mobile/Tablet)
//   5. Contabilidad Dashboard (Web)
//   6. Admin Orange Dashboard (Web)
//   7. Conexiones entre pantallas de diferentes roles
//
// ═══════════════════════════════════════════════════════════════════════

const sistemaCompletoUXFlow = {
  nodes: [
    { id: 'start', type: 'input', position: { x: 400, y: 0 }, data: { label: '🍊 Sistema Completo UX\nTodos los Roles\n(Próximamente)' }, className: 'node-ux-section' },

    { id: 'placeholder_1', type: 'default', position: { x: 50, y: 200 }, data: { label: '👷 Colaborador\nApp Mobile\n(pendiente)' }, className: 'node-ux-screen' },
    { id: 'placeholder_2', type: 'default', position: { x: 300, y: 200 }, data: { label: '🏨 Admin Hotel\nPortal Web\n(pendiente)' }, className: 'node-ux-screen' },
    { id: 'placeholder_3', type: 'default', position: { x: 550, y: 200 }, data: { label: '📋 Reclutadora\nDashboard Web\n(pendiente)' }, className: 'node-ux-screen' },

    { id: 'placeholder_4', type: 'default', position: { x: 50, y: 400 }, data: { label: '🏆 Inspector\nApp Tablet\n(pendiente)' }, className: 'node-ux-screen' },
    { id: 'placeholder_5', type: 'default', position: { x: 300, y: 400 }, data: { label: '💰 Contabilidad\nDashboard Web\n(pendiente)' }, className: 'node-ux-screen' },
    { id: 'placeholder_6', type: 'default', position: { x: 550, y: 400 }, data: { label: '👔 Admin Orange\nDashboard Web\n(pendiente)' }, className: 'node-ux-screen' },

    { id: 'note', type: 'output', position: { x: 400, y: 600 }, data: { label: '🚧 Este flujo UX está en desarrollo.\nSe completará con la vista integrada\nde todas las pantallas del sistema.' }, className: 'node-ux-feedback' },
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

export default sistemaCompletoUXFlow
