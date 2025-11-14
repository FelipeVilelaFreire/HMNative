import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { ActivityDetail } from '@/src/components/features';
import { activities } from '@/src/mocks/activities';

export default function ActivityDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // Buscar a atividade pelo ID
  const activity = activities.find((a) => a.id === id);

  // Se não encontrar a atividade, mostrar erro ou redirecionar
  if (!activity) {
    return null; // TODO: Adicionar tela de erro
  }

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ActivityDetail
        activity={activity}
        onBack={handleBack}
      />
    </>
  );
}
