// ====================================================================================
// FUZZY MATCH CONSOLE SCRIPT - Run this in the browser console on the sales page
// ====================================================================================

(async function() {
  console.log('🔍 Starting Fuzzy Match Process...');

  // Arabic normalization
  function normalizeArabic(str) {
    return str
      .replace(/ی/g, 'ي')
      .replace(/ک/g, 'ك')
      .replace(/ئ/g, 'ي')
      .replace(/ة/g, 'ه')
      .replace(/أ|إ|آ/g, 'ا')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();
  }

  // Levenshtein distance
  function levenshteinDistance(str1, str2) {
    const matrix = [];
    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }
    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    return matrix[str2.length][str1.length];
  }

  // Similarity score
  function similarityScore(str1, str2) {
    const normalized1 = normalizeArabic(str1);
    const normalized2 = normalizeArabic(str2);
    const maxLen = Math.max(normalized1.length, normalized2.length);
    if (maxLen === 0) return 100;
    const distance = levenshteinDistance(normalized1, normalized2);
    return ((maxLen - distance) / maxLen) * 100;
  }

  // Get Angular component
  const element = document.querySelector('app-sales');
  if (!element || !element.__ngContext__) {
    console.error('❌ Sales component not found. Make sure you are on the sales page.');
    return;
  }

  const ng = element.__ngContext__;
  let component = null;
  for (let i = 0; i < ng.length; i++) {
    if (ng[i] && typeof ng[i] === 'object' && ng[i].payInvo !== undefined) {
      component = ng[i];
      break;
    }
  }

  if (!component) {
    console.error('❌ Component instance not found.');
    return;
  }

  console.log('✅ Component found');
  console.log('📦 Inventory items:', component.items ? component.items.length : 0);

  const inventoryItems = component.items || [];
  const payRef = 'sh104125013831';

  // Try to get unmatched items from the API
  console.log('🔄 Fetching unmatched items from database...');

  try {
    const api = component.api;
    const result = await api.getPayInvoDetailinit(payRef).toPromise();

    if (result.message === 'No record Found') {
      console.warn('⚠️ No records found in payinit_detail table');
      console.log('ℹ️ Checking current loaded items for items with perch_price = 0...');

      // Check loaded items instead
      const itemsWithZeroPrice = component.itemList.filter(item => parseFloat(item.perch_price) === 0);

      if (itemsWithZeroPrice.length === 0) {
        console.log('✅ All items already have perch_price set!');
        return;
      }

      console.log(`📋 Found ${itemsWithZeroPrice.length} items with perch_price = 0`);

      // Perform fuzzy matching for these items
      const matchResults = [];

      itemsWithZeroPrice.forEach(item => {
        if (item.item_id && item.item_id != 0) {
          // Item has item_id, just need to update perch_price from inventory
          const invItem = inventoryItems.find(inv => inv.id == item.item_id);
          if (invItem) {
            matchResults.push({
              type: 'exact_match',
              id: item.id,
              item_name: item.item_name,
              item_id: item.item_id,
              old_perch_price: item.perch_price,
              new_perch_price: invItem.perch_price,
              tax: invItem.tax || 0,
              imageUrl: invItem.imageUrl || '',
              similarity: 100
            });
          }
        } else {
          // Item needs fuzzy matching
          let bestMatch = null;
          let bestScore = 0;

          inventoryItems.forEach(invItem => {
            const score = similarityScore(item.item_name, invItem.item_name);
            if (score > bestScore && score >= 85) {
              bestScore = score;
              bestMatch = invItem;
            }
          });

          if (bestMatch) {
            matchResults.push({
              type: 'fuzzy_match',
              id: item.id,
              item_name: item.item_name,
              matched_name: bestMatch.item_name,
              item_id: bestMatch.id,
              old_perch_price: item.perch_price,
              new_perch_price: bestMatch.perch_price,
              tax: bestMatch.tax || 0,
              imageUrl: bestMatch.imageUrl || '',
              similarity: Math.round(bestScore)
            });
          }
        }
      });

      console.log('\n=== MATCHING RESULTS ===');
      console.log(`Total items with perch_price = 0: ${itemsWithZeroPrice.length}`);
      console.log(`Matches found: ${matchResults.length}`);
      console.log(`No matches: ${itemsWithZeroPrice.length - matchResults.length}`);

      if (matchResults.length > 0) {
        console.log('\n📊 Detailed Results:');
        console.table(matchResults.map((m, idx) => ({
          '#': idx + 1,
          'Type': m.type,
          'Original Name': m.item_name,
          'Matched Name': m.matched_name || m.item_name,
          'Similarity': m.similarity + '%',
          'Item ID': m.item_id,
          'New Perch Price': m.new_perch_price
        })));

        // Store results for applying
        window.fuzzyMatchResults = matchResults;

        console.log('\n✅ Results saved to window.fuzzyMatchResults');
        console.log('\n📝 To apply these matches, run: applyFuzzyMatches()');

        // Create apply function
        window.applyFuzzyMatches = async function() {
          console.log('🔄 Applying matches...');

          let updated = 0;

          matchResults.forEach(match => {
            const item = component.itemList.find(i => i.id == match.id);
            if (item) {
              item.item_id = match.item_id;
              item.perch_price = match.new_perch_price;
              item.tax = match.tax;
              item.imageUrl = match.imageUrl;
              updated++;
            }
          });

          if (updated > 0) {
            // Recalculate totals
            component.getTotal();
            component.cdr.detectChanges();

            console.log(`✅ Updated ${updated} items successfully!`);
            console.log('💾 Now save the invoice to persist changes to database.');
          } else {
            console.warn('⚠️ No items were updated');
          }
        };

      } else {
        console.warn('⚠️ No matches found above 85% threshold');
      }
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error);
  }

})();
