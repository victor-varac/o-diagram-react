// ═══════════════════════════════════════════════════════════════════════
// PROCESO DIGITAL: CONTABILIDAD (Mónica)
// Nivel 2-3: Operativa + Automatización
// Cómo cambia la contabilidad con el sistema digital
// ═══════════════════════════════════════════════════════════════════════
//
// SECCIONES:
//   1. Recepción Automática de TimeSheets
//   2. Validaciones Automáticas (12 checks)
//   3. Cálculo de Nómina Automatizado
//   4. Envío a Paychex y Journal Auto
//   5. Invoices y Facturación Automática
//   6. Vacaciones: Cálculo Auto
//   7. Gestión de Cheques y Extemporáneos
//   8. Descuentos y Credit Notes Auto
//   9. Dashboard y Reportes en Tiempo Real
//
// ═══════════════════════════════════════════════════════════════════════

const contabilidadDigitalFlow = {
  nodes: [
    // ── INICIO ──
    { id: 'start', type: 'input', position: { x: 600, y: 0 }, data: { label: '⚡ Contabilidad Digital\nMónica / Billing\ncon Sistema Orange' }, className: 'node-digital-section' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 1: RECEPCIÓN AUTO DE TIMESHEETS
    // ═══════════════════════════════════════════════════════
    { id: 'section_ts', type: 'default', position: { x: 50, y: 150 }, data: { label: '📥 RECEPCIÓN\nAUTO TIMESHEETS' }, className: 'node-digital-section' },

    { id: 'ts_auto_recibe', type: 'default', position: { x: 50, y: 300 }, data: { label: '📤 TS Llegan Auto:\nManagers suben en portal\n→ Sistema recibe\n  instantáneamente\n→ Confirmación auto\n  al hotel' }, className: 'node-digital-auto' },

    { id: 'ts_reminder', type: 'default', position: { x: 250, y: 300 }, data: { label: '🔔 Reminders Auto:\nSáb: solicitar TS\nLun c/3h: faltantes\nMar: alerta a Irene\n→ Escalación progresiva\n(antes: correo manual)' }, className: 'node-digital-notification' },

    { id: 'ts_faltantes', type: 'default', position: { x: 50, y: 470 }, data: { label: '📊 Dashboard Faltantes:\nVista en tiempo real\n"X de Y hoteles\nhan enviado TS"\n→ Click para ver cuáles\n(antes: revisar email)' }, className: 'node-digital-auto' },

    { id: 'ts_deadline', type: 'default', position: { x: 250, y: 470 }, data: { label: '🔴 Miércoles Auto:\nSistema cierra recepción\nTS después de deadline\n→ Extemporáneo = proceso\n  aparte con aprobación' }, className: 'node-digital-rules' },

    // ELIMINADO
    { id: 'ts_eliminado', type: 'default', position: { x: 450, y: 300 }, data: { label: '❌ Descargar TS de\nemail + subir a carpeta\nmanualmente + confirmar\nrecepción por email\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 2: VALIDACIONES AUTOMÁTICAS
    // ═══════════════════════════════════════════════════════
    { id: 'section_validacion', type: 'default', position: { x: 50, y: 650 }, data: { label: '✅ VALIDACIONES\nAUTOMÁTICAS' }, className: 'node-digital-section' },

    { id: 'val_12checks', type: 'default', position: { x: 50, y: 800 }, data: { label: '⚙️ 12 Validaciones Auto:\n1. Empleado en sistema\n2. ID Paychex activo\n3. Horas <40 regular\n4. Overtime >40.01\n5. Rate correcto\n6. Hotel activo\n(continúa →)' }, className: 'node-digital-rules' },

    { id: 'val_12checks_b', type: 'default', position: { x: 250, y: 800 }, data: { label: '⚙️ (continuación):\n7. App ≥60% pagable\n8. Banco validado\n9. Sin duplicados\n10. Horas vs ponchado GPS\n11. Descuentos aplicados\n12. Totales cuadran' }, className: 'node-digital-rules' },

    { id: 'val_resultado', type: 'default', position: { x: 150, y: 970 }, data: { label: '📊 Resultado Auto:\n✅ Pasa todo → Verde\n⚠️ Advertencias → Amarillo\n  (revisar pero procede)\n❌ Errores → Rojo\n  (bloquea hasta corregir)' }, className: 'node-digital-auto' },

    { id: 'val_excepciones', type: 'default', position: { x: 350, y: 970 }, data: { label: '🔍 Solo Excepciones:\nContabilidad solo revisa\nlos items amarillos/rojos\n→ 90% pasa automático\n(antes: revisar TODO\nmanualmente)' }, className: 'node-digital-hybrid' },

    // ELIMINADO
    { id: 'val_eliminado', type: 'default', position: { x: 450, y: 800 }, data: { label: '❌ Captura manual en\nInvoice/PrePay/Factors\n+ confirmar con inspectoras\npor WhatsApp\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 3: CÁLCULO NÓMINA AUTO
    // ═══════════════════════════════════════════════════════
    { id: 'section_nomina', type: 'default', position: { x: 500, y: 150 }, data: { label: '💵 CÁLCULO\nNÓMINA AUTO' }, className: 'node-digital-section' },

    { id: 'nom_calculo', type: 'default', position: { x: 500, y: 300 }, data: { label: '⚙️ Auto-Cálculo:\nPor cada empleado:\nHoras × Pay Rate\n- Deducciones auto\n  (tax, uniforme, 16%)\n= Neto a pagar' }, className: 'node-digital-auto' },

    { id: 'nom_3archivos', type: 'default', position: { x: 700, y: 300 }, data: { label: '📁 3 Archivos Auto:\n1. Pre-Payroll (ID→Total)\n2. Factors (Bill por hotel)\n3. Invoice (verificación)\n→ Generados por sistema\n(antes: capturar a mano)' }, className: 'node-digital-auto' },

    { id: 'nom_4envio', type: 'default', position: { x: 500, y: 470 }, data: { label: '📤 4 Archivos a Sandra\nAuto-Generados:\n1. Pre-Payroll\n2. Separate Check\n3. Discounts\n4. Bonus\n→ Envío con 1 click' }, className: 'node-digital-auto' },

    { id: 'nom_colores', type: 'default', position: { x: 700, y: 470 }, data: { label: '🎨 Status Auto:\n🟢 Lista\n🟡 Pendiente\n🟣 Completa\n🔵 Revisada\n(antes: colorear carpetas\nmanualmente en Drive)' }, className: 'node-digital-auto' },

    // ELIMINADO
    { id: 'nom_eliminado', type: 'default', position: { x: 900, y: 300 }, data: { label: '❌ Capturar datos\nen Excel manualmente\npara cada hotel\ncada semana\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 4: JOURNAL Y PAYCHEX
    // ═══════════════════════════════════════════════════════
    { id: 'section_journal', type: 'default', position: { x: 500, y: 650 }, data: { label: '📋 JOURNAL\nY PAYCHEX' }, className: 'node-digital-section' },

    { id: 'jnl_recibe', type: 'default', position: { x: 500, y: 800 }, data: { label: '📋 Recibir Journal\nde Sandra (Paychex)\n→ Auto-comparar vs\n  Pre-Payroll enviado' }, className: 'node-digital-auto' },

    { id: 'jnl_compare', type: 'default', position: { x: 700, y: 800 }, data: { label: '⚙️ Comparación Auto:\nSistema detecta\ndiferencias entre\nJournal y Pre-Payroll\n→ Marca errores' }, className: 'node-digital-rules' },

    { id: 'jnl_ok', type: 'default', position: { x: 500, y: 970 }, data: { label: '✅ Sin errores:\n→ Auto-notifica Sandra\n"Proceder con impresión"\n→ Nómina liberada\n→ Reportar a Irene auto' }, className: 'node-digital-auto' },

    { id: 'jnl_error', type: 'default', position: { x: 700, y: 970 }, data: { label: '❌ Con errores:\n→ Ajustes auto-generados\n→ Enviar corrección\n→ Esperar 2do Journal\n(loop hasta correcto)' }, className: 'node-digital-rules' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 5: INVOICES Y FACTURACIÓN
    // ═══════════════════════════════════════════════════════
    { id: 'section_invoices', type: 'default', position: { x: 950, y: 150 }, data: { label: '🧾 INVOICES\nAUTOMÁTICAS' }, className: 'node-digital-section' },

    { id: 'inv_auto_gen', type: 'default', position: { x: 950, y: 300 }, data: { label: '⚙️ Auto-Generación:\nPDF Invoice 3 tabs\npor hotel generado\nautomáticamente\ncon # consecutivo\n→ Jueves' }, className: 'node-digital-auto' },

    { id: 'inv_auto_send', type: 'default', position: { x: 950, y: 470 }, data: { label: '📧 Auto-Envío:\nDesde billing@\na cada hotel\nCC: irene@ + goodman\n→ 1 click para todos\n(antes: hotel por hotel)' }, className: 'node-digital-auto' },

    { id: 'inv_tracking', type: 'default', position: { x: 1150, y: 470 }, data: { label: '📊 Tracking Pagos:\n• Invoice enviada ✓\n• Net 15 vencimiento\n• Pagado / Pendiente\n• Alertas si >15 días\n→ Dashboard cobros' }, className: 'node-digital-rules' },

    // ELIMINADO
    { id: 'inv_eliminado', type: 'default', position: { x: 1150, y: 300 }, data: { label: '❌ Descargar PDF +\nbuscar correos en\nALL CLIENT SOP +\nenviar uno por uno\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 6: VACACIONES AUTO
    // ═══════════════════════════════════════════════════════
    { id: 'section_vacaciones', type: 'default', position: { x: 950, y: 650 }, data: { label: '🌴 VACACIONES\nCÁLCULO AUTO' }, className: 'node-digital-section' },

    { id: 'vac_solicitud', type: 'default', position: { x: 950, y: 800 }, data: { label: '📱 Solicitud llega\ndigital del empleado\n→ Sistema auto-verifica:\n  ≥52 semanas continuas?\n  Constancia semanal?\n(antes: verificar a mano)' }, className: 'node-digital-auto' },

    { id: 'vac_calculo', type: 'default', position: { x: 950, y: 970 }, data: { label: '⚙️ Cálculo Auto:\nPromedio horas 52 sem\n× primer rate\n= Monto vacaciones\n>32h → 40h pago\n<32h → Notificar para\n  autorización' }, className: 'node-digital-rules' },

    { id: 'vac_irene', type: 'default', position: { x: 1150, y: 970 }, data: { label: '🔑 Irene Aprueba:\nNotificación con\nmonto y desglose\n→ Aprueba con click\n→ Auto-agrega a\n  Separate Check' }, className: 'node-digital-human' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 7: CHEQUES Y EXTEMPORÁNEOS
    // ═══════════════════════════════════════════════════════
    { id: 'section_cheques', type: 'default', position: { x: 50, y: 1150 }, data: { label: '📑 CHEQUES Y\nEXTEMPORÁNEOS' }, className: 'node-digital-section' },

    { id: 'chq_cancel', type: 'default', position: { x: 50, y: 1300 }, data: { label: '❌ Cancel/Reissue:\nFormulario digital\n→ Razón + aprobación\n→ Auto-refleja en\n  siguiente nómina' }, className: 'node-digital-auto' },

    { id: 'chq_extemp', type: 'default', position: { x: 250, y: 1300 }, data: { label: '⚡ Extemporáneos:\nFormulario digital\n→ Auto-requiere\n  aprobación Irene\n→ Control en sistema\n  (no en Drive manual)' }, className: 'node-digital-hybrid' },

    { id: 'chq_sandra', type: 'default', position: { x: 150, y: 1470 }, data: { label: '📤 Auto-Enviar\na Sandra/Paychex\ncon todos los datos\npre-llenados\n→ Se refleja en sistema' }, className: 'node-digital-auto' },

    // ELIMINADO
    { id: 'chq_eliminado', type: 'default', position: { x: 450, y: 1300 }, data: { label: '❌ Control en Drive\n"EXTEMPORANEOUS CHECKS"\n+ cortar vía WhatsApp\ncon Karina\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 8: DESCUENTOS Y CREDIT NOTES
    // ═══════════════════════════════════════════════════════
    { id: 'section_descuentos', type: 'default', position: { x: 500, y: 1150 }, data: { label: '💸 DESCUENTOS\nY CREDIT NOTES' }, className: 'node-digital-section' },

    { id: 'desc_auto', type: 'default', position: { x: 500, y: 1300 }, data: { label: '⚙️ Descuentos Auto:\nUniformes → del inspector\nPago duplicado → detectado\n→ Auto-aplicado al\n  siguiente cheque\n(antes: archivo manual)' }, className: 'node-digital-auto' },

    { id: 'cn_auto', type: 'default', position: { x: 700, y: 1300 }, data: { label: '📝 Credit Notes Auto:\nSi error en Invoice\n→ Sistema genera CN\n  con diferencia marcada\n→ Saldo auto-calculado\n(antes: copiar/pegar manual)' }, className: 'node-digital-auto' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 9: DASHBOARD Y REPORTES
    // ═══════════════════════════════════════════════════════
    { id: 'section_dashboard', type: 'default', position: { x: 300, y: 1600 }, data: { label: '📊 DASHBOARD\nEN TIEMPO REAL' }, className: 'node-digital-section' },

    { id: 'dash_realtime', type: 'default', position: { x: 200, y: 1750 }, data: { label: '📊 Dashboard Auto:\n• TS recibidos/faltantes\n• Nómina: total/pagado\n• Invoices: enviadas/cobradas\n• Discrepancias abiertas\n• Extemporáneos pendientes\nTodo en TIEMPO REAL' }, className: 'node-digital-auto' },

    { id: 'dash_paychex', type: 'default', position: { x: 450, y: 1750 }, data: { label: '🏦 Paychex Integrado:\nCrear/Desactivar IDs\n→ Desde el sistema\n→ Sin ir a otra plataforma\n→ Work Records sincronizados\n(5 hoteles con ponchado)' }, className: 'node-digital-auto' },

    { id: 'dash_reportes', type: 'default', position: { x: 650, y: 1750 }, data: { label: '📋 Reportes Auto:\n• Diario → auto c/2h\n• Faltantes → auto\n• Pendientes insp. → auto\n• Semanal → auto-generado\n(antes: WhatsApp + Drive)' }, className: 'node-digital-auto' },

    // ELIMINADO
    { id: 'dash_eliminado', type: 'default', position: { x: 650, y: 1600 }, data: { label: '❌ Reportes manuales\nvía WhatsApp "Accounting\nCHOLULA" + archivos\nen Drive\n→ ELIMINADO' }, className: 'node-digital-eliminated' },

    // ── FIN ──
    { id: 'end', type: 'output', position: { x: 400, y: 1920 }, data: { label: '⚡ Contabilidad Digital\nCompleta\nNivel 2-3: Operativa\n+ Automatización' }, className: 'node-digital-section' },
  ],

  edges: [
    // Inicio
    { id: 'e_s1', source: 'start', target: 'section_ts' },
    { id: 'e_s2', source: 'start', target: 'section_nomina' },
    { id: 'e_s3', source: 'start', target: 'section_invoices' },

    // ══ 1. Recepción TS ══
    { id: 'e_t1', source: 'section_ts', target: 'ts_auto_recibe', animated: true },
    { id: 'e_t2', source: 'section_ts', target: 'ts_reminder' },
    { id: 'e_t3', source: 'ts_auto_recibe', target: 'ts_faltantes' },
    { id: 'e_t4', source: 'ts_reminder', target: 'ts_deadline' },
    { id: 'e_t5', source: 'ts_faltantes', target: 'section_validacion' },
    { id: 'e_t6', source: 'ts_deadline', target: 'section_validacion' },

    // ══ 2. Validaciones ══
    { id: 'e_v1', source: 'section_validacion', target: 'val_12checks', animated: true },
    { id: 'e_v2', source: 'val_12checks', target: 'val_12checks_b' },
    { id: 'e_v3', source: 'val_12checks_b', target: 'val_resultado', animated: true },
    { id: 'e_v4', source: 'val_resultado', target: 'val_excepciones' },

    // ══ 3. Cálculo Nómina ══
    { id: 'e_n1', source: 'section_nomina', target: 'nom_calculo', animated: true },
    { id: 'e_n2', source: 'nom_calculo', target: 'nom_3archivos' },
    { id: 'e_n3', source: 'nom_3archivos', target: 'nom_4envio' },
    { id: 'e_n4', source: 'nom_calculo', target: 'nom_colores', style: { strokeDasharray: '5,5' } },
    { id: 'e_n5', source: 'val_excepciones', target: 'nom_4envio', label: 'Corregido', style: { strokeDasharray: '8,4' } },

    // ══ 4. Journal ══
    { id: 'e_j1', source: 'nom_4envio', target: 'section_journal' },
    { id: 'e_j2', source: 'section_journal', target: 'jnl_recibe' },
    { id: 'e_j3', source: 'jnl_recibe', target: 'jnl_compare', animated: true },
    { id: 'e_j4', source: 'jnl_compare', target: 'jnl_ok', label: 'OK' },
    { id: 'e_j5', source: 'jnl_compare', target: 'jnl_error', label: 'Errores', style: { stroke: '#c62828' } },
    { id: 'e_j6', source: 'jnl_error', target: 'jnl_recibe', label: '2do Journal', style: { strokeDasharray: '5,5', stroke: '#c62828' } },

    // ══ 5. Invoices ══
    { id: 'e_i1', source: 'section_invoices', target: 'inv_auto_gen', animated: true },
    { id: 'e_i2', source: 'inv_auto_gen', target: 'inv_auto_send' },
    { id: 'e_i3', source: 'inv_auto_send', target: 'inv_tracking', animated: true },

    // ══ 6. Vacaciones ══
    { id: 'e_vc1', source: 'jnl_ok', target: 'section_vacaciones', style: { strokeDasharray: '5,5' } },
    { id: 'e_vc2', source: 'section_vacaciones', target: 'vac_solicitud' },
    { id: 'e_vc3', source: 'vac_solicitud', target: 'vac_calculo', animated: true },
    { id: 'e_vc4', source: 'vac_calculo', target: 'vac_irene' },

    // ══ 7. Cheques ══
    { id: 'e_ch1', source: 'jnl_ok', target: 'section_cheques', style: { strokeDasharray: '5,5' } },
    { id: 'e_ch2', source: 'section_cheques', target: 'chq_cancel' },
    { id: 'e_ch3', source: 'section_cheques', target: 'chq_extemp' },
    { id: 'e_ch4', source: 'chq_cancel', target: 'chq_sandra' },
    { id: 'e_ch5', source: 'chq_extemp', target: 'chq_sandra' },

    // ══ 8. Descuentos ══
    { id: 'e_d1', source: 'val_excepciones', target: 'section_descuentos', style: { strokeDasharray: '5,5' } },
    { id: 'e_d2', source: 'section_descuentos', target: 'desc_auto' },
    { id: 'e_d3', source: 'section_descuentos', target: 'cn_auto' },

    // ══ 9. Dashboard ══
    { id: 'e_db1', source: 'section_descuentos', target: 'section_dashboard', style: { strokeDasharray: '5,5' } },
    { id: 'e_db2', source: 'chq_sandra', target: 'section_dashboard', style: { strokeDasharray: '5,5' } },
    { id: 'e_db3', source: 'section_dashboard', target: 'dash_realtime' },
    { id: 'e_db4', source: 'section_dashboard', target: 'dash_paychex' },
    { id: 'e_db5', source: 'section_dashboard', target: 'dash_reportes' },

    // Fin
    { id: 'e_end1', source: 'dash_realtime', target: 'end' },
    { id: 'e_end2', source: 'dash_paychex', target: 'end' },
    { id: 'e_end3', source: 'dash_reportes', target: 'end' },
  ]
}

export default contabilidadDigitalFlow
