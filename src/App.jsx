import { useState } from 'react'
import { ReactFlowProvider } from 'reactflow'
import FlowSelector from './components/FlowSelector'
import FlowViewer from './components/FlowViewer'

// Import PROCESO ACTUAL flows
import masterOverviewFlow from './flows/proceso-actual/00_master_overview'
import employeeLifecycleFlow from './flows/proceso-actual/01_employee_lifecycle'
import requisitionsFlow from './flows/proceso-actual/02_requisitions'
import payrollFlow from './flows/proceso-actual/03_payroll'
import qualityFlow from './flows/proceso-actual/06_quality'
import accountingFlow from './flows/proceso-actual/09_accounting'

// Import PROCESO APP flows
import masterOverviewFlowApp from './flows/proceso-app/00_master_overview'
import employeeLifecycleFlowApp from './flows/proceso-app/01_employee_lifecycle'
import requisitionsFlowApp from './flows/proceso-app/02_requisitions'
import payrollFlowApp from './flows/proceso-app/03_payroll'
import qualityFlowApp from './flows/proceso-app/06_quality'
import accountingFlowApp from './flows/proceso-app/09_accounting'

// Import PROCESO POR ROL flows
import inspectorRolFlow from './flows/proceso-rol/01_inspector'
import contabilidadRolFlow from './flows/proceso-rol/02_contabilidad'
import requisicionRolFlow from './flows/proceso-rol/03_requisicion'
import adminHotelRolFlow from './flows/proceso-rol/04_admin_hotel'
import adminOrangeRolFlow from './flows/proceso-rol/05_admin_orange'
import colaboradorRolFlow from './flows/proceso-rol/06_colaborador'
import sistemaCompletoFlow from './flows/proceso-rol/07_sistema_completo'

const flowsActual = {
  'master': {
    title: '00. Vista General - Todos los Flujos',
    description: 'Vista panorámica de los 9 flujos integrados (Proceso Actual Manual)',
    data: masterOverviewFlow,
    icon: '🎯'
  },
  'accounting': {
    title: '09. Contabilidad y Gestión Financiera',
    description: 'Dashboard de Mónica, pre-aprobación, facturación (Proceso Actual)',
    data: accountingFlow,
    icon: '💰'
  },
  'payroll': {
    title: '03. Procesamiento de Nómina Semanal',
    description: 'Ciclo Dom-Sáb, 12 validaciones, deadline Miércoles (Proceso Actual)',
    data: payrollFlow,
    icon: '💵'
  },
  'employee': {
    title: '01. Ciclo de Vida del Empleado',
    description: '10 fases, timeline 72h, Black List (Proceso Actual)',
    data: employeeLifecycleFlow,
    icon: '👤'
  },
  'requisitions': {
    title: '02. Gestión de Requisiciones',
    description: 'Hoteles solicitan personal, costos proyectados (Proceso Actual)',
    data: requisitionsFlow,
    icon: '📋'
  },
  'quality': {
    title: '06. Calidad e Inspecciones',
    description: 'Onboarding, uniformes, supervisión, strikes (Proceso Actual)',
    data: qualityFlow,
    icon: '🏆'
  }
}

const flowsApp = {
  'master': {
    title: '00. Vista General - Optimizada',
    description: 'Vista panorámica con automatización y flujos inteligentes',
    data: masterOverviewFlowApp,
    icon: '⚡'
  },
  'accounting': {
    title: '09. Contabilidad IA',
    description: 'Dashboard tiempo real, IA validación, auto-corrección',
    data: accountingFlowApp,
    icon: '🤖'
  },
  'payroll': {
    title: '03. Nómina Automatizada',
    description: 'Procesamiento automático, validaciones paralelas, self-service claims',
    data: payrollFlowApp,
    icon: '⚡'
  },
  'employee': {
    title: '01. Ciclo Digital del Empleado',
    description: 'Portal self-service, tracking automático, validación instantánea',
    data: employeeLifecycleFlowApp,
    icon: '📱'
  },
  'requisitions': {
    title: '02. Requisiciones IA',
    description: 'Matching inteligente, GPS tracking, auto-asignación',
    data: requisitionsFlowApp,
    icon: '🤖'
  },
  'quality': {
    title: '06. Inspector App',
    description: 'App móvil, rutas GPS, reportes digitales, workflow automático',
    data: qualityFlowApp,
    icon: '📱'
  }
}

const flowsRol = {
  'inspector': {
    title: '01. Inspector',
    description: 'Onboarding, uniformes, supervisión, timesheet, solicitudes hoteles, incidentes, prospectos',
    data: inspectorRolFlow,
    icon: '🏆'
  },
  'contabilidad': {
    title: '02. Contabilidad',
    description: 'Dashboard diario, 12 validaciones, pre-aprobación, facturación, reclamaciones',
    data: contabilidadRolFlow,
    icon: '💰'
  },
  'requisicion': {
    title: '03. Requisición',
    description: 'Recepción de requisiciones, búsqueda en pools, asignación, tracking, costos',
    data: requisicionRolFlow,
    icon: '📋'
  },
  'admin_hotel': {
    title: '04. Admin Hotel',
    description: 'Solicitar personal, reporte de horas, incidentes, facturación, contrato',
    data: adminHotelRolFlow,
    icon: '🏨'
  },
  'admin_orange': {
    title: '05. Admin Orange',
    description: 'Business dev, gestión personal, aprobación nómina, supervisión, decisiones críticas',
    data: adminOrangeRolFlow,
    icon: '👔'
  },
  'colaborador': {
    title: '06. Colaborador',
    description: 'Ciclo de vida laboral, asignación, timesheet, uniforme, incidentes, nómina',
    data: colaboradorRolFlow,
    icon: '👷'
  },
  'sistema_completo': {
    title: '07. Sistema Completo - Todos los Roles',
    description: '6 roles integrados con colores por rol y todas las conexiones inter-rol del sistema',
    data: sistemaCompletoFlow,
    icon: '🍊'
  }
}

function App() {
  const [selectedFolder, setSelectedFolder] = useState('proceso-actual')
  const [selectedFlow, setSelectedFlow] = useState('master')

  const getFlowsForFolder = (folder) => {
    if (folder === 'proceso-actual') return flowsActual
    if (folder === 'proceso-app') return flowsApp
    return flowsRol
  }
  const flows = getFlowsForFolder(selectedFolder)

  const handleSelectFolder = (folder) => {
    setSelectedFolder(folder)
    const folderFlows = getFlowsForFolder(folder)
    const firstKey = Object.keys(folderFlows)[0]
    setSelectedFlow(firstKey)
  }

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <FlowSelector 
        flows={flows}
        selectedFlow={selectedFlow}
        selectedFolder={selectedFolder}
        onSelectFlow={setSelectedFlow}
        onSelectFolder={handleSelectFolder}
      />
      <ReactFlowProvider>
        <FlowViewer 
          flowData={flows[selectedFlow].data}
          flowTitle={flows[selectedFlow].title}
        />
      </ReactFlowProvider>
    </div>
  )
}

export default App
