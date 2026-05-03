const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const replacements = [
    { search: /hero\.png/g, replace: 'hero.webp' },
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
    let content = fs.readFileSync(file, 'utf8');
    
    // Fix encoding and hero path
    replacements.forEach(r => {
        content = content.replace(r.search, r.replace);
    });

    // Performance: Remove lazy loading from logos (they are above the fold)
    content = content.replace(/<img loading="lazy" src=".\/assets\/logo\.png"/g, '<img src="./assets/logo.png"');

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
});
