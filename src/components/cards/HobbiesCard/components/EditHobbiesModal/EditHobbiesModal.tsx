import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { HobbyCard } from '@/src/components/cards/HobbyCard';
import { hobbies, Hobby, categories } from '@/src/mocks/hobbies';
import { styles } from './EditHobbiesModal.styles';

interface EditHobbiesModalProps {
  onCancel: () => void;
}

type ViewMode = 'list' | 'add' | 'delete';

export default function EditHobbiesModal({ onCancel }: EditHobbiesModalProps) {
  const [currentView, setCurrentView] = useState<ViewMode>('list');
  const [selectedHobby, setSelectedHobby] = useState<Hobby | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Simula os hobbies do usuário (os primeiros 6)
  const userHobbies = hobbies.slice(0, 6);
  const excludeIds = userHobbies.map(h => h.id);

  // Filtra os hobbies disponíveis para adicionar
  let availableHobbies = hobbies.filter(hobby => !excludeIds.includes(hobby.id));
  if (selectedCategory) {
    availableHobbies = availableHobbies.filter(hobby => hobby.categoryId === selectedCategory);
  }

  const handleDeletePress = (hobby: Hobby) => {
    setSelectedHobby(hobby);
    setCurrentView('delete');
  };

  const handleConfirmDelete = () => {
    console.log('Hobby deletado:', selectedHobby?.name);
    // TODO: Implementar lógica de deletar hobby
    setSelectedHobby(null);
    setCurrentView('list');
  };

  const handleAddPress = () => {
    setSelectedCategory(null);
    setCurrentView('add');
  };

  const handleSelectHobby = (hobby: Hobby) => {
    console.log('Hobby selecionado:', hobby.name);
    // TODO: Implementar lógica de adicionar hobby à lista do usuário
    setCurrentView('list');
  };

  const handleBackToList = () => {
    setSelectedHobby(null);
    setSelectedCategory(null);
    setCurrentView('list');
  };

  // View de Lista (padrão)
  if (currentView === 'list') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Editar Hobbies</Text>

        <View style={styles.descriptionContainer}>
          <Ionicons name="information-circle-outline" size={16} color={colors.gray600} />
          <Text style={styles.description}>
            Clique no X para remover um hobby da sua lista
          </Text>
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.hobbiesContainer}
          showsVerticalScrollIndicator={false}
        >
          {userHobbies.map((hobby) => (
            <HobbyCard
              key={hobby.id}
              hobby={hobby}
              showDeleteButton
              onDeletePress={() => handleDeletePress(hobby)}
            />
          ))}
          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAddPress}
            activeOpacity={0.7}
          >
            <Ionicons name="add-circle-outline" size={20} color={colors.primary} />
            <Text style={styles.addButtonText}>Adicionar</Text>
          </TouchableOpacity>
        </ScrollView>

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

  // View de Adicionar
  if (currentView === 'add') {
    return (
      <View style={styles.container}>
        {/* Header com botão voltar */}
        <View style={styles.headerWithBack}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleBackToList}
            activeOpacity={0.7}
          >
            <Ionicons name="arrow-back" size={24} color={colors.secondary} />
          </TouchableOpacity>
          <Text style={styles.title}>Adicionar Hobby</Text>
          <View style={styles.backButton} />
        </View>

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
              onPress={() => handleSelectHobby(hobby)}
            />
          ))}
        </ScrollView>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={handleBackToList}
            activeOpacity={0.7}
          >
            <Text style={styles.cancelButtonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // View de Deletar
  if (currentView === 'delete' && selectedHobby) {
    return (
      <View style={styles.deleteContainer}>
        {/* Ícone com background da cor do hobby */}
        <View style={[styles.deleteIconContainer, { backgroundColor: selectedHobby.color }]}>
          <FontAwesome5 name={selectedHobby.icon} size={48} color={colors.white} solid />
        </View>

        <Text style={styles.deleteTitle}>Remover Hobby</Text>

        <Text style={styles.deleteMessage}>
          Você deseja remover <Text style={[styles.deleteHobbyName, { color: selectedHobby.color }]}>{selectedHobby.name}</Text> dos seus hobbies?
        </Text>

        <Text style={styles.deleteDescription}>
          Esta ação não poderá ser desfeita e você deixará de receber recomendações relacionadas a este hobby.
        </Text>

        <View style={styles.deleteButtonsContainer}>
          <TouchableOpacity
            style={styles.deleteCancelButton}
            onPress={handleBackToList}
            activeOpacity={0.7}
          >
            <Text style={styles.deleteCancelButtonText}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.deleteConfirmButton}
            onPress={handleConfirmDelete}
            activeOpacity={0.7}
          >
            <Text style={styles.deleteConfirmButtonText}>Remover</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return null;
}
