import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { Space } from '@/src/mocks/management';
import { styles } from './SpaceCard.styles';

interface SpaceCardProps {
  space: Space;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function SpaceCard({ space, onEdit, onDelete }: SpaceCardProps) {
  return (
    <View style={styles.card}>
      {/* Header com ícone e nome */}
      <View style={styles.header}>
        <View style={[styles.iconContainer, { backgroundColor: space.color }]}>
          <FontAwesome5 name={space.icon} size={24} color={colors.white} solid />
        </View>
        <View style={styles.headerInfo}>
          <Text style={styles.name}>{space.name}</Text>
          <Text style={styles.type}>{space.type}</Text>
        </View>
      </View>

      {/* Informações */}
      <View style={styles.info}>
        <View style={styles.infoRow}>
          <FontAwesome5 name="users" size={14} color={colors.gray600} />
          <Text style={styles.infoText}>Capacidade: {space.capacity} pessoas</Text>
        </View>
      </View>

      {/* Comodidades */}
      {space.amenities.length > 0 && (
        <View style={styles.amenities}>
          <Text style={styles.amenitiesTitle}>Comodidades:</Text>
          <View style={styles.amenitiesList}>
            {space.amenities.map((amenity, index) => (
              <View key={index} style={styles.amenityChip}>
                <FontAwesome5 name="check" size={10} color={space.color} />
                <Text style={[styles.amenityText, { color: space.color }]}>{amenity}</Text>
              </View>
            ))}
          </View>
        </View>
      )}

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
