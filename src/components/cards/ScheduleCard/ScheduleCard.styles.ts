import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography } from '@/src/theme';

const { height: screenHeight } = Dimensions.get('window');

export const ICON_SIZE = 22;
export const ARROW_SIZE = 18;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.gray200,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    paddingVertical: 20,
    paddingHorizontal: 20,
    minHeight: screenHeight * 0.08,
  },
  expanded: {
    minHeight: screenHeight * 0.15,
    marginBottom: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    height: 28,
  },
  title: {
    flex: 1,
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.secondary,
  },
  content: {
  },
  editButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1.5,
    borderColor: colors.schedule,
    borderRadius: 8,
    backgroundColor: colors.white,
  },
  editButtonText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.schedule,
  },
  scheduleContainer: {
    borderWidth: 1,
    borderColor: colors.gray200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderBottomColor: colors.gray100,
  },
  hourCell: {
    width: 50,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hourText: {
    fontSize: 10,
    fontWeight: typography.fontWeight.regular,
    color: colors.gray500,
  },
  dayCell: {
    flex: 1,
    height: 26,
    borderWidth: 0.3,
    borderColor: colors.gray100,
    backgroundColor: colors.white,
    margin: 2,
  },
  dayCellActive: {
    backgroundColor: colors.schedule,
    borderColor: colors.schedule,
    borderRadius: 4,
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
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerDayCell: {
    flex: 1,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.semibold,
    color: colors.secondary,
  },
  extraHoursButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 10,
    marginTop: 0,
    marginBottom: 8,
    marginHorizontal: 0,
    backgroundColor: colors.white,
    borderWidth: 1.5,
    borderColor: colors.schedule,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  extraHoursText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    color: colors.schedule,
  },
});
