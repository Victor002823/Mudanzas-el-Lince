const fs = require('fs');
const path = require('path');

const correctLink = "https://www.google.com.mx/maps/place/Fletes+y+Mudanzas+El+Lince/@19.422866,-99.1448586,17z/data=!4m8!3m7!1s0x85d1ffe06f5d35b7:0x68a6c876c58df7ff!8m2!3d19.422866!4d-99.1448586!9m1!1b1";

const testimonialSection = `
    <!-- SECCIÓN DE TESTIMONIOS REALES -->
    <section class="py-xxl bg-surface-container-low px-8 overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-xl">
                <h2 class="font-h2 text-h2 text-primary mb-sm">Lo que dicen nuestros clientes</h2>
                <p class="font-body-lg text-on-surface-variant max-w-2xl mx-auto">La satisfacción de quienes confían en nosotros es nuestra mejor carta de recomendación.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-lg">
                <!-- Reseña 1: Michelle S -->
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
                <!-- Reseña 2: Gretel Moreno -->
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
                <!-- Reseña 3: Tony Padilla -->
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
                <a href="${correctLink}" target="_blank" class="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                    <span class="material-symbols-outlined">reviews</span>
                    Ver más reseñas reales en Google Maps &rarr;
                </a>
            </div>
        </div>
    </section>
`;

const files = fs.readdirSync(process.cwd()).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 1. Remove old placeholder sections (usually containing "TESTIMONIOS" and "María Rodríguez")
    // Use regex to find the section containing "TESTIMONIOS"
    const oldSectionRegex = /<section[^>]*>[\s\S]*?TESTIMONIOS[\s\S]*?<\/section>/gi;
    content = content.replace(oldSectionRegex, '');

    // 2. Remove the section I just added previously (to re-insert it correctly)
    const mySectionRegex = /<!-- SECCIÓN DE TESTIMONIOS REALES -->[\s\S]*?<\/section>|<section class="py-xxl bg-surface-container-low px-8 overflow-hidden">[\s\S]*?Lo que dicen nuestros clientes[\s\S]*?<\/section>/gi;
    content = content.replace(mySectionRegex, '');

    // 3. Clean up any duplicated headers if they exist
    content = content.replace(/Lo que dicen nuestros clientes/gi, ''); // Extreme cleanup of previous attempts

    // 4. Re-insert the new section correctly BEFORE </main>
    if (content.includes('</main>')) {
        content = content.replace('</main>', testimonialSection + '\n</main>');
    } else {
        // Fallback for pages without <main>
        content = content.replace('<footer', testimonialSection + '\n<footer');
    }

    fs.writeFileSync(filePath, content);
    console.log(`Updated testimonials in ${file}`);
});
