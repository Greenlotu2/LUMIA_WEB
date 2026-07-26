export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'Estanterias' | 'Mesas_Centro' | 'Mesas_Laterales' | 'Repisas';
  price: number;
  dimensions: string;
  material: string;
  description: string;
  mainImage: string;
  gallery: string[];
  inStock: boolean;
}

export const PRODUCTS: Product[] = [
  // ==========================================
  // REPISAS
  // ==========================================
  {
    id: 'rep-01',
    name: 'Repisa Industrial 2 Niveles',
    slug: 'repisa-2-niveles',
    category: 'Repisas',
    price: 1299,
    dimensions: '80 x 20 x 40 cm',
    material: 'Perfil de acero y madera maciza',
    description: 'Estructura flotante de dos niveles de alta resistencia.',
    mainImage: '/muebles/Repisas/REPISA_2_NIV/1.jpg',
    gallery: [
      '/muebles/Repisas/REPISA_2_NIV/1.jpg',
      '/muebles/Repisas/REPISA_2_NIV/2.jpg',
      '/muebles/Repisas/REPISA_2_NIV/3.jpg'
    ],
    inStock: true,
  },
  {
    id: 'rep-02',
    name: 'Repisa Industrial 3 Niveles',
    slug: 'repisa-3-niveles',
    category: 'Repisas',
    price: 1650,
    dimensions: '90 x 20 x 60 cm',
    material: 'Soporte central de herrería y repisas de pino',
    description: 'Tres niveles de exhibición con columna central metálica.',
    mainImage: '/muebles/Repisas/REPISA_3_NIV/1.jpg',
    gallery: [
      '/muebles/Repisas/REPISA_3_NIV/1.jpg',
      '/muebles/Repisas/REPISA_3_NIV/2.jpg',
      '/muebles/Repisas/REPISA_3_NIV/3.jpg'
    ],
    inStock: true,
  },

  // ==========================================
  // MESAS LATERALES
  // ==========================================
  {
    id: 'ml-01',
    name: 'Mesa Lateral 2 Niveles',
    slug: 'mesa-lateral-2-niveles',
    category: 'Mesas_Laterales',
    price: 1850,
    dimensions: '45 x 45 x 50 cm',
    material: 'Estructura metálica mate y cubierta de madera',
    description: 'Diseño cúbico con repisa inferior de apoyo.',
    mainImage: '/muebles/Mesas_Laterales/MESA_LAT_2_NIV/1.jpg',
    gallery: [
      '/muebles/Mesas_Laterales/MESA_LAT_2_NIV/1.jpg',
      '/muebles/Mesas_Laterales/MESA_LAT_2_NIV/2.jpg',
      '/muebles/Mesas_Laterales/MESA_LAT_2_NIV/3.jpg'
    ],
    inStock: true,
  },
  {
    id: 'ml-02',
    name: 'Mesa Lateral Rectangular 2 Niveles',
    slug: 'mesa-lateral-2-niveles-rectangular',
    category: 'Mesas_Laterales',
    price: 1950,
    dimensions: '55 x 35 x 50 cm',
    material: 'Perfil de acero y doble cubierta',
    description: 'Formato alargado óptimo para el costado de sillones.',
    mainImage: '/muebles/Mesas_Laterales/MESA_LAT_2NIV_RECTANGULO/1.jpg',
    gallery: [
      '/muebles/Mesas_Laterales/MESA_LAT_2NIV_RECTANGULO/1.jpg',
      '/muebles/Mesas_Laterales/MESA_LAT_2NIV_RECTANGULO/2.jpg',
      '/muebles/Mesas_Laterales/MESA_LAT_2NIV_RECTANGULO/3.jpg'
    ],
    inStock: true,
  },
  {
    id: 'ml-03',
    name: 'Mesa Lateral 3 Niveles',
    slug: 'mesa-lateral-3-niveles',
    category: 'Mesas_Laterales',
    price: 2200,
    dimensions: '40 x 40 x 65 cm',
    material: 'Bastidor industrial con triple repisa',
    description: 'Torre auxiliar versátil para almacenamiento vertical.',
    mainImage: '/muebles/Mesas_Laterales/MESA_LAT_3_NIV/1.jpg',
    gallery: [
      '/muebles/Mesas_Laterales/MESA_LAT_3_NIV/1.jpg',
      '/muebles/Mesas_Laterales/MESA_LAT_3_NIV/2.jpg',
      '/muebles/Mesas_Laterales/MESA_LAT_3_NIV/3.jpg'
    ],
    inStock: true,
  },
  {
    id: 'ml-04',
    name: 'Mesa Lateral Circular Vidrio',
    slug: 'mesa-lateral-circular-vidrio',
    category: 'Mesas_Laterales',
    price: 2100,
    dimensions: '45 x 45 x 55 cm',
    material: 'Aro de acero curvo y cubierta de vidrio templado',
    description: 'Geometría circular moderna con soporte biselado.',
    mainImage: '/muebles/Mesas_Laterales/MESA_LAT_CIR_VID/1.jpg',
    gallery: [
      '/muebles/Mesas_Laterales/MESA_LAT_CIR_VID/1.jpg',
      '/muebles/Mesas_Laterales/MESA_LAT_CIR_VID/2.jpg'
    ],
    inStock: true,
  },

  // ==========================================
  // MESAS DE CENTRO
  // ==========================================
  {
    id: 'mc-01',
    name: 'Mesa de Centro con Cajones',
    slug: 'mesa-centro-cajones',
    category: 'Mesas_Centro',
    price: 3400,
    dimensions: '100 x 60 x 45 cm',
    material: 'Estructura pesada de acero y bloques de madera con almacenamiento',
    description: 'Pieza robusta con almacenamiento oculto integrado.',
    mainImage: '/muebles/Mesas_Centro/Mesa_Cajones/1.jpg',
    gallery: [
      '/muebles/Mesas_Centro/Mesa_Cajones/1.jpg',
      '/muebles/Mesas_Centro/Mesa_Cajones/2.jpg'
    ],
    inStock: true,
  },
  {
    id: 'mc-02',
    name: 'Mesa de Centro Dúo 2 Piezas',
    slug: 'mesa-centro-2p-madera',
    category: 'Mesas_Centro',
    price: 3200,
    dimensions: 'Diámetros 70 cm y 50 cm',
    material: 'Bases circulares metálicas y cubiertas de madera maciza',
    description: 'Set de dos mesas anidadas de altura escalonada.',
    mainImage: '/muebles/Mesas_Centro/Mesa_Cen_2P_Mad/1.jpg',
    gallery: [
      '/muebles/Mesas_Centro/Mesa_Cen_2P_Mad/1.jpg',
      '/muebles/Mesas_Centro/Mesa_Cen_2P_Mad/2.jpg',
      '/muebles/Mesas_Centro/Mesa_Cen_2P_Mad/3.jpg'
    ],
    inStock: true,
  },
  {
    id: 'mc-03',
    name: 'Mesa de Centro Circular Vidrio y Madera',
    slug: 'mesa-centro-vidrio-circular',
    category: 'Mesas_Centro',
    price: 2990,
    dimensions: '80 x 80 x 42 cm',
    material: 'Base cruzada de madera y acero con cubierta de vidrio',
    description: 'Diseño mixto con transparencia superior.',
    mainImage: '/muebles/Mesas_Centro/Mesa_Cen_Vid_Cir/1.png',
    gallery: [
      '/muebles/Mesas_Centro/Mesa_Cen_Vid_Cir/1.png',
      '/muebles/Mesas_Centro/Mesa_Cen_Vid_Cir/2.jpg',
      '/muebles/Mesas_Centro/Mesa_Cen_Vid_Cir/3.png'
    ],
    inStock: true,
  },
  {
    id: 'mc-04',
    name: 'Mesa de Centro Rectangular Metal y Vidrio',
    slug: 'mesa-centro-rectangular-metal-vidrio',
    category: 'Mesas_Centro',
    price: 2850,
    dimensions: '110 x 55 x 40 cm',
    material: 'Bastidor de perfil rectangular de acero y vidrio templado',
    description: 'Estética industrial limpia con aristas marcadas.',
    mainImage: '/muebles/Mesas_Centro/Mesa_Centro_Rec_Met_Vid/1.jpg',
    gallery: [
      '/muebles/Mesas_Centro/Mesa_Centro_Rec_Met_Vid/1.jpg',
      '/muebles/Mesas_Centro/Mesa_Centro_Rec_Met_Vid/2.jpg'
    ],
    inStock: true,
  },

  // ==========================================
  // ESTANTERÍAS
  // ==========================================
  {
    id: 'est-01',
    name: 'Estantería 3 Niveles Heavy Duty',
    slug: 'estanteria-3-niveles',
    category: 'Estanterias',
    price: 3100,
    dimensions: '100 x 35 x 120 cm',
    material: 'Estructura en X de acero y repisas anchas',
    description: 'Refuerzo posterior en X para máxima estabilidad.',
    mainImage: '/muebles/Estanterias/Estanteria_3_Niveles/1.jpg',
    gallery: [
      '/muebles/Estanterias/Estanteria_3_Niveles/1.jpg',
      '/muebles/Estanterias/Estanteria_3_Niveles/2.jpg',
      '/muebles/Estanterias/Estanteria_3_Niveles/3.jpg'
    ],
    inStock: true,
  },
  {
    id: 'est-02',
    name: 'Estantería Torre 6 Niveles',
    slug: 'estanteria-6-niveles',
    category: 'Estanterias',
    price: 4500,
    dimensions: '90 x 35 x 190 cm',
    material: 'PTR industrial con distribución asimétrica',
    description: 'Gran capacidad vertical con diseño de repisas en bloques.',
    mainImage: '/muebles/Estanterias/Estanteria_6_Niveles/1.jpg',
    gallery: [
      '/muebles/Estanterias/Estanteria_6_Niveles/1.jpg',
      '/muebles/Estanterias/Estanteria_6_Niveles/2.jpg',
      '/muebles/Estanterias/Estanteria_6_Niveles/3.jpeg'
    ],
    inStock: true,
  },
  {
    id: 'est-03',
    name: 'Estantería Consola Mesa',
    slug: 'estanteria-mesa-consola',
    category: 'Estanterias',
    price: 3800,
    dimensions: '130 x 40 x 85 cm',
    material: 'Cubierta superior de madera maciza y repisa metálica inferior',
    description: 'Formato alargado ideal para recibidores o detrás del sofá.',
    mainImage: '/muebles/Estanterias/Estanteria_Mesa/1.jpg',
    gallery: [
      '/muebles/Estanterias/Estanteria_Mesa/1.jpg',
      '/muebles/Estanterias/Estanteria_Mesa/2.jpg',
      '/muebles/Estanterias/Estanteria_Mesa/3.jpg',
      '/muebles/Estanterias/Estanteria_Mesa/4.jpg',
      '/muebles/Estanterias/Estanteria_Mesa/5.png'
    ],
    inStock: true,
  },
  {
    id: 'est-04',
    name: 'Estantería Arq Pez',
    slug: 'estanteria-pez',
    category: 'Estanterias',
    price: 4900,
    dimensions: '110 x 35 x 175 cm',
    material: 'Estructura curva artesanal y soportes de madera',
    description: 'Silueta orgánica exclusiva con detalles de herrería curva.',
    mainImage: '/muebles/Estanterias/Estanteria_Pez/1.jpg',
    gallery: [
      '/muebles/Estanterias/Estanteria_Pez/1.jpg',
      '/muebles/Estanterias/Estanteria_Pez/2.jpg',
      '/muebles/Estanterias/Estanteria_Pez/3.jpeg'
    ],
    inStock: true,
  },
];