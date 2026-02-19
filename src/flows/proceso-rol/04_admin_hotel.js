const adminHotelRolFlow = {
  nodes: [
    // =============================================
    // INICIO
    // =============================================
    { id: 'start', type: 'input', position: { x: 500, y: 0 }, data: { label: '🏨 Manager Hotel\n(Cliente de Orange Staffing)\nPerspectiva del Hotel' }, className: 'node-hotel' },

    // =============================================
    // === SECCIÓN 0: ONBOARDING COMO CLIENTE ===
    // =============================================
    { id: 'section_onboarding', type: 'default', position: { x: 500, y: 130 }, data: { label: '🤝 ONBOARDING\nCOMO CLIENTE' }, className: 'node-hotel' },

    // Orange contacta al hotel
    { id: 'orange_contacta', type: 'default', position: { x: 300, y: 260 }, data: { label: '📞 Orange contacta\nal Hotel\n(vendedor/Silvia)' }, className: 'node-info' },
    { id: 'presentacion', type: 'default', position: { x: 500, y: 260 }, data: { label: '📊 Presentación\nPropuesta de Valor\nOrange Staffing' }, className: 'node-info' },
    { id: 'negociacion', type: 'default', position: { x: 700, y: 260 }, data: { label: '🤝 Negociación\nBill Rates por\ntipo de trabajador' }, className: 'node-info' },

    // Firma contrato
    { id: 'firma_contrato', type: 'default', position: { x: 500, y: 380 }, data: { label: '📄 Hotel Firma\nService Contract\n(términos y condiciones)' }, className: 'node-success' },

    // Hotel recibe acceso
    { id: 'recibe_credenciales', type: 'default', position: { x: 300, y: 500 }, data: { label: '🔐 Hotel Recibe\nCredenciales\n(email + link portal)' }, className: 'node-hotel' },

    // Capacitación
    { id: 'capacitacion', type: 'default', position: { x: 500, y: 500 }, data: { label: '📚 CAPACITACIÓN\n• Crear requisiciones\n• Evaluar trabajadores\n• Reportar horas\n• Contactos soporte' }, className: 'node-hotel' },

    // Configuración
    { id: 'config_usuarios', type: 'default', position: { x: 700, y: 500 }, data: { label: '⚙️ Hotel Configura\n• Crear usuarios (gerentes)\n• Definir supervisores\n• Estructura del hotel' }, className: 'node-hotel' },

    // Listo para operar
    { id: 'listo_operar', type: 'default', position: { x: 500, y: 630 }, data: { label: '✅ Hotel LISTO\npara Operar\n→ Primera Requisición' }, className: 'node-success' },

    // =============================================
    // === SECCIÓN 1: SOLICITAR PERSONAL ===
    // =============================================
    { id: 'section_solicitar', type: 'default', position: { x: 150, y: 780 }, data: { label: '📋 SOLICITAR\nPERSONAL' }, className: 'node-hotel' },
    { id: 'identificar_necesidad', type: 'default', position: { x: 50, y: 910 }, data: { label: '📊 Identificar\nNecesidad de Personal' }, className: 'node-info' },
    { id: 'definir_posicion', type: 'default', position: { x: 250, y: 910 }, data: { label: '👤 Definir Posición\ny Horario' }, className: 'node-info' },
    { id: 'definir_cantidad', type: 'default', position: { x: 250, y: 1030 }, data: { label: '📊 Definir Cantidad\nde Empleados' }, className: 'node-info' },
    { id: 'crear_requisicion', type: 'default', position: { x: 50, y: 1030 }, data: { label: '📋 Crear\nRequisición' }, className: 'node-hotel' },

    // Anticipación y prioridades
    { id: 'anticipacion', type: 'default', position: { x: 50, y: 1150 }, data: { label: '⏰ Anticipación\nRecomendada >120h' }, className: 'node-warning' },
    { id: 'prio_verde', type: 'default', position: { x: 250, y: 1110 }, data: { label: '🟢 >120h\nNormal' }, className: 'node-success' },
    { id: 'prio_amarillo', type: 'default', position: { x: 250, y: 1170 }, data: { label: '🟡 72-120h\nMedia' }, className: 'node-warning' },
    { id: 'prio_rojo', type: 'default', position: { x: 250, y: 1230 }, data: { label: '🔴 <72h\nUrgente' }, className: 'node-critical' },
    { id: 'nota_educacion', type: 'default', position: { x: 50, y: 1270 }, data: { label: '⚠️ Orange educa al hotel:\nrequisiciones <72h\ndificultan cobertura' }, className: 'node-warning' },

    // Canales de requisición
    { id: 'canal_app', type: 'default', position: { x: 450, y: 910 }, data: { label: '📱 Vía App\n(sistema)' }, className: 'node-info' },
    { id: 'canal_whatsapp', type: 'default', position: { x: 450, y: 1030 }, data: { label: '💬 Vía Chat 4\nRequisiciones\n(WhatsApp)' }, className: 'node-info' },
    { id: 'canal_inspector', type: 'default', position: { x: 450, y: 1150 }, data: { label: '👁️ Vía Inspector\nen visita al hotel' }, className: 'node-info' },

    // =============================================
    // === SECCIÓN 2: CONTRATO Y TARIFAS ===
    // =============================================
    { id: 'section_contrato', type: 'default', position: { x: 500, y: 780 }, data: { label: '📄 CONTRATO\nY TARIFAS' }, className: 'node-accounting' },
    { id: 'service_contract', type: 'default', position: { x: 650, y: 910 }, data: { label: '📄 Service Contract\nFirmado y Vigente' }, className: 'node-accounting' },
    { id: 'bill_rate', type: 'default', position: { x: 600, y: 1030 }, data: { label: '💰 Bill Rate\n~$19.58/hr\n(lo que Hotel paga)' }, className: 'node-hotel' },
    { id: 'margin_note', type: 'default', position: { x: 750, y: 1030 }, data: { label: '📊 Orange gestiona\ntodo el personal\ncon margen 30-35%' }, className: 'node-info' },
    { id: 'rates_posicion', type: 'default', position: { x: 650, y: 1150 }, data: { label: '💵 Rates por Posición:\nHousekeeper, Houseman,\nLaundry, Mantenimiento' }, className: 'node-info' },

    // =============================================
    // === SECCIÓN 3: RECIBIR EMPLEADOS ===
    // =============================================
    { id: 'section_recibir', type: 'default', position: { x: 900, y: 780 }, data: { label: '🤝 RECIBIR\nEMPLEADOS' }, className: 'node-success' },
    { id: 'emp_asignado', type: 'default', position: { x: 900, y: 910 }, data: { label: '👤 Empleado Asignado\nllega al Hotel\n(vestimenta negra)' }, className: 'node-info' },
    { id: 'emp_dice_orange', type: 'default', position: { x: 900, y: 1030 }, data: { label: '🗣️ "Vengo de parte\nde Orange Staffing\npara el puesto asignado"' }, className: 'node-info' },
    { id: 'inspector_onboard', type: 'default', position: { x: 900, y: 1150 }, data: { label: '🏆 Inspector visita\nhace Onboarding Día 1\n(formato ingreso)' }, className: 'node-quality' },
    { id: 'emp_trabaja', type: 'default', position: { x: 1050, y: 910 }, data: { label: '👔 Empleado\nTrabajando' }, className: 'node-success' },
    { id: 'primer_dia_nota', type: 'default', position: { x: 1050, y: 1030 }, data: { label: '📌 Primer día =\nEntrenamiento\n(política del hotel)' }, className: 'node-warning' },
    { id: 'tracking_emp', type: 'default', position: { x: 1050, y: 1150 }, data: { label: '📍 Tracking\nEmpleados Activos\nen su propiedad' }, className: 'node-info' },

    // =============================================
    // === SECCIÓN 3b: ENCUESTA DE SATISFACCIÓN ===
    // =============================================
    { id: 'section_encuesta', type: 'default', position: { x: 1200, y: 780 }, data: { label: '⭐ ENCUESTA DE\nSATISFACCIÓN' }, className: 'node-quality' },
    { id: 'inspector_visita', type: 'default', position: { x: 1200, y: 910 }, data: { label: '👁️ Inspector de\nCalidad visita\nel hotel' }, className: 'node-quality' },
    { id: 'encuesta_manager', type: 'default', position: { x: 1200, y: 1030 }, data: { label: '📋 Manager llena\nEncuesta de Satisfacción\nsobre servicio Orange' }, className: 'node-hotel' },
    { id: 'feedback_tipos', type: 'default', position: { x: 1200, y: 1150 }, data: { label: '💬 Feedback:\n• Calidad del personal\n• Puntualidad\n• Actitud/Servicio\n• Solicitudes especiales' }, className: 'node-info' },
    { id: 'feedback_orange', type: 'default', position: { x: 1350, y: 1030 }, data: { label: '📊 Feedback va a\nDirección Orange\n(mejora continua)' }, className: 'node-info' },
    { id: 'solicitudes_mgr', type: 'default', position: { x: 1350, y: 1150 }, data: { label: '📝 Solicitudes Mgr:\n• Ajuste contrato/rate\n• Cambio de personal\n• Más personal\n• Reubicación' }, className: 'node-hotel' },

    // =============================================
    // === SECCIÓN 4: REPORTE DE HORAS ===
    // =============================================
    { id: 'section_horas', type: 'default', position: { x: 200, y: 1420 }, data: { label: '⏰ REPORTE\nDE HORAS' }, className: 'node-critical' },
    { id: 'semana_laboral', type: 'default', position: { x: 50, y: 1550 }, data: { label: '📅 Semana Laboral\nDom-Sáb' }, className: 'node-info' },
    { id: 'empleados_ponchan', type: 'default', position: { x: 200, y: 1550 }, data: { label: '⏰ Empleados\nPonchan Entrada\ny Salida' }, className: 'node-info' },
    { id: 'hotel_tracking', type: 'default', position: { x: 350, y: 1550 }, data: { label: '🏨 Hotel Lleva\nTracking de Horas\n(su propio sistema)' }, className: 'node-hotel' },
    { id: 'acumular_horas', type: 'default', position: { x: 200, y: 1670 }, data: { label: '📊 Acumulación\nde Horas Semanales' }, className: 'node-info' },
    { id: 'deadline_mie', type: 'default', position: { x: 200, y: 1790 }, data: { label: '🔴 MIÉRCOLES\n11:59 PM\nDEADLINE ENVÍO TS' }, className: 'node-critical' },
    { id: 'subir_timesheet', type: 'default', position: { x: 200, y: 1910 }, data: { label: '📊 Subir Time Sheet\na Orange\n(vía App, no fotos)' }, className: 'node-hotel' },
    { id: 'desfase_nota', type: 'default', position: { x: 400, y: 1790 }, data: { label: '⚠️ DESFASE 1 SEMANA\nPaga semana anterior\n(1ra semana desfasada)' }, className: 'node-warning' },
    { id: 'inspector_recuerda', type: 'default', position: { x: 400, y: 1910 }, data: { label: '👁️ Inspector recuerda\nal Manager:\nLun-Mar enviar TS\nCierre Miércoles' }, className: 'node-quality' },

    // =============================================
    // === SECCIÓN 5: REPORTAR INCIDENTES ===
    // =============================================
    { id: 'section_incidentes', type: 'default', position: { x: 700, y: 1420 }, data: { label: '⚠️ REPORTAR\nINCIDENTES' }, className: 'node-warning' },
    { id: 'inc_calidad', type: 'default', position: { x: 600, y: 1550 }, data: { label: '📝 Problema de\nCalidad/Servicio' }, className: 'node-warning' },
    { id: 'inc_ausencia', type: 'default', position: { x: 750, y: 1550 }, data: { label: '❌ Ausencia /\nNo-Show' }, className: 'node-critical' },
    { id: 'inc_comportamiento', type: 'default', position: { x: 900, y: 1550 }, data: { label: '🔴 Problema de\nComportamiento' }, className: 'node-critical' },
    { id: 'notificar_orange', type: 'default', position: { x: 750, y: 1670 }, data: { label: '📞 Notificar a\nOrange Staffing' }, className: 'node-info' },
    { id: 'solicitar_reemplazo', type: 'default', position: { x: 750, y: 1790 }, data: { label: '🔄 Solicitar\nReemplazo' }, className: 'node-hotel' },

    // =============================================
    // === SECCIÓN 6: NO-SHOW / TERMINACIÓN ===
    // =============================================
    { id: 'section_noshow', type: 'default', position: { x: 700, y: 1950 }, data: { label: '🚨 NO-SHOW /\nTERMINACIÓN' }, className: 'node-critical' },

    // Hotel detecta no-show
    { id: 'detecta_noshow', type: 'default', position: { x: 550, y: 2080 }, data: { label: '🕗 Hotel detecta:\nEmpleado no llegó\n(ej: 8:30 AM sin ponchar)' }, className: 'node-critical' },
    { id: 'hotel_llama', type: 'default', position: { x: 750, y: 2080 }, data: { label: '📞 Hotel llama\na Orange:\n"Fulano no llegó"' }, className: 'node-hotel' },

    // Orange responde
    { id: 'orange_investiga', type: 'default', position: { x: 750, y: 2200 }, data: { label: '🔍 Orange investiga:\nReclutadora llama\nal empleado' }, className: 'node-info' },
    { id: 'razon_enfermo', type: 'default', position: { x: 550, y: 2320 }, data: { label: '🤒 "Estoy enfermo"\n→ Justificado' }, className: 'node-warning' },
    { id: 'razon_olvido', type: 'default', position: { x: 700, y: 2320 }, data: { label: '😅 "Olvidé"\n→ Advertencia' }, className: 'node-warning' },
    { id: 'razon_noquiere', type: 'default', position: { x: 850, y: 2320 }, data: { label: '🚫 "No quiero ir"\n→ Problema grave' }, className: 'node-critical' },
    { id: 'razon_noresponde', type: 'default', position: { x: 1000, y: 2320 }, data: { label: '📵 No responde\n→ 3 intentos\n+ SMS' }, className: 'node-critical' },

    // Reemplazo
    { id: 'orange_reemplazo', type: 'default', position: { x: 750, y: 2450 }, data: { label: '🔄 Orange busca\nREEMPLAZO urgente\n(pool por proximidad)' }, className: 'node-recruitment' },
    { id: 'notifica_hotel_reemplazo', type: 'default', position: { x: 550, y: 2450 }, data: { label: '📱 "Estamos enviando\nreemplazo en\nX minutos"' }, className: 'node-hotel' },

    // Consecuencias
    { id: 'consecuencias', type: 'default', position: { x: 950, y: 2450 }, data: { label: '⚖️ Consecuencias\npara el Empleado' }, className: 'node-warning' },
    { id: 'primera_vez', type: 'default', position: { x: 850, y: 2570 }, data: { label: '1️⃣ Primera vez:\nAdvertencia\n→ Afecta calificación' }, className: 'node-warning' },
    { id: 'segunda_vez', type: 'default', position: { x: 1000, y: 2570 }, data: { label: '2️⃣ Segunda vez\n(mismo mes):\nAdvertencia final\n+ Reunión' }, className: 'node-critical' },
    { id: 'tercera_vez', type: 'default', position: { x: 1150, y: 2570 }, data: { label: '3️⃣ Tercera vez:\nBLACKLIST\ntemporal o permanente' }, className: 'node-critical' },

    // Solicitar terminación
    { id: 'hotel_pide_cambio', type: 'default', position: { x: 550, y: 2570 }, data: { label: '🏨 Hotel puede\nsolicitar cambio\npermanente de\nempleado' }, className: 'node-hotel' },
    { id: 'orange_gestiona', type: 'default', position: { x: 550, y: 2690 }, data: { label: '👔 Orange gestiona:\n• Retiro de uniforme\n• Desactivar en Paychex\n• Asignar reemplazo fijo' }, className: 'node-info' },

    // =============================================
    // === SECCIÓN 7: FACTURACIÓN ===
    // =============================================
    { id: 'section_facturacion', type: 'default', position: { x: 200, y: 2080 }, data: { label: '🧾 FACTURACIÓN' }, className: 'node-accounting' },
    { id: 'recibir_invoice', type: 'default', position: { x: 100, y: 2200 }, data: { label: '🧾 Recibir Invoice\nde Orange (Jueves)\nbasado en horas reportadas' }, className: 'node-accounting' },
    { id: 'revisar_horas_fact', type: 'default', position: { x: 300, y: 2200 }, data: { label: '✅ Revisar:\nHoras facturadas\nvs Horas tracking hotel' }, className: 'node-info' },
    { id: 'discrepancia_fact', type: 'default', position: { x: 300, y: 2320 }, data: { label: '⚠️ ¿Discrepancia?\nNotificar a Orange\npara ajuste' }, className: 'node-warning' },
    { id: 'pago_net15', type: 'default', position: { x: 100, y: 2320 }, data: { label: '💳 Pago Net 15\n(15 días para pagar)' }, className: 'node-success' },
    { id: 'confirmar_servicio', type: 'default', position: { x: 200, y: 2450 }, data: { label: '✅ Confirmar\nCalidad del Servicio\nRecibido' }, className: 'node-success' },

    // =============================================
    // FIN
    // =============================================
    { id: 'end', type: 'output', position: { x: 500, y: 2790 }, data: { label: '🏁 Ciclo Continuo\nHotel ↔ Orange Staffing\n(semanal)' }, className: 'node-hotel' },
  ],

  edges: [
    // =============================================
    // Inicio → Onboarding
    // =============================================
    { id: 'e_start', source: 'start', target: 'section_onboarding' },

    // Onboarding como cliente
    { id: 'e_onb1', source: 'section_onboarding', target: 'orange_contacta' },
    { id: 'e_onb2', source: 'section_onboarding', target: 'presentacion' },
    { id: 'e_onb3', source: 'section_onboarding', target: 'negociacion' },
    { id: 'e_onb4', source: 'orange_contacta', target: 'presentacion' },
    { id: 'e_onb5', source: 'presentacion', target: 'negociacion' },
    { id: 'e_onb6', source: 'negociacion', target: 'firma_contrato' },
    { id: 'e_onb7', source: 'firma_contrato', target: 'recibe_credenciales' },
    { id: 'e_onb8', source: 'firma_contrato', target: 'capacitacion' },
    { id: 'e_onb9', source: 'firma_contrato', target: 'config_usuarios' },
    { id: 'e_onb10', source: 'recibe_credenciales', target: 'listo_operar' },
    { id: 'e_onb11', source: 'capacitacion', target: 'listo_operar' },
    { id: 'e_onb12', source: 'config_usuarios', target: 'listo_operar' },

    // Listo → Secciones operativas
    { id: 'e_op1', source: 'listo_operar', target: 'section_solicitar' },
    { id: 'e_op2', source: 'listo_operar', target: 'section_contrato' },
    { id: 'e_op3', source: 'listo_operar', target: 'section_recibir' },
    { id: 'e_op4', source: 'listo_operar', target: 'section_encuesta' },

    // =============================================
    // Solicitar personal
    // =============================================
    { id: 'e4', source: 'section_solicitar', target: 'identificar_necesidad' },
    { id: 'e5', source: 'identificar_necesidad', target: 'definir_posicion' },
    { id: 'e6', source: 'identificar_necesidad', target: 'crear_requisicion' },
    { id: 'e7', source: 'definir_posicion', target: 'definir_cantidad' },
    { id: 'e8', source: 'definir_cantidad', target: 'crear_requisicion', style: { strokeDasharray: '5,5' } },
    { id: 'e9', source: 'crear_requisicion', target: 'anticipacion' },
    { id: 'e10', source: 'anticipacion', target: 'prio_verde' },
    { id: 'e11', source: 'anticipacion', target: 'prio_amarillo' },
    { id: 'e12', source: 'anticipacion', target: 'prio_rojo' },
    { id: 'e12b', source: 'prio_rojo', target: 'nota_educacion', style: { stroke: '#c62828', strokeDasharray: '5,5' } },

    // Canales de requisición
    { id: 'e_canal1', source: 'crear_requisicion', target: 'canal_app' },
    { id: 'e_canal2', source: 'crear_requisicion', target: 'canal_whatsapp' },
    { id: 'e_canal3', source: 'crear_requisicion', target: 'canal_inspector' },

    // =============================================
    // Contrato
    // =============================================
    { id: 'e13', source: 'section_contrato', target: 'service_contract' },
    { id: 'e14', source: 'service_contract', target: 'bill_rate' },
    { id: 'e15', source: 'service_contract', target: 'margin_note', style: { strokeDasharray: '5,5' } },
    { id: 'e15b', source: 'bill_rate', target: 'rates_posicion' },

    // =============================================
    // Recibir empleados
    // =============================================
    { id: 'e16', source: 'section_recibir', target: 'emp_asignado' },
    { id: 'e17', source: 'emp_asignado', target: 'emp_dice_orange' },
    { id: 'e18', source: 'emp_dice_orange', target: 'inspector_onboard' },
    { id: 'e18b', source: 'emp_asignado', target: 'emp_trabaja' },
    { id: 'e19', source: 'emp_trabaja', target: 'primer_dia_nota', style: { strokeDasharray: '5,5' } },
    { id: 'e19b', source: 'emp_trabaja', target: 'tracking_emp', style: { strokeDasharray: '5,5' } },

    // Conexión a secciones inferiores
    { id: 'e20', source: 'emp_trabaja', target: 'section_horas' },
    { id: 'e21', source: 'emp_trabaja', target: 'section_incidentes', style: { strokeDasharray: '5,5' } },

    // =============================================
    // Encuesta de satisfacción
    // =============================================
    { id: 'e_enc1', source: 'section_encuesta', target: 'inspector_visita' },
    { id: 'e_enc2', source: 'inspector_visita', target: 'encuesta_manager' },
    { id: 'e_enc3', source: 'encuesta_manager', target: 'feedback_tipos' },
    { id: 'e_enc4', source: 'encuesta_manager', target: 'feedback_orange', animated: true },
    { id: 'e_enc5', source: 'feedback_tipos', target: 'solicitudes_mgr' },

    // =============================================
    // Reporte de horas
    // =============================================
    { id: 'e22', source: 'section_horas', target: 'semana_laboral' },
    { id: 'e23', source: 'semana_laboral', target: 'empleados_ponchan' },
    { id: 'e24', source: 'empleados_ponchan', target: 'hotel_tracking' },
    { id: 'e25', source: 'empleados_ponchan', target: 'acumular_horas' },
    { id: 'e26', source: 'hotel_tracking', target: 'acumular_horas' },
    { id: 'e27', source: 'acumular_horas', target: 'deadline_mie', animated: true },
    { id: 'e28', source: 'deadline_mie', target: 'subir_timesheet' },
    { id: 'e29', source: 'deadline_mie', target: 'desfase_nota', style: { strokeDasharray: '5,5' } },
    { id: 'e29b', source: 'subir_timesheet', target: 'inspector_recuerda', style: { strokeDasharray: '5,5' } },

    // =============================================
    // Incidentes
    // =============================================
    { id: 'e30', source: 'section_incidentes', target: 'inc_calidad' },
    { id: 'e31', source: 'section_incidentes', target: 'inc_ausencia' },
    { id: 'e32', source: 'section_incidentes', target: 'inc_comportamiento' },
    { id: 'e33', source: 'inc_calidad', target: 'notificar_orange' },
    { id: 'e34', source: 'inc_ausencia', target: 'notificar_orange' },
    { id: 'e35', source: 'inc_comportamiento', target: 'notificar_orange' },
    { id: 'e36', source: 'notificar_orange', target: 'solicitar_reemplazo' },
    { id: 'e36b', source: 'solicitar_reemplazo', target: 'section_noshow' },

    // =============================================
    // No-Show / Terminación
    // =============================================
    { id: 'e_ns1', source: 'section_noshow', target: 'detecta_noshow' },
    { id: 'e_ns2', source: 'section_noshow', target: 'hotel_llama' },
    { id: 'e_ns3', source: 'detecta_noshow', target: 'hotel_llama' },
    { id: 'e_ns4', source: 'hotel_llama', target: 'orange_investiga' },

    // Razones
    { id: 'e_ns5', source: 'orange_investiga', target: 'razon_enfermo', label: 'Justificado' },
    { id: 'e_ns6', source: 'orange_investiga', target: 'razon_olvido', label: 'Advertencia' },
    { id: 'e_ns7', source: 'orange_investiga', target: 'razon_noquiere', label: 'Grave' },
    { id: 'e_ns8', source: 'orange_investiga', target: 'razon_noresponde', label: 'Sin contacto' },

    // Reemplazo
    { id: 'e_ns9', source: 'orange_investiga', target: 'orange_reemplazo', animated: true },
    { id: 'e_ns10', source: 'orange_reemplazo', target: 'notifica_hotel_reemplazo', animated: true },

    // Consecuencias
    { id: 'e_ns11', source: 'orange_investiga', target: 'consecuencias' },
    { id: 'e_ns12', source: 'consecuencias', target: 'primera_vez' },
    { id: 'e_ns13', source: 'consecuencias', target: 'segunda_vez' },
    { id: 'e_ns14', source: 'consecuencias', target: 'tercera_vez' },

    // Solicitar cambio permanente
    { id: 'e_ns15', source: 'notifica_hotel_reemplazo', target: 'hotel_pide_cambio', style: { strokeDasharray: '5,5' } },
    { id: 'e_ns16', source: 'hotel_pide_cambio', target: 'orange_gestiona' },

    // =============================================
    // Facturación
    // =============================================
    { id: 'e_f1', source: 'subir_timesheet', target: 'section_facturacion', label: 'Horas → Invoice', style: { strokeDasharray: '8,4' } },
    { id: 'e37', source: 'section_facturacion', target: 'recibir_invoice' },
    { id: 'e37b', source: 'section_facturacion', target: 'revisar_horas_fact' },
    { id: 'e38', source: 'recibir_invoice', target: 'pago_net15' },
    { id: 'e38b', source: 'revisar_horas_fact', target: 'discrepancia_fact' },
    { id: 'e39', source: 'discrepancia_fact', target: 'recibir_invoice', label: 'Ajuste', style: { strokeDasharray: '5,5' } },
    { id: 'e40', source: 'pago_net15', target: 'confirmar_servicio' },

    // =============================================
    // Hacia el fin (ciclo continuo)
    // =============================================
    { id: 'e_end1', source: 'confirmar_servicio', target: 'end' },
    { id: 'e_end2', source: 'orange_gestiona', target: 'end' },
  ]
}

export default adminHotelRolFlow
