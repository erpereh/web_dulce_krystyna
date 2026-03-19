# Dulce Krystyna — Web Pastelería Artesanal

Sitio web premium para pastelería artesanal "Dulce Krystyna" en Madrid. Dark theme elegante con paleta negra y dorada. Diseño tipo luxury brand con animaciones cinematográficas.

## Stack Técnico

- **Framework**: React 18 + TypeScript (strict mode)
- **Build**: Vite 6 con SWC (@vitejs/plugin-react-swc)
- **Estilos**: TailwindCSS v4 (CSS-first config) + CSS Modules para casos especiales
- **Animaciones**: Motion v12 (ex Framer Motion) — import desde "motion/react"
- **Routing**: React Router DOM v6+
- **SEO**: react-helmet-async + JSON-LD structured data (LocalBusiness + Bakery schema)
- **Testing**: Vitest + React Testing Library
- **Linting**: ESLint v9 flat config + Prettier + eslint-plugin-jsx-a11y

## Comandos
```bash
pnpm install          # Instalar dependencias
pnpm dev              # Dev server en localhost:3000
pnpm build            # Build producción
pnpm preview          # Preview del build
pnpm test             # Tests con Vitest
pnpm lint             # ESLint check
pnpm lint:fix         # ESLint autofix
pnpm format           # Prettier format
pnpm type-check       # TypeScript type check sin emitir
```

## Estructura del Proyecto
```
src/
├── assets/            # Imágenes, fuentes, vídeos (importados)
├── components/
│   ├── ui/            # Componentes reutilizables (Button, Card, Section...)
│   ├── layout/        # Header, Footer, Navigation, Layout
│   └── animations/    # Wrappers de animación (FadeIn, SlideUp, Stagger...)
├── features/          # Módulos por feature (hero, menu, gallery, about, contact)
├── hooks/             # Custom hooks globales
├── pages/             # Componentes de página (Home, Menu, About, Contact)
├── styles/            # CSS global, variables Tailwind, fuentes
├── types/             # TypeScript types e interfaces globales
├── utils/             # Helpers, constantes, configuración
├── lib/               # Wrappers de librerías externas
├── data/              # Datos estáticos (productos, menú, testimonios)
├── App.tsx
├── main.tsx
└── router.tsx
```

## Convenciones de Código

- TypeScript strict mode obligatorio — NUNCA usar `any`, preferir `unknown`
- Named exports exclusivamente — NO default exports
- Componentes funcionales con hooks — NO class components
- Props tipadas con `interface` (no `type` para props de componentes)
- Imports ordenados: externos → internos → types → styles
- Path alias: `@/` apunta a `src/`
- Nombres: PascalCase componentes, camelCase hooks/utils, SCREAMING_SNAKE constantes
- CSS: usar utilidades Tailwind; CSS Modules solo para animaciones complejas
- Todas las imágenes con `alt` descriptivo, vídeos con `poster` y fallback estático
- Respetar `prefers-reduced-motion` en TODAS las animaciones

## Flujo de Trabajo

1. Antes de implementar, confirmar approach con el usuario
2. Implementar el cambio
3. Ejecutar `pnpm lint` y `pnpm type-check` — corregir errores
4. Ejecutar `pnpm build` para verificar que compila
5. Si hay tests relevantes: `pnpm test`

## Contexto del Negocio

- **Nombre**: Dulce Krystyna
- **Tipo**: Pastelería artesanal premium
- **Ubicación**: Madrid, España
- **Idioma principal**: Español (con opción futura de inglés)
- **Público objetivo**: Clientes que valoran la alta pastelería, bodas, eventos
- **Tono de marca**: Elegante, artesanal, cálido pero sofisticado
- **Secciones principales**: Hero, Sobre Nosotros, Catálogo/Menú, Galería, Contacto/Encargos
- **SEO local**: Schema.org LocalBusiness + Bakery, meta tags en español

## Notas Importantes

- NUNCA commitear archivos .env
- El tema es SIEMPRE dark — no hay toggle light/dark, es dark-only
- La paleta es: negro (#0a0a0a), charcoal (#1c1c1e), dorado (#c9a84c), crema (#f5f0e8)
- Fuentes: Playfair Display (headings), Montserrat (body/nav)
- Hero section SIEMPRE con vídeo de fondo + overlay oscuro
- Lazy loading para todo lo que esté below-the-fold
- Mobile-first: todo debe verse perfecto en 375px antes de escalar
