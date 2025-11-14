import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { ICONS } from '@/src/constants';
import { styles } from './ReviewCard.styles';

interface ReviewCardProps {
  userName: string;
  userNickname: string;
  userAvatar: string;
  rating: number;
  daysAgo: number;
  comment: string;
}

export default function ReviewCard({
  userName,
  userNickname,
  userAvatar,
  rating,
  daysAgo,
  comment
}: ReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsExpansion, setNeedsExpansion] = useState(false);
  // Função para renderizar as estrelas
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Estrelas cheias
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Ionicons key={`star-${i}`} name={ICONS.star} size={14} color={colors.star} />
      );
    }

    // Meia estrela
    if (hasHalfStar) {
      stars.push(
        <Ionicons key="star-half" name={ICONS.starHalf} size={14} color={colors.star} />
      );
    }

    // Estrelas vazias
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Ionicons key={`star-empty-${i}`} name={ICONS.starOutline} size={14} color={colors.star} />
      );
    }

    return stars;
  };

  return (
    <View style={styles.card}>
      {/* Header com Avatar e Informações do Usuário */}
      <View style={styles.header}>
        <Image
          source={{ uri: userAvatar }}
          style={styles.avatar}
          resizeMode="cover"
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.userNickname}>{userNickname}</Text>
        </View>
      </View>

      {/* Rating e Data */}
      <View style={styles.ratingRow}>
        <View style={styles.starsContainer}>
          {renderStars()}
        </View>
        <Text style={styles.daysAgoText}>• {daysAgo} dias atrás</Text>
      </View>

      {/* Comentário */}
      <View style={styles.commentContainer}>
        <Text
          style={styles.comment}
          numberOfLines={isExpanded ? undefined : 3}
          onTextLayout={(e) => {
            if (e.nativeEvent.lines.length > 3) {
              setNeedsExpansion(true);
            }
          }}
        >
          {comment}
        </Text>
        {needsExpansion && !isExpanded && (
          <TouchableOpacity
            style={styles.expandButton}
            onPress={() => setIsExpanded(true)}
          >
            <Text style={styles.expandButtonText}>Ver mais</Text>
          </TouchableOpacity>
        )}
        {isExpanded && (
          <TouchableOpacity
            style={styles.expandButton}
            onPress={() => setIsExpanded(false)}
          >
            <Text style={styles.expandButtonText}>Ver menos</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
