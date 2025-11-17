import { StyleSheet } from 'react-native';
import { colors, typography } from '@/src/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 16,
    width: '100%',
  },
  section: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 80,
  },
  sectionWithBorder: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: colors.gray300,
    paddingHorizontal: 20,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  distanceText: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    color: colors.secondary,
  },
  subtitleText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.regular,
    color: colors.gray600,
    marginTop: 2,
  },
  ratingText: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary,
  },
  starsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    marginTop: 4,
  },
  reviewsCountText: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    color: colors.secondary,
  },
});
