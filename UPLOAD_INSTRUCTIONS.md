# 📤 BACKEND UPLOAD INSTRUCTIONS

## 🎯 Server Structure Required

Your server path is: `/home/gvstechn/erp.gvstech.net/myapiAi/`

**Current structure (you have this):**
```
/home/gvstechn/erp.gvstech.net/myapiAi/
└── api/
    └── ai_assistant/
        ├── createSession.php
        ├── getSessions.php
        ├── getHistory.php
        ├── chat.php
        ├── uploadPDF.php
        └── extractPDF.php
```

**Required complete structure:**
```
/home/gvstechn/erp.gvstech.net/myapiAi/
├── api/
│   ├── ai_assistant/
│   │   ├── createSession.php ✅ (already uploaded)
│   │   ├── getSessions.php ✅ (already uploaded)
│   │   ├── getHistory.php ✅ (already uploaded)
│   │   ├── chat.php ✅ (already uploaded)
│   │   ├── uploadPDF.php ✅ (already uploaded)
│   │   └── extractPDF.php ✅ (already uploaded)
│   └── ai_invoices/
│       └── read.php ❌ MISSING
├── models/
│   ├── AiInvoice.php ❌ MISSING
│   ├── AiChatHistory.php ❌ MISSING
│   ├── AiChatSession.php ❌ MISSING
│   └── OpenAIService.php ❌ MISSING
├── utils/
│   ├── Encryption.php ❌ MISSING
│   ├── PDFProcessor.php ❌ MISSING
│   ├── DataMatcher.php ❌ MISSING
│   └── QueryBuilder.php ❌ MISSING
└── config/
    ├── Database.php ✅ (should already exist)
    └── encryption_key.php ❌ MISSING (needs to be created)
```

---

## 📋 UPLOAD CHECKLIST

### **Step 1: Upload `utils` folder** 🔴 CRITICAL

**Local path:** `myapi/myapi/utils/`
**Server path:** `/home/gvstechn/erp.gvstech.net/myapiAi/utils/`

**Files to upload (4 files):**
- ✅ `Encryption.php` (4.8 KB)
- ✅ `PDFProcessor.php` (10 KB)
- ✅ `DataMatcher.php` (11 KB)
- ✅ `QueryBuilder.php` (18.8 KB)

**Upload command (via FTP/cPanel File Manager):**
1. Navigate to `/home/gvstechn/erp.gvstech.net/myapiAi/`
2. Create folder `utils`
3. Upload all 4 PHP files from `myapi/myapi/utils/` into the `utils` folder

---

### **Step 2: Upload `models` folder** 🔴 CRITICAL

**Local path:** `myapi/myapi/models/`
**Server path:** `/home/gvstechn/erp.gvstech.net/myapiAi/models/`

**Files to upload (4 NEW files only):**
- ✅ `AiInvoice.php` (12.8 KB)
- ✅ `AiChatHistory.php` (7.6 KB)
- ✅ `AiChatSession.php` (9.7 KB)
- ✅ `OpenAIService.php` (21.4 KB)

⚠️ **IMPORTANT:** Only upload these 4 new AI-related files. Don't replace existing model files!

**Upload command:**
1. Navigate to `/home/gvstechn/erp.gvstech.net/myapiAi/models/`
2. Upload the 4 AI model files (AiInvoice, AiChatHistory, AiChatSession, OpenAIService)
3. Leave existing model files untouched

---

### **Step 3: Upload `ai_invoices` API endpoint** 🔴 CRITICAL

**Local path:** `myapi/myapi/api/ai_invoices/`
**Server path:** `/home/gvstechn/erp.gvstech.net/myapiAi/api/ai_invoices/`

**Files to upload (1 file):**
- ✅ `read.php`

**Upload command:**
1. Navigate to `/home/gvstechn/erp.gvstech.net/myapiAi/api/`
2. Create folder `ai_invoices`
3. Upload `read.php` from `myapi/myapi/api/ai_invoices/`

---

### **Step 4: Create `encryption_key.php`** 🔴 CRITICAL SECURITY

**Server path:** `/home/gvstechn/erp.gvstech.net/myapiAi/config/encryption_key.php`

⚠️ **DO NOT upload the current encryption_key.php file!** It contains your API key in plain text!

**Instead, do this:**

**A. Generate a proper encryption key:**

On your server via SSH:
```bash
php -r "echo base64_encode(openssl_random_pseudo_bytes(32));"
```

Or on your local computer:
```bash
php -r "echo base64_encode(openssl_random_pseudo_bytes(32));"
```

**Example output:** `YXNkZmFzZGZhc2RmYXNkZmFzZGZhc2RmYXNkZmFzZGY=`

**B. Create the file on the server:**

