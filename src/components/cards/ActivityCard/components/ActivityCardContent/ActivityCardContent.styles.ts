import { StyleSheet } from 'react-native';
import { colors, textStyles } from '@/src/theme';

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
    fontSize: 22,
    fontWeight: '500',
    color: colors.secondary,
    flex: 1,
    marginRight: 8,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 15,
    color: colors.secondary,
    fontWeight: '500',
    marginLeft: 6,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  locationName: {
    fontSize: 16,
    color: colors.secondary,
    marginLeft: 6,
  },
  distance: {
    fontSize: 15,
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
    fontSize: 14,
    color: colors.secondary,
    marginLeft: 6,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 14,
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
    fontSize: 12,
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
