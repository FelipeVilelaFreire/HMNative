// Mock data para avaliações de atividades - HobbyMap

export interface ActivityReview {
  id: string;
  activityId: string;
  userId: string;
  userName: string;
  userNickname: string;
  userAvatar: string;
  rating: number;
  comment: string;
  daysAgo: number;
}

export const activityReviews: ActivityReview[] = [
  // Avaliações para Futebol de Campo (activity id: 1)
  {
    id: 'r1',
    activityId: '1',
    userId: 'u1',
    userName: 'Carlos Silva',
    userNickname: '@carlossilva',
    userAvatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5.0,
    comment: 'Experiência incrível! O campo é bem cuidado e a organização é impecável. Recomendo muito!',
    daysAgo: 10,
  },
  {
    id: 'r2',
    activityId: '1',
    userId: 'u2',
    userName: 'Ana Paula',
    userNickname: '@anapaula',
    userAvatar: 'https://i.pravatar.cc/150?img=5',
    rating: 4.5,
    comment: 'Muito bom! Só achei que poderia ter mais horários disponíveis aos finais de semana.',
    daysAgo: 15,
  },
  {
    id: 'r3',
    activityId: '1',
    userId: 'u3',
    userName: 'Roberto Santos',
    userNickname: '@robertosantos',
    userAvatar: 'https://i.pravatar.cc/150?img=33',
    rating: 5.0,
    comment: 'Perfeito para quem quer jogar com amigos. O ambiente é excelente!',
    daysAgo: 7,
  },
  {
    id: 'r4',
    activityId: '1',
    userId: 'u4',
    userName: 'Mariana Costa',
    userNickname: '@marianacosta',
    userAvatar: 'https://i.pravatar.cc/150?img=9',
    rating: 4.0,
    comment: 'Boa estrutura, mas o estacionamento é um pouco complicado.',
    daysAgo: 20,
  },

  // Avaliações para Yoga para Iniciantes (activity id: 2)
  {
    id: 'r5',
    activityId: '2',
    userId: 'u5',
    userName: 'Pedro Oliveira',
    userNickname: '@pedrooliveira',
    userAvatar: 'https://i.pravatar.cc/150?img=15',
    rating: 5.0,
    comment: 'As aulas são relaxantes e a instrutora é muito atenciosa. Estou adorando!',
    daysAgo: 5,
  },
  {
    id: 'r6',
    activityId: '2',
    userId: 'u6',
    userName: 'Juliana Ferreira',
    userNickname: '@julianaferreira',
    userAvatar: 'https://i.pravatar.cc/150?img=23',
    rating: 5.0,
    comment: 'Ambiente tranquilo e acolhedor. Perfeito para iniciantes como eu!',
    daysAgo: 12,
  },
  {
    id: 'r7',
    activityId: '2',
    userId: 'u7',
    userName: 'Lucas Almeida',
    userNickname: '@lucasalmeida',
    userAvatar: 'https://i.pravatar.cc/150?img=68',
    rating: 4.5,
    comment: 'Muito bom! Só gostaria que tivesse mais aulas durante a semana.',
    daysAgo: 8,
  },

  // Avaliações para Aulas de Violão (activity id: 3)
  {
    id: 'r8',
    activityId: '3',
    userId: 'u8',
    userName: 'Beatriz Lima',
    userNickname: '@beatrizlima',
    userAvatar: 'https://i.pravatar.cc/150?img=20',
    rating: 5.0,
    comment: 'O professor é excelente! Aprendi muito em poucas aulas.',
    daysAgo: 14,
  },
  {
    id: 'r9',
    activityId: '3',
    userId: 'u9',
    userName: 'Rafael Souza',
    userNickname: '@rafaelsouza',
    userAvatar: 'https://i.pravatar.cc/150?img=51',
    rating: 5.0,
    comment: 'Metodologia incrível! Recomendo para todos que querem aprender violão.',
    daysAgo: 6,
  },
  {
    id: 'r10',
    activityId: '3',
    userId: 'u10',
    userName: 'Camila Rodrigues',
    userNickname: '@camilarodrigues',
    userAvatar: 'https://i.pravatar.cc/150?img=32',
    rating: 4.5,
    comment: 'Ótimas aulas! O único ponto é que às vezes fica um pouco lotado.',
    daysAgo: 18,
  },
];
