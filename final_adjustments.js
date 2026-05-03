const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
    let c = fs.readFileSync(f, 'utf8');
    
    // Fix Hero
    c = c.replace(/hero\.png/g, 'hero.webp');
    
    // Fix common broken strings
    c = c.replace(/<meta property="og:description".*?\/>/g, '<meta property="og:description" content="Expertos en soluciones de traslados y mudanzas para el hogar y negocio. Empaque profesional y garantía de seguridad."/>');
    
    // Fix title in index
    if (f === 'index.html') {
        c = c.replace(/<title>.*?<\/title>/, '<title>Fletes y Mudanzas El Lince | Mudanzas CDMX y Nacionales</title>');
    }

    fs.writeFileSync(f, c, 'utf8');
});
console.log('Final adjustments complete.');
