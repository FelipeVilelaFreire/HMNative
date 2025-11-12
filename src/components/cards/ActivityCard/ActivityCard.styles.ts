import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '@/src/theme';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// Big Card: 92% da largura (16px de padding lateral)
const BIG_CARD_WIDTH = screenWidth - 32;
const BIG_CARD_HEIGHT = screenHeight * 0.5;

// Medium Card: 40% da largura, 28% da altura
const MEDIUM_CARD_WIDTH = screenWidth * 0.4;
const MEDIUM_CARD_HEIGHT = screenHeight * 0.28;

export const styles = StyleSheet.create({
  // Estilos base do card
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    overflow: 'hidden',
  },

  // Variant: Big (92% largura, 50% altura)
  cardBig: {
    width: BIG_CARD_WIDTH,
    height: BIG_CARD_HEIGHT,
    marginHorizontal: 16,
  },

  // Variant: Medium (40% largura, 28% altura)
  cardMedium: {
    width: MEDIUM_CARD_WIDTH,
    height: MEDIUM_CARD_HEIGHT,
    borderRadius: 10,
  },
});
