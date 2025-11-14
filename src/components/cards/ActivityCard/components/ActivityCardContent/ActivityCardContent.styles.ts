import { StyleSheet } from 'react-native';
import { colors, typography } from '@/src/theme';

// Tamanhos dos ícones
export const ICON_SIZE_18 = 18;
export const ICON_SIZE_20 = 20;
export const ICON_SIZE_22 = 22;
export const ICON_SIZE_24 = 24;

export const styles = StyleSheet.create({
  content: {
    height: '30%',
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.medium,
    color: colors.secondary,
    flex: 1,
    marginRight: 8,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: typography.fontSize.sm,
    color: colors.secondary,
    fontWeight: typography.fontWeight.medium,
    marginLeft: 6,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  locationName: {
    fontSize: typography.fontSize.base,
    color: colors.secondary,
    marginLeft: 6,
  },
  distance: {
    fontSize: typography.fontSize.sm,
    color: colors.gray500,
    marginLeft: 16,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scheduleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  scheduleText: {
    fontSize: typography.fontSize.sm,
    color: colors.secondary,
    marginLeft: 6,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    fontSize: typography.fontSize.sm,
    color: colors.secondary,
    marginLeft: 6,
  },
  // Estilos para variant medium (redução proporcional ~65%)
  contentMedium: {
    height: '35%',
    paddingHorizontal: 2,
    paddingVertical: 6,
  },
  titleMedium: {
    fontSize: typography.fontSize.xs,
  },
  ratingTextMedium: {
    fontSize: 10,
  },
  locationNameMedium: {
    fontSize: 10,
  },
  distanceMedium: {
    fontSize: 10,
    marginLeft: 8,
  },
  scheduleTextMedium: {
    fontSize: 9,
  },
  priceTextMedium: {
    fontSize: 9,
  },
});
