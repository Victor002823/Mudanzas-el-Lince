const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
    let c = fs.readFileSync(f, 'utf8');
    
    // 1. Extract the payment methods block fully
    const paymentRegex = /<!-- Payment Methods -->[\s\S]*?<div class="max-w-7xl mx-auto px-8 pb-16">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
    const match = c.match(paymentRegex);
    
    if (match) {
        let paymentBlock = match[0].trim();
        
        // 2. Remove the block and the redundant comment
        c = c.replace(paymentRegex, '');
        c = c.replace(/<!-- Footer -->/g, ''); // Remove all instances first
        
        // 3. Re-insert at the very end of <main> or right before <footer
        // Find the best insertion point
        const footerTag = '<footer';
        if (c.includes(footerTag)) {
            c = c.replace(footerTag, paymentBlock + '\n\n<!-- Footer -->\n<footer');
        }
        
        // 4. Cleanup redundant borders in footer tag again
        c = c.replace(/<footer class="([^"]*) border-t border-gray-200 dark:border-gray-800([^"]*)"/, '<footer class="$1$2"');
        
        // 5. Cleanup whitespace
        c = c.replace(/\n\s*\n\s*\n/g, '\n\n');
        
        fs.writeFileSync(f, c, 'utf8');
        console.log(`Final structural cleanup for ${f}`);
    }
});
