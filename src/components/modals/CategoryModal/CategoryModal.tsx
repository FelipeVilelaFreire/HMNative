import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { BaseModal } from '@/src/components/modals';
import { categories } from '@/src/mocks/hobbies';
import { styles } from './CategoryModal.styles';

interface CategoryModalProps {
  visible: boolean;
  onClose: () => void;
  onSelectCategories: (categories: string[]) => void;
  selectedCategories: string[];
}

export default function CategoryModal({
  visible,
  onClose,
  onSelectCategories,
  selectedCategories,
}: CategoryModalProps) {
  const handleToggleCategory = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      // Remover categoria
      onSelectCategories(selectedCategories.filter(id => id !== categoryId));
    } else {
      // Adicionar categoria
      onSelectCategories([...selectedCategories, categoryId]);
    }
  };

  const handleApply = () => {
    onClose();
  };

  const handleClear = () => {
    onSelectCategories([]);
  };

  return (
    <BaseModal
      visible={visible}
      onClose={onClose}
      height={0.75}
      title={<Text style={styles.title}>Categorias</Text>}
    >
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.description}>
          Selecione as categorias de atividades que você procura
        </Text>

        {/* Grid de categorias */}
        <View style={styles.categoriesGrid}>
          {categories.map((category) => {
            const isSelected = selectedCategories.includes(category.id);
            return (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryCard,
                  isSelected && styles.categoryCardActive,
                ]}
                onPress={() => handleToggleCategory(category.id)}
                activeOpacity={0.7}
              >
                <View
                  style={[
                    styles.categoryIconContainer,
                    { backgroundColor: isSelected ? category.color : `${category.color}20` },
                  ]}
                >
                  <FontAwesome5
                    name={category.icon}
                    size={24}
                    color={isSelected ? colors.white : category.color}
                  />
                </View>
                <Text
                  style={[
                    styles.categoryName,
                    isSelected && { color: category.color },
                  ]}
                >
                  {category.name}
                </Text>
                {isSelected && (
                  <View style={styles.checkmark}>
                    <FontAwesome5 name="check-circle" size={20} color={category.color} />
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>

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
            Aplicar {selectedCategories.length > 0 && `(${selectedCategories.length})`}
          </Text>
        </TouchableOpacity>
      </View>
    </BaseModal>
  );
}
