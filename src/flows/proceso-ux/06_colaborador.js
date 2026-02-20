// ═══════════════════════════════════════════════════════════════════════
// USER EXPERIENCE: COLABORADOR / TRABAJADOR ORANGE
// Pantalla por pantalla: todo lo que ve y hace el colaborador en la App
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
//   1. Descubrimiento y Descarga
//   2. Registro y Datos Personales
//   3. Subir Documentos (OCR)
//   4. Gates y Progreso (30%/60%/100%)
//   5. Matching y Aceptar Trabajo
//   6. Onboarding y Primer Día
//   7. Ponchado Diario (GPS)
//   8. Nómina y Pay Stub
//   9. Solicitudes (9 tipos)
//  10. Vacaciones
//  11. No-Show y Emergencias
//  12. Cuenta Bancaria
//  13. Injury Report
//  14. Retención y Fin de Asignación
//  15. Perfil y Estado
//
// ═══════════════════════════════════════════════════════════════════════

const colaboradorUXFlow = {
  nodes: [
    // ── INICIO ──
    { id: 'start', type: 'input', position: { x: 500, y: 0 }, data: { label: '📱 App Orange\nExperiencia Colaborador\nPantalla por Pantalla' }, className: 'node-ux-section' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 1: DESCUBRIMIENTO Y DESCARGA
    // ═══════════════════════════════════════════════════════
    { id: 's1_header', type: 'default', position: { x: 50, y: 150 }, data: { label: '📲 1. DESCUBRIMIENTO\nY DESCARGA' }, className: 'node-ux-section' },

    { id: 's1_canal_fb', type: 'default', position: { x: -100, y: 300 }, data: { label: '📱 Canal Facebook:\nVe anuncio →\n"Trabajo cerca de ti\nen hoteles. Aplica hoy"\n→ Tap en anuncio' }, className: 'node-ux-screen' },

    { id: 's1_canal_sms', type: 'default', position: { x: 70, y: 300 }, data: { label: '💬 Canal SMS:\nRecibe mensaje:\n"Hola [nombre], hay\ntrabajo en [zona].\nDescarga: [link]"' }, className: 'node-ux-screen' },

    { id: 's1_canal_ref', type: 'default', position: { x: 240, y: 300 }, data: { label: '👥 Canal Referido:\nCompañero comparte\ncódigo QR o link\n"Gana bonus por\nreferir amigos"' }, className: 'node-ux-screen' },

    { id: 's1_landing', type: 'default', position: { x: 70, y: 460 }, data: { label: '🌐 Landing Page:\n• Logo Orange\n• "Trabaja en hoteles\n  cerca de ti"\n• Beneficios (3 bullets)\n• [Descargar App] botón\n• App Store / Play Store' }, className: 'node-ux-screen' },

    { id: 's1_descarga', type: 'default', position: { x: 70, y: 640 }, data: { label: '📥 App Store:\nDescargar Orange App\n→ Instalar\n→ Abrir por primera vez' }, className: 'node-ux-action' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 2: REGISTRO Y DATOS PERSONALES
    // ═══════════════════════════════════════════════════════
    { id: 's2_header', type: 'default', position: { x: 50, y: 810 }, data: { label: '📝 2. REGISTRO Y\nDATOS PERSONALES' }, className: 'node-ux-section' },

    { id: 's2_splash', type: 'default', position: { x: -100, y: 960 }, data: { label: '🍊 Splash Screen:\nLogo Orange\n"Tu puente al trabajo\nen hoteles"\n→ Auto-avanza 2s' }, className: 'node-ux-screen' },

    { id: 's2_bienvenida', type: 'default', position: { x: 70, y: 960 }, data: { label: '👋 Pantalla Bienvenida:\n3 slides onboarding:\n1) "Encuentra trabajo"\n2) "Cobra cada viernes"\n3) "Crece profesionalmente"\n→ [Comenzar] botón' }, className: 'node-ux-screen' },

    { id: 's2_crear_cuenta', type: 'default', position: { x: 240, y: 960 }, data: { label: '🔐 Crear Cuenta:\nCampos:\n• Teléfono (pre-llenado\n  si vino por SMS)\n• Código verificación SMS\n→ [Verificar]' }, className: 'node-ux-form' },

    { id: 's2_system_verify', type: 'default', position: { x: 240, y: 1120 }, data: { label: '⚙️ Sistema verifica\nteléfono + crea cuenta\n+ pre-llena datos\nsi hay info del SMS\no referido' }, className: 'node-ux-system' },

    { id: 's2_form_personal', type: 'default', position: { x: -100, y: 1120 }, data: { label: '📋 Datos Personales:\n• Nombre completo*\n• Fecha nacimiento*\n• Dirección completa*\n  (autocomplete Google)\n• Email\n• Idioma (Español/Inglés)\n• Transporte (Sí/No/Bus)\n→ Validación real-time\n→ [Siguiente]' }, className: 'node-ux-form' },

    { id: 's2_form_empleo', type: 'default', position: { x: 70, y: 1120 }, data: { label: '💼 Info de Empleo:\n• Tipo: W2 o 1099\n  (explicación tooltip)\n• Experiencia previa:\n  □ Housekeeping\n  □ Houseman\n  □ Laundry\n  □ Mantenimiento\n• Disponibilidad:\n  □ L □ M □ Mi □ J □ V □ S □ D\n→ [Siguiente]' }, className: 'node-ux-form' },

    { id: 's2_form_pago', type: 'default', position: { x: -100, y: 1330 }, data: { label: '🏦 Método de Pago:\n• Transferencia ACH\n  → Routing Number*\n  → Account Number*\n  → Foto talón cheque\n• O: Cheque por correo\n  → Dirección envío\n→ [Guardar]' }, className: 'node-ux-form' },

    { id: 's2_progreso', type: 'default', position: { x: 70, y: 1330 }, data: { label: '📊 Barra Progreso:\n"Tu perfil: 45%"\n████████░░░░░░░\nSecciones completadas\ncon ✅ y pendientes ⬜\n→ Tap para ir a\ncada sección' }, className: 'node-ux-screen' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 3: SUBIR DOCUMENTOS (OCR)
    // ═══════════════════════════════════════════════════════
    { id: 's3_header', type: 'default', position: { x: 50, y: 1510 }, data: { label: '📷 3. SUBIR\nDOCUMENTOS' }, className: 'node-ux-section' },

    { id: 's3_docs_lista', type: 'default', position: { x: -100, y: 1660 }, data: { label: '📋 Lista Documentos:\n✅ ID (obligatorio)\n⬜ Tax ID / SSN\n⬜ Permiso trabajo\n⬜ Pasaporte\nCada uno con estado:\n🟢 Verificado\n🟡 Pendiente\n🔴 Falta' }, className: 'node-ux-screen' },

    { id: 's3_camara', type: 'default', position: { x: 70, y: 1660 }, data: { label: '📷 Cámara OCR:\nMarco guía para doc:\n"Coloca tu ID dentro\ndel recuadro"\n→ Auto-captura cuando\ndetecta documento\n→ Flash auto si oscuro' }, className: 'node-ux-screen' },

    { id: 's3_ocr_process', type: 'default', position: { x: 240, y: 1660 }, data: { label: '⚙️ OCR Procesando:\nSpinner + "Leyendo\ntu documento..."\n→ Extrae: nombre,\nnúmero, expiración\n→ Auto-llena campos' }, className: 'node-ux-system' },

    { id: 's3_confirmar', type: 'default', position: { x: 70, y: 1830 }, data: { label: '✅ Confirmar Datos:\n"Encontramos esta info:\nNombre: [X]\nNúmero: [X]\nExpira: [X]"\n→ [Correcto] [Editar]\n→ Si edita: campos\neditables inline' }, className: 'node-ux-decision' },

    { id: 's3_sin_taxid', type: 'default', position: { x: 240, y: 1830 }, data: { label: '⚠️ Sin Tax ID:\n"No tienes Tax ID?\nSe retendrá 16% de\nimpuestos hasta que\nlo proporciones.\nPuedes agregarlo\ndespués."\n→ [Entendido] [Agregar]' }, className: 'node-ux-feedback' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 4: GATES Y PROGRESO
    // ═══════════════════════════════════════════════════════
    { id: 's4_header', type: 'default', position: { x: 500, y: 150 }, data: { label: '🚦 4. GATES Y\nPROGRESO' }, className: 'node-ux-section' },

    { id: 's4_home_incompleto', type: 'default', position: { x: 400, y: 300 }, data: { label: '🏠 Home (Incompleto):\nBanner rojo arriba:\n"Completa tu perfil\npara poder trabajar"\n████░░░░░░ 35%\n→ [Completar ahora]\nSin acceso a otras\nsecciones (bloqueadas)' }, className: 'node-ux-screen' },

    { id: 's4_push_24h', type: 'default', position: { x: 600, y: 300 }, data: { label: '🔔 Push 24h:\n"Te faltan X datos\npara completar tu\nperfil. Solo toma\n5 minutos!"\n→ Tap abre sección\npendiente' }, className: 'node-ux-feedback' },

    { id: 's4_push_48h', type: 'default', position: { x: 600, y: 450 }, data: { label: '🔔 Push 48h:\n"Urgente: completa\ntu perfil o no\npodrás cobrar.\nTe ayudamos?"\n→ [Completar] [Llamar]' }, className: 'node-ux-feedback' },

    { id: 's4_gate30', type: 'default', position: { x: 400, y: 450 }, data: { label: '🔴 Gate 30%:\nPantalla bloqueo:\n"Necesitas completar\nal menos estos datos\npara poder trabajar:\n□ ID\n□ Nombre completo\n□ Teléfono verificado"\n→ [Ir a completar]' }, className: 'node-ux-screen' },

    { id: 's4_gate60', type: 'default', position: { x: 400, y: 610 }, data: { label: '🟡 Gate 60%:\n"Puedes trabajar!\nPero necesitas método\nde pago para cobrar.\nTe quedan 72h."\n████████░░░ 62%\n→ [Agregar pago]' }, className: 'node-ux-screen' },

    { id: 's4_gate100', type: 'default', position: { x: 600, y: 610 }, data: { label: '🟢 Gate 100%:\n"Perfil completo!\nEstás listo para\ntrabajar y cobrar."\n██████████ 100%\n🎉 Confetti animation\n→ Home desbloqueado' }, className: 'node-ux-feedback' },

    { id: 's4_push_72h', type: 'default', position: { x: 600, y: 760 }, data: { label: '🚨 Push 72h CRÍTICO:\n"ÚLTIMO DÍA para\ncompletar tu perfil.\nSin esto NO puedes\ncobrar esta semana."\n→ [Completar AHORA]' }, className: 'node-ux-feedback' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 5: MATCHING Y ACEPTAR TRABAJO
    // ═══════════════════════════════════════════════════════
    { id: 's5_header', type: 'default', position: { x: 500, y: 900 }, data: { label: '🎯 5. MATCHING Y\nACEPTAR TRABAJO' }, className: 'node-ux-section' },

    { id: 's5_push_match', type: 'default', position: { x: 400, y: 1050 }, data: { label: '🔔 Push Notificación:\n"Hay trabajo disponible\nen Hotel [X] a [Y] min\nde tu ubicación.\nVer detalles →"\n→ Tap abre detalle' }, className: 'node-ux-feedback' },

    { id: 's5_detalle_hotel', type: 'default', position: { x: 600, y: 1050 }, data: { label: '🏨 Detalle Oferta:\n• Hotel: [Nombre]\n• Posición: Housekeeping\n• Horario: 8AM-4PM\n• Rate: $15/hr\n• Distancia: 12 min\n• Mapa con ruta\n• Rating hotel: ⭐4.2\n→ [Aceptar] [Rechazar]' }, className: 'node-ux-screen' },

    { id: 's5_aceptar', type: 'default', position: { x: 500, y: 1210 }, data: { label: '✅ Aceptar:\nConfirmación inmediata:\n"Asignado a Hotel [X]\nDesde [fecha]\nTe esperamos a las\n8:00 AM"\n→ Auto-agrega a\ncalendario del teléfono' }, className: 'node-ux-feedback' },

    { id: 's5_rechazar', type: 'default', position: { x: 700, y: 1210 }, data: { label: '❌ Rechazar:\n"¿Por qué rechazas?"\n○ Muy lejos\n○ Horario no me sirve\n○ Rate muy bajo\n○ Otro: [________]\n→ [Enviar]\n→ Vuelve a pool' }, className: 'node-ux-form' },

    { id: 's5_instrucciones', type: 'default', position: { x: 500, y: 1370 }, data: { label: '📋 Instrucciones Día 1:\n• Vestir de negro\n• Llegar 10 min antes\n• Preguntar por [Mgr]\n• "Vengo de Orange"\n• Llevar: ID, teléfono\n→ Checklist tappeable' }, className: 'node-ux-screen' },

    { id: 's5_sys_notif_insp', type: 'default', position: { x: 700, y: 1370 }, data: { label: '⚙️ Sistema notifica:\n→ Inspector (Trello)\n→ Hotel (portal)\n→ Reclutadora (dashboard)\n"[Nombre] asignado\na [Hotel], inicia [fecha]"' }, className: 'node-ux-system' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 6: ONBOARDING Y PRIMER DÍA
    // ═══════════════════════════════════════════════════════
    { id: 's6_header', type: 'default', position: { x: 50, y: 2020 }, data: { label: '🤝 6. ONBOARDING\nY PRIMER DÍA' }, className: 'node-ux-section' },

    { id: 's6_pre_video', type: 'default', position: { x: -100, y: 2170 }, data: { label: '🎬 Video Tutorial:\n(antes del día 1)\n"Bienvenido a Orange"\n• Qué esperar día 1\n• Cómo ponchar\n• Reglas básicas\n⏱️ 3 min | ▶️ Play\n→ Marca como visto' }, className: 'node-ux-screen' },

    { id: 's6_checklist', type: 'default', position: { x: 70, y: 2170 }, data: { label: '✅ Checklist Pre-Día 1:\n□ Vi el video tutorial\n□ Tengo ropa negra\n□ Conozco la dirección\n□ Configuré alarma\n□ Tengo mi ID\nProgreso: 3/5\n→ Tap cada item' }, className: 'node-ux-screen' },

    { id: 's6_confirmar', type: 'default', position: { x: 240, y: 2170 }, data: { label: '📱 Confirmar Asistencia:\n"¿Confirmas que\niras mañana?"\n→ [Sí, ahí estaré]\n→ [Tengo un problema]\nSi problema → chat\ncon reclutadora' }, className: 'node-ux-decision' },

    { id: 's6_dia1_llegada', type: 'default', position: { x: -100, y: 2350 }, data: { label: '📍 Día 1 - Llegada:\nGPS detecta que llegó\nal hotel (geofencing)\n→ "Bienvenido a\n[Hotel]. Que tengas\nun gran primer día!"\n→ Auto-notifica\ninspector' }, className: 'node-ux-feedback' },

    { id: 's6_dia1_inspector', type: 'default', position: { x: 70, y: 2350 }, data: { label: '🤝 Con Inspector:\nInspector llega:\n• Formato ingreso\n  (firma digital en app)\n• Tour del hotel\n• Presentar a manager\n→ App muestra checklist\ndel inspector' }, className: 'node-ux-screen' },

    { id: 's6_eval_dia5', type: 'default', position: { x: 240, y: 2350 }, data: { label: '🔔 Push Día 5:\n"Tu inspector te\nevaluará hoy.\n4 áreas: desempeño,\nactitud, puntualidad,\ncalidad de trabajo.\n→ [Ver detalles]"' }, className: 'node-ux-feedback' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 7: PONCHADO DIARIO (GPS)
    // ═══════════════════════════════════════════════════════
    { id: 's7_header', type: 'default', position: { x: 500, y: 1530 }, data: { label: '📍 7. PONCHADO\nDIARIO GPS' }, className: 'node-ux-section' },

    { id: 's7_home', type: 'default', position: { x: 400, y: 1680 }, data: { label: '🏠 Home Screen:\nHoy: Hotel [X]\nTurno: 8:00 - 16:00\n📍 A 12 min (mapa)\n━━━━━━━━━━━━\nHoras esta semana: 24h\n💰 Estimado: $360\n→ Botón grande:\n[PONCHAR ENTRADA]' }, className: 'node-ux-screen' },

    { id: 's7_geofence', type: 'default', position: { x: 600, y: 1680 }, data: { label: '⚙️ Geofencing:\nAl acercarse al hotel\n(radio ~200m):\n→ Auto-detecta\n→ Habilita botón\nponchado\n(gris si está lejos)' }, className: 'node-ux-system' },

    { id: 's7_punch_in', type: 'default', position: { x: 400, y: 1850 }, data: { label: '👆 Punch-In:\n[PONCHAR ENTRADA]\n→ Huella digital\n  (o Face ID)\n→ GPS verificado ✅\n→ "Entrada registrada\n  7:58 AM\n  Hotel [X]"\n→ Cronómetro inicia' }, className: 'node-ux-action' },

    { id: 's7_durante_turno', type: 'default', position: { x: 600, y: 1850 }, data: { label: '⏱️ Durante Turno:\nCronómetro visible:\n"4h 23m trabajadas"\n━━━━━━━━━━━━\nSi es M Lav:\n[Registrar Habitación]\n→ Campo número\n→ Marca completada' }, className: 'node-ux-screen' },

    { id: 's7_mlav_form', type: 'default', position: { x: 750, y: 1850 }, data: { label: '🛏️ M Lav Digital:\nLista habitaciones:\n□ #201 ○ Limpiada\n□ #203 ○ Limpiada\n□ #205 ○ Pendiente\n→ Tap = completada\n→ Foto opcional\nTotal: 12/15' }, className: 'node-ux-form' },

    { id: 's7_punch_out', type: 'default', position: { x: 400, y: 2020 }, data: { label: '👆 Punch-Out:\n[PONCHAR SALIDA]\n→ Huella/Face ID\n→ "Salida registrada\n  4:02 PM"\n→ Resumen:\n  Total hoy: 8.07h\n  Semana: 32.07h' }, className: 'node-ux-action' },

    { id: 's7_push_olvido', type: 'default', position: { x: 600, y: 2020 }, data: { label: '🔔 Olvidó Ponchar:\n30 min después:\n"¿Ya saliste del\ntrabajo? No olvidemos\ntu salida."\n→ [Ponchar ahora]\n→ [Sigo trabajando]' }, className: 'node-ux-feedback' },

    { id: 's7_resumen_dia', type: 'default', position: { x: 500, y: 2180 }, data: { label: '📊 Resumen del Día:\n━━━━━━━━━━━━━\nHotel: [X]\nEntrada: 7:58 AM\nSalida: 4:02 PM\nTotal: 8h 4min\n━━━━━━━━━━━━━\nSemana: 32h / $480\n→ [OK] [Reportar error]' }, className: 'node-ux-screen' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 8: NÓMINA Y PAY STUB
    // ═══════════════════════════════════════════════════════
    { id: 's8_header', type: 'default', position: { x: 950, y: 150 }, data: { label: '💰 8. NÓMINA Y\nPAY STUB' }, className: 'node-ux-section' },

    { id: 's8_push_pago', type: 'default', position: { x: 850, y: 300 }, data: { label: '🔔 Push Viernes 5AM:\n"Tu pago de $587.40\nha sido depositado\nen tu cuenta ****1234"\n→ Tap abre desglose' }, className: 'node-ux-feedback' },

    { id: 's8_paystub', type: 'default', position: { x: 1050, y: 300 }, data: { label: '📄 Pay Stub:\n━━━━━━━━━━━━━\nSemana: Ene 13-19\nHoras: 40h\nRate: $15.00/hr\n━━━━━━━━━━━━━\nBruto:      $600.00\nImpuestos: -$48.00\nUniforme:  -$30.00\nSeguro:     -$12.00\n━━━━━━━━━━━━━\nNeto:      $510.00\nMétodo: ACH ****1234\n→ [Descargar PDF]' }, className: 'node-ux-screen' },

    { id: 's8_historial', type: 'default', position: { x: 850, y: 510 }, data: { label: '📜 Historial Pagos:\nLista scrolleable:\n• Ene 13-19: $510.00 ✅\n• Ene 6-12: $487.20 ✅\n• Dic 30-5: $392.00 ✅\n→ Tap = ver desglose\n→ Filtrar por mes' }, className: 'node-ux-screen' },

    { id: 's8_config_pago', type: 'default', position: { x: 1050, y: 510 }, data: { label: '⚙️ Config Método Pago:\nActual: ACH ****1234\n  Estado: 🟢 Validado\n━━━━━━━━━━━━━\n→ [Cambiar cuenta]\n  (requiere aprobación\n  de Dirección)\n→ [Cambiar a cheque]' }, className: 'node-ux-screen' },

    { id: 's8_validacion', type: 'default', position: { x: 950, y: 670 }, data: { label: '💵 Validación $0.01:\n"Enviamos $0.01 a\ntu cuenta. Ingresa\nel monto recibido:"\n→ Campo: $[_____]\n→ [Confirmar]\nSi error → reintenta\no llamar soporte' }, className: 'node-ux-form' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 9: SOLICITUDES (9 TIPOS)
    // ═══════════════════════════════════════════════════════
    { id: 's9_header', type: 'default', position: { x: 950, y: 830 }, data: { label: '📋 9. SOLICITUDES\n(9 TIPOS)' }, className: 'node-ux-section' },

    { id: 's9_menu', type: 'default', position: { x: 850, y: 980 }, data: { label: '📋 Menú Solicitudes:\nLista de 9 opciones:\n• Ajuste de Pago\n• Reubicación\n• Más Horas\n• Discrepancia Pago\n• Compensación Anual\n• Tiempo Libre\n• 40 Horas Off\n• Reembolso 16%\n• Ajuste Contrato\n→ Tap cada una' }, className: 'node-ux-screen' },

    { id: 's9_ajuste_pago', type: 'default', position: { x: 1100, y: 980 }, data: { label: '💰 Ajuste de Pago:\n• Semana afectada*\n  (dropdown últimas 4)\n• Monto esperado*: $[__]\n• Monto recibido*: $[__]\n• Diferencia: (auto-calc)\n• Razón*: [________]\n• Evidencia: [📷 Adjuntar]\n→ [Enviar a Contabilidad]' }, className: 'node-ux-form' },

    { id: 's9_reubicacion', type: 'default', position: { x: 1300, y: 980 }, data: { label: '📍 Reubicación:\n• Zona preferida*:\n  (mapa interactivo +\n  radio de búsqueda)\n• Razón*:\n  ○ Distancia\n  ○ Problemas hotel\n  ○ Horario\n  ○ Otro: [____]\n• Fecha deseada: [📅]\n→ [Enviar a Reclutadora]' }, className: 'node-ux-form' },

    { id: 's9_mas_horas', type: 'default', position: { x: 850, y: 1180 }, data: { label: '⏰ Más Horas:\n• Horas actuales/sem:\n  (auto-llenado)\n• Horas deseadas: [__]\n• Disponibilidad extra:\n  □ L □ M □ Mi □ J □ V\n  □ S □ D\n• Horarios: [____]\n→ [Enviar a Reclutadora]' }, className: 'node-ux-form' },

    { id: 's9_discrepancia', type: 'default', position: { x: 1050, y: 1180 }, data: { label: '⚠️ Discrepancia Pago:\n• Semana*: (dropdown)\n• Horas registradas:\n  (auto del sistema)\n• Horas que trabajé*: [__]\n• Diferencia: (auto-calc)\n• Descripción*: [_____]\n• Evidencia: [📷]\n→ [Enviar a Contabilidad]' }, className: 'node-ux-form' },

    { id: 's9_compensacion', type: 'default', position: { x: 1250, y: 1180 }, data: { label: '📅 Compensación Anual:\n• Año fiscal*: [____]\n• Tipo: (auto W2/1099)\n• Docs requeridos:\n  listados auto\n→ Info-only screen\n  + enlace a soporte\n→ [Contactar RRHH]' }, className: 'node-ux-screen' },

    { id: 's9_tiempo_libre', type: 'default', position: { x: 850, y: 1380 }, data: { label: '🏖️ Tiempo Libre:\n• Fecha inicio*: [📅]\n• Fecha fin*: [📅]\n• Razón*:\n  ○ Personal\n  ○ Médica\n  ○ Familiar\n  ○ Otro: [____]\n• Evidencia: [📷]\n  (si médica: obligatorio)\n→ [Enviar solicitud]' }, className: 'node-ux-form' },

    { id: 's9_40hrs', type: 'default', position: { x: 1050, y: 1380 }, data: { label: '⏳ 40 Horas Off:\n• Estado actual:\n  "Llevas 38h esta sem"\n• Razón de exceso*:\n  [_______________]\n• Aprobado por hotel:\n  ○ Sí ○ No\n→ [Solicitar excepción]\n→ Va a Dirección' }, className: 'node-ux-form' },

    { id: 's9_16pct', type: 'default', position: { x: 1250, y: 1380 }, data: { label: '💸 Reembolso 16%:\n• Estado: "Se retiene\n  16% desde [fecha]"\n• Monto acumulado: $[X]\n• Entregar Tax ID:\n  [📷 Tomar foto]\n  → OCR auto-verifica\n• Deadline: [fecha]\n→ [Enviar Tax ID]' }, className: 'node-ux-form' },

    { id: 's9_contrato', type: 'default', position: { x: 1050, y: 1560 }, data: { label: '📄 Ajuste Contrato:\n• Tipo cambio*:\n  ○ Cambio de horario\n  ○ Cambio de posición\n  ○ Cambio tipo contrato\n• Descripción*: [____]\n• Fecha deseada: [📅]\n→ [Enviar a RRHH]' }, className: 'node-ux-form' },

    { id: 's9_tracking', type: 'default', position: { x: 850, y: 1560 }, data: { label: '📊 Tracking Solicitudes:\nMis solicitudes:\n• #SOL-142 Ajuste Pago\n  🟡 En revisión\n  Enviada: hace 2 días\n  SLA: 3 días\n• #SOL-139 Reubicación\n  🟢 Aprobada\n→ Tap = ver detalle\n→ Timeline de estados' }, className: 'node-ux-screen' },

    { id: 's9_detalle_sol', type: 'default', position: { x: 1050, y: 1720 }, data: { label: '📄 Detalle Solicitud:\n#SOL-142\nTipo: Ajuste de Pago\nEstado: 🟡 En revisión\n━━━━━━━━━━━━━\nTimeline:\n✅ Enviada (Lun 10:30)\n✅ Recibida (Lun 10:31)\n🔄 En revisión (Mar)\n⬜ Resuelta\n━━━━━━━━━━━━━\n→ [Agregar comentario]\n→ [Cancelar solicitud]' }, className: 'node-ux-screen' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 10: VACACIONES
    // ═══════════════════════════════════════════════════════
    { id: 's10_header', type: 'default', position: { x: 950, y: 1880 }, data: { label: '🌴 10. VACACIONES' }, className: 'node-ux-section' },

    { id: 's10_contador', type: 'default', position: { x: 850, y: 2030 }, data: { label: '🌴 Mi Vacaciones:\nContador circular:\n━━━━━━━━━━━━━\n38 de 52 semanas\n██████████░░░ 73%\n"Te faltan 14 semanas"\n━━━━━━━━━━━━━\nPromedio hrs: 32h/sem\nHoras vacación: 32h\n→ [Solicitar vacaciones]\n(habilitado al llegar\na 52 semanas)' }, className: 'node-ux-screen' },

    { id: 's10_solicitar', type: 'default', position: { x: 1050, y: 2030 }, data: { label: '📋 Solicitar Vacaciones:\n• Horas disponibles: 32h\n• Fecha inicio*: [📅]\n• Fecha fin*: [📅]\n• Horas a usar*: [__]\n  (max: 32h)\n• Notas: [________]\n━━━━━━━━━━━━━\n"Requiere aprobación de\nDirección (Irene)"\n→ [Enviar solicitud]' }, className: 'node-ux-form' },

    { id: 's10_esperando', type: 'default', position: { x: 950, y: 2210 }, data: { label: '⏳ Esperando:\n"Tu solicitud de\nvacaciones está\nen revisión.\nSLA: 5 días hábiles"\n→ Push cuando resuelva' }, className: 'node-ux-feedback' },

    { id: 's10_aprobada', type: 'default', position: { x: 850, y: 2370 }, data: { label: '🟢 Aprobada:\n"Tus vacaciones fueron\naprobadas!\nDel [fecha] al [fecha]\nHoras usadas: 32h\nPago: incluido en\nnómina de la semana"\n→ [Ver en calendario]' }, className: 'node-ux-feedback' },

    { id: 's10_rechazada', type: 'default', position: { x: 1050, y: 2370 }, data: { label: '🔴 Rechazada:\n"Tu solicitud fue\nrechazada.\nRazón: [motivo]\n→ [Solicitar de nuevo]\n→ [Contactar RRHH]"' }, className: 'node-ux-feedback' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 11: NO-SHOW Y EMERGENCIAS
    // ═══════════════════════════════════════════════════════
    { id: 's11_header', type: 'default', position: { x: 50, y: 2540 }, data: { label: '🚨 11. NO-SHOW\nY EMERGENCIAS' }, className: 'node-ux-section' },

    { id: 's11_push_noshow', type: 'default', position: { x: -100, y: 2700 }, data: { label: '🔔 Push 8:30 AM:\n"No detectamos tu\nllegada a Hotel [X].\n¿Está todo bien?"\n→ [Estoy en camino]\n→ [Estoy enfermo]\n→ [No puedo ir]' }, className: 'node-ux-decision' },

    { id: 's11_en_camino', type: 'default', position: { x: -100, y: 2870 }, data: { label: '🚗 "Estoy en camino":\n"OK! Te esperamos.\nETA estimado: [X] min\nbasado en tu GPS.\nNotificaremos al hotel."\n→ Cronómetro de\ntiempo estimado' }, className: 'node-ux-feedback' },

    { id: 's11_enfermo', type: 'default', position: { x: 70, y: 2870 }, data: { label: '🤒 "Estoy enfermo":\n"Entendemos.\n¿Tienes comprobante\nmédico?"\n→ [📷 Subir foto]\n→ [No tengo aún]\n"Te contactará tu\nreclutadora"' }, className: 'node-ux-form' },

    { id: 's11_no_puedo', type: 'default', position: { x: 240, y: 2870 }, data: { label: '❌ "No puedo ir":\n"¿Cuál es la razón?"\n○ Problema personal\n○ Problema transporte\n○ Otro: [________]\n→ [Enviar]\n⚠️ "Esto cuenta como\nno-show. Strikes: 1/3"' }, className: 'node-ux-form' },

    { id: 's11_strikes', type: 'default', position: { x: 70, y: 3050 }, data: { label: '⚠️ Mi Historial:\nStrikes: ●●○\n"2 de 3 no-shows\neste mes.\nUn no-show más\npuede resultar en\nsuspensión."\n→ [Ver política]' }, className: 'node-ux-screen' },

    { id: 's11_sin_respuesta', type: 'default', position: { x: 240, y: 3050 }, data: { label: '⚙️ Sin respuesta:\n8:45 → SMS automático\n9:00 → Llamada auto\n9:15 → Escala a\nreclutadora\n→ Sistema busca\nreemplazo' }, className: 'node-ux-system' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 12: CUENTA BANCARIA
    // ═══════════════════════════════════════════════════════
    { id: 's12_header', type: 'default', position: { x: 500, y: 2540 }, data: { label: '🏦 12. CUENTA\nBANCARIA' }, className: 'node-ux-section' },

    { id: 's12_ver_actual', type: 'default', position: { x: 400, y: 2700 }, data: { label: '🏦 Cuenta Actual:\nBanco: Chase\nCuenta: ****1234\nEstado: 🟢 Validada\n━━━━━━━━━━━━━\n→ [Cambiar cuenta]\n⚠️ "Requiere aprobación\nde Dirección"' }, className: 'node-ux-screen' },

    { id: 's12_form_cambio', type: 'default', position: { x: 600, y: 2700 }, data: { label: '📝 Cambiar Cuenta:\n• Nuevo Routing*: [____]\n• Nuevo Account*: [____]\n• Foto talón cheque*:\n  [📷 Tomar foto]\n• Razón del cambio*:\n  ○ Cambié de banco\n  ○ Cuenta cerrada\n  ○ Error en datos\n  ○ Otro: [____]' }, className: 'node-ux-form' },

    { id: 's12_selfie', type: 'default', position: { x: 500, y: 2870 }, data: { label: '🤳 Verificación ID:\n"Para tu seguridad,\ntoma una selfie\nsosteniendo tu ID"\n→ Cámara frontal\n→ Marco guía\n  (rostro + ID visible)\n→ [Tomar foto]' }, className: 'node-ux-screen' },

    { id: 's12_declaracion', type: 'default', position: { x: 500, y: 3050 }, data: { label: '✍️ Declaración:\n"Yo certifico que:\n• Esta es mi cuenta\n• La información es\n  correcta\n• Me deslindo a Orange\n  de errores en mis datos"\n→ [Firmar] (firma digital)\n→ [Enviar solicitud]' }, className: 'node-ux-action' },

    { id: 's12_esperando', type: 'default', position: { x: 400, y: 3220 }, data: { label: '⏳ Esperando:\n"Tu solicitud de\ncambio de cuenta\nfue enviada a\nDirección.\nEstado: 🟡 En revisión"' }, className: 'node-ux-feedback' },

    { id: 's12_aprobada', type: 'default', position: { x: 600, y: 3220 }, data: { label: '✅ Aprobada:\n"Tu nueva cuenta\nfue aprobada.\nEnviamos $0.01 para\nvalidar. Confirma\nel monto recibido."\n→ [Confirmar $0.01]' }, className: 'node-ux-feedback' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 13: INJURY REPORT
    // ═══════════════════════════════════════════════════════
    { id: 's13_header', type: 'default', position: { x: 50, y: 3220 }, data: { label: '🚑 13. INJURY\nREPORT' }, className: 'node-ux-section' },

    { id: 's13_boton_sos', type: 'default', position: { x: -100, y: 3380 }, data: { label: '🆘 Botón Emergencia:\nEn home screen,\nbotón rojo siempre\nvisible:\n[SOS EMERGENCIA]\n→ Tap para reportar' }, className: 'node-ux-action' },

    { id: 's13_tipo', type: 'default', position: { x: 70, y: 3380 }, data: { label: '⚠️ Tipo de Incidente:\n○ Lesión leve\n  (cortada, golpe)\n○ Lesión grave\n  (fractura, quemadura)\n○ Accidente mayor\n  (caída, emergencia)\n→ Seleccionar → Siguiente' }, className: 'node-ux-form' },

    { id: 's13_parte_cuerpo', type: 'default', position: { x: 240, y: 3380 }, data: { label: '🫁 Parte del Cuerpo:\nSilueta humana\ninteractiva:\n→ Tap en zona afectada\n→ Se marca en rojo\n→ Puede seleccionar\nmúltiples zonas\n→ [Siguiente]' }, className: 'node-ux-screen' },

    { id: 's13_descripcion', type: 'default', position: { x: -100, y: 3560 }, data: { label: '📝 Descripción:\n"¿Qué pasó?"\n→ Texto libre [______]\n→ [📷 Tomar fotos]\n  (hasta 5 fotos)\n→ GPS auto-capturado\n→ Timestamp auto\n→ [Siguiente]' }, className: 'node-ux-form' },

    { id: 's13_testigos', type: 'default', position: { x: 70, y: 3560 }, data: { label: '👥 Testigos:\n"¿Hubo testigos?"\n→ [Sí] → Agregar:\n  Nombre: [____]\n  Teléfono: [____]\n  (puede agregar más)\n→ [No hubo testigos]\n→ [Siguiente]' }, className: 'node-ux-form' },

    { id: 's13_firma', type: 'default', position: { x: 240, y: 3560 }, data: { label: '✍️ Firma y Envío:\n"Confirmo que esta\ninformación es\nverdadera"\n→ [Firmar] (digital)\n→ [Enviar Reporte]\n━━━━━━━━━━━━━\n"Reporte enviado.\nTe contactaremos\nen minutos."' }, className: 'node-ux-action' },

    { id: 's13_sys', type: 'default', position: { x: 70, y: 3740 }, data: { label: '⚙️ Sistema auto:\n→ Notifica inspector\n  (urgente)\n→ Notifica Dirección\n→ Inicia Workers Comp\n→ Genera caso con\n  toda la evidencia' }, className: 'node-ux-system' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 14: RETENCIÓN Y FIN DE ASIGNACIÓN
    // ═══════════════════════════════════════════════════════
    { id: 's14_header', type: 'default', position: { x: 500, y: 3380 }, data: { label: '🔄 14. RETENCIÓN\nY FIN ASIGNACIÓN' }, className: 'node-ux-section' },

    { id: 's14_push_fin', type: 'default', position: { x: 400, y: 3540 }, data: { label: '🔔 Push Notificación:\n"Tu asignación en\nHotel [X] termina\nel [fecha]. Tenemos\nopciones cerca de ti"\n→ [Ver opciones]' }, className: 'node-ux-feedback' },

    { id: 's14_opciones', type: 'default', position: { x: 600, y: 3540 }, data: { label: '🏨 Opciones Disponibles:\nLista de hoteles:\n• Hotel A - 8 min\n  Housekeeping $15/hr\n  ⭐ 4.3\n• Hotel B - 15 min\n  Laundry $14/hr\n  ⭐ 4.1\n→ Tap = ver detalle\n→ [Aceptar] por cada\n→ [No me interesan]' }, className: 'node-ux-screen' },

    { id: 's14_aceptar', type: 'default', position: { x: 400, y: 3720 }, data: { label: '✅ Acepta nuevo:\n"Asignado a Hotel [A]!\nInicio: [fecha]\nTransición sin pausa\nen tu ingreso."\n→ Instrucciones nuevas' }, className: 'node-ux-feedback' },

    { id: 's14_no_match', type: 'default', position: { x: 600, y: 3720 }, data: { label: '😔 Sin match:\n"Por ahora no hay\nopciones en tu zona.\nTe avisaremos cuando\nhaya algo nuevo.\nEstado: INACTIVO"\n→ Push cuando haya\nalgo disponible' }, className: 'node-ux-feedback' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 15: PERFIL Y ESTADO
    // ═══════════════════════════════════════════════════════
    { id: 's15_header', type: 'default', position: { x: 500, y: 3900 }, data: { label: '👤 15. PERFIL\nY ESTADO' }, className: 'node-ux-section' },

    { id: 's15_perfil', type: 'default', position: { x: 350, y: 4060 }, data: { label: '👤 Mi Perfil:\nFoto (editable)\nNombre: [X]\nTeléfono: [X]\nEmail: [X]\nDirección: [X]\n━━━━━━━━━━━━━\nEstado: 🟢 ACTIVO\nDesde: [fecha]\nHotel actual: [X]\n→ [Editar datos]' }, className: 'node-ux-screen' },

    { id: 's15_docs', type: 'default', position: { x: 530, y: 4060 }, data: { label: '📄 Mis Documentos:\n✅ ID — Verificado\n✅ Tax ID — Verificado\n✅ Permiso — Vigente\n  Expira: [fecha]\n  ⚠️ "Renueva antes\n  de [fecha]"\n→ [Actualizar doc]' }, className: 'node-ux-screen' },

    { id: 's15_evals', type: 'default', position: { x: 710, y: 4060 }, data: { label: '📊 Mis Evaluaciones:\nPromedio: ⭐ 4.2\n━━━━━━━━━━━━━\n• Desempeño:  4.5\n• Actitud:    4.3\n• Puntualidad: 3.8\n• Calidad:    4.2\n━━━━━━━━━━━━━\n→ Historial por fecha\n→ Comentarios' }, className: 'node-ux-screen' },

    { id: 's15_historial', type: 'default', position: { x: 530, y: 4240 }, data: { label: '🏨 Mi Historial:\nHoteles trabajados:\n• Hotel A — 6 meses\n  ⭐ 4.5 de ellos\n• Hotel B — 2 meses\n  ⭐ 4.0 de ellos\n→ Total: 8 meses\n→ 1,280 horas' }, className: 'node-ux-screen' },

    // ── FIN ──
    { id: 'end', type: 'output', position: { x: 500, y: 4420 }, data: { label: '📱 App Orange\nExperiencia Completa\ndel Colaborador\n15 Secciones | ~120 Pantallas' }, className: 'node-ux-section' },
  ],

  edges: [
    // Inicio → Secciones principales
    { id: 'e_start1', source: 'start', target: 's1_header' },
    { id: 'e_start2', source: 'start', target: 's4_header' },
    { id: 'e_start3', source: 'start', target: 's8_header' },

    // ── Sección 1: Descubrimiento ──
    { id: 'e1_1', source: 's1_header', target: 's1_canal_fb' },
    { id: 'e1_2', source: 's1_header', target: 's1_canal_sms' },
    { id: 'e1_3', source: 's1_header', target: 's1_canal_ref' },
    { id: 'e1_4', source: 's1_canal_fb', target: 's1_landing' },
    { id: 'e1_5', source: 's1_canal_sms', target: 's1_landing' },
    { id: 'e1_6', source: 's1_canal_ref', target: 's1_landing' },
    { id: 'e1_7', source: 's1_landing', target: 's1_descarga' },

    // Descarga → Registro
    { id: 'e1_8', source: 's1_descarga', target: 's2_header' },

    // ── Sección 2: Registro ──
    { id: 'e2_1', source: 's2_header', target: 's2_splash' },
    { id: 'e2_2', source: 's2_splash', target: 's2_bienvenida' },
    { id: 'e2_3', source: 's2_bienvenida', target: 's2_crear_cuenta' },
    { id: 'e2_4', source: 's2_crear_cuenta', target: 's2_system_verify' },
    { id: 'e2_5', source: 's2_system_verify', target: 's2_form_personal' },
    { id: 'e2_6', source: 's2_form_personal', target: 's2_form_empleo' },
    { id: 'e2_7', source: 's2_form_empleo', target: 's2_form_pago' },
    { id: 'e2_8', source: 's2_form_pago', target: 's2_progreso' },

    // Progreso → Documentos
    { id: 'e2_9', source: 's2_progreso', target: 's3_header' },

    // ── Sección 3: Documentos ──
    { id: 'e3_1', source: 's3_header', target: 's3_docs_lista' },
    { id: 'e3_2', source: 's3_docs_lista', target: 's3_camara', label: 'Tap documento' },
    { id: 'e3_3', source: 's3_camara', target: 's3_ocr_process' },
    { id: 'e3_4', source: 's3_ocr_process', target: 's3_confirmar' },
    { id: 'e3_5', source: 's3_confirmar', target: 's3_docs_lista', label: 'Correcto', style: { stroke: '#2e7d32' } },
    { id: 'e3_6', source: 's3_docs_lista', target: 's3_sin_taxid', label: 'Sin Tax ID', style: { stroke: '#f57f17', strokeDasharray: '5,5' } },

    // Documentos → Gates
    { id: 'e3_7', source: 's3_docs_lista', target: 's4_header', label: 'Completa docs', style: { strokeDasharray: '5,5' } },

    // ── Sección 4: Gates ──
    { id: 'e4_1', source: 's4_header', target: 's4_home_incompleto' },
    { id: 'e4_2', source: 's4_header', target: 's4_push_24h' },
    { id: 'e4_3', source: 's4_push_24h', target: 's4_push_48h' },
    { id: 'e4_4', source: 's4_home_incompleto', target: 's4_gate30', label: '<30%' },
    { id: 'e4_5', source: 's4_gate30', target: 's4_gate60', label: 'Completa datos' },
    { id: 'e4_6', source: 's4_gate60', target: 's4_gate100', label: 'Agrega pago' },
    { id: 'e4_7', source: 's4_push_48h', target: 's4_push_72h' },
    { id: 'e4_8', source: 's4_gate100', target: 's5_header', label: 'Perfil completo', style: { stroke: '#2e7d32', strokeWidth: 2 } },

    // ── Sección 5: Matching ──
    { id: 'e5_1', source: 's5_header', target: 's5_push_match' },
    { id: 'e5_2', source: 's5_push_match', target: 's5_detalle_hotel' },
    { id: 'e5_3', source: 's5_detalle_hotel', target: 's5_aceptar', label: 'Aceptar' },
    { id: 'e5_4', source: 's5_detalle_hotel', target: 's5_rechazar', label: 'Rechazar', style: { stroke: '#c62828' } },
    { id: 'e5_5', source: 's5_aceptar', target: 's5_instrucciones' },
    { id: 'e5_6', source: 's5_instrucciones', target: 's5_sys_notif_insp', style: { strokeDasharray: '5,5' } },
    { id: 'e5_7', source: 's5_rechazar', target: 's5_push_match', label: 'Vuelve a pool', style: { stroke: '#c62828', strokeDasharray: '5,5' } },

    // Matching → Onboarding
    { id: 'e5_8', source: 's5_instrucciones', target: 's6_header' },

    // ── Sección 6: Onboarding ──
    { id: 'e6_1', source: 's6_header', target: 's6_pre_video' },
    { id: 'e6_2', source: 's6_pre_video', target: 's6_checklist' },
    { id: 'e6_3', source: 's6_checklist', target: 's6_confirmar' },
    { id: 'e6_4', source: 's6_confirmar', target: 's6_dia1_llegada', label: 'Sí' },
    { id: 'e6_5', source: 's6_dia1_llegada', target: 's6_dia1_inspector' },
    { id: 'e6_6', source: 's6_dia1_inspector', target: 's6_eval_dia5', style: { strokeDasharray: '5,5' } },

    // Onboarding → Ponchado
    { id: 'e6_7', source: 's6_dia1_inspector', target: 's7_header', style: { strokeDasharray: '5,5' } },

    // ── Sección 7: Ponchado ──
    { id: 'e7_1', source: 's7_header', target: 's7_home' },
    { id: 'e7_2', source: 's7_home', target: 's7_geofence', style: { strokeDasharray: '5,5' } },
    { id: 'e7_3', source: 's7_home', target: 's7_punch_in', label: 'Tap Ponchar' },
    { id: 'e7_4', source: 's7_punch_in', target: 's7_durante_turno' },
    { id: 'e7_5', source: 's7_durante_turno', target: 's7_mlav_form', label: 'Si es M Lav', style: { strokeDasharray: '5,5' } },
    { id: 'e7_6', source: 's7_durante_turno', target: 's7_punch_out', label: 'Fin turno' },
    { id: 'e7_7', source: 's7_punch_out', target: 's7_resumen_dia' },
    { id: 'e7_8', source: 's7_durante_turno', target: 's7_push_olvido', label: 'Si olvida', style: { stroke: '#f57f17', strokeDasharray: '5,5' } },
    { id: 'e7_9', source: 's7_push_olvido', target: 's7_punch_out', label: 'Ponchar ahora' },

    // ── Sección 8: Nómina ──
    { id: 'e8_1', source: 's8_header', target: 's8_push_pago' },
    { id: 'e8_2', source: 's8_push_pago', target: 's8_paystub' },
    { id: 'e8_3', source: 's8_paystub', target: 's8_historial', style: { strokeDasharray: '5,5' } },
    { id: 'e8_4', source: 's8_header', target: 's8_config_pago' },
    { id: 'e8_5', source: 's8_config_pago', target: 's8_validacion' },

    // Nómina → Solicitudes
    { id: 'e8_6', source: 's8_historial', target: 's9_header', style: { strokeDasharray: '5,5' } },

    // ── Sección 9: Solicitudes ──
    { id: 'e9_1', source: 's9_header', target: 's9_menu' },
    { id: 'e9_2', source: 's9_menu', target: 's9_ajuste_pago', label: 'Ajuste Pago' },
    { id: 'e9_3', source: 's9_menu', target: 's9_reubicacion', label: 'Reubicación' },
    { id: 'e9_4', source: 's9_menu', target: 's9_mas_horas' },
    { id: 'e9_5', source: 's9_menu', target: 's9_discrepancia' },
    { id: 'e9_6', source: 's9_menu', target: 's9_compensacion' },
    { id: 'e9_7', source: 's9_menu', target: 's9_tiempo_libre' },
    { id: 'e9_8', source: 's9_menu', target: 's9_40hrs' },
    { id: 'e9_9', source: 's9_menu', target: 's9_16pct' },
    { id: 'e9_10', source: 's9_menu', target: 's9_contrato' },
    { id: 'e9_11', source: 's9_ajuste_pago', target: 's9_tracking', style: { strokeDasharray: '5,5' } },
    { id: 'e9_12', source: 's9_reubicacion', target: 's9_tracking', style: { strokeDasharray: '5,5' } },
    { id: 'e9_13', source: 's9_tracking', target: 's9_detalle_sol' },

    // Solicitudes → Vacaciones
    { id: 'e9_14', source: 's9_menu', target: 's10_header', style: { strokeDasharray: '5,5' } },

    // ── Sección 10: Vacaciones ──
    { id: 'e10_1', source: 's10_header', target: 's10_contador' },
    { id: 'e10_2', source: 's10_contador', target: 's10_solicitar', label: '52 sem cumplidas' },
    { id: 'e10_3', source: 's10_solicitar', target: 's10_esperando' },
    { id: 'e10_4', source: 's10_esperando', target: 's10_aprobada', label: 'Aprobada', style: { stroke: '#2e7d32' } },
    { id: 'e10_5', source: 's10_esperando', target: 's10_rechazada', label: 'Rechazada', style: { stroke: '#c62828' } },

    // ── Sección 11: No-Show ──
    { id: 'e11_1', source: 's11_header', target: 's11_push_noshow' },
    { id: 'e11_2', source: 's11_push_noshow', target: 's11_en_camino', label: 'En camino' },
    { id: 'e11_3', source: 's11_push_noshow', target: 's11_enfermo', label: 'Enfermo' },
    { id: 'e11_4', source: 's11_push_noshow', target: 's11_no_puedo', label: 'No puedo', style: { stroke: '#c62828' } },
    { id: 'e11_5', source: 's11_no_puedo', target: 's11_strikes' },
    { id: 'e11_6', source: 's11_push_noshow', target: 's11_sin_respuesta', label: 'No responde', style: { stroke: '#c62828', strokeDasharray: '5,5' } },

    // ── Sección 12: Cuenta Bancaria ──
    { id: 'e12_1', source: 's12_header', target: 's12_ver_actual' },
    { id: 'e12_2', source: 's12_ver_actual', target: 's12_form_cambio', label: 'Cambiar' },
    { id: 'e12_3', source: 's12_form_cambio', target: 's12_selfie' },
    { id: 'e12_4', source: 's12_selfie', target: 's12_declaracion' },
    { id: 'e12_5', source: 's12_declaracion', target: 's12_esperando' },
    { id: 'e12_6', source: 's12_esperando', target: 's12_aprobada', label: 'Aprobada', style: { stroke: '#2e7d32' } },

    // ── Sección 13: Injury ──
    { id: 'e13_1', source: 's13_header', target: 's13_boton_sos' },
    { id: 'e13_2', source: 's13_boton_sos', target: 's13_tipo' },
    { id: 'e13_3', source: 's13_tipo', target: 's13_parte_cuerpo' },
    { id: 'e13_4', source: 's13_parte_cuerpo', target: 's13_descripcion' },
    { id: 'e13_5', source: 's13_descripcion', target: 's13_testigos' },
    { id: 'e13_6', source: 's13_testigos', target: 's13_firma' },
    { id: 'e13_7', source: 's13_firma', target: 's13_sys' },

    // ── Sección 14: Retención ──
    { id: 'e14_1', source: 's14_header', target: 's14_push_fin' },
    { id: 'e14_2', source: 's14_push_fin', target: 's14_opciones' },
    { id: 'e14_3', source: 's14_opciones', target: 's14_aceptar', label: 'Acepta', style: { stroke: '#2e7d32' } },
    { id: 'e14_4', source: 's14_opciones', target: 's14_no_match', label: 'Sin opciones', style: { stroke: '#c62828' } },
    { id: 'e14_5', source: 's14_aceptar', target: 's5_instrucciones', label: 'Nuevo ciclo', style: { stroke: '#2e7d32', strokeDasharray: '8,4' } },

    // ── Sección 15: Perfil ──
    { id: 'e15_1', source: 's15_header', target: 's15_perfil' },
    { id: 'e15_2', source: 's15_header', target: 's15_docs' },
    { id: 'e15_3', source: 's15_header', target: 's15_evals' },
    { id: 'e15_4', source: 's15_perfil', target: 's15_historial', style: { strokeDasharray: '5,5' } },

    // ── Conexiones cruzadas entre secciones ──
    // Ponchado → No-Show (si no llega)
    { id: 'e_cross_1', source: 's7_home', target: 's11_header', label: 'Si no llega', style: { stroke: '#c62828', strokeDasharray: '8,4' } },
    // Home → Solicitudes
    { id: 'e_cross_2', source: 's7_resumen_dia', target: 's9_header', label: 'Reportar error', style: { strokeDasharray: '8,4' } },
    // Home → Injury
    { id: 'e_cross_3', source: 's7_durante_turno', target: 's13_header', label: 'SOS Emergencia', style: { stroke: '#c62828', strokeDasharray: '8,4' } },
    // Config pago → Cuenta Bancaria
    { id: 'e_cross_4', source: 's8_config_pago', target: 's12_header', label: 'Cambiar cuenta', style: { strokeDasharray: '8,4' } },
    // Retención → Ponchado (nuevo ciclo)
    { id: 'e_cross_5', source: 's14_aceptar', target: 's7_home', label: 'Nuevo hotel', style: { stroke: '#2e7d32', strokeDasharray: '8,4' } },

    // ── Fin ──
    { id: 'e_end1', source: 's15_historial', target: 'end', style: { strokeDasharray: '5,5' } },
    { id: 'e_end2', source: 's10_aprobada', target: 'end', style: { strokeDasharray: '5,5' } },
    { id: 'e_end3', source: 's14_no_match', target: 'end', style: { strokeDasharray: '5,5' } },
  ]
}

export default colaboradorUXFlow
