import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './FloatingButton.styles';

interface FloatingButtonProps {
  label: string;
  icon?: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
}

export default function FloatingButton({ label, icon, onPress }: FloatingButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
      {icon && <Ionicons name={icon} size={20} color="white" style={styles.icon} />}
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}
