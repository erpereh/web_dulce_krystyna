---
paths:
  - "src/components/animations/**/*.{tsx,jsx}"
  - "src/features/**/*.{tsx,jsx}"
  - "src/pages/**/*.{tsx,jsx}"
---

# Reglas de Animación — Motion (Framer Motion v12)

## Configuración General

- Importar SIEMPRE desde "motion/react", NUNCA desde "framer-motion"
- Usar MotionConfig en App.tsx para defaults globales:
```tsx
  import { MotionConfig } from "motion/react"
  <MotionConfig reducedMotion="user" transition={{ duration: 0.5, ease: "easeOut" }}>
    {children}
  </MotionConfig>
```
- SIEMPRE respetar prefers-reduced-motion con reducedMotion="user"
- Usar LazyMotion + domAnimation para reducir bundle size:
```tsx
  import { LazyMotion, domAnimation } from "motion/react"
  <LazyMotion features={domAnimation}>{children}</LazyMotion>
```

## Animaciones de Entrada (Scroll-Triggered)

- Usar `whileInView` con `viewport={{ once: true, amount: 0.3 }}`
- NUNCA retriggear animaciones al hacer scroll hacia arriba
- Patrón estándar para fade-in:
```tsx
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  />
```
- Fade-in con blur para efecto luxury:
```tsx
  initial={{ opacity: 0, filter: "blur(8px)" }}
  whileInView={{ opacity: 1, filter: "blur(0px)" }}
```

## Stagger (Listas y Grids)

- Usar variants con staggerChildren para grids de productos/galerías
- Container: staggerChildren: 0.1, delayChildren: 0.2
- Item: opacity 0→1, y 30→0, duration 0.5
- NO exceder staggerChildren de 0.15 — se siente lento

## Parallax (Hero Section)

- Usar useScroll + useTransform para parallax suave:
```tsx
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
```
- El contenido del hero debe hacer fade-out al hacer scroll (opacity transform)
- El fondo del hero debe moverse más lento que el scroll (parallax 0.3x)

## Header/Navigation

- Transición de transparente a sólido basada en scroll:
```tsx
  const headerBg = useTransform(scrollY, [0, 100], ["rgba(10,10,10,0)", "rgba(10,10,10,0.95)"])
```
- Backdrop blur: backdrop-blur-md cuando el header tiene fondo

## Hover Animations

- Cards: whileHover={{ y: -8 }} con transition duration 0.3
- Botones: whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
- Imágenes en cards: solo CSS transition (group-hover:scale-105 duration-700)
- NO usar animaciones Motion para hovers que CSS puede manejar

## Transiciones de Página

- Usar AnimatePresence con mode="wait" en el router
- Entrada: opacity 0→1, y 20→0, duration 0.4
- Salida: opacity 1→0, duration 0.3
- Las transiciones de página deben ser SUTILES — nunca llamativas

## Performance

- Animar SOLO transform y opacity (GPU-accelerated)
- NUNCA animar width, height, top, left, margin, padding
- Para animaciones de blur/filter: aceptable pero monitorizar performance
- Usar willChange: "transform" en elementos con animaciones continuas (parallax)
- viewport={{ once: true }} es OBLIGATORIO en whileInView
- LazyMotion reduce el bundle de Motion de ~34KB a ~5KB
