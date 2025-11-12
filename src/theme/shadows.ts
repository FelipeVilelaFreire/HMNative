// Sistema de Sombras e Bordas - HobbyMap
import { ViewStyle } from 'react-native';

// Sombra padrão para cards (usada em ActivityCard, CategoryChip, etc)
export const cardShadow: ViewStyle = {
  // Box Shadow: X:0, Y:4, Blur:4, Color:#000000 25%
  shadowColor: '#000000',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 4, // Android
};

// Borda padrão para cards
export const cardBorder: ViewStyle = {
  borderWidth: 1,
  borderColor: 'rgba(0, 0, 0, 0.04)', // #000000 com 4% opacity
};

// Estilo completo do card (sombra + borda)
export const cardStyle: ViewStyle = {
  ...cardShadow,
  ...cardBorder,
};

// Sombra do footer (específica)
export const footerShadow: ViewStyle = {
  // Box Shadow: X:0, Y:-2, Blur:4, Spread:0, Color:#000000 25%
  shadowColor: '#000000',
  shadowOffset: {
    width: 0,
    height: -2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 8, // Android (maior para shadow pra cima)
};
