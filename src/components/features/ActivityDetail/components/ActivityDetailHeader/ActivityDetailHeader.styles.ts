import { StyleSheet } from 'react-native';
import { colors } from '@/src/theme';

export const ICON_SIZE = 20;
export const ICON_BACKGROUND_SIZE = 40;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
    marginBottom: 16,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  iconButton: {
    padding: 4,
  },
  iconBackground: {
    width: ICON_BACKGROUND_SIZE,
    height: ICON_BACKGROUND_SIZE,
    borderRadius: ICON_BACKGROUND_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
