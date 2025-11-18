// Sistema de Cores - HobbyMap
export const colors = {
  // Cores principais
  primary: '#C02AE5',           // Roxo principal
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
  star: '#F8DB00',              // Amarelo da estrela de avaliação
  schedule: '#98Aaec',  // Azul para horário
  price: 'rgba(0, 201, 54, 0.8)',       // Verde para preço (00C936 com 80%)
  hobby: 'hsla(136.21, 37.2%, 44.3%, 0.79)', // Verde para hobbies
  phone: '#508DFF',             // Azul para telefone
  website: '#915D06',           // Marrom/laranja para website
  space: '#FF8C42',             // Laranja para espaços/locais
  iconBackground: 'rgba(217, 217, 217, 0.73)', // Background dos ícones de header (#D9D9D9 com 73% opacity)
  primaryLight: 'rgba(192, 42, 229, 0.1)', // Primary com 10% opacity

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
