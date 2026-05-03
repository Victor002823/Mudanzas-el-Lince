const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
    let c = fs.readFileSync(f, 'utf8');
    
    // Find the payment methods block
    const paymentRegex = /<!-- Payment Methods -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
    const match = c.match(paymentRegex);
    
    if (match) {
        const paymentBlock = match[0];
        // Remove it from current position
        c = c.replace(paymentBlock, '');
        
        // Move it before the <!-- Footer --> comment
        c = c.replace(/<!-- Footer -->/, paymentBlock + '\n<!-- Footer -->');
        
        // Remove the border-t from the footer tag to avoid double borders
        // if the payment methods already have one.
        // Actually, let's keep the payment methods border and remove the footer one if they are adjacent.
        c = c.replace(/<footer class="([^"]*) border-t border-gray-200 dark:border-gray-800([^"]*)"/, '<footer class="$1$2"');
        
        fs.writeFileSync(f, c, 'utf8');
        console.log(`Cleanly moved payment methods before footer in ${f}`);
    }
});
