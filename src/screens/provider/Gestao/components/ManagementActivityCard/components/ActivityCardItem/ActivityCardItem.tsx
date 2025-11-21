import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { ActivityCard } from '@/src/components/cards';
import { Activity } from '@/src/mocks/activities';
import { colors } from '@/src/theme';
import { styles } from './ActivityCardItem.styles';

interface ActivityCardItemProps {
  activity: Activity;
  onEdit: () => void;
  onDelete: () => void;
  onPress?: () => void;
  spaceName?: string;
}

export default function ActivityCardItem({
  activity,
  onEdit,
  onDelete,
  onPress,
  spaceName,
}: ActivityCardItemProps) {
  return (
    <View style={styles.container}>
      {/* ActivityCard - preenche a largura do container */}
      <ActivityCard
        activity={activity}
        variant="big"
        onPress={onPress}
        spaceName={spaceName}
        fullWidth
      />

      {/* Separador */}
      <View style={styles.divider} />

      {/* Barra inferior com botões */}
      <View style={styles.actionBar}>
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
