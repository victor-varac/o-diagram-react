# 💡 Tips y Trucos - Orange Staffing Diagramas

## 🎯 Reorganizar Nodos para Mejor Visualización

### ✨ Nueva Funcionalidad: Nodos Movibles

Ahora puedes **mover cualquier nodo** arrastrándolo para crear tu propio layout personalizado.

### Cómo Usar:

1. **Mover un nodo:**
   - Pasa el mouse sobre cualquier nodo
   - El cursor cambiará a una "mano" (👋)
   - Click y mantén presionado
   - Arrastra a la nueva posición
   - Suelta para dejar el nodo

2. **Las posiciones se guardan automáticamente:**
   - No necesitas hacer nada especial
   - Usa `localStorage` del navegador
   - Las posiciones persisten entre sesiones
   - Cada flujo guarda sus posiciones independientemente

3. **Restaurar layout original:**
   - Click en el botón **"🔄 Restaurar Posiciones"** (esquina superior derecha)
   - Vuelve al layout por defecto
   - Útil si quieres empezar de nuevo

---

## 🎨 Casos de Uso

### Descongestionar Áreas

Si varios nodos están muy juntos:
1. Zoom in al área congestionada
2. Arrastra los nodos para separarlos
3. Crea más espacio visual entre ellos

**Ejemplo:**
```
Antes:  [Nodo1][Nodo2][Nodo3]  ← Difícil de leer

Después: [Nodo1]    [Nodo2]    [Nodo3]  ← Mejor
```

### Agrupar por Área Funcional

Reorganiza nodos relacionados:
```
┌─────────────────────┐
│   CONTABILIDAD      │
│  [Mónica]  [Valdns] │
│  [Report]  [Aprbcn] │
└─────────────────────┘

┌─────────────────────┐
│   CALIDAD           │
│ [Inspector][Onbrdng]│
│ [Uniform] [Strikes] │
└─────────────────────┘
```

### Crear Flujo Vertical vs Horizontal

**Vertical (por defecto):**
```
[Inicio]
   ↓
[Proceso]
   ↓
[Fin]
```

**Horizontal (reorganizado):**
```
[Inicio] → [Proceso] → [Fin]
```

### Separar Flujo Principal de Casos Especiales

```
Flujo Principal:        Casos Especiales:
[A] → [B] → [C]        [X] Vacaciones
                       [Y] M Lav
                       [Z] Retención 16%
```

---

## 🔧 Técnicas Avanzadas

### 1. Layout en Columnas

Organiza nodos en columnas por fase:

```
FASE 1      FASE 2      FASE 3
[Inicio]    [Proceso]   [Fin]
[Validar]   [Revisar]   [Aprobar]
[Crear]     [Calcular]  [Enviar]
```

### 2. Layout Circular para Ciclos

Para flujos con ciclos (como semana laboral):

```
    [Lunes]
   ↙      ↘
[Vier]    [Martes]
   ↖      ↙
    [Jueves]
       ↓
    [Miér]
```

### 3. Destacar Deadlines

Coloca nodos críticos (🔴) en posiciones prominentes:

```
              ⚠️ CRÍTICO ⚠️
          [Mié 11:59 PM DEADLINE]
                    ↓
              (Todo fluye aquí)
```

### 4. Minimizar Cruces de Edges

Si los edges (flechas) se cruzan mucho:
1. Identifica nodos que causan cruces
2. Muévelos para que los edges sean más directos
3. Busca crear un "flujo" visual claro

**Mal:**
```
[A] ↘     ↗ [C]
     ✗ ✗
[B] ↗     ↘ [D]
(Cruces confusos)
```

**Bien:**
```
[A] → [C]
[B] → [D]
(Sin cruces)
```

---

## 💾 Gestión de Posiciones

### Guardado Automático

Las posiciones se guardan en `localStorage` con esta estructura:
```javascript
// Clave: flow-positions-[nombre-del-flujo]
// Valor: { "node-id-1": { x: 100, y: 200 }, ... }
```

### Compartir tu Layout

