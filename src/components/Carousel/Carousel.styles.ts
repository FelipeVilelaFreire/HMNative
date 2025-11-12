import { StyleSheet } from 'react-native';
import { colors } from '@/src/theme';

export const styles = StyleSheet.create({
  carouselContainer: {},
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.secondary,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  container: {
    paddingVertical: 8,
  },
  cardWrapper: {
    marginRight: 16,
  },
  firstCard: {
    marginLeft: 16,
  },
  lastCard: {
    marginRight: 16,
  },
});
