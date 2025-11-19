// Sistema de Cores - HobbyMap
export const colors = {
  // Cores principais
  primary: '#C02AE5',           // Roxo principal
  primaryLight: 'rgba(192, 42, 229, 0.1)', // Primary com 10% opacity
  primaryBackground: 'rgba(192, 42, 229, 0.15)', // Primary com 15% opacity
  primaryBorder: 'rgba(192, 42, 229, 0.3)', // Primary com 30% opacity
  secondary: '#2F2F2F',         // Preto secundário
  secondaryOpacity: 'rgba(47, 47, 47, 0.9)', // Preto com 90% opacity

  // Cores base
  background: '#FFFFFF',        // Branco - fundo das páginas
  white: '#FFFFFF',
  black: '#000000',

  // Tons de cinza (para textos secundários, borders, etc)
  gray50: '#FAFAFA',
  gray100: '#F5F5F5',
  gray200: '#E5E5E5',
  gray300: '#D4D4D4',
  gray400: '#A3A3A3',
  gray500: '#737373',
  gray600: '#525252',
  gray700: '#404040',
  gray800: '#262626',
  gray900: '#171717',

  // Cores de feedback (opcional para depois)
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',

  // Cores de UI
  star: '#FBBF24',              // Amarelo da estrela de avaliação (suavizado)
  starLight: 'rgba(251, 191, 36, 0.1)',   // Star com 10% opacity
  starBackground: 'rgba(251, 191, 36, 0.15)', // Star com 15% opacity
  starBorder: 'rgba(251, 191, 36, 0.3)',  // Star com 30% opacity

  schedule: '#98Aaec',  // Azul para horário
  scheduleLight: 'rgba(152, 170, 236, 0.1)',   // Azul schedule com 10% opacity
  scheduleBackground: 'rgba(152, 170, 236, 0.15)', // Azul schedule com 15% opacity
  scheduleBorder: 'rgba(152, 170, 236, 0.3)',  // Azul schedule com 30% opacity
  scheduleHover: 'rgba(152, 170, 236, 0.08)',  // Azul schedule com 8% opacity

  price: 'rgba(0, 201, 54, 0.8)',       // Verde para preço (00C936 com 80%)

  hobby: 'hsla(136.21, 37.2%, 44.3%, 0.79)', // Verde para hobbies
  hobbyLight: 'rgba(92, 184, 92, 0.1)',   // Hobby com 10% opacity
  hobbyBackground: 'rgba(92, 184, 92, 0.15)', // Hobby com 15% opacity
  hobbyBorder: 'rgba(92, 184, 92, 0.3)',  // Hobby com 30% opacity

  phone: '#508DFF',             // Azul para telefone

  website: '#915D06',           // Marrom/laranja para website

  space: '#FF8C42',             // Laranja para espaços/locais
  spaceLight: 'rgba(255, 140, 66, 0.1)',   // Space com 10% opacity
  spaceBackground: 'rgba(255, 140, 66, 0.15)', // Space com 15% opacity
  spaceBorder: 'rgba(255, 140, 66, 0.3)',  // Space com 30% opacity

  iconBackground: 'rgba(217, 217, 217, 0.73)', // Background dos ícones de header (#D9D9D9 com 73% opacity)

  // Cores de roles/cargos do provider
  roles: {
    owner: {
      border: '#F3FF48',                    // Proprietário - borda amarela
      background: 'rgba(237, 215, 53, 0.16)', // Proprietário - fundo amarelo com 16% opacity
    },
    manager: {
      border: 'rgba(104, 229, 127, 0.5)',   // Gerente - borda verde com 50% opacity
      background: 'rgba(85, 255, 116, 0.04)', // Gerente - fundo verde com 4% opacity
    },
    instructor: {
      border: 'rgba(168, 85, 247, 0.25)',   // Instrutor - borda roxa com 25% opacity
      background: 'rgba(102, 126, 234, 0.04)', // Instrutor - fundo roxo com 4% opacity
    },
    employee: {
      border: 'rgba(64, 64, 64, 0.23)',     // Funcionário - borda cinza com 23% opacity
      background: 'rgba(85, 86, 89, 0.09)',  // Funcionário - fundo cinza com 9% opacity
    },
  },
};
