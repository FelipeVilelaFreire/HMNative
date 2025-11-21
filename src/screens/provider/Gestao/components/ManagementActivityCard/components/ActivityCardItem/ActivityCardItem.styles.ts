import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography } from '@/src/theme';

const { width: screenWidth } = Dimensions.get('window');

// Mesma largura do ActivityCard big
const CARD_WIDTH = screenWidth - 48;

export const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.gray300,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    backgroundColor: colors.white,
  },
  divider: {
    height: 1,
    backgroundColor: colors.gray200,
  },
  actionBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.gray50,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: colors.primaryLight,
  },
  editButtonText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.primary,
  },
  deleteButton: {
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
  },
});
