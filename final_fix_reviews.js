const fs = require('fs');
const path = require('path');

const REVIEWS_SECTION = `    <section class="py-xxl bg-surface-container-low px-8 overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-xl">
                <h2 class="font-h2 text-h2 text-primary mb-sm">Lo que dicen nuestros clientes</h2>
                <p class="font-body-lg text-on-surface-variant max-w-2xl mx-auto">La satisfacción de quienes confían en nosotros es nuestra mejor carta de recomendación.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-lg">
                <!-- Reseña 1 -->
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                    <div class="flex text-[#FBBC05] mb-4">
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                    </div>
                    <p class="font-body-md text-on-surface mb-6 flex-grow italic">"Excelente servicio, puntualidad y seguridad. Muy recomendado."</p>
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">M</div>
                        <div>
                            <p class="font-bold text-sm text-left">Michelle S</p>
                            <p class="text-xs text-on-surface-variant text-left">Cliente Verificado</p>
                        </div>
                    </div>
                </div>
                <!-- Reseña 2 -->
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                    <div class="flex text-[#FBBC05] mb-4">
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                    </div>
                    <p class="font-body-md text-on-surface mb-6 flex-grow italic">"La verdad es un servicio que recomiendo mucho. Cuidan mucho tus muebles... excelente trato desde el primer contacto hasta que llegan tus cosas."</p>
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">G</div>
                        <div>
                            <p class="font-bold text-sm text-left">Gretel Moreno Munive</p>
                            <p class="text-xs text-on-surface-variant text-left">Cliente Verificado</p>
                        </div>
                    </div>
                </div>
                <!-- Reseña 3 -->
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                    <div class="flex text-[#FBBC05] mb-4">
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                    </div>
                    <p class="font-body-md text-on-surface mb-6 flex-grow italic">"Excelente servicio, coordinación y atención. He requerido 2 veces sus servicios y ambas ocasiones 1000/10."</p>
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">T</div>
                        <div>
                            <p class="font-bold text-sm text-left">Tony Padilla</p>
                            <p class="text-xs text-on-surface-variant text-left">Cliente Verificado</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-xl">
                <a href="https://www.google.com.mx/maps/place/Fletes+y+Mudanzas+El+Lince/@19.422866,-99.1448586,17z/data=!4m8!3m7!1s0x85d1f99c89426f49:0x1b2c45b8543f064c!8m2!3d19.422866!4d-99.1448586!9m1!1b1" target="_blank" class="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                    <span class="material-symbols-outlined">reviews</span>
                    Ver más reseñas reales en Google &rarr;
                </a>
            </div>
        </div>
    </section>`;

const files = [
    'index.html',
    'nosotros.html',
    'servicios.html',
    'fletes.html',
    'mudanzas-locales.html',
    'mudanzas-nacionales.html',
    'mudanzas-corporativas.html',
    'embalaje.html',
    'contacto.html',
    'faq.html',
    'privacidad.html',
    'terminos.html'
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // 1. Remove all sections containing "TESTIMONIOS" label
    // We look for sections and see if they contain the specific label
    const sectionRegex = /<section[^>]*>[\s\S]*?<\/section>/gi;
    content = content.replace(sectionRegex, (match) => {
        if (match.includes('TESTIMONIOS')) {
            console.log(`Removing old TESTIMONIOS section from ${file}`);
            return '';
        }
        // Also remove any section that already looks like our "Lo que dicen nuestros clientes"
        // to avoid duplicates and ensure a fresh injection
        if (match.includes('Lo que dicen nuestros clientes')) {
             console.log(`Removing existing review section from ${file} for refresh`);
             return '';
        }
        return match;
    });

    // 2. Remove any extra instances of Michelle S (safety measure)
    if (content.includes('Michelle S')) {
        content = content.replace(/<section[^>]*>[\s\S]*?Michelle S[\s\S]*?<\/section>/gi, '');
    }

    // 3. Inject the clean REVIEWS_SECTION before <footer> or at end of <main>
    if (content.includes('<footer>')) {
        content = content.replace('<footer>', REVIEWS_SECTION + '\n\n<footer>');
    } else if (content.includes('</main>')) {
        content = content.replace('</main>', REVIEWS_SECTION + '\n</main>');
    } else {
        content += '\n' + REVIEWS_SECTION;
    }

    // 4. Update Copyright year to 2026 just in case
    content = content.replace(/© 202[0-5]/g, '© 2026');

    fs.writeFileSync(file, content);
    console.log(`Processed ${file}`);
});
