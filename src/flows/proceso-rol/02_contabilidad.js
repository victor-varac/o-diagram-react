const contabilidadRolFlow = {
  nodes: [
    // INICIO
    { id: 'start', type: 'input', position: { x: 700, y: 0 }, data: { label: '💰 Contabilidad\n(billing@strategycstaffing.com)' }, className: 'node-accounting' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 1: ROL SEMANAL (Calendario Lun-Vie)
    // ═══════════════════════════════════════════════════════
    { id: 'section_semana', type: 'default', position: { x: 50, y: 150 }, data: { label: '📅 ROL SEMANAL\nCalendario Lun-Vie' }, className: 'node-info' },

    // Sábado
    { id: 'sabado', type: 'default', position: { x: -100, y: 280 }, data: { label: '📧 SÁBADO\nCorreo masivo a hoteles\nsolicitando timesheets' }, className: 'node-info' },

    // Lunes
    { id: 'lunes', type: 'default', position: { x: 50, y: 280 }, data: { label: '📅 LUNES' }, className: 'node-info' },
    { id: 'lun_1', type: 'default', position: { x: -50, y: 400 }, data: { label: '📥 Descargar TS\ny subir a carpeta' }, className: 'node-info' },
    { id: 'lun_2', type: 'default', position: { x: 90, y: 400 }, data: { label: '📊 Captura en\nInvoice, Pre-Pay,\nFactors' }, className: 'node-accounting' },
    { id: 'lun_3', type: 'default', position: { x: 230, y: 400 }, data: { label: '📧 Reporte hoteles\nfaltantes c/3h' }, className: 'node-warning' },
    { id: 'lun_4', type: 'default', position: { x: 230, y: 280 }, data: { label: '🔧 Solución\nDiscrepancias' }, className: 'node-warning' },
    { id: 'lun_5', type: 'default', position: { x: -50, y: 510 }, data: { label: '📱 Subir Apps\na Monday' }, className: 'node-info' },
    { id: 'lun_6', type: 'default', position: { x: 90, y: 510 }, data: { label: '📋 Reporte pendientes\ncon Inspectoras' }, className: 'node-quality' },

    // Martes
    { id: 'martes', type: 'default', position: { x: 400, y: 280 }, data: { label: '📅 MARTES\n(= Lunes + extra)' }, className: 'node-info' },
    { id: 'mar_extra', type: 'default', position: { x: 400, y: 400 }, data: { label: '📤 Reporte a Irene\ne Inspectoras de\nhoteles faltantes' }, className: 'node-critical' },

    // Miércoles
    { id: 'miercoles', type: 'default', position: { x: 580, y: 280 }, data: { label: '📅 MIÉRCOLES\n🔴 CIERRE NÓMINA' }, className: 'node-critical' },
    { id: 'mie_todos', type: 'default', position: { x: 580, y: 400 }, data: { label: '✅ TODOS los hoteles\ndeben estar capturados' }, className: 'node-success' },

    // Jueves
    { id: 'jueves', type: 'default', position: { x: 770, y: 280 }, data: { label: '📅 JUEVES' }, className: 'node-info' },
    { id: 'jue_revision', type: 'default', position: { x: 700, y: 400 }, data: { label: '🔍 Revisión y\nEnvío de Nómina' }, className: 'node-accounting' },
    { id: 'jue_journal', type: 'default', position: { x: 840, y: 400 }, data: { label: '📋 Revisión Journal\n+ Envío Ajustes' }, className: 'node-accounting' },
    { id: 'jue_invoices', type: 'default', position: { x: 770, y: 510 }, data: { label: '🧾 Envío Invoices\na Hoteles (PDF 3 tabs)' }, className: 'node-hotel' },
    { id: 'jue_reporte', type: 'default', position: { x: 920, y: 510 }, data: { label: '📊 Reporte completo\ninvoices + TS semana' }, className: 'node-info' },

    // Viernes
    { id: 'viernes', type: 'default', position: { x: 1050, y: 280 }, data: { label: '📅 VIERNES' }, className: 'node-info' },
    { id: 'vie_carpeta', type: 'default', position: { x: 980, y: 400 }, data: { label: '📁 Crear carpeta\nsiguiente semana' }, className: 'node-info' },
    { id: 'vie_totales', type: 'default', position: { x: 1120, y: 400 }, data: { label: '📊 Subir totales\ninvoices a Invoices\nAbiertas' }, className: 'node-accounting' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 2: CAPTURA DE DATOS (3 archivos)
    // ═══════════════════════════════════════════════════════
    { id: 'section_captura', type: 'default', position: { x: 50, y: 650 }, data: { label: '📊 CAPTURA DE DATOS\n📁 Payroll (año/mes/sem/hotel)' }, className: 'node-accounting' },
    { id: 'ts_descarga', type: 'default', position: { x: -80, y: 780 }, data: { label: '📥 Descargar TS\nde correo' }, className: 'node-info' },
    { id: 'ts_confirma', type: 'default', position: { x: -80, y: 890 }, data: { label: '📧 Confirmar recepción\nal hotel (EMAIL\nRESPONSES)' }, className: 'node-hotel' },
    { id: 'invoice_week', type: 'default', position: { x: 80, y: 780 }, data: { label: '📋 Invoice → tab "week"\nTabla empleados semana' }, className: 'node-accounting' },
    { id: 'confirmar_insp', type: 'default', position: { x: 80, y: 890 }, data: { label: '🏆 Confirmar con\nInspectoras (WhatsApp\nGrupo 3 Daily Op)' }, className: 'node-quality' },
    { id: 'verificar_app', type: 'default', position: { x: 240, y: 780 }, data: { label: '📱 Verificar App en\nMonday + ID Paychex\npara nuevos' }, className: 'node-warning' },

    // Reglas de horas
    { id: 'horas_regla', type: 'default', position: { x: 240, y: 890 }, data: { label: '⏰ Horas Regulares <40h\nOvertime >40.01h\n(celdas separadas)' }, className: 'node-warning' },

    // 3 Archivos de salida
    { id: 'file_prepay', type: 'default', position: { x: -80, y: 1020 }, data: { label: '📄 PRE-PAYROLL\nID→Total Pay + Hotel\n(verificar rates vs\nDATOS HOTELES)' }, className: 'node-accounting' },
    { id: 'file_factors', type: 'default', position: { x: 80, y: 1020 }, data: { label: '📄 FACTORS\nTotal Bill por hotel\n+ folio invoice' }, className: 'node-accounting' },
    { id: 'file_invoice', type: 'default', position: { x: 240, y: 1020 }, data: { label: '📄 INVOICE\nTotal Pay Rate =\nTotal Bill (verificar)' }, className: 'node-accounting' },

    // Color de carpetas
    { id: 'color_system', type: 'default', position: { x: 80, y: 1150 }, data: { label: '🎨 Sistema de Colores:\n🟢Lista 🟡Pendiente\n🟣Completa 🔵Revisada\n🔵Reporte' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 3: ENVÍO DE NÓMINA (Sandra / Paychex)
    // ═══════════════════════════════════════════════════════
    { id: 'section_nomina', type: 'default', position: { x: 450, y: 650 }, data: { label: '💵 ENVÍO DE NÓMINA\n→ Sandra (Paychex)' }, className: 'node-accounting' },
    { id: 'nomina_deadline', type: 'default', position: { x: 450, y: 780 }, data: { label: '🔴 Nómina lista\nMiércoles o Jueves AM' }, className: 'node-critical' },
    { id: 'nomina_archivos', type: 'default', position: { x: 450, y: 890 }, data: { label: '📤 Enviar desde\nirenetodoorange@gmail\na sljudge@paychex' }, className: 'node-info' },
    { id: 'nomina_4files', type: 'default', position: { x: 600, y: 890 }, data: { label: '📁 4 Archivos:\n1. Pre-Payroll\n2. Separate Check\n3. Discounts\n4. Bonus' }, className: 'node-accounting' },
    { id: 'journal_recibe', type: 'default', position: { x: 450, y: 1020 }, data: { label: '📋 Recibir Journal\nde Sandra' }, className: 'node-info' },
    { id: 'journal_revisar', type: 'default', position: { x: 450, y: 1130 }, data: { label: '🔍 Revisar Journal\nvs Pre-Payroll\n¿Cheques correctos?' }, className: 'node-warning' },
    { id: 'journal_error', type: 'default', position: { x: 600, y: 1130 }, data: { label: '❌ Errores →\nEnviar ajustes →\nEsperar 2do Journal' }, className: 'node-critical' },
    { id: 'journal_ok', type: 'default', position: { x: 450, y: 1250 }, data: { label: '✅ Todo correcto →\nNotificar a Sandra:\nImprimir + Subir' }, className: 'node-success' },
    { id: 'nomina_liberada', type: 'default', position: { x: 450, y: 1360 }, data: { label: '💰 Nómina Liberada\n→ Reportar a Irene' }, className: 'node-success' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 4: ENVÍO DE INVOICES
    // ═══════════════════════════════════════════════════════
    { id: 'section_invoices', type: 'default', position: { x: 800, y: 650 }, data: { label: '🧾 ENVÍO DE INVOICES\nTodos los Jueves' }, className: 'node-hotel' },
    { id: 'inv_descarga', type: 'default', position: { x: 800, y: 780 }, data: { label: '📥 Descargar Invoice\nPDF completo (3 tabs)' }, className: 'node-accounting' },
    { id: 'inv_correos', type: 'default', position: { x: 800, y: 890 }, data: { label: '📧 Correos en\n📁 ALL CLIENT SOP\n+ EMAIL RESPONSES' }, className: 'node-info' },
    { id: 'inv_envio', type: 'default', position: { x: 800, y: 1000 }, data: { label: '📤 Enviar desde billing@\nCC oculto: irene@ +\nrhicks@goodmancf.com' }, className: 'node-hotel' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 5: MONDAY (Plataforma)
    // ═══════════════════════════════════════════════════════
    { id: 'section_monday', type: 'default', position: { x: 1100, y: 150 }, data: { label: '📱 MONDAY\nPlataforma' }, className: 'node-info' },
    { id: 'monday_rh', type: 'default', position: { x: 1000, y: 280 }, data: { label: '👤 RH\n2.1.1 Enrollment Form\n(Apps con ID oficial)' }, className: 'node-recruitment' },
    { id: 'monday_supervision', type: 'default', position: { x: 1150, y: 280 }, data: { label: '🏆 Supervisión\n3.2.1 Uniform Delivery\n(Inspectoras suben)' }, className: 'node-quality' },
    { id: 'monday_accounting', type: 'default', position: { x: 1300, y: 280 }, data: { label: '💰 Accounting\n4.1 Payment\nDiscrepancies' }, className: 'node-accounting' },
    { id: 'monday_app_detail', type: 'default', position: { x: 1000, y: 410 }, data: { label: '📋 App: Generales,\nFoto ID, Hotel,\nPosición, Teléfono,\n# Emergencia' }, className: 'node-info' },
    { id: 'monday_to_paychex', type: 'default', position: { x: 1000, y: 540 }, data: { label: '→ Crear ID Paychex\n→ Agregar # ID\nen Monday' }, className: 'node-accounting' },
    { id: 'monday_uniform_detail', type: 'default', position: { x: 1150, y: 410 }, data: { label: '👕 Uniforme:\n$30 completo / $15 pieza\n→ Agregar a Discounts\n→ Status: Cobrado' }, className: 'node-quality' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 6: PAYCHEX
    // ═══════════════════════════════════════════════════════
    { id: 'section_paychex', type: 'default', position: { x: 1100, y: 650 }, data: { label: '🏦 PAYCHEX\nGestión de IDs' }, className: 'node-accounting' },
    { id: 'paychex_crear', type: 'default', position: { x: 1000, y: 780 }, data: { label: '➕ Crear ID\nW2 (impuestos) o\n1099 (sin impuestos)' }, className: 'node-info' },
    { id: 'paychex_req', type: 'default', position: { x: 1000, y: 890 }, data: { label: '⚠️ Requiere App en\nMonday con ID oficial\n(pasaporte/green card)' }, className: 'node-warning' },
    { id: 'paychex_desact', type: 'default', position: { x: 1150, y: 780 }, data: { label: '🔴 Desactivar ID\nUser → Employment\n→ Terminate → Save' }, className: 'node-critical' },
    { id: 'paychex_taxes', type: 'default', position: { x: 1300, y: 780 }, data: { label: '💲 Taxes (W2)\nQuitar impuestos\nGA State Tax → No' }, className: 'node-info' },
    { id: 'paychex_checks', type: 'default', position: { x: 1150, y: 890 }, data: { label: '🔍 Check Sub\nVer PDF cheque +\nPay Rate (para\ncalcular vacaciones)' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 7: WORK RECORDS (Ponchado Digital)
    // ═══════════════════════════════════════════════════════
    { id: 'section_workrecords', type: 'default', position: { x: 1100, y: 1020 }, data: { label: '⏰ WORK RECORDS\nPonchado Digital (5 hoteles)' }, className: 'node-hotel' },
    { id: 'wr_hoteles', type: 'default', position: { x: 1000, y: 1150 }, data: { label: '🏨 Hampton Midtown\nHilton Garden Midtown\nHyatt House Downtown\nSpringHill Buford\nGeorgian Terrace' }, className: 'node-hotel' },
    { id: 'wr_descarga', type: 'default', position: { x: 1150, y: 1150 }, data: { label: '📥 Descargar TS:\nInvoices → Invoice\nCustomers → Hotel\n→ # Factura → Create' }, className: 'node-info' },
    { id: 'wr_verde', type: 'default', position: { x: 1300, y: 1150 }, data: { label: '🟢 Horas en verde\n= Aprobadas y listas' }, className: 'node-success' },
    { id: 'wr_agregar', type: 'default', position: { x: 1150, y: 1270 }, data: { label: '👤 Agregar personas:\nSSN = tel sin 3 dígitos\n+ 00 → Compartir a\ninspectora' }, className: 'node-info' },
    { id: 'wr_ajustar', type: 'default', position: { x: 1300, y: 1270 }, data: { label: '⏰ Ajustar horas:\nSave time card (editar)\nAdd time (nuevo día)\n2 partes: entrada-lunch\nregreso-salida' }, className: 'node-warning' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 8: VACACIONES
    // ═══════════════════════════════════════════════════════
    { id: 'section_vacaciones', type: 'default', position: { x: 450, y: 1500 }, data: { label: '🌴 VACACIONES' }, className: 'node-info' },
    { id: 'vac_solicitud', type: 'default', position: { x: 350, y: 1630 }, data: { label: '📋 Solicitud vía\nInspectora → Contabilidad' }, className: 'node-quality' },
    { id: 'vac_fecha', type: 'default', position: { x: 350, y: 1750 }, data: { label: '📅 Verificar fecha\ningreso: ≥1 año\ncumplido' }, className: 'node-warning' },
    { id: 'vac_constancia', type: 'default', position: { x: 350, y: 1870 }, data: { label: '📊 Verificar\nconstancia semana\na semana' }, className: 'node-info' },
    { id: 'vac_promedio', type: 'default', position: { x: 350, y: 1980 }, data: { label: '📏 Promedio horas\n52 semanas del año' }, className: 'node-accounting' },
    { id: 'vac_32plus', type: 'default', position: { x: 250, y: 2090 }, data: { label: '✅ >32h promedio\n→ Se pagan 40h\nal primer rate' }, className: 'node-success' },
    { id: 'vac_menos32', type: 'default', position: { x: 450, y: 2090 }, data: { label: '⚠️ <32h promedio\n→ Notificar para\nautorización de hrs' }, className: 'node-warning' },
    { id: 'vac_irene', type: 'default', position: { x: 550, y: 1750 }, data: { label: '🔴 TODOS los pagos\nde vacaciones requieren\naprobación de Irene' }, className: 'node-critical' },
    { id: 'vac_separate', type: 'default', position: { x: 550, y: 1870 }, data: { label: '📄 Pago va en\nSeparate Check' }, className: 'node-accounting' },
    { id: 'vac_control', type: 'default', position: { x: 550, y: 1980 }, data: { label: '📊 Registrar en\n"Control Vacaciones"\nen carpeta payroll' }, className: 'node-info' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 9: CHEQUES
    // ═══════════════════════════════════════════════════════
    { id: 'section_cheques', type: 'default', position: { x: 800, y: 1500 }, data: { label: '📑 GESTIÓN DE\nCHEQUES' }, className: 'node-accounting' },
    { id: 'chq_cancel', type: 'default', position: { x: 730, y: 1630 }, data: { label: '❌ CANCEL CHECK\nNombre mal, cantidad,\nextravío' }, className: 'node-critical' },
    { id: 'chq_reissue', type: 'default', position: { x: 870, y: 1630 }, data: { label: '🔄 CANCEL & REISSUE\nSale en siguiente\nnómina' }, className: 'node-warning' },
    { id: 'chq_extemp', type: 'default', position: { x: 800, y: 1750 }, data: { label: '⚡ EXTEMPORÁNEOS\nHoras no reportadas,\ncheque cancelado,\ncaso extraordinario' }, className: 'node-warning' },
    { id: 'chq_ext_auth', type: 'default', position: { x: 730, y: 1870 }, data: { label: '🔴 Autorización Irene\n→ Cortar vía WhatsApp\n"CHEQUES EXTEMPORÁNEOS"\n(con Karina)' }, className: 'node-critical' },
    { id: 'chq_ext_ctrl', type: 'default', position: { x: 870, y: 1870 }, data: { label: '📊 Control en Drive:\n"EXTEMPORANEOUS\nCHECKS"\n→ Enviar a Sandra' }, className: 'node-info' },
    { id: 'chq_sandra', type: 'default', position: { x: 800, y: 1980 }, data: { label: '📤 Sandra sube a\nplataforma Paychex\ny se refleja' }, className: 'node-accounting' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 10: CREDIT NOTES
    // ═══════════════════════════════════════════════════════
    { id: 'section_creditnotes', type: 'default', position: { x: 1100, y: 1500 }, data: { label: '📝 CREDIT NOTES' }, className: 'node-accounting' },
    { id: 'cn_copia', type: 'default', position: { x: 1100, y: 1630 }, data: { label: '📄 Copiar Invoice\norig → En "week"\nduplicar tabla abajo' }, className: 'node-info' },
    { id: 'cn_marcar', type: 'default', position: { x: 1100, y: 1750 }, data: { label: '🎨 Marcar error con\nceldas de otro color\n→ Señalar diferencia' }, className: 'node-warning' },
    { id: 'cn_saldo', type: 'default', position: { x: 1100, y: 1870 }, data: { label: '💰 En Invoice principal\nagregar diferencia =\nSaldo Credit Note' }, className: 'node-accounting' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 11: DESCUENTOS
    // ═══════════════════════════════════════════════════════
    { id: 'section_discounts', type: 'default', position: { x: 50, y: 1500 }, data: { label: '💸 DESCUENTOS' }, className: 'node-accounting' },
    { id: 'disc_uniformes', type: 'default', position: { x: -50, y: 1630 }, data: { label: '👕 Uniformes:\n$30 completo\n$15 por pieza\n(desde Monday 3.2.1)' }, className: 'node-quality' },
    { id: 'disc_error_pago', type: 'default', position: { x: 100, y: 1630 }, data: { label: '❌ Pago duplicado\no excedente\n(caso raro)' }, className: 'node-critical' },
    { id: 'disc_archivo', type: 'default', position: { x: 50, y: 1750 }, data: { label: '📄 Archivo DISCOUNTS\nen carpeta payroll\nsemanal' }, className: 'node-accounting' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 12: REPORTES
    // ═══════════════════════════════════════════════════════
    { id: 'section_reportes', type: 'default', position: { x: 50, y: 1900 }, data: { label: '📊 REPORTES' }, className: 'node-info' },
    { id: 'rep_diario', type: 'default', position: { x: -80, y: 2030 }, data: { label: '📱 Reporte Diario\nc/2h WhatsApp\n"Accounting CHOLULA"' }, className: 'node-info' },
    { id: 'rep_faltantes', type: 'default', position: { x: 60, y: 2030 }, data: { label: '🏨 Hoteles Faltantes\nTS (diario)' }, className: 'node-warning' },
    { id: 'rep_inspectoras', type: 'default', position: { x: -80, y: 2150 }, data: { label: '🏆 Pendientes con\nInspectoras (cada tarde)' }, className: 'node-quality' },
    { id: 'rep_nomina', type: 'default', position: { x: 60, y: 2150 }, data: { label: '📊 Seguimiento\nde Nómina' }, className: 'node-accounting' },
    { id: 'rep_sneha', type: 'default', position: { x: -80, y: 2270 }, data: { label: '📋 Solicitudes a Sneha:\nHoteles faltantes +\nPersonal con horas?' }, className: 'node-info' },
    { id: 'rep_semanal', type: 'default', position: { x: 60, y: 2270 }, data: { label: '📁 Reporte Semanal\nStrategic Deployment\n(todas las carpetas:\ninvoices + TS)' }, className: 'node-accounting' },

    // ═══════════════════════════════════════════════════════
    // SECCIÓN 13: CREACIÓN CARPETA NUEVA
    // ═══════════════════════════════════════════════════════
    { id: 'section_carpeta', type: 'default', position: { x: 250, y: 1900 }, data: { label: '📁 CARPETA NUEVA\n(Viernes)' }, className: 'node-info' },
    { id: 'carp_copia', type: 'default', position: { x: 250, y: 2030 }, data: { label: '📋 Copiar carpeta\nsemana anterior\n→ Eliminar TS' }, className: 'node-info' },
    { id: 'carp_limpiar', type: 'default', position: { x: 250, y: 2150 }, data: { label: '🧹 Limpiar: Pre-Payroll,\nFactors, Separate Check,\nBonus, Reporte Diario,\nDescuentos' }, className: 'node-info' },
    { id: 'carp_fechas', type: 'default', position: { x: 250, y: 2270 }, data: { label: '📅 Actualizar fechas\n+ # Invoice consecutivo\nen Factors + cada Invoice' }, className: 'node-info' },
  ],
  edges: [
    // Inicio a secciones principales
    { id: 'e_s1', source: 'start', target: 'section_semana' },
    { id: 'e_s2', source: 'start', target: 'section_monday' },
    { id: 'e_s3', source: 'start', target: 'section_captura' },

    // ── Rol Semanal ──
    { id: 'e_sab', source: 'section_semana', target: 'sabado' },
    { id: 'e_lun', source: 'sabado', target: 'lunes' },
    { id: 'e_l1', source: 'lunes', target: 'lun_1' },
    { id: 'e_l2', source: 'lunes', target: 'lun_2' },
    { id: 'e_l3', source: 'lunes', target: 'lun_3' },
    { id: 'e_l4', source: 'lunes', target: 'lun_4' },
    { id: 'e_l5', source: 'lun_1', target: 'lun_5' },
    { id: 'e_l6', source: 'lun_2', target: 'lun_6' },
    { id: 'e_mar', source: 'lunes', target: 'martes', label: '+ extra' },
    { id: 'e_mar1', source: 'martes', target: 'mar_extra' },
    { id: 'e_mie', source: 'martes', target: 'miercoles' },
    { id: 'e_mie1', source: 'miercoles', target: 'mie_todos', animated: true },
    { id: 'e_jue', source: 'miercoles', target: 'jueves' },
    { id: 'e_j1', source: 'jueves', target: 'jue_revision' },
    { id: 'e_j2', source: 'jueves', target: 'jue_journal' },
    { id: 'e_j3', source: 'jue_revision', target: 'jue_invoices' },
    { id: 'e_j4', source: 'jue_journal', target: 'jue_reporte' },
    { id: 'e_vie', source: 'jueves', target: 'viernes' },
    { id: 'e_v1', source: 'viernes', target: 'vie_carpeta' },
    { id: 'e_v2', source: 'viernes', target: 'vie_totales' },

    // ── Captura de Datos ──
    { id: 'e_c1', source: 'section_captura', target: 'ts_descarga' },
    { id: 'e_c2', source: 'ts_descarga', target: 'ts_confirma' },
    { id: 'e_c3', source: 'section_captura', target: 'invoice_week' },
    { id: 'e_c4', source: 'invoice_week', target: 'confirmar_insp' },
    { id: 'e_c5', source: 'section_captura', target: 'verificar_app' },
    { id: 'e_c6', source: 'verificar_app', target: 'horas_regla' },
    { id: 'e_c7', source: 'confirmar_insp', target: 'file_prepay' },
    { id: 'e_c8', source: 'horas_regla', target: 'file_prepay' },
    { id: 'e_c9', source: 'horas_regla', target: 'file_factors' },
    { id: 'e_c10', source: 'horas_regla', target: 'file_invoice' },
    { id: 'e_c11', source: 'file_prepay', target: 'color_system', style: { strokeDasharray: '5,5' } },

    // ── Envío de Nómina ──
    { id: 'e_n0', source: 'mie_todos', target: 'section_nomina', animated: true },
    { id: 'e_n1', source: 'section_nomina', target: 'nomina_deadline' },
    { id: 'e_n2', source: 'nomina_deadline', target: 'nomina_archivos' },
    { id: 'e_n3', source: 'nomina_archivos', target: 'nomina_4files', style: { strokeDasharray: '5,5' } },
    { id: 'e_n4', source: 'nomina_archivos', target: 'journal_recibe' },
    { id: 'e_n5', source: 'journal_recibe', target: 'journal_revisar' },
    { id: 'e_n6', source: 'journal_revisar', target: 'journal_error', label: 'Errores', style: { stroke: '#c62828' } },
    { id: 'e_n7', source: 'journal_error', target: 'journal_recibe', label: '2do Journal', style: { strokeDasharray: '5,5', stroke: '#c62828' } },
    { id: 'e_n8', source: 'journal_revisar', target: 'journal_ok', label: 'OK' },
    { id: 'e_n9', source: 'journal_ok', target: 'nomina_liberada', animated: true },

    // ── Envío de Invoices ──
    { id: 'e_i0', source: 'jue_invoices', target: 'section_invoices', style: { strokeDasharray: '5,5' } },
    { id: 'e_i1', source: 'section_invoices', target: 'inv_descarga' },
    { id: 'e_i2', source: 'inv_descarga', target: 'inv_correos' },
    { id: 'e_i3', source: 'inv_correos', target: 'inv_envio' },

    // ── Monday ──
    { id: 'e_m1', source: 'section_monday', target: 'monday_rh' },
    { id: 'e_m2', source: 'section_monday', target: 'monday_supervision' },
    { id: 'e_m3', source: 'section_monday', target: 'monday_accounting' },
    { id: 'e_m4', source: 'monday_rh', target: 'monday_app_detail' },
    { id: 'e_m5', source: 'monday_app_detail', target: 'monday_to_paychex', animated: true },
    { id: 'e_m6', source: 'monday_supervision', target: 'monday_uniform_detail' },

    // ── Paychex ──
    { id: 'e_p0', source: 'monday_to_paychex', target: 'section_paychex' },
    { id: 'e_p1', source: 'section_paychex', target: 'paychex_crear' },
    { id: 'e_p2', source: 'paychex_crear', target: 'paychex_req' },
    { id: 'e_p3', source: 'section_paychex', target: 'paychex_desact' },
    { id: 'e_p4', source: 'section_paychex', target: 'paychex_taxes' },
    { id: 'e_p5', source: 'paychex_desact', target: 'paychex_checks' },

    // ── Work Records ──
    { id: 'e_w0', source: 'section_paychex', target: 'section_workrecords', style: { strokeDasharray: '5,5' } },
    { id: 'e_w1', source: 'section_workrecords', target: 'wr_hoteles' },
    { id: 'e_w2', source: 'section_workrecords', target: 'wr_descarga' },
    { id: 'e_w3', source: 'wr_descarga', target: 'wr_verde' },
    { id: 'e_w4', source: 'wr_hoteles', target: 'wr_agregar' },
    { id: 'e_w5', source: 'wr_descarga', target: 'wr_ajustar' },

    // ── Vacaciones ──
    { id: 'e_vac0', source: 'nomina_liberada', target: 'section_vacaciones', style: { strokeDasharray: '5,5' } },
    { id: 'e_vac1', source: 'section_vacaciones', target: 'vac_solicitud' },
    { id: 'e_vac2', source: 'vac_solicitud', target: 'vac_fecha' },
    { id: 'e_vac3', source: 'vac_fecha', target: 'vac_constancia' },
    { id: 'e_vac4', source: 'vac_constancia', target: 'vac_promedio' },
    { id: 'e_vac5', source: 'vac_promedio', target: 'vac_32plus', label: '>32h' },
    { id: 'e_vac6', source: 'vac_promedio', target: 'vac_menos32', label: '<32h' },
    { id: 'e_vac7', source: 'section_vacaciones', target: 'vac_irene' },
    { id: 'e_vac8', source: 'vac_irene', target: 'vac_separate' },
    { id: 'e_vac9', source: 'vac_separate', target: 'vac_control' },

    // ── Cheques ──
    { id: 'e_ch0', source: 'nomina_liberada', target: 'section_cheques', style: { strokeDasharray: '5,5' } },
    { id: 'e_ch1', source: 'section_cheques', target: 'chq_cancel' },
    { id: 'e_ch2', source: 'section_cheques', target: 'chq_reissue' },
    { id: 'e_ch3', source: 'section_cheques', target: 'chq_extemp' },
    { id: 'e_ch4', source: 'chq_extemp', target: 'chq_ext_auth' },
    { id: 'e_ch5', source: 'chq_extemp', target: 'chq_ext_ctrl' },
    { id: 'e_ch6', source: 'chq_ext_auth', target: 'chq_sandra' },
    { id: 'e_ch7', source: 'chq_ext_ctrl', target: 'chq_sandra' },

    // ── Credit Notes ──
    { id: 'e_cn0', source: 'section_invoices', target: 'section_creditnotes', style: { strokeDasharray: '5,5' } },
    { id: 'e_cn1', source: 'section_creditnotes', target: 'cn_copia' },
    { id: 'e_cn2', source: 'cn_copia', target: 'cn_marcar' },
    { id: 'e_cn3', source: 'cn_marcar', target: 'cn_saldo' },

    // ── Descuentos ──
    { id: 'e_d0', source: 'monday_uniform_detail', target: 'section_discounts', style: { strokeDasharray: '5,5' } },
    { id: 'e_d1', source: 'section_discounts', target: 'disc_uniformes' },
    { id: 'e_d2', source: 'section_discounts', target: 'disc_error_pago' },
    { id: 'e_d3', source: 'disc_uniformes', target: 'disc_archivo' },
    { id: 'e_d4', source: 'disc_error_pago', target: 'disc_archivo' },

    // ── Reportes ──
    { id: 'e_r0', source: 'section_discounts', target: 'section_reportes', style: { strokeDasharray: '5,5' } },
    { id: 'e_r1', source: 'section_reportes', target: 'rep_diario' },
    { id: 'e_r2', source: 'section_reportes', target: 'rep_faltantes' },
    { id: 'e_r3', source: 'rep_diario', target: 'rep_inspectoras' },
    { id: 'e_r4', source: 'rep_faltantes', target: 'rep_nomina' },
    { id: 'e_r5', source: 'rep_inspectoras', target: 'rep_sneha' },
    { id: 'e_r6', source: 'rep_nomina', target: 'rep_semanal' },

    // ── Carpeta Nueva ──
    { id: 'e_f0', source: 'vie_carpeta', target: 'section_carpeta', style: { strokeDasharray: '5,5' } },
    { id: 'e_f1', source: 'section_carpeta', target: 'carp_copia' },
    { id: 'e_f2', source: 'carp_copia', target: 'carp_limpiar' },
    { id: 'e_f3', source: 'carp_limpiar', target: 'carp_fechas' },
  ]
}

export default contabilidadRolFlow
