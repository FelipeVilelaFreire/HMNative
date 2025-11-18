import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { ICONS } from '@/src/constants';
import { styles } from './ActivityLocationCard.styles';

interface ActivityLocationCardProps {
  address: string;
  neighborhood: string;
  city: string;
  distance: string;
  isEditing?: boolean;
  onChangeAddress?: (value: string) => void;
  onChangeNeighborhood?: (value: string) => void;
  onChangeCity?: (value: string) => void;
}

export default function ActivityLocationCard({
  address,
  neighborhood,
  city,
  distance,
  isEditing = false,
  onChangeAddress,
  onChangeNeighborhood,
  onChangeCity
}: ActivityLocationCardProps) {
  const fullLocation = `${address}, ${neighborhood} - ${city}`;

  return (
    <View style={styles.container}>
      {/* Título da seção */}
      <Text style={styles.sectionTitle}>Veja onde é</Text>

      {/* Localização com ícone */}
      <View style={styles.locationRow}>
        <Ionicons name={ICONS.location} size={20} color={colors.primary} />
        {isEditing ? (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={address}
              onChangeText={onChangeAddress}
              placeholder="Endereço"
              placeholderTextColor={colors.gray400}
            />
            <TextInput
              style={styles.input}
              value={neighborhood}
              onChangeText={onChangeNeighborhood}
              placeholder="Bairro"
              placeholderTextColor={colors.gray400}
            />
            <TextInput
              style={styles.input}
              value={city}
              onChangeText={onChangeCity}
              placeholder="Cidade"
              placeholderTextColor={colors.gray400}
            />
          </View>
        ) : (
          <Text style={styles.locationText}>{fullLocation} - {distance}</Text>
        )}
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
