import { StyleSheet } from 'react-native';
import { colors, textStyles } from '@/src/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    paddingBottom: 16,
    paddingHorizontal: 16,
    gap: 8,
    backgroundColor: colors.background,
  },
  locationText: {
    fontSize: 14,
    color: colors.secondary,
    fontWeight: '500',
  },
});
