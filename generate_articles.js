const fs = require('fs');
const path = require('path');

const articles = [
    {
        slug: 'cuanto-cuesta-una-mudanza-en-cdmx',
        title: '¿Cuánto cuesta una mudanza en CDMX? [Guía de Precios 2024]',
        image: 'blog_mudanzas_cdmx.png',
        category: 'Precios',
        readTime: '6 min',
        description: 'Descubre cuánto cuesta una mudanza en CDMX. Analizamos precios por zonas como Polanco, Roma y Santa Fe.',
        content: `
            <p>Planear una mudanza en la <strong>Ciudad de México (CDMX)</strong> requiere un balance entre presupuesto y logística. En 2024, los costos han evolucionado debido al incremento en combustibles y la demanda de servicios especializados.</p>
            <h2>Factores que influyen en el precio final</h2>
            <p>No existe una tarifa única, ya que cada traslado es un proyecto logístico independiente. Sin embargo, los siguientes factores son determinantes:</p>
            <ul>
                <li><strong>Distancia y Tráfico:</strong> Entre colonias como Roma y Condesa el costo es menor que ir de Tlalpan a Polanco, no solo por kilómetros, sino por tiempo de maniobra.</li>
                <li><strong>Complejidad Arquitectónica:</strong> El número de pisos, la disponibilidad de elevadores de carga y la necesidad de "volado" de muebles pesados.</li>
                <li><strong>Nivel de Empaque:</strong> El uso de materiales profesionales (playo, cajas de doble corrugado, burbuja) garantiza que tus pertenencias lleguen intactas.</li>
            </ul>
            <p>Para un departamento estándar de 2 recámaras en una zona céntrica, los presupuestos suelen oscilar entre <strong>$3,500 y $6,500 MXN</strong>, dependiendo de la profundidad del servicio.</p>
        `
    },
    {
        slug: 'como-empacar-una-mudanza-correctamente',
        title: 'Cómo empacar una mudanza correctamente: Guía de Expertos',
        image: 'blog_empaque_profesional.png',
        category: 'Empaque',
        readTime: '8 min',
        description: 'Aprende a proteger tus pertenencias más valiosas con técnicas de empaque profesional que usan los expertos.',
        content: `
            <p>El éxito de una mudanza reside en un empaque estratégico. Muchas personas cometen el error de usar cajas débiles o no proteger las esquinas de los muebles.</p>
            <h2>Materiales de Empaque Imprescindibles</h2>
            <ul>
                <li><strong>Cajas de cartón corrugado:</strong> Evita las cajas de supermercado; son delgadas y pueden romperse bajo presión.</li>
                <li><strong>Película Estirable (Playo):</strong> Fundamental para evitar ralladuras en superficies de madera y mantener cajones cerrados.</li>
                <li><strong>Papel Kraft:</strong> Mejor que el periódico, ya que no mancha tu vajilla con tinta.</li>
            </ul>
            <p><strong>Pro Tip:</strong> Empaca una habitación a la vez y rotula cada caja en al menos dos caras laterales para identificar su contenido sin tener que abrirla.</p>
        `
    },
    {
        slug: 'mudanza-local-vs-nacional',
        title: 'Mudanza Local vs Nacional: Logística, Tiempos y Seguros',
        image: 'blog_mudanza_nacional.png',
        category: 'Logística',
        readTime: '5 min',
        description: 'Conoce las diferencias operativas entre mudarte dentro de la CDMX o realizar un traslado a otro estado.',
        content: `
            <p>Las mudanzas locales y nacionales requieren enfoques operativos totalmente distintos. Mientras que en una local el reto es el tráfico de la ciudad, en una nacional lo es la seguridad en carretera.</p>
            <h2>Mudanza Nacional en México</h2>
            <p>Para traslados de larga distancia (ej. CDMX a Monterrey o Cancún), es vital contar con unidades en perfecto estado mecánico y operadores con experiencia en rutas federales. Además, el seguro de carga se vuelve una inversión obligatoria para tu tranquilidad.</p>
        `
    },
    {
        slug: 'como-elegir-una-empresa-de-mudanzas',
        title: 'Cómo elegir una empresa de mudanzas confiable en México',
        image: 'blog_empresa_mudanzas_team.png',
        category: 'Consejos',
        readTime: '7 min',
        description: 'No pongas tus bienes en manos inexpertas. Sigue estos pasos para elegir la mejor opción.',
        content: `
            <p>En el mercado de mudanzas abundan los servicios informales. Elegir una empresa establecida como <strong>El Lince</strong> marca la diferencia entre un día estresante y uno tranquilo.</p>
            <h2>Criterios de Selección</h2>
            <ul>
                <li><strong>Presencia Digital y Reseñas:</strong> Revisa el perfil de Google Business. Las opiniones de otros clientes son el mejor indicador.</li>
                <li><strong>Cotizaciones Transparentes:</strong> Desconfía de precios excesivamente bajos que luego añaden "cargos ocultos" el día de la mudanza.</li>
                <li><strong>Infraestructura:</strong> Asegúrate de que cuenten con camiones propios y personal debidamente uniformado.</li>
            </ul>
        `
    },
    {
        slug: 'checklist-de-mudanza-completa',
        title: 'Checklist de Mudanza Completa: El mapa para tu nuevo hogar',
        image: 'blog_checklist_mudanza.png',
        category: 'Planificación',
        readTime: '10 min',
        description: 'La guía definitiva con tiempos y tareas para que no se te escape ningún detalle en tu mudanza.',
        content: `
            <p>La improvisación es el enemigo número uno de las mudanzas. Una buena planificación debe comenzar al menos con un mes de antelación.</p>
            <h2>Cuenta Regresiva</h2>
            <p><strong>1 mes antes:</strong> Depura. Es el momento perfecto para deshacerte de lo que no has usado en el último año.</p>
            <p><strong>15 días antes:</strong> Comienza con el empaque de artículos no esenciales (libros, ropa de otra temporada, adornos).</p>
            <p><strong>El día previo:</strong> Descongela el refrigerador y prepara una caja de "supervivencia" con lo necesario para la primera noche.</p>
        `
    },
    {
        slug: 'consejos-para-mudarse-en-temporada-de-lluvia',
        title: 'Mudanza en Temporada de Lluvia: Cómo sobrevivir en CDMX',
        image: 'blog_mudanzas_cdmx.png',
        category: 'Consejos',
        readTime: '6 min',
        description: 'Estrategias para que la lluvia no arruine tus muebles ni tu ánimo durante el traslado.',
        content: `
            <p>En la Ciudad de México, la lluvia puede convertir una mudanza sencilla en un caos si no se está preparado.</p>
            <h2>Plan de Acción Ante Lluvia</h2>
            <p>Asegúrate de que todos los colchones y electrónicos estén envueltos en <strong>doble capa de plástico</strong>. Solicita camiones cerrados y verifica que las maniobras se realicen cerca de techos o entradas para minimizar la exposición al agua.</p>
        `
    },
    {
        slug: 'errores-comunes-en-una-mudanza',
        title: 'Los 10 Errores más costosos en una mudanza y cómo evitarlos',
        image: 'blog_empaque_profesional.png',
        category: 'Errores',
        readTime: '8 min',
        description: 'Aprende de los fallos de otros y asegura que tu mudanza sea un éxito rotundo.',
        content: `
            <p>Pequeños descuidos pueden costar caro. Aquí te presentamos lo que NO debes hacer:</p>
            <ol>
                <li>No medir las puertas de la nueva casa antes de llevar los muebles grandes.</li>
                <li>Olvidar cambiar la dirección en servicios bancarios y gubernamentales.</li>
                <li>No reservar el elevador o el lugar de estacionamiento con la administración del edificio.</li>
            </ol>
            <p>Anticiparse a estos detalles te ahorrará horas de frustración y cargos extra.</p>
        `
    },
    {
        slug: 'como-ahorrar-dinero-en-una-mudanza',
        title: 'Mudanza Inteligente: Cómo ahorrar dinero sin riesgos',
        image: 'blog_mudanza_nacional.png',
        category: 'Ahorro',
        readTime: '7 min',
        description: 'Trucos y estrategias de bajo costo para reducir el presupuesto de tu próximo traslado.',
        content: `
            <p>¿Es posible mudarse barato y bien? Sí, si sabes cómo optimizar tus recursos.</p>
            <p><strong>Flexibilidad de fecha:</strong> Mudarase un martes o miércoles suele ser más económico que un sábado. Además, realizar tu propio empaque de cajas pequeñas puede reducir significativamente el costo de mano de obra.</p>
        `
    },
    {
        slug: 'que-incluye-un-servicio-profesional',
        title: 'Servicio Profesional vs Flete Básico: ¿Qué estás pagando?',
        image: 'blog_empresa_mudanzas_team.png',
        category: 'Servicios',
        readTime: '6 min',
        description: 'Desmitificamos el valor de un servicio de mudanza profesional y por qué vale la pena.',
        content: `
            <p>Contratar a alguien "con un camión" no es lo mismo que contratar a una empresa de mudanzas. El valor real está en la capacitación del personal para manejar piezas de arte, pianos o tecnología delicada sin riesgo alguno.</p>
            <p>Un servicio profesional en <strong>El Lince</strong> incluye inventariado, protección especializada y garantía de cumplimiento en tiempos.</p>
        `
    },
    {
        slug: 'mejores-zonas-para-mudarse-en-cdmx',
        title: 'Vivir en CDMX: Las Mejores Zonas para Mudarse este año',
        image: 'blog_zonas_cdmx.png',
        category: 'CDMX',
        readTime: '9 min',
        description: 'Un análisis de las colonias con mayor crecimiento y calidad de vida en la capital mexicana.',
        content: `
            <p>La dinámica urbana de la CDMX cambia constantemente. Este año, colonias como la <strong>Narvarte</strong> y <strong>San Rafael</strong> han ganado terreno frente a clásicas como la Condesa por su balance entre costo y servicios.</p>
            <p><strong>Santa Fe:</strong> Ideal para quienes trabajan en el sector corporativo y buscan modernidad. <strong>Del Valle:</strong> La opción favorita para familias por su seguridad y parques.</p>
        `
    }
];

