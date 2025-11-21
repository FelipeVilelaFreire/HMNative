import { StyleSheet } from 'react-native';
import { colors, typography } from '@/src/theme';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 16,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray200,
  },
  headerLeft: {
    flex: 1,
  },
  monthYear: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  menuButton: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: colors.gray100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navButton: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: colors.gray100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuDropdown: {
    position: 'absolute',
    top: 60,
    right: 12,
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.gray200,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    zIndex: 1000,
    minWidth: 180,
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
});
