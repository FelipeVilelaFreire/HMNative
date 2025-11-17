import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography } from '@/src/theme';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const ICON_SIZE = 22;
export const ARROW_SIZE = 18;

export const styles = StyleSheet.create({
  container: {
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
    paddingVertical: 20,
    paddingHorizontal: 20,
    minHeight: screenHeight * 0.08,
  },
  expanded: {
    minHeight: screenHeight * 0.15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    height: 28,
  },
  title: {
    flex: 1,
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.secondary,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    width: '100%',
    height: screenHeight * 0.04,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
  },
  editButtonText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.primary,
  },
  content: {
  },
  hobbiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    paddingHorizontal: 4,
    paddingTop: 16,
  },
  modalTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary,
    marginBottom: 12,
    textAlign: 'center',
  },
  modalText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.regular,
    color: colors.gray600,
    textAlign: 'center',
  },
});
