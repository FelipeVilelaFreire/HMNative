import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { TeamMember } from '@/src/mocks/management';
import { styles } from './TeamMemberCard.styles';

interface TeamMemberCardProps {
  member: TeamMember;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function TeamMemberCard({ member, onEdit, onDelete }: TeamMemberCardProps) {
  // Gera iniciais do nome para o avatar
  const getInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length >= 2) {
      return `${names[0][0]}${names[1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <View style={styles.card}>
      {/* Header com avatar e nome */}
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>{getInitials(member.name)}</Text>
        </View>
        <View style={styles.headerInfo}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>{member.name}</Text>
            {member.isActive && (
              <View style={styles.activeBadge}>
                <Text style={styles.activeBadgeText}>Ativo</Text>
              </View>
            )}
          </View>
          <Text style={styles.role}>{member.role}</Text>
        </View>
      </View>

      {/* Informações de contato */}
      <View style={styles.info}>
        <View style={styles.infoRow}>
          <FontAwesome5 name="phone" size={14} color={colors.gray600} />
          <Text style={styles.infoText}>{member.phone}</Text>
        </View>
        <View style={styles.infoRow}>
          <FontAwesome5 name="envelope" size={14} color={colors.gray600} />
          <Text style={styles.infoText}>{member.email}</Text>
        </View>
        {member.activities.length > 0 && (
          <View style={styles.infoRow}>
            <FontAwesome5 name="dumbbell" size={14} color={colors.gray600} />
            <Text style={styles.infoText}>{member.activities.length} atividade(s)</Text>
          </View>
        )}
      </View>

      {/* Ações */}
      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={onEdit}
          activeOpacity={0.7}
        >
          <FontAwesome5 name="edit" size={16} color={colors.primary} />
          <Text style={styles.editButtonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={onDelete}
          activeOpacity={0.7}
        >
          <FontAwesome5 name="trash" size={16} color={colors.error} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
