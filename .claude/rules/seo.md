---
paths:
  - "src/pages/**/*.{tsx,jsx}"
  - "src/components/layout/**/*.{tsx,jsx}"
  - "public/**/*"
---

# SEO y Metadatos

## Meta Tags (react-helmet-async)

- CADA página debe tener un componente <SEO> con:
  - title único: "[Página] | Dulce Krystyna — Pastelería Artesanal Madrid"
  - meta description única de 150-160 caracteres en español
  - canonical URL
  - Open Graph tags (og:title, og:description, og:image, og:url, og:type)
  - Twitter Card tags
  - lang="es" en <html>

## Structured Data (JSON-LD)

- Schema LocalBusiness + Bakery en la página principal:
```json
  {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": "Dulce Krystyna",
    "description": "Pastelería artesanal premium en Madrid",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Madrid",
      "addressCountry": "ES"
    },
    "priceRange": "€€€",
    "servesCuisine": "Pastelería artesanal"
  }
```
- Schema Product para cada producto del catálogo
- Schema BreadcrumbList para navegación

## Archivos Estáticos

- robots.txt en public/ permitiendo crawling
- sitemap.xml en public/ con todas las rutas
- favicon.ico + apple-touch-icon + manifest.json

## HTML Semántico para SEO

- Un solo <h1> por página
- Jerarquía de headings correcta (h1 > h2 > h3, sin saltos)
- Texto real en el DOM — no solo imágenes para contenido importante
- Links internos descriptivos — nunca "click aquí"

## Performance SEO

- Core Web Vitals optimizados (ver performance.md)
- HTML mínimo en primera carga
- Considerar pre-rendering (react-snap) para crawlers
