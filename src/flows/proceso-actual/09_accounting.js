const accountingFlow = {
  nodes: [
    // Dashboard Daily
    { id: 'start', type: 'input', position: { x: 50, y: 50 }, data: { label: '💰 Mónica\nContabilidad' }, className: 'node-accounting' },
    { id: 'dashboard', type: 'default', position: { x: 50, y: 150 }, data: { label: '📊 Dashboard\nDiario' }, className: 'node-accounting' },
    
    // Dashboard sections
    { id: 'semaforo', type: 'default', position: { x: 250, y: 50 }, data: { label: '🚦 Semáforo\nEmpleados' }, className: 'node-info' },
    { id: 'new_emp', type: 'default', position: { x: 250, y: 150 }, data: { label: '👤 Nuevos\nTimeline 72h' }, className: 'node-warning' },
    { id: 'uniforms', type: 'default', position: { x: 250, y: 250 }, data: { label: '👕 Uniformes\nEntregados' }, className: 'node-quality' },
    { id: 'projections', type: 'default', position: { x: 250, y: 350 }, data: { label: '💰 Requisiciones\nProyecciones' }, className: 'node-info' },
    
    // Status tracking
    { id: 'track_72h', type: 'default', position: { x: 450, y: 150 }, data: { label: '⏰ Tracking\n72 horas' }, className: 'node-warning' },
    { id: 'ready', type: 'default', position: { x: 600, y: 100 }, data: { label: '🟢 Listos\n>60%' }, className: 'node-success' },
    { id: 'warning', type: 'default', position: { x: 600, y: 180 }, data: { label: '🟡 Advertencia\n40-60%' }, className: 'node-warning' },
    { id: 'blocked', type: 'default', position: { x: 600, y: 260 }, data: { label: '🔴 No Pagables\n<60% >72h' }, className: 'node-critical' },
    
    // Uniform discounts
    { id: 'config_discount', type: 'default', position: { x: 450, y: 250 }, data: { label: '⚙️ Configurar\nDescuento $85' }, className: 'node-quality' },
    { id: 'discount_plan', type: 'default', position: { x: 600, y: 340 }, data: { label: '💸 4 pagos\n× $21.25' }, className: 'node-quality' },
    
    // Projections
    { id: 'contract', type: 'default', position: { x: 450, y: 350 }, data: { label: '📄 Service\nContract' }, className: 'node-info' },
    { id: 'calc_rates', type: 'default', position: { x: 450, y: 430 }, data: { label: 'Bill vs Pay\nRate' }, className: 'node-accounting' },
    { id: 'bill_example', type: 'default', position: { x: 600, y: 380 }, data: { label: '🏨 Bill Rate\n~$19.58/hr' }, className: 'node-hotel' },
    { id: 'pay_example', type: 'default', position: { x: 600, y: 460 }, data: { label: '💰 Pay Rate\n~$15/hr' }, className: 'node-success' },
    { id: 'margin', type: 'default', position: { x: 750, y: 420 }, data: { label: '📊 Margen 30-35%\n($4.58/hr)' }, className: 'node-accounting' },
    
    // Weekly cycle
    { id: 'weekly', type: 'default', position: { x: 50, y: 550 }, data: { label: '📅 Ciclo\nSemanal' }, className: 'node-info' },
    { id: 'mon_wed', type: 'default', position: { x: 200, y: 550 }, data: { label: 'Lun-Mié\nMonitoreo' }, className: 'node-info' },
    { id: 'wed_deadline', type: 'default', position: { x: 350, y: 550 }, data: { label: '🔴 Mié 11:59 PM\nDEADLINE' }, className: 'node-critical' },
    { id: 'thu_am', type: 'default', position: { x: 500, y: 550 }, data: { label: 'Jue AM\nPre-Aprobación' }, className: 'node-accounting' },
    
    // 12 Validations
    { id: 'validations', type: 'default', position: { x: 500, y: 650 }, data: { label: '✅ 12 Validaciones\nCRÍTICAS' }, className: 'node-accounting' },
    { id: 'v1', type: 'default', position: { x: 700, y: 550 }, data: { label: '1️⃣ Horas' }, className: 'node-info' },
    { id: 'v2', type: 'default', position: { x: 780, y: 550 }, data: { label: '2️⃣ Payment' }, className: 'node-info' },
    { id: 'v3', type: 'default', position: { x: 860, y: 550 }, data: { label: '3️⃣ Descuentos' }, className: 'node-info' },
    { id: 'v4', type: 'default', position: { x: 940, y: 550 }, data: { label: '4️⃣ Vacaciones' }, className: 'node-info' },
    { id: 'v5', type: 'default', position: { x: 1020, y: 550 }, data: { label: '5️⃣ Rates' }, className: 'node-info' },
    { id: 'v6', type: 'default', position: { x: 700, y: 620 }, data: { label: '6️⃣ Tax ID' }, className: 'node-info' },
    { id: 'v7', type: 'default', position: { x: 780, y: 620 }, data: { label: '7️⃣ Emp#' }, className: 'node-info' },
    { id: 'v8', type: 'default', position: { x: 860, y: 620 }, data: { label: '8️⃣ Banking' }, className: 'node-info' },
    { id: 'v9', type: 'default', position: { x: 940, y: 620 }, data: { label: '9️⃣ Net >$50' }, className: 'node-info' },
    { id: 'v10', type: 'default', position: { x: 1020, y: 620 }, data: { label: '🔟 Gross' }, className: 'node-info' },
    { id: 'v11', type: 'default', position: { x: 780, y: 690 }, data: { label: '1️⃣1️⃣ Claims' }, className: 'node-info' },
    { id: 'v12', type: 'default', position: { x: 860, y: 690 }, data: { label: '1️⃣2️⃣ M Lav' }, className: 'node-info' },
    
    // Approval flow
    { id: 'all_valid', type: 'default', position: { x: 500, y: 800 }, data: { label: '✅ Todo\nVálido?' }, className: 'node-success' },
    { id: 'report', type: 'default', position: { x: 350, y: 900 }, data: { label: '📄 Reporte\nPre-Nómina' }, className: 'node-accounting' },
    { id: 'dir_review', type: 'default', position: { x: 500, y: 900 }, data: { label: '👔 Silvia\nRevisa' }, className: 'node-critical' },
    { id: 'dir_approve', type: 'default', position: { x: 650, y: 900 }, data: { label: '✅ Aprueba?' }, className: 'node-success' },
    { id: 'processing', type: 'default', position: { x: 800, y: 900 }, data: { label: '⚙️ Procesamiento\nJue Noche' }, className: 'node-info' },
    { id: 'payment', type: 'default', position: { x: 950, y: 900 }, data: { label: '💰 Pago\nVie 5 AM' }, className: 'node-success' },
    
    // Billing
    { id: 'billing', type: 'default', position: { x: 50, y: 1050 }, data: { label: '🧾 Facturación\nHoteles' }, className: 'node-accounting' },
    { id: 'invoice_gen', type: 'default', position: { x: 200, y: 1050 }, data: { label: 'Generar\nInvoice' }, className: 'node-accounting' },
    { id: 'send_invoice', type: 'default', position: { x: 350, y: 1050 }, data: { label: 'Enviar\nNet 15' }, className: 'node-info' },
    { id: 'track_payment', type: 'default', position: { x: 500, y: 1050 }, data: { label: 'Tracking\nPagos' }, className: 'node-info' },
    { id: 'revenue', type: 'default', position: { x: 650, y: 1050 }, data: { label: '💰 Ingreso\nRegistrado' }, className: 'node-success' },
    
    // Claims
    { id: 'claims', type: 'default', position: { x: 50, y: 1200 }, data: { label: '📋 Reclamaciones' }, className: 'node-warning' },
    { id: 'investigate', type: 'default', position: { x: 200, y: 1200 }, data: { label: '🔍 Investigar\n<48h' }, className: 'node-warning' },
    { id: 'verify_contract', type: 'default', position: { x: 350, y: 1200 }, data: { label: 'Verificar vs\nContrato' }, className: 'node-info' },
    { id: 'claim_valid', type: 'default', position: { x: 500, y: 1200 }, data: { label: '✓ Válido?' }, className: 'node-warning' },
    { id: 'corrective', type: 'default', position: { x: 650, y: 1200 }, data: { label: '💵 Pago\nCorrectivo' }, className: 'node-success' },
    
    // Security
    { id: 'security', type: 'default', position: { x: 1100, y: 800 }, data: { label: '🔐 SEGURIDAD' }, className: 'node-critical' },
    { id: 'no_modify', type: 'default', position: { x: 1100, y: 880 }, data: { label: '❌ NO modifica\nbanco' }, className: 'node-critical' },
    { id: 'no_final', type: 'default', position: { x: 1100, y: 950 }, data: { label: '❌ NO aprueba\nfinal' }, className: 'node-critical' },
  ],
  edges: [
    // Dashboard flow
    { id: 'e1', source: 'start', target: 'dashboard' },
    { id: 'e2', source: 'dashboard', target: 'semaforo' },
    { id: 'e3', source: 'dashboard', target: 'new_emp' },
    { id: 'e4', source: 'dashboard', target: 'uniforms' },
    { id: 'e5', source: 'dashboard', target: 'projections' },
    
    // Status tracking
    { id: 'e6', source: 'new_emp', target: 'track_72h' },
    { id: 'e7', source: 'track_72h', target: 'ready', label: '🟢' },
    { id: 'e8', source: 'track_72h', target: 'warning', label: '🟡' },
    { id: 'e9', source: 'track_72h', target: 'blocked', label: '🔴' },
    
    // Uniform discounts
    { id: 'e10', source: 'uniforms', target: 'config_discount' },
    { id: 'e11', source: 'config_discount', target: 'discount_plan' },
    
    // Projections
    { id: 'e12', source: 'projections', target: 'contract' },
    { id: 'e13', source: 'contract', target: 'calc_rates' },
    { id: 'e13b', source: 'calc_rates', target: 'bill_example' },
    { id: 'e13c', source: 'calc_rates', target: 'pay_example' },
    { id: 'e14', source: 'bill_example', target: 'margin', animated: true },
    { id: 'e14b', source: 'pay_example', target: 'margin', animated: true },
    
    // Weekly cycle
    { id: 'e15', source: 'semaforo', target: 'weekly' },
    { id: 'e16', source: 'weekly', target: 'mon_wed' },
    { id: 'e17', source: 'mon_wed', target: 'wed_deadline' },
    { id: 'e18', source: 'wed_deadline', target: 'thu_am', animated: true },
    { id: 'e19', source: 'thu_am', target: 'validations' },
    
    // Validations
    { id: 'e20', source: 'validations', target: 'v1' },
    { id: 'e21', source: 'v1', target: 'v2' },
    { id: 'e22', source: 'v2', target: 'v3' },
    { id: 'e23', source: 'v3', target: 'v4' },
    { id: 'e24', source: 'v4', target: 'v5' },
    { id: 'e25', source: 'v5', target: 'v6' },
    { id: 'e26', source: 'v6', target: 'v7' },
    { id: 'e27', source: 'v7', target: 'v8' },
    { id: 'e28', source: 'v8', target: 'v9' },
    { id: 'e29', source: 'v9', target: 'v10' },
    { id: 'e30', source: 'v10', target: 'v11' },
    { id: 'e31', source: 'v11', target: 'v12' },
    { id: 'e32', source: 'v12', target: 'all_valid' },
    
    // Approval
    { id: 'e33', source: 'all_valid', target: 'report' },
    { id: 'e34', source: 'report', target: 'dir_review' },
    { id: 'e35', source: 'dir_review', target: 'dir_approve' },
    { id: 'e36', source: 'dir_approve', target: 'processing' },
    { id: 'e37', source: 'processing', target: 'payment', animated: true },
    
    // Billing
    { id: 'e38', source: 'payment', target: 'billing', style: { strokeDasharray: '5,5' } },
    { id: 'e39', source: 'billing', target: 'invoice_gen' },
    { id: 'e40', source: 'invoice_gen', target: 'send_invoice' },
    { id: 'e41', source: 'send_invoice', target: 'track_payment' },
    { id: 'e42', source: 'track_payment', target: 'revenue' },
    
    // Claims
    { id: 'e43', source: 'payment', target: 'claims', style: { strokeDasharray: '5,5' } },
    { id: 'e44', source: 'claims', target: 'investigate' },
    { id: 'e45', source: 'investigate', target: 'verify_contract' },
    { id: 'e46', source: 'verify_contract', target: 'claim_valid' },
    { id: 'e47', source: 'claim_valid', target: 'corrective' },
    
    // Security
    { id: 'e48', source: 'dashboard', target: 'security', style: { strokeDasharray: '5,5', stroke: '#c62828' } },
    { id: 'e49', source: 'security', target: 'no_modify' },
    { id: 'e50', source: 'security', target: 'no_final' },
  ]
}

export default accountingFlow
