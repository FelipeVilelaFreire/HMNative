import { StyleSheet } from 'react-native';
import { colors } from '@/src/theme';

export const styles = StyleSheet.create({
  imageContainer: {
    height: '70%',
    width: '100%',
    position: 'relative',
  },
  imageContainerMedium: {
    height: '65%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  imageMedium: {
    borderRadius: 10,
  },
  favoriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    padding: 8,
  },
  favoriteButtonMedium: {
    top: 6,
    right: 6,
    padding: 4,
  },
});
