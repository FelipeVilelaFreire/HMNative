import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Animated as RNAnimated } from 'react-native';
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
  showFavorite?: boolean;
}

export default function ActivityCardImage({
  imageUrl,
  activityName,
  activityId,
  variant = 'big',
  showFavorite = true,
}: ActivityCardImageProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const heartSize = variant === 'big' ? 32 : 20;

  // Animação do coração
  const scaleAnim = useRef(new RNAnimated.Value(1)).current;

  const animateHeart = () => {
    // Reset e faz um único pop maior
    scaleAnim.setValue(0.5);
    RNAnimated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handleFavoritePress = (e: any) => {
    e.stopPropagation();
    animateHeart();
    setIsFavorite(!isFavorite);
    console.log(isFavorite ? 'Desfavoritou:' : 'Favoritou:', activityName);
  };

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

      {/* Ícone de Favorito - só aparece no modo usuário */}
      {showFavorite && (
        <TouchableOpacity
          style={[
            styles.favoriteButton,
            variant === 'medium' && styles.favoriteButtonMedium
          ]}
          onPress={handleFavoritePress}
          activeOpacity={0.7}
        >
          <RNAnimated.View style={{ transform: [{ scale: scaleAnim }] }}>
            <Ionicons
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={heartSize}
              color={isFavorite ? '#FF3B30' : colors.white}
            />
          </RNAnimated.View>
        </TouchableOpacity>
      )}
    </View>
  );
}
