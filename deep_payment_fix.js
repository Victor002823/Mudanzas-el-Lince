const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
    let c = fs.readFileSync(f, 'utf8');
    
    // 1. Fix the Visa SVG: Crop the viewBox to remove empty vertical space
    // The paths are roughly between y=16 and y=32.
    // Changing viewBox from "0 0 48 48" to "0 15 48 18" will make the logo fill the height.
    c = c.replace(/viewBox="0 0 48 48" fill="none"/g, 'viewBox="0 15 48 18" fill="none"');
    
    // 2. Set all heights to a consistent 24px (since they are now cropped/balanced)
    // 24px height for a cropped logo is roughly equivalent to a 40px icon with padding.
    c = c.replace(/style="height: 32px; width: auto;"/g, 'style="height: 24px; width: auto;"');
    c = c.replace(/style="height: 42px; width: auto;"/g, 'style="height: 24px; width: auto;"');
    
    // 3. Add opacity for premium look
    c = c.replace(/hover:scale-110 transition-transform cursor-default/g, 'hover:scale-110 transition-all cursor-default opacity-50 hover:opacity-100 grayscale hover:grayscale-0');
    
    // 4. Fix Material Icons to match the new 24px height feel
    c = c.replace(/material-symbols-outlined text-\[36px\]/g, 'material-symbols-outlined text-[28px]');
    
    fs.writeFileSync(f, c, 'utf8');
    console.log(`Deeply refined payment UX in ${f}`);
});
