# 🚀 Orange Staffing - Diagramas Interactivos con React Flow

Aplicación web interactiva para visualizar los diagramas de flujos de negocio del sistema Orange Staffing usando React Flow.

## ✨ Características

- **6 Diagramas Interactivos** de los flujos principales
- **Nodos Movibles** - Arrastra y reorganiza nodos para mejor visualización
- **Auto-Save de Posiciones** - Las posiciones se guardan automáticamente en localStorage
- **Restaurar Layout** - Botón para volver a las posiciones originales
- **Zoom y Pan** para navegar en diagramas grandes
- **Minimapa** para vista general y navegación rápida
- **Código de colores consistente** con la documentación
- **Selector de flujos** con descripción de cada uno
- **Leyenda visual** integrada
- **Responsive** y optimizado para diferentes pantallas

## 📋 Flujos Disponibles

1. **Vista General** - Todos los 9 flujos integrados
2. **Contabilidad** - Dashboard de Mónica, 12 validaciones, facturación
3. **Nómina Semanal** - Ciclo Lun-Vie, deadline Miércoles
4. **Ciclo de Vida del Empleado** - 10 fases, timeline 72h
5. **Requisiciones** - Hoteles solicitan personal, costos proyectados
6. **Calidad e Inspecciones** - Onboarding, uniformes, supervisión

## 🛠️ Instalación

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Pasos

1. **Instalar dependencias:**
```bash
cd /Users/varac/Documents/orange/o/o_diagram_react
npm install
```

2. **Iniciar servidor de desarrollo:**
```bash
npm run dev
```

3. **Abrir en el navegador:**
```
http://localhost:3000
```

La aplicación se abrirá automáticamente.

## 📦 Dependencias Principales

- **React 18** - Framework UI
- **React Flow 11** - Librería de diagramas interactivos
- **Vite** - Build tool y dev server
- **Zustand** - State management (React Flow)

## 🎨 Estructura del Proyecto

```
o_diagram_react/
├── src/
│   ├── components/
│   │   ├── FlowSelector.jsx    # Selector de flujos
│   │   └── FlowViewer.jsx      # Visor de diagramas
│   ├── flows/
│   │   ├── 00_master_overview.js
│   │   ├── 01_employee_lifecycle.js
│   │   ├── 02_requisitions.js
│   │   ├── 03_payroll.js
│   │   ├── 06_quality.js
│   │   └── 09_accounting.js
│   ├── styles/
│   │   └── index.css            # Estilos globales
│   ├── App.jsx                  # Componente principal
│   └── main.jsx                 # Entry point
├── package.json
├── vite.config.js
├── index.html
└── README.md
```

## 🎯 Uso

### Navegación

1. **Seleccionar flujo:** Click en los botones en la barra superior
2. **Mover nodos:** 
   - Click y arrastra cualquier nodo para reposicionarlo
   - Las posiciones se guardan automáticamente
   - Click en "🔄 Restaurar Posiciones" para volver al layout original
3. **Zoom:** 
   - Mouse wheel para zoom in/out
   - Controles en la esquina inferior izquierda
4. **Pan:** Click y arrastra el fondo (no un nodo) para mover el diagrama
5. **Minimapa:** Vista general en esquina inferior derecha
6. **Fit View:** Doble click en el fondo para ajustar vista

### Código de Colores

- **🔴 Rojo** - Crítico, bloqueante, deadline
- **🟡 Amarillo** - Advertencia, en proceso
- **🟢 Verde** - Éxito, completado, aprobado
- **💗 Rosa** - Contabilidad, finanzas
- **💙 Azul** - Información, proceso estándar
- **⚫ Negro** - Black List (permanente)

### Atajos de Teclado

- `Cmd/Ctrl + Plus` - Zoom in
- `Cmd/Ctrl + Minus` - Zoom out
- `Cmd/Ctrl + 0` - Reset zoom

## 🔧 Desarrollo

### Agregar un Nuevo Flujo

1. **Crear archivo de datos:**
```javascript
// src/flows/XX_nuevo_flujo.js
const nuevoFlujo = {
  nodes: [
    { 
      id: 'node1', 
      type: 'default', 
      position: { x: 100, y: 100 }, 
      data: { label: 'Mi Nodo' }, 
      className: 'node-info' 
    },
    // ... más nodos
  ],
  edges: [
    { 
      id: 'e1', 
      source: 'node1', 
      target: 'node2',
      label: 'Opcional'
    },
    // ... más edges
  ]
}

export default nuevoFlujo
```

2. **Importar en App.jsx:**
```javascript
import nuevoFlujo from './flows/XX_nuevo_flujo'

const flows = {
  // ... otros flujos
  'nuevo': {
    title: 'XX. Título del Flujo',
    description: 'Descripción breve',
    data: nuevoFlujo,
    icon: '🎯'
  }
}
```

### Clases de Nodos Disponibles

```javascript
'node-critical'      // 🔴 Rojo
'node-urgent'        // 🟠 Naranja
'node-warning'       // 🟡 Amarillo
'node-success'       // 🟢 Verde
'node-info'          // 💙 Azul
'node-accounting'    // 💗 Rosa
'node-hotel'         // 🧡 Naranja claro
'node-recruitment'   // 💜 Morado
'node-quality'       // 🟡 Amarillo
'node-blacklist'     // ⚫ Negro
```

### Personalizar Estilos

Edita `src/styles/index.css` para cambiar:
- Colores de nodos
- Estilos de edges
- Tamaños de fuente
- Sombras y efectos

## 📦 Build para Producción

```bash
npm run build
```

Los archivos optimizados se generan en la carpeta `dist/`.

### Deploy

Puedes deployar en:

**Vercel:**
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy
```

**GitHub Pages:**
```bash
npm run build
# Copiar contenido de dist/ a gh-pages branch
```

## 🎓 Recursos

- [React Flow Docs](https://reactflow.dev/)
- [React Docs](https://react.dev/)
- [Vite Docs](https://vitejs.dev/)

## 📝 Notas

### Diferencias con Diagramas Mermaid

Los diagramas de React Flow son **más interactivos** que los Mermaid:
- ✅ Zoom y pan fluidos
- ✅ Minimapa integrado
- ✅ Nodos arrastrables (opcional)
- ✅ Performance mejor con diagramas grandes
- ✅ Más opciones de personalización

### Performance

- Cada flujo renderiza ~30-60 nodos
- React Flow está optimizado para miles de nodos
- El minimapa se actualiza en tiempo real
- Zoom funciona con hardware acceleration

## 🚀 Próximos Pasos

**Mejoras Posibles:**
1. Agregar tooltips en nodos con más información
2. Modo de edición para modificar diagramas
3. Exportar diagrama a PNG/SVG
4. Modo oscuro
5. Búsqueda de nodos
6. Filtros por tipo de nodo
7. Animaciones más elaboradas
8. Historial de navegación (undo/redo)

## 🐛 Troubleshooting

### "Cannot find module 'reactflow'"
```bash
npm install
```

### Puerto 3000 ya en uso
Cambia el puerto en `vite.config.js`:
```javascript
server: {
  port: 3001
}
```

### Diagrama no se ve completo
Click en "Fit View" (botón con cuatro flechas) en los controles.

## 📄 Licencia

Este proyecto es parte de la documentación interna de Orange Staffing.

---

## 🆘 Soporte

Para dudas sobre los diagramas:
- **Documentación completa:** `../o_user_experience/`
- **Diagramas Mermaid:** `../o_diagram/`

**Desarrollado con ❤️ para Orange Staffing**
