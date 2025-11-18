import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { useUserMode } from '@/src/contexts';
import { styles, ICON_SIZE, ARROW_SIZE } from './SwitchModeCard.styles';

interface SwitchModeCardProps {
  onPress?: () => void;
}

export default function SwitchModeCard({ onPress }: SwitchModeCardProps) {
  const { toggleMode, isUserMode } = useUserMode();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      toggleMode();
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <View style={styles.header}>
        <FontAwesome5
          name={isUserMode ? 'building' : 'user'}
          size={ICON_SIZE}
          color={colors.primary}
        />
        <Text style={styles.title}>
          {isUserMode ? 'Trocar para Modo Provedor' : 'Trocar para Modo Usuário'}
        </Text>
        <FontAwesome5
          name="chevron-right"
          size={ARROW_SIZE}
          color={colors.secondary}
        />
      </View>
    </TouchableOpacity>
  );
}
