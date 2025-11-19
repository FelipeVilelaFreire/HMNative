import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { BaseModal } from '@/src/components/modals';
import { styles } from './RatingModal.styles';

interface RatingModalProps {
  visible: boolean;
  onClose: () => void;
  onSelectRating: (rating: number) => void;
  currentRating: number;
}

const RATING_OPTIONS = [
  { value: 4.5, label: '4.5+', description: 'Excelentes avaliações' },
  { value: 4, label: '4+', description: 'Muito boas avaliações' },
  { value: 3.5, label: '3.5+', description: 'Boas avaliações' },
  { value: 3, label: '3+', description: 'Avaliações aceitáveis' },
];

export default function RatingModal({
  visible,
  onClose,
  onSelectRating,
  currentRating,
}: RatingModalProps) {
  const handleSelectRating = (rating: number) => {
    onSelectRating(rating);
    onClose();
  };

  return (
    <BaseModal
      visible={visible}
      onClose={onClose}
      height={0.7}
      title={<Text style={styles.title}>Avaliação Mínima</Text>}
    >
      {/* Conteúdo scrollável */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.description}>
          Selecione a avaliação mínima para filtrar atividades e prestadores
        </Text>

        {/* Lista de avaliações */}
        <View style={styles.ratingList}>
          {RATING_OPTIONS.map((option) => {
            const isSelected = currentRating === option.value;
            return (
              <TouchableOpacity
                key={option.value}
                style={[
                  styles.ratingItem,
                  isSelected && styles.ratingItemActive,
                ]}
                onPress={() => handleSelectRating(option.value)}
                activeOpacity={0.7}
              >
                <View style={styles.ratingItemLeft}>
                  <View
                    style={[
                      styles.ratingIconContainer,
                      isSelected && styles.ratingIconContainerActive,
                    ]}
                  >
                    <FontAwesome5
                      name="star"
                      size={20}
                      color={isSelected ? colors.star : colors.gray400}
                    />
                  </View>
                  <View style={styles.ratingItemInfo}>
                    <Text
                      style={[
                        styles.ratingItemLabel,
                        isSelected && styles.ratingItemLabelActive,
                      ]}
                    >
                      {option.label}
                    </Text>
                    <Text style={styles.ratingItemDescription}>
                      {option.description}
                    </Text>
                  </View>
                </View>
                {isSelected && (
                  <FontAwesome5 name="check-circle" size={20} color={colors.star} />
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>
    </BaseModal>
  );
}
