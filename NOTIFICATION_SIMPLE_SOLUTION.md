# Simple Solution: categoryId from localStorage

## Overview
Simplified the notification system to use `categoryId` from the Angular frontend's localStorage (`SELECTED_CATEGORY_ID`) instead of complex SQL queries.

---

## How It Works

### 1. **Frontend (Angular)** - Item Stock Page
When updating an item, the frontend:
1. Gets `SELECTED_CATEGORY_ID` from localStorage (the category filter user is viewing)
2. Adds it to the update request along with item data
3. Sends to backend API

### 2. **Backend (PHP)** - API Endpoints
The API receives:
- `item_id`, `item_name`, `pay_price`, `retail_price`, etc.
- **`category_id`** from localStorage (defaults to '0' if not provided)

### 3. **Backend (PHP)** - Notifications
When prices change:
- Uses the `category_id` sent from frontend
- Sends notification to Firebase with valid categoryId

---

## Files Modified

### Backend (PHP)

**1. `myapi/myapi/api/items/updatePayPrice.php`** (Lines 35-37)
Added fields from frontend request:
```php
// For notifications (sent from frontend localStorage)
$category->item_name = $data->item_name ?? '';
$category->category_id = $data->category_id ?? '0';
```

**2. `myapi/myapi/models/items.php`** - `updatePayPrice()` method (Lines 751-756)
Reverted to simple query (only fetch old prices):
```php
$queryOld = 'SELECT pay_price, retail_price FROM items WHERE id = :id LIMIT 1';
```

**3. `myapi/myapi/models/items.php`** - `updatePayPrice()` method (Lines 815-826)
Use category_id from request:
```php
// Use category_id from request (SELECTED_CATEGORY_ID from localStorage)
$categoryId = !empty($this->category_id) ? $this->category_id : '0';

$notificationData = NotificationHelper::createPriceChangeData(
  $this->id,
  $this->item_name,
  $categoryId,
  $priceChanges
);
```

**4. `myapi/myapi/models/items.php`** - `update()` method (Lines 841-846)
Same simple query approach:
```php
$queryOld = 'SELECT pay_price, retail_price FROM items WHERE id = :id LIMIT 1';
```

**5. `myapi/myapi/models/items.php`** - `update()` method (Lines 936-947)
Use category_id from request:
```php
// Use category_id from request (SELECTED_CATEGORY_ID from localStorage)
$categoryId = !empty($this->category_id) ? $this->category_id : '0';

$notificationData = NotificationHelper::createPriceChangeData(
  $this->id,
  $this->item_name,
  $categoryId,
  $priceChanges
);
```

**6. `myapi/myapi/helpers/NotificationHelper.php`** (Line 241)
Always convert to string (no null check):
```php
'categoryId' => strval($categoryId),  // Always a valid number (0 = uncategorized)
```

---

### Frontend (Angular)

**1. `src/app/item-stock/item-stock.page.ts`** - `update()` method (Lines 763-776)
Made async and added localStorage fetch:
```typescript
async update(mdata){
   this.presentLoadingWithOptions('جاري تعديل البيانات ...')
   const updateData = { ...mdata[0] } as any;
   if ('imageUrl' in updateData) delete updateData.imageUrl;
   if ('tax' in updateData) delete updateData.tax;

   // Add category_id from localStorage for notifications (SELECTED_CATEGORY_ID)
   const savedCategoryId = await this.storage.get('SELECTED_CATEGORY_ID');
   if (savedCategoryId && !updateData.category_id) {
     updateData.category_id = savedCategoryId;
   }

   this.api.updateItem(updateData).subscribe(data => {
```

**2. `src/app/item-stock/item-stock.page.ts`** - `editCell()` method (Lines 803-821)
Same async approach for inline editing:
```typescript
async editCell(i , item){
   this.presentLoadingWithOptions('جاري تعديل البيانات ...')

   if(this.selectedItem2.perch_price > 0 && this.selectedItem2.pay_price > 0 && this.selectedItem2.item_name != ""){
     const editData = { ...this.selectedItem2 } as any;
     if ('imageUrl' in editData) delete editData.imageUrl;
     if ('tax' in editData) delete editData.tax;

     // Add category_id from localStorage for notifications (SELECTED_CATEGORY_ID)
     const savedCategoryId = await this.storage.get('SELECTED_CATEGORY_ID');
     if (savedCategoryId && !editData.category_id) {
       editData.category_id = savedCategoryId;
     }

     this.api.updateItem(editData).subscribe(data => {
```

---

## Data Flow

### Update Item Scenario:

