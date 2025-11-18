import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './LocationPicker.styles';
import { colors } from '@/src/theme';

export default function LocationPicker() {
  const handlePress = () => {
    // Futuramente abrirá modal para selecionar localização
    console.log('Abrir seletor de localização');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.locationText}>R. Quinze de Novembro 40</Text>
      <Ionicons name="chevron-down" size={16} color={colors.secondary} />
    </TouchableOpacity>
  );
}
