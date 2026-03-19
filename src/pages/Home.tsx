import { useRef, useState } from 'react';
import { m, useScroll, useTransform } from 'motion/react';
import { SEO } from '@/components/ui/SEO';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { StaggerItem } from '@/components/animations/StaggerItem';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { Lightbox } from '@/components/ui/Lightbox';
import { BUSINESS_INFO, WHATSAPP_URL } from '@/data/navigation';
import { CREATION_CATEGORIES, FLAVOR_TAGS } from '@/data/creations';
import { TESTIMONIALS } from '@/data/testimonials';
import type { GalleryImage } from '@/types';

const GALLERY_IMAGES: GalleryImage[] = [
  { id: 'g1', src: '/imagenes/1.PNG', alt: 'Tarta personalizada artesanal con decoración detallada', width: 800, height: 800 },
  { id: 'g2', src: '/imagenes/2.PNG', alt: 'Tarta unicornio Valentina para cumpleaños infantil', width: 800, height: 800 },
  { id: 'g3', src: '/imagenes/3.PNG', alt: 'Tarta de evento especial con acabado profesional', width: 800, height: 800 },
  { id: 'g4', src: '/imagenes/4.PNG', alt: 'Variedad de repostería artesanal de Dulce Krystyna', width: 800, height: 800 },
  { id: 'g5', src: '/imagenes/5.PNG', alt: 'Creación artesanal con diseño temático personalizado', width: 800, height: 800 },
  { id: 'g6', src: '/imagenes/6.PNG', alt: 'Tarta decorada a mano con motivos originales', width: 800, height: 800 },
  { id: 'g7', src: '/imagenes/7.PNG', alt: 'Tarta de chocolate con frambuesas, reloj dorado y frutos rojos', width: 800, height: 800 },
  { id: 'g8', src: '/imagenes/8.PNG', alt: 'Tarta elegante blanca con flores naturales e iniciales JM', width: 800, height: 800 },
  { id: 'g9', src: '/imagenes/9.PNG', alt: 'Tarta artesanal con decoración elaborada para celebración', width: 800, height: 800 },
  { id: 'g10', src: '/imagenes/10.PNG', alt: 'Caja de cupcakes artesanales con fresas frescas', width: 800, height: 800 },
  { id: 'g11', src: '/imagenes/11.PNG', alt: 'Creación de repostería fina con acabado premium', width: 800, height: 800 },
  { id: 'g12', src: '/imagenes/12.PNG', alt: 'Tarta personalizada con diseño único hecha a mano', width: 800, height: 800 },
];

const PROCESS_STEPS = [
  {
    number: '01',
    icon: '📱',
    title: 'Escríbenos por WhatsApp',
    text: 'Contáctanos al 610 645 701 o por Instagram. Estamos encantadas de atenderte.',
  },
  {
    number: '02',
    icon: '💬',
    title: 'Cuéntanos tu idea',
    text: 'Háblanos del evento, la temática, los sabores que te gustan y el número de personas.',
  },
  {
    number: '03',
    icon: '🎨',
    title: 'Diseñamos tu tarta',
    text: 'Creamos un diseño único para ti. Cada tarta es una obra de arte personalizada.',
  },
  {
    number: '04',
    icon: '🎂',
    title: 'Recógela o te la enviamos',
    text: 'Recogida en tienda o entrega a domicilio. Incluso el mismo día para pedidos urgentes.',
  },
];

const HOME_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': ['Bakery', 'LocalBusiness'],
  name: BUSINESS_INFO.name,
  description:
    'Pastelería artesanal en Madrid. Tartas personalizadas, tartas de boda, cupcakes, roscones y bollería artesanal. Elaboración 100% artesanal con ingredientes naturales.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS_INFO.address.street,
    addressLocality: BUSINESS_INFO.address.city,
    postalCode: BUSINESS_INFO.address.postalCode,
    addressCountry: BUSINESS_INFO.address.countryCode,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.3765,
    longitude: -3.6127,
  },
  telephone: BUSINESS_INFO.phone,
  priceRange: BUSINESS_INFO.priceRange,
  servesCuisine: 'Pastelería artesanal',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '14:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '17:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '10:00',
      closes: '14:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '60',
    bestRating: '5',
  },
  image: '/imagenes/1.PNG',
  url: 'https://dulcekrystyna.es',
};

const GOOGLE_MAPS_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.5!2d-3.6127!3d40.3765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQy8gSm9zw6kgR3V0acOpcnJleiBNYXJvdG8sIDI5!5e0!3m2!1ses!2ses!4v1';

