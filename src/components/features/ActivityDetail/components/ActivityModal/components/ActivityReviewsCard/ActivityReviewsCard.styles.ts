import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography } from '@/src/theme';

const { width: screenWidth } = Dimensions.get('window');
export const CARD_WIDTH = screenWidth * 0.7; // 70% da largura da tela

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.medium,
    color: colors.secondary,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 10,
    gap: 4,
    borderWidth: 1,
    borderColor: colors.gray300,
    borderRadius: 6,
  },
  addButtonText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.regular,
    color: colors.gray600,
  },
  addReviewWrapper: {
    width: '100%',
  },
  carouselContainer: {
    paddingLeft: 0,
  },
  cardWrapper: {
    width: CARD_WIDTH,
  },
});