const template = (article, related) => `<!DOCTYPE html>
<html class="light" lang="es">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"></noscript>
    <link rel="stylesheet" href="/assets/style.min.css">
    <title>${article.title}</title>
    <meta name="description" content="${article.description}"/>
    <link rel="canonical" href="https://mudanzasellince.com/blog/${article.slug}">
</head>
<body class="bg-surface font-body-md text-on-surface antialiased">
<div id="progress-bar"></div>
<header class="bg-white border-b border-gray-100 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto flex justify-between items-center py-4 px-8">
        <a href="/" class="flex items-center">
            <img src="/assets/logo.webp" alt="Logo El Lince" class="h-12 w-auto" />
        </a>
        <nav class="hidden md:flex gap-8 items-center">
            <a href="/" class="font-medium hover:text-primary transition-colors">Inicio</a>
            <a href="/servicios" class="font-medium hover:text-primary transition-colors">Servicios</a>
            <a href="/blog" class="font-medium text-primary">Blog</a>
            <a href="/contacto" class="font-medium hover:text-primary transition-colors">Contacto</a>
        </nav>
    </div>
</header>

<main class="py-12 px-8">
    <div class="max-w-4xl mx-auto">
        <nav class="breadcrumb">
            <a href="/">Inicio</a>
            <span class="material-symbols-outlined text-sm">chevron_right</span>
            <a href="/blog">Blog</a>
            <span class="material-symbols-outlined text-sm">chevron_right</span>
            <span class="text-gray-400">${article.category}</span>
        </nav>

        <header class="mb-12">
            <div class="flex items-center gap-4 mb-6">
                <span class="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">${article.category}</span>
                <span class="text-gray-500 text-sm flex items-center gap-1">
                    <span class="material-symbols-outlined text-sm">schedule</span> ${article.readTime} de lectura
                </span>
            </div>
            <h1 class="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">${article.title}</h1>
            <img src="/assets/${article.image}" alt="${article.title}" class="w-full h-[400px] object-cover rounded-3xl shadow-2xl mb-12" />
        </header>

        <div class="prose-content ai-chunk">
            ${article.content}
        </div>

        <div class="mt-16 p-8 bg-primary/5 rounded-3xl border border-primary/10 flex flex-col md:flex-row items-center gap-8">
            <div class="flex-grow">
                <h2 class="text-2xl font-bold mb-2">¿Te fue útil esta información?</h2>
                <p class="text-gray-600 italic">"En Mudanzas El Lince, nuestra prioridad es que tu transición a un nuevo hogar sea impecable."</p>
            </div>
            <a href="/contacto" class="bg-primary text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all whitespace-nowrap">Solicitar Cotización Gratis</a>
        </div>

        <section class="mt-20">
            <h3 class="text-2xl font-bold mb-8">Artículos Relacionados</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                ${related.map(r => `
                <a href="/blog/${r.slug}" class="group block bg-white p-6 rounded-2xl border border-gray-100 hover:border-primary transition-all shadow-sm hover:shadow-md">
                    <div class="text-xs text-primary font-bold mb-2 uppercase">${r.category}</div>
                    <h4 class="font-bold text-lg mb-2 group-hover:text-primary transition-colors">${r.title}</h4>
                    <span class="text-sm text-gray-500 flex items-center gap-1">Leer más <span class="material-symbols-outlined text-sm">arrow_forward</span></span>
                </a>
                `).join('')}
            </div>
        </section>
    </div>
</main>

<footer class="bg-gray-900 text-white py-16 px-8 mt-12">
    <div class="max-w-7xl mx-auto text-center text-gray-400">
        <p>&copy; 2024 Fletes y Mudanzas El Lince. Profesionales en traslados.</p>
    </div>
</footer>

<script>
    // Reading progress bar
    window.onscroll = function() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        document.getElementById("progress-bar").style.width = scrolled + "%";
    };
</script>
</body>
</html>`;

