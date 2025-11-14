import React, { useState } from 'react';
import { View, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { styles, ICON_SIZE } from './ActivityDetailHeader.styles';

interface ActivityDetailHeaderProps {
  onBackPress?: () => void;
  isFavorited?: boolean;
  onFavoriteToggle?: (isFavorited: boolean) => void;
  scrollY?: Animated.Value;
}

export default function ActivityDetailHeader({
  onBackPress,
  isFavorited: initialFavorited = false,
  onFavoriteToggle,
  scrollY
}: ActivityDetailHeaderProps) {
  const [isFavorited, setIsFavorited] = useState(initialFavorited);

  const handleFavoritePress = () => {
    const newValue = !isFavorited;
    setIsFavorited(newValue);
    onFavoriteToggle?.(newValue);
  };

  // Animar background do header baseado no scroll (começa mais tarde, transição mais rápida)
  const headerBackground = scrollY ? scrollY.interpolate({
    inputRange: [60, 250],
    outputRange: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)'],
    extrapolate: 'clamp',
  }) : 'rgba(255, 255, 255, 0)';

  // Animar borda do header baseado no scroll (começa mais tarde, transição mais rápida)
  const borderColor = scrollY ? scrollY.interpolate({
    inputRange: [60, 250],
    outputRange: ['rgba(212, 212, 212, 0)', 'rgba(212, 212, 212, 1)'],
    extrapolate: 'clamp',
  }) : 'rgba(212, 212, 212, 0)';

  // Animar background dos ícones (de cinza transparente para branco)
  const iconBackgroundColor = scrollY ? scrollY.interpolate({
    inputRange: [60, 250],
    outputRange: ['rgba(217, 217, 217, 0.73)', 'rgba(255, 255, 255, 1)'],
    extrapolate: 'clamp',
  }) : 'rgba(217, 217, 217, 0.73)';

  return (
    <Animated.View style={[
      styles.container,
      {
        backgroundColor: headerBackground,
        borderBottomWidth: 1,
        borderBottomColor: borderColor,
      }
    ]}>
      {/* Botão Voltar */}
      <TouchableOpacity
        style={styles.iconButton}
        onPress={onBackPress}
        activeOpacity={0.7}
      >
        <Animated.View style={[styles.iconBackground, { backgroundColor: iconBackgroundColor }]}>
          <Ionicons name="arrow-back" size={ICON_SIZE} color={colors.black} />
        </Animated.View>
      </TouchableOpacity>

      {/* Botão Favorito */}
      <TouchableOpacity
        style={styles.iconButton}
        onPress={handleFavoritePress}
        activeOpacity={0.7}
      >
        <Animated.View style={[styles.iconBackground, { backgroundColor: iconBackgroundColor }]}>
          <Ionicons
            name={isFavorited ? 'heart' : 'heart-outline'}
            size={ICON_SIZE}
            color={isFavorited ? colors.error : colors.black}
          />
        </Animated.View>
      </TouchableOpacity>
    </Animated.View>
  );
}