Si quieres compartir tu layout personalizado:

1. Abre la consola del navegador (F12)
2. Ejecuta:
```javascript
// Ver posiciones actuales
console.log(localStorage.getItem('flow-positions-09. Contabilidad y Gestión Financiera'))

// Copiar al clipboard
copy(localStorage.getItem('flow-positions-09. Contabilidad y Gestión Financiera'))
```

3. Comparte el JSON con tu equipo
4. Ellos pueden pegarlo ejecutando:
```javascript
localStorage.setItem('flow-positions-09. Contabilidad y Gestión Financiera', '[JSON aquí]')
```

### Limpiar Todas las Posiciones

Para empezar de cero en todos los flujos:

**Opción 1 (Consola):**
```javascript
// Limpiar todas las posiciones guardadas
Object.keys(localStorage)
  .filter(key => key.startsWith('flow-positions-'))
  .forEach(key => localStorage.removeItem(key))
location.reload()
```

**Opción 2 (Manual):**
- Click en "🔄 Restaurar Posiciones" en cada flujo

---

## 🎓 Best Practices

### 1. Empieza con Zoom Out
- Usa Fit View primero para ver todo
- Identifica áreas problemáticas
- Luego zoom in para ajustar

### 2. Mantén la Lógica del Flujo
- Aunque muevas nodos, respeta la dirección general del flujo
- Generalmente: Arriba → Abajo o Izquierda → Derecha
- Los edges te guiarán

### 3. Usa el Minimapa como Guía
- El minimapa muestra tu layout completo
- Úsalo para verificar que el flujo sigue siendo claro

### 4. Guarda Versiones Importantes
- Antes de hacer cambios grandes, exporta tu layout (ver "Compartir tu Layout")
- Así puedes volver si no te gusta el resultado

### 5. Agrupa por Color
- Nodos del mismo color (ej: 💰 rosa = Contabilidad) juntos
- Facilita identificar áreas funcionales

---

## 🚀 Workflows Recomendados

### Para Presentaciones

1. Zoom in al área relevante
2. Mueve nodos para crear espacio
3. Destaca el flujo que vas a explicar
4. Usa "Fit View" antes de presentar

### Para Análisis Detallado

1. Mantén layout original
2. Usa zoom para navegar
3. Solo mueve si encuentras áreas confusas
4. Restaura al terminar

### Para Documentación

1. Crea un layout limpio y espaciado
2. Exporta posiciones (ver arriba)
3. Comparte con el equipo
4. Todos trabajarán con el mismo layout

---

## ⚠️ Limitaciones

1. **Edges no se pueden mover** - Solo nodos
2. **No se puede conectar nodos nuevos** - Los edges son fijos del diseño original
3. **Posiciones por navegador** - Si cambias de navegador, las posiciones no se transfieren
4. **Cambio de flujo resetea zoom** - Normal, cada flujo tiene su propia vista

---

## 🆘 Solución de Problemas

### Los nodos no se mueven
- Verifica que estés haciendo click EN el nodo (no en el fondo)
- El cursor debe cambiar a "mano"
- Intenta actualizar la página

### Las posiciones no se guardan
- Verifica que localStorage esté habilitado en tu navegador
- Modo incógnito NO guarda posiciones
- Verifica en consola: `localStorage.getItem('flow-positions-...')`

### Quiero deshacer un movimiento
- Click en "🔄 Restaurar Posiciones"
- O recarga la página para volver al último guardado

### Los edges se ven raros después de mover
- Es normal, React Flow ajusta los edges automáticamente
- Los edges usan tipo "smoothstep" que se adapta
- Si se ve muy confuso, prueba reorganizar más nodos

---

## 💬 Feedback

Si tienes ideas para mejorar esta funcionalidad:
- ¿Necesitas deshacer (Ctrl+Z)?
- ¿Quieres guardar múltiples layouts?
- ¿Export a imagen con tu layout?

¡Comparte tus sugerencias!

---

**¡Disfruta creando tus layouts personalizados!** 🎨
