import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { ICONS } from '@/src/constants';
import { styles } from './DashboardInitialInfo.styles';

interface DashboardInitialInfoProps {
  activitiesCount: number;
  rating: number;
  employeesCount: number;
}

export default function DashboardInitialInfo({
  activitiesCount,
  rating,
  employeesCount
}: DashboardInitialInfoProps) {
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
      {/* Seção 1: Atividades */}
      <View style={styles.section}>
        <Text style={styles.countText}>{activitiesCount}</Text>
        <Text style={styles.subtitleText}>atividades</Text>
      </View>

      {/* Seção 2: Avaliação (com bordas) */}
      <View style={styles.sectionWithBorder}>
        <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
        <View style={styles.starsRow}>
          {renderStars()}
        </View>
      </View>

      {/* Seção 3: Funcionários */}
      <View style={styles.section}>
        <Text style={styles.countText}>{employeesCount}</Text>
        <Text style={styles.subtitleText}>funcionários</Text>
      </View>
    </View>
  );
}
