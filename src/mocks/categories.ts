// Mock data para categorias de hobbies - HobbyMap

export interface Category {
  id: string;
  name: string;
  color: string;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Esportes',
    color: '#FF6B6B', // Vermelho vibrante
  },
  {
    id: '2',
    name: 'Artes',
    color: '#4ECDC4', // Turquesa
  },
  {
    id: '3',
    name: 'Música',
    color: '#95E1D3', // Verde menta
  },
  {
    id: '4',
    name: 'Tecnologia',
    color: '#6C5CE7', // Roxo
  },
  {
    id: '5',
    name: 'Gastronomia',
    color: '#FDCB6E', // Amarelo
  },
  {
    id: '6',
    name: 'Natureza',
    color: '#00B894', // Verde
  },
];
