import { StyleSheet } from 'react-native';
import { colors, textStyles, cardStyle } from '@/src/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    ...cardStyle,
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 24,
  },
  title: {
    ...textStyles.h2,
    color: colors.secondary,
    marginBottom: 24,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    ...textStyles.body2,
    color: colors.secondary,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    ...textStyles.body1,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 8,
    padding: 12,
    paddingHorizontal: 16,
    color: colors.secondary,
    backgroundColor: colors.white,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    ...textStyles.body2,
    color: colors.primary,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  primaryButtonText: {
    ...textStyles.button,
    color: colors.white,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.gray300,
  },
  dividerText: {
    ...textStyles.body2,
    color: colors.gray500,
    marginHorizontal: 12,
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  secondaryButtonText: {
    ...textStyles.button,
    color: colors.primary,
  },
  footer: {
    ...textStyles.caption,
    color: colors.gray500,
    textAlign: 'center',
    marginTop: 24,
    lineHeight: 18,
  },
});
