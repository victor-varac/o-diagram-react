# Auto-Layout Feature Documentation

## Overview

Version 1.2.0 introduces **8 intelligent auto-layout algorithms** that automatically reorganize your flow diagrams with a single click. This feature solves the original problem of "amontonado" (cramped) diagrams by providing multiple layout strategies optimized for different visualization needs.

## Feature Highlights

✨ **8 Layout Algorithms** - From hierarchical to physics-based  
⚡ **One-Click Reorganization** - Instant diagram improvement  
💾 **Auto-Save** - Layouts persist across sessions  
📊 **Layout Statistics** - Real-time quality metrics  
🎯 **Smart Defaults** - Each algorithm optimized for specific use cases  
🔄 **Reversible** - Reset to original layout anytime  

## Available Layout Algorithms

### 1. Dagre Top-Bottom ⬇️
**Best for:** Linear processes, employee lifecycle, sequential workflows

- **Algorithm:** Hierarchical directed graph layout
- **Direction:** Vertical (top to bottom)
- **Spacing:** 150px horizontal, 100px vertical
- **Strengths:** Clear hierarchy, minimal backtracking
- **Use when:** You want to show clear progression or stages

**Recommended for flows:**
- 01_employee_lifecycle.js
- 03_payroll.js

### 2. Dagre Left-Right ➡️
**Best for:** Wide displays, horizontal processes, timeline views

- **Algorithm:** Hierarchical directed graph layout
- **Direction:** Horizontal (left to right)
- **Spacing:** 200px horizontal, 100px vertical
- **Strengths:** Utilizes wide screens, clear left-to-right flow
- **Use when:** You have wide display or want timeline effect

**Recommended for flows:**
- 02_requisitions.js
- 06_quality.js

### 3. ELK Layered 🎯
**Best for:** Complex flows with many connections, minimal edge crossings

- **Algorithm:** Eclipse Layout Kernel - Layered algorithm
- **Direction:** Configurable (default: DOWN)
- **Spacing:** 80px node, 60px edge
- **Strengths:** Minimizes edge crossings, optimized for readability
- **Use when:** You have complex interconnected flows
- **Note:** Async operation, may take 1-2 seconds

**Recommended for flows:**
- 09_accounting.js (52 nodes, 50 edges)
- 00_master_overview.js (35 nodes, 35 edges)

### 4. ELK Force 🌊
**Best for:** Understanding relationships, balanced distribution

- **Algorithm:** Eclipse Layout Kernel - Force-directed
- **Spacing:** Dynamic based on connections
- **Strengths:** Natural clustering, balanced layout
- **Use when:** You want to see natural groupings
- **Note:** Async operation, physics simulation

**Recommended for flows:**
- Any flow where you want to discover hidden patterns

### 5. Grid Layout 📐
**Best for:** Uniform distribution, comparing many nodes

- **Algorithm:** Simple grid placement
- **Columns:** 5 per row (configurable)
- **Spacing:** 300px horizontal, 200px vertical
- **Strengths:** Predictable, uniform, easy to scan
- **Use when:** All nodes have equal importance

**Recommended for flows:**
- When you want organized, equal-weight presentation

### 6. Circular Layout ⭕
**Best for:** Cyclic processes, continuous workflows

- **Algorithm:** Radial placement around center
- **Spacing:** Dynamic radius based on node count
- **Strengths:** Shows cyclical nature, no clear start/end
- **Use when:** Process repeats or has no clear hierarchy

**Recommended for flows:**
- Continuous improvement cycles
- Recurring business processes

### 7. Force-Directed (Custom) 🎲
**Best for:** Balanced layouts, natural spacing

- **Algorithm:** Physics simulation (50 iterations)
- **Forces:** Repulsion, attraction, centering
- **Spacing:** Dynamic based on edge connections
- **Strengths:** Natural distribution, avoids overlaps
- **Use when:** You want balanced, aesthetically pleasing layout

