const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
    let c = fs.readFileSync(f, 'utf8');
    
    // Find the payment methods block
    const paymentRegex = /<!-- Payment Methods -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>(?=\s*<\/footer>)/;
    const match = c.match(paymentRegex);
    
    if (match) {
        const paymentBlock = match[0];
        // Remove it from inside the footer
        c = c.replace(paymentBlock, '');
        
        // Move it before the footer tag
        // Note: We need to make sure we don't leave empty lines and maintain indentation
        c = c.replace(/<footer/, paymentBlock + '\n<footer');
        
        fs.writeFileSync(f, c, 'utf8');
        console.log(`Moved payment methods before footer in ${f}`);
    }
});
