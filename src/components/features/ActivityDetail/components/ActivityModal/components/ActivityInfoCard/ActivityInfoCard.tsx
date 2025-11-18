import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { ICONS } from '@/src/constants';
import { styles } from './ActivityInfoCard.styles';

interface ActivityInfoCardProps {
  schedule: string;
  price: number;
  category: string;
  isEditing?: boolean;
  onChangeSchedule?: (value: string) => void;
  onChangePrice?: (value: string) => void;
  onChangeCategory?: (value: string) => void;
}

export default function ActivityInfoCard({
  schedule,
  price,
  category,
  isEditing = false,
  onChangeSchedule,
  onChangePrice,
  onChangeCategory
}: ActivityInfoCardProps) {
  // Formatar preço para R$ X,XX
  const formattedPrice = `R$ ${price.toFixed(2).replace('.', ',')}`;

  return (
    <View style={styles.container}>
      {/* Seção 1: Horário */}
      <View style={styles.infoRow}>
        <Ionicons name={ICONS.schedule} size={20} color={colors.schedule} />
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={schedule}
            onChangeText={onChangeSchedule}
            placeholder="Horário"
            placeholderTextColor={colors.gray400}
          />
        ) : (
          <Text style={styles.infoText}>{schedule}</Text>
        )}
      </View>

      {/* Seção 2: Preço */}
      <View style={styles.infoRow}>
        <Ionicons name={ICONS.price} size={20} color={colors.price} />
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={price.toString()}
            onChangeText={onChangePrice}
            placeholder="Preço"
            placeholderTextColor={colors.gray400}
            keyboardType="numeric"
          />
        ) : (
          <Text style={styles.infoText}>{formattedPrice}</Text>
        )}
      </View>

      {/* Seção 3: Categoria/Hobby */}
      <View style={styles.infoRow}>
        <FontAwesome5 name={ICONS.hobby} size={18} color={colors.hobby} />
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={category}
            onChangeText={onChangeCategory}
            placeholder="Categoria"
            placeholderTextColor={colors.gray400}
          />
        ) : (
          <Text style={styles.infoText}>{category}</Text>
        )}
      </View>
    </View>
  );
}