**Recommended for flows:**
- General-purpose balanced layouts

### 8. Grouped by Color 🎨
**Best for:** Organizing by functional area, departmental views

- **Algorithm:** Groups nodes by color/type, then sub-layouts each group
- **Spacing:** 400px between groups, 200px within groups
- **Strengths:** Clear functional separation, organized by type
- **Use when:** You want to see which nodes belong to same area

**Recommended for flows:**
- 00_master_overview.js (shows all departments)
- Any multi-departmental flow

## How to Use

### Step 1: Select a Flow
Click on any flow button in the header (e.g., "00 - Master Overview")

### Step 2: Apply Auto-Layout
1. Click the **"Auto-Layout ⚡"** button in the top-right corner
2. Select your desired layout algorithm from the dropdown menu
3. Wait for the loading overlay (1-2 seconds for ELK, instant for others)
4. View automatically fits to show entire layout

### Step 3: Manual Adjustments (Optional)
- Drag any node to fine-tune position
- Positions auto-save to localStorage
- Changes persist across browser sessions

### Step 4: Try Different Layouts
- Click "Auto-Layout ⚡" again
- Try different algorithms to find the best visualization
- Each layout replaces previous positions

### Step 5: Reset if Needed
- Click **"Restaurar Original"** button to return to default layout
- All saved positions are cleared
- Flow returns to original design

## Layout Statistics Panel

After applying a layout, a statistics panel briefly appears showing:

- **Nodes:** Total number of nodes in the flow
- **Edges:** Total number of connections
- **Dimensions:** Canvas width × height in pixels
- **Crossings:** Estimated number of edge crossings (lower is better)

The panel automatically disappears after 5 seconds.

## Technical Details

### Implementation
- **Dagre:** v0.8.5 - Fast hierarchical layouts
- **ELK:** v0.11.0 - Advanced graph layouts with optimization
- **Storage:** localStorage with key pattern `flow-positions-${flowTitle}`
- **Animation:** 800ms fitView transition with 20% padding

### Performance
- **Dagre layouts:** < 100ms for any flow size
- **Grid/Circular:** < 50ms for any flow size  
- **Force-directed:** < 500ms for flows up to 100 nodes
- **ELK layouts:** 1-2 seconds for complex flows (50+ nodes)

### Browser Compatibility
- ✅ Chrome 90+ (recommended)
- ✅ Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+

## Algorithm Selection Guide

### Choose by Flow Characteristics:

**Linear Sequential Process** (A → B → C → D)  
→ Use **Dagre Top-Bottom** or **Dagre Left-Right**

**Complex with Many Connections** (A ↔ B ↔ C ↔ D)  
→ Use **ELK Layered** or **ELK Force**

**Equal Weight Nodes** (no clear hierarchy)  
→ Use **Grid Layout**

**Cyclic Process** (A → B → C → A)  
→ Use **Circular Layout**

**Mixed/Unknown Structure**  
→ Try **Force-Directed** first, then **ELK Layered**

**Multi-Department View**  
→ Use **Grouped by Color**

### Choose by Goal:

**Goal: Maximum Clarity**  
→ **Dagre Top-Bottom** - clearest hierarchy

**Goal: Minimal Edge Crossings**  
→ **ELK Layered** - optimized for readability

**Goal: Natural/Balanced**  
→ **Force-Directed** - physics-based spacing

**Goal: Uniform Presentation**  
→ **Grid Layout** - predictable positions

**Goal: Show Relationships**  
→ **ELK Force** - reveals clusters

**Goal: Functional Organization**  
→ **Grouped by Color** - departmental view

## Keyboard Shortcuts (Future Feature)

Planned for v1.3.0:
- `Ctrl+1` - Dagre Top-Bottom
- `Ctrl+2` - Dagre Left-Right
- `Ctrl+3` - ELK Layered
- `Ctrl+4` - Grid Layout
- `Ctrl+R` - Reset to Original

## Troubleshooting