export const HomePage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <SEO
        title="Dulce Krystyna"
        description="Pastelería artesanal en Madrid. Tartas personalizadas para cumpleaños, bodas y eventos. Elaboración 100% artesanal con ingredientes naturales. Ensanche de Vallecas."
        canonical="/"
        jsonLd={HOME_JSON_LD}
      />

      {/* ═══════════════════════════════════════════════════════
          SECCIÓN 1: HERO
      ═══════════════════════════════════════════════════════ */}
      <section
        id="inicio"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-label="Sección principal"
      >
        {/* Video background with parallax */}
        <m.div
          style={{ y: heroY }}
          className="absolute inset-0 will-change-transform"
          aria-hidden="true"
        >
          <video
            className="hidden md:block w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/imagenes/1.PNG"
            aria-hidden="true"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          {/* Static fallback for mobile */}
          <div
            className="md:hidden w-full h-full bg-surface-elevated"
            style={{
              backgroundImage: 'url(/imagenes/1.PNG)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          {/* Dark overlay 55% */}
          <div className="absolute inset-0 bg-black/55" />
          {/* Bottom gradient for smooth transition */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent" />
        </m.div>

        {/* Hero content */}
        <m.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <FadeIn>
            <p className="text-gold-muted text-xs uppercase tracking-[0.25em] font-sans mb-6">
              Pastelería Artesanal · Madrid · Ensanche de Vallecas
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display text-cream tracking-tight leading-[1.05] mb-6">
              Dulce Krystyna
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-lg md:text-xl text-cream/80 leading-relaxed mb-10 max-w-xl mx-auto font-light">
              Cada tarta, una obra de arte hecha a mano para ti
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href={WHATSAPP_URL}
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hacer un encargo
              </Button>
              <Button href="#creaciones" variant="secondary" size="lg">
                Ver nuestras creaciones
              </Button>
            </div>
          </FadeIn>
        </m.div>

        {/* Scroll indicator */}
        <m.div
          style={{ opacity: heroOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-warm-gray text-xs uppercase tracking-[0.15em]">Descubre</span>
          <m.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gold-muted"
          />
        </m.div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECCIÓN 2: FRANJA DE CONFIANZA
      ═══════════════════════════════════════════════════════ */}
      <section
        className="bg-surface-elevated py-12 md:py-16 px-6"
        aria-label="Datos destacados"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            <div className="text-center">
              <AnimatedCounter end={5} prefix="⭐ " suffix="/5" label="Valoración en Google" />
            </div>
            <div className="text-center md:border-l md:border-border-subtle">
              <AnimatedCounter end={60} suffix="+" label="Reseñas verificadas" />
            </div>
            <div className="text-center md:border-l md:border-border-subtle">
              <AnimatedCounter end={100} suffix="%" label="Elaboración artesanal" />
            </div>
            <div className="text-center md:border-l md:border-border-subtle">
              <p className="text-3xl md:text-4xl font-display text-gold mb-2">∞</p>
              <p className="text-xs uppercase tracking-[0.15em] text-warm-gray font-sans">
                Diseños únicos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECCIÓN 3: SOBRE NOSOTRAS
      ═══════════════════════════════════════════════════════ */}
      <Section id="nosotras">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn direction="left">
            <div className="aspect-[4/5] bg-surface-card overflow-hidden rounded-lg border border-gold/20 relative">
              <img
                src="/imagenes/escaparate.PNG"
                alt="Interior de Dulce Krystyna con la vitrina de tartas artesanales expuestas"
                className="w-full h-full object-cover"
                loading="lazy"
                width={600}
                height={750}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent pointer-events-none" />
            </div>
          </FadeIn>
          <div>
            <FadeIn direction="right">
              <p className="text-gold-muted text-xs uppercase tracking-[0.2em] font-sans mb-4">
                Nuestra historia
              </p>
            </FadeIn>
            <m.h2
              initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-3xl md:text-4xl lg:text-5xl font-display text-cream tracking-tight mb-6"
            >
              Una artista detrás de cada tarta
            </m.h2>
            {/* Animated gold line */}
            <m.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="h-px bg-gold w-20 mb-6 origin-left"
            />
            <m.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-warm-gray text-base md:text-lg leading-relaxed mb-4"
            >
              Dulce Krystyna nació de la pasión por crear algo único con cada encargo. Somos
              una pastelería artesanal fundada y dirigida por mujeres, donde cada tarta se
              diseña y elabora a mano con ingredientes naturales de calidad.
            </m.p>
            <m.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-warm-gray text-base md:text-lg leading-relaxed mb-4"
            >
              No somos una cadena. Somos una pasión hecha negocio. Dedicamos tiempo y cariño
              a cada pieza porque creemos que los momentos especiales merecen algo
              verdaderamente especial.
            </m.p>
            <m.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-warm-gray text-base md:text-lg leading-relaxed mb-8"
            >
              Cada cliente recibe asesoramiento personalizado para que su encargo sea
              exactamente como lo imagina — o incluso mejor.
            </m.p>
            <m.p
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6, type: 'spring', stiffness: 200 }}
              className="text-gold-muted text-xs uppercase tracking-[0.15em] border border-border-subtle inline-block px-4 py-2"
            >
              Negocio local · Ensanche de Vallecas · Madrid
            </m.p>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════
          SECCIÓN 4: NUESTRAS CREACIONES
      ═══════════════════════════════════════════════════════ */}
      <Section id="creaciones" className="bg-surface-elevated">
        <SectionHeading
          eyebrow="Lo que hacemos"
          title="Nuestras creaciones"
          description="Desde tartas temáticas infantiles hasta elegantes tartas nupciales. Cada pieza es única, hecha a mano y diseñada especialmente para ti."
          centered
        />

        {/* Category Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {CREATION_CATEGORIES.map((category, index) => (
            <StaggerItem key={category.id}>
              <m.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group bg-surface-card border border-border-subtle overflow-hidden cursor-default"
              >
                <div className="aspect-[3/4] overflow-hidden bg-surface-hover">
                  <img
                    src={category.imageUrl}
                    alt={category.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading={index < 2 ? 'eager' : 'lazy'}
                    width={400}
                    height={533}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg text-cream mb-2">{category.title}</h3>
                  <p className="text-warm-gray text-sm leading-relaxed">{category.description}</p>
                </div>
              </m.article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Flavor Tags */}
        <FadeIn delay={0.3} className="mt-16">
          <p className="text-center text-gold-muted text-xs uppercase tracking-[0.2em] font-sans mb-6">
            Sabores destacados
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {FLAVOR_TAGS.map((tag) => (
              <span
                key={tag}
                className="text-xs text-cream/80 border border-border-subtle px-4 py-2 font-sans tracking-wide hover:border-gold hover:text-gold transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* ═══════════════════════════════════════════════════════
          SECCIÓN 5: GALERÍA — Infinite Marquee
      ═══════════════════════════════════════════════════════ */}
      <Section id="galeria">
        <SectionHeading
          eyebrow="Nuestro trabajo"
          title="Cada tarta cuenta una historia"
          centered
        />

        {/* Marquee Container */}
        <div
          className="group/marquee overflow-hidden relative"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
          }}
          aria-hidden="true"
        >
          {/* Row 1: left to right */}
          <div className="flex gap-4 [animation:marquee_40s_linear_infinite] group-hover/marquee:[animation-play-state:paused] w-max">
            {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((image, i) => (
              <img
                key={`row1-${i}`}
                src={image.src}
                alt=""
                role="presentation"
                className="h-48 md:h-64 aspect-square object-cover rounded-lg flex-shrink-0"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
          {/* Row 2: right to left */}
          <div className="flex gap-4 mt-4 [animation:marquee-reverse_30s_linear_infinite] group-hover/marquee:[animation-play-state:paused] w-max">
            {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((image, i) => (
              <img
                key={`row2-${i}`}
                src={image.src}
                alt=""
                role="presentation"
                className="h-48 md:h-64 aspect-square object-cover rounded-lg flex-shrink-0"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <FadeIn delay={0.2} className="mt-10">
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3 justify-items-center">
            {GALLERY_IMAGES.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => openLightbox(index)}
                className="group relative focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
                aria-label={`Ver imagen: ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-12 h-12 rounded-full object-cover border-2 border-transparent group-hover:border-gold transition-all duration-300 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
              </button>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-10 text-center">
          <p className="text-warm-gray text-base mb-6">
            ¿Te gusta lo que ves? Cuéntanos tu idea y lo hacemos realidad.
          </p>
          <Button
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Hacer mi encargo
          </Button>
        </FadeIn>
      </Section>

      {/* Lightbox */}
      <Lightbox
        images={GALLERY_IMAGES}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />

      {/* ═══════════════════════════════════════════════════════
          SECCIÓN 6: PROCESO DE ENCARGO
      ═══════════════════════════════════════════════════════ */}
      <Section className="bg-surface-elevated">
        <SectionHeading
          eyebrow="Así de fácil"
          title="¿Cómo hacer tu encargo?"
          centered
        />

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
        >
          {PROCESS_STEPS.map((step, index) => (
            <m.div
              key={step.number}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
              }}
              className="text-center relative"
            >
              {/* Connector line (hidden on mobile, visible on lg) */}
              {index < PROCESS_STEPS.length - 1 && (
                <m.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: index * 0.2 + 0.3, ease: 'easeOut' }}
                  className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-border-subtle origin-left"
                  aria-hidden="true"
                />
              )}
              <span className="text-4xl mb-4 block" role="img" aria-hidden="true">
                {step.icon}
              </span>
              <p className="text-gold font-display text-2xl mb-3">{step.number}</p>
              <h3 className="text-cream font-display text-lg mb-3">{step.title}</h3>
              <p className="text-warm-gray text-sm leading-relaxed">{step.text}</p>
            </m.div>
          ))}
        </m.div>

        <FadeIn delay={0.6} className="mt-12 text-center">
          <Button
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
          >
            Contactar por WhatsApp
          </Button>
        </FadeIn>
      </Section>

      {/* ═══════════════════════════════════════════════════════
          SECCIÓN 7: TESTIMONIOS
      ═══════════════════════════════════════════════════════ */}
      <Section id="testimonios">
        <SectionHeading
          eyebrow="⭐ 5/5 en Google"
          title="Lo que dicen nuestros clientes"
          centered
        />

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((testimonial) => (
            <m.blockquote
              key={testimonial.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
              }}
              className="bg-surface-card border border-border-subtle p-8 h-full flex flex-col"
            >
              {/* Stars with spring animation */}
              <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} de 5 estrellas`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <m.svg
                    key={i}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="var(--color-gold)"
                    aria-hidden="true"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15, delay: i * 0.08 }}
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </m.svg>
                ))}
              </div>
              <p className="text-cream/90 text-sm leading-relaxed italic flex-1">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <footer className="mt-6 pt-4 border-t border-border-subtle">
                <cite className="text-warm-gray text-xs not-italic uppercase tracking-[0.1em]">
                  — {testimonial.name}
                </cite>
              </footer>
            </m.blockquote>
          ))}
        </m.div>
      </Section>

      {/* ═══════════════════════════════════════════════════════
          SECCIÓN 8: CONTACTO
      ═══════════════════════════════════════════════════════ */}
      <section
        id="contacto"
        className="bg-surface py-16 px-6 md:py-24 md:px-12 lg:py-32 lg:px-20"
        aria-labelledby="contacto-heading"
      >
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-gold-muted text-xs uppercase tracking-[0.2em] font-sans mb-4 text-center">
              Estamos aquí para ti
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              id="contacto-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-display text-cream tracking-tight mb-16 text-center"
            >
              Haz tu encargo
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Contact Info — Left Column */}
            <FadeIn direction="left">
              <div className="flex flex-col gap-8">
                <div>
                  <p className="text-gold-muted text-xs uppercase tracking-[0.15em] mb-2">
                    Dirección
                  </p>
                  <p className="text-cream text-base">{BUSINESS_INFO.address.full}</p>
                </div>
                <div>
                  <p className="text-gold-muted text-xs uppercase tracking-[0.15em] mb-2">
                    WhatsApp
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream text-base hover:text-gold transition-colors duration-300"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>
                <div>
                  <p className="text-gold-muted text-xs uppercase tracking-[0.15em] mb-2">
                    Instagram
                  </p>
                  <a
                    href="https://www.instagram.com/dulceskrystyna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream text-base hover:text-gold transition-colors duration-300"
                  >
                    {BUSINESS_INFO.instagram}
                  </a>
                </div>
                <div>
                  <p className="text-gold-muted text-xs uppercase tracking-[0.15em] mb-2">
                    Horario
                  </p>
                  <p className="text-cream text-sm">{BUSINESS_INFO.schedule.weekdays}</p>
                  <p className="text-cream text-sm">{BUSINESS_INFO.schedule.weekends}</p>
                  <p className="text-warm-gray text-sm">{BUSINESS_INFO.schedule.closed}</p>
                </div>
                <div className="flex flex-wrap gap-3 text-xs text-warm-gray">
                  {BUSINESS_INFO.features.map((feature) => (
                    <span
                      key={feature}
                      className="border border-border-subtle px-3 py-1.5"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <Button
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  className="w-full sm:w-auto justify-center"
                >
                  Contactar por WhatsApp
                </Button>
              </div>
            </FadeIn>

            {/* Fachada + Google Maps — Right Column */}
            <FadeIn direction="right" delay={0.2}>
              <div className="flex flex-col gap-6">
                {/* Fachada on top */}
                <div className="aspect-[4/3] overflow-hidden rounded-lg border border-gold/20">
                  <img
                    src="/imagenes/fachada.PNG"
                    alt="Fachada exterior del local Dulce Krystyna en el Ensanche de Vallecas, Madrid"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
                {/* Maps below */}
                <div className="aspect-video min-h-[250px] bg-surface-card overflow-hidden rounded-lg border border-border-subtle">
                  <iframe
                    src={GOOGLE_MAPS_EMBED}
                    title="Ubicación de Dulce Krystyna en Google Maps"
                    className="w-full h-full border-0"
                    style={{ filter: 'invert(90%) hue-rotate(180deg)' }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
};
