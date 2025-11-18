import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { ICONS } from '@/src/constants';
import { styles } from './ProviderInfoCard.styles';

interface ProviderInfoCardProps {
  openingHours: string;
  category: string;
  phone: string;
  website: string;
  isEditing?: boolean;
  onChangeOpeningHours?: (value: string) => void;
  onChangeCategory?: (value: string) => void;
  onChangePhone?: (value: string) => void;
  onChangeWebsite?: (value: string) => void;
}

export default function ProviderInfoCard({
  openingHours,
  category,
  phone,
  website,
  isEditing = false,
  onChangeOpeningHours,
  onChangeCategory,
  onChangePhone,
  onChangeWebsite
}: ProviderInfoCardProps) {
  return (
    <View style={styles.container}>
      {/* Seção 1: Horário de Funcionamento */}
      <View style={styles.infoRow}>
        <Ionicons name={ICONS.schedule} size={20} color={colors.schedule} />
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={openingHours}
            onChangeText={onChangeOpeningHours}
            placeholder="Horário de funcionamento"
            placeholderTextColor={colors.gray400}
          />
        ) : (
          <Text style={styles.infoText}>{openingHours}</Text>
        )}
      </View>

      {/* Seção 2: Hobbie/Categoria */}
      <View style={styles.infoRow}>
        <FontAwesome5 name={ICONS.hobby} size={20} color={colors.hobby} />
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

      {/* Seção 3: Telefone */}
      <View style={styles.infoRow}>
        <Ionicons name="call" size={20} color={colors.phone} />
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={onChangePhone}
            placeholder="Telefone"
            placeholderTextColor={colors.gray400}
            keyboardType="phone-pad"
          />
        ) : (
          <Text style={styles.infoText}>{phone}</Text>
        )}
      </View>

      {/* Seção 4: Site */}
      <View style={styles.infoRow}>
        <Ionicons name="globe" size={20} color={colors.website} />
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={website}
            onChangeText={onChangeWebsite}
            placeholder="Website"
            placeholderTextColor={colors.gray400}
            keyboardType="url"
          />
        ) : (
          <Text style={styles.infoText}>{website}</Text>
        )}
      </View>
    </View>
  );
}