### Layout Takes Too Long
- ELK algorithms are asynchronous and may take 1-2 seconds
- This is normal for complex flows (40+ nodes)
- Loading overlay shows progress

### Nodes Overlap After Layout
- Try a different algorithm (ELK Layered minimizes overlaps)
- Manually adjust overlapping nodes (positions auto-save)
- Consider increasing spacing in `layoutHelpers.js`

### Layout Doesn't Fit Screen
- Auto-fit should work automatically after layout
- If not, use zoom controls or mouse wheel to adjust
- Click minimap to navigate large layouts

### Positions Not Saving
- Check browser localStorage is enabled
- Check browser console for errors (F12)
- Try clearing localStorage and re-applying layout

### Reset Button Doesn't Work
- Refresh browser to reload original positions
- Check that flow data files haven't changed
- Verify localStorage key exists: `flow-positions-${flowTitle}`

## Code Examples

### Applying Layout Programmatically

```javascript
// In FlowViewer.jsx
const applyLayout = useCallback(async (layoutType) => {
  setLayouting(true)
  
  try {
    let layoutedElements
    
    switch (layoutType) {
      case 'dagre-tb':
        layoutedElements = getLayoutedElementsDagre(nodes, edges, 'TB')
        break
      case 'elk-layered':
        layoutedElements = await getLayoutedElementsELK(nodes, edges, { 
          algorithm: 'layered',
          direction: 'DOWN' 
        })
        break
      // ... more cases
    }
    
    setNodes(layoutedElements.nodes)
    
    // Save positions
    const positions = layoutedElements.nodes.reduce((acc, n) => {
      acc[n.id] = n.position
      return acc
    }, {})
    localStorage.setItem(`flow-positions-${flowTitle}`, JSON.stringify(positions))
    
    // Fit view
    setTimeout(() => {
      fitView({ padding: 0.2, duration: 800 })
    }, 100)
    
  } finally {
    setLayouting(false)
  }
}, [nodes, edges, flowTitle, setNodes, fitView])
```

### Custom Layout Parameters

Edit `src/utils/layoutHelpers.js` to customize:

```javascript
// Adjust Dagre spacing
const g = new dagre.graphlib.Graph()
g.setGraph({ 
  rankdir: direction,
  nodesep: 150,  // Change horizontal spacing
  ranksep: 100,  // Change vertical spacing
  marginx: 20,
  marginy: 20
})

// Adjust Grid columns
export const getGridLayout = (nodes, edges, columns = 5) => {
  // Change columns parameter to adjust grid width
}

// Adjust Force-directed iterations
export const getForceLayout = (nodes, edges, iterations = 50) => {
  // Increase iterations for better quality (slower)
}
```

## Future Enhancements

### Planned for v1.3.0:
- [ ] Keyboard shortcuts for quick layout switching
- [ ] Layout presets per flow type (auto-recommend best layout)
- [ ] Custom spacing controls in UI
- [ ] Export layout as image/PNG
- [ ] Undo/Redo for layout changes
- [ ] Animation speed controls
- [ ] Multi-select nodes for group repositioning

### Planned for v1.4.0:
- [ ] Machine learning layout recommendations
- [ ] A/B testing of layouts with user feedback
- [ ] Custom layout templates
- [ ] Collaborative layout editing
- [ ] Layout versioning and history

## Related Documentation

- `README.md` - Main project documentation
- `INICIO_RAPIDO.md` - Quick start guide
- `TIPS_Y_TRUCOS.md` - Tips for manual node reorganization
- `CHANGELOG.md` - Version history and changes
- `TEST_AUTO_LAYOUT.md` - Testing checklist

## Support

For issues or questions:
1. Check browser console for errors (F12)
2. Review this documentation
3. Check `TIPS_Y_TRUCOS.md` for manual adjustment tips
4. File an issue with reproduction steps

---

**Version:** 1.2.0  
**Last Updated:** February 12, 2026  
**Author:** Orange Staffing Development Team
