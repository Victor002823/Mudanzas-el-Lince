const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '..', 'assets');
const images = [
    { in: 'logo.png', out: 'logo.webp' },
    { in: 'fleet.png', out: 'fleet.webp' },
    { in: 'loading.png', out: 'loading.webp' }
];

async function convert() {
    for (const img of images) {
        const inputPath = path.join(assetsDir, img.in);
        const outputPath = path.join(assetsDir, img.out);
        
        if (fs.existsSync(inputPath)) {
            console.log(`Converting ${img.in} to ${img.out}...`);
            await sharp(inputPath)
                .webp({ quality: 80 })
                .toFile(outputPath);
            console.log(`Done: ${img.out}`);
        } else {
            console.log(`File not found: ${img.in}`);
        }
    }
}

convert().catch(console.error);
