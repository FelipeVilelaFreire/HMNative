import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { HobbyCard } from '@/src/components/cards/HobbyCard';
import { hobbies, Hobby } from '@/src/mocks/hobbies';
import { styles } from './EditHobbiesModal.styles';

interface EditHobbiesModalProps {
  onDeleteHobby: (hobby: Hobby) => void;
  onAddHobby: () => void;
  onCancel: () => void;
}

export default function EditHobbiesModal({ onDeleteHobby, onAddHobby, onCancel }: EditHobbiesModalProps) {
  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Editar Hobbies</Text>

      {/* Descrição com ícone */}
      <View style={styles.descriptionContainer}>
        <Ionicons name="information-circle-outline" size={16} color={colors.gray600} />
        <Text style={styles.description}>
          Clique no X para remover um hobby da sua lista
        </Text>
      </View>

      {/* Lista de hobbies */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.hobbiesContainer}
        showsVerticalScrollIndicator={false}
      >
        {hobbies.slice(0, 6).map((hobby) => (
          <HobbyCard
            key={hobby.id}
            hobby={hobby}
            showDeleteButton
            onDeletePress={() => onDeleteHobby(hobby)}
          />
        ))}
        <TouchableOpacity
          style={styles.addButton}
          onPress={onAddHobby}
          activeOpacity={0.7}
        >
          <Ionicons name="add-circle-outline" size={20} color={colors.primary} />
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
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
