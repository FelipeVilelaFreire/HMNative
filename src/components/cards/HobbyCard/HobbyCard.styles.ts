import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography } from '@/src/theme';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    width: screenWidth * 0.37,
    height: screenHeight * 0.04,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 12,
    borderWidth: 1.2,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  deleteButton: {
    marginLeft: 'auto',
    paddingLeft: 4,
  },
  addContainer: {
    borderColor: colors.primary,
    borderStyle: 'dashed',
  },
  name: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.secondary,
  },
  addText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.primary,
  },
});
