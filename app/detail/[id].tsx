import { useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import ActivityDetail from '@/src/components/features/ActivityDetail';
import { activities } from '@/src/mocks/activities';
import { useUserMode } from '@/src/contexts';
import { colors } from '@/src/theme';

export default function ActivityDetailPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { mode } = useUserMode();

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

  const handleEditPress = () => {
    router.push(`/gestao/activity/${activity.id}/edit`);
  };

  // Verifica se o usuário é o provedor desta atividade
  // TODO: Implementar lógica real de verificação quando tiver autenticação
  const isProvider = mode === 'provider';

  return (
    <ActivityDetail
      activity={activity}
      onBack={handleBack}
      onProviderPress={handleProviderPress}
      isProvider={isProvider}
      onEditPress={handleEditPress}
    />
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
