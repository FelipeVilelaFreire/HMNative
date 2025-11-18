import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { Activity } from '@/src/mocks/activities';
import { styles } from './DeleteActivityModal.styles';

interface DeleteActivityModalProps {
  activity: Activity;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function DeleteActivityModal({ activity, onConfirm, onCancel }: DeleteActivityModalProps) {
  return (
    <View style={styles.container}>
      {/* Imagem da atividade com borda vermelha */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: activity.coverImage }}
          style={styles.activityImage}
          resizeMode="cover"
        />
      </View>

      {/* Título */}
      <Text style={styles.title}>Excluir Atividade</Text>

      {/* Mensagem */}
      <Text style={styles.message}>
        Você deseja excluir a atividade{'\n'}
        <Text style={styles.activityName}>{activity.name}</Text>?
      </Text>

      {/* Descrição adicional */}
      <Text style={styles.description}>
        Esta ação não poderá ser desfeita. Todos os dados relacionados a esta atividade serão permanentemente removidos.
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
          <FontAwesome5 name="trash-alt" size={16} color={colors.white} solid />
          <Text style={styles.confirmButtonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
