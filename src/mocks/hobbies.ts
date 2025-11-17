// Mock data para hobbies - HobbyMap

export interface Hobby {
  id: string;
  name: string;
  categoryId: string;
  icon: string; // Nome do ícone do FontAwesome5
  color: string; // Cor herdada da categoria
}

export const hobbies: Hobby[] = [
  // Esportes (categoryId: '1', color: '#FF6B6B')
  {
    id: '1',
    name: 'Futebol',
    categoryId: '1',
    icon: 'futbol',
    color: '#FF6B6B',
  },
  {
    id: '2',
    name: 'Vôlei',
    categoryId: '1',
    icon: 'volleyball-ball',
    color: '#FF6B6B',
  },
  {
    id: '3',
    name: 'Basquete',
    categoryId: '1',
    icon: 'basketball-ball',
    color: '#FF6B6B',
  },
  {
    id: '4',
    name: 'Natação',
    categoryId: '1',
    icon: 'swimming-pool',
    color: '#FF6B6B',
  },
  {
    id: '5',
    name: 'Corrida',
    categoryId: '1',
    icon: 'running',
    color: '#FF6B6B',
  },

  // Artes (categoryId: '2', color: '#4ECDC4')
  {
    id: '6',
    name: 'Pintura',
    categoryId: '2',
    icon: 'palette',
    color: '#4ECDC4',
  },
  {
    id: '7',
    name: 'Fotografia',
    categoryId: '2',
    icon: 'camera',
    color: '#4ECDC4',
  },
  {
    id: '8',
    name: 'Desenho',
    categoryId: '2',
    icon: 'pencil-alt',
    color: '#4ECDC4',
  },
  {
    id: '9',
    name: 'Escultura',
    categoryId: '2',
    icon: 'hammer',
    color: '#4ECDC4',
  },

  // Música (categoryId: '3', color: '#95E1D3')
  {
    id: '10',
    name: 'Violão',
    categoryId: '3',
    icon: 'guitar',
    color: '#95E1D3',
  },
  {
    id: '11',
    name: 'Piano',
    categoryId: '3',
    icon: 'music',
    color: '#95E1D3',
  },
  {
    id: '12',
    name: 'Canto',
    categoryId: '3',
    icon: 'microphone',
    color: '#95E1D3',
  },
  {
    id: '13',
    name: 'DJ',
    categoryId: '3',
    icon: 'headphones',
    color: '#95E1D3',
  },

  // Tecnologia (categoryId: '4', color: '#6C5CE7')
  {
    id: '14',
    name: 'Programação',
    categoryId: '4',
    icon: 'code',
    color: '#6C5CE7',
  },
  {
    id: '15',
    name: 'Gaming',
    categoryId: '4',
    icon: 'gamepad',
    color: '#6C5CE7',
  },
  {
    id: '16',
    name: 'Robótica',
    categoryId: '4',
    icon: 'robot',
    color: '#6C5CE7',
  },
  {
    id: '17',
    name: 'Design',
    categoryId: '4',
    icon: 'laptop',
    color: '#6C5CE7',
  },

  // Gastronomia (categoryId: '5', color: '#FDCB6E')
  {
    id: '18',
    name: 'Culinária',
    categoryId: '5',
    icon: 'utensils',
    color: '#FDCB6E',
  },
  {
    id: '19',
    name: 'Confeitaria',
    categoryId: '5',
    icon: 'birthday-cake',
    color: '#FDCB6E',
  },
  {
    id: '20',
    name: 'Barista',
    categoryId: '5',
    icon: 'coffee',
    color: '#FDCB6E',
  },

  // Natureza (categoryId: '6', color: '#00B894')
  {
    id: '21',
    name: 'Jardinagem',
    categoryId: '6',
    icon: 'leaf',
    color: '#00B894',
  },
  {
    id: '22',
    name: 'Camping',
    categoryId: '6',
    icon: 'campground',
    color: '#00B894',
  },
  {
    id: '23',
    name: 'Trilha',
    categoryId: '6',
    icon: 'hiking',
    color: '#00B894',
  },
  {
    id: '24',
    name: 'Pesca',
    categoryId: '6',
    icon: 'fish',
    color: '#00B894',
  },

  // Mais Esportes (categoryId: '1', color: '#FF6B6B')
  {
    id: '25',
    name: 'Tênis',
    categoryId: '1',
    icon: 'table-tennis',
    color: '#FF6B6B',
  },
  {
    id: '26',
    name: 'Skate',
    categoryId: '1',
    icon: 'skating',
    color: '#FF6B6B',
  },
  {
    id: '27',
    name: 'Ciclismo',
    categoryId: '1',
    icon: 'biking',
    color: '#FF6B6B',
  },
  {
    id: '28',
    name: 'Yoga',
    categoryId: '1',
    icon: 'spa',
    color: '#FF6B6B',
  },
  {
    id: '29',
    name: 'Surf',
    categoryId: '1',
    icon: 'water',
    color: '#FF6B6B',
  },
  {
    id: '30',
    name: 'Boxe',
    categoryId: '1',
    icon: 'fist-raised',
    color: '#FF6B6B',
  },

  // Mais Artes (categoryId: '2', color: '#4ECDC4')
  {
    id: '31',
    name: 'Teatro',
    categoryId: '2',
    icon: 'theater-masks',
    color: '#4ECDC4',
  },
  {
    id: '32',
    name: 'Dança',
    categoryId: '2',
    icon: 'user-friends',
    color: '#4ECDC4',
  },
  {
    id: '33',
    name: 'Graffiti',
    categoryId: '2',
    icon: 'spray-can',
    color: '#4ECDC4',
  },
  {
    id: '34',
    name: 'Cinema',
    categoryId: '2',
    icon: 'film',
    color: '#4ECDC4',
  },

  // Mais Música (categoryId: '3', color: '#95E1D3')
  {
    id: '35',
    name: 'Bateria',
    categoryId: '3',
    icon: 'drum',
    color: '#95E1D3',
  },
  {
    id: '36',
    name: 'Violino',
    categoryId: '3',
    icon: 'music',
    color: '#95E1D3',
  },

  // Mais Tecnologia (categoryId: '4', color: '#6C5CE7')
  {
    id: '37',
    name: 'Edição de Vídeo',
    categoryId: '4',
    icon: 'video',
    color: '#6C5CE7',
  },
  {
    id: '38',
    name: '3D Modeling',
    categoryId: '4',
    icon: 'cube',
    color: '#6C5CE7',
  },
  {
    id: '39',
    name: 'Streaming',
    categoryId: '4',
    icon: 'broadcast-tower',
    color: '#6C5CE7',
  },

  // Mais Gastronomia (categoryId: '5', color: '#FDCB6E')
  {
    id: '40',
    name: 'Mixologia',
    categoryId: '5',
    icon: 'cocktail',
    color: '#FDCB6E',
  },
  {
    id: '41',
    name: 'Churrasco',
    categoryId: '5',
    icon: 'fire',
    color: '#FDCB6E',
  },
  {
    id: '42',
    name: 'Sommelier',
    categoryId: '5',
    icon: 'wine-glass',
    color: '#FDCB6E',
  },

  // Mais Natureza (categoryId: '6', color: '#00B894')
  {
    id: '43',
    name: 'Observação de Aves',
    categoryId: '6',
    icon: 'dove',
    color: '#00B894',
  },
  {
    id: '44',
    name: 'Mergulho',
    categoryId: '6',
    icon: 'swimmer',
    color: '#00B894',
  },
  {
    id: '45',
    name: 'Escalada',
    categoryId: '6',
    icon: 'mountain',
    color: '#00B894',
  },

  // Leitura & Escrita (categoryId: '7', color: '#A29BFE')
  {
    id: '46',
    name: 'Leitura',
    categoryId: '7',
    icon: 'book',
    color: '#A29BFE',
  },
  {
    id: '47',
    name: 'Escrita',
    categoryId: '7',
    icon: 'pen',
    color: '#A29BFE',
  },
  {
    id: '48',
    name: 'Poesia',
    categoryId: '7',
    icon: 'feather',
    color: '#A29BFE',
  },

  // Jogos & Tabuleiro (categoryId: '8', color: '#FD79A8')
  {
    id: '49',
    name: 'Xadrez',
    categoryId: '8',
    icon: 'chess',
    color: '#FD79A8',
  },
  {
    id: '50',
    name: 'RPG',
    categoryId: '8',
    icon: 'dice-d20',
    color: '#FD79A8',
  },
  {
    id: '51',
    name: 'Jogos de Tabuleiro',
    categoryId: '8',
    icon: 'dice',
    color: '#FD79A8',
  },
];

// Categorias de hobbies
export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export const categories: Category[] = [
  { id: '1', name: 'Esportes', icon: 'running', color: '#FF6B6B' },
  { id: '2', name: 'Artes', icon: 'palette', color: '#4ECDC4' },
  { id: '3', name: 'Música', icon: 'music', color: '#95E1D3' },
  { id: '4', name: 'Tecnologia', icon: 'laptop', color: '#6C5CE7' },
  { id: '5', name: 'Gastronomia', icon: 'utensils', color: '#FDCB6E' },
  { id: '6', name: 'Natureza', icon: 'leaf', color: '#00B894' },
  { id: '7', name: 'Leitura', icon: 'book', color: '#A29BFE' },
  { id: '8', name: 'Jogos', icon: 'dice', color: '#FD79A8' },
];
