# ANTYGRAVITY SEO & AI EXECUTION RULES
Version: 1.0  
Proyecto: El Lince Mudanzas  
Objetivo: Convertir el sitio en una propiedad SEO local + AI Ready de alto rendimiento.

---

# 1. REGLAS GLOBALES

## 1.1 Objetivo principal
Toda tarea debe optimizar simultáneamente:

- SEO técnico
- SEO semántico
- Conversión
- Performance
- AI Retrieval (ChatGPT / Gemini / Perplexity / Bing)

---

## 1.2 Prioridad de ejecución

Siempre ejecutar en este orden:

1. Performance
2. SEO técnico
3. Arquitectura SEO
4. Contenido semántico
5. Structured Data
6. Conversión
7. AI Optimization

---

# 2. REGLAS SEO TÉCNICO

## 2.1 Sitemap

Siempre generar:

/public/sitemap.xml

Debe incluir:

- Home
- Todas las páginas de servicios
- Blog
- FAQs

Formato obligatorio:

- URL absoluta
- lastmod
- priority
- changefreq

---

## 2.2 Robots.txt

Siempre crear:

/public/robots.txt

Formato base:

User-agent: *
Allow: /

Sitemap: https://dominio.com/sitemap.xml

Bloquear:

- admin
- api privadas
- staging

---

## 2.3 Canonicals

Toda página debe incluir:

<link rel="canonical" href="URL_REAL" />

Nunca dejar canonicals dinámicos incorrectos.

---

## 2.4 Meta tags

Cada página debe tener:

- title único
- meta description única
- Open Graph
- Twitter Cards

Longitudes:

- Title: 50–60 caracteres
- Description: 140–160

---

# 3. REGLAS DE PERFORMANCE

## 3.1 Imágenes

OBLIGATORIO:

- WebP o AVIF
- Lazy loading
- width/height definidos
- compresión automática

Prohibido:

- PNG pesados
- imágenes > 300kb
- imágenes sin dimensiones

---

## 3.2 Fuentes

Preferencia:

1. self-hosted fonts
2. system fonts

Evitar:

- múltiples Google Fonts
- weights innecesarios

---

## 3.3 JavaScript

Obligatorio:

- code splitting
- dynamic imports
- eliminar JS muerto
- minificación total

Objetivo:

- JS inicial < 150kb

---

## 3.4 Core Web Vitals

Objetivos mínimos:

- LCP < 2.5s
- CLS < 0.1
- INP < 200ms

---

# 4. REGLAS DE ARQUITECTURA SEO

## 4.1 Estructura silo

Crear páginas independientes:

/mudanzas-cdmx
/mudanzas-locales
/mudanzas-nacionales
/fletes
/embalaje
/mudanzas-oficinas
/contacto

---

## 4.2 Internal linking

Toda página debe enlazar:

- Home
- Servicios relacionados
- FAQs
- Contacto

Mínimo:

3 enlaces internos contextuales por página.

---

## 4.3 URLs

Reglas:

- lowercase
- sin acentos
- separadas con guiones
- cortas y descriptivas

Correcto:

/mudanzas-locales-cdmx

Incorrecto:

/ServicioMudanza123

---

# 5. REGLAS DE SEO SEMÁNTICO

## 5.1 H1

Debe contener:

- intención principal
- ubicación
- servicio

Ejemplo:

# Mudanzas en CDMX Seguras y Económicas

---

## 5.2 Jerarquía headings

Usar:

- 1 H1
- múltiples H2
- H3 para detalles

Nunca saltar:

H1 → H4

---

## 5.3 Keyword mapping

Cada página:

- keyword principal
- 3–5 secundarias
- intención específica

No canibalizar keywords.

---

## 5.4 Long-form content

Toda página de servicio debe incluir:

- explicación extensa
- beneficios
- proceso
- precios
- FAQs
- CTA

Mínimo recomendado:

1200+ palabras.

---

# 6. REGLAS AI READY / RAG

## 6.1 Contenido fragmentado

Crear bloques independientes y autosuficientes.

Cada sección debe responder:

- qué
- cómo
- cuánto
- dónde
- por qué

---

## 6.2 FAQs estructuradas

Toda página debe incluir FAQs reales.

Formato:

Pregunta clara  
Respuesta corta y directa

Ideal:

40–80 palabras.

---

## 6.3 Snippet optimization

Agregar respuestas tipo featured snippet.

Formato ideal:

- listas
- pasos
- tablas
- definiciones cortas

---

## 6.4 Headings descriptivos

Evitar:

“Nuestros servicios”

Usar:

“Cómo funcionan nuestras mudanzas en CDMX”

---

# 7. REGLAS DE SCHEMA JSON-LD

## 7.1 Obligatorio en Home

Agregar:

- LocalBusiness
- MovingCompany
- Organization

---

## 7.2 Obligatorio en servicios

Agregar:

- Service
- FAQPage
- BreadcrumbList

---

## 7.3 Schema rules

Siempre incluir:

- name
- areaServed
- telephone
- url
- address
- openingHours

Validar en:

- Google Rich Results Test
- Schema Validator

---

# 8. REGLAS DE CONVERSIÓN

## 8.1 CTA

Cada sección importante debe tener CTA visible.

Ejemplos:

- Cotiza ahora
- Llama hoy
- Solicita presupuesto

---

## 8.2 WhatsApp

Botón fijo obligatorio:

- móvil
- desktop

---

## 8.3 Confianza

Agregar:

- testimonios
- reseñas
- garantías
- años experiencia
- fotos reales

---

# 9. REGLAS DE BLOG SEO

## 9.1 Categorías

Crear contenido:

- costos
- tips
- guías
- comparativas
- checklist

---

## 9.2 Objetivo blog

Capturar:

- búsquedas informacionales
- long tail keywords
- tráfico AI

---

## 9.3 Estructura artículos

Todo artículo:

- índice
- FAQs
- tablas
- snippets
- CTA

---

# 10. REGLAS DE QA

Antes de deploy verificar:

- Lighthouse > 90
- No broken links
- Schema válido
- Sitemap accesible
- Robots válido
- Mobile responsive
- CLS estable
- No console errors

---

# 11. REGLAS DE IMPLEMENTACIÓN

## 11.1 Nunca romper diseño existente

Toda optimización debe:

- conservar branding
- mantener UX limpia
- no afectar responsive

---

## 11.2 Prioridad código

Preferir:

- simple
- modular
- reusable
- escalable

---

# 12. DEFINICIÓN DE ÉXITO

El sitio debe quedar listo para:

- Google SEO
- Google AI Overviews
- ChatGPT browsing
- Perplexity indexing
- Bing Copilot
- Gemini retrieval

Objetivo final:

SEO local dominante en CDMX.

