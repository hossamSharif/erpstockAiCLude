# SSE Support Guide for FastComet Shared Hosting

## 📋 Overview

This guide helps you configure and test Server-Sent Events (SSE) support on FastComet shared hosting for the AI Assistant feature.

---

## 🚀 Quick Start - Testing SSE

### Step 1: Upload Test Files

Upload these files to your server at `https://erp.gvstech.net/myapiAi/api/`:

```
myapi/myapi/api/
├── .htaccess              ← SSE configuration
├── test_sse.php          ← SSE test endpoint
├── test_sse.html         ← SSE test interface
└── server_info.php       ← Server capability check
```

### Step 2: Check Server Capabilities

1. Open in browser: `https://erp.gvstech.net/myapiAi/api/server_info.php`
2. Review the configuration report
3. Note any warnings or errors
4. **DELETE server_info.php after testing** (security risk!)

### Step 3: Test SSE Support

1. Open in browser: `https://erp.gvstech.net/myapiAi/api/test_sse.html`
2. Click "Start SSE Test"
3. Watch for streaming messages (should receive 5 messages)

**Expected Result:**
- ✅ Connection opens
- ✅ Receives 5 messages over 5 seconds
- ✅ "Test completed successfully"

**If it fails:**
- ❌ Connection closes immediately → SSE not supported
- ⚠️ No messages received → Buffering issues
- ⚠️ Timeout → Execution limits too low

---

## 🔧 SSE Configuration for FastComet

### Option 1: .htaccess Configuration (Recommended)

The `.htaccess` file is already configured with:

```apache
# Disable output compression for SSE
SetEnvIfNoCase Request_URI "chat\.php$" no-gzip dont-vary

# Disable buffering
Header set X-Accel-Buffering "no"
Header set Cache-Control "no-cache"

# Increase execution time
php_value max_execution_time 300
php_value output_buffering Off
```

**Upload this file to:** `public_html/myapiAi/api/.htaccess`

### Option 2: php.ini Configuration

If FastComet allows custom `php.ini` in your directory:

```ini
max_execution_time = 300
output_buffering = Off
zlib.output_compression = Off
implicit_flush = On
```

Create this file at: `public_html/myapiAi/api/php.ini`

### Option 3: Contact FastComet Support

If SSE still doesn't work, open a ticket with FastComet:

**Template Email:**
```
Subject: Enable Server-Sent Events (SSE) for my account

Hi FastComet Support,

I'm developing a real-time application that uses Server-Sent Events (SSE).
Could you please verify if SSE is supported on my shared hosting plan and
help configure these PHP settings:

- Disable output_buffering
- Disable zlib.output_compression
- Set max_execution_time to 300 seconds
- Enable implicit_flush

My domain: erp.gvstech.net
Directory: /myapiAi/api/

Thank you!
```

---

## 🔄 Fallback: Polling Mode (If SSE Fails)

If SSE doesn't work on shared hosting, use the polling alternative:

### Backend Setup

Already created: `myapi/myapi/api/ai_assistant/chat_polling.php`

This endpoint:
- Uses POST instead of GET
- Returns complete response (no streaming)
- Works on ANY shared hosting
- Slightly slower user experience

### Frontend Switch

Update `src/app/services/ai-chat.service.ts`:

**Find the `chatStream()` method** (line 101) and replace with:

```typescript
/**
 * Chat with AI assistant (polling fallback for shared hosting)
 */
chatStream(
  session_id: string,
  message: string,
  store_id: any,
  user_id: any,
  year_id: any,
  user_name: string = 'User'
): Observable<any> {
  return new Observable((observer: Observer<any>) => {
    const body = {
      session_id: session_id,
      message: message,
      store_id: store_id,
      user_id: user_id,
      year_id: year_id,
      user_name: user_name
    };

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    // Use polling endpoint instead of SSE
    this.http.post(this.api + 'ai_assistant/chat_polling.php', body, httpOptions)
      .subscribe(
        (response: any) => {
          if (response.success) {
            // Emit full response at once
            observer.next({
              type: 'done',
              full_response: response.message
            });
            observer.complete();
          } else {
            observer.next({
              type: 'error',
              message: response.error || 'Unknown error'
            });
            observer.error(response.error);
          }
        },
        (error) => {
          observer.next({
            type: 'error',
            message: 'Connection error'
          });
          observer.error(error);
        }
      );
  });
}
```

