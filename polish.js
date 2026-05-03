const fs = require('fs');
const path = require('path');

const files = [
    'index.html',
    'nosotros.html',
    'servicios.html',
    'contacto.html',
    'privacidad.html',
    'terminos.html'
];

files.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');

        // 1. Standardize Head
        const fontLinks = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./assets/style.css">`;

        // Clean up head first
        content = content.replace(/<link rel="preconnect".*?rel="stylesheet" href=".\/assets\/style\.css">/gs, '');
        content = content.replace(/<link href="https:\/\/fonts\.googleapis\.com.*?rel="stylesheet".*?>/gs, '');
        content = content.replace(/<style>.*?\.material-symbols-outlined.*?<\/style>/gs, '');
        
        // Inject clean font/css block after <meta name="viewport" ... />
        content = content.replace(/(<meta content="width=device-width, initial-scale=1.0" name="viewport"\/>)/, '$1' + fontLinks);

        // 2. SEO Improvements
        if (file === 'index.html') {
            content = content.replace(/<title>.*?<\/title>/, '<title>Fletes y Mudanzas El Lince | Mudanzas CDMX y Nacionales</title>');
            content = content.replace(/<h1.*?>.*?<\/h1>/s, '<h1 class="font-h1 text-h1 text-white mb-md uppercase tracking-tight">Expertos en Mudanzas y Fletes | Locales y Nacionales</h1>');
        }

        // 3. Fix encoding (just in case any survived)
        const replacements = [
            { search: /Ã¡/g, replace: 'á' },
            { search: /Ã©/g, replace: 'é' },
            { search: /Ã­/g, replace: 'í' },
            { search: /Ã³/g, replace: 'ó' },
            { search: /Ãº/g, replace: 'ú' },
            { search: /Ã±/g, replace: 'ñ' },
            { search: /Â¿/g, replace: '¿' }
        ];
        replacements.forEach(r => {
            content = content.replace(r.search, r.replace);
        });

        // 4. Double check Hero Image (LCP) - ensure no lazy loading
        if (file === 'index.html') {
            content = content.replace('<img loading="lazy" src="./assets/hero.png"', '<img src="./assets/hero.png"');
            content = content.replace('<img loading="lazy" alt="Moderno camión', '<img alt="Moderno camión');
        }

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Polished ${file}`);
    }
});
