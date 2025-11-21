import { StyleSheet } from 'react-native';
import { colors, typography } from '@/src/theme';

export const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    backgroundColor: colors.white,
    borderRadius: 24,
    padding: 28,
    width: '100%',
    maxWidth: 380,
    alignItems: 'center',
  },
  iconContainer: {
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary,
    marginBottom: 16,
  },
  message: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.gray600,
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 24,
    paddingHorizontal: 8,
  },
  subtext: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.gray500,
    textAlign: 'center',
    marginBottom: 28,
  },
  buttons: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 14,
    backgroundColor: colors.gray100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.gray600,
  },
  confirmButton: {
    flex: 1.5,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.white,
  },
});