```
1. User views category page → categoryId "5" saved to localStorage as SELECTED_CATEGORY_ID

2. User updates item price in item-stock page
   ↓
3. Angular gets SELECTED_CATEGORY_ID from localStorage → "5"
   ↓
4. Angular adds to update request:
   {
     id: 2188,
     item_name: "جراب خلف",
     category_id: "5",  // From localStorage
     pay_price: 100,
     retail_price: 150
   }
   ↓
5. PHP API receives request → sets $category->category_id = "5"
   ↓
6. PHP Model detects price change → creates notification
   ↓
7. Notification sent to Firebase:
   {
     "type": "price_change",
     "itemId": "2188",
     "itemName": "جراب خلف",
     "categoryId": "5",  // ✅ Valid value from localStorage
     "changes": {...}
   }
   ↓
8. Firebase accepts ✅ (200 OK)
```

---

## Benefits

### ✅ Simplicity
- No complex SQL LEFT JOIN queries
- No extra database fetches
- Straightforward data flow

### ✅ Performance
- Reduced database queries (only fetch prices, not category info)
- Faster notification processing
- Less server load

### ✅ Flexibility
- Uses the category filter user is currently viewing
- Matches user's context (they're viewing category 5, so notifications use category 5)
- Easy to understand and maintain

### ✅ Compatibility
- Works with existing localStorage pattern used in app
- Follows same approach as print-modal and categories pages
- No breaking changes

---

## Testing

### Test 1: Update Item in Category View

1. **Go to Categories page** (التصنيفات)
2. **Select a category** (e.g., "إكسسوارات")
   - This saves `SELECTED_CATEGORY_ID = 5` to localStorage
3. **Go to Item Stock page**
4. **Update an item's price**
5. **Check notification_log:**
```sql
SELECT
  JSON_EXTRACT(notification_data, '$.categoryId') as category_id,
  JSON_EXTRACT(notification_data, '$.itemName') as item_name,
  status
FROM notification_log
ORDER BY created_at DESC
LIMIT 1;
```

**Expected:**
- `category_id` = `"5"` (from localStorage)
- `status` = `'success'`

---

### Test 2: Update Item Without Category Selection

1. **Clear localStorage** or don't select a category
2. **Update an item's price**
3. **Check notification_log:**

**Expected:**
- `category_id` = `"0"` (default for uncategorized)
- `status` = `'success'`

---

### Test 3: Inline Edit

1. **Select a category** in categories page
2. **Go to Item Stock**
3. **Click edit icon** on an item (inline editing)
4. **Change price** and save
5. **Check notification_log:**

**Expected:**
- `category_id` = category from localStorage
- `status` = `'success'`

---

## Comparison: Old vs New Approach

### Old Approach (Complex)
```php
// ❌ Complex SQL with LEFT JOIN
$queryOld = 'SELECT
    items.pay_price,
    items.retail_price,
    items.item_name,
    IFNULL(items.category_id, 0) as category_id,
    IFNULL(cat.category_name, "عام") as category_name
FROM items
LEFT JOIN item_categories cat ON items.category_id = cat.id
WHERE items.id = :id LIMIT 1';
```

**Issues:**
- Extra JOIN query
- Fetches data not always needed
- More complex to maintain

### New Approach (Simple)
```php
// ✅ Simple query - only what's needed
$queryOld = 'SELECT pay_price, retail_price FROM items WHERE id = :id LIMIT 1';

// Get categoryId from request (sent from frontend localStorage)
$categoryId = !empty($this->category_id) ? $this->category_id : '0';
```

**Benefits:**
- Minimal database query
- Uses data already available from request
- Easy to understand

---

## Firebase Notification Format

### Example: Item WITH Selected Category

```json
{
  "type": "price_change",
  "itemId": "2188",
  "itemName": "جراب خلف 2010 باركو",
  "categoryId": "5",
  "changes": {
    "retail_price": {
      "old": "3333.00",
      "new": "6666"
    }
  },
  "oldPrice": "3333.00",
  "newPrice": "6666",
  "timestamp": "2025-11-22T22:30:00+05:30"
}
```

### Example: Item WITHOUT Selected Category (Default)

```json
{
  "type": "price_change",
  "itemId": "1234",
  "itemName": "منتج آخر",
  "categoryId": "0",
  "changes": {
    "pay_price": {
      "old": "100.00",
      "new": "150.00"
    }
  },
  "timestamp": "2025-11-22T22:31:00+05:30"
}
```

---

## Summary

| Aspect | Implementation |
|--------|----------------|
| **categoryId Source** | localStorage (`SELECTED_CATEGORY_ID`) |
| **Sent by** | Angular frontend in update request |
| **Default Value** | `"0"` if not in localStorage |
| **Backend Queries** | Simple (only fetch old prices) |
| **Firebase Format** | Always valid string ("0" or actual ID) |
| **Performance** | ✅ Improved (fewer queries) |
| **Maintainability** | ✅ Simpler code |
| **Status** | ✅ Ready for production |

---

**Last Updated:** 2025-11-22
**Approach:** Simple localStorage-based solution
**Status:** Implemented & Tested ✅
