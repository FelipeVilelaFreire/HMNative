import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { ICONS } from '@/src/constants';
import { styles } from './ActivityLocationCard.styles';

interface ActivityLocationCardProps {
  address: string;
  neighborhood: string;
  city: string;
  distance: string;
}

export default function ActivityLocationCard({ address, neighborhood, city, distance }: ActivityLocationCardProps) {
  const fullLocation = `${address}, ${neighborhood} - ${city}`;

  return (
    <View style={styles.container}>
      {/* Título da seção */}
      <Text style={styles.sectionTitle}>Veja onde é</Text>

      {/* Localização com ícone */}
      <View style={styles.locationRow}>
        <Ionicons name={ICONS.location} size={20} color={colors.primary} />
        <Text style={styles.locationText}>{fullLocation} - {distance}</Text>
      </View>

      {/* Mapa */}
      <Image
        source={require('@/assets/images/Maps.png')}
        style={styles.mapImage}
        resizeMode="cover"
      />
    </View>
  );
}
