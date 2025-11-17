import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '@/src/theme';

const { height: screenHeight } = Dimensions.get('window');
const AVATAR_SIZE = screenHeight * 0.18;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 80,
    paddingBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  avatarContainer: {
    // Sem sombra
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    backgroundColor: colors.white,
    borderWidth: 4,
    borderColor: colors.white,
  },
  placeholderAvatar: {
    backgroundColor: colors.gray200,
  },
});
