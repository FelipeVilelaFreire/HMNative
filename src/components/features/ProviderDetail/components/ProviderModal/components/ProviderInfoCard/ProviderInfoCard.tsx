import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { ICONS } from '@/src/constants';
import { styles } from './ProviderInfoCard.styles';

interface ProviderInfoCardProps {
  openingHours: string;
  category: string;
  phone: string;
  website: string;
}

export default function ProviderInfoCard({ openingHours, category, phone, website }: ProviderInfoCardProps) {
  return (
    <View style={styles.container}>
      {/* Seção 1: Horário de Funcionamento */}
      <View style={styles.infoRow}>
        <Ionicons name={ICONS.schedule} size={20} color={colors.schedule} />
        <Text style={styles.infoText}>{openingHours}</Text>
      </View>

      {/* Seção 2: Hobbie/Categoria */}
      <View style={styles.infoRow}>
        <FontAwesome5 name={ICONS.hobby} size={20} color={colors.hobby} />
        <Text style={styles.infoText}>{category}</Text>
      </View>

      {/* Seção 3: Telefone */}
      <View style={styles.infoRow}>
        <Ionicons name="call" size={20} color={colors.phone} />
        <Text style={styles.infoText}>{phone}</Text>
      </View>

      {/* Seção 4: Site */}
      <View style={styles.infoRow}>
        <Ionicons name="globe" size={20} color={colors.website} />
        <Text style={styles.infoText}>{website}</Text>
      </View>
    </View>
  );
}
