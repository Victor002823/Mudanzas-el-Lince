const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const replacements = [
    { search: /\u00c3\u00a1/g, replace: 'á' },
    { search: /\u00c3\u00a9/g, replace: 'é' },
    { search: /\u00c3\u00ad/g, replace: 'í' },
    { search: /\u00c3\u00b3/g, replace: 'ó' },
    { search: /\u00c3\u00ba/g, replace: 'ú' },
    { search: /\u00c3\u00b1/g, replace: 'ñ' },
    { search: /\u00c3\u0081/g, replace: 'Á' },
    { search: /\u00c3\u0089/g, replace: 'É' },
    { search: /\u00c3\u008d/g, replace: 'Í' },
    { search: /\u00c3\u0093/g, replace: 'Ó' },
    { search: /\u00c3\u009a/g, replace: 'Ú' },
    { search: /\u00c3\u0091/g, replace: 'Ñ' },
    { search: /\u00c2\u00bf/g, replace: '¿' }
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    replacements.forEach(r => {
        content = content.replace(r.search, r.replace);
    });
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Fixed encoding for ${file}`);
});
