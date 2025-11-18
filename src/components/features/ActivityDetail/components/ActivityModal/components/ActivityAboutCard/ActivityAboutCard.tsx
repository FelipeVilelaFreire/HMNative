import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { colors } from '@/src/theme';
import { styles } from './ActivityAboutCard.styles';

interface ActivityAboutCardProps {
  description: string;
  isEditing?: boolean;
  onChangeDescription?: (value: string) => void;
}

export default function ActivityAboutCard({
  description,
  isEditing = false,
  onChangeDescription
}: ActivityAboutCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Sobre:</Text>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={onChangeDescription}
          placeholder="Descrição"
          placeholderTextColor={colors.gray400}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />
      ) : (
        <Text style={styles.descriptionText}>{description}</Text>
      )}
    </View>
  );
}
