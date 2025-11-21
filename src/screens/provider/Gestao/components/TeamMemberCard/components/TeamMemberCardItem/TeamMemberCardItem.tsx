import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import {
  TeamMember,
  Permission,
  permissionLabels,
  roleLabels
} from '@/src/mocks/management';
import { styles } from './TeamMemberCardItem.styles';

interface TeamMemberCardItemProps {
  member: TeamMember;
  onEdit?: () => void;
  onDelete?: () => void;
}

// Todas as permissões disponíveis no sistema
const ALL_PERMISSIONS: Permission[] = ['edit_team', 'manage_activities', 'edit_establishment'];

export default function TeamMemberCardItem({ member, onEdit, onDelete }: TeamMemberCardItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const animatedHeight = useRef(new Animated.Value(0)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  // Gera iniciais do nome para o avatar
  const getInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length >= 2) {
      return `${names[0][0]}${names[1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  // Pega as cores do role
  const getRoleColors = () => {
    return colors.roles[member.roleType];
  };

  // Toggle expansão
  const toggleExpand = () => {
    const toValue = isExpanded ? 0 : 1;

    Animated.parallel([
      Animated.timing(animatedHeight, {
        toValue,
        duration: 250,
        useNativeDriver: false,
      }),
      Animated.timing(rotateAnim, {
        toValue,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start();

    setIsExpanded(!isExpanded);
  };

  // Interpolação da rotação do ícone
  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  // Interpolação da altura do conteúdo
  const heightInterpolate = animatedHeight.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 260], // Altura máxima do conteúdo expandido
  });

  const roleColors = getRoleColors();

  return (
    <View
      style={[
        styles.card,
        !member.isActive && styles.inactiveOverlay
      ]}
    >
      {/* Badge de inativo */}
      {!member.isActive && (
        <View style={styles.inactiveBadge}>
          <Text style={styles.inactiveBadgeText}>Inativo</Text>
        </View>
      )}

      {/* Header - sempre visível */}
      <TouchableOpacity
        style={styles.header}
        onPress={toggleExpand}
        activeOpacity={0.7}
      >
        {/* Avatar */}
        <View style={styles.avatarContainer}>
          {member.avatar ? (
            <Image source={{ uri: member.avatar }} style={styles.avatarImage} />
          ) : (
            <Text style={styles.avatarText}>{getInitials(member.name)}</Text>
          )}
        </View>

        {/* Info */}
        <View style={styles.headerInfo}>
          <Text style={styles.name}>{member.name}</Text>
          <Text style={styles.nickname}>@{member.nickname}</Text>
          <View style={[styles.roleBadge, { backgroundColor: roleColors.background }]}>
            <Text style={[styles.roleBadgeText, { color: roleColors.text }]}>
              {roleLabels[member.roleType]}
            </Text>
          </View>
        </View>

        {/* Botão expandir */}
        <TouchableOpacity style={styles.expandButton} onPress={toggleExpand}>
          <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
            <FontAwesome5 name="chevron-down" size={14} color={colors.gray600} />
          </Animated.View>
        </TouchableOpacity>
      </TouchableOpacity>

      {/* Conteúdo expandido */}
      <Animated.View style={[styles.expandedContent, { height: heightInterpolate }]}>
        <View style={styles.divider} />

        {/* Contato */}
        <View style={styles.contactSection}>
          <View style={styles.contactRow}>
            <View style={styles.contactIcon}>
              <FontAwesome5 name="envelope" size={12} color={colors.gray600} />
            </View>
            <Text style={styles.contactText}>{member.email}</Text>
          </View>
          <View style={styles.contactRow}>
            <View style={styles.contactIcon}>
              <FontAwesome5 name="phone" size={12} color={colors.gray600} />
            </View>
            <Text style={styles.contactText}>{member.phone}</Text>
          </View>
        </View>

        {/* Permissões */}
        <View style={styles.permissionsSection}>
          <Text style={styles.permissionsLabel}>Permissões</Text>
          <View style={styles.permissionsList}>
            {ALL_PERMISSIONS.map((permission) => {
              const hasPermission = member.permissions.includes(permission);
              return (
                <View
                  key={permission}
                  style={[
                    styles.permissionBadge,
                    hasPermission ? styles.permissionBadgeActive : styles.permissionBadgeInactive
                  ]}
                >
                  <FontAwesome5
                    name={hasPermission ? 'check' : 'times'}
                    size={10}
                    color={hasPermission ? colors.success : colors.gray400}
                  />
                  <Text style={[
                    styles.permissionText,
                    hasPermission ? styles.permissionTextActive : styles.permissionTextInactive
                  ]}>
                    {permissionLabels[permission]}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>

        {/* Ações */}
        <View style={styles.actionsSection}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={onEdit}
            activeOpacity={0.7}
          >
            <FontAwesome5 name="edit" size={14} color={colors.primary} />
            <Text style={styles.editButtonText}>Editar</Text>
          </TouchableOpacity>

          {member.roleType !== 'owner' && (
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={onDelete}
              activeOpacity={0.7}
            >
              <FontAwesome5 name="trash" size={14} color={colors.error} />
            </TouchableOpacity>
          )}
        </View>
      </Animated.View>
    </View>
  );
}
