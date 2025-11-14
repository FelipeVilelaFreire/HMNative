import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { ActivityCardVariant } from '../../ActivityCard';
import { styles } from './ActivityCardImage.styles';

interface ActivityCardImageProps {
  imageUrl: string;
  activityName: string;
  activityId: string;
  variant?: ActivityCardVariant;
}

export default function ActivityCardImage({ imageUrl, activityName, activityId, variant = 'big' }: ActivityCardImageProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const heartSize = variant === 'big' ? 32 : 20;

  return (
    <View style={[
      styles.imageContainer,
      variant === 'medium' && styles.imageContainerMedium
    ]}>
      <Animated.Image
        source={{ uri: imageUrl }}
        style={[styles.image, variant === 'medium' && styles.imageMedium]}
        resizeMode="cover"
        sharedTransitionTag={`activity-image-${activityId}`}
      />

      {/* Ícone de Favorito */}
      <TouchableOpacity
        style={[
          styles.favoriteButton,
          variant === 'medium' && styles.favoriteButtonMedium
        ]}
        onPress={(e) => {
          e.stopPropagation();
          setIsFavorite(!isFavorite);
          console.log(isFavorite ? 'Desfavoritou:' : 'Favoritou:', activityName);
        }}
        activeOpacity={0.7}
      >
        <Ionicons
          name={isFavorite ? 'heart' : 'heart-outline'}
          size={heartSize}
          color={isFavorite ? '#FF3B30' : colors.white}
        />
      </TouchableOpacity>
    </View>
  );
}
