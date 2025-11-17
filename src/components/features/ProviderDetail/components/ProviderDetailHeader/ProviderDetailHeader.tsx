import React from 'react';
import { View, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { styles } from './ProviderDetailHeader.styles';

interface ProviderDetailHeaderProps {
  onBackPress?: () => void;
  scrollY: Animated.Value;
  isOwner?: boolean; // Se o usuário é o dono do provider
}

export default function ProviderDetailHeader({
  onBackPress,
  scrollY,
  isOwner = false,
}: ProviderDetailHeaderProps) {
  // Animação do background conforme o scroll
  const backgroundColor = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)'],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[
        styles.header,
        {
          backgroundColor,
        },
      ]}
    >
      {/* Botão Voltar */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={onBackPress}
        activeOpacity={0.7}
      >
        <Ionicons name="arrow-back" size={24} color={colors.secondary} />
      </TouchableOpacity>

      {/* Botão Editar (apenas se for o dono) */}
      {isOwner && (
        <TouchableOpacity
          style={styles.editButton}
          activeOpacity={0.7}
        >
          <Ionicons name="create-outline" size={24} color={colors.secondary} />
        </TouchableOpacity>
      )}
    </Animated.View>
  );
}
