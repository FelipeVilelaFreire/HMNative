import { StyleSheet } from 'react-native';
import { colors, typography } from '@/src/theme';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    backgroundColor: colors.white,
    borderRadius: 20,
    width: '100%',
    maxWidth: 400,
    maxHeight: '90%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray200,
  },
  title: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary,
  },
  closeButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: colors.gray100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 20,
  },
  // Status section
  statusSection: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: colors.gray50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.gray200,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statusLabel: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.gray600,
    marginBottom: 4,
  },
  statusValue: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary,
  },
  // Input groups
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.gray600,
    marginBottom: 8,
  },
  input: {
    backgroundColor: colors.gray50,
    borderWidth: 1,
    borderColor: colors.gray200,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.secondary,
  },
  // Role selector
  roleSelector: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  roleOption: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: colors.gray200,
    backgroundColor: colors.gray50,
  },
  roleOptionSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryLight,
  },
  roleOptionText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.gray600,
  },
  roleOptionTextSelected: {
    color: colors.primary,
    fontWeight: typography.fontWeight.semibold,
  },
  // Owner badge
  ownerBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(237, 215, 53, 0.15)',
    borderWidth: 1.5,
    borderColor: 'rgba(243, 255, 72, 0.79)',
  },
  ownerBadgeText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: '#B8860B',
  },
  // Permissions
  permissionsSection: {
    marginTop: 8,
  },
  permissionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray100,
  },
  permissionLabel: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.secondary,
  },
  // Footer
  footer: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: colors.gray200,
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: colors.gray100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.gray600,
  },
  saveButton: {
    flex: 1.5,
    flexDirection: 'row',
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  saveButtonText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.white,
  },
});
