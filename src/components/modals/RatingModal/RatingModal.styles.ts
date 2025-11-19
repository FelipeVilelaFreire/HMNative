import { StyleSheet } from 'react-native';
import { colors, typography } from '@/src/theme';

export const styles = StyleSheet.create({
  title: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  description: {
    fontSize: typography.fontSize.sm,
    color: colors.gray600,
    marginBottom: 24,
    lineHeight: 20,
  },
  ratingList: {
    gap: 12,
  },
  ratingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: colors.gray200,
    backgroundColor: colors.white,
  },
  ratingItemActive: {
    borderColor: colors.star,
    backgroundColor: colors.starLight,
  },
  ratingItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  ratingIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: colors.gray100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingIconContainerActive: {
    backgroundColor: colors.starBackground,
  },
  ratingItemInfo: {
    flex: 1,
  },
  ratingItemLabel: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary,
    marginBottom: 4,
  },
  ratingItemLabelActive: {
    color: colors.star,
  },
  ratingItemDescription: {
    fontSize: typography.fontSize.sm,
    color: colors.gray600,
  },
});
