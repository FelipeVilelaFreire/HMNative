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
];
