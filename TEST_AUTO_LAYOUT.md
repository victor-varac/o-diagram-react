# Testing Auto-Layout Feature (v1.2.0)

## Test Date: February 12, 2026

## Server Status
✅ Server running at: http://localhost:3001/

## Test Checklist

### 1. Basic Layout Menu Access
- [ ] Click on "Auto-Layout ⚡" button in top-right corner
- [ ] Verify dropdown menu appears with 8 layout options
- [ ] Verify menu closes when clicking outside

### 2. Test Each Layout Algorithm

#### Dagre Top-Bottom (Hierarchical Vertical)
- [ ] Select "Dagre Top-Bottom"
- [ ] Verify loading overlay appears
- [ ] Verify nodes reorganize vertically
- [ ] Verify view automatically fits after layout
- [ ] Best for: Linear flows like payroll, employee lifecycle

#### Dagre Left-Right (Hierarchical Horizontal)
- [ ] Select "Dagre Left-Right"
- [ ] Verify nodes reorganize horizontally
- [ ] Verify proper spacing between levels
- [ ] Best for: Wide displays, process flows

#### ELK Layered (Minimal Crossings)
- [ ] Select "ELK Layered"
- [ ] Verify async loading works (may take 1-2 seconds)
- [ ] Check for minimal edge crossings
- [ ] Best for: Complex flows with many connections

#### ELK Force (Physics Simulation)
- [ ] Select "ELK Force"
- [ ] Verify balanced node distribution
- [ ] Check natural clustering behavior
- [ ] Best for: Understanding node relationships

#### Grid Layout
- [ ] Select "Grid"
- [ ] Verify uniform grid distribution (5 columns)
- [ ] Check equal spacing
- [ ] Best for: Comparing many nodes

#### Circular Layout
- [ ] Select "Circular"
- [ ] Verify nodes arranged in circle
- [ ] Check proper radius calculation
- [ ] Best for: Cyclic processes

#### Force-Directed (Custom Physics)
- [ ] Select "Force-Directed"
- [ ] Verify balanced distribution (50 iterations)
- [ ] Check natural spacing
- [ ] Best for: Balanced layouts

#### Grouped by Color (Functional Areas)
- [ ] Select "Grouped by Color"
- [ ] Verify nodes grouped by type/color
- [ ] Check group separation
- [ ] Best for: Understanding functional areas

### 3. Test on Different Flows

#### Small Flow (01_employee_lifecycle - 28 nodes)
- [ ] Test all 8 layouts
- [ ] Verify performance is fast
- [ ] Check visual clarity

#### Medium Flow (03_payroll - 31 nodes)
- [ ] Test all 8 layouts
- [ ] Verify loading times are acceptable
- [ ] Check edge routing quality

#### Large Flow (09_accounting - 52 nodes)
- [ ] Test all 8 layouts
- [ ] Verify no performance issues
- [ ] Check if layout handles complexity well
- [ ] Monitor console for errors

### 4. Persistence & Reset
- [ ] Apply a layout
- [ ] Manually drag a few nodes
- [ ] Refresh browser
- [ ] Verify positions are saved
- [ ] Click "Restaurar Original"
- [ ] Verify returns to default positions
- [ ] Apply layout again
- [ ] Verify layout replaces saved positions

### 5. Layout Statistics Panel
- [ ] Apply any layout
- [ ] Verify stats panel appears temporarily (5 seconds)
- [ ] Check it shows:
  - [ ] Number of nodes
  - [ ] Number of edges
  - [ ] Canvas dimensions
  - [ ] Edge crossings estimate
- [ ] Verify panel auto-hides after 5 seconds

### 6. UI/UX Elements
- [ ] Verify loading overlay is visible during layout
- [ ] Check smooth transitions with fitView animation
- [ ] Test that nodes are NOT draggable during layout
- [ ] Verify nodes become draggable after layout completes
- [ ] Check cursor changes to grab/grabbing on drag

### 7. Browser Console
- [ ] Open DevTools Console (F12)
- [ ] Apply each layout
- [ ] Verify no errors appear
- [ ] Check for any warnings
- [ ] Monitor network tab for issues

### 8. Edge Cases
- [ ] Test rapid layout switching (click 3 layouts quickly)
- [ ] Verify no race conditions
- [ ] Test with browser zoom at 50%, 100%, 150%
- [ ] Test with narrow window width
- [ ] Test with window resize during layout

## Known Issues to Watch For

### Performance
- ELK layouts may take 1-2 seconds on large flows (expected)
- Force-directed layout with 50 iterations should complete in <1s

### Visual Quality
- Some layouts may produce overlapping nodes if spacing is too tight
- Edge crossings are minimized but not always eliminated
- Grouped layout may need manual adjustment for visual polish

### Browser Compatibility
- Test in Chrome/Edge (primary)
- Test in Firefox (secondary)
- Safari may have rendering differences

## Success Criteria

✅ All 8 layouts successfully reorganize nodes
✅ No console errors during layout application
✅ Positions persist correctly to localStorage
✅ Smooth animations and transitions
✅ Loading states are clear to user
✅ Stats panel displays accurate information
✅ Manual dragging works after auto-layout
✅ Reset button properly restores defaults

## Next Steps After Testing

If all tests pass:
1. Update README.md with auto-layout documentation
2. Add screenshots of different layout types
3. Update TIPS_Y_TRUCOS.md with layout recommendations
4. Update CHANGELOG.md with test results
5. Consider adding keyboard shortcuts (Ctrl+1-8 for layouts)

If issues found:
1. Document specific failures
2. Check browser console for error details
3. Adjust spacing parameters in layoutHelpers.js
4. Optimize performance if needed
5. Fix bugs and re-test

## Testing Notes

_Add your observations here:_

---

**Tester:** ________________  
**Browser:** ________________  
**OS:** macOS (darwin)  
**Date:** ________________
