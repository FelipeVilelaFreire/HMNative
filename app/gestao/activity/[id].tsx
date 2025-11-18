import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ActivityDetail from '@/src/components/features/ActivityDetail';
import { activities } from '@/src/mocks/activities';
import { colors } from '@/src/theme';

export default function GestaoActivityDetailPage() {
  const { id, edit } = useLocalSearchParams<{ id: string; edit?: string }>();
  const router = useRouter();

  // Estado para controlar se está em modo de edição
  const [isEditing, setIsEditing] = useState(edit === 'true');

  // Busca a atividade pelo ID
  const activity = activities.find((a) => a.id === id);

  // Se a atividade não for encontrada, mostra mensagem de erro
  if (!activity) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Atividade não encontrada</Text>
      </View>
    );
  }

  const handleBack = () => {
    router.back();
  };

  const handleProviderPress = () => {
    router.push(`/provider/${activity.provider.id}`);
  };

  const handleEdit = () => {
    // Toggle entre modo edição e visualização - apenas muda o estado local
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = (updatedActivity: any) => {
    // TODO: Salvar as alterações no backend ou contexto global
    console.log('Atividade atualizada:', updatedActivity);
    setIsEditing(false);
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ActivityDetail
        activity={activity}
        onBack={handleBack}
        onProviderPress={handleProviderPress}
        isProvider={true}
        onEditPress={handleEdit}
        isEditing={isEditing}
        onCancel={handleCancel}
        onSave={handleSave}
      />
    </>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  errorText: {
    fontSize: 16,
    color: colors.gray600,
  },
});
