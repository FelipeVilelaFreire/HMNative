import { StyleSheet } from 'react-native';
import { colors, typography } from '@/src/theme';

export const AVATAR_SIZE = 48;

const CARD_HEIGHT = 200;

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    padding: 16,
    marginRight: 16,
    borderRightWidth: 1,
    borderRightColor: colors.gray300,
    height: CARD_HEIGHT,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.secondary,
  },
  userNickname: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.regular,
    color: colors.gray600,
    marginTop: 2,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    marginRight: 8,
  },
  daysAgoText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.regular,
    color: colors.gray600,
  },
  commentContainer: {
    flex: 1,
  },
  comment: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.regular,
    color: colors.secondary,
    lineHeight: 20,
  },
  expandButton: {
    marginTop: 4,
  },
  expandButtonText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.primary,
  },
});
