// ═══════════════════════════════════════════════════════════════════════
// PROCESO DIGITAL: INSPECTOR DE CALIDAD — SISTEMA COMPLETO
// Mapeo 100% de la app de David (zonadavid/)
// 15 secciones, ~97 nodos, ~120 edges
// Cada tabla, columna, hook, componente, fórmula y flujo representado
// ═══════════════════════════════════════════════════════════════════════
//
// SECCIONES:
//   1.  Autenticación y Navegación
//   2.  Base de Datos — Esquema y Relaciones (11 tablas)
//   3.  Gestión de Hoteles (CRUD + geo + imagen + turnover)
//   4.  Gestión de Empleados (CRUD + filtros + blacklist + CSV + export)
//   5.  Check-in GPS / Asistencia (geofencing 150m + mileage)
//   6.  Solicitudes Kanban (8 estados + drag-drop + historial)
//   7.  Pipeline Candidatos → Empleados (4 estados candidato → 3 estados app)
//   8.  Revisión de Nómina (4 niveles compliance + daily_stats)
//   9.  Seguimiento Workrecord (heatmap + 7 smart insights + rankings)
//   10. Informes por Período (20+ métricas + treemap + Excel)
//   11. Inteligencia Corporativa (5 pilares × 25pts + override + semáforo)
//   12. Análisis Histórico (5 pilares + trends mensuales + churn)
//   13. Notificaciones y Alertas (badge + urgencia + deep link)
//   14. Dashboard Principal (stats + charts + ranking + acciones)
//   15. Reportes y Exportación (Excel + calendario + mileage + print)
//
// ═══════════════════════════════════════════════════════════════════════

