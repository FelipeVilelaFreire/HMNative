import { StyleSheet } from 'react-native';
import { colors } from '@/src/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
  },
  cardsContainer: {
    gap: 20,
    alignItems: 'center',
    marginBottom: 32,
  },
  cardsRowContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 8,
    justifyContent: 'center',
    marginBottom: 32,
  },
});
