import { StyleSheet } from 'react-native';
import { colors, typography } from '@/src/theme';

// Tamanhos do ícone no header
export const ICON_SIZE_28 = 28;
export const MIN_ICON_SIZE = 22;

// Alturas do header
export const MAX_HEADER_HEIGHT = 104; // paddingTop(60) + paddingBottom(16) + icon(28)
export const MIN_HEADER_HEIGHT = 68; // paddingTop(40) + paddingBottom(8) + icon(20)

export const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 16,
    paddingHorizontal: 24,
    backgroundColor: colors.background,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notificationButton: {
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary,
  },
});
