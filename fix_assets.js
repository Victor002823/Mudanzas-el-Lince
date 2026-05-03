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

const replacements = [
    { search: /Ã¡/g, replace: 'á' },
    { search: /Ã©/g, replace: 'é' },
    { search: /Ã­/g, replace: 'í' },
    { search: /Ã³/g, replace: 'ó' },
    { search: /Ãº/g, replace: 'ú' },
    { search: /Ã±/g, replace: 'ñ' },
    { search: /Ã /g, replace: 'Á' },
    { search: /Ã‰/g, replace: 'É' },
    { search: /Ã /g, replace: 'Í' },
    { search: /Ã“/g, replace: 'Ó' },
    { search: /Ãš/g, replace: 'Ú' },
    { search: /Ã‘/g, replace: 'Ñ' },
    { search: /Â¿/g, replace: '¿' }
];

files.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');

        // Fix encoding
        replacements.forEach(r => {
            content = content.replace(r.search, r.replace);
        });

        // Optimization: Move preconnects to top of head and clean up fonts
        const fontLinks = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="./assets/style.css">`;

        content = content.replace(/<link href="https:\/\/fonts\.googleapis\.com.*?rel="stylesheet"\/>/gs, '');
        content = content.replace(/<link rel="preconnect".*?rel="stylesheet" href=".\/assets\/style\.css">/gs, '');
        content = content.replace(/<head>/, '<head>' + fontLinks);

        // Fix LCP: Remove loading="lazy" from the first image in the main/section or the hero image
        // In this project, the hero images are usually the first <img> in <main>
        if (file === 'index.html') {
            // Home Hero
            content = content.replace('<img loading="lazy" alt="Moderno camión de mudanzas', '<img alt="Moderno camión de mudanzas');
            
            // Text improvements
            content = content.replace('Somos expertos en soluciones de traslados de todo tipo de hogar y negocio', 'Expertos en Mudanzas y Fletes | Locales y Nacionales');
            content = content.replace('Personal capacitado y vehículos adecuados para proteger tus pertenencias, eres hogar o empresa tenemos la solucion para ti.', 'Contamos con personal altamente capacitado y unidades modernas para garantizar la seguridad de tus pertenencias. Ya seas un particular o una empresa, tenemos la solución logística ideal para ti.');
        } else if (file === 'servicios.html') {
             content = content.replace('<img loading="lazy" alt="Almacén logístico moderno', '<img alt="Almacén logístico moderno');
        } else if (file === 'nosotros.html') {
             content = content.replace('<img loading="lazy" alt="Nuestro Equipo"', '<img alt="Nuestro Equipo"');
        }

        // Final cleanup of redundant font links that might have survived
        content = content.replace(/<link href="https:\/\/fonts\.googleapis\.com.*?rel="stylesheet"\/>/gs, '');

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});
