// Mock de provedores/academias que o usuário faz parte
export interface UserProvider {
  id: string;
  name: string;
  type: 'gym' | 'studio' | 'club' | 'other';
  role: 'owner' | 'admin' | 'manager' | 'instructor';
  imageUrl?: string;
  address: string;
}

export const userProviders: UserProvider[] = [
  {
    id: 'p1',
    name: 'Academia Smart Fit',
    type: 'gym',
    role: 'admin',
    address: 'Av. Paulista, 1000 - São Paulo, SP',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop',
  },
  {
    id: 'p2',
    name: 'Estúdio Yoga Zen',
    type: 'studio',
    role: 'owner',
    address: 'Rua Augusta, 500 - São Paulo, SP',
    imageUrl: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=400&fit=crop',
  },
  {
    id: 'p3',
    name: 'CrossFit Warriors',
    type: 'gym',
    role: 'manager',
    address: 'Av. Brigadeiro Faria Lima, 2000 - São Paulo, SP',
    imageUrl: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=400&fit=crop',
  },
];
