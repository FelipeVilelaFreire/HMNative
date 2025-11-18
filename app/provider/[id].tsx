import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProviderDetail from '@/src/components/features/ProviderDetail';
import { providers } from '@/src/mocks/providers';
import { userProviders } from '@/src/mocks/userProviders';
import { useUserMode } from '@/src/contexts';
import { colors } from '@/src/theme';

export default function ProviderDetailPage() {
  const { id, edit } = useLocalSearchParams<{ id: string; edit?: string }>();
  const router = useRouter();
  const { mode } = useUserMode();

  // Estado para controlar se está em modo de edição
  const [isEditing, setIsEditing] = useState(edit === 'true');

  // Busca o provider pelo ID
  const provider = providers.find((p) => p.id === id);

  // Verifica se o usuário é o dono deste provider
  // (está no modo provider E este provider está na lista de providers do usuário)
  const isOwner = mode === 'provider' && userProviders.some((p) => p.id === id);

  // Se o provider não for encontrado, mostra mensagem de erro
  if (!provider) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Estabelecimento não encontrado</Text>
      </View>
    );
  }

  const handleBack = () => {
    // Se for owner (provedor), volta para o home
    if (isOwner) {
      router.push('/(tabs)/dashboard');
    } else {
      router.back();
    }
  };

  const handleEdit = () => {
    // Toggle entre modo edição e visualização - apenas muda o estado local
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = (updatedProvider: any) => {
    // TODO: Salvar as alterações no backend ou contexto global
    console.log('Provider atualizado:', updatedProvider);
    setIsEditing(false);
  };

  return (
    <ProviderDetail
      provider={provider}
      onBack={handleBack}
      isOwner={isOwner}
      isEditing={isEditing}
      onEditPress={handleEdit}
      onCancel={handleCancel}
      onSave={handleSave}
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
