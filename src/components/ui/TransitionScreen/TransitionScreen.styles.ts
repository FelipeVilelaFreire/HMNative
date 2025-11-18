import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography } from '@/src/theme';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width,
    height,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginBottom: 32,
  },
  title: {
    fontSize: 48,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
    letterSpacing: -1,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.medium,
    color: colors.gray600,
    marginBottom: 40,
  },
  iconsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
  iconBox: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
