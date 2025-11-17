import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { ICONS } from '@/src/constants';
import { styles } from './ActivityProvidedByCard.styles';

interface ActivityProvidedByCardProps {
  providerName: string;
  providerAvatar: string;
  rating: number;
  reviewsCount: number;
  onPress?: () => void;
}

export default function ActivityProvidedByCard({
  providerName,
  providerAvatar,
  rating,
  reviewsCount,
  onPress
}: ActivityProvidedByCardProps) {
  // Função para renderizar as estrelas
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Estrelas cheias
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Ionicons key={`star-${i}`} name={ICONS.star} size={12} color={colors.star} />
      );
    }

    // Meia estrela
    if (hasHalfStar) {
      stars.push(
        <Ionicons key="star-half" name={ICONS.starHalf} size={12} color={colors.star} />
      );
    }

    // Estrelas vazias
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Ionicons key={`star-empty-${i}`} name={ICONS.starOutline} size={12} color={colors.star} />
      );
    }

    return stars;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Fornecido por</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={onPress}
        activeOpacity={0.7}
      >
        {/* Seção da Imagem - 40% */}
        <View style={styles.imageSection}>
          <Image
            source={{ uri: providerAvatar }}
            style={styles.providerImage}
            resizeMode="cover"
          />
        </View>

        {/* Seção de Informações - 60% */}
        <View style={styles.infoSection}>
          <Text style={styles.providerName}>{providerName}</Text>

          {/* Linha de Estatísticas */}
          <View style={styles.statsRow}>
            {/* Rating e Estrelas */}
            <View style={styles.statSection}>
              <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
              <View style={styles.starsRow}>
                {renderStars()}
              </View>
            </View>

            {/* Número de Avaliações */}
            <View style={styles.statSectionWithBorder}>
              <Text style={styles.reviewsCountText}>{reviewsCount}</Text>
              <Text style={styles.reviewsLabel}>avaliações</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
