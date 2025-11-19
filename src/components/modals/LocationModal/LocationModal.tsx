import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { BaseModal } from '@/src/components/modals';
import { styles } from './LocationModal.styles';

interface LocationModalProps {
  visible: boolean;
  onClose: () => void;
  onSelectLocation: (location: string) => void;
  currentLocation: string;
}

export default function LocationModal({
  visible,
  onClose,
  onSelectLocation,
  currentLocation
}: LocationModalProps) {
  const [searchText, setSearchText] = useState('');

  // Localizações sugeridas (mock - futuramente virá da API)
  const suggestedLocations = [
    'R. Quinze de Novembro 40',
    'Av. Paulista, 1578',
    'R. Augusta, 2690',
    'Av. Faria Lima, 3000',
    'R. Oscar Freire, 379',
  ];

  const filteredLocations = searchText
    ? suggestedLocations.filter(loc =>
        loc.toLowerCase().includes(searchText.toLowerCase())
      )
    : suggestedLocations;

  const handleSelectLocation = (location: string) => {
    onSelectLocation(location);
    setSearchText('');
    onClose();
  };

  const handleUseCurrentLocation = () => {
    onSelectLocation('Localização Atual');
    setSearchText('');
    onClose();
  };

  return (
    <BaseModal
      visible={visible}
      onClose={onClose}
      height={0.82}
      title={<Text style={styles.title}>Selecionar Localização</Text>}
    >
      {/* Search Input */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={colors.gray400} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar endereço"
          placeholderTextColor={colors.gray400}
          value={searchText}
          onChangeText={setSearchText}
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          returnKeyType="search"
        />
        {searchText.length > 0 && (
          <TouchableOpacity onPress={() => setSearchText('')} activeOpacity={0.7}>
            <Ionicons name="close-circle" size={20} color={colors.gray400} />
          </TouchableOpacity>
        )}
      </View>

      {/* Current Location Button */}
      <TouchableOpacity
        style={[
          styles.currentLocationButton,
          currentLocation === 'Localização Atual' && styles.currentLocationButtonActive
        ]}
        onPress={handleUseCurrentLocation}
        activeOpacity={0.7}
      >
        <View style={styles.currentLocationIcon}>
          <Ionicons
            name="locate"
            size={20}
            color={currentLocation === 'Localização Atual' ? colors.primary : colors.gray400}
          />
        </View>
        <View style={styles.currentLocationTextContainer}>
          <Text style={[
            styles.currentLocationTitle,
            currentLocation === 'Localização Atual' && styles.currentLocationTitleActive
          ]}>
            Usar localização atual
          </Text>
          <Text style={styles.currentLocationSubtitle}>
            Ativar GPS para encontrar atividades próximas
          </Text>
        </View>
        <Ionicons
          name={currentLocation === 'Localização Atual' ? 'checkmark-circle' : 'chevron-forward'}
          size={20}
          color={currentLocation === 'Localização Atual' ? colors.primary : colors.gray400}
        />
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.divider}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>ou escolha um endereço</Text>
        <View style={styles.dividerLine} />
      </View>

      {/* Location List */}
      <ScrollView style={styles.locationList} showsVerticalScrollIndicator={false}>
        {filteredLocations.length > 0 ? (
          filteredLocations.map((location, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.locationItem,
                currentLocation === location && styles.locationItemActive
              ]}
              onPress={() => handleSelectLocation(location)}
              activeOpacity={0.7}
            >
              <Ionicons
                name="location"
                size={20}
                color={currentLocation === location ? colors.primary : colors.gray400}
              />
              <Text
                style={[
                  styles.locationText,
                  currentLocation === location && styles.locationTextActive
                ]}
              >
                {location}
              </Text>
              {currentLocation === location && (
                <Ionicons name="checkmark-circle" size={20} color={colors.primary} />
              )}
            </TouchableOpacity>
          ))
        ) : (
          <View style={styles.emptyState}>
            <Ionicons name="search-outline" size={48} color={colors.gray300} />
            <Text style={styles.emptyStateText}>Nenhum endereço encontrado</Text>
          </View>
        )}
      </ScrollView>
    </BaseModal>
  );
}
