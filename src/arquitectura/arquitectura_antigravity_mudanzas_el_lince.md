# ARQUITECTURA PARA AGENTE IA (ANTYGRAVITY)

## PROYECTO

Fletes y Mudanzas El Lince

## OBJETIVO DEL AGENTE

Este agente debe ser capaz de:

-   Refactorizar automáticamente todo el proyecto HTML/CSS/JS
-   Optimizar para SEO técnico + SEO semántico
-   Optimizar para AI Search (ChatGPT, Gemini, Claude, Perplexity)
-   Mejorar Core Web Vitals
-   Convertir el sitio en AI-ready (RAG compatible)
-   Mantener compatibilidad con hosting compartido
-   Reducir peso total del sitio
-   Estandarizar estructura en todas las páginas
-   Mejorar conversión (leads / WhatsApp / cotizaciones)

------------------------------------------------------------------------

# 1. REGLA PRINCIPAL DEL AGENTE

El agente SIEMPRE debe:

-   Mantener HTML semántico
-   Eliminar código innecesario
-   Minimizar JS y CSS
-   Evitar duplicación de scripts
-   Mantener consistencia en todas las páginas

------------------------------------------------------------------------

# 2. ESTRUCTURA DEL PROYECTO

/public_html │ ├── index.html ├── nosotros.html ├── servicios.html ├──
contacto.html ├── faq.html ├── privacidad.html ├── terminos.html │ ├──
servicios/ │ ├── mudanzas-locales.html │ ├── mudanzas-nacionales.html │
├── embalaje.html │ ├── fletes.html │ └── corporativo.html │ ├── assets/
│ ├── css/ │ │ ├── style.css │ │ └── style.min.css │ │ │ ├── js/ │ │ ├──
app.js │ │ └── app.min.js │ │ │ ├── img/ │ │ ├── hero.webp │ │ ├──
logo.webp │ │ └── ... │ ├── sitemap.xml ├── robots.txt └── .htaccess

------------------------------------------------------------------------

# 3. REGLAS DE HTML

Obligatorio:

-   Solo 1 H1 por página
-   Uso correcto de:
    -   header
    -   main
    -   section
    -   article
    -   footer

Evitar: - divs innecesarios - estructura plana sin significado

------------------------------------------------------------------------

# 4. REGLAS SEO

Cada página debe tener:

-   title optimizado
-   meta description
-   canonical
-   open graph
-   keywords naturales (no spam)

------------------------------------------------------------------------

# 5. REGLAS AI SEARCH OPTIMIZATION

El contenido debe ser:

-   claro
-   directo
-   estructurado
-   fácil de resumir

------------------------------------------------------------------------

# 6. REGLAS RAG

Cada sección debe ser autosuficiente y fragmentable.

------------------------------------------------------------------------

# 7. PERFORMANCE

-   WebP
-   lazy loading
-   JS defer
-   CSS minificado

------------------------------------------------------------------------

# 8. JAVASCRIPT

document.addEventListener("DOMContentLoaded", () =\> { const btn =
document.getElementById("mobileMenuBtn"); const menu =
document.getElementById("mobileMenu");

if (btn && menu) { btn.addEventListener("click", () =\> {
menu.classList.toggle("hidden"); }); } });

------------------------------------------------------------------------

# 9. SEO LOCAL

-   CDMX
-   Estado de México
-   México

------------------------------------------------------------------------

# 10. SCHEMA

LocalBusiness + Service + FAQ + WebSite

------------------------------------------------------------------------

# 11. CONVERSIÓN

CTA: - Cotiza ahora - WhatsApp - Agenda

------------------------------------------------------------------------

# 12. IMÁGENES

-   WebP obligatorio
-   alt descriptivo

------------------------------------------------------------------------

# 13. ACCESSIBILITY

-   aria-label
-   contraste correcto

------------------------------------------------------------------------

# 14. CORE WEB VITALS

LCP \< 2.5s CLS \< 0.1 INP \< 200ms

------------------------------------------------------------------------

# 15. CONTENIDO

-   claro
-   útil
-   humano

------------------------------------------------------------------------

# 16. FAQ

```{=html}
<h3>
```
Pregunta
```{=html}
</h3>
```
```{=html}
<p>
```
Respuesta
```{=html}
</p>
```

------------------------------------------------------------------------

# 17. ENLACES INTERNOS

Index → servicios → contacto

------------------------------------------------------------------------

# 18. PÁGINAS

-   inicio
-   servicios
-   contacto
-   faq
-   legales

------------------------------------------------------------------------

# 19. SERVICIOS

-   locales
-   nacionales
-   embalaje
-   fletes

------------------------------------------------------------------------

# 20. AI OPTIMIZATION

-   RAG ready
-   LLM readable
-   structured content

------------------------------------------------------------------------

# 21. REGLA FINAL

Si mejora SEO, velocidad o conversión: APLICAR SIN PREGUNTAR
