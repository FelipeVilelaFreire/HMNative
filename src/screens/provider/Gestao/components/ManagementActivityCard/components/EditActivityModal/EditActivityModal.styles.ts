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
  // Image Preview
  imagePreview: {
    width: '100%',
    height: 160,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  previewName: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.white,
    marginBottom: 4,
  },
  previewCategory: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.gray200,
  },
  // Image Selector
  imageSelector: {
    flexDirection: 'row',
    gap: 10,
  },
  imageThumbnail: {
    width: 60,
    height: 60,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  imageThumbnailSelected: {
    borderColor: colors.primary,
  },
  thumbnailImage: {
    width: '100%',
    height: '100%',
  },
  selectedBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.secondary,
  },
  textArea: {
    height: 80,
    paddingTop: 14,
  },
  // Category selector
  categorySelector: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  categoryOption: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: colors.gray200,
    backgroundColor: colors.gray50,
  },
  categoryOptionSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryLight,
  },
  categoryOptionText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.gray600,
  },
  categoryOptionTextSelected: {
    color: colors.primary,
    fontWeight: typography.fontWeight.semibold,
  },
  // Space selector
  spaceSelector: {
    gap: 8,
  },
  spaceOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: colors.gray200,
    backgroundColor: colors.gray50,
  },
  spaceIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spaceOptionText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.gray600,
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
  saveButtonDisabled: {
    backgroundColor: colors.gray300,
  },
  saveButtonText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.white,
  },
});
