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

// Import PROCESO DIGITAL flows
import inspectorDigitalFlow from './flows/proceso-digital/01_inspector'
import contabilidadDigitalFlow from './flows/proceso-digital/02_contabilidad'
import requisicionDigitalFlow from './flows/proceso-digital/03_requisicion'
import adminHotelDigitalFlow from './flows/proceso-digital/04_admin_hotel'
import adminOrangeDigitalFlow from './flows/proceso-digital/05_admin_orange'
import colaboradorDigitalFlow from './flows/proceso-digital/06_colaborador'
import sistemaCompletoDigitalFlow from './flows/proceso-digital/07_sistema_completo'

// Import USER EXPERIENCE flows
import inspectorUXFlow from './flows/proceso-ux/01_inspector'
import contabilidadUXFlow from './flows/proceso-ux/02_contabilidad'
import requisicionUXFlow from './flows/proceso-ux/03_requisicion'
import adminHotelUXFlow from './flows/proceso-ux/04_admin_hotel'
import adminOrangeUXFlow from './flows/proceso-ux/05_admin_orange'
import colaboradorUXFlow from './flows/proceso-ux/06_colaborador'
import sistemaCompletoUXFlow from './flows/proceso-ux/07_sistema_completo'

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

const flowsDigital = {
  'inspector': {
    title: '01. Inspector',
    description: 'Checklist digital, evaluaciones en tablet, GPS supervisión, reportes automáticos',
    data: inspectorDigitalFlow,
    icon: '🏆',
    status: 'complete'
  },
  'contabilidad': {
    title: '02. Contabilidad',
    description: 'Dashboard automático, validaciones auto, pre-aprobación nómina, facturación digital',
    data: contabilidadDigitalFlow,
    icon: '💰',
    status: 'complete'
  },
  'requisicion': {
    title: '03. Requisición',
    description: 'Auto-matching por zona, pool inteligente, requisiciones digitales, retención automatizada',
    data: requisicionDigitalFlow,
    icon: '📋',
    status: 'complete'
  },
  'admin_hotel': {
    title: '04. Admin Hotel',
    description: 'Portal de cliente, solicitar personal online, aprobación horas, dashboard facturación',
    data: adminHotelDigitalFlow,
    icon: '🏨',
    status: 'complete'
  },
  'admin_orange': {
    title: '05. Admin Orange',
    description: 'Dashboard KPIs, aprobaciones con click, cuentas bancarias seguras, blacklist workflow',
    data: adminOrangeDigitalFlow,
    icon: '👔',
    status: 'complete'
  },
  'colaborador': {
    title: '06. Colaborador',
    description: 'Auto-registro, gates automáticos, geofencing, nómina auto, solicitudes workflow, no-show detección',
    data: colaboradorDigitalFlow,
    icon: '👷',
    status: 'complete'
  },
  'sistema_completo': {
    title: '07. Sistema Completo Digital',
    description: '6 roles digitalizados con conexiones automatizadas y workflows end-to-end',
    data: sistemaCompletoDigitalFlow,
    icon: '⚡',
    status: 'complete'
  }
}

const flowsUX = {
  'inspector': {
    title: '01. Inspector',
    description: 'Pantallas del inspector: checklist, evaluaciones, supervisión GPS, incidentes',
    data: inspectorUXFlow,
    icon: '🏆',
    status: 'placeholder'
  },
  'contabilidad': {
    title: '02. Contabilidad',
    description: 'Pantallas de contabilidad: dashboard validaciones, nómina, facturación',
    data: contabilidadUXFlow,
    icon: '💰',
    status: 'placeholder'
  },
  'requisicion': {
    title: '03. Requisición',
    description: 'Pantallas de reclutadora: pool, matching, asignación, pipeline',
    data: requisicionUXFlow,
    icon: '📋',
    status: 'placeholder'
  },
  'admin_hotel': {
    title: '04. Admin Hotel',
    description: 'Portal del cliente: solicitar personal, aprobar horas, facturación',
    data: adminHotelUXFlow,
    icon: '🏨',
    status: 'placeholder'
  },
  'admin_orange': {
    title: '05. Admin Orange',
    description: 'Dashboard ejecutivo: KPIs, aprobaciones, blacklist, configuración',
    data: adminOrangeUXFlow,
    icon: '👔',
    status: 'placeholder'
  },
  'colaborador': {
    title: '06. Colaborador',
    description: 'App completa del trabajador: registro, documentos, matching, ponchado, nómina, solicitudes',
    data: colaboradorUXFlow,
    icon: '👷',
    status: 'complete'
  },
  'sistema_completo': {
    title: '07. Sistema Completo UX',
    description: 'Vista integrada de todas las pantallas de todos los roles y sus conexiones',
    data: sistemaCompletoUXFlow,
    icon: '🍊',
    status: 'placeholder'
  }
}

function App() {
  const [selectedFolder, setSelectedFolder] = useState('proceso-rol')
  const [selectedFlow, setSelectedFlow] = useState('inspector')

  const getFlowsForFolder = (folder) => {
    if (folder === 'proceso-digital') return flowsDigital
    if (folder === 'proceso-ux') return flowsUX
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
