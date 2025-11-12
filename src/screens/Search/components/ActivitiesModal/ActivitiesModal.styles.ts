import { StyleSheet } from 'react-native';
import { colors } from '@/src/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    overflow: 'hidden',
  },
  containerMaximized: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderTopWidth: 1,
    borderTopColor: colors.gray200,
  },
  handleContainer: {
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: colors.white,
    zIndex: 10,
  },
  handleContainerHidden: {
    paddingVertical: 0,
    height: 0,
    opacity: 0,
  },
  handle: {
    width: 40,
    height: 5,
    backgroundColor: colors.gray300,
    borderRadius: 3,
  },
  handleHidden: {
    opacity: 0,
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    alignItems: 'center',
    backgroundColor: colors.white,
    zIndex: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.secondary,
  },
  content: {
    flex: 1,
  },
  cardsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 4,
    alignItems: 'center',
  },
});
