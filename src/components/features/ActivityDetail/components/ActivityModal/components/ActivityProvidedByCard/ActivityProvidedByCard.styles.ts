import { StyleSheet } from 'react-native';
import { colors, typography } from '@/src/theme';

export const PROVIDER_IMAGE_SIZE = 80;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  sectionTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.medium,
    color: colors.secondary,
    marginBottom: 12,
  },
  card: {
    flexDirection: 'row',
    paddingVertical: 42,
    backgroundColor: colors.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.gray300,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  imageSection: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  providerImage: {
    width: PROVIDER_IMAGE_SIZE,
    height: PROVIDER_IMAGE_SIZE,
    borderRadius: PROVIDER_IMAGE_SIZE / 2,
  },
  infoSection: {
    flex: 1,
    paddingVertical: 16,
    paddingRight: 16,
    justifyContent: 'center',
  },
  providerName: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.medium,
    color: colors.secondary,
    marginBottom: 12,
    textAlign: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statSectionWithBorder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderColor: colors.gray300,
  },
  ratingText: {
    fontSize: typography.fontSize.xl,
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
  reviewsLabel: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.regular,
    color: colors.gray600,
    marginTop: 2,
  },
});
