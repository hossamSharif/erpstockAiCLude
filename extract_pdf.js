
const fs = require('fs');
const { PDFDocument } = require('pdf-lib');

async function extractText() {
  try {
    const pdfBytes = fs.readFileSync('c:\\mnt\\c\\ClaudeWorkspace\\erpsysStockV1_AI\\عماد 5 (1).pdf');
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const pages = pdfDoc.getPages();
    console.log(`Total pages: ${pages.length}`);
    
    // pdf-lib doesn't have built-in text extraction. 
    // We can only check if we can load it. 
    // If we really need text, we might need another lib or a hack.
    // But let's see if we can at least open it.
    console.log("PDF loaded successfully.");
    
    // Since pdf-lib is limited for text extraction, we might need to rely on the user 
    // or use a different method if this confirms the file is readable.
    // However, I will try to inspect the objects if possible, but it's complex.
    
  } catch (err) {
    console.error("Error loading PDF:", err);
  }
}

extractText();
