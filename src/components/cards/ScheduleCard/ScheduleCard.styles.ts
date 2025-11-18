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
  scheduleContainer: {
    marginTop: 28,
    borderWidth: 1,
    borderColor: colors.gray200,
    borderRadius: 8,
    overflow: 'hidden',
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
    paddingVertical: 12,
    marginTop: 8,
    backgroundColor: colors.gray50,
    borderWidth: 1,
    borderColor: colors.gray200,
    borderRadius: 8,
  },
  extraHoursText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    color: colors.schedule,
  },
});
