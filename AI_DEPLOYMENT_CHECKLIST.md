# AI Assistant Deployment Checklist

## ✅ ISSUES FIXED

### 1. **Angular Module Error** - FIXED ✅
**Problem:** `CurrencyDisplayPipe` and `DateAgoPipe` were declared in multiple modules

**Solution Applied:**
- ✅ Removed `CurrencyDisplayPipe` from `SharedModule`
- ✅ Removed `DateAgoPipe` from `ShareModule`
- ✅ Removed `DateAgoPipe` import from `app.module.ts`
- ✅ Made `PipesModule` the single source of truth for all pipes
- ✅ Both modules now import `PipesModule` instead

**Files Modified:**
- `src/app/module/shared/shared.module.ts`
- `src/app/shareModule/share-module/share-module.module.ts`
- `src/app/app.module.ts`

### 2. **CORS Preflight Error** - FIXED ✅
**Problem:** Backend wasn't handling OPTIONS requests properly

**Solution Applied:**
- ✅ Added OPTIONS method to CORS headers
- ✅ Added preflight request handler to `createSession.php`
- ✅ Added preflight request handler to `getSessions.php`

**Files Modified:**
- `myapi/myapi/api/ai_assistant/createSession.php`
- `myapi/myapi/api/ai_assistant/getSessions.php`

---

## 🔴 CRITICAL: Backend Deployment Required

### **The HTTP Error (status: 0) means the backend is not deployed yet!**

The frontend is trying to connect to:
```
https://erp.gvstech.net/myapiAi/api/ai_assistant/
```

But the AI assistant backend files need to be uploaded to the server.

---

## 📋 DEPLOYMENT STEPS

### **Step 1: Database Setup** 🔴 REQUIRED

Run the database schema to create AI tables:

```bash
mysql -u gvstechn_hossam -p gvstechn_erp < myapi/myapi/database/ai_assistant_schema.sql
```

Or manually execute the SQL file in phpMyAdmin:
1. Login to phpMyAdmin
2. Select database: `gvstechn_erp`
3. Go to "SQL" tab
4. Copy and paste the contents of `myapi/myapi/database/ai_assistant_schema.sql`
5. Click "Go"

**Verify tables created:**
```sql
SHOW TABLES LIKE 'ai_%';
```

You should see:
- `ai_chat_history`
- `ai_chat_sessions`
- `ai_config`
- `ai_invoice_items`
- `ai_invoices`

---

### **Step 2: Fix Encryption Key** 🔴 CRITICAL SECURITY ISSUE

The `encryption_key.php` file currently contains your OpenAI API key directly (INSECURE!).

**Follow these steps:**

**A. Generate a proper encryption key:**
```bash
php -r "echo base64_encode(openssl_random_pseudo_bytes(32));"
```

**B. Update the file:**
Edit `myapi/myapi/config/encryption_key.php`:
```php
<?php
return 'YOUR_GENERATED_KEY_FROM_STEP_A';
?>
```

**C. Encrypt your OpenAI API key:**
Create a temporary script `encrypt_key.php`:
```php
<?php
require_once 'myapi/myapi/utils/Encryption.php';

$apiKey = 'sk-proj-YOUR_OPENAI_API_KEY_HERE';
$encrypted = Encryption::encrypt($apiKey);

echo "Encrypted API Key:\n" . $encrypted . "\n";
?>
```

Run it:
```bash
php encrypt_key.php
```

**D. Store encrypted key in database:**
```sql
UPDATE ai_config
SET config_value = 'YOUR_ENCRYPTED_KEY_FROM_STEP_C'
WHERE config_key = 'openai_api_key';
```

**E. Add to .gitignore:**
```bash
echo "myapi/myapi/config/encryption_key.php" >> .gitignore
```

**F. Delete the temporary script:**
```bash
rm encrypt_key.php
```

---

### **Step 3: Upload Backend Files to Server** 🔴 REQUIRED

Upload these folders to `https://erp.gvstech.net/myapiAi/`:

**New files to upload:**
```
myapi/myapi/models/
├── AiInvoice.php
├── AiChatHistory.php
├── AiChatSession.php
└── OpenAIService.php

myapi/myapi/utils/
├── Encryption.php
├── PDFProcessor.php
├── DataMatcher.php
└── QueryBuilder.php

myapi/myapi/api/ai_assistant/
├── uploadPDF.php
├── extractPDF.php
├── chat.php
├── getSessions.php
├── getHistory.php
└── createSession.php

myapi/myapi/api/ai_invoices/
└── read.php

myapi/myapi/config/
└── encryption_key.php (with proper encryption key!)

myapi/myapi/database/
└── ai_assistant_schema.sql (for reference only)
```

