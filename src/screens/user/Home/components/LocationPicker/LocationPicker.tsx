import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LocationModal } from '@/src/components/modals';
import { styles } from './LocationPicker.styles';
import { colors } from '@/src/theme';

export default function LocationPicker() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('R. Quinze de Novembro 40');

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleSelectLocation = (location: string) => {
    setSelectedLocation(location);
    // Aqui você pode adicionar lógica para filtrar atividades por localização
    console.log('Localização selecionada:', location);
  };

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={handleOpenModal}>
        <Text style={styles.locationText}>{selectedLocation}</Text>
        <Ionicons name="chevron-down" size={16} color={colors.secondary} />
      </TouchableOpacity>

      <LocationModal
        visible={isModalVisible}
        onClose={handleCloseModal}
        onSelectLocation={handleSelectLocation}
        currentLocation={selectedLocation}
      />
    </>
  );
}
