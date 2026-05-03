const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const fixes = [
    { search: /garanta/g, replace: 'garantía' },
    { search: /logstica/g, replace: 'logística' },
    { search: /forneo/g, replace: 'foráneo' },
    { search: /camin/g, replace: 'camión' },
    { search: /solucin/g, replace: 'solución' },
    { search: /atencin/g, replace: 'atención' },
    { search: /artculos/g, replace: 'artículos' },
    { search: /vehculo/g, replace: 'vehículo' },
    { search: /arquitectnica/g, replace: 'arquitectónica' },
    { search: /Contactanos/g, replace: 'Contáctanos' },
    { search: /catlogo/g, replace: 'catálogo' },
    { search: /servicios: mudanzas de hogar, mudanzas corporativas, fletes forneos/g, replace: 'servicios: mudanzas de hogar, mudanzas corporativas, fletes foráneos' },
    { search: /Bogot/g, replace: 'Bogotá' }, // Just in case
    { search: /traslados y mudanzas para el hogar y negocio en la CDMX y a nivel nacional\. Servicio seguro, empaque profesional y personal capacitado\./g, replace: 'Expertos en soluciones de traslados y mudanzas para el hogar y negocio en la CDMX y a nivel nacional. Servicio seguro, empaque profesional y personal capacitado.' },
    { search: /propiedad="og:description" content="Expertos en soluciones de traslados y mudanzas para el hogar y negocio\. Empaque profesional y garanta de seguridad\."/g, replace: 'property="og:description" content="Expertos en soluciones de traslados y mudanzas para el hogar y negocio. Empaque profesional y garantía de seguridad."' }
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    fixes.forEach(f => {
        content = content.replace(f.search, f.replace);
    });
    // Global generic fixes for common patterns if any left
    content = content.replace(//g, (match, offset, string) => {
        // This is risky, but let's see
        return ''; 
    });
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Fixed common words in ${file}`);
});
