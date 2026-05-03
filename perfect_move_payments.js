const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
    let c = fs.readFileSync(f, 'utf8');
    
    // 1. Identify the payment block precisely
    const paymentRegex = /<!-- Payment Methods -->[\s\S]*?(<div class="max-w-7xl mx-auto px-8 pb-16">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>)/;
    const match = c.match(paymentRegex);
    
    if (match) {
        let paymentBlock = match[0];
        // Clean up the block (ensure no trailing junk)
        paymentBlock = paymentBlock.trim();
        
        // 2. Remove the block from its current location
        c = c.replace(paymentRegex, '');
        
        // 3. Find the footer section and insert before it
        // We look for the comment or the tag
        if (c.includes('<!-- Footer -->')) {
            c = c.replace('<!-- Footer -->', paymentBlock + '\n\n<!-- Footer -->');
        } else {
            c = c.replace('<footer', paymentBlock + '\n\n<footer');
        }
        
        // 4. Clean up borders and extra whitespace
        c = c.replace(/\n\s*\n\s*\n/g, '\n\n'); // Normalize spacing
        
        fs.writeFileSync(f, c, 'utf8');
        console.log(`Perfectly moved payment methods before footer in ${f}`);
    }
});
