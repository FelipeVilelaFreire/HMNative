// Mock data para Gestão do Provider

export interface Activity {
  id: string;
  name: string;
  icon: string;
  spaceId: string;
  spaceName: string;
  price: number;
  duration: number; // em minutos
  instructorId?: string;
  instructorName?: string;
  color: string;
}

// Tipos de função/cargo
export type RoleType = 'owner' | 'manager' | 'instructor' | 'employee';

// Tipos de permissão
export type Permission = 'edit_team' | 'manage_activities' | 'edit_establishment';

// Labels das permissões para exibição
export const permissionLabels: Record<Permission, string> = {
  edit_team: 'Editar Equipe',
  manage_activities: 'Gerenciar Atividades',
  edit_establishment: 'Editar Estabelecimento',
};

// Labels das funções para exibição
export const roleLabels: Record<RoleType, string> = {
  owner: 'Proprietário',
  manager: 'Gerente',
  instructor: 'Instrutor',
  employee: 'Funcionário',
};

export interface TeamMember {
  id: string;
  name: string;
  nickname: string;
  roleType: RoleType;
  avatar?: string;
  phone: string;
  email: string;
  permissions: Permission[];
  activities: string[]; // IDs das atividades que pode ministrar
  isActive: boolean;
}

export interface Space {
  id: string;
  name: string;
  type: string; // Quadra, Sala, Piscina, etc.
  capacity: number;
  icon: string;
  color: string;
  amenities: string[]; // Vestiário, Ar-condicionado, etc.
}

// Mock de Atividades
export const activities: Activity[] = [
  {
    id: 'a1',
    name: 'Futebol',
    icon: 'futbol',
    spaceId: 's1',
    spaceName: 'Quadra 1',
    price: 100,
    duration: 60,
    instructorId: 't1',
    instructorName: 'João Silva',
    color: '#10B981',
  },
  {
    id: 'a2',
    name: 'Yoga',
    icon: 'spa',
    spaceId: 's2',
    spaceName: 'Sala 2',
    price: 50,
    duration: 90,
    instructorId: 't2',
    instructorName: 'Maria Santos',
    color: '#8B5CF6',
  },
  {
    id: 'a3',
    name: 'Natação',
    icon: 'swimmer',
    spaceId: 's3',
    spaceName: 'Piscina Olímpica',
    price: 80,
    duration: 60,
    instructorId: 't3',
    instructorName: 'Pedro Costa',
    color: '#3B82F6',
  },
  {
    id: 'a4',
    name: 'Vôlei',
    icon: 'volleyball-ball',
    spaceId: 's1',
    spaceName: 'Quadra 1',
    price: 90,
    duration: 60,
    instructorId: 't1',
    instructorName: 'João Silva',
    color: '#F59E0B',
  },
];

// Mock de Equipe
export const teamMembers: TeamMember[] = [
  {
    id: 't0',
    name: 'Felipe Freire',
    nickname: 'felipefreire',
    roleType: 'owner',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    phone: '(11) 99999-0000',
    email: 'felipe@hobbymap.com',
    permissions: ['edit_team', 'manage_activities', 'edit_establishment'],
    activities: [],
    isActive: true,
  },
  {
    id: 't1',
    name: 'João Silva',
    nickname: 'joaosilva',
    roleType: 'manager',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    phone: '(11) 98765-4321',
    email: 'joao@hobbymap.com',
    permissions: ['edit_team', 'manage_activities'],
    activities: ['a1', 'a4'],
    isActive: true,
  },
  {
    id: 't2',
    name: 'Maria Santos',
    nickname: 'mariasantos',
    roleType: 'instructor',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    phone: '(11) 98765-4322',
    email: 'maria@hobbymap.com',
    permissions: ['manage_activities'],
    activities: ['a2'],
    isActive: true,
  },
  {
    id: 't3',
    name: 'Pedro Costa',
    nickname: 'pedrocosta',
    roleType: 'instructor',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    phone: '(11) 98765-4323',
    email: 'pedro@hobbymap.com',
    permissions: ['manage_activities'],
    activities: ['a3'],
    isActive: true,
  },
  {
    id: 't4',
    name: 'Ana Oliveira',
    nickname: 'anaoliveira',
    roleType: 'employee',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    phone: '(11) 98765-4324',
    email: 'ana@hobbymap.com',
    permissions: [],
    activities: [],
    isActive: true,
  },
  {
    id: 't5',
    name: 'Carlos Ferreira',
    nickname: 'carlosferreira',
    roleType: 'employee',
    avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face',
    phone: '(11) 98765-4325',
    email: 'carlos@hobbymap.com',
    permissions: [],
    activities: [],
    isActive: false,
  },
];

// Mock de Espaços
export const spaces: Space[] = [
  {
    id: 's1',
    name: 'Quadra 1',
    type: 'Quadra',
    capacity: 20,
    icon: 'futbol',
    color: '#10B981',
    amenities: ['Vestiário', 'Iluminação', 'Rede'],
  },
  {
    id: 's2',
    name: 'Sala 2',
    type: 'Sala',
    capacity: 15,
    icon: 'spa',
    color: '#8B5CF6',
    amenities: ['Ar-condicionado', 'Espelhos', 'Som'],
  },
  {
    id: 's3',
    name: 'Piscina Olímpica',
    type: 'Piscina',
    capacity: 30,
    icon: 'swimmer',
    color: '#3B82F6',
    amenities: ['Vestiário', 'Aquecimento', 'Raias'],
  },
];
