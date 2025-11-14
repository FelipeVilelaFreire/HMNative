import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { Hobby } from '@/src/mocks/hobbies';
import { styles } from './HobbyCard.styles';

interface HobbyCardProps {
  hobby: Hobby;
  onPress?: () => void;
}

export default function HobbyCard({ hobby, onPress }: HobbyCardProps) {
  return (
    <TouchableOpacity
      style={[styles.container, { borderColor: hobby.color }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <FontAwesome5 name={hobby.icon} size={20} color={colors.gray600} solid />
      <Text style={styles.name}>{hobby.name}</Text>
    </TouchableOpacity>
  );
}
