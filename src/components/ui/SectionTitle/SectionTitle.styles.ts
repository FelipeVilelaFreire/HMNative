import { StyleSheet } from 'react-native';
import { colors, typography } from '@/src/theme';

export const styles = StyleSheet.create({
  title: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.regular,
    color: colors.secondary,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
});
