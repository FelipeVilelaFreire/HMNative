import { StyleSheet } from 'react-native';
import { colors, typography } from '@/src/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 4,
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray200,
    paddingBottom: 8,
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
    fontSize: 10,
    fontWeight: typography.fontWeight.bold,
    color: colors.gray600,
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  dayNumber: {
    fontSize: typography.fontSize.sm,
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
    paddingVertical: 8,
    paddingRight: 6,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  timeText: {
    fontSize: 11,
    fontWeight: typography.fontWeight.semibold,
    color: colors.gray600,
  },
  cell: {
    flex: 1,
    minHeight: 90,
    borderLeftWidth: 1,
    borderLeftColor: colors.gray100,
    padding: 2,
  },
  activity: {
    backgroundColor: colors.primary,
    borderRadius: 4,
    padding: 4,
    minHeight: 36,
    justifyContent: 'center',
  },
  activityText: {
    fontSize: 9,
    fontWeight: typography.fontWeight.semibold,
    color: colors.white,
    textAlign: 'center',
  },
});
