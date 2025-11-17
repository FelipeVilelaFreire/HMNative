import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { HobbyCard } from '@/src/components/cards/HobbyCard';
import { hobbies, Hobby, categories } from '@/src/mocks/hobbies';
import { styles } from './AddHobbyModal.styles';

interface AddHobbyModalProps {
  onSelectHobby: (hobby: Hobby) => void;
  onCancel: () => void;
  excludeIds?: string[]; // IDs dos hobbies já adicionados pelo usuário
}

export default function AddHobbyModal({ onSelectHobby, onCancel, excludeIds = [] }: AddHobbyModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filtra os hobbies que já foram adicionados pelo usuário
  let availableHobbies = hobbies.filter(hobby => !excludeIds.includes(hobby.id));

  // Filtra por categoria se alguma estiver selecionada
  if (selectedCategory) {
    availableHobbies = availableHobbies.filter(hobby => hobby.categoryId === selectedCategory);
  }

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Adicionar Hobby</Text>

      {/* Descrição com ícone */}
      <View style={styles.descriptionContainer}>
        <Ionicons name="information-circle-outline" size={16} color={colors.gray600} />
        <Text style={styles.description}>
          Selecione um hobby para adicionar à sua lista
        </Text>
      </View>

      {/* Filtros por categoria */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesScrollView}
        contentContainerStyle={styles.categoriesContainer}
      >
        <TouchableOpacity
          style={[
            styles.categoryChip,
            !selectedCategory && styles.categoryChipActive
          ]}
          onPress={() => setSelectedCategory(null)}
          activeOpacity={0.7}
        >
          <Text style={[
            styles.categoryChipText,
            !selectedCategory && styles.categoryChipTextActive
          ]}>
            Todos
          </Text>
        </TouchableOpacity>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryChip,
              selectedCategory === category.id && styles.categoryChipActive,
              selectedCategory === category.id && { borderColor: category.color }
            ]}
            onPress={() => setSelectedCategory(category.id)}
            activeOpacity={0.7}
          >
            <FontAwesome5
              name={category.icon}
              size={14}
              color={selectedCategory === category.id ? category.color : colors.gray600}
              solid
            />
            <Text style={[
              styles.categoryChipText,
              selectedCategory === category.id && { color: category.color }
            ]}>
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Lista de hobbies disponíveis */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.hobbiesContainer}
        showsVerticalScrollIndicator={false}
      >
        {availableHobbies.map((hobby) => (
          <HobbyCard
            key={hobby.id}
            hobby={hobby}
            onPress={() => onSelectHobby(hobby)}
          />
        ))}
      </ScrollView>

      {/* Botão Cancelar */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={onCancel}
          activeOpacity={0.7}
        >
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
