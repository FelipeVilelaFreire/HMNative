import { StyleSheet } from 'react-native';
import { colors, typography } from '@/src/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray200,
  },
  headerLeft: {
    flex: 1,
    paddingLeft: 20,
  },
  monthYear: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  todayButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: colors.primaryLight,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  todayButtonText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.primary,
  },
  navButton: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: colors.gray100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  weekDays: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  weekDayCell: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
  },
  weekDayText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
    color: colors.gray600,
    textTransform: 'uppercase',
  },
  daysGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayCell: {
    width: '14.28%', // 100% / 7 dias
    minHeight: 100,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 8,
    paddingTop: 12,
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
    fontSize: typography.fontSize.lg,
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
  menuButton: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: colors.gray100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuDropdown: {
    position: 'absolute',
    top: 80,
    right: 20,
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.gray200,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    zIndex: 1000,
    minWidth: 220,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray100,
  },
  menuItemText: {
    flex: 1,
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.secondary,
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
  weekViewGrid: {
    flex: 1,
  },
  weekGridHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray200,
    paddingBottom: 16,
    marginBottom: 0,
  },
  weekGridTimeColumn: {
    width: 60,
  },
  weekGridDayHeader: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  weekGridDayLabel: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.bold,
    color: colors.gray600,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  weekGridDayNumber: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary,
  },
  weekGridDayNumberToday: {
    color: colors.primary,
  },
  weekGridScroll: {
    flex: 1,
  },
  weekGridRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray100,
  },
  weekGridTimeCell: {
    width: 60,
    paddingVertical: 12,
    paddingRight: 8,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  weekGridTimeText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.semibold,
    color: colors.gray600,
  },
  weekGridCell: {
    flex: 1,
    minHeight: 60,
    borderLeftWidth: 1,
    borderLeftColor: colors.gray100,
    padding: 4,
  },
  weekGridCellToday: {
    // Background removido
  },
  weekGridActivity: {
    backgroundColor: colors.primary,
    borderRadius: 6,
    padding: 6,
    height: '100%',
    justifyContent: 'center',
  },
  weekGridActivityText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.semibold,
    color: colors.white,
  },
  // Day View Styles
  dayViewGrid: {
    flex: 1,
  },
  dayGridHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray200,
    paddingBottom: 16,
    marginBottom: 0,
  },
  dayGridTimeColumn: {
    width: 60,
  },
  dayGridDayHeader: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  dayGridDayLabel: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
    color: colors.gray600,
    textTransform: 'capitalize',
    marginBottom: 4,
  },
  dayGridDayNumber: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary,
  },
  dayGridDayNumberToday: {
    color: colors.primary,
  },
  dayGridScroll: {
    flex: 1,
  },
  dayGridRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray100,
  },
  dayGridTimeCell: {
    width: 60,
    paddingVertical: 12,
    paddingRight: 8,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  dayGridTimeText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.semibold,
    color: colors.gray600,
  },
  dayGridCell: {
    flex: 1,
    minHeight: 60,
    padding: 4,
  },
  dayGridActivity: {
    backgroundColor: colors.primary,
    borderRadius: 6,
    padding: 8,
    height: '100%',
    justifyContent: 'center',
  },
  dayGridActivityText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.white,
  },
});
