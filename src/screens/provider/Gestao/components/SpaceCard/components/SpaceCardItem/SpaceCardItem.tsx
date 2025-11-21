import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { Space } from '@/src/mocks/management';
import { styles } from './SpaceCardItem.styles';

interface SpaceCardItemProps {
  space: Space;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function SpaceCardItem({ space, onEdit, onDelete }: SpaceCardItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const animatedHeight = useRef(new Animated.Value(0)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  // Toggle expansão
  const toggleExpand = () => {
    const toValue = isExpanded ? 0 : 1;

    Animated.parallel([
      Animated.timing(animatedHeight, {
        toValue,
        duration: 250,
        useNativeDriver: false,
      }),
      Animated.timing(rotateAnim, {
        toValue,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start();

    setIsExpanded(!isExpanded);
  };

  // Interpolação da rotação do ícone
  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  // Interpolação da altura do conteúdo
  const heightInterpolate = animatedHeight.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 180], // Altura máxima do conteúdo expandido
  });

  return (
    <View style={styles.card}>
      {/* Header - sempre visível */}
      <TouchableOpacity
        style={styles.header}
        onPress={toggleExpand}
        activeOpacity={0.7}
      >
        {/* Ícone do espaço */}
        <View style={[styles.iconContainer, { backgroundColor: space.color }]}>
          <FontAwesome5 name={space.icon} size={24} color={colors.white} solid />
        </View>

        {/* Info */}
        <View style={styles.headerInfo}>
          <Text style={styles.name}>{space.name}</Text>
          <Text style={styles.type}>{space.type}</Text>
          <View style={styles.capacityBadge}>
            <FontAwesome5 name="users" size={10} color={colors.gray600} />
            <Text style={styles.capacityText}>{space.capacity} pessoas</Text>
          </View>
        </View>

        {/* Botão expandir */}
        <TouchableOpacity style={styles.expandButton} onPress={toggleExpand}>
          <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
            <FontAwesome5 name="chevron-down" size={14} color={colors.gray600} />
          </Animated.View>
        </TouchableOpacity>
      </TouchableOpacity>

      {/* Conteúdo expandido */}
      <Animated.View style={[styles.expandedContent, { height: heightInterpolate }]}>
        <View style={styles.divider} />

        {/* Comodidades */}
        <View style={styles.amenitiesSection}>
          <Text style={styles.amenitiesLabel}>Comodidades</Text>
          <View style={styles.amenitiesList}>
            {space.amenities.length > 0 ? (
              space.amenities.map((amenity, index) => (
                <View
                  key={index}
                  style={[styles.amenityChip, { backgroundColor: `${space.color}15` }]}
                >
                  <FontAwesome5 name="check" size={10} color={space.color} />
                  <Text style={[styles.amenityText, { color: space.color }]}>
                    {amenity}
                  </Text>
                </View>
              ))
            ) : (
              <Text style={styles.noAmenitiesText}>Nenhuma comodidade cadastrada</Text>
            )}
          </View>
        </View>

        {/* Ações */}
        <View style={styles.actionsSection}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={onEdit}
            activeOpacity={0.7}
          >
            <FontAwesome5 name="edit" size={14} color={colors.primary} />
            <Text style={styles.editButtonText}>Editar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.deleteButton}
            onPress={onDelete}
            activeOpacity={0.7}
          >
            <FontAwesome5 name="trash" size={14} color={colors.error} />
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}
