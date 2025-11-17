import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { Hobby } from '@/src/mocks/hobbies';
import { styles } from './HobbyCard.styles';

interface HobbyCardProps {
  hobby?: Hobby;
  isAddButton?: boolean;
  showDeleteButton?: boolean;
  onPress?: () => void;
  onDeletePress?: () => void;
}

export default function HobbyCard({
  hobby,
  isAddButton = false,
  showDeleteButton = false,
  onPress,
  onDeletePress
}: HobbyCardProps) {
  if (isAddButton) {
    return (
      <TouchableOpacity
        style={[styles.container, styles.addContainer]}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <Ionicons name="add-circle-outline" size={20} color={colors.primary} />
        <Text style={styles.addText}>Adicionar</Text>
      </TouchableOpacity>
    );
  }

  if (!hobby) return null;

  // Cria um background bem transparente com 5% de opacidade da cor da categoria
  const backgroundColor = `${hobby.color}0D`; // Adiciona 0D (5% opacity em hex)

  const handleDeletePress = (e: any) => {
    e?.stopPropagation?.();
    onDeletePress?.();
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          borderColor: hobby.color,
          backgroundColor: backgroundColor,
        }
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <FontAwesome5 name={hobby.icon} size={20} color={colors.gray600} solid />
      <Text style={styles.name}>{hobby.name}</Text>

      {showDeleteButton && (
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={handleDeletePress}
          activeOpacity={0.7}
        >
          <Ionicons name="close-circle" size={18} color={colors.secondary} />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
}
