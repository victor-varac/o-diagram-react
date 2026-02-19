import { useState } from 'react'
import { ReactFlowProvider } from 'reactflow'
import FlowSelector from './components/FlowSelector'
import FlowViewer from './components/FlowViewer'

// Import PROCESO POR ROL flows
import inspectorRolFlow from './flows/proceso-rol/01_inspector'
import contabilidadRolFlow from './flows/proceso-rol/02_contabilidad'
import requisicionRolFlow from './flows/proceso-rol/03_requisicion'
import adminHotelRolFlow from './flows/proceso-rol/04_admin_hotel'
import adminOrangeRolFlow from './flows/proceso-rol/05_admin_orange'
import colaboradorRolFlow from './flows/proceso-rol/06_colaborador'
import sistemaCompletoFlow from './flows/proceso-rol/07_sistema_completo'

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
  const [selectedFolder, setSelectedFolder] = useState('proceso-rol')
  const [selectedFlow, setSelectedFlow] = useState('inspector')

  const getFlowsForFolder = (folder) => {
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
