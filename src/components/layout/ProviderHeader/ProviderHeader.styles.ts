import { StyleSheet, Platform } from 'react-native';
import { colors, typography } from '@/src/theme';

export const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 80 : 80,
    paddingBottom: 12,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  providerName: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary,
    textAlign: 'center',
  },
});
