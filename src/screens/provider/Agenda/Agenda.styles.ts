import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography } from '@/src/theme';

const { height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 24,
  },
  title: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: typography.fontSize.base,
    color: colors.gray600,
  },
  calendarPlaceholder: {
    backgroundColor: colors.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.gray200,
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
    marginBottom: 24,
  },
  placeholderText: {
    fontSize: typography.fontSize.lg,
    color: colors.gray500,
    fontWeight: typography.fontWeight.medium,
  },
  upcomingSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary,
    marginBottom: 16,
  },
  placeholder: {
    fontSize: typography.fontSize.base,
    color: colors.gray500,
    textAlign: 'center',
    marginTop: 20,
  },
});
