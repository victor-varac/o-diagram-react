// ═══════════════════════════════════════════════════════════════════════
// FLUJO POR ROL: COLABORADOR / TRABAJADOR ORANGE
// Perspectiva completa del empleado: desde reclutamiento hasta salida
// ═══════════════════════════════════════════════════════════════════════
//
// SECCIONES:
//   1. Reclutamiento y Registro (Facebook, SMS, App, BL check, Pool)
//   2. Gates de Aplicación (30%/60%/100% con reglas explícitas)
//   3. Primer Día y Onboarding (Inspector, evaluaciones Día 5/10)
//   4. Configuración de Pago (Transfer/Cheque, $0.01 validación)
//   5. Operación Diaria + Ponchado (GPS, huella, hora validación)
//   6. Pago por Cuarto - M Lav (modelo alternativo)
//   7. Uniforme
//   8. Solicitudes del Colaborador (9 tipos)
//   9. Vacaciones (52 sem, freeze en licencia)
//  10. Retención 16% y Reglas Fiscales
//  11. Cambio de Cuenta Bancaria (solo Dirección)
//  12. No-Show (detección, escalación, 3 strikes)
//  13. Injury Report
//  14. Retención Temporal (loop de reasignación)
//  15. Estados del Empleado (Suspendido, Inactivo, Terminado, BL)
//
// ═══════════════════════════════════════════════════════════════════════

