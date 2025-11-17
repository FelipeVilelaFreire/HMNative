import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { Hobby } from '@/src/mocks/hobbies';
import { styles } from './DeleteHobbyModal.styles';

interface DeleteHobbyModalProps {
  hobby: Hobby;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function DeleteHobbyModal({ hobby, onConfirm, onCancel }: DeleteHobbyModalProps) {
  return (
    <View style={styles.container}>
      {/* Ícone com background da cor do hobby */}
      <View style={[styles.iconContainer, { backgroundColor: hobby.color }]}>
        <FontAwesome5 name={hobby.icon} size={48} color={colors.white} solid />
      </View>

      {/* Título */}
      <Text style={styles.title}>Remover Hobby</Text>

      {/* Mensagem */}
      <Text style={styles.message}>
        Você deseja remover <Text style={[styles.hobbyName, { color: hobby.color }]}>{hobby.name}</Text> dos seus hobbies?
      </Text>

      {/* Descrição adicional */}
      <Text style={styles.description}>
        Esta ação não poderá ser desfeita e você deixará de receber recomendações relacionadas a este hobby.
      </Text>

      {/* Botões */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={onCancel}
          activeOpacity={0.7}
        >
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.confirmButton}
          onPress={onConfirm}
          activeOpacity={0.7}
        >
          <Text style={styles.confirmButtonText}>Remover</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
