// ═══════════════════════════════════════════════════════════════════════
// USER EXPERIENCE: INSPECTOR DE CALIDAD
// Pantalla por pantalla: todo lo que ve y hace el inspector en la App
// ═══════════════════════════════════════════════════════════════════════
//
// PLACEHOLDER — Próximamente: flujo completo de UX
//
// SECCIONES PLANIFICADAS:
//   1. Dashboard de Asignaciones del Día
//   2. Checklist de Onboarding (paso a paso)
//   3. Evaluaciones con Formulario Digital
//   4. Uniformes: Entrega y Tracking
//   5. Supervisión GPS-Optimizada
//   6. Encuestas de Satisfacción
//   7. Solicitudes de Managers (Workflow)
//   8. TimeSheet y Nómina
//   9. Incidentes e Injury Report
//  10. Métricas y Reportes
//
// ═══════════════════════════════════════════════════════════════════════

const inspectorUXFlow = {
  nodes: [
    { id: 'start', type: 'input', position: { x: 400, y: 0 }, data: { label: '📱 Inspector UX\nPantallas de la App\n(Próximamente)' }, className: 'node-ux-section' },

    { id: 'placeholder_1', type: 'default', position: { x: 100, y: 200 }, data: { label: '📋 Dashboard\nde Asignaciones\n(pendiente)' }, className: 'node-ux-screen' },
    { id: 'placeholder_2', type: 'default', position: { x: 400, y: 200 }, data: { label: '✅ Checklist\nde Onboarding\n(pendiente)' }, className: 'node-ux-screen' },
    { id: 'placeholder_3', type: 'default', position: { x: 700, y: 200 }, data: { label: '📝 Evaluaciones\ny Formularios\n(pendiente)' }, className: 'node-ux-screen' },

    { id: 'placeholder_4', type: 'default', position: { x: 100, y: 400 }, data: { label: '👕 Uniformes\nEntrega/Tracking\n(pendiente)' }, className: 'node-ux-screen' },
    { id: 'placeholder_5', type: 'default', position: { x: 400, y: 400 }, data: { label: '📍 Supervisión\nGPS/Mapa\n(pendiente)' }, className: 'node-ux-screen' },
    { id: 'placeholder_6', type: 'default', position: { x: 700, y: 400 }, data: { label: '⚠️ Incidentes\ne Injury Report\n(pendiente)' }, className: 'node-ux-screen' },

    { id: 'note', type: 'output', position: { x: 400, y: 600 }, data: { label: '🚧 Este flujo UX está en desarrollo.\nSe completará con todas las\npantallas del inspector.' }, className: 'node-ux-feedback' },
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

export default inspectorUXFlow
