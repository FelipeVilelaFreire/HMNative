import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { BaseModal } from '@/src/components/modals';
import { styles } from './DistanceModal.styles';

interface DistanceModalProps {
  visible: boolean;
  onClose: () => void;
  onSelectDistance: (distance: number) => void;
  currentDistance: number;
}

const DISTANCE_OPTIONS = [
  { value: 1, label: '1 km', description: 'Muito perto' },
  { value: 5, label: '5 km', description: 'Proximidade' },
  { value: 10, label: '10 km', description: 'Vizinhança' },
  { value: 20, label: '20 km', description: 'Região' },
  { value: 30, label: '30 km', description: 'Área ampla' },
];

export default function DistanceModal({
  visible,
  onClose,
  onSelectDistance,
  currentDistance,
}: DistanceModalProps) {
  const [customDistance, setCustomDistance] = useState('');
  const [isCustom, setIsCustom] = useState(false);

  const handleSelectDistance = (distance: number) => {
    setIsCustom(false);
    setCustomDistance('');
    onSelectDistance(distance);
    onClose();
  };

  const handleApplyCustomDistance = () => {
    const distance = parseInt(customDistance, 10);
    if (!isNaN(distance) && distance > 0 && distance <= 50) {
      handleSelectDistance(distance);
    }
  };

  return (
    <BaseModal
      visible={visible}
      onClose={onClose}
      height={0.82}
      title={<Text style={styles.title}>Distância Máxima</Text>}
    >
      {/* Conteúdo scrollável */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.description}>
          Selecione a distância máxima para buscar atividades próximas
        </Text>

        {/* Lista de distâncias */}
        <View style={styles.distanceList}>
          {DISTANCE_OPTIONS.map((option) => {
            const isSelected = !isCustom && currentDistance === option.value;
            return (
              <TouchableOpacity
                key={option.value}
                style={[
                  styles.distanceItem,
                  isSelected && styles.distanceItemActive,
                ]}
                onPress={() => handleSelectDistance(option.value)}
                activeOpacity={0.7}
              >
                <View style={styles.distanceItemLeft}>
                  <View
                    style={[
                      styles.distanceIconContainer,
                      isSelected && styles.distanceIconContainerActive,
                    ]}
                  >
                    <Ionicons
                      name="navigate"
                      size={24}
                      color={isSelected ? colors.primary : colors.gray400}
                    />
                  </View>
                  <View style={styles.distanceItemInfo}>
                    <Text
                      style={[
                        styles.distanceItemLabel,
                        isSelected && styles.distanceItemLabelActive,
                      ]}
                    >
                      {option.label}
                    </Text>
                    <Text style={styles.distanceItemDescription}>
                      {option.description}
                    </Text>
                  </View>
                </View>
                {isSelected && (
                  <Ionicons name="checkmark-circle" size={24} color={colors.primary} />
                )}
              </TouchableOpacity>
            );
          })}

          {/* Distância Personalizada */}
          <View style={styles.customDistanceContainer}>
            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>ou</Text>
              <View style={styles.dividerLine} />
            </View>

            <View style={styles.customDistanceCard}>
              <View style={styles.customDistanceHeader}>
                <Ionicons name="create" size={24} color={colors.primary} />
                <Text style={styles.customDistanceTitle}>Distância Personalizada</Text>
              </View>

              <View style={styles.customDistanceInputContainer}>
                <TextInput
                  style={styles.customDistanceInput}
                  placeholder="Digite a distância"
                  placeholderTextColor={colors.gray400}
                  value={customDistance}
                  onChangeText={setCustomDistance}
                  keyboardType="number-pad"
                  maxLength={2}
                />
                <Text style={styles.customDistanceUnit}>km</Text>

                <TouchableOpacity
                  style={[
                    styles.customDistanceButton,
                    (!customDistance || parseInt(customDistance) <= 0 || parseInt(customDistance) > 50) &&
                    styles.customDistanceButtonDisabled
                  ]}
                  onPress={handleApplyCustomDistance}
                  activeOpacity={0.7}
                  disabled={!customDistance || parseInt(customDistance) <= 0 || parseInt(customDistance) > 50}
                >
                  <Ionicons name="checkmark" size={20} color={colors.white} />
                </TouchableOpacity>
              </View>

              <Text style={styles.customDistanceHint}>
                Máximo de 50 km
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </BaseModal>
  );
}
