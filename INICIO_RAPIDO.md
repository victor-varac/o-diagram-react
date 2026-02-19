# 🚀 Inicio Rápido - Orange Staffing Diagramas React Flow

## ⚡ 3 Pasos para Ver los Diagramas

### 1️⃣ Instalar Dependencias (Primera vez solamente)

```bash
cd /Users/varac/Documents/orange/o/o_diagram_react
npm install
```

⏱️ Tiempo: ~2-3 minutos

---

### 2️⃣ Iniciar Aplicación

```bash
npm run dev
```

⏱️ Tiempo: ~5 segundos

---

### 3️⃣ Abrir en Navegador

La aplicación se abrirá automáticamente en:
```
http://localhost:3000
```

Si no se abre, copia y pega la URL en tu navegador.

---

## 🎯 ¿Qué Verás?

Una aplicación web interactiva con:

- **Barra superior:** Selector de flujos
- **Vista principal:** Diagrama interactivo con zoom y pan
- **Controles:** Botones de zoom en esquina inferior izquierda
- **Minimapa:** Vista general en esquina inferior derecha
- **Leyenda:** Código de colores en esquina superior derecha

---

## 🎨 6 Diagramas Disponibles

1. **00. Vista General** ⭐ EMPEZAR AQUÍ
   - Todos los 9 flujos integrados
   - Vista panorámica del sistema

2. **09. Contabilidad** 💰 CRÍTICO
   - Dashboard de Mónica
   - 12 validaciones de nómina
   - Facturación a hoteles

3. **03. Nómina Semanal** 💵
   - Ciclo Lunes → Viernes
   - Deadline Miércoles 11:59 PM
   - Procesamiento de pagos

4. **01. Ciclo de Vida del Empleado** 👤
   - 10 fases completas
   - Timeline 72 horas
   - Black List y retención

5. **02. Requisiciones** 📋
   - Hoteles solicitan personal
   - Costos proyectados automáticos
   - Sistema de prioridades

6. **06. Calidad e Inspecciones** 🏆
   - Onboarding presencial
   - Entrega de uniformes
   - Sistema de strikes

---

## 🖱️ Controles Interactivos

### Mover Nodos (NUEVO):
- **Arrastra cualquier nodo** para reposicionarlo a tu gusto
- Las posiciones se **guardan automáticamente** 
- Click en **"🔄 Restaurar Posiciones"** para volver al layout original
- Útil para despejar áreas congestionadas y visualizar mejor

### Navegación:
- **Zoom In:** Mouse wheel arriba o botón `+`
- **Zoom Out:** Mouse wheel abajo o botón `-`
- **Pan (mover canvas):** Click y arrastra el **fondo** (no un nodo)
- **Fit View:** Botón con cuatro flechas (ajustar vista)
- **Centrar:** Doble click en el fondo

### Minimapa:
- Click en el minimapa para saltar a esa área
- Arrastra el rectángulo de vista para navegar

---

## 🎨 Código de Colores

- 🔴 **Rojo** = Crítico, bloqueante, deadline
- 🟡 **Amarillo** = Advertencia, en proceso  
- 🟢 **Verde** = Éxito, completado, aprobado
- 💗 **Rosa** = Contabilidad, finanzas
- 💙 **Azul** = Información, proceso estándar
- ⚫ **Negro** = Black List (permanente)

---

## ❓ Preguntas Frecuentes

### ¿No tengo Node.js instalado?
Descarga desde: https://nodejs.org/

Versión recomendada: **18.x o superior**

### ¿El puerto 3000 está ocupado?
Edita `vite.config.js` y cambia:
```javascript
server: {
  port: 3001  // Usa otro puerto
}
```

### ¿No se ve el diagrama completo?
1. Click en el botón "Fit View" (cuatro flechas)
2. O usa zoom out (mouse wheel abajo)

### ¿Quiero ver más detalles?
1. Usa zoom in en el área de interés
2. Los nodos tienen toda la información necesaria
3. Para documentación completa: `../o_user_experience/`

---

## 🛑 Detener la Aplicación

En la terminal donde ejecutaste `npm run dev`:
```
Ctrl + C
```

---

## 📊 Comparación con Diagramas Mermaid

**Mermaid (`.mmd`):**
- ✅ Más fácil de editar (solo texto)
- ✅ Más ligero
- ❌ Menos interactivo
- ❌ No tiene zoom/pan fluido

**React Flow:**
- ✅ **MUY interactivo** (zoom, pan, minimapa)
- ✅ **Mejor para explorar** diagramas grandes
- ✅ **Performance superior**
- ❌ Requiere compilar/ejecutar

**Recomendación:** Usa React Flow para **visualizar y explorar**. Usa Mermaid para **editar y documentar**.

---

## 🎯 Próximos Pasos

1. ✅ Ver diagrama "00. Vista General"
2. ✅ Explorar con zoom y pan
3. ✅ Cambiar a "09. Contabilidad"
4. ✅ Explorar otros flujos según tu rol

**¿Necesitas más detalles?** Consulta el `README.md` completo.

---

## 📞 Ayuda

**Documentación relacionada:**
- Flujos en Mermaid: `../o_diagram/`
- Documentación completa: `../o_user_experience/`
- README del proyecto: `README.md`

---

**¡Listo! Ahora tienes diagramas interactivos profesionales** 🎉