const colaboradorRolFlow = {
  nodes: [
    // INICIO
    { id: 'start', type: 'input', position: { x: 750, y: 0 }, data: { label: '👷 Colaborador\nTrabajador Orange Staffing\n(Perspectiva del empleado)' }, className: 'node-success' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 1: RECLUTAMIENTO Y REGISTRO
    // ═══════════════════════════════════════════════════════
    { id: 'section_registro', type: 'default', position: { x: 50, y: 150 }, data: { label: '📋 RECLUTAMIENTO\nY REGISTRO' }, className: 'node-info' },
    { id: 'reclut_facebook', type: 'default', position: { x: 50, y: 270 }, data: { label: '📱 Reclutamiento\nvía Facebook / Redes\n/ SMS / Referidos' }, className: 'node-recruitment' },
    { id: 'sms_link', type: 'default', position: { x: 50, y: 400 }, data: { label: '📲 Recibe SMS\ncon Link de Descarga' }, className: 'node-info' },
    { id: 'download_app', type: 'default', position: { x: 50, y: 520 }, data: { label: '📥 Descarga App\nTeléfono Pre-cargado' }, className: 'node-info' },
    { id: 'cuenta_precreada', type: 'default', position: { x: 50, y: 640 }, data: { label: '👤 Cuenta Pre-creada\nSolo ingresa datos\npara activarla' }, className: 'node-success' },
    { id: 'llenar_datos', type: 'default', position: { x: 50, y: 770 }, data: { label: '📝 Datos para 30%:\nNombre, Tel, Fecha nac,\nFoto ID, Tax ID, Tipo\nempleo (W2/1099),\nDeclaración legal firmada' }, className: 'node-warning' },
    { id: 'foto_docs', type: 'default', position: { x: 250, y: 770 }, data: { label: '📷 Documentos:\nPermiso Trabajo,\nSSN o Tax ID,\nPasaporte, Cédula\nConsular' }, className: 'node-info' },
    { id: 'sin_taxid', type: 'default', position: { x: 250, y: 910 }, data: { label: '⚠️ Sin Tax ID/SSN\n→ Retención 16%\nde impuestos' }, className: 'node-critical' },
    { id: 'blacklist_check', type: 'default', position: { x: 50, y: 910 }, data: { label: '🔍 Búsqueda\nBlack List' }, className: 'node-warning' },
    { id: 'rejected', type: 'default', position: { x: 250, y: 1040 }, data: { label: '❌ RECHAZADO\nNo puede registrarse' }, className: 'node-critical' },
    { id: 'pool_recepcion', type: 'default', position: { x: 50, y: 1040 }, data: { label: '⚪ Pool Recepción\nEsperando asignación' }, className: 'node-info' },
    { id: 'emp_type', type: 'default', position: { x: 50, y: 1160 }, data: { label: '🔀 Tipo Empleado:\nContratista (1099)\no Directa (W2)' }, className: 'node-warning' },
    { id: 'both_orange', type: 'default', position: { x: 50, y: 1280 }, data: { label: '💼 Ambos empleados\nde Orange Staffing\n+ Waiver + Handbook' }, className: 'node-accounting' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 2: GATES DE APLICACIÓN (30% / 60% / 100%)
    // ═══════════════════════════════════════════════════════
    { id: 'section_gates', type: 'default', position: { x: 50, y: 1420 }, data: { label: '📊 GATES DE\nAPLICACIÓN' }, className: 'node-critical' },

    { id: 'gate_30', type: 'default', position: { x: 0, y: 1550 }, data: { label: '🔴 30% = MÍNIMO\npara trabajar\n• Sin 30% NO puede\n  ponchar entrada\n• Datos básicos +\n  ID + declaración legal' }, className: 'node-critical' },
    { id: 'gate_60', type: 'default', position: { x: 200, y: 1550 }, data: { label: '🟡 60% = PAGABLE\n• Genera # empleado\n  automático\n• Método de pago\n  confirmado\n• Listo para nómina' }, className: 'node-warning' },
    { id: 'gate_100', type: 'default', position: { x: 400, y: 1550 }, data: { label: '🟢 100% = COMPLETO\n• Dirección, experiencia\n  referencias, certif.\n• STATUS VERDE\n• Sin restricciones' }, className: 'node-success' },

    { id: 'gate_blocked', type: 'default', position: { x: 0, y: 1700 }, data: { label: '🚫 <30%: BLOQUEADO\nNo puede trabajar\nPantalla de error' }, className: 'node-blacklist' },
    { id: 'gate_no_pago', type: 'default', position: { x: 200, y: 1700 }, data: { label: '⚠️ 30-59%: TRABAJA\npero NO PAGABLE\n🔴 Pantalla roja\n→ 72h para llegar a 60%\n→ STRIKE a Inspector' }, className: 'node-critical' },
    { id: 'gate_timeline', type: 'default', position: { x: 400, y: 1700 }, data: { label: '⏰ Timeline 72h:\n• 24h: Recordatorio auto\n  (push, SMS, email)\n• 48h: Llamada reclutadora\n• 72h: 🔴 CRÍTICO' }, className: 'node-warning' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 3: PRIMER DÍA Y ONBOARDING
    // ═══════════════════════════════════════════════════════
    { id: 'section_onboard', type: 'default', position: { x: 500, y: 150 }, data: { label: '🤝 PRIMER DÍA\nY ONBOARDING' }, className: 'node-quality' },
    { id: 'notif_asignacion', type: 'default', position: { x: 500, y: 270 }, data: { label: '🔔 Notificación\nAsignación a Hotel\n+ Mapa GPS + Dirección\n(máx 30 min distancia)' }, className: 'node-info' },
    { id: 'decide', type: 'default', position: { x: 500, y: 400 }, data: { label: '🤔 Acepta o\nRechaza?' }, className: 'node-warning' },
    { id: 'rechaza_asig', type: 'default', position: { x: 670, y: 400 }, data: { label: '❌ Rechaza\nVuelve al Pool' }, className: 'node-critical' },
    { id: 'dia_1', type: 'default', position: { x: 500, y: 520 }, data: { label: '📅 Día 1 - 8:00 AM\nSe presenta en Hotel\n"Vengo de Orange"\nVestimenta negra' }, className: 'node-success' },
    { id: 'inspector_onboard', type: 'default', position: { x: 500, y: 660 }, data: { label: '🏆 Inspector hace\nOnboarding + Intro\n+ Formato Ingreso\n+ Ayuda App 60%' }, className: 'node-quality' },

    // Evaluaciones de seguimiento
    { id: 'eval_dia5', type: 'default', position: { x: 500, y: 800 }, data: { label: '📅 Evaluación Día 5\nCon Inspector + Gerencia\n4 dimensiones:\nDesempeño, Actitud,\nPuntualidad, Calidad' }, className: 'node-quality' },
    { id: 'eval_dia10', type: 'default', position: { x: 500, y: 950 }, data: { label: '📅 Evaluación Día 10\nIntegración + Desempeño\n+ Evaluaciones espontáneas' }, className: 'node-quality' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 4: CONFIGURACIÓN DE PAGO
    // ═══════════════════════════════════════════════════════
    { id: 'section_pago', type: 'default', position: { x: 900, y: 150 }, data: { label: '💳 CONFIGURACIÓN\nDE PAGO' }, className: 'node-accounting' },
    { id: 'metodo_pago', type: 'default', position: { x: 900, y: 270 }, data: { label: 'Método de\nPago?' }, className: 'node-info' },
    { id: 'transferencia', type: 'default', position: { x: 820, y: 400 }, data: { label: '💳 Transferencia\nBancaria (ACH)\n+ Routing # + Cuenta #\n+ Foto cheque stub' }, className: 'node-info' },
    { id: 'cheque', type: 'default', position: { x: 980, y: 400 }, data: { label: '📄 Cheque\nPaychex\n(enviado por correo)' }, className: 'node-info' },
    { id: 'validar_bank', type: 'default', position: { x: 820, y: 540 }, data: { label: '✅ Validar $0.01\nDepósito de prueba\nen cuenta bancaria' }, className: 'node-info' },
    { id: 'status_verde', type: 'default', position: { x: 900, y: 660 }, data: { label: '🟢 STATUS VERDE\nListo para Nómina\n(requiere ≥60% app)' }, className: 'node-success' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 5: OPERACIÓN DIARIA + PONCHADO DETALLADO
    // ═══════════════════════════════════════════════════════
    { id: 'section_operacion', type: 'default', position: { x: 900, y: 820 }, data: { label: '⏰ OPERACIÓN\nDIARIA' }, className: 'node-info' },

    // Ponchado detallado
    { id: 'ponchado_entrada', type: 'default', position: { x: 780, y: 960 }, data: { label: '📍 Ponchar ENTRADA\n• GPS verifica ubicación\n  (debe estar en hotel)\n• Huella digital (primario)\n• Manual (backup, requiere\n  aprobación supervisor)' }, className: 'node-info' },
    { id: 'gps_alert', type: 'default', position: { x: 780, y: 1130 }, data: { label: '⚠️ GPS no coincide:\n"No estás en la\nubicación correcta"\n→ Alerta a supervisor' }, className: 'node-warning' },
    { id: 'ponchado_salida', type: 'default', position: { x: 1020, y: 960 }, data: { label: '📍 Ponchar SALIDA\n• GPS + huella\n• Si olvida: push\n  notification 30 min\n  después de hora est.' }, className: 'node-info' },
    { id: 'hora_validacion', type: 'default', position: { x: 1020, y: 1130 }, data: { label: '🔍 Validación horas:\n• >12h sin break?\n  → Requiere aprobación\n  supervisor\n• Horas razonables' }, className: 'node-warning' },

    // Ciclo semanal y pago
    { id: 'horas_semana', type: 'default', position: { x: 900, y: 1270 }, data: { label: '📊 Horas Trabajadas\nDom-Sáb\n(visible en app)' }, className: 'node-info' },
    { id: 'desfase', type: 'default', position: { x: 780, y: 1400 }, data: { label: '⚠️ Desfase 1 Semana:\nTrabaja Lun-Dom\nDeadline Mié 11:59PM\nProcesa Jueves\nPaga semana ANTERIOR' }, className: 'node-warning' },
    { id: 'pago_viernes', type: 'default', position: { x: 1020, y: 1400 }, data: { label: '💰 Pago VIE 5AM\n"Tu pago de $XXX\nha sido depositado"\n(push notification)' }, className: 'node-success' },
    { id: 'pago_desglose', type: 'default', position: { x: 1020, y: 1550 }, data: { label: '📋 Desglose visible:\n• Bruto: hrs × rate\n• Deducciones: Tax,\n  uniforme, ajustes\n• Neto = depositado' }, className: 'node-info' },
    { id: 'trabajando', type: 'default', position: { x: 900, y: 1700 }, data: { label: '👔 Empleado ACTIVO\nTrabajando' }, className: 'node-success' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 6: PAGO POR CUARTO - M LAV (MODELO ALTERNATIVO)
    // ═══════════════════════════════════════════════════════
    { id: 'section_mlav', type: 'default', position: { x: 1250, y: 820 }, data: { label: '🏨 PAGO POR CUARTO\n(M Lav / Rooms)' }, className: 'node-hotel' },
    { id: 'mlav_subir', type: 'default', position: { x: 1250, y: 960 }, data: { label: '📊 Empleado sube\n"tabla" en app:\ncuartos asignados\ny completados' }, className: 'node-info' },
    { id: 'mlav_supervisor', type: 'default', position: { x: 1250, y: 1100 }, data: { label: '✅ Supervisor valida\ncuartos completados\n(puede rechazar)' }, className: 'node-warning' },
    { id: 'mlav_calculo', type: 'default', position: { x: 1250, y: 1240 }, data: { label: '💰 Cálculo automático:\nnum_cuartos × rate\npor cuarto\n(NO por hora)' }, className: 'node-accounting' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 7: UNIFORME
    // ═══════════════════════════════════════════════════════
    { id: 'section_uniforme', type: 'default', position: { x: 1250, y: 150 }, data: { label: '👕 UNIFORME' }, className: 'node-quality' },
    { id: 'uniforme_dia', type: 'default', position: { x: 1250, y: 270 }, data: { label: '📅 Día 3 (Fijo)\nDía 5 (Temporal)' }, className: 'node-quality' },
    { id: 'recibe_uniforme', type: 'default', position: { x: 1250, y: 390 }, data: { label: '👕 Recibe Uniforme\nFranela / Pantalón\n(Inspector entrega)' }, className: 'node-quality' },
    { id: 'cobro_uniforme', type: 'default', position: { x: 1250, y: 510 }, data: { label: '💵 Cobro $30 USD\nDescontado automático\ndel primer cheque' }, className: 'node-accounting' },
    { id: 'firma_uniforme', type: 'default', position: { x: 1250, y: 630 }, data: { label: '✍️ Firma Digital\n+ Foto Evidencia\n(recibo en app)' }, className: 'node-quality' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 8: SOLICITUDES DEL COLABORADOR
    // ═══════════════════════════════════════════════════════
    { id: 'section_solicitudes', type: 'default', position: { x: 1550, y: 150 }, data: { label: '📋 SOLICITUDES\nDEL COLABORADOR' }, className: 'node-warning' },
    { id: 'sol_ajuste_pago', type: 'default', position: { x: 1450, y: 280 }, data: { label: '💸 Ajuste\nde Pago' }, className: 'node-accounting' },
    { id: 'sol_reubicacion', type: 'default', position: { x: 1600, y: 280 }, data: { label: '🏨 Reubicación\nde Propiedad' }, className: 'node-hotel' },
    { id: 'sol_incremento', type: 'default', position: { x: 1750, y: 280 }, data: { label: '📈 Más Horas\n/ Días' }, className: 'node-info' },
    { id: 'sol_discrepancia', type: 'default', position: { x: 1450, y: 400 }, data: { label: '❓ Discrepancia\nde Pago' }, className: 'node-warning' },
    { id: 'sol_comp_anual', type: 'default', position: { x: 1600, y: 400 }, data: { label: '🌴 Compensación\nAnual' }, className: 'node-accounting' },
    { id: 'sol_tiempo_libre', type: 'default', position: { x: 1750, y: 400 }, data: { label: '🏖️ Requerir\nTiempo Libre' }, className: 'node-info' },
    { id: 'sol_40h_off', type: 'default', position: { x: 1450, y: 520 }, data: { label: '⏰ Requerir\n40 Horas Off' }, className: 'node-info' },
    { id: 'sol_comp_extra', type: 'default', position: { x: 1600, y: 520 }, data: { label: '💲 Reembolso\n16%' }, className: 'node-accounting' },
    { id: 'sol_ajuste_contrato', type: 'default', position: { x: 1750, y: 520 }, data: { label: '📄 Ajuste de\nContrato' }, className: 'node-info' },
    { id: 'sol_enviado', type: 'default', position: { x: 1600, y: 650 }, data: { label: '📤 Solicitud Enviada\nvía App a Contabilidad\n→ Respuesta en 24-48h' }, className: 'node-success' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 9: VACACIONES (CON FREEZE)
    // ═══════════════════════════════════════════════════════
    { id: 'section_vacaciones', type: 'default', position: { x: 1550, y: 800 }, data: { label: '🌴 VACACIONES\nPolítica' }, className: 'node-info' },
    { id: 'vac_52sem', type: 'default', position: { x: 1550, y: 930 }, data: { label: '📅 52 Semanas\nContinuas Trabajando' }, className: 'node-info' },
    { id: 'vac_promedio', type: 'default', position: { x: 1550, y: 1060 }, data: { label: '📏 Pago = Promedio\nhrs trabajadas en 52 sem\n(ya no 40h fijas)' }, className: 'node-warning' },
    { id: 'vac_regla', type: 'default', position: { x: 1550, y: 1190 }, data: { label: '📊 ¿Trabaja ≥40h\npor semana regular?' }, className: 'node-warning' },
    { id: 'vac_normal', type: 'default', position: { x: 1700, y: 1310 }, data: { label: '✅ Vacaciones\nNormales\n(descansar 1 semana)' }, className: 'node-success' },
    { id: 'vac_menos40', type: 'default', position: { x: 1450, y: 1310 }, data: { label: '⚠️ <40h/sem\nPre-aprobar pago\nsin descanso físico\n(necesidad económica)' }, className: 'node-warning' },
    { id: 'vac_freeze', type: 'default', position: { x: 1550, y: 1430 }, data: { label: '❄️ FREEZE: Si toma\nlicencia médica/maternidad\nel contador de 52 sem\nse CONGELA (no cuenta)\ny retoma al volver' }, className: 'node-critical' },
    { id: 'vac_visible', type: 'default', position: { x: 1700, y: 1430 }, data: { label: '📱 Visible en App:\n"Llevas X semanas,\nte faltan Y semanas"\n"Tendrás Z horas\nde vacaciones"' }, className: 'node-info' },
    { id: 'vac_aprueba_irene', type: 'default', position: { x: 1550, y: 1560 }, data: { label: '🔑 TODOS los pagos\nde vacaciones requieren\naprobación de\nIrene/Dirección' }, className: 'node-critical' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 10: RETENCIÓN 16% Y REGLAS FISCALES
    // ═══════════════════════════════════════════════════════
    { id: 'section_16pct', type: 'default', position: { x: 1850, y: 800 }, data: { label: '💸 RETENCIÓN 16%\nREGLAS FISCALES' }, className: 'node-critical' },
    { id: 'pct_aplica', type: 'default', position: { x: 1850, y: 930 }, data: { label: '⚠️ Aplica a 1099\nSIN Tax ID\n→ 16% retenido\ncada semana' }, className: 'node-warning' },
    { id: 'pct_plazo', type: 'default', position: { x: 1850, y: 1060 }, data: { label: '⏰ Plazo recomendado:\n3 meses para entregar\nTax ID' }, className: 'node-info' },
    { id: 'pct_alertas', type: 'default', position: { x: 1850, y: 1190 }, data: { label: '🚨 Alertas fiscales:\n🟡 60 días antes cierre\n🟠 30 días\n🔴 15 días\n(del año fiscal)' }, className: 'node-critical' },
    { id: 'pct_entrega', type: 'default', position: { x: 1750, y: 1310 }, data: { label: '✅ Entrega Tax ID\n→ Reembolso 16%\nSOLO mismo año fiscal\n(aprueba Dirección)' }, className: 'node-success' },
    { id: 'pct_pierde', type: 'default', position: { x: 1950, y: 1310 }, data: { label: '❌ No entrega antes\ndel 31 Dic:\n→ 1099 emitido en Ene\n→ PIERDE el 16%\n→ Responsabilidad\n  del empleado' }, className: 'node-critical' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 11: CAMBIO DE CUENTA BANCARIA
    // ═══════════════════════════════════════════════════════
    { id: 'section_banco', type: 'default', position: { x: 1850, y: 1470 }, data: { label: '🏦 CAMBIO DE\nCUENTA BANCARIA' }, className: 'node-warning' },
    { id: 'banco_solicita', type: 'default', position: { x: 1850, y: 1600 }, data: { label: '📋 Empleado solicita\ncambio de cuenta\n(ticket formal + razón)' }, className: 'node-info' },
    { id: 'banco_solo_dir', type: 'default', position: { x: 1850, y: 1730 }, data: { label: '🔐 SOLO Dirección\nmodifica cuentas\n❌ NO Contabilidad\n❌ NO el empleado\n❌ NO Inspector' }, className: 'node-critical' },
    { id: 'banco_resultado', type: 'default', position: { x: 1850, y: 1870 }, data: { label: '✅ Aprobado:\nNueva validación $0.01\n📋 Auditoría completa\n⚖️ Si dio datos malos\n→ responsabilidad del emp' }, className: 'node-warning' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 12: NO-SHOW (DETECCIÓN Y ESCALACIÓN)
    // ═══════════════════════════════════════════════════════
    { id: 'section_noshow', type: 'default', position: { x: 450, y: 1850 }, data: { label: '🚨 NO-SHOW\nDETECCIÓN Y ESCALACIÓN' }, className: 'node-critical' },

    { id: 'noshow_detect', type: 'default', position: { x: 300, y: 1990 }, data: { label: '⏰ 8:30 AM: No ponchó\n→ Alerta automática\na reclutadora' }, className: 'node-critical' },
    { id: 'noshow_contacto', type: 'default', position: { x: 300, y: 2130 }, data: { label: '📞 Reclutadora:\n3 llamadas + SMS\n¿Justificado?' }, className: 'node-warning' },
    { id: 'noshow_justificado', type: 'default', position: { x: 150, y: 2270 }, data: { label: '✅ Justificado:\n• Enfermedad (nota)\n• Emergencia\n• Problema transporte\n→ Sin consecuencia\n  (con evidencia)' }, className: 'node-success' },
    { id: 'noshow_injustificado', type: 'default', position: { x: 450, y: 2270 }, data: { label: '❌ Injustificado:\n"Olvidé" / "No quiero"\n/ Sin respuesta\n→ Consecuencias' }, className: 'node-critical' },

    // 3 strikes
    { id: 'strike_1', type: 'default', position: { x: 300, y: 2420 }, data: { label: '⚠️ 1er No-Show:\nAdvertencia formal\n+ Afecta calificación\n+ Registro en sistema' }, className: 'node-warning' },
    { id: 'strike_2', type: 'default', position: { x: 450, y: 2420 }, data: { label: '🟠 2do (mismo mes):\nÚltima advertencia\n+ Junta con Cecilia\n+ Plan de mejora' }, className: 'node-critical' },
    { id: 'strike_3', type: 'default', position: { x: 600, y: 2420 }, data: { label: '🔴 3er No-Show:\nBLACKLIST temporal\no permanente\n(decide Dirección)' }, className: 'node-blacklist' },
    { id: 'noshow_patron', type: 'default', position: { x: 600, y: 2560 }, data: { label: '🔍 Sistema detecta\npatrones: "¿Siempre\nlunes?" → Alerta\nespecial' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 13: INJURY REPORT (ACCIDENTE LABORAL)
    // ═══════════════════════════════════════════════════════
    { id: 'section_injury', type: 'default', position: { x: 700, y: 1850 }, data: { label: '🚑 INJURY REPORT\nAccidente Laboral' }, className: 'node-critical' },
    { id: 'injury_reporte', type: 'default', position: { x: 700, y: 1990 }, data: { label: '📝 Reportar Accidente\nDesde App inmediato' }, className: 'node-critical' },
    { id: 'injury_datos', type: 'default', position: { x: 600, y: 2130 }, data: { label: '⏰ Hora incidente +\nHrs trabajadas +\nDescripción detallada' }, className: 'node-info' },
    { id: 'injury_fotos', type: 'default', position: { x: 800, y: 2130 }, data: { label: '📷 Fotos evidencia +\nParte del cuerpo\nafectada' }, className: 'node-info' },
    { id: 'injury_firma', type: 'default', position: { x: 700, y: 2270 }, data: { label: '✍️ Firma Digital\ndel Colaborador' }, className: 'node-quality' },
    { id: 'injury_workcomp', type: 'default', position: { x: 700, y: 2400 }, data: { label: '🏥 Workers\' Comp:\nFormularios médicos\n+ Seguimiento\n+ Licencia médica\n(contador vac. se congela)' }, className: 'node-warning' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 14: RETENCIÓN TEMPORAL (LOOP REASIGNACIÓN)
    // ═══════════════════════════════════════════════════════
    { id: 'section_retencion', type: 'default', position: { x: 1100, y: 1850 }, data: { label: '🔄 RETENCIÓN\nTEMPORAL' }, className: 'node-recruitment' },
    { id: 'ret_termina_asig', type: 'default', position: { x: 1100, y: 1990 }, data: { label: '📅 Termina asignación\ntemporal en hotel' }, className: 'node-info' },
    { id: 'ret_reclutadora', type: 'default', position: { x: 1100, y: 2130 }, data: { label: '👥 Reclutadora busca\nsiguiente hotel\nPROACTIVAMENTE\n(por proximidad GPS)' }, className: 'node-recruitment' },
    { id: 'ret_nueva_oferta', type: 'default', position: { x: 1000, y: 2270 }, data: { label: '📞 Contacta empleado\ncon nueva oferta\n→ Acepta: nueva asig.\n→ Rechaza: Pool' }, className: 'node-info' },
    { id: 'ret_meta_72h', type: 'default', position: { x: 1200, y: 2270 }, data: { label: '🎯 Meta: >72h\nretención continua\n(KPI: actual ~70%,\nobjetivo >85%)' }, className: 'node-warning' },
    { id: 'ret_inactivo', type: 'default', position: { x: 1100, y: 2400 }, data: { label: '⚪ Si no hay hotel:\nEstado INACTIVO\n→ Estrategia retención\n→ Reclutadora monitorea' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 15: ESTADOS DEL EMPLEADO (MÁQUINA DE ESTADOS)
    // ═══════════════════════════════════════════════════════
    { id: 'section_estados', type: 'default', position: { x: 750, y: 2650 }, data: { label: '🔀 ESTADOS DEL\nEMPLEADO' }, className: 'node-critical' },

    { id: 'estado_activo', type: 'default', position: { x: 550, y: 2800 }, data: { label: '🟢 ACTIVO\nTrabajando con\nasignación' }, className: 'node-success' },
    { id: 'estado_inactivo', type: 'default', position: { x: 750, y: 2800 }, data: { label: '⚪ INACTIVO\nSin asignación\n(activa retención)' }, className: 'node-info' },
    { id: 'estado_suspendido', type: 'default', position: { x: 950, y: 2800 }, data: { label: '🟡 SUSPENDIDO\n• Investigación\n• Problema admin\n• Licencia médica\n• Maternidad' }, className: 'node-warning' },
    { id: 'estado_terminado', type: 'default', position: { x: 750, y: 2950 }, data: { label: '🔴 TERMINADO\n• Salida voluntaria\n• Despido\n→ Desactivar Paychex\n→ Recoger uniforme' }, className: 'node-critical' },
    { id: 'estado_bl_hotel', type: 'default', position: { x: 550, y: 2950 }, data: { label: '🚫 BLACK LIST\nde Hotel\n(puede trabajar\nen OTROS hoteles)' }, className: 'node-blacklist' },
    { id: 'estado_bl_global', type: 'default', position: { x: 950, y: 2950 }, data: { label: '🚫 BLACK LIST\nGLOBAL\n(aprueba Dirección)\n→ No puede volver' }, className: 'node-blacklist' },

    // FIN
    { id: 'end', type: 'output', position: { x: 750, y: 3100 }, data: { label: '🏁 Ciclo de Vida\nCompleto del Colaborador\nOrange Staffing' }, className: 'node-success' },
  ],

  edges: [
    // Inicio a secciones principales
    { id: 'e_s1', source: 'start', target: 'section_registro' },
    { id: 'e_s2', source: 'start', target: 'section_onboard' },
    { id: 'e_s3', source: 'start', target: 'section_pago' },
    { id: 'e_s4', source: 'start', target: 'section_uniforme' },
    { id: 'e_s5', source: 'start', target: 'section_solicitudes' },
    { id: 'e_s6', source: 'start', target: 'section_vacaciones' },

    // ── 1. Reclutamiento y Registro ──
    { id: 'e1', source: 'section_registro', target: 'reclut_facebook' },
    { id: 'e2', source: 'reclut_facebook', target: 'sms_link' },
    { id: 'e3', source: 'sms_link', target: 'download_app' },
    { id: 'e4', source: 'download_app', target: 'cuenta_precreada', animated: true },
    { id: 'e5', source: 'cuenta_precreada', target: 'llenar_datos' },
    { id: 'e5b', source: 'llenar_datos', target: 'foto_docs', style: { strokeDasharray: '5,5' } },
    { id: 'e5c', source: 'foto_docs', target: 'sin_taxid', label: 'Sin Tax ID', style: { stroke: '#c62828', strokeDasharray: '5,5' } },
    { id: 'e6', source: 'llenar_datos', target: 'blacklist_check' },
    { id: 'e7', source: 'blacklist_check', target: 'rejected', label: 'Encontrado', style: { stroke: '#c62828' } },
    { id: 'e8', source: 'blacklist_check', target: 'pool_recepcion', label: 'Limpio' },
    { id: 'e9', source: 'pool_recepcion', target: 'emp_type' },
    { id: 'e10', source: 'emp_type', target: 'both_orange' },

    // Registro → Gates
    { id: 'e_g0', source: 'both_orange', target: 'section_gates' },

    // ── 2. Gates de Aplicación ──
    { id: 'e_g1', source: 'section_gates', target: 'gate_30' },
    { id: 'e_g2', source: 'section_gates', target: 'gate_60' },
    { id: 'e_g3', source: 'section_gates', target: 'gate_100' },
    { id: 'e_g4', source: 'gate_30', target: 'gate_blocked', label: '<30%', style: { stroke: '#c62828' } },
    { id: 'e_g5', source: 'gate_60', target: 'gate_no_pago', label: '30-59%', style: { stroke: '#c62828' } },
    { id: 'e_g6', source: 'gate_no_pago', target: 'gate_timeline', style: { stroke: '#c62828' } },
    { id: 'e_g7', source: 'gate_30', target: 'gate_60', label: '→ 60%', style: { strokeDasharray: '5,5' } },
    { id: 'e_g8', source: 'gate_60', target: 'gate_100', label: '→ 100%', style: { strokeDasharray: '5,5' } },

    // ── 3. Onboarding ──
    { id: 'e13', source: 'section_onboard', target: 'notif_asignacion' },
    { id: 'e14', source: 'notif_asignacion', target: 'decide' },
    { id: 'e15', source: 'decide', target: 'rechaza_asig', label: 'No', style: { stroke: '#c62828' } },
    { id: 'e15b', source: 'rechaza_asig', target: 'pool_recepcion', label: 'Vuelve al pool', style: { strokeDasharray: '5,5', stroke: '#c62828' } },
    { id: 'e16', source: 'decide', target: 'dia_1', label: 'Sí' },
    { id: 'e17', source: 'dia_1', target: 'inspector_onboard' },
    { id: 'e18', source: 'inspector_onboard', target: 'eval_dia5' },
    { id: 'e19', source: 'eval_dia5', target: 'eval_dia10' },

    // ── 4. Configuración de Pago ──
    { id: 'e23', source: 'section_pago', target: 'metodo_pago' },
    { id: 'e24', source: 'metodo_pago', target: 'transferencia', label: 'Transfer' },
    { id: 'e25', source: 'metodo_pago', target: 'cheque', label: 'Check' },
    { id: 'e26', source: 'transferencia', target: 'validar_bank' },
    { id: 'e27', source: 'validar_bank', target: 'status_verde' },
    { id: 'e28', source: 'cheque', target: 'status_verde' },

    // ── 5. Operación Diaria + Ponchado ──
    { id: 'e29', source: 'status_verde', target: 'section_operacion' },
    { id: 'e30', source: 'section_operacion', target: 'ponchado_entrada' },
    { id: 'e31', source: 'section_operacion', target: 'ponchado_salida' },
    { id: 'e32', source: 'ponchado_entrada', target: 'gps_alert', label: 'GPS falla', style: { stroke: '#c62828', strokeDasharray: '5,5' } },
    { id: 'e33', source: 'ponchado_salida', target: 'hora_validacion' },
    { id: 'e34', source: 'ponchado_entrada', target: 'horas_semana' },
    { id: 'e35', source: 'ponchado_salida', target: 'horas_semana' },
    { id: 'e36', source: 'horas_semana', target: 'desfase' },
    { id: 'e37', source: 'horas_semana', target: 'pago_viernes' },
    { id: 'e38', source: 'pago_viernes', target: 'pago_desglose', style: { strokeDasharray: '5,5' } },
    { id: 'e39', source: 'desfase', target: 'trabajando', style: { strokeDasharray: '5,5' } },
    { id: 'e40', source: 'pago_viernes', target: 'trabajando', animated: true },

    // ── 6. M Lav (pago por cuarto) ──
    { id: 'e_ml1', source: 'section_operacion', target: 'section_mlav', label: 'Si es M Lav', style: { strokeDasharray: '8,4' } },
    { id: 'e_ml2', source: 'section_mlav', target: 'mlav_subir' },
    { id: 'e_ml3', source: 'mlav_subir', target: 'mlav_supervisor' },
    { id: 'e_ml4', source: 'mlav_supervisor', target: 'mlav_calculo' },
    { id: 'e_ml5', source: 'mlav_calculo', target: 'pago_viernes', label: 'A nómina', style: { strokeDasharray: '8,4' } },

    // ── 7. Uniforme ──
    { id: 'e_u1', source: 'section_uniforme', target: 'uniforme_dia' },
    { id: 'e_u2', source: 'uniforme_dia', target: 'recibe_uniforme' },
    { id: 'e_u3', source: 'recibe_uniforme', target: 'cobro_uniforme' },
    { id: 'e_u4', source: 'cobro_uniforme', target: 'firma_uniforme', animated: true },

    // ── 8. Solicitudes del Colaborador ──
    { id: 'e_sol0', source: 'trabajando', target: 'section_solicitudes', style: { strokeDasharray: '5,5' } },
    { id: 'e_sol1', source: 'section_solicitudes', target: 'sol_ajuste_pago' },
    { id: 'e_sol2', source: 'section_solicitudes', target: 'sol_reubicacion' },
    { id: 'e_sol3', source: 'section_solicitudes', target: 'sol_incremento' },
    { id: 'e_sol4', source: 'section_solicitudes', target: 'sol_discrepancia' },
    { id: 'e_sol5', source: 'section_solicitudes', target: 'sol_comp_anual' },
    { id: 'e_sol6', source: 'section_solicitudes', target: 'sol_tiempo_libre' },
    { id: 'e_sol7', source: 'section_solicitudes', target: 'sol_40h_off' },
    { id: 'e_sol8', source: 'section_solicitudes', target: 'sol_comp_extra' },
    { id: 'e_sol9', source: 'section_solicitudes', target: 'sol_ajuste_contrato' },
    { id: 'e_sol10', source: 'sol_ajuste_pago', target: 'sol_enviado' },
    { id: 'e_sol11', source: 'sol_reubicacion', target: 'sol_enviado' },
    { id: 'e_sol12', source: 'sol_incremento', target: 'sol_enviado' },
    { id: 'e_sol13', source: 'sol_discrepancia', target: 'sol_enviado' },
    { id: 'e_sol14', source: 'sol_comp_anual', target: 'sol_enviado' },
    { id: 'e_sol15', source: 'sol_tiempo_libre', target: 'sol_enviado' },
    { id: 'e_sol16', source: 'sol_40h_off', target: 'sol_enviado' },
    { id: 'e_sol17', source: 'sol_comp_extra', target: 'sol_enviado' },
    { id: 'e_sol18', source: 'sol_ajuste_contrato', target: 'sol_enviado' },

    // ── 9. Vacaciones ──
    { id: 'e_v1', source: 'section_vacaciones', target: 'vac_52sem' },
    { id: 'e_v2', source: 'vac_52sem', target: 'vac_promedio' },
    { id: 'e_v3', source: 'vac_promedio', target: 'vac_regla' },
    { id: 'e_v4', source: 'vac_regla', target: 'vac_normal', label: '≥40h/sem' },
    { id: 'e_v5', source: 'vac_regla', target: 'vac_menos40', label: '<40h/sem' },
    { id: 'e_v6', source: 'vac_regla', target: 'vac_freeze', style: { strokeDasharray: '5,5' } },
    { id: 'e_v7', source: 'vac_normal', target: 'vac_visible', style: { strokeDasharray: '5,5' } },
    { id: 'e_v8', source: 'vac_freeze', target: 'vac_aprueba_irene' },
    { id: 'e_v9', source: 'vac_normal', target: 'vac_aprueba_irene', style: { strokeDasharray: '5,5' } },
    { id: 'e_v10', source: 'vac_menos40', target: 'vac_aprueba_irene', style: { strokeDasharray: '5,5' } },

    // ── 10. Retención 16% ──
    { id: 'e_16_1', source: 'section_16pct', target: 'pct_aplica' },
    { id: 'e_16_2', source: 'pct_aplica', target: 'pct_plazo' },
    { id: 'e_16_3', source: 'pct_plazo', target: 'pct_alertas' },
    { id: 'e_16_4', source: 'pct_alertas', target: 'pct_entrega', label: 'Entrega' },
    { id: 'e_16_5', source: 'pct_alertas', target: 'pct_pierde', label: 'No entrega', style: { stroke: '#c62828' } },
    { id: 'e_16_6', source: 'sin_taxid', target: 'section_16pct', label: 'Detalle reglas', style: { strokeDasharray: '8,4' } },

    // ── 11. Cambio de Cuenta Bancaria ──
    { id: 'e_bk1', source: 'section_banco', target: 'banco_solicita' },
    { id: 'e_bk2', source: 'banco_solicita', target: 'banco_solo_dir' },
    { id: 'e_bk3', source: 'banco_solo_dir', target: 'banco_resultado' },
    { id: 'e_bk4', source: 'trabajando', target: 'section_banco', label: 'Necesita cambio', style: { strokeDasharray: '8,4' } },

    // ── 12. No-Show ──
    { id: 'e_ns0', source: 'trabajando', target: 'section_noshow', label: 'No se presenta', style: { stroke: '#c62828', strokeDasharray: '5,5' } },
    { id: 'e_ns1', source: 'section_noshow', target: 'noshow_detect' },
    { id: 'e_ns2', source: 'noshow_detect', target: 'noshow_contacto' },
    { id: 'e_ns3', source: 'noshow_contacto', target: 'noshow_justificado', label: 'Sí' },
    { id: 'e_ns4', source: 'noshow_contacto', target: 'noshow_injustificado', label: 'No', style: { stroke: '#c62828' } },
    { id: 'e_ns5', source: 'noshow_injustificado', target: 'strike_1' },
    { id: 'e_ns6', source: 'strike_1', target: 'strike_2', label: 'Reincide', style: { stroke: '#c62828' } },
    { id: 'e_ns7', source: 'strike_2', target: 'strike_3', label: 'Reincide', style: { stroke: '#c62828' } },
    { id: 'e_ns8', source: 'strike_3', target: 'noshow_patron', style: { strokeDasharray: '5,5' } },

    // ── 13. Injury Report ──
    { id: 'e_inj0', source: 'trabajando', target: 'section_injury', style: { strokeDasharray: '5,5', stroke: '#c62828' } },
    { id: 'e_inj1', source: 'section_injury', target: 'injury_reporte' },
    { id: 'e_inj2', source: 'injury_reporte', target: 'injury_datos' },
    { id: 'e_inj3', source: 'injury_reporte', target: 'injury_fotos' },
    { id: 'e_inj4', source: 'injury_datos', target: 'injury_firma' },
    { id: 'e_inj5', source: 'injury_fotos', target: 'injury_firma' },
    { id: 'e_inj6', source: 'injury_firma', target: 'injury_workcomp', animated: true },

    // ── 14. Retención Temporal ──
    { id: 'e_rt0', source: 'trabajando', target: 'section_retencion', label: 'Termina asignación', style: { strokeDasharray: '8,4' } },
    { id: 'e_rt1', source: 'section_retencion', target: 'ret_termina_asig' },
    { id: 'e_rt2', source: 'ret_termina_asig', target: 'ret_reclutadora' },
    { id: 'e_rt3', source: 'ret_reclutadora', target: 'ret_nueva_oferta' },
    { id: 'e_rt4', source: 'ret_reclutadora', target: 'ret_meta_72h', style: { strokeDasharray: '5,5' } },
    { id: 'e_rt5', source: 'ret_nueva_oferta', target: 'trabajando', label: 'Acepta', style: { strokeDasharray: '8,4' } },
    { id: 'e_rt6', source: 'ret_nueva_oferta', target: 'ret_inactivo', label: 'No hay hotel' },

    // ── 15. Estados del Empleado ──
    { id: 'e_est0', source: 'trabajando', target: 'section_estados', style: { strokeDasharray: '5,5' } },
    { id: 'e_est1', source: 'section_estados', target: 'estado_activo' },
    { id: 'e_est2', source: 'section_estados', target: 'estado_inactivo' },
    { id: 'e_est3', source: 'section_estados', target: 'estado_suspendido' },
    { id: 'e_est4', source: 'estado_activo', target: 'estado_terminado', label: 'Salida/Despido', style: { stroke: '#c62828', strokeDasharray: '5,5' } },
    { id: 'e_est5', source: 'estado_activo', target: 'estado_bl_hotel', label: 'BL hotel', style: { stroke: '#c62828', strokeDasharray: '5,5' } },
    { id: 'e_est6', source: 'estado_suspendido', target: 'estado_activo', label: 'Regresa', style: { strokeDasharray: '5,5' } },
    { id: 'e_est7', source: 'estado_suspendido', target: 'estado_terminado', label: 'No regresa', style: { stroke: '#c62828', strokeDasharray: '5,5' } },
    { id: 'e_est8', source: 'estado_inactivo', target: 'estado_activo', label: 'Reasignado', style: { strokeDasharray: '5,5' } },
    { id: 'e_est9', source: 'strike_3', target: 'estado_bl_global', label: 'Decide Dirección', style: { stroke: '#c62828' } },
    { id: 'e_est10', source: 'estado_bl_hotel', target: 'estado_activo', label: 'Otro hotel', style: { strokeDasharray: '8,4' } },
    { id: 'e_est11', source: 'ret_inactivo', target: 'estado_inactivo', style: { strokeDasharray: '5,5' } },

    // ── Fin ──
    { id: 'e_end1', source: 'estado_terminado', target: 'end' },
    { id: 'e_end2', source: 'estado_bl_global', target: 'end', style: { stroke: '#c62828' } },
    { id: 'e_end3', source: 'injury_workcomp', target: 'estado_suspendido', label: 'Licencia médica', style: { strokeDasharray: '8,4' } },
  ]
}

export default colaboradorRolFlow
