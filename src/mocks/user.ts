// Mock data para usuário - HobbyMap

export interface User {
  id: string;
  name: string;
  nickname: string;
  avatar: string;
  email: string;
}

export const currentUser: User = {
  id: '1',
  name: 'Felipe Freire',
  nickname: '@felipefreire',
  avatar: 'https://i.pravatar.cc/300?img=12',
  email: 'felipe.freire@example.com',
};
