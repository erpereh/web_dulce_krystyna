import type { NavLink } from '@/types';

export const WHATSAPP_URL =
  'https://wa.me/34610645701?text=Hola%20Dulce%20Krystyna%2C%20me%20gustar%C3%ADa%20hacer%20un%20encargo';

export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Creaciones', href: '#creaciones' },
  { label: 'Sobre Nosotras', href: '#nosotras' },
  { label: 'Contacto', href: '#contacto' },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Creaciones', href: '#creaciones' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Sobre Nosotras', href: '#nosotras' },
  { label: 'Contacto', href: '#contacto' },
];

export const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/dulceskrystyna',
    ariaLabel: 'Síguenos en Instagram — @dulceskrystyna',
  },
  {
    label: 'WhatsApp',
    href: WHATSAPP_URL,
    ariaLabel: 'Contáctanos por WhatsApp',
  },
] as const;

export const BUSINESS_INFO = {
  name: 'Dulce Krystyna',
  tagline: 'Tartas creativas, naturales, artesanales',
  established: '2020',
  address: {
    street: 'C/ José Gutiérrez Maroto, 29',
    neighborhood: 'Ensanche de Vallecas',
    postalCode: '28051',
    city: 'Madrid',
    country: 'España',
    countryCode: 'ES',
    full: 'C/ José Gutiérrez Maroto, 29, Ensanche de Vallecas, 28051 Madrid',
  },
  phone: '+34 610 645 701',
  phoneDisplay: '610 645 701',
  instagram: '@dulceskrystyna',
  schedule: {
    weekdays: 'Martes a Viernes: 10:00 – 14:00 y 17:00 – 20:00',
    weekends: 'Sábado y Domingo: 10:00 – 14:00',
    closed: 'Lunes: Cerrado',
  },
  googleRating: 5,
  googleReviews: 60,
  services: [
    'Encargos personalizados',
    'Recogida en tienda',
    'Entrega a domicilio',
    'Entrega el mismo día',
    'Fiestas infantiles a medida',
  ],
  features: ['LGBTQ+ friendly', 'Accesible para sillas de ruedas', 'Pago con tarjeta y NFC'],
  priceRange: '€€',
} as const;
