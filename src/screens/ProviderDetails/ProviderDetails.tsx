import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { ProviderDetail } from '@/src/components/features/ProviderDetail';
import { providers } from '@/src/mocks/providers';

export default function ProviderDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // Buscar o provider pelo ID
  const provider = providers.find((p) => p.id === id);

  // Se não encontrar o provider, mostrar erro ou redirecionar
  if (!provider) {
    return null; // TODO: Adicionar tela de erro
  }

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ProviderDetail
        provider={provider}
        onBack={handleBack}
      />
    </>
  );
}
