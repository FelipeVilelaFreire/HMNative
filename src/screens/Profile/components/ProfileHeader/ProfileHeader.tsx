import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { styles, ICON_SIZE_28, MIN_ICON_SIZE, MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT } from './ProfileHeader.styles';

interface ProfileHeaderProps {
  onNotificationPress?: () => void;
  scrollY: Animated.Value;
}

export default function ProfileHeader({ onNotificationPress, scrollY }: ProfileHeaderProps) {
  // Anima a escala do ícone de 1 (28px) para ~0.79 (22px) baseado no scroll
  const iconScale = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [1, MIN_ICON_SIZE / ICON_SIZE_28], // 22/28 = 0.785
    extrapolate: 'clamp',
  });

  // Anima o paddingTop do header
  const paddingTop = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [60, 40],
    extrapolate: 'clamp',
  });

  // Anima o paddingBottom do header
  const paddingBottom = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [16, 8],
    extrapolate: 'clamp',
  });

  // Anima o marginTop do título de 120 para 0
  const titleMarginTop = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [120, 0],
    extrapolate: 'clamp',
  });

  // Anima o fontSize do título de 36 para 20
  const titleFontSize = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [36, 20],
    extrapolate: 'clamp',
  });

  // Anima a opacidade da borda (0 = transparente, 1 = opaco)
  const borderColor = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: ['rgba(212, 212, 212, 0)', 'rgba(212, 212, 212, 1)'], // gray300 com opacidade
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {
          paddingTop: paddingTop,
          paddingBottom: paddingBottom,
          borderBottomWidth: 1,
          borderBottomColor: borderColor,
        }
      ]}
    >
      {/* Linha com título e notificação lado a lado */}
      <View style={styles.topRow}>
        {/* Título "Perfil" com margin-top animado */}
        <Animated.View style={{ marginTop: titleMarginTop }}>
          <Animated.Text style={[styles.title, { fontSize: titleFontSize }]}>
            Perfil
          </Animated.Text>
        </Animated.View>

        {/* Botão de notificação */}
        <TouchableOpacity
          style={styles.notificationButton}
          onPress={onNotificationPress}
          activeOpacity={0.7}
        >
          <Animated.View style={{ transform: [{ scale: iconScale }] }}>
            <Ionicons name="notifications-outline" size={ICON_SIZE_28} color={colors.secondary} />
          </Animated.View>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}
