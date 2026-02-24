// ═══════════════════════════════════════════════════════════════════════
// USER EXPERIENCE: INSPECTOR DE CALIDAD
// Pantalla por pantalla: todo lo que ve y hace el inspector en la App
// Basado en 100% del código de David (zonadavid/)
// 14 páginas, 38 componentes, 18 hooks → traducidos a experiencia de usuario
// ═══════════════════════════════════════════════════════════════════════
//
// LEYENDA DE NODOS UX (clases CSS):
//   node-ux-section  → Headers de sección (teal oscuro)
//   node-ux-screen   → Pantalla/Vista completa (teal)
//   node-ux-form     → Formulario con campos (indigo)
//   node-ux-action   → Acción del usuario: tap, swipe, click (verde)
//   node-ux-feedback → Resultado/notificación/mensaje al usuario (ámbar)
//   node-ux-decision → Punto de decisión del usuario (rosa)
//   node-ux-system   → Acción en background del sistema (gris)
//
// SECCIONES:
//   1.  Login y Acceso
//   2.  Dashboard Principal (6 KPIs + 5 Charts + Ranking)
//   3.  Registrar Visita GPS (Geofencing 150m)
//   4.  Gestión de Hoteles (CRUD + Geo + Imagen + Turnover)
//   5.  Gestión de Empleados (CRUD + Filtros + Blacklist + CSV)
//   6.  Solicitudes Kanban (8 columnas Drag-Drop)
//   7.  Candidatos y Aplicaciones (Pipeline → Empleado)
//   8.  Revisión de Nómina (4 niveles Compliance)
//   9.  Seguimiento Workrecord (Heatmap + 7 Smart Insights)
//  10.  Reporte de Asistencia (Calendario + Mileage)
//  11.  Informes por Período (20+ métricas + Treemap)
//  12.  Inteligencia Corporativa (5 Pilares × 25 pts)
//  13.  Análisis Histórico (Trends Mensuales)
//  14.  Notificaciones y Alertas (Badge + Deep Link)
//
// ═══════════════════════════════════════════════════════════════════════