articles.forEach((article, index) => {
    // Get 2 related articles (different from current)
    const related = articles.filter((_, i) => i !== index).slice(0, 2);
    fs.writeFileSync(path.join(__dirname, 'blog', article.slug + '.html'), template(article, related), 'utf8');
});

// Update blog/index.html with UX classes
let indexArticles = '';
articles.forEach(article => {
    indexArticles += `
    <article class="blog-card bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full">
        <div class="overflow-hidden h-56">
            <img src="/assets/${article.image}" alt="${article.title}" class="w-full h-full object-cover" />
        </div>
        <div class="p-8 flex flex-col flex-grow">
            <div class="flex justify-between items-center mb-4">
                <span class="bg-primary/5 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">${article.category}</span>
                <span class="text-gray-400 text-xs flex items-center gap-1">
                    <span class="material-symbols-outlined text-xs">schedule</span> ${article.readTime}
                </span>
            </div>
            <h2 class="text-xl font-bold mb-4 leading-snug">
                <a href="/blog/${article.slug}" class="hover:text-primary transition-colors">${article.title}</a>
            </h2>
            <p class="text-gray-600 text-sm mb-6 line-clamp-3">${article.description}</p>
            <div class="mt-auto">
                <a href="/blog/${article.slug}" class="text-primary font-bold text-sm flex items-center gap-2 group">
                    Seguir leyendo <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
            </div>
        </div>
    </article>`;
});

let blogIndexContent = fs.readFileSync(path.join(__dirname, 'blog', 'index.html'), 'utf8');

// Replace grid with new cards
const gridSearch = /<div class="grid grid-cols-1 md:grid-cols-3 gap-[^"]+">([\s\S]*?)<\/div>/;
blogIndexContent = blogIndexContent.replace(gridSearch, `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">\n${indexArticles}\n        </div>`);

// Add a search/intro section to blog index
const headerSearch = /<header class="mb-16">([\s\S]*?)<\/header>/;
const newBlogHeader = `
        <header class="mb-16 text-center">
            <h1 class="text-5xl font-extrabold mb-6">Blog El Lince</h1>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-10">Guías profesionales, consejos de empaque y todo lo que necesitas para una mudanza exitosa en México.</p>
            <div class="flex max-w-md mx-auto relative">
                <input type="text" placeholder="Buscar guías o consejos..." class="w-full px-6 py-4 rounded-full border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none pr-12 shadow-sm">
                <span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
            </div>
        </header>`;
blogIndexContent = blogIndexContent.replace(headerSearch, newBlogHeader);

fs.writeFileSync(path.join(__dirname, 'blog', 'index.html'), blogIndexContent, 'utf8');
console.log('Blog UX Improvements Applied');
