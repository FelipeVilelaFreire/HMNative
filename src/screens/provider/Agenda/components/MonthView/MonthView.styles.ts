import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography } from '@/src/theme';

const { height: screenHeight } = Dimensions.get('window');
const DAY_CELL_HEIGHT = Math.floor((screenHeight - 340) / 6);

export const styles = StyleSheet.create({
  weekDays: {
    flexDirection: 'row',
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  weekDayCell: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  weekDayText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.bold,
    color: colors.gray600,
    textTransform: 'uppercase',
  },
  daysGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 4,
  },
  dayCell: {
    width: '14.28%',
    height: DAY_CELL_HEIGHT,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 4,
    paddingTop: 8,
  },
  todayCell: {
    backgroundColor: colors.primaryLight,
    borderRadius: 12,
  },
  selectedCell: {
    backgroundColor: colors.primary,
    borderRadius: 12,
  },
  dayText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.secondary,
  },
  todayText: {
    color: colors.primary,
    fontWeight: typography.fontWeight.bold,
  },
  selectedText: {
    color: colors.white,
    fontWeight: typography.fontWeight.bold,
  },
  activityIndicator: {
    marginTop: 6,
    paddingHorizontal: 6,
    paddingVertical: 3,
    backgroundColor: 'rgba(102, 126, 234, 0.1)',
    borderRadius: 6,
    width: '100%',
  },
  activityText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    color: colors.primary,
    textAlign: 'center',
  },
  activityTextSelected: {
    color: colors.white,
  },
});
