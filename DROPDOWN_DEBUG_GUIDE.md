# Account Selector Dropdown Debug Guide

## How to Debug the Dropdown Issue

I've added extensive console logging to help identify the exact problem. Follow these steps:

### Step 1: Open the Application
1. Run your application
2. Navigate to the **Statement2** page (كشف حساب)
3. Open **Browser DevTools** (F12)
4. Go to the **Console** tab

### Step 2: Check Account Loading
Look for these console messages when the page loads:

```
=== LOADING ACCOUNTS ===
Store ID: [number] Year ID: [number]
=== ACCOUNTS API RESPONSE ===
Full response: {...}
✓ Successfully loaded [number] accounts
First 3 accounts: [...]
```

**If you see:**
- ❌ "Account Selector: store_info or year not provided" → The component isn't receiving required inputs
- ❌ "✗ No accounts data in response" → API is returning empty data
- ❌ "=== ACCOUNTS API ERROR ===" → API call is failing

**ACTION:** If accounts aren't loading, check:
1. Is the API endpoint working? Check Network tab
2. Are store_info and year being passed to the component?
3. Does the API response have the correct structure?

### Step 3: Test Dropdown Trigger
Click on the account input field and check the console for:

```
=== INPUT FOCUS EVENT ===
Total accounts loaded: [number]
Current searchTerm: [text]
Selected account: [object or null]
Current filteredAccounts: [number]
Filtered accounts after focus: [number]
Dropdown should now be visible. showDropdown = true
Dropdown position: {top: "123px", left: "456px", width: "789px"}
```

**If you see:**
- ❌ "NO ACCOUNTS LOADED - Cannot show dropdown" → Go back to Step 2
- ❌ "Filtered accounts after focus: 0" → Accounts are being filtered out
- ❌ "showDropdown = false" → Dropdown flag isn't being set correctly

### Step 4: Check DOM Rendering
With the dropdown supposedly visible, use DevTools Elements inspector:

1. Click the **Elements** tab in DevTools
2. Press **Ctrl+F** to search in the DOM
3. Search for: `dropdown-container`

**If you find the element:**
✅ Element exists → Check its computed styles
- Right-click the element → Inspect
- Check the **Styles** panel for:
  - `display: none` (should NOT be present)
  - `visibility: hidden` (should NOT be present)
  - `opacity: 0` (should NOT be present)
  - `position: fixed` (should be present)
  - `z-index: 10000` (should be present)
  - `top`, `left`, `width` values (should have pixel values)

**If you DON'T find the element:**
❌ The `*ngIf` condition is false → Check console for:
- `showDropdown` value
- `filteredAccounts.length` value

### Step 5: Visual Inspection
If the element exists in DOM but isn't visible:

1. In Elements inspector, find `.dropdown-container`
2. Check the **Computed** tab for:
   - Width: Should be > 0px
   - Height: Should be > 0px
   - Position: Should be "fixed"
   - Top: Should be a reasonable viewport coordinate
   - Left: Should be a reasonable viewport coordinate
   - Z-index: Should be 10000

3. Try adding this temporary style in DevTools to force visibility:
   ```css
   .dropdown-container {
     background: red !important;
     border: 5px solid blue !important;
     min-height: 200px !important;
   }
   ```

If the dropdown appears RED with BLUE border → It was a styling issue
If still nothing → Position might be off-screen

### Step 6: Check Position Calculation
Look at the console for position calculation logs:

```
Dropdown position calculation:
Element used: [DIV or ION-INPUT]
Element rect: DOMRect {x: 123, y: 456, ...}
Viewport size: 1920 1080
Calculated dropdown position: {top: "478px", left: "123px", width: "400px"}
Space below: 602  Space above: 456
```

**Check if:**
- `top` value is reasonable (not negative, not > viewport height)
- `left` value is reasonable (not negative, not > viewport width)
- Element rect looks correct (has actual coordinates, not all zeros)

**If position looks wrong:**
- The input element might not be rendered yet
- The getBoundingClientRect() might be returning incorrect values

### Step 7: Type in the Input
Start typing in the account input field. You should see:

```
Search term: [your text]
Total accounts: [number]
CRITICAL FIX: Always recalculate position when user types
Showing dropdown with [number] filtered accounts
```

After each keystroke, check if:
- The dropdown position is being recalculated
- The filtered accounts count changes based on your search

## Common Issues and Fixes

### Issue 1: No accounts loaded
**Symptoms:** Console shows "0 accounts"
**Fix:** Check the API response structure and ensure getAllCustomerSupplierAccounts is working

### Issue 2: Accounts load but dropdown doesn't show
**Symptoms:** Console shows accounts loaded but dropdown isn't visible
**Fix:** Check the `*ngIf` condition in the template - might be false

### Issue 3: Dropdown renders but is invisible
**Symptoms:** Element exists in DOM but not visible
**Possible causes:**
- CSS `display: none` or `visibility: hidden`
- Z-index conflict (another element on top)
- Position off-screen (top/left values incorrect)
- Zero width/height
- Parent container clipping (check all parents for `overflow: hidden`)

### Issue 4: Dropdown appears in wrong location
**Symptoms:** Dropdown visible but not near the input
**Fix:** Check the position calculation - `getBoundingClientRect()` values

### Issue 5: Dropdown disappears immediately
**Symptoms:** Dropdown flashes and disappears
**Fix:** Check the blur event - might be hiding too quickly

## Quick CSS Override Test

To quickly test if it's a CSS issue, add this to `account-selector.component.scss`:

```scss
.dropdown-container {
  position: fixed !important;
  z-index: 999999 !important;
  background: red !important;
  border: 10px solid blue !important;
  min-height: 300px !important;
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
}
```

If the dropdown appears (even if incorrectly positioned), it's a CSS styling issue.
If still nothing, it's a rendering/logic issue.

## Report Back

After following these steps, please report:

1. **What console messages do you see?** (Copy/paste the relevant logs)
2. **Does the dropdown-container element exist in the DOM?** (Yes/No)
3. **If yes, what are its computed styles?** (position, top, left, width, height, z-index, display, visibility)
4. **What happens when you type in the input field?** (Any console messages?)
5. **Does the quick CSS override test make it appear?** (Yes/No)

With this information, I can pinpoint the exact issue and provide a targeted fix!

---

**Debug Mode Active** - All console logs added to:
- `account-selector.component.ts` (loadAccounts, onInputFocus, onSearchInput, calculateDropdownPosition)
