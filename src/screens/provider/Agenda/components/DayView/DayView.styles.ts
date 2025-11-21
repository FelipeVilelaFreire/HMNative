import { StyleSheet } from 'react-native';
import { colors, typography } from '@/src/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray200,
    paddingBottom: 12,
  },
  timeColumn: {
    width: 50,
  },
  dayHeader: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 4,
  },
  dayLabel: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
    color: colors.gray600,
    textTransform: 'capitalize',
    marginBottom: 2,
  },
  dayNumber: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary,
  },
  dayNumberToday: {
    color: colors.primary,
  },
  scroll: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray100,
  },
  timeCell: {
    width: 50,
    paddingVertical: 10,
    paddingRight: 8,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  timeText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.semibold,
    color: colors.gray600,
  },
  cell: {
    flex: 1,
    minHeight: 90,
    padding: 4,
  },
  activity: {
    backgroundColor: colors.primary,
    borderRadius: 6,
    padding: 8,
    minHeight: 40,
    justifyContent: 'center',
  },
  activityText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.white,
  },
});