Via cPanel File Manager:
1. Navigate to `/home/gvstechn/erp.gvstech.net/myapiAi/config/`
2. Create new file: `encryption_key.php`
3. Paste this content (replace with YOUR generated key):

```php
<?php
/**
 * Encryption Key Configuration
 * IMPORTANT: Keep this file secure and never commit to version control!
 */

// Replace this with the key you generated in step A
return 'YXNkZmFzZGZhc2RmYXNkZmFzZGZhc2RmYXNkZmFzZGY=';
?>
```

**C. Set file permissions:**
```bash
chmod 600 /home/gvstechn/erp.gvstech.net/myapiAi/config/encryption_key.php
```

---

### **Step 5: Encrypt and store OpenAI API key** 🔴 CRITICAL

**A. Create temporary encryption script:**

Via cPanel File Manager, create `/home/gvstechn/erp.gvstech.net/encrypt_api_key.php`:

```php
<?php
require_once 'myapiAi/utils/Encryption.php';

$apiKey = 'sk-proj-YOUR_OPENAI_API_KEY_HERE';

$encrypted = Encryption::encrypt($apiKey);

echo "<h2>Encrypted API Key:</h2>";
echo "<textarea style='width:100%;height:100px;'>$encrypted</textarea>";
echo "<p><strong>Copy this value and update the database!</strong></p>";
?>
```

**B. Run the script:**

Visit in browser: `https://erp.gvstech.net/encrypt_api_key.php`

Copy the encrypted key that appears.

**C. Update database:**

Run this SQL in phpMyAdmin:
```sql
UPDATE ai_config
SET config_value = 'PASTE_ENCRYPTED_KEY_HERE'
WHERE config_key = 'openai_api_key';
```

**D. Delete the temporary script:**
```bash
rm /home/gvstechn/erp.gvstech.net/encrypt_api_key.php
```

---

### **Step 6: Create uploads directory** 🔴 CRITICAL

Via SSH or cPanel Terminal:
```bash
cd /home/gvstechn/erp.gvstech.net/myapiAi
mkdir -p uploads/ai_invoices
chmod 755 uploads
chmod 755 uploads/ai_invoices
```

Or via cPanel File Manager:
1. Navigate to `/home/gvstechn/erp.gvstech.net/myapiAi/`
2. Create folder `uploads`
3. Inside `uploads`, create folder `ai_invoices`
4. Set permissions: 755 for both folders

---

## ✅ VERIFICATION CHECKLIST

After uploading, verify the structure:

**Via SSH:**
```bash
cd /home/gvstechn/erp.gvstech.net/myapiAi
ls -la utils/
ls -la models/ | grep "Ai\|OpenAI"
ls -la api/ai_invoices/
ls -la config/encryption_key.php
ls -la uploads/ai_invoices/
```

**Expected output:**
```
utils/:
- Encryption.php
- PDFProcessor.php
- DataMatcher.php
- QueryBuilder.php

models/:
- AiInvoice.php
- AiChatHistory.php
- AiChatSession.php
- OpenAIService.php
(+ other existing model files)

api/ai_invoices/:
- read.php

config/:
- encryption_key.php (600 permissions)

uploads/:
- ai_invoices/ folder exists
```

---

## 🧪 TEST AFTER UPLOAD

**Test 1: Create Session Endpoint**
```bash
curl -X POST https://erp.gvstech.net/myapiAi/api/ai_assistant/createSession.php \
  -H "Content-Type: application/json" \
  -d '{"store_id": 1, "user_id": 1, "year_id": 3, "session_title": "Test"}'
```

**Expected (SUCCESS):**
```json
{
  "success": true,
  "message": "Session created successfully",
  "data": {
    "session_id": "sess_...",
    "session_title": "Test"
  }
}
```

**If you still get errors:**
- Check that all files are uploaded to correct paths
- Verify file permissions (PHP files should be 644)
- Check server error logs

---

## 📂 QUICK UPLOAD GUIDE (cPanel File Manager)

1. **Login to cPanel** → File Manager
2. **Navigate to:** `/home/gvstechn/erp.gvstech.net/myapiAi/`
3. **Create folders:** `utils`, `models/` (if not exists), `api/ai_invoices`, `uploads/ai_invoices`
4. **Upload files:**
   - Into `utils/`: Upload 4 files from local `myapi/myapi/utils/`
   - Into `models/`: Upload 4 AI model files from local `myapi/myapi/models/`
   - Into `api/ai_invoices/`: Upload `read.php` from local `myapi/myapi/api/ai_invoices/`
5. **Create encryption_key.php** in `config/` folder
6. **Run encryption script** to encrypt OpenAI key
7. **Update database** with encrypted key
8. **Test** the endpoint

---

**Questions?**
Check the error log: `/home/gvstechn/erp.gvstech.net/logs/error_log`
