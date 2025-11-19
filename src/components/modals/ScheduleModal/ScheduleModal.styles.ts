import { StyleSheet } from 'react-native';
import { colors, typography } from '@/src/theme';

export const styles = StyleSheet.create({
  title: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary,
  },

  // ━━━━━━━━━━━ TABS ━━━━━━━━━━━
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 12,
    gap: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray200,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderWidth: 1.5,
    borderColor: colors.gray200,
  },
  tabButtonActive: {
    backgroundColor: colors.scheduleLight,
    borderColor: colors.schedule,
  },
  tabButtonText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.gray600,
  },
  tabButtonTextActive: {
    color: colors.schedule,
  },

  // ━━━━━━━━━━━ MODE WARNING ━━━━━━━━━━━
  modeWarning: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 24,
    marginTop: 16,
    marginBottom: 8,
    backgroundColor: 'rgba(152, 170, 236, 0.15)', // Schedule background mais forte
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: 'rgba(152, 170, 236, 0.5)', // Schedule border mais forte
  },
  modeWarningText: {
    flex: 1,
    fontSize: typography.fontSize.xs,
    color: colors.gray700,
    lineHeight: 18,
  },
  modeWarningTextBold: {
    fontWeight: typography.fontWeight.bold,
    color: colors.schedule,
  },

  // ━━━━━━━━━━━ CONTENT ━━━━━━━━━━━
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },

  // ━━━━━━━━━━━ TAB 1: PERÍODOS ━━━━━━━━━━━
  selectAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: colors.scheduleHover,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.scheduleBorder,
  },
  selectAllText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.schedule,
  },
  scheduleList: {
    gap: 12,
  },
  scheduleItem: {
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
  scheduleItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  scheduleIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: colors.scheduleBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scheduleItemInfo: {
    flex: 1,
  },
  scheduleItemLabel: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary,
    marginBottom: 4,
  },
  scheduleItemDescription: {
    fontSize: typography.fontSize.sm,
    color: colors.gray600,
  },

  // ━━━━━━━━━━━ TAB 2: SEU HORÁRIO (TABLE) ━━━━━━━━━━━
  tableContainer: {
    flex: 1,
  },
  tableDescription: {
    fontSize: typography.fontSize.sm,
    color: colors.gray600,
    marginBottom: 16,
    textAlign: 'center',
  },
  scheduleTable: {
    borderWidth: 1,
    borderColor: colors.gray200,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 12,
  },
  tableHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray200,
    backgroundColor: colors.gray100,
  },
  headerHourCell: {
    width: 50,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerDayCell: {
    flex: 1,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.semibold,
    color: colors.secondary,
  },
  headerTextClickable: {
    color: colors.schedule,
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderBottomColor: colors.gray100,
  },
  hourCell: {
    width: 50,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hourText: {
    fontSize: 10,
    fontWeight: typography.fontWeight.regular,
    color: colors.gray500,
  },
  hourTextClickable: {
    color: colors.schedule,
    fontWeight: typography.fontWeight.semibold,
  },
  dayCell: {
    flex: 1,
    height: 28,
    borderWidth: 1,
    borderColor: colors.gray200,
    backgroundColor: colors.white,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  dayCellInSchedule: {
    backgroundColor: colors.scheduleHover,
    borderColor: colors.scheduleBorder,
  },
  dayCellSelected: {
    flex: 1,
    height: 28,
    backgroundColor: '#98Aaec', // Cor azul schedule
    borderColor: '#98Aaec',
    borderWidth: 2,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    opacity: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 4,
  },
  tableLegend: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: colors.gray50,
    borderRadius: 8,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  legendBox: {
    width: 16,
    height: 16,
    borderRadius: 3,
  },
  legendText: {
    fontSize: typography.fontSize.xs,
    color: colors.gray600,
  },
  extraHoursButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 10,
    backgroundColor: colors.white,
    borderTopWidth: 1.5,
    borderTopColor: colors.schedule,
  },
  extraHoursText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    color: colors.schedule,
  },

  // ━━━━━━━━━━━ TAB 3: PERSONALIZADO (OLD - REMOVED) ━━━━━━━━━━━
  customContainer: {
    flex: 1,
  },
  customSubtitle: {
    fontSize: typography.fontSize.sm,
    color: colors.gray600,
    marginBottom: 16,
    textAlign: 'center',
  },
  addTimeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    marginBottom: 24,
    borderRadius: 12,
    backgroundColor: colors.schedule,
    shadowColor: colors.schedule,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  addTimeButtonText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.white,
  },
  customHoursList: {
    marginTop: 8,
  },
  customHoursListTitle: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.secondary,
    marginBottom: 12,
  },
  customHoursGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  customHourChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: colors.schedule,
    backgroundColor: colors.scheduleLight,
  },
  customHourChipText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.schedule,
  },
  removeButton: {
    marginLeft: 4,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
    paddingHorizontal: 32,
  },
  emptyStateText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.gray500,
    marginTop: 16,
    textAlign: 'center',
  },
  emptyStateSubtext: {
    fontSize: typography.fontSize.sm,
    color: colors.gray400,
    marginTop: 8,
    textAlign: 'center',
  },

  // ━━━━━━━━━━━ TIME PICKER MODAL ━━━━━━━━━━━
  timePickerContent: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  timePickerDescription: {
    fontSize: typography.fontSize.sm,
    color: colors.gray600,
    marginBottom: 16,
    textAlign: 'center',
  },
  timePickerGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
  },
  timeSlotChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: colors.schedule,
    backgroundColor: colors.scheduleLight,
    minWidth: 90,
    justifyContent: 'center',
  },
  timeSlotChipDisabled: {
    borderColor: colors.gray300,
    backgroundColor: colors.gray100,
    opacity: 0.6,
  },
  timeSlotChipText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.schedule,
  },
  timeSlotChipTextDisabled: {
    color: colors.gray500,
  },

  // ━━━━━━━━━━━ FOOTER ━━━━━━━━━━━
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderTopWidth: 1,
    borderTopColor: colors.gray200,
  },
  clearButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: colors.gray300,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearButtonText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.secondary,
  },
  applyButton: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: colors.schedule,
    shadowColor: colors.schedule,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  applyButtonText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.white,
  },
});