---

### **Step 4: Create Upload Directory** 🔴 REQUIRED

SSH to your server and create the upload directory:

```bash
ssh your-user@erp.gvstech.net
cd /path/to/myapiAi
mkdir -p uploads/ai_invoices
chmod 755 uploads/ai_invoices
chown www-data:www-data uploads/ai_invoices  # Or your web server user
```

---

### **Step 5: Test Backend Endpoints**

After deployment, test each endpoint:

**Test 1: Create Session**
```bash
curl -X POST https://erp.gvstech.net/myapiAi/api/ai_assistant/createSession.php \
  -H "Content-Type: application/json" \
  -d '{"store_id": 1, "user_id": 1, "year_id": 3, "session_title": "Test Session"}'
```

Expected response:
```json
{
  "success": true,
  "message": "Session created successfully",
  "data": {
    "session_id": "sess_1234567890_abcdef",
    "session_title": "Test Session"
  }
}
```

**Test 2: Get Sessions**
```bash
curl "https://erp.gvstech.net/myapiAi/api/ai_assistant/getSessions.php?store_id=1&user_id=1"
```

Expected response:
```json
{
  "success": true,
  "data": [...]
}
```

---

### **Step 6: Frontend Build & Deploy**

**A. Clear build cache:**
```bash
rm -rf www/
rm -rf node_modules/.cache/
```

**B. Install dependencies:**
```bash
npm install
```

**C. Build for production:**
```bash
ionic build --prod
```

**D. Test locally first:**
```bash
ionic serve
```

**E. Deploy to server:**
Upload the `www/` folder to your production server.

---

## 🧪 TESTING CHECKLIST

After deployment, test these features:

### Frontend Tests:
- [ ] App loads without Angular module errors
- [ ] No console errors about duplicate pipe declarations
- [ ] AI Assistant menu item appears in sidebar
- [ ] AI sparkles buttons appear in invoice pages

### Backend Tests:
- [ ] Database tables exist (5 tables)
- [ ] Create session endpoint works
- [ ] Get sessions endpoint works
- [ ] CORS headers working (no preflight errors)

### Integration Tests:
- [ ] Click AI Assistant in menu - page loads
- [ ] Floating widget appears in bottom-right corner
- [ ] Click widget - expands without errors
- [ ] Create new session works
- [ ] Chat streaming works (send "Hello")
- [ ] PDF upload works (if you have a sample invoice)

---

## 📝 TROUBLESHOOTING

### Error: "Type CurrencyDisplayPipe is part of declarations of 2 modules"
**Status:** ✅ FIXED
**Solution:** Already applied. Rebuild the app if error persists.

### Error: HTTP status 0 / Network error
**Cause:** Backend not deployed or database tables missing
**Solution:** Complete Steps 1-4 above

### Error: "Connection Error" from Database.php
**Cause:** Database credentials incorrect or tables missing
**Solution:**
1. Verify database credentials in `myapi/myapi/config/Database.php`
2. Run the database schema (Step 1)

### Error: "Failed to create session"
**Cause:** Database tables don't exist
**Solution:** Run `ai_assistant_schema.sql` (Step 1)

### Error: OpenAI API errors
**Cause:** API key not encrypted/stored properly
**Solution:** Complete Step 2 (encryption key setup)

---

## ✅ SUCCESS CRITERIA

You'll know everything is working when:

1. ✅ App loads with no console errors
2. ✅ AI Assistant page loads at `/folder/ai-assistant`
3. ✅ Floating widget appears and can be clicked
4. ✅ Widget creates a new session without errors
5. ✅ You can send a message and get a streaming response
6. ✅ Session appears in the sidebar
7. ✅ PDF upload works (if OpenAI key is configured)

---

## 🚀 NEXT STEPS AFTER DEPLOYMENT

Once everything is working:

1. **Test PDF extraction** with real invoice PDFs
2. **Test chat queries** like:
   - "Show me today's sales"
   - "Who are my top 5 customers?"
   - "What items are low in stock?"
3. **Monitor OpenAI API usage** at https://platform.openai.com/usage
4. **Set up error logging** for production monitoring
5. **Configure HTTPS** if not already enabled (required for production)

---

## 📞 SUPPORT

If you encounter any issues:
1. Check browser console for errors
2. Check server error logs
3. Verify all deployment steps completed
4. Test backend endpoints individually with curl

---

**Last Updated:** 2025-12-27
**Status:** Ready for deployment after completing Steps 1-6
