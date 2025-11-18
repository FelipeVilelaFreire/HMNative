import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography } from '@/src/theme';

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
    position: 'relative',
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
  editButton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