const inspectorDigitalFlow = {
  nodes: [
    // ── INICIO ──
    { id: 'start', type: 'input', position: { x: 1400, y: 0 }, data: { label: 'Inspector Digital\nde Calidad\nSistema Completo' }, className: 'node-digital-section' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 1: AUTENTICACIÓN Y NAVEGACIÓN
    // useAuth, MainLayout, sesión, home location
    // ═══════════════════════════════════════════════════════
    { id: 'section_auth', type: 'default', position: { x: 50, y: 150 }, data: { label: 'AUTENTICACIÓN\nY NAVEGACIÓN' }, className: 'node-digital-section' },

    { id: 'auth_login', type: 'default', position: { x: 50, y: 320 }, data: { label: 'LoginPage:\nuseAuth.signIn(email, pwd)\n→ Sesión persistente\n→ Redirect a Dashboard\nSi ya autenticado → skip' }, className: 'node-digital-hybrid' },

    { id: 'auth_session', type: 'default', position: { x: 250, y: 320 }, data: { label: 'Sesión Usuario:\n• user_id (UUID)\n• email\n• user_metadata:\n  - home_lat\n  - home_lng\nuseAuth: signIn/signOut/\nonAuthStateChange' }, className: 'node-digital-auto' },

    { id: 'auth_layout', type: 'default', position: { x: 50, y: 520 }, data: { label: 'MainLayout:\nAppBar + Drawer 8 rutas:\n/ Dashboard\n/empleados\n/hoteles\n/solicitudes\n/aplicaciones\n/reporte-asistencia\n/revision-nomina\n/seguimiento-workrecord' }, className: 'node-digital-hybrid' },

    { id: 'auth_home', type: 'default', position: { x: 250, y: 520 }, data: { label: 'Mi Domicilio (Dialog):\nLat/Lng manual o\nnavigator.geolocation\n→ updateUser(user_metadata)\nUsado por MileageReport\npara calcular distancias\nHome ↔ Hoteles' }, className: 'node-digital-auto' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 2: BASE DE DATOS — ESQUEMA Y RELACIONES
    // 11 tablas con columnas y FK
    // ═══════════════════════════════════════════════════════
    { id: 'section_db', type: 'default', position: { x: 500, y: 150 }, data: { label: 'BASE DE DATOS\nEsquema y Relaciones\n(11 tablas)' }, className: 'node-digital-section' },

    { id: 'db_hotels', type: 'default', position: { x: 500, y: 340 }, data: { label: 'hotels\n─────────────────\nid: UUID (PK)\nname: TEXT\ncity: TEXT\naddress: TEXT\nlatitude: FLOAT\nlongitude: FLOAT\nimageUrl: TEXT' }, className: 'node-digital-auto' },

    { id: 'db_employees', type: 'default', position: { x: 720, y: 340 }, data: { label: 'employees\n─────────────────\nid: TEXT (PK)\nemployeeNumber: TEXT\nname: TEXT\nhotelId: TEXT → hotels\nrole: TEXT\nisActive: BOOL\nisBlacklisted: BOOL\npayrollType: TEXT\nemployeeType: TEXT\ndocumentacion_completa: BOOL\nlastReviewedTimestamp: TSTZ\novertime: FLOAT\nuser_id: UUID' }, className: 'node-digital-auto' },

    { id: 'db_attendance', type: 'default', position: { x: 500, y: 600 }, data: { label: 'attendance_records\n─────────────────\nid: UUID (PK)\nemployeeId: TEXT → employees\nhotelId: UUID → hotels\ntimestamp: TSTZ' }, className: 'node-digital-auto' },

    { id: 'db_emp_history', type: 'default', position: { x: 720, y: 600 }, data: { label: 'employee_status_history\n─────────────────\nid: BIGINT (PK auto)\nemployee_id: TEXT → employees\nchange_date: TSTZ\nold_is_active: BOOL\nnew_is_active: BOOL\nreason: TEXT' }, className: 'node-digital-auto' },

    { id: 'db_staffing', type: 'default', position: { x: 500, y: 820 }, data: { label: 'staffing_requests\n─────────────────\nid: INT (PK)\nhotel_id: UUID → hotels\nrequest_type: TEXT\nnum_of_people: INT\nrole: TEXT\nstart_date: DATE\nend_date: DATE\nstatus: TEXT (8 valores)\ncompleted_at: TSTZ\nnotes: TEXT\nis_archived: BOOL\ncreated_at: TSTZ' }, className: 'node-digital-auto' },

    { id: 'db_staff_history', type: 'default', position: { x: 720, y: 820 }, data: { label: 'staffing_request_history\n─────────────────\nid: BIGINT (PK auto)\nrequest_id: INT → staffing_requests\nchanged_by: TEXT\nchange_description: TEXT\ncreated_at: TSTZ' }, className: 'node-digital-auto' },

    { id: 'db_candidates', type: 'default', position: { x: 500, y: 1050 }, data: { label: 'request_candidates\n─────────────────\nid: BIGINT (PK auto)\nrequest_id: INT → staffing_requests\ncandidate_name: TEXT\nexisting_employee_id: TEXT\nstatus: TEXT\n  (Asignado/Llegó/\n   No llegó/Confirmado)' }, className: 'node-digital-auto' },

    { id: 'db_applications', type: 'default', position: { x: 720, y: 1050 }, data: { label: 'applications\n─────────────────\nid: BIGINT (PK auto)\nrequest_candidate_id: BIGINT\n  → request_candidates\nstatus: TEXT\n  (pendiente/completada/\n   empleado_creado)\ncompleted_at: TSTZ\ncreated_at: TSTZ' }, className: 'node-digital-auto' },

    { id: 'db_payroll', type: 'default', position: { x: 940, y: 340 }, data: { label: 'payroll_review_history\n─────────────────\nid: BIGINT (PK auto)\nemployee_id: TEXT → employees\nreview_date: TSTZ\novertime_hours: FLOAT' }, className: 'node-digital-auto' },

    { id: 'db_compliance', type: 'default', position: { x: 940, y: 560 }, data: { label: 'adoption_compliance_history\n─────────────────\nid: BIGINT (PK auto)\nemployee_id: TEXT → employees\nweek_of_year: INT\ncompliance_year: INT\ncompliance_status: TEXT\n  (cumplio/modificacion_menor/\n   incumplimiento_parcial/\n   incumplimiento_total/\n   no_aplica)\nreason: TEXT\nreview_date: TSTZ' }, className: 'node-digital-auto' },

    { id: 'db_daily_stats', type: 'default', position: { x: 940, y: 820 }, data: { label: 'daily_stats\n─────────────────\nid: BIGINT (PK auto)\ndate: DATE\npending_hotels: INT\npending_payrolls: INT\ncreated_at: TSTZ' }, className: 'node-digital-auto' },

    { id: 'db_sql_fn', type: 'default', position: { x: 940, y: 1050 }, data: { label: 'SQL Function:\nget_staffing_requests_\nwith_candidate_count()\n─────────────────\nJOIN staffing_requests\n+ hotels + request_candidates\n→ hotel_name, candidate_count\nORDER BY created_at DESC' }, className: 'node-digital-rules' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 3: GESTIÓN DE HOTELES
    // useHotels CRUD, geolocation, imagen, turnover
    // ═══════════════════════════════════════════════════════
    { id: 'section_hotels', type: 'default', position: { x: 50, y: 750 }, data: { label: 'GESTIÓN DE\nHOTELES' }, className: 'node-digital-section' },

    { id: 'hot_crud', type: 'default', position: { x: 50, y: 920 }, data: { label: 'HotelsPage + HotelForm:\nCRUD completo\nCampos: name*, city*,\naddress*\n→ SELECT/INSERT/UPDATE/\n  DELETE en hotels\n→ Export Excel (3 cols)' }, className: 'node-digital-hybrid' },

    { id: 'hot_geo', type: 'default', position: { x: 250, y: 920 }, data: { label: 'Geolocation Auto:\nBotón "Obtener Ubicación"\n→ navigator.geolocation\n→ lat/lng auto-fill\n  (campos disabled)\nUsado para GPS check-in\ny distancia Haversine' }, className: 'node-digital-auto' },

    { id: 'hot_image', type: 'default', position: { x: 50, y: 1100 }, data: { label: 'Upload Imagen:\nHidden file input\n→ Storage upload\n→ imageUrl guardado\n→ Preview en form\nSolo en modo edición' }, className: 'node-digital-hybrid' },

    { id: 'hot_turnover', type: 'default', position: { x: 250, y: 1100 }, data: { label: 'TurnoverAnalysis:\n(HotelDetailPage)\nConsulta directa a DB:\n1) employees WHERE hotelId\n2) employee_status_history\n   WHERE new_is_active=false\nFórmula: separations/\n  avgEmployees × 100\n→ 30d + 365d rates\n→ Trend 12 meses (LineChart)' }, className: 'node-digital-rules' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 4: GESTIÓN DE EMPLEADOS
    // useEmployees CRUD, filtros, blacklist, CSV, export
    // ═══════════════════════════════════════════════════════
    { id: 'section_employees', type: 'default', position: { x: 50, y: 1300 }, data: { label: 'GESTIÓN DE\nEMPLEADOS' }, className: 'node-digital-section' },

    { id: 'emp_crud', type: 'default', position: { x: 50, y: 1470 }, data: { label: 'EmployeesPage + EmployeeForm:\n7 campos:\nname*, role*, payrollType*,\nhotelId*, employeeType*,\nisActive (switch),\ndocumentacion_completa (switch)\nVista: Table o Grid cards\n→ SELECT/INSERT/UPDATE/\n  DELETE en employees' }, className: 'node-digital-hybrid' },

    { id: 'emp_filters', type: 'default', position: { x: 280, y: 1470 }, data: { label: 'EmployeeFilters:\n• ToggleButton exclusivo:\n  Activos / Inactivos /\n  Lista Negra\n• Select hotel (todos)\n• Búsqueda por nombre\n→ Filtrado client-side' }, className: 'node-digital-auto' },

    { id: 'emp_blacklist', type: 'default', position: { x: 50, y: 1670 }, data: { label: 'Toggle Blacklist:\nZona Peligro (solo edit)\n→ Deshabilita TODOS\n  los campos del form\n→ Chip visual negro\n  "Lista Negra"\n→ UPDATE isBlacklisted' }, className: 'node-digital-rules' },

    { id: 'emp_status_hist', type: 'default', position: { x: 280, y: 1670 }, data: { label: 'Al cambiar isActive:\n→ INSERT employee_status_\n  history:\n  employee_id, change_date,\n  old_is_active, new_is_active,\n  reason\n→ Auditoría de\n  activaciones/desactivaciones' }, className: 'node-digital-rules' },

    { id: 'emp_csv', type: 'default', position: { x: 50, y: 1850 }, data: { label: 'BulkImportButton:\nCSV upload → PapaParse\n→ Validación headers\n  requeridos\n→ Batch INSERT employees\n→ Snackbar resultado\n  (success/warning/error)' }, className: 'node-digital-auto' },

    { id: 'emp_export', type: 'default', position: { x: 280, y: 1850 }, data: { label: 'Export Excel Empleados:\n8 columnas:\nNº Empleado, Nombre,\nCargo, Tipo Nómina,\nHotel, Ciudad, Estado,\nLista Negra\n→ reporte_empleados.xlsx' }, className: 'node-digital-auto' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 5: CHECK-IN GPS / ASISTENCIA
    // useAttendance, geofencing 150m, Haversine, mileage
    // ═══════════════════════════════════════════════════════
    { id: 'section_checkin', type: 'default', position: { x: 1150, y: 150 }, data: { label: 'CHECK-IN GPS\nASISTENCIA' }, className: 'node-digital-section' },

    { id: 'gps_trigger', type: 'default', position: { x: 1150, y: 320 }, data: { label: 'Dashboard FAB:\nBotón "Registrar Visita"\n→ navigator.geolocation\n  .getCurrentPosition()\n→ Obtiene lat/lng actual' }, className: 'node-digital-hybrid' },

    { id: 'gps_nearest', type: 'default', position: { x: 1150, y: 500 }, data: { label: 'Buscar Hotel Cercano:\nHaversine formula:\ngetDistanceInMeters(\n  userLat, userLng,\n  hotel.lat, hotel.lng)\n→ Hotel más cercano\n→ Umbral: ≤150 metros\nSi ninguno ≤150m → error' }, className: 'node-digital-rules' },

    { id: 'gps_duplicate', type: 'default', position: { x: 1350, y: 320 }, data: { label: 'Prevención Duplicados:\nSELECT attendance_records\nWHERE employeeId = user\nAND hotelId = hotel\nAND date(timestamp) = hoy\n→ Si existe → bloquear\n  "Ya registraste visita\n   a este hotel hoy"' }, className: 'node-digital-rules' },

    { id: 'gps_record', type: 'default', position: { x: 1350, y: 500 }, data: { label: 'INSERT attendance_records:\n{\n  employeeId: user_id,\n  hotelId: nearest.id,\n  timestamp: now()\n}\n→ Snackbar confirmación\ncon nombre del hotel' }, className: 'node-digital-auto' },

    { id: 'gps_mileage', type: 'default', position: { x: 1150, y: 680 }, data: { label: 'MileageReport:\nHome → Hotel1 → Hotel2\n→ ... → HotelN → Home\nHaversine × circuityFactor\n(default 1.1)\n→ Millas diarias/semanales/\n  mensuales\n→ Cost vs Bonus:\n  totalCost = miles × $/mi\n  netResult = bonus - cost\n  ratio = (cost/bonus) × 100' }, className: 'node-digital-auto' },

    { id: 'gps_calendar', type: 'default', position: { x: 1350, y: 680 }, data: { label: 'AttendanceCalendar:\nreact-big-calendar\nLocale español\nVistas: Mes/Semana/Día/\n  Agenda\nEventos = visitas (allDay)\nTitle = hotel.name' }, className: 'node-digital-hybrid' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 6: SOLICITUDES KANBAN
    // useStaffingRequests, 8 estados, drag-drop, historial
    // ═══════════════════════════════════════════════════════
    { id: 'section_kanban', type: 'default', position: { x: 1550, y: 150 }, data: { label: 'SOLICITUDES\nKANBAN' }, className: 'node-digital-section' },

    { id: 'kan_create', type: 'default', position: { x: 1550, y: 320 }, data: { label: 'StaffingRequestDialog:\n3 tabs: Detalles/Historial/\n  Candidatos\nCascading: Ciudad → Hotel\n  (solo con empleados)\nCampos: hotel*, tipo*,\nrole*, personas*, fecha*,\nstatus, notas\n→ INSERT staffing_requests' }, className: 'node-digital-hybrid' },

    { id: 'kan_board', type: 'default', position: { x: 1750, y: 320 }, data: { label: 'Kanban 8 Columnas:\n@dnd-kit drag-and-drop\n1. Pendiente\n2. Enviada a Reclutamiento\n3. En Proceso\n4. Completada\n5. Completada Parcialmente\n6. Candidato No Presentado\n7. Cancelada por Hotel\n8. Vencida\nDrop → UPDATE status' }, className: 'node-digital-auto' },

    { id: 'kan_history', type: 'default', position: { x: 1550, y: 540 }, data: { label: 'Historial Automático:\nCada cambio de status →\nINSERT staffing_request_\n  history:\n  request_id, changed_by,\n  change_description,\n  created_at (auto)\n→ Tab "Historial" en dialog' }, className: 'node-digital-rules' },

    { id: 'kan_completed', type: 'default', position: { x: 1750, y: 540 }, data: { label: 'Auto-Completado:\nAl status = "Completada"\n→ completed_at = now()\n  (auto-set)\nAl salir de "Completada"\n→ completed_at = null\nUsado para calcular\n  avg time-to-fill' }, className: 'node-digital-rules' },

    { id: 'kan_archive', type: 'default', position: { x: 1550, y: 720 }, data: { label: 'Archivar Solicitudes:\nSolo estados terminales:\nCompletada, Comp. Parcial,\nCand. No Presentado,\nCancelada Hotel, Vencida\n→ UPDATE is_archived=true\n→ ArchivedRequestsPage\n  para consulta' }, className: 'node-digital-auto' },

    { id: 'kan_details', type: 'default', position: { x: 1750, y: 720 }, data: { label: 'RequestCard (visual):\nGlassmorphism + neon glow\nMuestra: role, hotel,\nfecha, personas, candidatos\nBotones: edit, archive,\n  delete\nDrag handle integrado' }, className: 'node-digital-hybrid' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 7: PIPELINE CANDIDATOS → EMPLEADOS
    // useRequestCandidates, useApplications, auto-create
    // ═══════════════════════════════════════════════════════
    { id: 'section_pipeline', type: 'default', position: { x: 1950, y: 150 }, data: { label: 'PIPELINE\nCANDIDATOS →\nEMPLEADOS' }, className: 'node-digital-section' },

    { id: 'pipe_candidates', type: 'default', position: { x: 1950, y: 340 }, data: { label: 'request_candidates:\n4 Estados:\n• Asignado (inicial)\n• Llegó (se presentó)\n• No llegó (no-show)\n• Confirmado (OK final)\nAsignar por nombre nuevo\no seleccionar empleado\nexistente (con búsqueda)' }, className: 'node-digital-auto' },

    { id: 'pipe_auto_app', type: 'default', position: { x: 2150, y: 340 }, data: { label: 'Auto-Create Aplicación:\nAl cambiar candidato\na status "Llegó" →\nINSERT applications:\n  request_candidate_id,\n  status: "pendiente",\n  created_at: now()\n→ Cierra ciclo solicitud\n  → pipeline hiring' }, className: 'node-digital-rules' },

    { id: 'pipe_app_states', type: 'default', position: { x: 1950, y: 560 }, data: { label: 'ApplicationsPage:\n3 Estados Aplicación:\n1. Pendiente\n   (recién llegó)\n2. Completada\n   (docs/proceso OK)\n3. Empleado Creado\n   (record generado)\nTransición: 1 → 2 → 3' }, className: 'node-digital-auto' },

    { id: 'pipe_create_emp', type: 'default', position: { x: 2150, y: 560 }, data: { label: 'Crear Empleado desde App:\nAl status = "completada"\n→ Botón "Añadir Empleado"\n→ EmployeeForm pre-llenado:\n  nombre del candidato,\n  hotel de la solicitud,\n  rol de la solicitud\n→ INSERT employees\n→ UPDATE app status\n  = "empleado_creado"' }, className: 'node-digital-rules' },

    { id: 'pipe_metrics', type: 'default', position: { x: 2050, y: 740 }, data: { label: 'Métricas Supply:\n• Apps últimos 7 días\n• Apps últimos 30 días\n• Pendientes (incompletas)\n• Top hotel contratante\n• Diversidad de roles\n• Velocidad semanal hiring\n→ Alimenta Pilar 3: Oferta' }, className: 'node-digital-auto' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 8: REVISIÓN DE NÓMINA
    // PayrollReviewPage, ComplianceReviewModal, NotApplicableModal
    // ═══════════════════════════════════════════════════════
    { id: 'section_payroll', type: 'default', position: { x: 50, y: 2050 }, data: { label: 'REVISIÓN DE\nNÓMINA' }, className: 'node-digital-section' },

    { id: 'pay_filter', type: 'default', position: { x: 50, y: 2220 }, data: { label: 'PayrollReviewPage:\nFiltro automático:\npayrollType = "Workrecord"\n&& isActive = true\n→ Lista de empleados\n  pendientes de revisión\n→ Semana actual como\n  referencia' }, className: 'node-digital-hybrid' },

    { id: 'pay_review', type: 'default', position: { x: 280, y: 2220 }, data: { label: 'ComplianceReviewModal:\n4 Niveles (Chips clickeables):\nCumplió (100 pts)\nModificación Menor (85 pts)\nIncumplimiento Parcial (25)\nIncumplimiento Total (0)\n→ Razón obligatoria si\n  status != cumplió' }, className: 'node-digital-hybrid' },

    { id: 'pay_reasons', type: 'default', position: { x: 50, y: 2420 }, data: { label: '7 Razones Predefinidas:\n• No funcionaba app\n• No tenía datos/señal\n• Se olvidó marcar\n• No marca lunche\n• No tiene código\n• No marca hora salida\n• Otro (texto libre)\nRazón auto-cleared si\nstatus = cumplió' }, className: 'node-digital-rules' },

    { id: 'pay_na', type: 'default', position: { x: 280, y: 2420 }, data: { label: 'NotApplicableModal:\n4 Motivos (Chips):\n• Vacaciones\n• Baja Médica\n• Permiso\n• Otro (texto libre)\n→ No cuenta en score\n→ Excluido de promedios' }, className: 'node-digital-hybrid' },

    { id: 'pay_write', type: 'default', position: { x: 50, y: 2610 }, data: { label: 'Escritura a DB:\n→ INSERT/UPDATE\n  adoption_compliance_\n  history:\n  employee_id, week_of_year\n  (SEMANA ANTERIOR),\n  compliance_year,\n  compliance_status, reason\n→ UPDATE employees\n  lastReviewedTimestamp\n  = now()' }, className: 'node-digital-rules' },

    { id: 'pay_snapshot', type: 'default', position: { x: 280, y: 2610 }, data: { label: 'Daily Stats Snapshot:\nINSERT daily_stats:\n  date: hoy,\n  pending_hotels: count\n    hoteles sin visitar,\n  pending_payrolls: count\n    empleados sin revisar\n→ Historial diario para\n  trend analysis' }, className: 'node-digital-auto' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 9: SEGUIMIENTO WORKRECORD
    // AdoptionTrackerPage, useAdoptionStats, 7 smart insights
    // ═══════════════════════════════════════════════════════
    { id: 'section_workrecord', type: 'default', position: { x: 500, y: 1300 }, data: { label: 'SEGUIMIENTO\nWORKRECORD' }, className: 'node-digital-section' },

    { id: 'wr_heatmap', type: 'default', position: { x: 500, y: 1480 }, data: { label: 'Heatmap 7 Semanas:\nFilas = empleados\nColumnas = semanas\nCeldas = iconos color:\n  Cumplió / Mod.Menor /\n  Incump.Parcial / Total /\n  No Aplica / Sin datos\n+ Sparkline trend por\n  empleado (7 puntos)\n+ Click → Modal detalle' }, className: 'node-digital-auto' },

    { id: 'wr_scores', type: 'default', position: { x: 720, y: 1480 }, data: { label: 'Compliance Scores:\ncumplió = 100 pts\nmodificacion_menor = 85\nincumplimiento_parcial = 25\nincumplimiento_total = 0\nno_aplica → excluido\nno_data → excluido\n─────────────────\nPromedio por empleado:\nsum(scores) / semanas\ncon datos válidos' }, className: 'node-digital-rules' },

    { id: 'wr_insights', type: 'default', position: { x: 500, y: 1700 }, data: { label: '7 Smart Insights:\n1) Trend global ±2%\n   vs semana anterior\n2) Anomalía hotel >15%\n   caída semanal\n3) Role bottleneck\n   (peor rol, min 3 emps)\n4) Chronic offenders\n   (3+ semanas consecutivas)\n5) Alta tasa no_aplica >15%\n6) Root cause mining\n   (firma/horario/uniforme/\n    retraso/asistencia/doc)\n7) Top performer fallback\n   (hotel >90% si <2 alertas)' }, className: 'node-digital-rules' },

    { id: 'wr_rankings', type: 'default', position: { x: 720, y: 1700 }, data: { label: 'Rankings Automáticos:\n• Top 4 hoteles peor\n  compliance (click→filtrar)\n• Top 4 hoteles promedio\n  con trend arrows\n• Top 5 empleados peor\n  score (scroll-to-row)\n• PieChart distribución\n  global por status\n• Stacked BarChart\n  evolución semanal' }, className: 'node-digital-auto' },

    { id: 'wr_streak', type: 'default', position: { x: 500, y: 1940 }, data: { label: 'Detección de Rachas:\ncheckForNegativeStreak():\nSi 2+ semanas consecutivas\ncon incumplimiento_parcial\nO incumplimiento_total\n→ WarningIcon rojo\n  junto al nombre\n→ Tooltip "Racha de\n  Incumplimiento"' }, className: 'node-digital-rules' },

    { id: 'wr_export', type: 'default', position: { x: 720, y: 1940 }, data: { label: 'Export Excel Workrecord:\nColumnas:\n  Empleado, Hotel,\n  Cumplimiento (%),\n  Sem 1, Sem 2, ..., Sem 7\n→ seguimiento_workrecord\n  .xlsx\n+ Filtros: nombre, hotel,\n  status última semana' }, className: 'node-digital-auto' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 10: INFORMES POR PERÍODO
    // InformesPage, useReportData, 20+ métricas, treemap
    // ═══════════════════════════════════════════════════════
    { id: 'section_informes', type: 'default', position: { x: 500, y: 2150 }, data: { label: 'INFORMES POR\nPERÍODO' }, className: 'node-digital-section' },

    { id: 'inf_activity', type: 'default', position: { x: 500, y: 2330 }, data: { label: 'Actividad General:\n• Visitas registradas\n• Nuevas aplicaciones\n+ Movimiento Empleados:\n  Nuevos permanentes/temp,\n  Inactivos perm/temp,\n  Blacklisted\nCada stat: current vs\nprevious period con arrows' }, className: 'node-digital-auto' },

    { id: 'inf_payroll', type: 'default', position: { x: 720, y: 2330 }, data: { label: 'Revisión Nómina:\n• Nóminas revisadas\n• Total horas overtime\n  (click → detalle tabla)\n• Nóminas por revisar\n+ Solicitudes:\n  Nuevas, temp/perm,\n  fulfillment rate\n  (total + parcial)' }, className: 'node-digital-auto' },

    { id: 'inf_requests', type: 'default', position: { x: 500, y: 2540 }, data: { label: 'Métricas Solicitudes:\n• Avg time-to-fill (días)\n• Tasa no presentación\n• Tasa solicitudes vencidas\n• Tasa canceladas por hotel\n• Tasa en proceso\n→ Tabla detalle: hotel,\n  cargo, fecha solicitud,\n  fecha cobertura, días,\n  estado (sortable)' }, className: 'node-digital-auto' },

    { id: 'inf_treemap', type: 'default', position: { x: 720, y: 2540 }, data: { label: 'Turnover Treemap:\nTamaño = avgEmployees\nColor por tasa rotación:\n  >50% rojo\n  >30% naranja\n  >15% amarillo\n  ≤15% verde\n+ Tooltip: hotel, tasa,\n  separaciones, avg emps\n→ Recharts Treemap' }, className: 'node-digital-auto' },

    { id: 'inf_tables', type: 'default', position: { x: 610, y: 2720 }, data: { label: 'Tablas Ordenables:\n• Personal activo por cargo\n• Visitas por ciudad\n  (current vs previous)\n• Empleados por hotel\n• Nuevos empleados (lista)\n• Blacklisted (lista)\n• Rotación por hotel\n→ Cada stat clickeable\n  → Modal con drill-down' }, className: 'node-digital-hybrid' },

    { id: 'inf_export', type: 'default', position: { x: 830, y: 2720 }, data: { label: 'Export Excel Informe:\n6 secciones:\nResumen (12 métricas),\nPersonal por Cargo,\nVisitas por Ciudad,\nEmpleados por Hotel,\nNuevos Empleados,\nEmpleados Lista Negra\n→ exportToExcel()' }, className: 'node-digital-auto' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 11: INTELIGENCIA CORPORATIVA
    // useCorporateIntelligence, 5 pilares, semáforo hotel
    // ═══════════════════════════════════════════════════════
    { id: 'section_corporate', type: 'default', position: { x: 1150, y: 920 }, data: { label: 'INTELIGENCIA\nCORPORATIVA' }, className: 'node-digital-section' },

    { id: 'corp_pillars', type: 'default', position: { x: 1150, y: 1110 }, data: { label: '5 Pilares × 25 pts:\n─────────────────\n1. Talento y Estabilidad:\n   ratio temp ≤30% = 25 pts\n   >30% → penaliza lineal\n2. Demanda y Fricción:\n   tasa resolución 30 días\n3. Oferta/Ingresos:\n   velocidad pipeline apps\n4. Supervisión/Visitas:\n   % hoteles activos\n   visitados en 30 días\n5. Disciplina Workrecord:\n   avg compliance score\n   de todos los empleados' }, className: 'node-digital-rules' },

    { id: 'corp_score', type: 'default', position: { x: 1400, y: 1110 }, data: { label: 'Score Global 0-100:\nSuma de 5 pilares\n─────────────────\nColor/Status:\n  < 60 → CRÍTICO (rojo)\n  60-79 → EN RIESGO (naranja)\n  ≥ 80 → SALUDABLE (verde)\n─────────────────\nDisplay: Typography H1\n"PUNTOS DE SALUD"\n+ Mensaje explicativo' }, className: 'node-digital-auto' },

    { id: 'corp_override', type: 'default', position: { x: 1150, y: 1350 }, data: { label: 'Override Rule:\nSI cualquier hotel tiene\nstatus = "critical"\nY score global ≥ 80\n→ Score se CAPEA a 79\n→ Status forzado "risk"\n─────────────────\nEvita falso positivo:\nno puede ser "saludable"\nsi hay hotel en crisis' }, className: 'node-digital-rules' },

    { id: 'corp_insights', type: 'default', position: { x: 1400, y: 1350 }, data: { label: 'Análisis Estratégico:\nPor cada pilar genera:\n• Insights positivos\n• Alertas negativas\n  (fondo rojo tenue)\n• Warnings operativos\n  (fondo naranja tenue)\n• Info neutral\nAuto-generados por reglas\nen useCorporateIntelligence' }, className: 'node-digital-auto' },

    { id: 'corp_health', type: 'default', position: { x: 1150, y: 1570 }, data: { label: 'Semáforo Hotel:\nScoring (mayor = peor):\n+3 solicitud crítica (>24h)\n+1 solicitud abierta\n+2 sin visita 30 días\n+3 compliance <60%\n─────────────────\nUmbrales:\n  ≥5 → CRÍTICO\n  ≥2 → RIESGO\n  <2 → SALUDABLE\n→ Solo hoteles activos\n  (≥1 empleado)' }, className: 'node-digital-rules' },

    { id: 'corp_hotel_list', type: 'default', position: { x: 1400, y: 1570 }, data: { label: 'Lista Completa Hoteles:\nOrden: peor → mejor\nPor hotel:\n• Nombre (clickeable)\n• Chip status con color\n• Issues como chips:\n  "Solicitud >24h",\n  "Sin visita 30d", etc.\n• Click → /hotel/{id}\n→ SectionCard por pilar\n  con link a módulo' }, className: 'node-digital-hybrid' },

    { id: 'corp_nav', type: 'default', position: { x: 1275, y: 1770 }, data: { label: 'Navegación por Pilar:\nTalento → /empleados\nDemanda → /solicitudes\nOferta → /aplicaciones\nSupervisión → /reporte-\n  asistencia\nDisciplina → /seguimiento-\n  workrecord\n+ Print / Imprimir' }, className: 'node-digital-hybrid' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 12: ANÁLISIS HISTÓRICO
    // HistoricalReportPage, useHistoricalAnalysis
    // ═══════════════════════════════════════════════════════
    { id: 'section_historical', type: 'default', position: { x: 1550, y: 920 }, data: { label: 'ANÁLISIS\nHISTÓRICO' }, className: 'node-digital-section' },

    { id: 'hist_drawer', type: 'default', position: { x: 1550, y: 1110 }, data: { label: 'HistoricalReportPage:\nDrawer lateral con\n5 pilares navegables:\n• Talento y Estabilidad\n• Demanda y Fricción\n• Oferta (Ingresos)\n• Supervisión (Visitas)\n• Disciplina Workrecord\nRango fechas desde\nrouter state' }, className: 'node-digital-hybrid' },

    { id: 'hist_talent', type: 'default', position: { x: 1750, y: 1110 }, data: { label: 'Pilar Talento (histórico):\n• Monthly permanent hires\n• Monthly temporal hires\n• Monthly attrition\n• Churn rate mensual\n→ hire dates derivados de\n  employee.id timestamps\n→ deactivation dates de\n  employee_status_history\n→ LineChart area fill' }, className: 'node-digital-auto' },

    { id: 'hist_demand', type: 'default', position: { x: 1550, y: 1330 }, data: { label: 'Pilar Demanda (histórico):\n• Monthly requests created\n• Monthly resolved\n• Fulfillment trend\n• Time-to-fill evolution\n→ StatCards + LineChart\n+ Insights (colored boxes)' }, className: 'node-digital-auto' },

    { id: 'hist_other', type: 'default', position: { x: 1750, y: 1330 }, data: { label: 'Oferta/Supervisión/\nDisciplina (históricos):\n• Monthly applications\n• Monthly visits by hotel\n• Monthly compliance avg\n→ Cada pilar:\n  metrics[], insights[],\n  charts[] (LineChart)\n→ Render dinámico con\n  PillarContent component' }, className: 'node-digital-auto' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 13: NOTIFICACIONES Y ALERTAS
    // MainLayout badge, popover, urgencia
    // ═══════════════════════════════════════════════════════
    { id: 'section_notifs', type: 'default', position: { x: 1950, y: 920 }, data: { label: 'NOTIFICACIONES\nY ALERTAS' }, className: 'node-digital-section' },

    { id: 'notif_badge', type: 'default', position: { x: 1950, y: 1110 }, data: { label: 'Badge Notificaciones:\nAppBar → IconButton bell\nBadge color="error"\nbadgeContent =\n  unfulfilledRequestsCount\n(solicitudes sin resolver)' }, className: 'node-digital-notification' },

    { id: 'notif_popover', type: 'default', position: { x: 2150, y: 1110 }, data: { label: 'Popover Solicitudes:\nLista ordenada por\nstart_date (ASC)\nPor cada solicitud:\n• Hotel: {name} - {role}\n• Inicio: {fecha}\n• Chip urgencia (color)' }, className: 'node-digital-notification' },

    { id: 'notif_urgency', type: 'default', position: { x: 1950, y: 1310 }, data: { label: 'Clasificación Urgencia:\nisPast(date) && !isToday\n  → "Vencida" (error/rojo)\nisToday || isTomorrow\n  → "Vence pronto"\n    (warning/naranja)\nOtro → sin chip\n─────────────────\nClick → navigate to\n/solicitudes?requestId={id}' }, className: 'node-digital-rules' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 14: DASHBOARD PRINCIPAL
    // DashboardPage, useDashboardStats, charts
    // ═══════════════════════════════════════════════════════
    { id: 'section_dashboard', type: 'default', position: { x: 2300, y: 150 }, data: { label: 'DASHBOARD\nPRINCIPAL' }, className: 'node-digital-section' },

    { id: 'dash_stats', type: 'default', position: { x: 2300, y: 340 }, data: { label: 'StatCards (6 KPIs):\n• Total Hoteles\n• Empleados Activos\n• Visitas (30 días)\n• Solicitudes Activas\n  (desde Context)\n• Aplicaciones Pendientes\n• Nóminas por Revisar\nCada card: icon, valor,\ntrend sparkline opcional' }, className: 'node-digital-auto' },

    { id: 'dash_charts', type: 'default', position: { x: 2500, y: 340 }, data: { label: 'Charts Dashboard:\n• AreaChart: crecimiento\n  6 meses (4 series)\n• PieChart: empleados\n  por cargo (donut hover)\n• PieChart: hoteles\n  por ciudad\n• LineChart: visitas\n  últimos 30 días\n• BarChart: visitas\n  por ciudad (horizontal)' }, className: 'node-digital-auto' },

    { id: 'dash_ranking', type: 'default', position: { x: 2300, y: 560 }, data: { label: 'HotelRankingTable:\nTop 10 hoteles por\nvisitas (últimos 30 días)\nTabla sticky header\nScroll 400px max\nColumnas: Hotel, Visitas' }, className: 'node-digital-auto' },

    { id: 'dash_actions', type: 'default', position: { x: 2500, y: 560 }, data: { label: 'Acciones Dashboard:\n1. FAB GPS check-in\n   → Registrar visita\n2. Generar Informe:\n   Date picker → navigate\n   /informes (con state)\n3. Informe Corporativo\n   → /corporativo\n4. Análisis Histórico\n   → /historico (con state)' }, className: 'node-digital-hybrid' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 15: REPORTES Y EXPORTACIÓN
    // exportToExcel, exportUtils, calendar, print
    // ═══════════════════════════════════════════════════════
    { id: 'section_exports', type: 'default', position: { x: 2300, y: 750 }, data: { label: 'REPORTES Y\nEXPORTACIÓN' }, className: 'node-digital-section' },

    { id: 'exp_excel_generic', type: 'default', position: { x: 2300, y: 930 }, data: { label: 'exportToExcel (genérico):\nRecibe { [key]: any[] }\n→ Una sheet "Reporte"\n→ Título + secciones\n  con 2 filas de separación\n→ Nombre archivo:\n  {title}_{YYYY-MM-DD}.xlsx\nUsado por InformesPage' }, className: 'node-digital-auto' },

    { id: 'exp_domain', type: 'default', position: { x: 2500, y: 930 }, data: { label: 'Exports de Dominio:\n• exportEmployeesToExcel:\n  8 columnas, lookup hotel\n  → reporte_empleados.xlsx\n• exportHotelsToExcel:\n  3 columnas (name, city,\n  address)\n  → reporte_hoteles.xlsx\n• Workrecord: XLSX directo\n  → seguimiento_workrecord\n    .xlsx' }, className: 'node-digital-auto' },

    { id: 'exp_print', type: 'default', position: { x: 2400, y: 1100 }, data: { label: 'Print / Imprimir:\nCorporateReportPage:\nwindow.print()\n→ CSS @media print\n  oculta botones/nav\n  muestra solo contenido' }, className: 'node-digital-hybrid' },

    // ── FIN ──
    { id: 'end', type: 'output', position: { x: 1400, y: 2900 }, data: { label: 'Inspector Digital\nCompleto\n15 Secciones\n11 Tablas DB\n5 Pilares CEO\n100% Cobertura' }, className: 'node-digital-section' },
  ],

  edges: [
    // ══════════════════════════════════════════════
    // Inicio → Secciones principales (6 ramas)
    // ══════════════════════════════════════════════
    { id: 'e_s_auth', source: 'start', target: 'section_auth' },
    { id: 'e_s_db', source: 'start', target: 'section_db' },
    { id: 'e_s_checkin', source: 'start', target: 'section_checkin' },
    { id: 'e_s_kanban', source: 'start', target: 'section_kanban' },
    { id: 'e_s_pipeline', source: 'start', target: 'section_pipeline' },
    { id: 'e_s_dashboard', source: 'start', target: 'section_dashboard' },

    // ══════════════════════════════════════════════
    // 1. AUTH Y NAVEGACIÓN
    // ══════════════════════════════════════════════
    { id: 'e_a1', source: 'section_auth', target: 'auth_login' },
    { id: 'e_a2', source: 'section_auth', target: 'auth_session' },
    { id: 'e_a3', source: 'auth_login', target: 'auth_layout' },
    { id: 'e_a4', source: 'auth_session', target: 'auth_home' },
    { id: 'e_a5', source: 'auth_layout', target: 'section_hotels', style: { strokeDasharray: '5,5' } },
    { id: 'e_a6', source: 'auth_layout', target: 'section_employees', style: { strokeDasharray: '5,5' } },

    // ══════════════════════════════════════════════
    // 2. BASE DE DATOS — Relaciones FK
    // ══════════════════════════════════════════════
    // FK: employees.hotelId → hotels
    { id: 'e_fk1', source: 'db_hotels', target: 'db_employees', label: 'hotelId', style: { stroke: '#1565c0', strokeWidth: 2 } },
    // FK: attendance → employees + hotels
    { id: 'e_fk2', source: 'db_employees', target: 'db_attendance', label: 'employeeId', style: { stroke: '#1565c0', strokeWidth: 2 } },
    { id: 'e_fk3', source: 'db_hotels', target: 'db_attendance', label: 'hotelId', style: { stroke: '#1565c0', strokeWidth: 2, strokeDasharray: '5,5' } },
    // FK: employee_status_history → employees
    { id: 'e_fk4', source: 'db_employees', target: 'db_emp_history', label: 'employee_id', style: { stroke: '#1565c0', strokeWidth: 2 } },
    // FK: staffing_requests → hotels
    { id: 'e_fk5', source: 'db_hotels', target: 'db_staffing', label: 'hotel_id', style: { stroke: '#1565c0', strokeWidth: 2 } },
    // FK: staffing_request_history → staffing_requests
    { id: 'e_fk6', source: 'db_staffing', target: 'db_staff_history', label: 'request_id', style: { stroke: '#1565c0', strokeWidth: 2 } },
    // FK: request_candidates → staffing_requests
    { id: 'e_fk7', source: 'db_staffing', target: 'db_candidates', label: 'request_id', style: { stroke: '#1565c0', strokeWidth: 2 } },
    // FK: applications → request_candidates
    { id: 'e_fk8', source: 'db_candidates', target: 'db_applications', label: 'request_candidate_id', style: { stroke: '#1565c0', strokeWidth: 2 } },
    // FK: payroll_review_history → employees
    { id: 'e_fk9', source: 'db_employees', target: 'db_payroll', label: 'employee_id', style: { stroke: '#1565c0', strokeWidth: 2 } },
    // FK: adoption_compliance_history → employees
    { id: 'e_fk10', source: 'db_employees', target: 'db_compliance', label: 'employee_id', style: { stroke: '#1565c0', strokeWidth: 2 } },
    // SQL function reads from staffing + hotels + candidates
    { id: 'e_fk11', source: 'db_staffing', target: 'db_sql_fn', style: { strokeDasharray: '5,5', stroke: '#666' } },

    // ══════════════════════════════════════════════
    // 3. GESTIÓN DE HOTELES
    // ══════════════════════════════════════════════
    { id: 'e_h1', source: 'section_hotels', target: 'hot_crud' },
    { id: 'e_h2', source: 'section_hotels', target: 'hot_geo' },
    { id: 'e_h3', source: 'hot_crud', target: 'hot_image' },
    { id: 'e_h4', source: 'hot_geo', target: 'hot_turnover' },
    // Hotels ↔ DB
    { id: 'e_h_db', source: 'hot_crud', target: 'db_hotels', label: 'CRUD', style: { strokeDasharray: '8,4', stroke: '#ff6f00' } },

    // ══════════════════════════════════════════════
    // 4. GESTIÓN DE EMPLEADOS
    // ══════════════════════════════════════════════
    { id: 'e_e1', source: 'section_employees', target: 'emp_crud' },
    { id: 'e_e2', source: 'section_employees', target: 'emp_filters' },
    { id: 'e_e3', source: 'emp_crud', target: 'emp_blacklist' },
    { id: 'e_e4', source: 'emp_crud', target: 'emp_status_hist', animated: true },
    { id: 'e_e5', source: 'emp_crud', target: 'emp_csv' },
    { id: 'e_e6', source: 'emp_crud', target: 'emp_export' },
    // Employees ↔ DB
    { id: 'e_e_db1', source: 'emp_crud', target: 'db_employees', label: 'CRUD', style: { strokeDasharray: '8,4', stroke: '#ff6f00' } },
    { id: 'e_e_db2', source: 'emp_status_hist', target: 'db_emp_history', label: 'INSERT', style: { strokeDasharray: '8,4', stroke: '#ff6f00' } },

    // ══════════════════════════════════════════════
    // 5. CHECK-IN GPS
    // ══════════════════════════════════════════════
    { id: 'e_g1', source: 'section_checkin', target: 'gps_trigger' },
    { id: 'e_g2', source: 'section_checkin', target: 'gps_duplicate' },
    { id: 'e_g3', source: 'gps_trigger', target: 'gps_nearest', animated: true },
    { id: 'e_g4', source: 'gps_nearest', target: 'gps_record' },
    { id: 'e_g5', source: 'gps_duplicate', target: 'gps_record', label: 'Si no duplicado', style: { strokeDasharray: '5,5' } },
    { id: 'e_g6', source: 'gps_record', target: 'gps_mileage' },
    { id: 'e_g7', source: 'gps_record', target: 'gps_calendar' },
    // GPS ↔ DB
    { id: 'e_g_db', source: 'gps_record', target: 'db_attendance', label: 'INSERT', style: { strokeDasharray: '8,4', stroke: '#ff6f00' } },

    // ══════════════════════════════════════════════
    // 6. SOLICITUDES KANBAN
    // ══════════════════════════════════════════════
    { id: 'e_k1', source: 'section_kanban', target: 'kan_create' },
    { id: 'e_k2', source: 'section_kanban', target: 'kan_board' },
    { id: 'e_k3', source: 'kan_board', target: 'kan_history', animated: true },
    { id: 'e_k4', source: 'kan_board', target: 'kan_completed' },
    { id: 'e_k5', source: 'kan_create', target: 'kan_archive', style: { strokeDasharray: '5,5' } },
    { id: 'e_k6', source: 'kan_create', target: 'kan_details' },
    // Kanban ↔ DB
    { id: 'e_k_db1', source: 'kan_create', target: 'db_staffing', label: 'INSERT', style: { strokeDasharray: '8,4', stroke: '#ff6f00' } },
    { id: 'e_k_db2', source: 'kan_history', target: 'db_staff_history', label: 'INSERT', style: { strokeDasharray: '8,4', stroke: '#ff6f00' } },

    // ══════════════════════════════════════════════
    // 7. PIPELINE CANDIDATOS → EMPLEADOS
    // ══════════════════════════════════════════════
    { id: 'e_p1', source: 'section_pipeline', target: 'pipe_candidates' },
    { id: 'e_p2', source: 'section_pipeline', target: 'pipe_auto_app' },
    { id: 'e_p3', source: 'pipe_candidates', target: 'pipe_app_states' },
    { id: 'e_p4', source: 'pipe_auto_app', target: 'pipe_create_emp', animated: true },
    { id: 'e_p5', source: 'pipe_app_states', target: 'pipe_create_emp' },
    { id: 'e_p6', source: 'pipe_create_emp', target: 'pipe_metrics' },
    // Pipeline ↔ DB
    { id: 'e_p_db1', source: 'pipe_candidates', target: 'db_candidates', label: 'CRUD', style: { strokeDasharray: '8,4', stroke: '#ff6f00' } },
    { id: 'e_p_db2', source: 'pipe_auto_app', target: 'db_applications', label: 'INSERT', style: { strokeDasharray: '8,4', stroke: '#ff6f00' } },

    // ══════════════════════════════════════════════
    // 8. REVISIÓN DE NÓMINA
    // ══════════════════════════════════════════════
    { id: 'e_pay1', source: 'section_payroll', target: 'pay_filter' },
    { id: 'e_pay2', source: 'section_payroll', target: 'pay_review' },
    { id: 'e_pay3', source: 'pay_review', target: 'pay_reasons' },
    { id: 'e_pay4', source: 'pay_review', target: 'pay_na', style: { strokeDasharray: '5,5' } },
    { id: 'e_pay5', source: 'pay_reasons', target: 'pay_write', animated: true },
    { id: 'e_pay6', source: 'pay_na', target: 'pay_write', animated: true },
    { id: 'e_pay7', source: 'pay_write', target: 'pay_snapshot' },
    // Payroll ↔ DB
    { id: 'e_pay_db1', source: 'pay_write', target: 'db_compliance', label: 'INSERT/UPDATE', style: { strokeDasharray: '8,4', stroke: '#ff6f00' } },
    { id: 'e_pay_db2', source: 'pay_snapshot', target: 'db_daily_stats', label: 'INSERT', style: { strokeDasharray: '8,4', stroke: '#ff6f00' } },

    // ══════════════════════════════════════════════
    // 9. SEGUIMIENTO WORKRECORD
    // ══════════════════════════════════════════════
    { id: 'e_wr1', source: 'section_workrecord', target: 'wr_heatmap' },
    { id: 'e_wr2', source: 'section_workrecord', target: 'wr_scores' },
    { id: 'e_wr3', source: 'wr_heatmap', target: 'wr_insights' },
    { id: 'e_wr4', source: 'wr_scores', target: 'wr_rankings' },
    { id: 'e_wr5', source: 'wr_heatmap', target: 'wr_streak' },
    { id: 'e_wr6', source: 'wr_rankings', target: 'wr_export' },
    // Workrecord ← DB
    { id: 'e_wr_db', source: 'db_compliance', target: 'wr_heatmap', label: 'SELECT', style: { strokeDasharray: '8,4', stroke: '#2e7d32' } },

    // ══════════════════════════════════════════════
    // 10. INFORMES POR PERÍODO
    // ══════════════════════════════════════════════
    { id: 'e_inf1', source: 'section_informes', target: 'inf_activity' },
    { id: 'e_inf2', source: 'section_informes', target: 'inf_payroll' },
    { id: 'e_inf3', source: 'inf_activity', target: 'inf_requests' },
    { id: 'e_inf4', source: 'inf_payroll', target: 'inf_treemap' },
    { id: 'e_inf5', source: 'inf_requests', target: 'inf_tables' },
    { id: 'e_inf6', source: 'inf_treemap', target: 'inf_tables' },
    { id: 'e_inf7', source: 'inf_tables', target: 'inf_export' },

    // ══════════════════════════════════════════════
    // 11. INTELIGENCIA CORPORATIVA
    // ══════════════════════════════════════════════
    { id: 'e_c1', source: 'section_corporate', target: 'corp_pillars' },
    { id: 'e_c2', source: 'section_corporate', target: 'corp_score' },
    { id: 'e_c3', source: 'corp_pillars', target: 'corp_override' },
    { id: 'e_c4', source: 'corp_score', target: 'corp_insights' },
    { id: 'e_c5', source: 'corp_override', target: 'corp_health', animated: true },
    { id: 'e_c6', source: 'corp_insights', target: 'corp_hotel_list' },
    { id: 'e_c7', source: 'corp_health', target: 'corp_hotel_list' },
    { id: 'e_c8', source: 'corp_hotel_list', target: 'corp_nav' },

    // ══════════════════════════════════════════════
    // 12. ANÁLISIS HISTÓRICO
    // ══════════════════════════════════════════════
    { id: 'e_hi1', source: 'section_historical', target: 'hist_drawer' },
    { id: 'e_hi2', source: 'section_historical', target: 'hist_talent' },
    { id: 'e_hi3', source: 'hist_drawer', target: 'hist_demand' },
    { id: 'e_hi4', source: 'hist_drawer', target: 'hist_other' },

    // ══════════════════════════════════════════════
    // 13. NOTIFICACIONES
    // ══════════════════════════════════════════════
    { id: 'e_n1', source: 'section_notifs', target: 'notif_badge' },
    { id: 'e_n2', source: 'section_notifs', target: 'notif_popover' },
    { id: 'e_n3', source: 'notif_badge', target: 'notif_urgency' },
    { id: 'e_n4', source: 'notif_popover', target: 'notif_urgency' },

    // ══════════════════════════════════════════════
    // 14. DASHBOARD PRINCIPAL
    // ══════════════════════════════════════════════
    { id: 'e_d1', source: 'section_dashboard', target: 'dash_stats' },
    { id: 'e_d2', source: 'section_dashboard', target: 'dash_charts' },
    { id: 'e_d3', source: 'dash_stats', target: 'dash_ranking' },
    { id: 'e_d4', source: 'dash_charts', target: 'dash_actions' },

    // ══════════════════════════════════════════════
    // 15. REPORTES Y EXPORTACIÓN
    // ══════════════════════════════════════════════
    { id: 'e_x1', source: 'section_exports', target: 'exp_excel_generic' },
    { id: 'e_x2', source: 'section_exports', target: 'exp_domain' },
    { id: 'e_x3', source: 'exp_excel_generic', target: 'exp_print' },
    { id: 'e_x4', source: 'exp_domain', target: 'exp_print' },

    // ══════════════════════════════════════════════
    // CROSS-SECTION CONNECTIONS (flujos entre módulos)
    // ══════════════════════════════════════════════

    // Kanban → Pipeline (candidato llega → auto-create aplicación)
    { id: 'e_cross_kan_pipe', source: 'kan_board', target: 'section_pipeline', label: 'Candidato "Llegó"', style: { strokeDasharray: '5,5', stroke: '#ff6f00', strokeWidth: 2 } },

    // Pipeline create emp → DB employees
    { id: 'e_cross_pipe_db', source: 'pipe_create_emp', target: 'db_employees', label: 'INSERT empleado', style: { strokeDasharray: '8,4', stroke: '#ff6f00' } },

    // Payroll → Workrecord (trigger semanal)
    { id: 'e_cross_pay_wr', source: 'pay_write', target: 'section_workrecord', label: 'Alimenta compliance', animated: true, style: { stroke: '#ff6f00', strokeWidth: 2 } },

    // Employees → Corporate (Pilar 1: Talento)
    { id: 'e_cross_emp_corp', source: 'emp_crud', target: 'corp_pillars', label: 'Pilar Talento', style: { strokeDasharray: '8,4', stroke: '#1565c0' } },

    // Kanban → Corporate (Pilar 2: Demanda)
    { id: 'e_cross_kan_corp', source: 'kan_board', target: 'corp_pillars', label: 'Pilar Demanda', style: { strokeDasharray: '8,4', stroke: '#1565c0' } },

    // Pipeline → Corporate (Pilar 3: Oferta)
    { id: 'e_cross_pipe_corp', source: 'pipe_metrics', target: 'corp_pillars', label: 'Pilar Oferta', style: { strokeDasharray: '8,4', stroke: '#1565c0' } },

    // Check-in → Corporate (Pilar 4: Supervisión)
    { id: 'e_cross_gps_corp', source: 'gps_record', target: 'corp_pillars', label: 'Pilar Supervisión', style: { strokeDasharray: '8,4', stroke: '#1565c0' } },

    // Workrecord → Corporate (Pilar 5: Disciplina)
    { id: 'e_cross_wr_corp', source: 'wr_scores', target: 'corp_pillars', label: 'Pilar Disciplina', style: { strokeDasharray: '8,4', stroke: '#1565c0' } },

    // Hotel health → Dashboard (priorizción)
    { id: 'e_cross_health_dash', source: 'corp_health', target: 'dash_actions', label: 'Prioriza críticos', style: { strokeDasharray: '5,5', stroke: '#ff6f00' } },

    // Dashboard → Informes (generar informe)
    { id: 'e_cross_dash_inf', source: 'dash_actions', target: 'section_informes', label: 'Generar informe', style: { strokeDasharray: '5,5', stroke: '#666' } },

    // Dashboard → Corporate (informe corporativo)
    { id: 'e_cross_dash_corp', source: 'dash_actions', target: 'section_corporate', label: 'Informe corporativo', style: { strokeDasharray: '5,5', stroke: '#666' } },

    // Dashboard → Historical (análisis histórico)
    { id: 'e_cross_dash_hist', source: 'dash_actions', target: 'section_historical', label: 'Análisis histórico', style: { strokeDasharray: '5,5', stroke: '#666' } },

    // Notifs → Kanban (deep link solicitudes)
    { id: 'e_cross_notif_kan', source: 'notif_urgency', target: 'kan_board', label: 'Deep link', style: { strokeDasharray: '5,5', stroke: '#ff6f00' } },

    // Auth layout → Dashboard (ruta principal)
    { id: 'e_cross_auth_dash', source: 'auth_layout', target: 'section_dashboard', style: { strokeDasharray: '5,5', stroke: '#666' } },

    // Auth layout → Notificaciones (badge en AppBar)
    { id: 'e_cross_auth_notif', source: 'auth_layout', target: 'section_notifs', style: { strokeDasharray: '5,5', stroke: '#666' } },

    // Hotels ↔ Turnover (consulta directa DB)
    { id: 'e_cross_turn_db', source: 'hot_turnover', target: 'db_emp_history', label: 'SELECT separaciones', style: { strokeDasharray: '8,4', stroke: '#2e7d32' } },

    // Informes ← múltiples fuentes DB
    { id: 'e_cross_inf_db', source: 'db_attendance', target: 'section_informes', label: 'Visitas', style: { strokeDasharray: '8,4', stroke: '#2e7d32' } },

    // Payroll → Employees (update lastReviewedTimestamp)
    { id: 'e_cross_pay_emp', source: 'pay_write', target: 'db_employees', label: 'UPDATE lastReviewed', style: { strokeDasharray: '8,4', stroke: '#ff6f00' } },

    // ══════════════════════════════════════════════
    // CONVERGENCIA → FIN
    // ══════════════════════════════════════════════
    { id: 'e_end1', source: 'corp_nav', target: 'end' },
    { id: 'e_end2', source: 'inf_export', target: 'end' },
    { id: 'e_end3', source: 'wr_export', target: 'end', style: { strokeDasharray: '5,5' } },
    { id: 'e_end4', source: 'pipe_metrics', target: 'end', style: { strokeDasharray: '5,5' } },
    { id: 'e_end5', source: 'hist_other', target: 'end' },
    { id: 'e_end6', source: 'exp_print', target: 'end' },
    { id: 'e_end7', source: 'emp_export', target: 'end', style: { strokeDasharray: '5,5' } },
    { id: 'e_end8', source: 'notif_urgency', target: 'end', style: { strokeDasharray: '5,5' } },
  ]
}

export default inspectorDigitalFlow
