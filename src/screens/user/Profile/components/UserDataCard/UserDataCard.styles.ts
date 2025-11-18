import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography } from '@/src/theme';

const { height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    height: screenHeight * 0.25,
    backgroundColor: colors.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.gray200,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.gray200,
    marginBottom: 12,
  },
  userInfo: {
    alignItems: 'center',
  },
  name: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary,
    marginBottom: 4,
  },
  nickname: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.regular,
    color: colors.gray500,
  },
});
