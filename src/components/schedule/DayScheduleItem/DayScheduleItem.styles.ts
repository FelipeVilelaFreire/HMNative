import { StyleSheet } from 'react-native';
import { colors, typography } from '@/src/theme';

export const styles = StyleSheet.create({
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
});
