const adminFlowchartFlow = {
  nodes: [
    // INICIO
    { id: 'start', type: 'input', position: { x: 400, y: 0 }, data: { label: '🔧 Admin\nRol Principal' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 1: GESTIÓN DE USUARIOS
    // ═══════════════════════════════════════════════════════
    { id: 'section_users', type: 'default', position: { x: 100, y: 150 }, data: { label: '👤 GESTIÓN DE\nUSUARIOS' }, className: 'node-warning' },
    { id: 'add_user', type: 'default', position: { x: 0, y: 280 }, data: { label: '➕ Agregar\nUsuario' }, className: 'node-success' },
    { id: 'remove_user', type: 'default', position: { x: 150, y: 280 }, data: { label: '❌ Eliminar\nUsuario' }, className: 'node-critical' },
    { id: 'modify_user', type: 'default', position: { x: 300, y: 280 }, data: { label: '✏️ Modificar\nUsuario' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 2: DERECHOS DE ACCESO
    // ═══════════════════════════════════════════════════════
    { id: 'section_access', type: 'default', position: { x: 400, y: 150 }, data: { label: '🔐 DERECHOS DE\nACCESO' }, className: 'node-warning' },
    { id: 'access_rights', type: 'default', position: { x: 400, y: 280 }, data: { label: '🔑 Proveer Access Rights\na usuarios para\ndiferentes Módulos' }, className: 'node-info' },
    { id: 'module_bd', type: 'default', position: { x: 350, y: 420 }, data: { label: '🚗 Módulo BD' }, className: 'node-info' },
    { id: 'module_qa', type: 'default', position: { x: 500, y: 420 }, data: { label: '🏆 Módulo QA' }, className: 'node-quality' },
    { id: 'module_recruit', type: 'default', position: { x: 350, y: 530 }, data: { label: '👥 Módulo\nRecruitment' }, className: 'node-recruitment' },
    { id: 'module_accounting', type: 'default', position: { x: 500, y: 530 }, data: { label: '💰 Módulo\nContabilidad' }, className: 'node-accounting' },
    { id: 'module_hotel', type: 'default', position: { x: 425, y: 640 }, data: { label: '🏨 Módulo\nHotel Manager' }, className: 'node-hotel' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 3: INVENTARIO
    // ═══════════════════════════════════════════════════════
    { id: 'section_inventory', type: 'default', position: { x: 700, y: 150 }, data: { label: '📦 GESTIÓN DE\nINVENTARIO' }, className: 'node-warning' },
    { id: 'add_items', type: 'default', position: { x: 650, y: 280 }, data: { label: '➕ Agregar\nItems' }, className: 'node-success' },
    { id: 'view_items', type: 'default', position: { x: 800, y: 280 }, data: { label: '👁️ Ver Items\nInventario' }, className: 'node-info' },
  ],
  edges: [
    // Start → Secciones
    { id: 'e1', source: 'start', target: 'section_users' },
    { id: 'e2', source: 'start', target: 'section_access' },
    { id: 'e3', source: 'start', target: 'section_inventory' },

    // Gestión de Usuarios
    { id: 'e4', source: 'section_users', target: 'add_user' },
    { id: 'e5', source: 'section_users', target: 'remove_user' },
    { id: 'e6', source: 'section_users', target: 'modify_user' },

    // Derechos de Acceso
    { id: 'e7', source: 'section_access', target: 'access_rights' },
    { id: 'e8', source: 'access_rights', target: 'module_bd' },
    { id: 'e9', source: 'access_rights', target: 'module_qa' },
    { id: 'e10', source: 'access_rights', target: 'module_recruit' },
    { id: 'e11', source: 'access_rights', target: 'module_accounting' },
    { id: 'e12', source: 'access_rights', target: 'module_hotel' },

    // Inventario
    { id: 'e13', source: 'section_inventory', target: 'add_items' },
    { id: 'e14', source: 'section_inventory', target: 'view_items' },
  ]
}

export default adminFlowchartFlow
