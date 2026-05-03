const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
    let c = fs.readFileSync(f, 'utf8');
    
    // Fix Visa SVG height
    c = c.replace(/<svg style="height: [^;]+; width: auto;" viewBox="0 0 48 48"/g, '<svg style="height: 32px; width: auto;" viewBox="0 0 48 48"');
    
    // Fix Mastercard image height
    c = c.replace(/alt="Mastercard" style="height: [^;]+; width: auto;"/g, 'alt="Mastercard" style="height: 32px; width: auto;"');
    
    // Fix PayPal image height
    c = c.replace(/alt="PayPal" style="height: [^;]+; width: auto;"/g, 'alt="PayPal" style="height: 32px; width: auto;"');
    
    // Also adjust the Material Icons for Transferencia/Efectivo to match visual weight
    c = c.replace(/material-symbols-outlined text-\[32px\]/g, 'material-symbols-outlined text-[36px]');
    
    fs.writeFileSync(f, c, 'utf8');
    console.log(`Balanced payment icon sizes in ${f}`);
});
