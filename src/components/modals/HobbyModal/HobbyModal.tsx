import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { BaseModal } from '@/src/components/modals';
import { hobbies, categories } from '@/src/mocks/hobbies';
import { styles } from './HobbyModal.styles';

interface HobbyModalProps {
  visible: boolean;
  onClose: () => void;
  onSelectHobbies: (hobbies: string[]) => void;
  selectedHobbies: string[];
  selectedCategories: string[];
}

export default function HobbyModal({
  visible,
  onClose,
  onSelectHobbies,
  selectedHobbies,
  selectedCategories,
}: HobbyModalProps) {
  const handleToggleHobby = (hobbyId: string) => {
    if (selectedHobbies.includes(hobbyId)) {
      // Remover hobby
      onSelectHobbies(selectedHobbies.filter(id => id !== hobbyId));
    } else {
      // Adicionar hobby
      onSelectHobbies([...selectedHobbies, hobbyId]);
    }
  };

  const handleApply = () => {
    onClose();
  };

  const handleClear = () => {
    onSelectHobbies([]);
  };

  // Agrupar hobbies por categoria
  const hobbiesByCategory = categories.map(category => ({
    ...category,
    hobbies: hobbies.filter(hobby => hobby.categoryId === category.id),
  }));

  return (
    <BaseModal
      visible={visible}
      onClose={onClose}
      height={0.88}
      title={<Text style={styles.title}>Hobbies</Text>}
    >
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.description}>
          Selecione hobbies específicos ou use categorias para marcar todos
        </Text>

        {/* Hobbies agrupados por categoria */}
        {hobbiesByCategory.map((category) => {
          // Verificar se a categoria está selecionada
          const isCategorySelected = selectedCategories.includes(category.id);

          return (
            <View key={category.id} style={styles.categorySection}>
              {/* Header da categoria */}
              <View style={styles.categoryHeader}>
                <View style={styles.categoryHeaderLeft}>
                  <View
                    style={[
                      styles.categoryIcon,
                      { backgroundColor: `${category.color}20` },
                    ]}
                  >
                    <FontAwesome5
                      name={category.icon}
                      size={16}
                      color={category.color}
                    />
                  </View>
                  <Text style={styles.categoryHeaderText}>{category.name}</Text>
                </View>
                {isCategorySelected && (
                  <View style={styles.categoryBadge}>
                    <Text style={styles.categoryBadgeText}>Todos selecionados</Text>
                  </View>
                )}
              </View>

              {/* Grid de hobbies */}
              <View style={styles.hobbiesGrid}>
                {category.hobbies.map((hobby) => {
                  const isSelected = selectedHobbies.includes(hobby.id);
                  return (
                    <TouchableOpacity
                      key={hobby.id}
                      style={[
                        styles.hobbyChip,
                        isSelected && [
                          styles.hobbyChipActive,
                          { borderColor: category.color, backgroundColor: `${category.color}15` },
                        ],
                      ]}
                      onPress={() => handleToggleHobby(hobby.id)}
                      activeOpacity={0.7}
                    >
                      <FontAwesome5
                        name={hobby.icon}
                        size={14}
                        color={isSelected ? category.color : colors.gray600}
                      />
                      <Text
                        style={[
                          styles.hobbyChipText,
                          isSelected && { color: category.color },
                        ]}
                      >
                        {hobby.name}
                      </Text>
                      {isSelected && (
                        <FontAwesome5
                          name="check-circle"
                          size={14}
                          color={category.color}
                        />
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          );
        })}

        <View style={{ height: 20 }} />
      </ScrollView>

      {/* Footer com botões */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.clearButton}
          onPress={handleClear}
          activeOpacity={0.7}
        >
          <Text style={styles.clearButtonText}>Limpar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.applyButton}
          onPress={handleApply}
          activeOpacity={0.7}
        >
          <Text style={styles.applyButtonText}>
            Aplicar {selectedHobbies.length > 0 && `(${selectedHobbies.length})`}
          </Text>
        </TouchableOpacity>
      </View>
    </BaseModal>
  );
}
