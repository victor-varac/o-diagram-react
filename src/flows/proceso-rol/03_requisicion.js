const requisicionRolFlow = {
  nodes: [
    // =============================================
    // INICIO
    // =============================================
    { id: 'start', type: 'input', position: { x: 600, y: 0 }, data: { label: '👥 Reclutadora\n(Cecy / Candy)\nFlujo Completo' }, className: 'node-recruitment' },

    // =============================================
    // === SECCIÓN 0: CAPTACIÓN DE CANDIDATOS ===
    // =============================================
    { id: 'section_captacion', type: 'default', position: { x: 600, y: 120 }, data: { label: '📢 CAPTACIÓN DE\nCANDIDATOS' }, className: 'node-recruitment' },

    // Fuentes de captación
    { id: 'src_facebook', type: 'default', position: { x: 350, y: 240 }, data: { label: '📱 Facebook\nAnuncios de Empleo' }, className: 'node-info' },
    { id: 'src_texto', type: 'default', position: { x: 550, y: 240 }, data: { label: '💬 Mensajes\nde Texto/SMS' }, className: 'node-info' },
    { id: 'src_referido', type: 'default', position: { x: 750, y: 240 }, data: { label: '🤝 Referidos\nEmpleados Actuales' }, className: 'node-info' },
    { id: 'src_whatsapp', type: 'default', position: { x: 950, y: 240 }, data: { label: '📲 WhatsApp\nContacto Directo' }, className: 'node-info' },

    // Candidato llega
    { id: 'candidato_contacta', type: 'default', position: { x: 600, y: 360 }, data: { label: '📞 Candidato Contacta\n"Vi un anuncio de trabajo"' }, className: 'node-recruitment' },
    { id: 'primer_contacto', type: 'default', position: { x: 600, y: 460 }, data: { label: '👋 Primer Contacto\n"Mucho gusto, soy Cecy\nreclutadora de Orange Staffing"' }, className: 'node-recruitment' },

    // =============================================
    // === SECCIÓN 1: ENTREVISTA / FILTRO ===
    // =============================================
    { id: 'section_entrevista', type: 'default', position: { x: 600, y: 580 }, data: { label: '🎙️ ENTREVISTA\nTELEFÓNICA / FILTRO' }, className: 'node-recruitment' },

    // Preguntas comunes (todas las posiciones)
    { id: 'preg_zona', type: 'default', position: { x: 300, y: 700 }, data: { label: '📍 ¿En qué zona\nvives actualmente?\n(ver qué hotel queda cerca)' }, className: 'node-info' },
    { id: 'alert_zona', type: 'default', position: { x: 100, y: 700 }, data: { label: '🚨 ALERTA: "me muevo\na donde sea"\n→ no llegan por distancia' }, className: 'node-critical' },

    { id: 'preg_compromiso', type: 'default', position: { x: 300, y: 820 }, data: { label: '💼 ¿Disponible fines\nde semana y horarios\nvariables?' }, className: 'node-info' },
    { id: 'alert_compromiso', type: 'default', position: { x: 100, y: 820 }, data: { label: '🚨 ALERTA: molesta\no apurada desde inicio\n→ falta de compromiso' }, className: 'node-critical' },

    { id: 'preg_experiencia', type: 'default', position: { x: 600, y: 700 }, data: { label: '🏨 ¿Experiencia\ntrabajando en hotel?\n¿Cuál fue el último?' }, className: 'node-info' },
    { id: 'alert_experiencia', type: 'default', position: { x: 600, y: 820 }, data: { label: '🚨 ALERTA: no recuerda\nnombre del hotel\n→ posible sin experiencia' }, className: 'node-critical' },

    // Entrevistas por posición
    { id: 'tipo_posicion', type: 'default', position: { x: 900, y: 700 }, data: { label: '🔀 Tipo de\nPosición' }, className: 'node-recruitment' },
    { id: 'ent_housekeeper', type: 'default', position: { x: 1100, y: 600 }, data: { label: '🧹 Entrevista\nHousekeeper\n• Hab. salida vs ocupadas\n• Cuántas por turno\n• Experiencia con duvet\n• Trabajo físico' }, className: 'node-info' },
    { id: 'ent_houseman', type: 'default', position: { x: 1100, y: 740 }, data: { label: '🧑‍🔧 Entrevista\nHouseman\n• Qué hace al iniciar turno\n• Apoyo a HK (sábanas/toallas)\n• Manejo fugas/daños\n• Radio/bitácora' }, className: 'node-info' },
    { id: 'ent_laundry', type: 'default', position: { x: 1300, y: 600 }, data: { label: '👕 Entrevista\nLaundry\n• Piezas que lava en hotel\n• Lavadoras industriales\n• Ropa urgente para HK\n• Tiempo de experiencia' }, className: 'node-info' },
    { id: 'ent_maintenance', type: 'default', position: { x: 1300, y: 740 }, data: { label: '🔧 Entrevista\nMantenimiento\n• Plomería/electricidad/AC\n• Manejo emergencias\n• Uso de radio\n• Inglés con huéspedes' }, className: 'node-info' },

    // Alertas rojas generales
    { id: 'alertas_rojas', type: 'default', position: { x: 1200, y: 880 }, data: { label: '🚩 ALERTAS ROJAS\n• Respuestas vagas "a veces", "tal vez"\n• Muchas restricciones horario\n• Confunde conceptos del puesto\n• Dice "es lo mismo" sin escuchar' }, className: 'node-critical' },

    // Decisión
    { id: 'decision_apto', type: 'default', position: { x: 600, y: 960 }, data: { label: '⚖️ ¿Candidato\nApto?' }, className: 'node-warning' },
    { id: 'no_apto', type: 'default', position: { x: 350, y: 1060 }, data: { label: '❌ No Apto\n"Gracias por tu tiempo,\nvoy a revisar si tenemos\nvacante, te aviso"' }, className: 'node-critical' },
    { id: 'si_apto', type: 'default', position: { x: 600, y: 1060 }, data: { label: '✅ Apto\nContinuar Proceso' }, className: 'node-success' },
    { id: 'pool_espera', type: 'default', position: { x: 350, y: 1160 }, data: { label: '📋 Pool de Espera\n(candidatos filtrados\npero sin vacante)' }, className: 'node-info' },

    // =============================================
    // === SECCIÓN 2: RECOPILACIÓN DE DATOS ===
    // =============================================
    { id: 'section_datos', type: 'default', position: { x: 600, y: 1200 }, data: { label: '📝 RECOPILACIÓN\nDE DATOS' }, className: 'node-recruitment' },

    // Datos requeridos (Paso 1 del doc)
    { id: 'dato_nombre', type: 'default', position: { x: 350, y: 1320 }, data: { label: '👤 NOMBRE\nCompleto' }, className: 'node-info' },
    { id: 'dato_telefono', type: 'default', position: { x: 500, y: 1320 }, data: { label: '📞 TELÉFONO' }, className: 'node-info' },
    { id: 'dato_zona', type: 'default', position: { x: 650, y: 1320 }, data: { label: '📍 ZONA DE\nDOMICILIO' }, className: 'node-info' },
    { id: 'dato_experiencia', type: 'default', position: { x: 800, y: 1320 }, data: { label: '🏨 EXPERIENCIA\nHotel y Posición' }, className: 'node-info' },
    { id: 'dato_ingles', type: 'default', position: { x: 400, y: 1420 }, data: { label: '🗣️ INGLÉS\nSí (%) / No' }, className: 'node-info' },
    { id: 'dato_transporte', type: 'default', position: { x: 550, y: 1420 }, data: { label: '🚗 MEDIO DE\nTRANSPORTE' }, className: 'node-info' },

    // Documentación
    { id: 'dato_docs', type: 'default', position: { x: 750, y: 1420 }, data: { label: '📄 DOCUMENTACIÓN\n(solo foto cuando sea asignado)' }, className: 'node-warning' },
    { id: 'doc_taxid', type: 'default', position: { x: 550, y: 1530 }, data: { label: '🆔 Tax ID o\nSeguro Social' }, className: 'node-success' },
    { id: 'doc_permiso', type: 'default', position: { x: 700, y: 1530 }, data: { label: '📋 Permiso de\nTrabajo' }, className: 'node-success' },
    { id: 'doc_pasaporte', type: 'default', position: { x: 850, y: 1530 }, data: { label: '🛂 Pasaporte\nVigente' }, className: 'node-success' },
    { id: 'doc_cedula', type: 'default', position: { x: 1000, y: 1530 }, data: { label: '🪪 Cédula Consular\n(emitida en USA)' }, className: 'node-success' },
    { id: 'sin_taxid', type: 'default', position: { x: 550, y: 1630 }, data: { label: '⚠️ Sin Tax ID/SSN\n→ Retención 16%\nde impuestos' }, className: 'node-critical' },

    // Candidato registrado en pool
    { id: 'candidato_registrado', type: 'default', position: { x: 600, y: 1740 }, data: { label: '✅ Candidato Registrado\nen Pool de Disponibles' }, className: 'node-success' },

    // =============================================
    // === SECCIÓN 3: RECEPCIÓN DE REQUISICIÓN ===
    // =============================================
    { id: 'section_recepcion', type: 'default', position: { x: 600, y: 1880 }, data: { label: '📋 RECEPCIÓN DE\nREQUISICIÓN' }, className: 'node-hotel' },

    // Requisición llega (puede ser del chat de WhatsApp o de la app)
    { id: 'req_whatsapp', type: 'default', position: { x: 350, y: 2000 }, data: { label: '📱 Chat 4\nRequisiciones\n(WhatsApp grupo)' }, className: 'node-hotel' },
    { id: 'req_inspector', type: 'default', position: { x: 550, y: 2000 }, data: { label: '👁️ Inspector reporta\n"Hotel X requiere\nuna Housekeeper\npara iniciar mañana"' }, className: 'node-hotel' },
    { id: 'req_manager', type: 'default', position: { x: 750, y: 2000 }, data: { label: '👨‍💼 Manager Hotel\nsolicita directamente' }, className: 'node-hotel' },

    { id: 'crear_req', type: 'default', position: { x: 600, y: 2130 }, data: { label: '📋 Crear\nRequisición' }, className: 'node-hotel' },
    { id: 'calc_priority', type: 'default', position: { x: 850, y: 2130 }, data: { label: '⏰ Calcular\nAnticipación' }, className: 'node-info' },

    // Prioridades
    { id: 'priority_green', type: 'default', position: { x: 1050, y: 2050 }, data: { label: '🟢 VERDE\n>120h Normal' }, className: 'node-success' },
    { id: 'priority_yellow', type: 'default', position: { x: 1050, y: 2130 }, data: { label: '🟡 AMARILLO\n72-120h Media' }, className: 'node-warning' },
    { id: 'priority_red', type: 'default', position: { x: 1050, y: 2210 }, data: { label: '🔴 ROJO\n<72h Urgente' }, className: 'node-critical' },

    { id: 'gen_serial', type: 'default', position: { x: 1250, y: 2130 }, data: { label: '🔢 Generar Serial\nREQ-#' }, className: 'node-info' },

    // =============================================
    // === SECCIÓN 4: COSTOS Y CONTRATOS ===
    // =============================================
    { id: 'section_costos', type: 'default', position: { x: 1250, y: 2330 }, data: { label: '💰 COSTOS Y\nCONTRATOS' }, className: 'node-accounting' },
    { id: 'get_contract', type: 'default', position: { x: 1100, y: 2440 }, data: { label: '📄 Service\nContract' }, className: 'node-accounting' },
    { id: 'get_rates', type: 'default', position: { x: 1250, y: 2440 }, data: { label: '💰 Bill & Pay\nRate' }, className: 'node-accounting' },
    { id: 'bill_rate', type: 'default', position: { x: 1100, y: 2540 }, data: { label: '🏨→Orange\n~$19.58/hr' }, className: 'node-hotel' },
    { id: 'pay_rate', type: 'default', position: { x: 1250, y: 2540 }, data: { label: 'Orange→Emp\n~$15/hr' }, className: 'node-success' },
    { id: 'calc_cost', type: 'default', position: { x: 1400, y: 2440 }, data: { label: '📊 Costos\nProyectados' }, className: 'node-accounting' },
    { id: 'calc_margin', type: 'default', position: { x: 1400, y: 2540 }, data: { label: 'Validar\nMargen %' }, className: 'node-accounting' },
    { id: 'margin_ok', type: 'default', position: { x: 1400, y: 2640 }, data: { label: '🟢 Margen 30-35%\n($4.58/hr ejemplo)' }, className: 'node-success' },
    { id: 'to_accounting', type: 'default', position: { x: 1250, y: 2640 }, data: { label: '💰 Dashboard\nMónica' }, className: 'node-accounting' },

    // =============================================
    // === SECCIÓN 5: BÚSQUEDA EN POOLS ===
    // =============================================
    { id: 'section_busqueda', type: 'default', position: { x: 400, y: 2330 }, data: { label: '🔍 BÚSQUEDA\nEN POOLS' }, className: 'node-recruitment' },

    // Dos pools
    { id: 'pool_disponibles', type: 'default', position: { x: 250, y: 2440 }, data: { label: '👥 Pool\nDisponibles\n(ya entrevistados)' }, className: 'node-recruitment' },
    { id: 'pool_nuevos', type: 'default', position: { x: 450, y: 2440 }, data: { label: '🆕 Pool\nNuevos\n(candidatos frescos)' }, className: 'node-recruitment' },

    { id: 'filters', type: 'default', position: { x: 350, y: 2560 }, data: { label: '⚙️ Filtros\nAutomáticos' }, className: 'node-info' },
    { id: 'distance', type: 'default', position: { x: 170, y: 2670 }, data: { label: '📍 Distancia\n≤30 min' }, className: 'node-info' },
    { id: 'availability', type: 'default', position: { x: 350, y: 2670 }, data: { label: '📅 Disponibilidad\nHorario' }, className: 'node-info' },
    { id: 'blacklist', type: 'default', position: { x: 530, y: 2670 }, data: { label: '🚫 No en\nBlack List' }, className: 'node-warning' },
    { id: 'posicion_match', type: 'default', position: { x: 170, y: 2770 }, data: { label: '🏨 Posición\nRequerida' }, className: 'node-info' },
    { id: 'experiencia_match', type: 'default', position: { x: 350, y: 2770 }, data: { label: '⭐ Experiencia\nRelevante' }, className: 'node-info' },
    { id: 'matches', type: 'default', position: { x: 350, y: 2880 }, data: { label: '✅ Matches\nOrdenados por\nCompatibilidad' }, className: 'node-success' },

    // =============================================
    // === SECCIÓN 6: ASIGNACIÓN Y TARJETA TRELLO ===
    // =============================================
    { id: 'section_asignacion', type: 'default', position: { x: 600, y: 3020 }, data: { label: '📌 ASIGNACIÓN\nDE PERSONAL' }, className: 'node-recruitment' },

    // Contactar candidato
    { id: 'llamar_candidato', type: 'default', position: { x: 400, y: 3140 }, data: { label: '📞 Llamar\nCandidato\nOfrecer vacante' }, className: 'node-recruitment' },
    { id: 'emp_decision', type: 'default', position: { x: 600, y: 3140 }, data: { label: '🤔 Candidato\nDecide' }, className: 'node-warning' },
    { id: 'accepts', type: 'default', position: { x: 800, y: 3080 }, data: { label: '✅ Acepta\nAsignación' }, className: 'node-success' },
    { id: 'rejects', type: 'default', position: { x: 800, y: 3200 }, data: { label: '❌ Rechaza' }, className: 'node-critical' },

    // Crear tarjeta Trello (Paso 2)
    { id: 'crear_tarjeta', type: 'default', position: { x: 1000, y: 3080 }, data: { label: '📇 PASO 2: Crear Tarjeta\nFecha + Tipo Asignación\n+ Nombre + Tel + Zona\n+ Posición + Hotel\n+ Fecha inicio + Hora' }, className: 'node-recruitment' },

    // Tipo de asignación
    { id: 'tipo_nueva_fija', type: 'default', position: { x: 1220, y: 3020 }, data: { label: '📌 Asignación\nNueva Fija' }, className: 'node-success' },
    { id: 'tipo_entrevista', type: 'default', position: { x: 1220, y: 3100 }, data: { label: '🎙️ Asignación\nNueva (Entrevista)' }, className: 'node-warning' },

    // Tablero 4 Trello - Inspectores (Paso 3)
    { id: 'trello_tablero4', type: 'default', position: { x: 1000, y: 3220 }, data: { label: '📋 PASO 3: Colocar\nen Tablero 4\nTRELLO (Inspectores)' }, className: 'node-hotel' },

    // Columnas del tablero Trello
    { id: 'trello_pre_asign', type: 'default', position: { x: 850, y: 3340 }, data: { label: '4. Pre Asignación\n/ Pre Assignment\n(Operaciones, R&S)' }, className: 'node-info' },
    { id: 'trello_llego', type: 'default', position: { x: 1050, y: 3340 }, data: { label: '5. LLEGÓ\n(con foto de ID\ny confirmación)' }, className: 'node-success' },

    // =============================================
    // === SECCIÓN 7: ONBOARDING DEL CANDIDATO ===
    // =============================================
    { id: 'section_onboarding', type: 'default', position: { x: 600, y: 3480 }, data: { label: '🍊 ONBOARDING\nDEL CANDIDATO' }, className: 'node-recruitment' },

    // Mensaje de bienvenida
    { id: 'msg_bienvenida', type: 'default', position: { x: 400, y: 3600 }, data: { label: '📱 Enviar Mensaje\nBIENVENID@ A\nORANGE STAFFING 🍊\n(WhatsApp)' }, className: 'node-recruitment' },

    // Instrucciones
    { id: 'inst_vestimenta', type: 'default', position: { x: 200, y: 3720 }, data: { label: '👔 Vestimenta\nPantalón negro\nCamisa negra\nCalzado negro cerrado' }, className: 'node-info' },
    { id: 'inst_llegada', type: 'default', position: { x: 400, y: 3720 }, data: { label: '🏨 Al llegar:\n"Vengo de parte de\nOrange Staffing para\nel puesto asignado"' }, className: 'node-info' },
    { id: 'inst_timesheet', type: 'default', position: { x: 600, y: 3720 }, data: { label: '🕒 Time Sheet\nOBLIGATORIO desde\ndía 1 (entrada/salida)\n⚠️ Aunque sea 1 turno' }, className: 'node-warning' },
    { id: 'inst_cancelar', type: 'default', position: { x: 800, y: 3720 }, data: { label: '⚠️ Si no puede asistir:\nCancelar con anticipación\n(hay lista de espera)' }, className: 'node-warning' },

    // Beneficios comunicados
    { id: 'beneficios', type: 'default', position: { x: 600, y: 3850 }, data: { label: '💰 BENEFICIOS COMUNICADOS\n• Pago semanal (sábados en hotel)\n• 1ra semana desfasada\n• Uniforme desde 2da semana\n• 1 semana vacaciones/año\n• Cheque certificado\n• 5 días trabajo / 2 descanso' }, className: 'node-success' },

    // Regla primer día
    { id: 'regla_primer_dia', type: 'default', position: { x: 300, y: 3970 }, data: { label: '📌 REGLA: Primer día\n= día de entrenamiento\nSIN PAGO\n(política del hotel)' }, className: 'node-critical' },

    // Regla 16%
    { id: 'regla_16pct', type: 'default', position: { x: 600, y: 3970 }, data: { label: '💸 REGLA: Sin Tax ID\nni Seguro Social\n→ descuento 16%\nde impuestos' }, className: 'node-critical' },

    // Inspector visitará
    { id: 'inspector_visita', type: 'default', position: { x: 900, y: 3970 }, data: { label: '👁️ Inspector visitará\nel hotel para concretar\nasignación y aclarar\ndudas de pago/docs' }, className: 'node-hotel' },

    // =============================================
    // === SECCIÓN 8: SEGUIMIENTO DÍA 1 Y REPORTES ===
    // =============================================
    { id: 'section_seguimiento', type: 'default', position: { x: 600, y: 4120 }, data: { label: '📍 SEGUIMIENTO\nDÍA 1 Y REPORTES' }, className: 'node-recruitment' },

    // Monitoreo día 1 (Paso 6)
    { id: 'monitoreo_dia1', type: 'default', position: { x: 400, y: 4240 }, data: { label: '📱 PASO 6: Monitoreo\nasistencia por\nWhatsApp/Llamada\n(reconfirmar llegada)' }, className: 'node-recruitment' },

    { id: 'reportar_chat4', type: 'default', position: { x: 400, y: 4370 }, data: { label: '💬 Reportar al\nChat 4\n(todo se reporta ahí)' }, className: 'node-info' },

    // Resultado día 1
    { id: 'result_dia1', type: 'default', position: { x: 600, y: 4240 }, data: { label: '🔍 Resultado\nDía 1' }, className: 'node-warning' },
    { id: 'show', type: 'default', position: { x: 750, y: 4170 }, data: { label: '✅ SE PRESENTÓ\nIngreso Exitoso' }, className: 'node-success' },
    { id: 'no_show', type: 'default', position: { x: 750, y: 4310 }, data: { label: '❌ NO-SHOW\nNo se presentó' }, className: 'node-critical' },

    // Si se presentó
    { id: 'foto_id', type: 'default', position: { x: 950, y: 4170 }, data: { label: '📸 Foto de ID\nen tarjeta Trello\n→ Columna "LLEGÓ"' }, className: 'node-success' },

    // Reporte diario (Paso 4)
    { id: 'reporte_ingresos', type: 'default', position: { x: 950, y: 4300 }, data: { label: '📊 PASO 4: Reporte\nDiario de Ingresos\n(se actualiza todos\nlos días)' }, className: 'node-recruitment' },

    // Actualizar tablero 1 (Paso 5)
    { id: 'trello_tablero1', type: 'default', position: { x: 600, y: 4440 }, data: { label: '📋 PASO 5: Actualizar\nTablero 1 TRELLO\n→ Requisición CUBIERTA' }, className: 'node-success' },

    // Si no se presentó
    { id: 'no_show_action', type: 'default', position: { x: 750, y: 4440 }, data: { label: '🔄 Buscar\nReemplazo\n→ Volver a Pool' }, className: 'node-critical' },

    // =============================================
    // === SECCIÓN 9: CIERRE Y MÉTRICAS ===
    // =============================================
    { id: 'section_cierre', type: 'default', position: { x: 600, y: 4580 }, data: { label: '📈 CIERRE Y\nMÉTRICAS' }, className: 'node-recruitment' },

    { id: 'req_completada', type: 'default', position: { x: 400, y: 4700 }, data: { label: '✅ Requisición\nCOMPLETADA\n(empleado activo)' }, className: 'node-success' },
    { id: 'req_fallida', type: 'default', position: { x: 600, y: 4700 }, data: { label: '❌ Requisición\nFALLIDA\n(no se cubrió)' }, className: 'node-critical' },
    { id: 'metricas', type: 'default', position: { x: 800, y: 4700 }, data: { label: '📊 MÉTRICAS\n• Tasa cumplimiento\n• Tiempo promedio cobertura\n• % No-Shows\n• % Requisiciones <72h\n• Retención 1er mes' }, className: 'node-info' },

    // Fin
    { id: 'end', type: 'output', position: { x: 600, y: 4830 }, data: { label: '🏁 FIN\nProceso Reclutamiento\nCompleto' }, className: 'node-recruitment' },
  ],

  edges: [
    // =============================================
    // Inicio → Captación
    // =============================================
    { id: 'e_start', source: 'start', target: 'section_captacion' },

    // Fuentes de captación
    { id: 'e_src1', source: 'section_captacion', target: 'src_facebook' },
    { id: 'e_src2', source: 'section_captacion', target: 'src_texto' },
    { id: 'e_src3', source: 'section_captacion', target: 'src_referido' },
    { id: 'e_src4', source: 'section_captacion', target: 'src_whatsapp' },
    { id: 'e_src5', source: 'src_facebook', target: 'candidato_contacta' },
    { id: 'e_src6', source: 'src_texto', target: 'candidato_contacta' },
    { id: 'e_src7', source: 'src_referido', target: 'candidato_contacta' },
    { id: 'e_src8', source: 'src_whatsapp', target: 'candidato_contacta' },
    { id: 'e_contacto', source: 'candidato_contacta', target: 'primer_contacto' },

    // =============================================
    // Entrevista / Filtro
    // =============================================
    { id: 'e_ent1', source: 'primer_contacto', target: 'section_entrevista' },

    // Preguntas comunes
    { id: 'e_ent2', source: 'section_entrevista', target: 'preg_zona' },
    { id: 'e_ent3', source: 'section_entrevista', target: 'preg_experiencia' },
    { id: 'e_ent4', source: 'section_entrevista', target: 'tipo_posicion' },
    { id: 'e_alert_zona', source: 'preg_zona', target: 'alert_zona', style: { stroke: '#c62828', strokeDasharray: '5,5' }, animated: true },
    { id: 'e_ent5', source: 'preg_zona', target: 'preg_compromiso' },
    { id: 'e_alert_comp', source: 'preg_compromiso', target: 'alert_compromiso', style: { stroke: '#c62828', strokeDasharray: '5,5' }, animated: true },
    { id: 'e_alert_exp', source: 'preg_experiencia', target: 'alert_experiencia', style: { stroke: '#c62828', strokeDasharray: '5,5' }, animated: true },

    // Entrevistas por posición
    { id: 'e_pos1', source: 'tipo_posicion', target: 'ent_housekeeper', label: 'HK' },
    { id: 'e_pos2', source: 'tipo_posicion', target: 'ent_houseman', label: 'HM' },
    { id: 'e_pos3', source: 'tipo_posicion', target: 'ent_laundry', label: 'LY' },
    { id: 'e_pos4', source: 'tipo_posicion', target: 'ent_maintenance', label: 'MT' },

    // Alertas rojas
    { id: 'e_ar1', source: 'ent_housekeeper', target: 'alertas_rojas', style: { stroke: '#c62828', strokeDasharray: '5,5' } },
    { id: 'e_ar2', source: 'ent_houseman', target: 'alertas_rojas', style: { stroke: '#c62828', strokeDasharray: '5,5' } },
    { id: 'e_ar3', source: 'ent_laundry', target: 'alertas_rojas', style: { stroke: '#c62828', strokeDasharray: '5,5' } },
    { id: 'e_ar4', source: 'ent_maintenance', target: 'alertas_rojas', style: { stroke: '#c62828', strokeDasharray: '5,5' } },

    // Decisión
    { id: 'e_dec1', source: 'preg_compromiso', target: 'decision_apto' },
    { id: 'e_dec1b', source: 'preg_experiencia', target: 'decision_apto' },
    { id: 'e_dec1c', source: 'alertas_rojas', target: 'decision_apto' },
    { id: 'e_dec2', source: 'decision_apto', target: 'no_apto', label: 'No' },
    { id: 'e_dec3', source: 'decision_apto', target: 'si_apto', label: 'Sí' },
    { id: 'e_dec4', source: 'no_apto', target: 'pool_espera', label: 'Guardar por si acaso' },

    // =============================================
    // Recopilación de datos
    // =============================================
    { id: 'e_datos1', source: 'si_apto', target: 'section_datos' },
    { id: 'e_datos2', source: 'section_datos', target: 'dato_nombre' },
    { id: 'e_datos3', source: 'section_datos', target: 'dato_telefono' },
    { id: 'e_datos4', source: 'section_datos', target: 'dato_zona' },
    { id: 'e_datos5', source: 'section_datos', target: 'dato_experiencia' },
    { id: 'e_datos6', source: 'dato_nombre', target: 'dato_ingles' },
    { id: 'e_datos7', source: 'dato_telefono', target: 'dato_transporte' },
    { id: 'e_datos8', source: 'dato_zona', target: 'dato_docs' },
    { id: 'e_datos9', source: 'dato_experiencia', target: 'dato_docs' },

    // Documentación
    { id: 'e_doc1', source: 'dato_docs', target: 'doc_taxid' },
    { id: 'e_doc2', source: 'dato_docs', target: 'doc_permiso' },
    { id: 'e_doc3', source: 'dato_docs', target: 'doc_pasaporte' },
    { id: 'e_doc4', source: 'dato_docs', target: 'doc_cedula' },
    { id: 'e_doc5', source: 'doc_taxid', target: 'sin_taxid', label: 'Si no tiene', style: { stroke: '#c62828' } },

    // Registrar en pool
    { id: 'e_pool1', source: 'dato_ingles', target: 'candidato_registrado' },
    { id: 'e_pool2', source: 'dato_transporte', target: 'candidato_registrado' },
    { id: 'e_pool3', source: 'sin_taxid', target: 'candidato_registrado' },
    { id: 'e_pool3b', source: 'doc_permiso', target: 'candidato_registrado' },
    { id: 'e_pool3c', source: 'doc_pasaporte', target: 'candidato_registrado' },
    { id: 'e_pool3d', source: 'doc_cedula', target: 'candidato_registrado' },

    // =============================================
    // Recepción de requisición
    // =============================================
    { id: 'e_req0', source: 'candidato_registrado', target: 'section_recepcion', label: 'Cuando hay vacante', style: { strokeDasharray: '8,4' } },
    { id: 'e_req1', source: 'section_recepcion', target: 'req_whatsapp' },
    { id: 'e_req2', source: 'section_recepcion', target: 'req_inspector' },
    { id: 'e_req3', source: 'section_recepcion', target: 'req_manager' },
    { id: 'e_req4', source: 'req_whatsapp', target: 'crear_req' },
    { id: 'e_req5', source: 'req_inspector', target: 'crear_req' },
    { id: 'e_req6', source: 'req_manager', target: 'crear_req' },
    { id: 'e_req7', source: 'crear_req', target: 'calc_priority' },

    // Prioridades
    { id: 'e_pri1', source: 'calc_priority', target: 'priority_green', label: '>120h' },
    { id: 'e_pri2', source: 'calc_priority', target: 'priority_yellow', label: '72-120h' },
    { id: 'e_pri3', source: 'calc_priority', target: 'priority_red', label: '<72h' },
    { id: 'e_pri4', source: 'priority_green', target: 'gen_serial' },
    { id: 'e_pri5', source: 'priority_yellow', target: 'gen_serial' },
    { id: 'e_pri6', source: 'priority_red', target: 'gen_serial' },

    // =============================================
    // Costos (paralelo a búsqueda)
    // =============================================
    { id: 'e_cost1', source: 'gen_serial', target: 'section_costos' },
    { id: 'e_cost2', source: 'section_costos', target: 'get_contract' },
    { id: 'e_cost3', source: 'get_contract', target: 'get_rates' },
    { id: 'e_cost4', source: 'get_rates', target: 'bill_rate' },
    { id: 'e_cost5', source: 'get_rates', target: 'pay_rate' },
    { id: 'e_cost6', source: 'get_rates', target: 'calc_cost' },
    { id: 'e_cost7', source: 'calc_cost', target: 'calc_margin' },
    { id: 'e_cost8', source: 'calc_margin', target: 'margin_ok' },
    { id: 'e_cost9', source: 'calc_margin', target: 'to_accounting', animated: true },

    // =============================================
    // Búsqueda en Pools (paralelo a costos)
    // =============================================
    { id: 'e_bus1', source: 'gen_serial', target: 'section_busqueda' },
    { id: 'e_bus2', source: 'section_busqueda', target: 'pool_disponibles' },
    { id: 'e_bus3', source: 'section_busqueda', target: 'pool_nuevos' },
    { id: 'e_bus4', source: 'pool_disponibles', target: 'filters' },
    { id: 'e_bus5', source: 'pool_nuevos', target: 'filters' },
    { id: 'e_bus6', source: 'filters', target: 'distance' },
    { id: 'e_bus7', source: 'filters', target: 'availability' },
    { id: 'e_bus8', source: 'filters', target: 'blacklist' },
    { id: 'e_bus9', source: 'distance', target: 'posicion_match' },
    { id: 'e_bus10', source: 'availability', target: 'experiencia_match' },
    { id: 'e_bus11', source: 'blacklist', target: 'experiencia_match' },
    { id: 'e_bus12', source: 'posicion_match', target: 'matches' },
    { id: 'e_bus13', source: 'experiencia_match', target: 'matches' },

    // Pool de espera también alimenta búsqueda
    { id: 'e_bus14', source: 'pool_espera', target: 'pool_nuevos', label: 'Revisar de nuevo', style: { strokeDasharray: '5,5' } },

    // =============================================
    // Asignación
    // =============================================
    { id: 'e_asig1', source: 'matches', target: 'section_asignacion' },
    { id: 'e_asig2', source: 'section_asignacion', target: 'llamar_candidato' },
    { id: 'e_asig3', source: 'llamar_candidato', target: 'emp_decision' },
    { id: 'e_asig4', source: 'emp_decision', target: 'accepts', label: 'Sí' },
    { id: 'e_asig5', source: 'emp_decision', target: 'rejects', label: 'No' },
    { id: 'e_asig6', source: 'rejects', target: 'section_busqueda', label: 'Buscar otro', style: { stroke: '#c62828' } },

    // Crear tarjeta (Paso 2)
    { id: 'e_tarj1', source: 'accepts', target: 'crear_tarjeta' },
    { id: 'e_tarj2', source: 'crear_tarjeta', target: 'tipo_nueva_fija' },
    { id: 'e_tarj3', source: 'crear_tarjeta', target: 'tipo_entrevista' },

    // Tablero 4 Trello (Paso 3)
    { id: 'e_trello1', source: 'crear_tarjeta', target: 'trello_tablero4' },
    { id: 'e_trello2', source: 'trello_tablero4', target: 'trello_pre_asign' },
    { id: 'e_trello3', source: 'trello_tablero4', target: 'trello_llego' },

    // =============================================
    // Onboarding
    // =============================================
    { id: 'e_onb1', source: 'trello_tablero4', target: 'section_onboarding' },
    { id: 'e_onb2', source: 'section_onboarding', target: 'msg_bienvenida' },
    { id: 'e_onb3', source: 'msg_bienvenida', target: 'inst_vestimenta' },
    { id: 'e_onb4', source: 'msg_bienvenida', target: 'inst_llegada' },
    { id: 'e_onb5', source: 'msg_bienvenida', target: 'inst_timesheet' },
    { id: 'e_onb6', source: 'msg_bienvenida', target: 'inst_cancelar' },
    { id: 'e_onb7', source: 'inst_vestimenta', target: 'beneficios' },
    { id: 'e_onb8', source: 'inst_llegada', target: 'beneficios' },
    { id: 'e_onb9', source: 'inst_timesheet', target: 'beneficios' },
    { id: 'e_onb10', source: 'inst_cancelar', target: 'beneficios' },
    { id: 'e_onb11', source: 'beneficios', target: 'regla_primer_dia' },
    { id: 'e_onb12', source: 'beneficios', target: 'regla_16pct' },
    { id: 'e_onb13', source: 'beneficios', target: 'inspector_visita' },

    // =============================================
    // Seguimiento
    // =============================================
    { id: 'e_seg1', source: 'regla_primer_dia', target: 'section_seguimiento' },
    { id: 'e_seg1b', source: 'regla_16pct', target: 'section_seguimiento' },
    { id: 'e_seg1c', source: 'inspector_visita', target: 'section_seguimiento' },
    { id: 'e_seg2', source: 'section_seguimiento', target: 'monitoreo_dia1' },
    { id: 'e_seg3', source: 'section_seguimiento', target: 'result_dia1' },
    { id: 'e_seg4', source: 'monitoreo_dia1', target: 'reportar_chat4' },
    { id: 'e_seg5', source: 'result_dia1', target: 'show', label: 'Sí' },
    { id: 'e_seg6', source: 'result_dia1', target: 'no_show', label: 'No' },

    // Se presentó
    { id: 'e_seg7', source: 'show', target: 'foto_id' },
    { id: 'e_seg8', source: 'foto_id', target: 'reporte_ingresos' },
    { id: 'e_seg9', source: 'reporte_ingresos', target: 'trello_tablero1' },

    // No se presentó
    { id: 'e_seg10', source: 'no_show', target: 'no_show_action' },
    { id: 'e_seg11', source: 'no_show_action', target: 'section_busqueda', label: 'Buscar reemplazo', style: { stroke: '#c62828', strokeDasharray: '5,5' } },

    // =============================================
    // Cierre
    // =============================================
    { id: 'e_cierre1', source: 'trello_tablero1', target: 'section_cierre' },
    { id: 'e_cierre2', source: 'section_cierre', target: 'req_completada' },
    { id: 'e_cierre3', source: 'section_cierre', target: 'req_fallida' },
    { id: 'e_cierre4', source: 'section_cierre', target: 'metricas' },
    { id: 'e_cierre5', source: 'req_completada', target: 'end' },
    { id: 'e_cierre6', source: 'req_fallida', target: 'end' },
  ]
}

export default requisicionRolFlow