const inspectorUXFlow = {
  nodes: [
    // ── INICIO ──
    { id: 'start', type: 'input', position: { x: 500, y: 0 }, data: { label: '📱 App Inspector\nExperiencia de Usuario\nPantalla por Pantalla' }, className: 'node-ux-section' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 1: LOGIN Y ACCESO
    // LoginPage, useAuth, sesión persistente
    // ═══════════════════════════════════════════════════════
    { id: 's1_header', type: 'default', position: { x: 50, y: 150 }, data: { label: '🔐 1. LOGIN\nY ACCESO' }, className: 'node-ux-section' },

    { id: 's1_login', type: 'default', position: { x: -100, y: 310 }, data: { label: '🔐 Pantalla Login:\n• Campo Email*\n• Campo Contraseña*\n• [Iniciar Sesión] botón\n• Logo Orange + fondo oscuro\n• MUI dark theme\n  neon-orange accents' }, className: 'node-ux-form' },

    { id: 's1_auth_check', type: 'default', position: { x: 70, y: 310 }, data: { label: '⚙️ Sistema verifica:\n→ onAuthStateChange()\n→ Si sesión activa\n  → skip login\n  → redirect Dashboard\n→ Si no → mostrar form' }, className: 'node-ux-system' },

    { id: 's1_error', type: 'default', position: { x: 240, y: 310 }, data: { label: '❌ Error Login:\n"Credenciales inválidas"\nSnackbar rojo\n→ Campos se mantienen\n→ Retry disponible' }, className: 'node-ux-feedback' },

    { id: 's1_layout', type: 'default', position: { x: 70, y: 490 }, data: { label: '📱 MainLayout Cargado:\n━━━━━━━━━━━━━\nAppBar superior:\n• 🍊 Logo\n• 🔔 Bell (badge rojo)\n• 🏠 Mi Domicilio\n• 🚪 Cerrar Sesión\nDrawer lateral 8 rutas:\n/ Dashboard\n/hoteles, /empleados\n/solicitudes, /aplicaciones\n/reporte-asistencia\n/revision-nomina\n/seguimiento-workrecord' }, className: 'node-ux-screen' },

    { id: 's1_home_dialog', type: 'default', position: { x: 240, y: 490 }, data: { label: '🏠 Dialog "Mi Domicilio":\nPara calcular distancias\n• Lat/Lng manual\n• O botón "Usar GPS"\n  → auto-fill coords\n→ [Guardar]\n→ Usado por MileageReport' }, className: 'node-ux-form' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 2: DASHBOARD PRINCIPAL
    // DashboardPage, useDashboardStats, charts
    // ═══════════════════════════════════════════════════════
    { id: 's2_header', type: 'default', position: { x: 450, y: 150 }, data: { label: '📊 2. DASHBOARD\nPRINCIPAL' }, className: 'node-ux-section' },

    { id: 's2_kpis', type: 'default', position: { x: 400, y: 310 }, data: { label: '📊 6 StatCards (KPIs):\n━━━━━━━━━━━━━\n🏨 Total Hoteles: 24\n👷 Empleados Activos: 187\n📍 Visitas (30d): 42\n📋 Solicitudes Activas: 8\n📝 Apps Pendientes: 3\n💰 Nóminas por Revisar: 15\nCada card: icono + valor\n+ trend sparkline opcional' }, className: 'node-ux-screen' },

    { id: 's2_charts', type: 'default', position: { x: 620, y: 310 }, data: { label: '📈 5 Charts Interactivos:\n• AreaChart: crecimiento\n  6 meses (4 series, hover)\n• PieChart: empleados\n  por cargo (donut, hover)\n• PieChart: hoteles\n  por ciudad\n• LineChart: visitas\n  últimos 30 días\n• BarChart: visitas\n  por ciudad (horizontal)' }, className: 'node-ux-screen' },

    { id: 's2_ranking', type: 'default', position: { x: 400, y: 520 }, data: { label: '🏆 HotelRankingTable:\nTop 10 hoteles por\nvisitas (últimos 30d)\nTabla sticky header\nScroll max 400px\nColumnas: Hotel | Visitas\nOrden: más visitas primero' }, className: 'node-ux-screen' },

    { id: 's2_fab', type: 'default', position: { x: 620, y: 520 }, data: { label: '⚡ Acciones Rápidas:\n1. 📍 FAB "Registrar Visita"\n   (esquina inferior derecha)\n2. 📊 "Generar Informe"\n   → Date picker → /informes\n3. 🏢 "Informe Corporativo"\n   → /corporativo\n4. 📈 "Análisis Histórico"\n   → /historico (con state)' }, className: 'node-ux-action' },

    { id: 's2_notif_bell', type: 'default', position: { x: 510, y: 700 }, data: { label: '🔔 Bell en AppBar:\nBadge rojo con número\nde solicitudes sin resolver\n→ Tap abre popover\ncon lista de solicitudes\npendientes urgentes' }, className: 'node-ux-action' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 3: REGISTRAR VISITA GPS
    // useAttendance, geofencing 150m, Haversine
    // ═══════════════════════════════════════════════════════
    { id: 's3_header', type: 'default', position: { x: 850, y: 150 }, data: { label: '📍 3. REGISTRAR\nVISITA GPS' }, className: 'node-ux-section' },

    { id: 's3_tap_fab', type: 'default', position: { x: 850, y: 310 }, data: { label: '👆 Tap FAB "Registrar Visita":\nBotón flotante en Dashboard\n→ Solicita permiso GPS\n→ Spinner "Obteniendo\n  ubicación..."' }, className: 'node-ux-action' },

    { id: 's3_gps_acquire', type: 'default', position: { x: 850, y: 470 }, data: { label: '⚙️ GPS Adquiriendo:\nnavigator.geolocation\n.getCurrentPosition()\n→ Obtiene lat/lng\n→ Busca hotel más cercano\n  con Haversine formula\n→ Umbral: ≤150 metros' }, className: 'node-ux-system' },

    { id: 's3_decision', type: 'default', position: { x: 750, y: 630 }, data: { label: '❓ ¿Hotel encontrado\ndentro de 150m?' }, className: 'node-ux-decision' },

    { id: 's3_success', type: 'default', position: { x: 750, y: 780 }, data: { label: '✅ Visita Registrada:\nSnackbar verde:\n"Visita registrada en\n[Hotel Marriott Downtown]"\n→ Timestamp guardado\n→ Aparece en calendario' }, className: 'node-ux-feedback' },

    { id: 's3_no_hotel', type: 'default', position: { x: 950, y: 630 }, data: { label: '❌ Sin Hotel Cercano:\nSnackbar error:\n"No hay hotel dentro\nde 150 metros de\ntu ubicación actual"\n→ Volver al Dashboard' }, className: 'node-ux-feedback' },

    { id: 's3_duplicate', type: 'default', position: { x: 950, y: 780 }, data: { label: '⚠️ Ya Registrado:\nSnackbar warning:\n"Ya registraste visita\na este hotel hoy"\n→ Bloquea duplicado\n→ Volver al Dashboard' }, className: 'node-ux-feedback' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 4: GESTIÓN DE HOTELES
    // HotelsPage, HotelForm, HotelDetailPage, TurnoverAnalysis
    // ═══════════════════════════════════════════════════════
    { id: 's4_header', type: 'default', position: { x: 50, y: 720 }, data: { label: '🏨 4. GESTIÓN\nDE HOTELES' }, className: 'node-ux-section' },

    { id: 's4_list', type: 'default', position: { x: -100, y: 880 }, data: { label: '🏨 Lista de Hoteles:\nTabla con columnas:\n• Nombre\n• Ciudad\n• Dirección\n• Acciones: ✏️ 🗑️\nBotón [+ Agregar Hotel]\nBotón [📥 Exportar Excel]\n→ 3 columnas: nombre,\n  ciudad, dirección' }, className: 'node-ux-screen' },

    { id: 's4_form', type: 'default', position: { x: 100, y: 880 }, data: { label: '📝 Formulario Hotel:\n• Nombre* (text)\n• Ciudad* (text)\n• Dirección* (text)\n• Lat/Lng (disabled, auto)\n• 📍 [Obtener Ubicación]\n  → GPS auto-fill\n• 🖼️ [Subir Imagen]\n  → hidden file input\n  → preview en form\n→ [Guardar] [Cancelar]' }, className: 'node-ux-form' },

    { id: 's4_geo_btn', type: 'default', position: { x: -100, y: 1080 }, data: { label: '📍 Tap "Obtener Ubicación":\n→ Spinner GPS\n→ Auto-fill lat/lng\n→ Campos quedan disabled\n(no edición manual)\nUsado para geofencing\ndel check-in de 150m' }, className: 'node-ux-action' },

    { id: 's4_detail', type: 'default', position: { x: 100, y: 1080 }, data: { label: '🏨 Hotel Detalle:\nTap en nombre del hotel\n→ Vista con:\n• Info del hotel\n• Imagen (si existe)\n• Lista empleados asignados\n• TurnoverAnalysis →' }, className: 'node-ux-screen' },

    { id: 's4_turnover', type: 'default', position: { x: 100, y: 1260 }, data: { label: '📈 Turnover Analysis:\nDentro de HotelDetailPage:\n• Tasa rotación 30 días\n• Tasa rotación 365 días\n• Fórmula visual:\n  separaciones/promedio\n  empleados × 100\n• LineChart: trend 12 meses\n  con área rellena\n• Hover tooltip con datos' }, className: 'node-ux-screen' },

    { id: 's4_save_ok', type: 'default', position: { x: -100, y: 1260 }, data: { label: '✅ Hotel Guardado:\nSnackbar verde:\n"Hotel guardado\nexitosamente"\n→ Vuelve a lista\n→ Lista se refresca' }, className: 'node-ux-feedback' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 5: GESTIÓN DE EMPLEADOS
    // EmployeesPage, EmployeeForm, EmployeeFilters, BulkImport
    // ═══════════════════════════════════════════════════════
    { id: 's5_header', type: 'default', position: { x: 50, y: 1440 }, data: { label: '👷 5. GESTIÓN\nDE EMPLEADOS' }, className: 'node-ux-section' },

    { id: 's5_list', type: 'default', position: { x: -100, y: 1600 }, data: { label: '👷 Lista Empleados:\nVista toggle: 📊 Tabla | 🃏 Grid\nTabla: Nº, Nombre, Cargo,\nHotel, Estado, Acciones\nGrid: Cards con avatar\n→ Botones arriba:\n[+ Nuevo] [📥 CSV]\n[📤 Export Excel]' }, className: 'node-ux-screen' },

    { id: 's5_filters', type: 'default', position: { x: 120, y: 1600 }, data: { label: '🔍 Filtros Empleados:\n━━━━━━━━━━━━━\nToggleButton exclusivo:\n🟢 Activos | ⚫ Inactivos\n| 🚫 Lista Negra\n━━━━━━━━━━━━━\nSelect Hotel (dropdown)\n🔎 Búsqueda por nombre\n→ Filtrado client-side\n  instantáneo' }, className: 'node-ux-action' },

    { id: 's5_form', type: 'default', position: { x: -100, y: 1800 }, data: { label: '📝 Formulario Empleado:\n• Nombre* (text)\n• Cargo* (select: 10 opciones)\n• Tipo Nómina* (select:\n  Workrecord/ADP)\n• Hotel* (select: lista)\n• Tipo Empleado* (select:\n  Temporal/Permanente)\n• Activo (switch toggle)\n• Docs Completa (switch)\n→ [Guardar] [Cancelar]' }, className: 'node-ux-form' },

    { id: 's5_blacklist', type: 'default', position: { x: 120, y: 1800 }, data: { label: '🚫 Zona Peligro (edit mode):\nSección roja abajo del form:\n"Agregar a Lista Negra"\n→ Toggle ON:\n  • TODOS los campos\n    se deshabilitan\n  • Chip negro "Lista Negra"\n    aparece junto al nombre\n→ Confirmación requerida' }, className: 'node-ux-decision' },

    { id: 's5_csv', type: 'default', position: { x: -100, y: 1990 }, data: { label: '📥 Importar CSV:\nTap [📥 CSV] →\nFile picker → seleccionar\n.csv → PapaParse procesa\n→ Valida headers requeridos\n→ Snackbar resultado:\n  ✅ "15 empleados creados"\n  ⚠️ "3 filas con errores"\n  ❌ "Headers inválidos"' }, className: 'node-ux-action' },

    { id: 's5_status_change', type: 'default', position: { x: 120, y: 1990 }, data: { label: '⚙️ Al cambiar Activo:\nSistema auto-registra:\n→ Historial con fecha,\n  estado anterior/nuevo,\n  y razón\n→ Auditoría visible en\n  datos del empleado' }, className: 'node-ux-system' },

    { id: 's5_export', type: 'default', position: { x: 10, y: 2140 }, data: { label: '📤 Export Excel Empleados:\nTap [📤 Export] →\nDescarga automática:\nreporte_empleados.xlsx\n8 columnas: Nº, Nombre,\nCargo, Tipo Nómina,\nHotel, Ciudad, Estado,\nLista Negra' }, className: 'node-ux-feedback' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 6: SOLICITUDES KANBAN
    // StaffingRequestsPage, @dnd-kit, StaffingRequestDialog
    // ═══════════════════════════════════════════════════════
    { id: 's6_header', type: 'default', position: { x: 350, y: 880 }, data: { label: '📋 6. SOLICITUDES\nKANBAN' }, className: 'node-ux-section' },

    { id: 's6_board', type: 'default', position: { x: 300, y: 1040 }, data: { label: '📋 Tablero Kanban:\n8 columnas con scroll horizontal:\n━━━━━━━━━━━━━━━━\n1. Pendiente\n2. Enviada Reclutamiento\n3. En Proceso\n4. Completada\n5. Completada Parcial\n6. Candidato No Presentado\n7. Cancelada por Hotel\n8. Vencida\n━━━━━━━━━━━━━━━━\nCards arrastrables entre columnas' }, className: 'node-ux-screen' },

    { id: 's6_card', type: 'default', position: { x: 530, y: 1040 }, data: { label: '🃏 RequestCard:\nGlassmorphism + neon glow\n━━━━━━━━━━━━━\n• 👷 Cargo: Housekeeping\n• 🏨 Hotel: Marriott\n• 📅 Fecha: 15 Ene\n• 👥 Personas: 3\n• 🏷️ Candidatos: 2\nBotones: ✏️ 📦 🗑️\nDrag handle ≡ arriba' }, className: 'node-ux-screen' },

    { id: 's6_drag', type: 'default', position: { x: 300, y: 1230 }, data: { label: '🖱️ Drag & Drop:\nArrastrar card de una\ncolumna a otra:\n→ Card se mueve\n→ Status se actualiza\n→ Historial se registra\n  automáticamente\n→ Si "Completada":\n  completed_at = ahora' }, className: 'node-ux-action' },

    { id: 's6_dialog', type: 'default', position: { x: 530, y: 1230 }, data: { label: '📝 Dialog 3 Tabs:\n━━━ Tab Detalles ━━━\n• Ciudad (filtro cascada)\n• Hotel* (solo con empleados)\n• Tipo*, Cargo*, Personas*\n• Fecha inicio/fin*, Notas\n━━━ Tab Historial ━━━\n• Timeline de cambios\n━━━ Tab Candidatos ━━━\n• Lista + agregar candidatos' }, className: 'node-ux-form' },

    { id: 's6_archive', type: 'default', position: { x: 300, y: 1420 }, data: { label: '📦 Archivar Solicitud:\nSolo en estados terminales:\nTap 📦 en card →\n"¿Archivar solicitud?"\n→ [Sí] → desaparece\ndel tablero\n→ Visible en página\n  Solicitudes Archivadas' }, className: 'node-ux-action' },

    { id: 's6_new', type: 'default', position: { x: 530, y: 1420 }, data: { label: '➕ Nueva Solicitud:\nTap [+ Nueva Solicitud] →\nAbre Dialog Tab Detalles\n→ Llenar campos\n→ [Guardar] → Card aparece\nen columna "Pendiente"\n→ Snackbar: "Solicitud\n  creada exitosamente"' }, className: 'node-ux-action' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 7: CANDIDATOS Y APLICACIONES
    // RequestCandidates (Tab 3), ApplicationsPage, auto-create
    // ═══════════════════════════════════════════════════════
    { id: 's7_header', type: 'default', position: { x: 350, y: 1580 }, data: { label: '🎯 7. CANDIDATOS\nY APLICACIONES' }, className: 'node-ux-section' },

    { id: 's7_candidates', type: 'default', position: { x: 300, y: 1740 }, data: { label: '👥 Tab Candidatos:\n(dentro de Dialog solicitud)\nLista de candidatos:\n• Nombre + estado (chip)\n  🔵 Asignado\n  🟢 Llegó\n  🔴 No llegó\n  ✅ Confirmado\n• [+ Agregar] por nombre\n  nuevo o buscar empleado\n  existente' }, className: 'node-ux-screen' },

    { id: 's7_status_change', type: 'default', position: { x: 530, y: 1740 }, data: { label: '👆 Cambiar Estado Candidato:\nTap en chip de estado →\nCambia: Asignado → Llegó\n→ No llegó → Confirmado\n━━━━━━━━━━━━━\nAl marcar "Llegó":\n→ Sistema auto-crea\n  Aplicación con status\n  "pendiente"' }, className: 'node-ux-action' },

    { id: 's7_auto_app', type: 'default', position: { x: 415, y: 1910 }, data: { label: '⚙️ Auto-Create Aplicación:\nCandidato "Llegó" →\nSistema inserta aplicación\nautomáticamente\n→ Aparece en página\n  /aplicaciones\ncon status "Pendiente"' }, className: 'node-ux-system' },

    { id: 's7_apps_page', type: 'default', position: { x: 300, y: 2060 }, data: { label: '📝 Página Aplicaciones:\nLista de aplicaciones:\n3 estados con chips color:\n🟡 Pendiente\n🔵 Completada\n🟢 Empleado Creado\n→ Tap card → ver detalle\n→ Transición: 1→2→3' }, className: 'node-ux-screen' },

    { id: 's7_create_emp', type: 'default', position: { x: 530, y: 2060 }, data: { label: '👆 Crear Empleado:\nAl status "Completada" →\nBotón [Añadir Empleado]\n→ Abre EmployeeForm\n  pre-llenado:\n  • Nombre del candidato\n  • Hotel de la solicitud\n  • Rol de la solicitud\n→ Guardar → status =\n  "empleado_creado" ✅' }, className: 'node-ux-action' },

    { id: 's7_metrics', type: 'default', position: { x: 415, y: 2210 }, data: { label: '📊 Métricas Supply:\n(Alimenta Pilar 3: Oferta)\n• Apps últimos 7d / 30d\n• Pendientes incompletas\n• Top hotel contratante\n• Diversidad de roles\n• Velocidad semanal hiring' }, className: 'node-ux-screen' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 8: REVISIÓN DE NÓMINA
    // PayrollReviewPage, ComplianceReviewModal, NotApplicableModal
    // ═══════════════════════════════════════════════════════
    { id: 's8_header', type: 'default', position: { x: 750, y: 1580 }, data: { label: '💰 8. REVISIÓN\nDE NÓMINA' }, className: 'node-ux-section' },

    { id: 's8_list', type: 'default', position: { x: 700, y: 1740 }, data: { label: '💰 Lista Empleados a Revisar:\nFiltro auto: solo Workrecord\ny activos\n━━━━━━━━━━━━━\nPor cada empleado:\n• Nombre\n• Hotel\n• Último revisión (fecha)\n• Estado: 🟢 Revisado\n  o 🔴 Pendiente\n→ Tap → abre modal review' }, className: 'node-ux-screen' },

    { id: 's8_review_modal', type: 'default', position: { x: 920, y: 1740 }, data: { label: '📝 Modal de Revisión:\n4 Chips clickeables:\n━━━━━━━━━━━━━\n✅ Cumplió (100 pts)\n🟡 Mod. Menor (85 pts)\n🟠 Incump. Parcial (25 pts)\n🔴 Incump. Total (0 pts)\n━━━━━━━━━━━━━\nTap chip → se selecciona\nSi no es "Cumplió" →\nrazón obligatoria' }, className: 'node-ux-form' },

    { id: 's8_reasons', type: 'default', position: { x: 700, y: 1930 }, data: { label: '📋 7 Razones (Chips):\nSi status ≠ Cumplió:\n• No funcionaba app\n• No tenía datos/señal\n• Se olvidó marcar\n• No marca lunche\n• No tiene código\n• No marca hora salida\n• Otro → campo texto libre\n→ Tap chip = seleccionar\n→ Auto-cleared si\n  cambia a "Cumplió"' }, className: 'node-ux-form' },

    { id: 's8_na_modal', type: 'default', position: { x: 920, y: 1930 }, data: { label: '🚫 Modal No Aplica:\nBotón "No Aplica" →\n4 Motivos (Chips):\n• 🏖️ Vacaciones\n• 🏥 Baja Médica\n• 📋 Permiso\n• ✏️ Otro (texto libre)\n→ No cuenta en score\n→ Excluido de promedios' }, className: 'node-ux-form' },

    { id: 's8_save', type: 'default', position: { x: 700, y: 2120 }, data: { label: '👆 Tap [Guardar Revisión]:\n→ Guarda compliance para\n  SEMANA ANTERIOR\n→ Actualiza timestamp\n  del empleado\n→ Empleado pasa a\n  "Revisado" 🟢 en lista' }, className: 'node-ux-action' },

    { id: 's8_snapshot', type: 'default', position: { x: 920, y: 2120 }, data: { label: '⚙️ Daily Stats Snapshot:\nAl completar revisiones\nse guarda automáticamente:\n• Hoteles pendientes\n• Nóminas pendientes\n→ Para trend analysis\nen reportes históricos' }, className: 'node-ux-system' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 9: SEGUIMIENTO WORKRECORD
    // AdoptionTrackerPage, useAdoptionStats, heatmap, insights
    // ═══════════════════════════════════════════════════════
    { id: 's9_header', type: 'default', position: { x: 50, y: 2300 }, data: { label: '📊 9. SEGUIMIENTO\nWORKRECORD' }, className: 'node-ux-section' },

    { id: 's9_heatmap', type: 'default', position: { x: -100, y: 2470 }, data: { label: '🗓️ Heatmap 7 Semanas:\nTabla visual grande:\n━━━━━━━━━━━━━\nFilas = empleados\nColumnas = semanas (7)\nCeldas = iconos color:\n  ✅ Cumplió (verde)\n  🟡 Mod.Menor (amarillo)\n  🟠 Parcial (naranja)\n  🔴 Total (rojo)\n  ⚪ No Aplica (gris)\n  ▪️ Sin datos (vacío)\n+ Sparkline mini-gráfico\n  trend por empleado\n→ Click celda = modal' }, className: 'node-ux-screen' },

    { id: 's9_filters', type: 'default', position: { x: 130, y: 2470 }, data: { label: '🔍 Filtros Workrecord:\n• 🔎 Buscar por nombre\n• 🏨 Filtrar por hotel\n• 📊 Filtrar por status\n  última semana\n→ Filtra filas del heatmap\n  instantáneamente' }, className: 'node-ux-action' },

    { id: 's9_insights', type: 'default', position: { x: -100, y: 2680 }, data: { label: '💡 7 Smart Insights:\nPanel debajo del heatmap:\n1. 📈 Trend global ±2%\n2. ⚠️ Anomalía hotel >15%\n3. 👷 Role bottleneck\n4. 🔴 Chronic offenders\n   (3+ semanas malas)\n5. ⚪ Alta tasa no_aplica\n6. 🔍 Root cause mining\n   (firma/horario/uniforme)\n7. 🏆 Top performer hotel\nCada insight: card con color' }, className: 'node-ux-screen' },

    { id: 's9_rankings', type: 'default', position: { x: 130, y: 2680 }, data: { label: '🏆 Rankings Automáticos:\n• Top 4 hoteles peor\n  compliance (tap→filtrar)\n• Top 4 hoteles promedio\n  con trend arrows ↑↓\n• Top 5 empleados peor\n  score (tap→scroll to row)\n• PieChart distribución\n• BarChart evolución 7 sem' }, className: 'node-ux-screen' },

    { id: 's9_streak', type: 'default', position: { x: -100, y: 2880 }, data: { label: '⚠️ Alertas de Racha:\nSi empleado tiene 2+\nsemanas consecutivas\ncon incumplimiento →\n🔴 WarningIcon rojo\njunto al nombre\n→ Tooltip hover:\n"Racha de Incumplimiento"\n→ Acción inmediata requerida' }, className: 'node-ux-feedback' },

    { id: 's9_export', type: 'default', position: { x: 130, y: 2880 }, data: { label: '📤 Export Workrecord:\nTap [📤 Exportar] →\nDescarga XLSX:\nColumnas: Empleado, Hotel,\nCumplimiento (%), Sem 1-7\n→ seguimiento_workrecord\n  .xlsx' }, className: 'node-ux-action' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 10: REPORTE DE ASISTENCIA
    // AttendanceReportPage, AttendanceCalendar, MileageReport
    // ═══════════════════════════════════════════════════════
    { id: 's10_header', type: 'default', position: { x: 350, y: 2370 }, data: { label: '📅 10. REPORTE\nDE ASISTENCIA' }, className: 'node-ux-section' },

    { id: 's10_calendar', type: 'default', position: { x: 300, y: 2530 }, data: { label: '📅 Calendario Interactivo:\nreact-big-calendar\nLocale: Español\n━━━━━━━━━━━━━\n4 vistas toggle:\n📅 Mes | 📆 Semana\n📋 Día | 📝 Agenda\n━━━━━━━━━━━━━\nEventos = visitas (allDay)\nTítulo = nombre del hotel\n→ Navegar meses con ← →' }, className: 'node-ux-screen' },

    { id: 's10_mileage', type: 'default', position: { x: 530, y: 2530 }, data: { label: '🚗 Mileage Report:\nCalcula distancias:\nHome → Hotel₁ → Hotel₂\n→ ... → HotelN → Home\nHaversine × circuity (1.1)\n━━━━━━━━━━━━━\nResumen:\n• Millas diarias\n• Millas semanales\n• Millas mensuales' }, className: 'node-ux-screen' },

    { id: 's10_cost', type: 'default', position: { x: 530, y: 2730 }, data: { label: '💰 Análisis Costo:\ntotalCost = miles × $/milla\nnetResult = bonus - cost\nratio = (cost/bonus) × 100\n━━━━━━━━━━━━━\nVisual:\n🟢 Ratio < 80% = OK\n🟡 80-100% = Alert\n🔴 >100% = Pérdida' }, className: 'node-ux-screen' },

    { id: 's10_home_req', type: 'default', position: { x: 300, y: 2730 }, data: { label: '⚠️ Sin Domicilio:\nSi no hay home coords →\nBanner: "Configura tu\ndomicilio para ver\nel reporte de millas"\n→ [Configurar] abre\ndialog Mi Domicilio' }, className: 'node-ux-feedback' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 11: INFORMES POR PERÍODO
    // InformesPage, useReportData, getPeriodStats, treemap
    // ═══════════════════════════════════════════════════════
    { id: 's11_header', type: 'default', position: { x: 700, y: 2370 }, data: { label: '📊 11. INFORMES\nPOR PERÍODO' }, className: 'node-ux-section' },

    { id: 's11_picker', type: 'default', position: { x: 650, y: 2530 }, data: { label: '📅 Selector de Período:\nDate picker: desde → hasta\n(viene pre-llenado si\nnavegó desde Dashboard)\n→ Al cambiar fechas\n→ Todas las métricas\n  se recalculan\n→ Current vs Previous\n  period automático' }, className: 'node-ux-action' },

    { id: 's11_activity', type: 'default', position: { x: 870, y: 2530 }, data: { label: '📊 Actividad General:\nStatCards con arrows:\n• 📍 Visitas: 42 ↑12%\n• 📝 Nuevas apps: 8 ↓5%\n• 👷 Nuevos perm: 5 ↑\n• 👷 Nuevos temp: 12 ↓\n• ⚫ Inactivos perm: 2\n• ⚫ Inactivos temp: 4\n• 🚫 Blacklisted: 1\n→ Cada arrow: verde/rojo\n  vs período anterior' }, className: 'node-ux-screen' },

    { id: 's11_requests', type: 'default', position: { x: 650, y: 2730 }, data: { label: '📋 Métricas Solicitudes:\n• Avg time-to-fill: 4.2 días\n• Tasa no presentación: 8%\n• Tasa vencidas: 3%\n• Tasa canceladas: 5%\n• Tasa en proceso: 12%\n→ Tabla detalle sortable:\nhotel, cargo, fecha, días,\nestado → Click fila = modal' }, className: 'node-ux-screen' },

    { id: 's11_treemap', type: 'default', position: { x: 870, y: 2730 }, data: { label: '🗺️ Turnover Treemap:\nRecharts Treemap visual:\nTamaño = promedio empleados\nColor por rotación:\n  🔴 >50%\n  🟠 >30%\n  🟡 >15%\n  🟢 ≤15%\nHover: hotel, tasa, datos\n→ Vista panorámica rápida' }, className: 'node-ux-screen' },

    { id: 's11_tables', type: 'default', position: { x: 700, y: 2910 }, data: { label: '📋 Tablas Drill-Down:\n6 tablas ordenables:\n• Personal activo por cargo\n• Visitas por ciudad\n  (current vs previous)\n• Empleados por hotel\n• Nuevos empleados\n• Blacklisted\n• Rotación por hotel\n→ Tap stat = modal detalle' }, className: 'node-ux-screen' },

    { id: 's11_export', type: 'default', position: { x: 910, y: 2910 }, data: { label: '📤 Export Informe:\nTap [📤 Exportar Excel] →\nDescarga con 6 secciones:\nResumen (12 métricas),\nPersonal por Cargo,\nVisitas por Ciudad,\nEmpleados por Hotel,\nNuevos, Lista Negra\n→ informe_{fecha}.xlsx' }, className: 'node-ux-action' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 12: INTELIGENCIA CORPORATIVA
    // CorporateReportPage, useCorporateIntelligence, 5 pilares
    // ═══════════════════════════════════════════════════════
    { id: 's12_header', type: 'default', position: { x: 50, y: 3100 }, data: { label: '🏢 12. INTELIGENCIA\nCORPORATIVA' }, className: 'node-ux-section' },

    { id: 's12_score', type: 'default', position: { x: -100, y: 3270 }, data: { label: '🎯 Score Global:\nGrande en pantalla:\n━━━━━━━━━━━━━\n   "82"\n PUNTOS DE SALUD\n━━━━━━━━━━━━━\n🔴 <60 = CRÍTICO\n🟠 60-79 = EN RIESGO\n🟢 ≥80 = SALUDABLE\n→ Mensaje explicativo\n  debajo del número\n→ Override: si hotel\n  crítico → cap a 79' }, className: 'node-ux-screen' },

    { id: 's12_pillars', type: 'default', position: { x: 130, y: 3270 }, data: { label: '📊 5 Pilares × 25 pts:\nCards horizontales:\n━━━━━━━━━━━━━\n1. Talento: 20/25 pts\n   ratio temp ≤30%\n2. Demanda: 22/25 pts\n   resolución 30 días\n3. Oferta: 18/25 pts\n   velocidad pipeline\n4. Supervisión: 12/25 pts\n   % hoteles visitados\n5. Disciplina: 10/25 pts\n   avg compliance score\nCada card: barra progreso' }, className: 'node-ux-screen' },

    { id: 's12_insights', type: 'default', position: { x: -100, y: 3490 }, data: { label: '💡 Insights por Pilar:\nPor cada pilar, cards:\n✅ Insight positivo (verde)\n⚠️ Warning operativo\n  (fondo naranja tenue)\n🔴 Alerta negativa\n  (fondo rojo tenue)\nℹ️ Info neutral (gris)\n→ Auto-generados por\n  reglas de negocio' }, className: 'node-ux-screen' },

    { id: 's12_semaphore', type: 'default', position: { x: 130, y: 3490 }, data: { label: '🚦 Semáforo Hoteles:\nLista ordenada peor→mejor:\nPor cada hotel:\n• Nombre (tap → detalle)\n• Chip: 🔴🟠🟢\n• Issues como chips:\n  "Solicitud >24h"\n  "Sin visita 30d"\n  "Compliance <60%"\nScoring: +3/+1/+2/+3\n≥5=Crítico ≥2=Riesgo' }, className: 'node-ux-screen' },

    { id: 's12_nav_pillar', type: 'default', position: { x: -100, y: 3690 }, data: { label: '🔗 Navegación por Pilar:\nCada SectionCard tiene link:\nTalento → /empleados\nDemanda → /solicitudes\nOferta → /aplicaciones\nSupervisión → /asistencia\nDisciplina → /workrecord\n→ Deep navigation directa' }, className: 'node-ux-action' },

    { id: 's12_print', type: 'default', position: { x: 130, y: 3690 }, data: { label: '🖨️ Imprimir Reporte:\nBotón [🖨️ Imprimir]\n→ window.print()\n→ CSS @media print:\n  oculta nav/botones\n  muestra solo contenido\n  formato impresión limpio' }, className: 'node-ux-action' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 13: ANÁLISIS HISTÓRICO
    // HistoricalReportPage, useHistoricalAnalysis
    // ═══════════════════════════════════════════════════════
    { id: 's13_header', type: 'default', position: { x: 400, y: 3100 }, data: { label: '📈 13. ANÁLISIS\nHISTÓRICO' }, className: 'node-ux-section' },

    { id: 's13_drawer', type: 'default', position: { x: 350, y: 3270 }, data: { label: '📑 Drawer Lateral:\n5 pilares navegables:\n━━━━━━━━━━━━━\n📌 Talento y Estabilidad\n📌 Demanda y Fricción\n📌 Oferta (Ingresos)\n📌 Supervisión (Visitas)\n📌 Disciplina Workrecord\n━━━━━━━━━━━━━\nTap pilar = carga datos\nRango fechas desde\nrouter state (Dashboard)' }, className: 'node-ux-screen' },

    { id: 's13_pillar_view', type: 'default', position: { x: 560, y: 3270 }, data: { label: '📊 Vista por Pilar:\nPor cada pilar seleccionado:\n• StatCards con métricas\n• LineChart área rellena\n  (trend mensual)\n• Insights cards (color)\n  positivos + alertas\n→ PillarContent component\n  renderiza dinámicamente\nsegún pilar seleccionado' }, className: 'node-ux-screen' },

    { id: 's13_talent', type: 'default', position: { x: 350, y: 3460 }, data: { label: '📊 Ejemplo: Pilar Talento:\n• Contrataciones perm/mes\n• Contrataciones temp/mes\n• Attrition mensual\n• Churn rate mensual\n→ LineChart: 12 meses\n  4 series con hover\n→ hire dates extraídos\n  de employee.id timestamp' }, className: 'node-ux-screen' },

    { id: 's13_other', type: 'default', position: { x: 560, y: 3460 }, data: { label: '📊 Otros Pilares:\n• Demanda: requests\n  created/resolved/mes\n• Oferta: apps mensuales\n• Supervisión: visits/hotel\n• Disciplina: compliance\n  avg mensual\nCada uno: metrics[],\ninsights[], charts[]' }, className: 'node-ux-screen' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 14: NOTIFICACIONES Y ALERTAS
    // MainLayout bell, popover, urgency classification
    // ═══════════════════════════════════════════════════════
    { id: 's14_header', type: 'default', position: { x: 700, y: 3100 }, data: { label: '🔔 14. NOTIFICACIONES\nY ALERTAS' }, className: 'node-ux-section' },

    { id: 's14_badge', type: 'default', position: { x: 700, y: 3270 }, data: { label: '🔔 Badge en AppBar:\nIcono campana siempre\nvisible en barra superior\n• Badge rojo con número\n  = solicitudes sin resolver\n• Parpadea si urgente\n→ Tap abre popover\n  debajo del ícono' }, className: 'node-ux-screen' },

    { id: 's14_popover', type: 'default', position: { x: 900, y: 3270 }, data: { label: '📋 Popover Solicitudes:\nLista ordenada por fecha:\nPor cada solicitud:\n━━━━━━━━━━━━━\n🏨 Hotel: Marriott - HK\n📅 Inicio: 15 Ene 2025\n🔴 "Vencida"\n━━━━━━━━━━━━━\nChips de urgencia:\n🔴 Vencida (pasó fecha)\n🟠 Vence pronto (hoy/mañ.)' }, className: 'node-ux-screen' },

    { id: 's14_tap', type: 'default', position: { x: 700, y: 3460 }, data: { label: '👆 Tap en Solicitud:\n→ navigate to\n/solicitudes?requestId={id}\n→ Abre directamente\nel Kanban board\ncon la solicitud\nresaltada/abierta\n→ Deep link funcional' }, className: 'node-ux-action' },

    { id: 's14_urgency', type: 'default', position: { x: 900, y: 3460 }, data: { label: '⚙️ Clasificación Auto:\nisPast(date) && !isToday\n→ 🔴 "Vencida" chip rojo\nisToday || isTomorrow\n→ 🟠 "Vence pronto" naranja\nOtro → sin chip\n→ Ordenamiento prioriza\n  las más urgentes arriba' }, className: 'node-ux-system' },

    // ── FIN ──
    { id: 'end', type: 'output', position: { x: 450, y: 3700 }, data: { label: '🏆 Inspector UX\nCompleto\n14 Secciones\n~95 Pantallas\n100% Cobertura App' }, className: 'node-ux-section' },
  ],

  edges: [
    // ══════════════════════════════════════════════
    // Inicio → Secciones principales
    // ══════════════════════════════════════════════
    { id: 'e_s1', source: 'start', target: 's1_header' },
    { id: 'e_s2', source: 'start', target: 's2_header' },
    { id: 'e_s3', source: 'start', target: 's3_header' },

    // ══════════════════════════════════════════════
    // 1. LOGIN Y ACCESO
    // ══════════════════════════════════════════════
    { id: 'e_1a', source: 's1_header', target: 's1_login' },
    { id: 'e_1b', source: 's1_header', target: 's1_auth_check' },
    { id: 'e_1c', source: 's1_login', target: 's1_error', label: 'Error', style: { stroke: '#c62828' } },
    { id: 'e_1d', source: 's1_login', target: 's1_layout', label: 'Login OK', style: { stroke: '#2e7d32' } },
    { id: 'e_1e', source: 's1_auth_check', target: 's1_layout', label: 'Sesión activa', style: { strokeDasharray: '5,5' } },
    { id: 'e_1f', source: 's1_layout', target: 's1_home_dialog', style: { strokeDasharray: '5,5' } },

    // Layout → Secciones de navegación
    { id: 'e_1_hotels', source: 's1_layout', target: 's4_header', label: '/hoteles', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },
    { id: 'e_1_emps', source: 's1_layout', target: 's5_header', label: '/empleados', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },
    { id: 'e_1_dash', source: 's1_layout', target: 's2_header', label: '/ (default)', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },

    // ══════════════════════════════════════════════
    // 2. DASHBOARD PRINCIPAL
    // ══════════════════════════════════════════════
    { id: 'e_2a', source: 's2_header', target: 's2_kpis' },
    { id: 'e_2b', source: 's2_header', target: 's2_charts' },
    { id: 'e_2c', source: 's2_kpis', target: 's2_ranking' },
    { id: 'e_2d', source: 's2_charts', target: 's2_fab' },
    { id: 'e_2e', source: 's2_ranking', target: 's2_notif_bell', style: { strokeDasharray: '5,5' } },
    { id: 'e_2f', source: 's2_fab', target: 's2_notif_bell', style: { strokeDasharray: '5,5' } },

    // ══════════════════════════════════════════════
    // 3. REGISTRAR VISITA GPS
    // ══════════════════════════════════════════════
    { id: 'e_3a', source: 's3_header', target: 's3_tap_fab' },
    { id: 'e_3b', source: 's3_tap_fab', target: 's3_gps_acquire' },
    { id: 'e_3c', source: 's3_gps_acquire', target: 's3_decision' },
    { id: 'e_3d', source: 's3_decision', target: 's3_success', label: 'Sí, ≤150m', style: { stroke: '#2e7d32' } },
    { id: 'e_3e', source: 's3_decision', target: 's3_no_hotel', label: 'No hotel', style: { stroke: '#c62828' } },
    { id: 'e_3f', source: 's3_success', target: 's3_duplicate', label: '¿Ya registrado?', style: { strokeDasharray: '5,5', stroke: '#f57f17' } },

    // ══════════════════════════════════════════════
    // 4. GESTIÓN DE HOTELES
    // ══════════════════════════════════════════════
    { id: 'e_4a', source: 's4_header', target: 's4_list' },
    { id: 'e_4b', source: 's4_header', target: 's4_form' },
    { id: 'e_4c', source: 's4_list', target: 's4_geo_btn', label: 'Tap hotel', style: { strokeDasharray: '5,5' } },
    { id: 'e_4d', source: 's4_list', target: 's4_detail', label: 'Tap nombre' },
    { id: 'e_4e', source: 's4_form', target: 's4_save_ok', label: 'Guardar', style: { stroke: '#2e7d32' } },
    { id: 'e_4f', source: 's4_detail', target: 's4_turnover' },
    { id: 'e_4g', source: 's4_form', target: 's4_geo_btn', label: 'Tap GPS', style: { strokeDasharray: '5,5' } },

    // ══════════════════════════════════════════════
    // 5. GESTIÓN DE EMPLEADOS
    // ══════════════════════════════════════════════
    { id: 'e_5a', source: 's5_header', target: 's5_list' },
    { id: 'e_5b', source: 's5_header', target: 's5_filters' },
    { id: 'e_5c', source: 's5_list', target: 's5_form', label: 'Nuevo / Editar' },
    { id: 'e_5d', source: 's5_form', target: 's5_blacklist', label: 'Zona Peligro', style: { stroke: '#c62828', strokeDasharray: '5,5' } },
    { id: 'e_5e', source: 's5_list', target: 's5_csv', label: 'Tap CSV' },
    { id: 'e_5f', source: 's5_form', target: 's5_status_change', label: 'Toggle activo', style: { strokeDasharray: '5,5' } },
    { id: 'e_5g', source: 's5_list', target: 's5_export', label: 'Tap Export' },

    // ══════════════════════════════════════════════
    // 6. SOLICITUDES KANBAN
    // ══════════════════════════════════════════════
    { id: 'e_6a', source: 's6_header', target: 's6_board' },
    { id: 'e_6b', source: 's6_header', target: 's6_card' },
    { id: 'e_6c', source: 's6_board', target: 's6_drag', label: 'Drag card' },
    { id: 'e_6d', source: 's6_card', target: 's6_dialog', label: 'Tap ✏️' },
    { id: 'e_6e', source: 's6_board', target: 's6_archive', label: 'Tap 📦', style: { strokeDasharray: '5,5' } },
    { id: 'e_6f', source: 's6_board', target: 's6_new', label: 'Tap + Nueva' },

    // ══════════════════════════════════════════════
    // 7. CANDIDATOS Y APLICACIONES
    // ══════════════════════════════════════════════
    { id: 'e_7a', source: 's7_header', target: 's7_candidates' },
    { id: 'e_7b', source: 's7_header', target: 's7_status_change' },
    { id: 'e_7c', source: 's7_status_change', target: 's7_auto_app', label: '"Llegó"', style: { stroke: '#2e7d32' } },
    { id: 'e_7d', source: 's7_auto_app', target: 's7_apps_page' },
    { id: 'e_7e', source: 's7_apps_page', target: 's7_create_emp', label: 'Completada →\nAñadir Empleado' },
    { id: 'e_7f', source: 's7_create_emp', target: 's7_metrics', style: { strokeDasharray: '5,5' } },
    { id: 'e_7g', source: 's7_candidates', target: 's7_apps_page', style: { strokeDasharray: '5,5' } },

    // ══════════════════════════════════════════════
    // 8. REVISIÓN DE NÓMINA
    // ══════════════════════════════════════════════
    { id: 'e_8a', source: 's8_header', target: 's8_list' },
    { id: 'e_8b', source: 's8_header', target: 's8_review_modal' },
    { id: 'e_8c', source: 's8_list', target: 's8_review_modal', label: 'Tap empleado' },
    { id: 'e_8d', source: 's8_review_modal', target: 's8_reasons', label: 'Si ≠ Cumplió' },
    { id: 'e_8e', source: 's8_review_modal', target: 's8_na_modal', label: 'Tap "No Aplica"', style: { strokeDasharray: '5,5' } },
    { id: 'e_8f', source: 's8_reasons', target: 's8_save' },
    { id: 'e_8g', source: 's8_na_modal', target: 's8_save' },
    { id: 'e_8h', source: 's8_save', target: 's8_snapshot', style: { strokeDasharray: '5,5' } },

    // ══════════════════════════════════════════════
    // 9. SEGUIMIENTO WORKRECORD
    // ══════════════════════════════════════════════
    { id: 'e_9a', source: 's9_header', target: 's9_heatmap' },
    { id: 'e_9b', source: 's9_header', target: 's9_filters' },
    { id: 'e_9c', source: 's9_heatmap', target: 's9_insights' },
    { id: 'e_9d', source: 's9_filters', target: 's9_rankings' },
    { id: 'e_9e', source: 's9_heatmap', target: 's9_streak', label: 'Si racha 2+ sem', style: { stroke: '#c62828', strokeDasharray: '5,5' } },
    { id: 'e_9f', source: 's9_rankings', target: 's9_export' },

    // ══════════════════════════════════════════════
    // 10. REPORTE DE ASISTENCIA
    // ══════════════════════════════════════════════
    { id: 'e_10a', source: 's10_header', target: 's10_calendar' },
    { id: 'e_10b', source: 's10_header', target: 's10_mileage' },
    { id: 'e_10c', source: 's10_mileage', target: 's10_cost' },
    { id: 'e_10d', source: 's10_calendar', target: 's10_home_req', label: 'Sin domicilio', style: { stroke: '#f57f17', strokeDasharray: '5,5' } },

    // ══════════════════════════════════════════════
    // 11. INFORMES POR PERÍODO
    // ══════════════════════════════════════════════
    { id: 'e_11a', source: 's11_header', target: 's11_picker' },
    { id: 'e_11b', source: 's11_header', target: 's11_activity' },
    { id: 'e_11c', source: 's11_picker', target: 's11_requests' },
    { id: 'e_11d', source: 's11_activity', target: 's11_treemap' },
    { id: 'e_11e', source: 's11_requests', target: 's11_tables' },
    { id: 'e_11f', source: 's11_treemap', target: 's11_tables' },
    { id: 'e_11g', source: 's11_tables', target: 's11_export' },

    // ══════════════════════════════════════════════
    // 12. INTELIGENCIA CORPORATIVA
    // ══════════════════════════════════════════════
    { id: 'e_12a', source: 's12_header', target: 's12_score' },
    { id: 'e_12b', source: 's12_header', target: 's12_pillars' },
    { id: 'e_12c', source: 's12_score', target: 's12_insights' },
    { id: 'e_12d', source: 's12_pillars', target: 's12_semaphore' },
    { id: 'e_12e', source: 's12_insights', target: 's12_nav_pillar' },
    { id: 'e_12f', source: 's12_semaphore', target: 's12_nav_pillar' },
    { id: 'e_12g', source: 's12_nav_pillar', target: 's12_print', style: { strokeDasharray: '5,5' } },

    // ══════════════════════════════════════════════
    // 13. ANÁLISIS HISTÓRICO
    // ══════════════════════════════════════════════
    { id: 'e_13a', source: 's13_header', target: 's13_drawer' },
    { id: 'e_13b', source: 's13_header', target: 's13_pillar_view' },
    { id: 'e_13c', source: 's13_drawer', target: 's13_talent', label: 'Tap pilar' },
    { id: 'e_13d', source: 's13_drawer', target: 's13_other', style: { strokeDasharray: '5,5' } },

    // ══════════════════════════════════════════════
    // 14. NOTIFICACIONES Y ALERTAS
    // ══════════════════════════════════════════════
    { id: 'e_14a', source: 's14_header', target: 's14_badge' },
    { id: 'e_14b', source: 's14_header', target: 's14_popover' },
    { id: 'e_14c', source: 's14_badge', target: 's14_tap', label: 'Tap bell' },
    { id: 'e_14d', source: 's14_popover', target: 's14_tap', label: 'Tap solicitud' },
    { id: 'e_14e', source: 's14_popover', target: 's14_urgency', style: { strokeDasharray: '5,5' } },

    // ══════════════════════════════════════════════
    // CROSS-SECTION CONNECTIONS
    // ══════════════════════════════════════════════

    // Dashboard FAB → GPS check-in flow
    { id: 'e_cross_fab_gps', source: 's2_fab', target: 's3_header', label: 'Tap FAB', style: { strokeDasharray: '8,4', stroke: '#00695c', strokeWidth: 2 } },

    // Dashboard → Informes (generar informe con dates)
    { id: 'e_cross_dash_inf', source: 's2_fab', target: 's11_header', label: 'Generar Informe', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },

    // Dashboard → Corporate
    { id: 'e_cross_dash_corp', source: 's2_fab', target: 's12_header', label: 'Corporativo', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },

    // Dashboard → Historical
    { id: 'e_cross_dash_hist', source: 's2_fab', target: 's13_header', label: 'Histórico', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },

    // Bell → Notificaciones
    { id: 'e_cross_bell_notif', source: 's2_notif_bell', target: 's14_header', label: 'Tap 🔔', style: { strokeDasharray: '8,4', stroke: '#f57f17', strokeWidth: 2 } },

    // Notificación tap → Kanban (deep link)
    { id: 'e_cross_notif_kan', source: 's14_tap', target: 's6_board', label: 'Deep link\n/solicitudes', style: { strokeDasharray: '8,4', stroke: '#ff6f00', strokeWidth: 2 } },

    // Kanban dialog tab candidatos → Pipeline
    { id: 'e_cross_kan_pipe', source: 's6_dialog', target: 's7_header', label: 'Tab Candidatos', style: { strokeDasharray: '8,4', stroke: '#00695c' } },

    // Pipeline create emp → Empleados form
    { id: 'e_cross_pipe_emp', source: 's7_create_emp', target: 's5_form', label: 'Form pre-llenado', style: { strokeDasharray: '8,4', stroke: '#00695c' } },

    // Nómina save → Workrecord (alimenta heatmap)
    { id: 'e_cross_pay_wr', source: 's8_save', target: 's9_header', label: 'Alimenta\ncompliance', style: { strokeDasharray: '8,4', stroke: '#00695c', strokeWidth: 2 } },

    // Corporate nav → secciones por pilar
    { id: 'e_cross_corp_emp', source: 's12_nav_pillar', target: 's5_header', label: 'Talento', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },
    { id: 'e_cross_corp_kan', source: 's12_nav_pillar', target: 's6_header', label: 'Demanda', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },
    { id: 'e_cross_corp_wr', source: 's12_nav_pillar', target: 's9_header', label: 'Disciplina', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },

    // Home dialog → Mileage report
    { id: 'e_cross_home_mile', source: 's1_home_dialog', target: 's10_mileage', label: 'Coords para\ncálculo millas', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },

    // Layout → Kanban, Payroll, Workrecord, Asistencia routes
    { id: 'e_1_kanban', source: 's1_layout', target: 's6_header', label: '/solicitudes', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },
    { id: 'e_1_payroll', source: 's1_layout', target: 's8_header', label: '/revision-nomina', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },
    { id: 'e_1_workrecord', source: 's1_layout', target: 's9_header', label: '/seguimiento', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },
    { id: 'e_1_attendance', source: 's1_layout', target: 's10_header', label: '/asistencia', style: { strokeDasharray: '8,4', stroke: '#546e7a' } },

    // ══════════════════════════════════════════════
    // CONVERGENCIA → FIN
    // ══════════════════════════════════════════════
    { id: 'e_end1', source: 's12_print', target: 'end' },
    { id: 'e_end2', source: 's11_export', target: 'end' },
    { id: 'e_end3', source: 's9_export', target: 'end', style: { strokeDasharray: '5,5' } },
    { id: 'e_end4', source: 's7_metrics', target: 'end', style: { strokeDasharray: '5,5' } },
    { id: 'e_end5', source: 's13_other', target: 'end' },
    { id: 'e_end6', source: 's5_export', target: 'end', style: { strokeDasharray: '5,5' } },
    { id: 'e_end7', source: 's14_urgency', target: 'end', style: { strokeDasharray: '5,5' } },
    { id: 'e_end8', source: 's4_turnover', target: 'end', style: { strokeDasharray: '5,5' } },
    { id: 'e_end9', source: 's10_cost', target: 'end', style: { strokeDasharray: '5,5' } },
    { id: 'e_end10', source: 's8_snapshot', target: 'end', style: { strokeDasharray: '5,5' } },
  ]
}

export default inspectorUXFlow
