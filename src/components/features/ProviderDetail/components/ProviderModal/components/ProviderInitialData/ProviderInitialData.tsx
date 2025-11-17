import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { ICONS } from '@/src/constants';
import { styles } from './ProviderInitialData.styles';

interface ProviderInitialDataProps {
  distance?: string;
  rating: number;
  reviewsCount: number;
}

export default function ProviderInitialData({ distance, rating, reviewsCount }: ProviderInitialDataProps) {
  // Função para renderizar as estrelas
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Estrelas cheias
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Ionicons key={`star-${i}`} name={ICONS.star} size={16} color={colors.star} />
      );
    }

    // Meia estrela
    if (hasHalfStar) {
      stars.push(
        <Ionicons key="star-half" name={ICONS.starHalf} size={16} color={colors.star} />
      );
    }

    // Estrelas vazias
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Ionicons key={`star-empty-${i}`} name={ICONS.starOutline} size={16} color={colors.star} />
      );
    }

    return stars;
  };

  return (
    <View style={styles.container}>
      {/* Seção 1: Distância */}
      {distance && (
        <View style={styles.section}>
          <View style={styles.iconRow}>
            <Ionicons name={ICONS.location} size={16} color={colors.primary} />
            <Text style={styles.distanceText}>{distance}</Text>
          </View>
          <Text style={styles.subtitleText}>de você</Text>
        </View>
      )}

      {/* Seção 2: Avaliação */}
      <View style={styles.sectionWithBorder}>
        <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
        <View style={styles.starsRow}>
          {renderStars()}
        </View>
      </View>

      {/* Seção 3: Número de Avaliações */}
      <View style={styles.section}>
        <Text style={styles.reviewsCountText}>{reviewsCount}</Text>
        <Text style={styles.subtitleText}>avaliações</Text>
      </View>
    </View>
  );
}
