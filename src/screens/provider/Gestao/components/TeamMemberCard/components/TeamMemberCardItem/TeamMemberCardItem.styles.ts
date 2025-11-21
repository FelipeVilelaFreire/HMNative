import { StyleSheet } from 'react-native';
import { colors, typography } from '@/src/theme';

export const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.gray200,
    backgroundColor: colors.white,
  },
  // Header (sempre visível)
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.gray200,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  avatarText: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.gray600,
  },
  headerInfo: {
    flex: 1,
  },
  name: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary,
    marginBottom: 2,
  },
  nickname: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.regular,
    color: colors.gray500,
    marginBottom: 6,
  },
  roleBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  roleBadgeText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.semibold,
  },
  expandButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.gray100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Conteúdo expandido
  expandedContent: {
    overflow: 'hidden',
  },
  divider: {
    height: 1,
    backgroundColor: colors.gray200,
    marginHorizontal: 16,
  },
  // Seção de contato
  contactSection: {
    padding: 16,
    paddingTop: 12,
    gap: 8,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  contactIcon: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: colors.gray100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.gray600,
  },
  // Seção de permissões
  permissionsSection: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  permissionsLabel: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.bold,
    color: colors.gray500,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  permissionsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  permissionBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    gap: 6,
  },
  permissionBadgeActive: {
    backgroundColor: 'rgba(2, 255, 171, 0.19)',
  },
  permissionBadgeInactive: {
    backgroundColor: colors.gray100,
  },
  permissionText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
  },
  permissionTextActive: {
    color: colors.success,
  },
  permissionTextInactive: {
    color: colors.gray400,
  },
  // Ações
  actionsSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 4,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: colors.primaryLight,
  },
  editButtonText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.primary,
  },
  deleteButton: {
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
  },
  // Status inativo
  inactiveOverlay: {
    opacity: 0.6,
  },
  inactiveBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: colors.gray400,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    zIndex: 1,
  },
  inactiveBadgeText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.semibold,
    color: colors.white,
  },
});
