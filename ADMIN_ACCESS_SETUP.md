# Admin Access Control - Simple Setup Guide

## Overview
This system restricts certain features to admin users using localStorage. No database migration required!

## User Levels
- **Level 1**: Admin (Full access)
- **Level 2**: Normal User (Limited access)

## Admin-Only Features
These features are only visible to admin users:

1. **AI Assistant** - AI assistant page and menu item
2. **AI Chat Widget** - Floating AI chat widget
3. **Update Management** - App update management section

## How It Works
The system checks `localStorage.getItem('USER_LEVEL')` to determine user permissions:
- If `USER_LEVEL = '1'` → Admin (shows all features)
- If `USER_LEVEL = '2'` → Normal user (hides admin features)
- If `USER_LEVEL` is not set → Defaults to Admin (backward compatibility)

## Setup Instructions

### Method 1: Set User Level via Browser Console (Quick Testing)

1. **Login to the application**
2. **Open browser console** (F12 or Right-click → Inspect → Console)
3. **Run one of these commands:**

   ```javascript
   // Set current user as ADMIN
   localStorage.setItem('USER_LEVEL', '1');
   location.reload(); // Refresh page to apply changes
   ```

   OR

   ```javascript
   // Set current user as NORMAL USER
   localStorage.setItem('USER_LEVEL', '2');
   location.reload(); // Refresh page to apply changes
   ```

### Method 2: Set Default Level in Code

You can modify the default user level in `src/app/app.component.ts`:

```typescript
isAdmin(): boolean {
  if (!this.USER_INFO) {
    return false;
  }

  // Change the default from '1' to '2' if you want normal user as default
  const userLevel = this.USER_INFO.user_level || localStorage.getItem('USER_LEVEL') || '1';
  return userLevel == '1' || userLevel == 1;
}
```

## Testing Different User Levels

### Test as Admin
```javascript
// In browser console after login:
localStorage.setItem('USER_LEVEL', '1');
location.reload();
```

**Expected Results:**
✅ AI Assistant menu item is visible
✅ Update Management menu item is visible
✅ AI floating chat widget is visible

### Test as Normal User
```javascript
// In browser console after login:
localStorage.setItem('USER_LEVEL', '2');
location.reload();
```

**Expected Results:**
❌ AI Assistant menu item is hidden
❌ Update Management menu item is hidden
❌ AI floating chat widget is hidden

## Checking Current User Level

To check your current user level, run in browser console:
```javascript
console.log('User Level:', localStorage.getItem('USER_LEVEL'));
```

## Resetting to Default

To remove the user level setting and use the default:
```javascript
localStorage.removeItem('USER_LEVEL');
location.reload();
```

## Production Recommendations

For production use, you should:

1. **Store user level in database** - Add a `user_level` column to your `users` table
2. **Return from API** - Include `user_level` in login response
3. **Store in localStorage** - The auth service will store it automatically
4. **Validate on backend** - Always validate permissions on the server side

## Security Notes

⚠️ **Important:**
- localStorage can be modified by users via browser console
- For production, always validate permissions on the backend
- This frontend check is for UI purposes only
- Sensitive operations should always check permissions server-side

## Modified Files

Frontend files with admin checks:
- `src/app/app.component.ts` - `isAdmin()` method
- `src/app/app.component.html` - Conditional rendering with `*ngIf="isAdmin()"`
- `src/app/auth/auth-service.service.ts` - Handles user_level (optional from backend)

## Future Enhancement

When ready to implement proper user levels:
1. Add `user_level` column to database
2. Update backend login API to return `user_level`
3. Remove localStorage.setItem() manual testing
4. System will automatically use database values

---

**Quick Start:**
```javascript
// Admin access
localStorage.setItem('USER_LEVEL', '1'); location.reload();

// Normal user access
localStorage.setItem('USER_LEVEL', '2'); location.reload();
```
