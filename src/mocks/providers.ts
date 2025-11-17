// Mock data para provedores/academias - HobbyMap

export interface Provider {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  reviewsCount: number;
  description?: string;
  coverImage?: string;
  location?: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    latitude: number;
    longitude: number;
  };
  contact?: {
    phone: string;
    email: string;
    website?: string;
    instagram?: string;
    facebook?: string;
  };
  openingHours?: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  amenities?: string[];
  categoryIds?: string[];
  verified?: boolean;
  createdAt?: string;
  ownerId?: string;
}

export const providers: Provider[] = [
  {
    id: 'p1',
    name: 'Arena Sport Club',
    avatar: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80',
    rating: 4.7,
    reviewsCount: 342,
    description: 'Academia completa com quadras poliesportivas, piscina olímpica e área de musculação. Oferecemos aulas de futebol, vôlei, basquete, natação e muito mais. Venha conhecer nossa estrutura!',
    coverImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
    location: {
      address: 'Av. Paulista, 1500',
      city: 'São Paulo',
      state: 'SP',
      zipCode: '01310-100',
      latitude: -23.561414,
      longitude: -46.656219,
    },
    contact: {
      phone: '(11) 3456-7890',
      email: 'contato@arenasport.com.br',
      website: 'https://arenasport.com.br',
      instagram: '@arenasport',
    },
    openingHours: {
      monday: '06:00 - 22:00',
      tuesday: '06:00 - 22:00',
      wednesday: '06:00 - 22:00',
      thursday: '06:00 - 22:00',
      friday: '06:00 - 22:00',
      saturday: '08:00 - 18:00',
      sunday: '08:00 - 14:00',
    },
    amenities: ['Estacionamento', 'Wi-Fi', 'Vestiário', 'Ar condicionado', 'Piscina', 'Quadras'],
    categoryIds: ['1'],
    verified: true,
    createdAt: '2024-01-15',
    ownerId: 'user123',
  },
  {
    id: 'p2',
    name: 'Zen Yoga Studio',
    avatar: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&q=80',
    rating: 4.9,
    reviewsCount: 198,
    description: 'Estúdio especializado em yoga e meditação. Ambiente tranquilo e acolhedor para você encontrar seu equilíbrio interior.',
  },
  {
    id: 'p3',
    name: 'Escola de Música Harmonia',
    avatar: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&q=80',
    rating: 5.0,
    reviewsCount: 156,
    description: 'Aprenda música com os melhores professores! Oferecemos aulas de violão, piano, bateria, canto e muito mais.',
  },
  {
    id: 'p4',
    name: 'Aqua Sports',
    avatar: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=400&q=80',
    rating: 4.8,
    reviewsCount: 267,
    description: 'Centro aquático completo com piscinas olímpicas, aulas de natação para todas as idades e hidroginástica.',
  },
  {
    id: 'p5',
    name: 'Studio Corpo e Mente',
    avatar: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80',
    rating: 4.9,
    reviewsCount: 215,
    description: 'Espaço dedicado ao bem-estar físico e mental. Pilates, yoga, meditação e muito mais em um ambiente acolhedor.',
  },
  {
    id: 'p6',
    name: 'Atelier Arte Livre',
    avatar: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&q=80',
    rating: 4.8,
    reviewsCount: 134,
    description: 'Espaço dedicado às artes visuais. Cursos de pintura, desenho, escultura e fotografia com professores experientes.',
  },
  {
    id: 'p7',
    name: 'Fight Academy',
    avatar: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&q=80',
    rating: 4.9,
    reviewsCount: 289,
    description: 'Academia especializada em artes marciais e lutas. Muay Thai, Jiu-Jitsu, Boxe e MMA com instrutores certificados.',
  },
  {
    id: 'p8',
    name: 'Conservatório Musical',
    avatar: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&q=80',
    rating: 5.0,
    reviewsCount: 178,
    description: 'Conservatório de música com mais de 20 anos de tradição. Formação completa em diversos instrumentos e teoria musical.',
  },
  {
    id: 'p9',
    name: 'Chef em Casa',
    avatar: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&q=80',
    rating: 4.8,
    reviewsCount: 223,
  },
  {
    id: 'p10',
    name: 'Espaço Dança',
    avatar: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=400&q=80',
    rating: 4.7,
    reviewsCount: 301,
  },
  {
    id: 'p11',
    name: 'Runners Club',
    avatar: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&q=80',
    rating: 4.6,
    reviewsCount: 412,
  },
  {
    id: 'p12',
    name: 'Centro de Meditação',
    avatar: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80',
    rating: 4.9,
    reviewsCount: 267,
  },
  {
    id: 'p13',
    name: 'Escola de Fotografia',
    avatar: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&q=80',
    rating: 5.0,
    reviewsCount: 189,
  },
  {
    id: 'p14',
    name: 'Teatro Oficina',
    avatar: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=400&q=80',
    rating: 4.8,
    reviewsCount: 245,
  },
  {
    id: 'p15',
    name: 'Box Fit Academy',
    avatar: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?w=400&q=80',
    rating: 4.7,
    reviewsCount: 356,
  },
  {
    id: 'p16',
    name: 'Academia de Cordas',
    avatar: 'https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=400&q=80',
    rating: 5.0,
    reviewsCount: 123,
  },
];
