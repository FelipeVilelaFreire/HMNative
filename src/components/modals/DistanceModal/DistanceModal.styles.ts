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
  distanceList: {
    gap: 12,
  },
  distanceItem: {
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
  distanceItemActive: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryLight,
  },
  distanceItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  distanceIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: colors.gray100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  distanceIconContainerActive: {
    backgroundColor: colors.white,
  },
  distanceItemInfo: {
    flex: 1,
  },
  distanceItemLabel: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary,
    marginBottom: 4,
  },
  distanceItemLabelActive: {
    color: colors.primary,
  },
  distanceItemDescription: {
    fontSize: typography.fontSize.sm,
    color: colors.gray600,
  },
  customDistanceContainer: {
    marginTop: 8,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.gray200,
  },
  dividerText: {
    fontSize: typography.fontSize.sm,
    color: colors.gray500,
    marginHorizontal: 16,
    fontWeight: typography.fontWeight.medium,
  },
  customDistanceCard: {
    backgroundColor: colors.gray50,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.gray200,
  },
  customDistanceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  customDistanceTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semiBold,
    color: colors.secondary,
  },
  customDistanceInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  customDistanceInput: {
    flex: 1,
    height: 52,
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: colors.gray300,
    paddingHorizontal: 16,
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semiBold,
    color: colors.secondary,
  },
  customDistanceUnit: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semiBold,
    color: colors.gray600,
  },
  customDistanceButton: {
    width: 52,
    height: 52,
    borderRadius: 12,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customDistanceButtonDisabled: {
    backgroundColor: colors.gray300,
  },
  customDistanceHint: {
    fontSize: typography.fontSize.xs,
    color: colors.gray500,
    marginTop: 12,
  },
});
