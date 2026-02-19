// ═══════════════════════════════════════════════════════════════════════
// FLUJO UNIFICADO: SISTEMA COMPLETO ORANGE STAFFING
// Todos los roles clasificados por colores y conexiones inter-rol
// ═══════════════════════════════════════════════════════════════════════
//
// COLORES POR ROL:
//   🏆 Inspector de Calidad  → Amarillo/Dorado  (node-role-inspector)
//   💰 Contabilidad (Mónica) → Rosa/Magenta     (node-role-contabilidad)
//   👥 Reclutadora           → Púrpura          (node-role-requisicion)
//   🏨 Admin Hotel (Manager) → Naranja          (node-role-hotel)
//   👔 Admin Orange (Silvia) → Rojo Oscuro      (node-role-admin)
//   👷 Colaborador           → Verde            (node-role-colaborador)
//
// ═══════════════════════════════════════════════════════════════════════

const sistemaCompletoFlow = {
  nodes: [
    // ═══════════════════════════════════════════════════════
    // NODO CENTRAL: ORANGE STAFFING SYSTEM
    // ═══════════════════════════════════════════════════════
    { id: 'orange_center', type: 'input', position: { x: 1200, y: 0 }, data: { label: '🍊 ORANGE STAFFING\nSistema Completo\n6 Roles Integrados' }, className: 'node-role-center' },

    // ═══════════════════════════════════════════════════════
    // HEADERS DE CADA ROL (Nodos grandes de título)
    // ═══════════════════════════════════════════════════════
    { id: 'header_admin', type: 'default', position: { x: 1200, y: 160 }, data: { label: '👔 SILVIA / DIRECCIÓN\nAdmin Orange Staffing\n[Aprueba todo]' }, className: 'node-role-admin' },
    { id: 'header_hotel', type: 'default', position: { x: 2200, y: 160 }, data: { label: '🏨 MANAGER HOTEL\nCliente del Servicio\n[Solicita y reporta]' }, className: 'node-role-hotel' },
    { id: 'header_inspector', type: 'default', position: { x: 0, y: 160 }, data: { label: '🏆 INSPECTOR DE CALIDAD\nSupervisión en Campo\n[Opera y reporta]' }, className: 'node-role-inspector' },
    { id: 'header_contabilidad', type: 'default', position: { x: 600, y: 160 }, data: { label: '💰 CONTABILIDAD (MÓNICA)\nGestión Financiera\n[Procesa y valida]' }, className: 'node-role-contabilidad' },
    { id: 'header_requisicion', type: 'default', position: { x: 1800, y: 160 }, data: { label: '👥 RECLUTADORA\nRequisiciones y Pool\n[Busca y asigna]' }, className: 'node-role-requisicion' },
    { id: 'header_colaborador', type: 'default', position: { x: 1200, y: 1850 }, data: { label: '👷 COLABORADOR\nTrabajador Orange\n[Ejecuta y reporta]' }, className: 'node-role-colaborador' },

    // ═══════════════════════════════════════════════════════
    // ROL: ADMIN ORANGE (SILVIA) - Rojo Oscuro
    // ═══════════════════════════════════════════════════════
    { id: 'admin_biz_dev', type: 'default', position: { x: 1050, y: 340 }, data: { label: '🏢 Business\nDevelopment' }, className: 'node-role-admin' },
    { id: 'admin_negociacion', type: 'default', position: { x: 1050, y: 460 }, data: { label: '🤝 Negociación\nContrato + Rates' }, className: 'node-role-admin' },
    { id: 'admin_firma_contrato', type: 'default', position: { x: 1050, y: 580 }, data: { label: '📄 Firma Service\nContract' }, className: 'node-role-admin' },
    { id: 'admin_gestion_personal', type: 'default', position: { x: 1200, y: 340 }, data: { label: '👥 Gestión\nde Personal' }, className: 'node-role-admin' },
    { id: 'admin_semaforo', type: 'default', position: { x: 1200, y: 460 }, data: { label: '🚦 Semáforo Empleados\n🟢≥60% 🟡40-60% 🔴<40%' }, className: 'node-role-admin' },
    { id: 'admin_aprobar_nomina', type: 'default', position: { x: 1350, y: 340 }, data: { label: '💰 Aprobación\nNómina Final' }, className: 'node-role-admin' },
    { id: 'admin_revision_jue', type: 'default', position: { x: 1350, y: 460 }, data: { label: '⏰ JUEVES 2PM\nRevisión Final' }, className: 'node-role-admin' },
    { id: 'admin_pago_vie', type: 'default', position: { x: 1350, y: 580 }, data: { label: '💰 Pago Vie 5AM\nDinero Disponible' }, className: 'node-role-admin' },
    { id: 'admin_dashboard', type: 'default', position: { x: 1200, y: 580 }, data: { label: '📊 Dashboard\nKPIs + Rentabilidad' }, className: 'node-role-admin' },
    { id: 'admin_blacklist', type: 'default', position: { x: 1200, y: 700 }, data: { label: '🚫 Aprobar/Rechazar\nBlack List' }, className: 'node-blacklist' },
    { id: 'admin_security', type: 'default', position: { x: 1350, y: 700 }, data: { label: '🔐 ÚNICA aprueba\nnómina + datos banco' }, className: 'node-role-admin' },

    // ═══════════════════════════════════════════════════════
    // ROL: CONTABILIDAD (MÓNICA) - Rosa/Magenta
    // ═══════════════════════════════════════════════════════
    { id: 'cont_rol_semanal', type: 'default', position: { x: 500, y: 340 }, data: { label: '📅 Rol Semanal\nLun-Vie Calendario' }, className: 'node-role-contabilidad' },
    { id: 'cont_sabado', type: 'default', position: { x: 350, y: 460 }, data: { label: '📧 Sáb: Correo\nmasivo pidiendo TS' }, className: 'node-role-contabilidad' },
    { id: 'cont_lun_mar', type: 'default', position: { x: 500, y: 460 }, data: { label: '📥 Lun-Mar:\nDescargar TS\nCaptura Invoice' }, className: 'node-role-contabilidad' },
    { id: 'cont_miercoles', type: 'default', position: { x: 650, y: 460 }, data: { label: '🔴 Miércoles\nCIERRE NÓMINA' }, className: 'node-role-contabilidad' },
    { id: 'cont_captura', type: 'default', position: { x: 500, y: 580 }, data: { label: '📊 3 Archivos:\nPre-Pay, Factors,\nInvoice' }, className: 'node-role-contabilidad' },
    { id: 'cont_envio_nomina', type: 'default', position: { x: 650, y: 580 }, data: { label: '📤 Enviar a Sandra\n(Paychex) 4 archivos' }, className: 'node-role-contabilidad' },
    { id: 'cont_journal', type: 'default', position: { x: 650, y: 700 }, data: { label: '📋 Revisar Journal\nvs Pre-Payroll' }, className: 'node-role-contabilidad' },
    { id: 'cont_invoices', type: 'default', position: { x: 500, y: 700 }, data: { label: '🧾 Envío Invoices\na Hoteles (Jueves)' }, className: 'node-role-contabilidad' },
    { id: 'cont_monday', type: 'default', position: { x: 350, y: 580 }, data: { label: '📱 Monday:\nRH + Supervisión\n+ Accounting' }, className: 'node-role-contabilidad' },
    { id: 'cont_paychex', type: 'default', position: { x: 350, y: 700 }, data: { label: '🏦 Paychex:\nCrear/Desactivar ID\nW2 o 1099' }, className: 'node-role-contabilidad' },
    { id: 'cont_vacaciones', type: 'default', position: { x: 500, y: 820 }, data: { label: '🌴 Vacaciones:\n52 sem, >32h prom\nAprobación Irene' }, className: 'node-role-contabilidad' },
    { id: 'cont_cheques', type: 'default', position: { x: 650, y: 820 }, data: { label: '📑 Cheques:\nCancel, Reissue,\nExtemporáneos' }, className: 'node-role-contabilidad' },
    { id: 'cont_discrepancias', type: 'default', position: { x: 350, y: 820 }, data: { label: '💸 Discrepancias\nde Pago' }, className: 'node-role-contabilidad' },

    // ═══════════════════════════════════════════════════════
    // ROL: INSPECTOR DE CALIDAD - Amarillo/Dorado
    // ═══════════════════════════════════════════════════════
    { id: 'insp_onboarding', type: 'default', position: { x: -100, y: 340 }, data: { label: '📋 Onboarding\nEmpleados Nuevos' }, className: 'node-role-inspector' },
    { id: 'insp_dia1', type: 'default', position: { x: -100, y: 460 }, data: { label: '📅 Día 1 - 8AM\nIntroducción\nFormato Ingreso' }, className: 'node-role-inspector' },
    { id: 'insp_app_60', type: 'default', position: { x: -100, y: 580 }, data: { label: '📱 Ayudar App 60%\nMeta 72h\n❌ STRIKE si falla' }, className: 'node-role-inspector' },
    { id: 'insp_evaluaciones', type: 'default', position: { x: -100, y: 700 }, data: { label: '📊 Evaluaciones\nDía 5 + Día 10\n+ Espontáneas' }, className: 'node-role-inspector' },
    { id: 'insp_uniformes', type: 'default', position: { x: 50, y: 340 }, data: { label: '👕 Entrega\nUniformes\nDía 3/5' }, className: 'node-role-inspector' },
    { id: 'insp_cobro_uniforme', type: 'default', position: { x: 50, y: 460 }, data: { label: '💵 Cobro $30\nFirma Digital\nFoto Evidencia' }, className: 'node-role-inspector' },
    { id: 'insp_supervision', type: 'default', position: { x: 200, y: 340 }, data: { label: '🔍 Supervisión\ny Calidad' }, className: 'node-role-inspector' },
    { id: 'insp_rutas', type: 'default', position: { x: 200, y: 460 }, data: { label: '📍 Prioridad Ruta:\n1) Ingresos\n2) Onboard 5d\n3) Calidad c/3ra' }, className: 'node-role-inspector' },
    { id: 'insp_visitar', type: 'default', position: { x: 200, y: 580 }, data: { label: '🏨 Visitar Hotel\nVerificar Uniformes\ny Estándares' }, className: 'node-role-inspector' },
    { id: 'insp_problemas', type: 'default', position: { x: 200, y: 700 }, data: { label: '⚠️ Problemas →\nReporte en App\n→ Escalar' }, className: 'node-role-inspector' },
    { id: 'insp_satisfaccion', type: 'default', position: { x: 50, y: 580 }, data: { label: '⭐ Encuesta Auto\nal Gerente post-visita' }, className: 'node-role-inspector' },
    { id: 'insp_timesheet', type: 'default', position: { x: 50, y: 700 }, data: { label: '📊 Recordar TS\nLun-Mar a Managers\nCierre Miércoles' }, className: 'node-role-inspector' },
    { id: 'insp_solicitudes_mgr', type: 'default', position: { x: -100, y: 820 }, data: { label: '🏨 Solicitudes Mgr:\nContrato, Rate,\nCambio Personal' }, className: 'node-role-inspector' },
    { id: 'insp_incidentes', type: 'default', position: { x: 50, y: 820 }, data: { label: '⚠️ Incidentes\nInjury Report\nBlack List' }, className: 'node-role-inspector' },
    { id: 'insp_prospectos', type: 'default', position: { x: 200, y: 820 }, data: { label: '📞 Recibir Prospectos\n→ Referir Reclutadora' }, className: 'node-role-inspector' },

    // ═══════════════════════════════════════════════════════
    // ROL: RECLUTADORA - Púrpura
    // ═══════════════════════════════════════════════════════
    { id: 'req_recepcion', type: 'default', position: { x: 1700, y: 340 }, data: { label: '📋 Recepción\nRequisición' }, className: 'node-role-requisicion' },
    { id: 'req_prioridad', type: 'default', position: { x: 1700, y: 460 }, data: { label: '🚦 Prioridad:\n🟢>120h 🟡72-120h\n🔴<72h' }, className: 'node-role-requisicion' },
    { id: 'req_serial', type: 'default', position: { x: 1700, y: 580 }, data: { label: '# Generar Serial\n+ Costos Proyectados' }, className: 'node-role-requisicion' },
    { id: 'req_costos', type: 'default', position: { x: 1850, y: 340 }, data: { label: '💰 Costos y Contratos\nBill Rate ~$19.58\nPay Rate ~$15' }, className: 'node-role-requisicion' },
    { id: 'req_margen', type: 'default', position: { x: 1850, y: 460 }, data: { label: '📊 Validar Margen\n30-35%' }, className: 'node-role-requisicion' },
    { id: 'req_busqueda', type: 'default', position: { x: 2000, y: 340 }, data: { label: '🔍 Búsqueda\nen Pools' }, className: 'node-role-requisicion' },
    { id: 'req_filtros', type: 'default', position: { x: 2000, y: 460 }, data: { label: '⚙️ Filtros:\nDistancia ≤30min\nDisponibilidad\nNo Black List' }, className: 'node-role-requisicion' },
    { id: 'req_asignacion', type: 'default', position: { x: 1850, y: 580 }, data: { label: '📌 Asignación\nNotificar Empleado' }, className: 'node-role-requisicion' },
    { id: 'req_decision', type: 'default', position: { x: 2000, y: 580 }, data: { label: '✅ Acepta / ❌ Rechaza\n→ Buscar otro' }, className: 'node-role-requisicion' },
    { id: 'req_tracking', type: 'default', position: { x: 1850, y: 700 }, data: { label: '📍 Tracking\nTiempo Real' }, className: 'node-role-requisicion' },
    { id: 'req_show', type: 'default', position: { x: 1700, y: 700 }, data: { label: '✅ Presentó →\nOnboarding' }, className: 'node-role-requisicion' },
    { id: 'req_noshow', type: 'default', position: { x: 2000, y: 700 }, data: { label: '❌ NO-SHOW\nPenalización' }, className: 'node-role-requisicion' },
    { id: 'req_pool', type: 'default', position: { x: 1850, y: 820 }, data: { label: '📦 Pool Candidatos\nFacebook / Redes\nReferidos' }, className: 'node-role-requisicion' },

    // ═══════════════════════════════════════════════════════
    // ROL: ADMIN HOTEL (MANAGER) - Naranja
    // ═══════════════════════════════════════════════════════
    { id: 'hotel_solicitar', type: 'default', position: { x: 2100, y: 340 }, data: { label: '📋 Solicitar\nPersonal' }, className: 'node-role-hotel' },
    { id: 'hotel_posicion', type: 'default', position: { x: 2100, y: 460 }, data: { label: '👤 Definir Posición\nHorario y Cantidad' }, className: 'node-role-hotel' },
    { id: 'hotel_contrato', type: 'default', position: { x: 2250, y: 340 }, data: { label: '📄 Service Contract\nFirmado' }, className: 'node-role-hotel' },
    { id: 'hotel_bill_rate', type: 'default', position: { x: 2250, y: 460 }, data: { label: '💰 Bill Rate\n~$19.58/hr\n(Hotel paga)' }, className: 'node-role-hotel' },
    { id: 'hotel_recibir_emp', type: 'default', position: { x: 2400, y: 340 }, data: { label: '🤝 Recibir\nEmpleados' }, className: 'node-role-hotel' },
    { id: 'hotel_emp_trabaja', type: 'default', position: { x: 2400, y: 460 }, data: { label: '👔 Empleado\nTrabajando' }, className: 'node-role-hotel' },
    { id: 'hotel_horas', type: 'default', position: { x: 2100, y: 580 }, data: { label: '⏰ Reporte Horas\nDom-Sáb\n🔴 Deadline Mié' }, className: 'node-role-hotel' },
    { id: 'hotel_timesheet', type: 'default', position: { x: 2100, y: 700 }, data: { label: '📊 Subir Time Sheet\nvía App (no fotos)' }, className: 'node-role-hotel' },
    { id: 'hotel_incidentes', type: 'default', position: { x: 2250, y: 580 }, data: { label: '⚠️ Reportar\nIncidentes' }, className: 'node-role-hotel' },
    { id: 'hotel_inc_tipos', type: 'default', position: { x: 2250, y: 700 }, data: { label: '📝 Calidad\n❌ Ausencia\n🔴 Comportamiento' }, className: 'node-role-hotel' },
    { id: 'hotel_facturacion', type: 'default', position: { x: 2400, y: 580 }, data: { label: '🧾 Recibir Invoice\nRevisar vs Horas' }, className: 'node-role-hotel' },
    { id: 'hotel_pago', type: 'default', position: { x: 2400, y: 700 }, data: { label: '💳 Pago Net 15\nConfirmar Servicio' }, className: 'node-role-hotel' },

    // ═══════════════════════════════════════════════════════
    // ROL: COLABORADOR - Verde
    // ═══════════════════════════════════════════════════════
    { id: 'colab_registro', type: 'default', position: { x: 900, y: 2020 }, data: { label: '📋 Reclutamiento\nvía Facebook/Redes' }, className: 'node-role-colaborador' },
    { id: 'colab_app', type: 'default', position: { x: 900, y: 2140 }, data: { label: '📲 Descarga App\nCuenta Pre-creada\nLlena Datos + Fotos' }, className: 'node-role-colaborador' },
    { id: 'colab_blacklist_check', type: 'default', position: { x: 900, y: 2260 }, data: { label: '🔍 Check Black List\n❌ Rechazado si existe' }, className: 'node-role-colaborador' },
    { id: 'colab_pool', type: 'default', position: { x: 900, y: 2380 }, data: { label: '⚪ Pool Recepción\nEsperando Asignación' }, className: 'node-role-colaborador' },
    { id: 'colab_onboard', type: 'default', position: { x: 1100, y: 2020 }, data: { label: '🤝 Día 1 Onboarding\nCon Inspector' }, className: 'node-role-colaborador' },
    { id: 'colab_app60', type: 'default', position: { x: 1100, y: 2140 }, data: { label: '📱 App 60% + Pago\n⏰ 72h Deadline' }, className: 'node-role-colaborador' },
    { id: 'colab_evals', type: 'default', position: { x: 1100, y: 2260 }, data: { label: '📊 Eval Día 5\nEval Día 10' }, className: 'node-role-colaborador' },
    { id: 'colab_pago', type: 'default', position: { x: 1300, y: 2020 }, data: { label: '💳 Método Pago:\nTransferencia/Cheque\n🟢 Status Verde' }, className: 'node-role-colaborador' },
    { id: 'colab_operacion', type: 'default', position: { x: 1300, y: 2140 }, data: { label: '⏰ Ponchado Diario\nHoras Dom-Sáb\n💰 Pago Vie 5AM' }, className: 'node-role-colaborador' },
    { id: 'colab_uniforme', type: 'default', position: { x: 1300, y: 2260 }, data: { label: '👕 Uniforme Día 3/5\n$30 Descuento\nFirma Digital' }, className: 'node-role-colaborador' },
    { id: 'colab_solicitudes', type: 'default', position: { x: 1500, y: 2020 }, data: { label: '📋 Solicitudes:\nAjuste pago, Reubicación\nMás horas, Vacaciones' }, className: 'node-role-colaborador' },
    { id: 'colab_vacaciones', type: 'default', position: { x: 1500, y: 2140 }, data: { label: '🌴 Vacaciones:\n52 sem continuas\nPromedio hrs pagado' }, className: 'node-role-colaborador' },
    { id: 'colab_injury', type: 'default', position: { x: 1500, y: 2260 }, data: { label: '🚑 Injury Report\nDesde App + Firma\nDigital' }, className: 'node-role-colaborador' },
    { id: 'colab_riesgos', type: 'default', position: { x: 1200, y: 2380 }, data: { label: '⚠️ Riesgos:\nEvaluaciones → Calificación\nIncidente → Black List' }, className: 'node-role-colaborador' },

    // ═══════════════════════════════════════════════════════
    // NODOS DE CONEXIÓN INTER-ROL (Zona Central)
    // Procesos compartidos entre roles
    // ═══════════════════════════════════════════════════════
    { id: 'proc_requisicion', type: 'default', position: { x: 1850, y: 1000 }, data: { label: '📋 PROCESO\nREQUISICIÓN\n(Hotel→Reclutadora→\nInspector→Colaborador)' }, className: 'node-role-process' },
    { id: 'proc_nomina', type: 'default', position: { x: 600, y: 1000 }, data: { label: '💵 PROCESO\nNÓMINA SEMANAL\n(Inspector→Contabilidad→\nAdmin→Colaborador)' }, className: 'node-role-process' },
    { id: 'proc_onboarding', type: 'default', position: { x: 200, y: 1000 }, data: { label: '🤝 PROCESO\nONBOARDING\n(Reclutadora→Inspector→\nColaborador→Hotel)' }, className: 'node-role-process' },
    { id: 'proc_calidad', type: 'default', position: { x: 200, y: 1200 }, data: { label: '⭐ PROCESO\nCALIDAD\n(Inspector→Hotel→\nAdmin→Colaborador)' }, className: 'node-role-process' },
    { id: 'proc_incidentes', type: 'default', position: { x: 600, y: 1200 }, data: { label: '⚠️ PROCESO\nINCIDENTES\n(Hotel/Inspector→Admin\n→Black List)' }, className: 'node-role-process' },
    { id: 'proc_facturacion', type: 'default', position: { x: 1850, y: 1200 }, data: { label: '🧾 PROCESO\nFACTURACIÓN\n(Contabilidad→Hotel→\nAdmin)' }, className: 'node-role-process' },
    { id: 'proc_vacaciones', type: 'default', position: { x: 1200, y: 1200 }, data: { label: '🌴 PROCESO\nVACACIONES\n(Colaborador→Inspector→\nContabilidad→Admin)' }, className: 'node-role-process' },
    { id: 'proc_uniformes', type: 'default', position: { x: 1200, y: 1000 }, data: { label: '👕 PROCESO\nUNIFORMES\n(Inspector→Colaborador→\nContabilidad)' }, className: 'node-role-process' },

    // ═══════════════════════════════════════════════════════
    // FLUJO DE CONEXIÓN DETALLADO
    // Cómo interactúa cada proceso entre roles
    // ═══════════════════════════════════════════════════════

    // --- Requisición: flujo inter-rol ---
    { id: 'conn_req_1', type: 'default', position: { x: 1700, y: 1100 }, data: { label: '🏨 Hotel solicita\npersonal' }, className: 'node-role-hotel' },
    { id: 'conn_req_2', type: 'default', position: { x: 1850, y: 1100 }, data: { label: '👥 Reclutadora\nbusca en pools' }, className: 'node-role-requisicion' },
    { id: 'conn_req_3', type: 'default', position: { x: 2000, y: 1100 }, data: { label: '🏆 Inspector hace\nonboarding' }, className: 'node-role-inspector' },

    // --- Nómina: flujo inter-rol ---
    { id: 'conn_nom_1', type: 'default', position: { x: 400, y: 1100 }, data: { label: '🏨 Hotel envía\nTime Sheet' }, className: 'node-role-hotel' },
    { id: 'conn_nom_2', type: 'default', position: { x: 550, y: 1100 }, data: { label: '🏆 Inspector\nrecuerda y valida' }, className: 'node-role-inspector' },
    { id: 'conn_nom_3', type: 'default', position: { x: 700, y: 1100 }, data: { label: '💰 Contabilidad\nprocesa + Sandra' }, className: 'node-role-contabilidad' },
    { id: 'conn_nom_4', type: 'default', position: { x: 850, y: 1100 }, data: { label: '👔 Silvia aprueba\nJueves 2PM' }, className: 'node-role-admin' },

    // --- Calidad: flujo inter-rol ---
    { id: 'conn_cal_1', type: 'default', position: { x: 50, y: 1300 }, data: { label: '🏆 Inspector\nvisita hotel' }, className: 'node-role-inspector' },
    { id: 'conn_cal_2', type: 'default', position: { x: 200, y: 1300 }, data: { label: '🏨 Encuesta\nal Manager' }, className: 'node-role-hotel' },
    { id: 'conn_cal_3', type: 'default', position: { x: 350, y: 1300 }, data: { label: '👔 Reporte\na Dirección' }, className: 'node-role-admin' },

    // --- Incidentes: flujo inter-rol ---
    { id: 'conn_inc_1', type: 'default', position: { x: 450, y: 1300 }, data: { label: '🏨/🏆 Detecta\nincidente' }, className: 'node-role-inspector' },
    { id: 'conn_inc_2', type: 'default', position: { x: 600, y: 1300 }, data: { label: '👔 Dirección\nevalúa gravedad' }, className: 'node-role-admin' },
    { id: 'conn_inc_3', type: 'default', position: { x: 750, y: 1300 }, data: { label: '🚫 Black List\nPermanente' }, className: 'node-blacklist' },

    // --- Facturación: flujo inter-rol ---
    { id: 'conn_fact_1', type: 'default', position: { x: 1700, y: 1300 }, data: { label: '💰 Contabilidad\ngenera Invoice' }, className: 'node-role-contabilidad' },
    { id: 'conn_fact_2', type: 'default', position: { x: 1850, y: 1300 }, data: { label: '🏨 Hotel recibe\ny revisa' }, className: 'node-role-hotel' },
    { id: 'conn_fact_3', type: 'default', position: { x: 2000, y: 1300 }, data: { label: '💳 Pago Net 15\nConfirma servicio' }, className: 'node-role-hotel' },

    // --- Vacaciones: flujo inter-rol ---
    { id: 'conn_vac_1', type: 'default', position: { x: 1050, y: 1300 }, data: { label: '👷 Colaborador\nsolicita' }, className: 'node-role-colaborador' },
    { id: 'conn_vac_2', type: 'default', position: { x: 1200, y: 1300 }, data: { label: '🏆 Inspector\ncanaliza' }, className: 'node-role-inspector' },
    { id: 'conn_vac_3', type: 'default', position: { x: 1350, y: 1300 }, data: { label: '💰 Contabilidad\ncalcula + 👔 Aprueba' }, className: 'node-role-contabilidad' },

    // ═══════════════════════════════════════════════════════
    // LEYENDA DE COLORES
    // ═══════════════════════════════════════════════════════
    { id: 'legend_title', type: 'default', position: { x: -300, y: 1500 }, data: { label: '🎨 LEYENDA DE COLORES\nPOR ROL' }, className: 'node-role-center' },
    { id: 'legend_inspector', type: 'default', position: { x: -400, y: 1640 }, data: { label: '🏆 Inspector\nAmarillo/Dorado' }, className: 'node-role-inspector' },
    { id: 'legend_contabilidad', type: 'default', position: { x: -250, y: 1640 }, data: { label: '💰 Contabilidad\nRosa/Magenta' }, className: 'node-role-contabilidad' },
    { id: 'legend_requisicion', type: 'default', position: { x: -100, y: 1640 }, data: { label: '👥 Reclutadora\nPúrpura' }, className: 'node-role-requisicion' },
    { id: 'legend_hotel', type: 'default', position: { x: -400, y: 1760 }, data: { label: '🏨 Admin Hotel\nNaranja' }, className: 'node-role-hotel' },
    { id: 'legend_admin', type: 'default', position: { x: -250, y: 1760 }, data: { label: '👔 Admin Orange\nRojo Carmesí' }, className: 'node-role-admin' },
    { id: 'legend_colaborador', type: 'default', position: { x: -100, y: 1760 }, data: { label: '👷 Colaborador\nVerde' }, className: 'node-role-colaborador' },
    { id: 'legend_process', type: 'default', position: { x: -400, y: 1880 }, data: { label: '⚙️ Proceso\nCompartido' }, className: 'node-role-process' },
    { id: 'legend_blacklist', type: 'default', position: { x: -250, y: 1880 }, data: { label: '🚫 Black List' }, className: 'node-blacklist' },
  ],

  edges: [
    // ═══════════════════════════════════════════════════════
    // CENTRO → HEADERS DE ROL
    // ═══════════════════════════════════════════════════════
    { id: 'e_c1', source: 'orange_center', target: 'header_admin', style: { stroke: '#b71c1c', strokeWidth: 3 } },
    { id: 'e_c2', source: 'orange_center', target: 'header_hotel', style: { stroke: '#e65100', strokeWidth: 3 } },
    { id: 'e_c3', source: 'orange_center', target: 'header_inspector', style: { stroke: '#f9a825', strokeWidth: 3 } },
    { id: 'e_c4', source: 'orange_center', target: 'header_contabilidad', style: { stroke: '#c2185b', strokeWidth: 3 } },
    { id: 'e_c5', source: 'orange_center', target: 'header_requisicion', style: { stroke: '#7b1fa2', strokeWidth: 3 } },
    { id: 'e_c6', source: 'orange_center', target: 'header_colaborador', style: { stroke: '#2e7d32', strokeWidth: 3 } },

    // ═══════════════════════════════════════════════════════
    // ADMIN ORANGE (flujo interno)
    // ═══════════════════════════════════════════════════════
    { id: 'e_a1', source: 'header_admin', target: 'admin_biz_dev', style: { stroke: '#b71c1c' } },
    { id: 'e_a2', source: 'header_admin', target: 'admin_gestion_personal', style: { stroke: '#b71c1c' } },
    { id: 'e_a3', source: 'header_admin', target: 'admin_aprobar_nomina', style: { stroke: '#b71c1c' } },
    { id: 'e_a4', source: 'admin_biz_dev', target: 'admin_negociacion', style: { stroke: '#b71c1c' } },
    { id: 'e_a5', source: 'admin_negociacion', target: 'admin_firma_contrato', style: { stroke: '#b71c1c' } },
    { id: 'e_a6', source: 'admin_gestion_personal', target: 'admin_semaforo', style: { stroke: '#b71c1c' } },
    { id: 'e_a7', source: 'admin_aprobar_nomina', target: 'admin_revision_jue', style: { stroke: '#b71c1c' } },
    { id: 'e_a8', source: 'admin_revision_jue', target: 'admin_pago_vie', animated: true, style: { stroke: '#b71c1c' } },
    { id: 'e_a9', source: 'admin_semaforo', target: 'admin_dashboard', style: { stroke: '#b71c1c' } },
    { id: 'e_a10', source: 'admin_dashboard', target: 'admin_blacklist', style: { stroke: '#b71c1c' } },
    { id: 'e_a11', source: 'admin_pago_vie', target: 'admin_security', style: { stroke: '#b71c1c', strokeDasharray: '5,5' } },

    // ═══════════════════════════════════════════════════════
    // CONTABILIDAD (flujo interno)
    // ═══════════════════════════════════════════════════════
    { id: 'e_co1', source: 'header_contabilidad', target: 'cont_rol_semanal', style: { stroke: '#c2185b' } },
    { id: 'e_co2', source: 'cont_rol_semanal', target: 'cont_sabado', style: { stroke: '#c2185b' } },
    { id: 'e_co3', source: 'cont_sabado', target: 'cont_lun_mar', style: { stroke: '#c2185b' } },
    { id: 'e_co4', source: 'cont_lun_mar', target: 'cont_miercoles', style: { stroke: '#c2185b' } },
    { id: 'e_co5', source: 'cont_lun_mar', target: 'cont_captura', style: { stroke: '#c2185b' } },
    { id: 'e_co6', source: 'cont_miercoles', target: 'cont_envio_nomina', animated: true, style: { stroke: '#c2185b' } },
    { id: 'e_co7', source: 'cont_envio_nomina', target: 'cont_journal', style: { stroke: '#c2185b' } },
    { id: 'e_co8', source: 'cont_captura', target: 'cont_invoices', style: { stroke: '#c2185b' } },
    { id: 'e_co9', source: 'header_contabilidad', target: 'cont_monday', style: { stroke: '#c2185b' } },
    { id: 'e_co10', source: 'cont_monday', target: 'cont_paychex', style: { stroke: '#c2185b' } },
    { id: 'e_co11', source: 'cont_journal', target: 'cont_cheques', style: { stroke: '#c2185b', strokeDasharray: '5,5' } },
    { id: 'e_co12', source: 'cont_invoices', target: 'cont_vacaciones', style: { stroke: '#c2185b', strokeDasharray: '5,5' } },
    { id: 'e_co13', source: 'cont_paychex', target: 'cont_discrepancias', style: { stroke: '#c2185b', strokeDasharray: '5,5' } },

    // ═══════════════════════════════════════════════════════
    // INSPECTOR (flujo interno)
    // ═══════════════════════════════════════════════════════
    { id: 'e_i1', source: 'header_inspector', target: 'insp_onboarding', style: { stroke: '#f9a825' } },
    { id: 'e_i2', source: 'header_inspector', target: 'insp_uniformes', style: { stroke: '#f9a825' } },
    { id: 'e_i3', source: 'header_inspector', target: 'insp_supervision', style: { stroke: '#f9a825' } },
    { id: 'e_i4', source: 'insp_onboarding', target: 'insp_dia1', style: { stroke: '#f9a825' } },
    { id: 'e_i5', source: 'insp_dia1', target: 'insp_app_60', style: { stroke: '#f9a825' } },
    { id: 'e_i6', source: 'insp_app_60', target: 'insp_evaluaciones', style: { stroke: '#f9a825' } },
    { id: 'e_i7', source: 'insp_uniformes', target: 'insp_cobro_uniforme', style: { stroke: '#f9a825' } },
    { id: 'e_i8', source: 'insp_supervision', target: 'insp_rutas', style: { stroke: '#f9a825' } },
    { id: 'e_i9', source: 'insp_rutas', target: 'insp_visitar', style: { stroke: '#f9a825' } },
    { id: 'e_i10', source: 'insp_visitar', target: 'insp_problemas', style: { stroke: '#f9a825' } },
    { id: 'e_i11', source: 'insp_cobro_uniforme', target: 'insp_satisfaccion', style: { stroke: '#f9a825', strokeDasharray: '5,5' } },
    { id: 'e_i12', source: 'insp_satisfaccion', target: 'insp_timesheet', style: { stroke: '#f9a825' } },
    { id: 'e_i13', source: 'insp_evaluaciones', target: 'insp_solicitudes_mgr', style: { stroke: '#f9a825', strokeDasharray: '5,5' } },
    { id: 'e_i14', source: 'insp_problemas', target: 'insp_incidentes', style: { stroke: '#f9a825' } },
    { id: 'e_i15', source: 'insp_timesheet', target: 'insp_prospectos', style: { stroke: '#f9a825', strokeDasharray: '5,5' } },

    // ═══════════════════════════════════════════════════════
    // RECLUTADORA (flujo interno)
    // ═══════════════════════════════════════════════════════
    { id: 'e_r1', source: 'header_requisicion', target: 'req_recepcion', style: { stroke: '#7b1fa2' } },
    { id: 'e_r2', source: 'header_requisicion', target: 'req_costos', style: { stroke: '#7b1fa2' } },
    { id: 'e_r3', source: 'header_requisicion', target: 'req_busqueda', style: { stroke: '#7b1fa2' } },
    { id: 'e_r4', source: 'req_recepcion', target: 'req_prioridad', style: { stroke: '#7b1fa2' } },
    { id: 'e_r5', source: 'req_prioridad', target: 'req_serial', style: { stroke: '#7b1fa2' } },
    { id: 'e_r6', source: 'req_costos', target: 'req_margen', style: { stroke: '#7b1fa2' } },
    { id: 'e_r7', source: 'req_busqueda', target: 'req_filtros', style: { stroke: '#7b1fa2' } },
    { id: 'e_r8', source: 'req_serial', target: 'req_asignacion', style: { stroke: '#7b1fa2' } },
    { id: 'e_r9', source: 'req_filtros', target: 'req_decision', style: { stroke: '#7b1fa2' } },
    { id: 'e_r10', source: 'req_asignacion', target: 'req_tracking', style: { stroke: '#7b1fa2' } },
    { id: 'e_r11', source: 'req_tracking', target: 'req_show', style: { stroke: '#7b1fa2' } },
    { id: 'e_r12', source: 'req_tracking', target: 'req_noshow', style: { stroke: '#c62828' } },
    { id: 'e_r13', source: 'req_margen', target: 'req_pool', style: { stroke: '#7b1fa2', strokeDasharray: '5,5' } },

    // ═══════════════════════════════════════════════════════
    // ADMIN HOTEL (flujo interno)
    // ═══════════════════════════════════════════════════════
    { id: 'e_h1', source: 'header_hotel', target: 'hotel_solicitar', style: { stroke: '#e65100' } },
    { id: 'e_h2', source: 'header_hotel', target: 'hotel_contrato', style: { stroke: '#e65100' } },
    { id: 'e_h3', source: 'header_hotel', target: 'hotel_recibir_emp', style: { stroke: '#e65100' } },
    { id: 'e_h4', source: 'hotel_solicitar', target: 'hotel_posicion', style: { stroke: '#e65100' } },
    { id: 'e_h5', source: 'hotel_contrato', target: 'hotel_bill_rate', style: { stroke: '#e65100' } },
    { id: 'e_h6', source: 'hotel_recibir_emp', target: 'hotel_emp_trabaja', style: { stroke: '#e65100' } },
    { id: 'e_h7', source: 'hotel_emp_trabaja', target: 'hotel_horas', style: { stroke: '#e65100' } },
    { id: 'e_h8', source: 'hotel_horas', target: 'hotel_timesheet', style: { stroke: '#e65100' } },
    { id: 'e_h9', source: 'hotel_emp_trabaja', target: 'hotel_incidentes', style: { stroke: '#e65100', strokeDasharray: '5,5' } },
    { id: 'e_h10', source: 'hotel_incidentes', target: 'hotel_inc_tipos', style: { stroke: '#e65100' } },
    { id: 'e_h11', source: 'hotel_emp_trabaja', target: 'hotel_facturacion', style: { stroke: '#e65100', strokeDasharray: '5,5' } },
    { id: 'e_h12', source: 'hotel_facturacion', target: 'hotel_pago', style: { stroke: '#e65100' } },

    // ═══════════════════════════════════════════════════════
    // COLABORADOR (flujo interno)
    // ═══════════════════════════════════════════════════════
    { id: 'e_cb1', source: 'header_colaborador', target: 'colab_registro', style: { stroke: '#2e7d32' } },
    { id: 'e_cb2', source: 'header_colaborador', target: 'colab_onboard', style: { stroke: '#2e7d32' } },
    { id: 'e_cb3', source: 'header_colaborador', target: 'colab_pago', style: { stroke: '#2e7d32' } },
    { id: 'e_cb4', source: 'header_colaborador', target: 'colab_solicitudes', style: { stroke: '#2e7d32' } },
    { id: 'e_cb5', source: 'colab_registro', target: 'colab_app', style: { stroke: '#2e7d32' } },
    { id: 'e_cb6', source: 'colab_app', target: 'colab_blacklist_check', style: { stroke: '#2e7d32' } },
    { id: 'e_cb7', source: 'colab_blacklist_check', target: 'colab_pool', style: { stroke: '#2e7d32' } },
    { id: 'e_cb8', source: 'colab_onboard', target: 'colab_app60', style: { stroke: '#2e7d32' } },
    { id: 'e_cb9', source: 'colab_app60', target: 'colab_evals', style: { stroke: '#2e7d32' } },
    { id: 'e_cb10', source: 'colab_pago', target: 'colab_operacion', style: { stroke: '#2e7d32' } },
    { id: 'e_cb11', source: 'colab_operacion', target: 'colab_uniforme', style: { stroke: '#2e7d32' } },
    { id: 'e_cb12', source: 'colab_solicitudes', target: 'colab_vacaciones', style: { stroke: '#2e7d32' } },
    { id: 'e_cb13', source: 'colab_vacaciones', target: 'colab_injury', style: { stroke: '#2e7d32' } },
    { id: 'e_cb14', source: 'colab_evals', target: 'colab_riesgos', style: { stroke: '#2e7d32', strokeDasharray: '5,5' } },
    { id: 'e_cb15', source: 'colab_uniforme', target: 'colab_riesgos', style: { stroke: '#2e7d32', strokeDasharray: '5,5' } },

    // ═══════════════════════════════════════════════════════
    // CONEXIONES INTER-ROL: PROCESOS COMPARTIDOS
    // ═══════════════════════════════════════════════════════

    // --- Hacia Procesos Compartidos (desde cada rol) ---

    // Requisición
    { id: 'e_x_req1', source: 'hotel_solicitar', target: 'proc_requisicion', label: 'Solicita personal', style: { stroke: '#e65100', strokeWidth: 2, strokeDasharray: '8,4' } },
    { id: 'e_x_req2', source: 'req_recepcion', target: 'proc_requisicion', style: { stroke: '#7b1fa2', strokeWidth: 2, strokeDasharray: '8,4' } },
    { id: 'e_x_req3', source: 'insp_onboarding', target: 'proc_requisicion', label: 'Onboard nuevo', style: { stroke: '#f9a825', strokeWidth: 2, strokeDasharray: '8,4' } },

    // Nómina
    { id: 'e_x_nom1', source: 'insp_timesheet', target: 'proc_nomina', label: 'Recuerda TS', style: { stroke: '#f9a825', strokeWidth: 2, strokeDasharray: '8,4' } },
    { id: 'e_x_nom2', source: 'cont_envio_nomina', target: 'proc_nomina', style: { stroke: '#c2185b', strokeWidth: 2, strokeDasharray: '8,4' } },
    { id: 'e_x_nom3', source: 'admin_aprobar_nomina', target: 'proc_nomina', label: 'Aprueba', style: { stroke: '#b71c1c', strokeWidth: 2, strokeDasharray: '8,4' } },

    // Onboarding
    { id: 'e_x_onb1', source: 'req_show', target: 'proc_onboarding', label: 'Empleado llega', style: { stroke: '#7b1fa2', strokeWidth: 2, strokeDasharray: '8,4' } },
    { id: 'e_x_onb2', source: 'insp_dia1', target: 'proc_onboarding', style: { stroke: '#f9a825', strokeWidth: 2, strokeDasharray: '8,4' } },

    // Calidad
    { id: 'e_x_cal1', source: 'insp_visitar', target: 'proc_calidad', label: 'Visita hotel', style: { stroke: '#f9a825', strokeWidth: 2, strokeDasharray: '8,4' } },
    { id: 'e_x_cal2', source: 'insp_satisfaccion', target: 'proc_calidad', style: { stroke: '#f9a825', strokeWidth: 2, strokeDasharray: '8,4' } },

    // Incidentes
    { id: 'e_x_inc1', source: 'insp_incidentes', target: 'proc_incidentes', label: 'Reporta', style: { stroke: '#f9a825', strokeWidth: 2, strokeDasharray: '8,4' } },
    { id: 'e_x_inc2', source: 'hotel_incidentes', target: 'proc_incidentes', label: 'Reporta', style: { stroke: '#e65100', strokeWidth: 2, strokeDasharray: '8,4' } },
    { id: 'e_x_inc3', source: 'admin_blacklist', target: 'proc_incidentes', label: 'Decide BL', style: { stroke: '#b71c1c', strokeWidth: 2, strokeDasharray: '8,4' } },

    // Facturación
    { id: 'e_x_fac1', source: 'cont_invoices', target: 'proc_facturacion', label: 'Genera Invoice', style: { stroke: '#c2185b', strokeWidth: 2, strokeDasharray: '8,4' } },
    { id: 'e_x_fac2', source: 'hotel_facturacion', target: 'proc_facturacion', label: 'Revisa Invoice', style: { stroke: '#e65100', strokeWidth: 2, strokeDasharray: '8,4' } },

    // Vacaciones
    { id: 'e_x_vac1', source: 'colab_vacaciones', target: 'proc_vacaciones', label: 'Solicita', style: { stroke: '#2e7d32', strokeWidth: 2, strokeDasharray: '8,4' } },
    { id: 'e_x_vac2', source: 'cont_vacaciones', target: 'proc_vacaciones', label: 'Calcula', style: { stroke: '#c2185b', strokeWidth: 2, strokeDasharray: '8,4' } },

    // Uniformes
    { id: 'e_x_uni1', source: 'insp_cobro_uniforme', target: 'proc_uniformes', label: 'Entrega', style: { stroke: '#f9a825', strokeWidth: 2, strokeDasharray: '8,4' } },
    { id: 'e_x_uni2', source: 'colab_uniforme', target: 'proc_uniformes', label: 'Recibe', style: { stroke: '#2e7d32', strokeWidth: 2, strokeDasharray: '8,4' } },

    // --- Detalle Requisición inter-rol ---
    { id: 'e_dr1', source: 'proc_requisicion', target: 'conn_req_1', style: { stroke: '#455a64', strokeWidth: 2 } },
    { id: 'e_dr2', source: 'conn_req_1', target: 'conn_req_2', animated: true, style: { stroke: '#455a64', strokeWidth: 2 } },
    { id: 'e_dr3', source: 'conn_req_2', target: 'conn_req_3', animated: true, style: { stroke: '#455a64', strokeWidth: 2 } },

    // --- Detalle Nómina inter-rol ---
    { id: 'e_dn1', source: 'proc_nomina', target: 'conn_nom_1', style: { stroke: '#455a64', strokeWidth: 2 } },
    { id: 'e_dn2', source: 'conn_nom_1', target: 'conn_nom_2', animated: true, style: { stroke: '#455a64', strokeWidth: 2 } },
    { id: 'e_dn3', source: 'conn_nom_2', target: 'conn_nom_3', animated: true, style: { stroke: '#455a64', strokeWidth: 2 } },
    { id: 'e_dn4', source: 'conn_nom_3', target: 'conn_nom_4', animated: true, style: { stroke: '#455a64', strokeWidth: 2 } },

    // --- Detalle Calidad inter-rol ---
    { id: 'e_dc1', source: 'proc_calidad', target: 'conn_cal_1', style: { stroke: '#455a64', strokeWidth: 2 } },
    { id: 'e_dc2', source: 'conn_cal_1', target: 'conn_cal_2', animated: true, style: { stroke: '#455a64', strokeWidth: 2 } },
    { id: 'e_dc3', source: 'conn_cal_2', target: 'conn_cal_3', animated: true, style: { stroke: '#455a64', strokeWidth: 2 } },

    // --- Detalle Incidentes inter-rol ---
    { id: 'e_di1', source: 'proc_incidentes', target: 'conn_inc_1', style: { stroke: '#455a64', strokeWidth: 2 } },
    { id: 'e_di2', source: 'conn_inc_1', target: 'conn_inc_2', animated: true, style: { stroke: '#455a64', strokeWidth: 2 } },
    { id: 'e_di3', source: 'conn_inc_2', target: 'conn_inc_3', animated: true, style: { stroke: '#c62828', strokeWidth: 2 } },

    // --- Detalle Facturación inter-rol ---
    { id: 'e_df1', source: 'proc_facturacion', target: 'conn_fact_1', style: { stroke: '#455a64', strokeWidth: 2 } },
    { id: 'e_df2', source: 'conn_fact_1', target: 'conn_fact_2', animated: true, style: { stroke: '#455a64', strokeWidth: 2 } },
    { id: 'e_df3', source: 'conn_fact_2', target: 'conn_fact_3', animated: true, style: { stroke: '#455a64', strokeWidth: 2 } },

    // --- Detalle Vacaciones inter-rol ---
    { id: 'e_dv1', source: 'proc_vacaciones', target: 'conn_vac_1', style: { stroke: '#455a64', strokeWidth: 2 } },
    { id: 'e_dv2', source: 'conn_vac_1', target: 'conn_vac_2', animated: true, style: { stroke: '#455a64', strokeWidth: 2 } },
    { id: 'e_dv3', source: 'conn_vac_2', target: 'conn_vac_3', animated: true, style: { stroke: '#455a64', strokeWidth: 2 } },

    // ═══════════════════════════════════════════════════════
    // CONEXIONES DIRECTAS INTER-ROL (las más importantes)
    // Líneas gruesas que muestran la dependencia directa
    // ═══════════════════════════════════════════════════════

    // Admin ↔ Contabilidad (aprobación nómina)
    { id: 'e_direct_1', source: 'cont_journal', target: 'admin_revision_jue', label: 'Pre-nómina lista', animated: true, style: { stroke: '#ff6f00', strokeWidth: 3 } },

    // Contabilidad → Admin (reportes)
    { id: 'e_direct_2', source: 'cont_cheques', target: 'admin_dashboard', label: 'Reportes', style: { stroke: '#ff6f00', strokeWidth: 2, strokeDasharray: '8,4' } },

    // Inspector → Contabilidad (timesheet + uniformes)
    { id: 'e_direct_3', source: 'insp_timesheet', target: 'cont_lun_mar', label: 'Envía TS validados', style: { stroke: '#8bc34a', strokeWidth: 3, strokeDasharray: '8,4' } },
    { id: 'e_direct_4', source: 'insp_cobro_uniforme', target: 'cont_discrepancias', label: 'Descuento uniforme', style: { stroke: '#8bc34a', strokeWidth: 2, strokeDasharray: '8,4' } },

    // Hotel → Contabilidad (timesheet)
    { id: 'e_direct_5', source: 'hotel_timesheet', target: 'cont_lun_mar', label: 'Sube TS', animated: true, style: { stroke: '#ff9800', strokeWidth: 3 } },

    // Hotel → Reclutadora (requisición)
    { id: 'e_direct_6', source: 'hotel_posicion', target: 'req_recepcion', label: 'Nueva requisición', animated: true, style: { stroke: '#ff9800', strokeWidth: 3 } },

    // Admin → Hotel (contrato)
    { id: 'e_direct_7', source: 'admin_firma_contrato', target: 'hotel_contrato', label: 'Service Contract', style: { stroke: '#b71c1c', strokeWidth: 3, strokeDasharray: '8,4' } },

    // Reclutadora → Inspector (empleado asignado)
    { id: 'e_direct_8', source: 'req_show', target: 'insp_onboarding', label: 'Emp asignado → Onboard', animated: true, style: { stroke: '#9c27b0', strokeWidth: 3 } },

    // Inspector → Hotel (encuesta satisfacción)
    { id: 'e_direct_9', source: 'insp_satisfaccion', target: 'hotel_incidentes', label: 'Encuesta + feedback', style: { stroke: '#f9a825', strokeWidth: 2, strokeDasharray: '8,4' } },

    // Inspector → Reclutadora (prospectos)
    { id: 'e_direct_10', source: 'insp_prospectos', target: 'req_pool', label: 'Referir prospectos', style: { stroke: '#f9a825', strokeWidth: 2, strokeDasharray: '8,4' } },

    // Colaborador → Inspector (onboarding)
    { id: 'e_direct_11', source: 'colab_pool', target: 'req_asignacion', label: 'Pool → Asignación', style: { stroke: '#2e7d32', strokeWidth: 2, strokeDasharray: '8,4' } },

    // Contabilidad → Hotel (invoices)
    { id: 'e_direct_12', source: 'cont_invoices', target: 'hotel_facturacion', label: 'Envía invoices', animated: true, style: { stroke: '#c2185b', strokeWidth: 3 } },

    // Admin → Colaborador (pago)
    { id: 'e_direct_13', source: 'admin_pago_vie', target: 'colab_operacion', label: 'Pago Viernes 5AM', animated: true, style: { stroke: '#b71c1c', strokeWidth: 3 } },

    // Colaborador → Contabilidad (discrepancias)
    { id: 'e_direct_14', source: 'colab_solicitudes', target: 'cont_discrepancias', label: 'Solicitudes/Discrepancias', style: { stroke: '#2e7d32', strokeWidth: 2, strokeDasharray: '8,4' } },

    // Reclutadora → Contabilidad (costos)
    { id: 'e_direct_15', source: 'req_margen', target: 'cont_monday', label: 'Dashboard costos', style: { stroke: '#7b1fa2', strokeWidth: 2, strokeDasharray: '8,4' } },
  ]
}

export default sistemaCompletoFlow