**Trade-offs:**
- ❌ No real-time streaming (response appears all at once)
- ✅ Works on all hosting (100% compatible)
- ✅ Simpler, more reliable
- ✅ Still fully functional AI chat

---

## 🧪 Testing Checklist

After deployment, verify:

- [ ] Server info page loads: `server_info.php`
- [ ] All PHP extensions enabled (cURL, PDO, OpenSSL)
- [ ] PHP version 7.4 or higher
- [ ] SSE test passes: `test_sse.html`
- [ ] AI chat works in the app
- [ ] No console errors in browser
- [ ] Messages stream correctly (SSE) or appear all at once (polling)

---

## 🐛 Troubleshooting

### Issue: "SSE Connection Closed/Failed"

**Causes:**
1. Output buffering enabled
2. Server doesn't support SSE
3. Proxy/firewall blocking

**Solutions:**
1. Check `.htaccess` is uploaded
2. Try polling mode (chat_polling.php)
3. Contact FastComet support

### Issue: "Connection timeout after 30 seconds"

**Cause:** max_execution_time too low

**Solution:**
```apache
# Add to .htaccess
php_value max_execution_time 300
```

### Issue: "No messages received, connection stays open"

**Cause:** Output buffering preventing flush

**Solution:**
```apache
# Add to .htaccess
php_value output_buffering Off
SetEnvIfNoCase Request_URI "chat\.php$" no-gzip
```

### Issue: "CORS errors in browser console"

**Cause:** Missing CORS headers

**Solution:** Already in `.htaccess`:
```apache
Header set Access-Control-Allow-Origin "*"
```

---

## 📊 Performance Comparison

### SSE Mode (Streaming)
- ✅ Real-time streaming responses
- ✅ Better user experience
- ⚠️ Requires special server config
- ⚠️ May not work on all shared hosting

### Polling Mode (Non-Streaming)
- ✅ Works everywhere
- ✅ Simpler, more reliable
- ❌ No real-time streaming
- ✅ Still fast (2-5 second response)

**Recommendation:** Try SSE first, fallback to polling if needed.

---

## 🔒 Security Notes

1. **Delete test files after testing:**
   - `server_info.php` (exposes server config)
   - `test_sse.php` (not needed in production)
   - `test_sse.html` (not needed in production)

2. **Keep these files:**
   - `.htaccess` (SSE configuration)
   - `chat.php` (SSE chat endpoint)
   - `chat_polling.php` (polling fallback)

3. **API Key Security:**
   - OpenAI API key should be encrypted in database
   - Never expose API keys in frontend code
   - Check `ai_config` table has `is_encrypted = 1`

---

## 📞 Support Resources

**FastComet Support:**
- Live Chat: https://my.fastcomet.com/
- Ticket System: https://my.fastcomet.com/submitticket.php
- Phone: Available in client area

**FastComet SSE Documentation:**
- Check their knowledge base for "Server-Sent Events" or "Long Polling"
- Ask about PHP execution limits on your plan
- Verify if mod_headers and mod_deflate are available

**Alternative Hosting Options (if SSE not supported):**
- VPS hosting from FastComet (full control)
- DigitalOcean App Platform
- AWS Lightsail
- Heroku (supports SSE out of box)

---

## ✅ Next Steps

1. ✅ Upload test files to server
2. ✅ Run server_info.php check
3. ✅ Test SSE with test_sse.html
4. ⏳ **If SSE works:** Keep using current chat.php
5. ⏳ **If SSE fails:** Switch to chat_polling.php in frontend

**After testing, please share:**
- Screenshot of server_info.php results
- Screenshot of test_sse.html results
- Any error messages from browser console

This will help determine the best solution for your hosting environment!
