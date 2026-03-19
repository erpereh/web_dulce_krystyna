import type { CreationCategory } from '@/types';

export const CREATION_CATEGORIES: CreationCategory[] = [
  {
    id: 'tartas-personalizadas',
    title: 'Tartas Personalizadas',
    description:
      'Tu idea hecha realidad. Frozen, Paw Patrol, Pokémon, Baby Shark... cualquier temática, cualquier ocasión. Cada tarta es única.',
    imageUrl: '/imagenes/7.PNG',
    imageAlt: 'Tarta artesanal de chocolate con frambuesas, reloj dorado y frutos rojos',
  },
  {
    id: 'tartas-celebracion',
    title: 'Tartas de Celebración',
    description:
      'Cumpleaños, bautizos, comuniones, aniversarios. Tartas número, tartas letra y bento cakes para celebrar cada momento especial.',
    imageUrl: '/imagenes/2.PNG',
    imageAlt: 'Tarta unicornio Valentina 2 para cumpleaños infantil',
  },
  {
    id: 'boda-eventos',
    title: 'Bodas y Eventos',
    description:
      'Tartas nupciales y dulces para tu día más especial. Diseño completamente personalizado y asesoramiento para que todo sea perfecto.',
    imageUrl: '/imagenes/8.PNG',
    imageAlt: 'Tarta elegante blanca con flores naturales e iniciales JM para boda',
  },
  {
    id: 'bolleria-artesanal',
    title: 'Bollería Artesanal',
    description:
      'Roscones rellenos de nata, pan 100% integral, donuts, cookies y cake-pops. Elaboración diaria con ingredientes naturales.',
    imageUrl: '/imagenes/10.PNG',
    imageAlt: 'Caja de cupcakes artesanales con fresas de Dulce Krystyna',
  },
];

export const FLAVOR_TAGS: string[] = [
  'Chocolate',
  'Pistacho',
  'Tarta de queso',
  'Tarta de miel',
  'Tres chocolates',
  'Limón y amapola',
  'Red Velvet',
  'Nata',
  'Frutas de temporada',
  'Y muchos más...',
];
