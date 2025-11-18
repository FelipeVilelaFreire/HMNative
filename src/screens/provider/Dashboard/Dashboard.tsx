import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useUserMode } from '@/src/contexts';
import { userProviders } from '@/src/mocks/userProviders';
import { ProviderHeader } from '@/src/components/layout';
import { DashboardImage, DashboardInitialInfo } from './components';
import { ProviderInfoCard, ProviderLocationCard } from '@/src/components/features/ProviderDetail/components/ProviderModal/components';
import { colors } from '@/src/theme';
import { styles } from './Dashboard.styles';

export default function Dashboard() {
  const { mode } = useUserMode();
  const router = useRouter();

  // TODO: Pegar o provider selecionado pelo usuário
  // Por enquanto, usando o primeiro da lista
  const currentProvider = userProviders[0];

  // Handler para ver o modelo (como usuário veria)
  const handleViewModel = () => {
    router.push(`/provider/p1`);
  };

  // Handler para editar o modelo
  const handleEditModel = () => {
    router.push(`/provider/p1?edit=true`);
  };

  return (
    <View style={styles.container}>
      {/* Header com nome do Provider */}
      <ProviderHeader />

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Botões de Ação */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={styles.actionButton}
            activeOpacity={0.7}
            onPress={handleViewModel}
          >
            <Ionicons name="eye-outline" size={20} color={colors.primary} />
            <Text style={styles.actionButtonText}>Ver modelo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            activeOpacity={0.7}
            onPress={handleEditModel}
          >
            <Ionicons name="create-outline" size={20} color={colors.primary} />
            <Text style={styles.actionButtonText}>Editar</Text>
          </TouchableOpacity>
        </View>

        {/* Imagem do Provider */}
        <View style={styles.imageWrapper}>
          <DashboardImage
            imageUrl={currentProvider.imageUrl}
            providerId={currentProvider.id}
          />
        </View>

        {/* Informações Iniciais */}
        <View style={styles.initialInfoWrapper}>
          <DashboardInitialInfo
            activitiesCount={6}
            rating={4.7}
            employeesCount={10}
          />
        </View>

        {/* Card de Informações */}
        <ProviderInfoCard
          openingHours="Seg a Sex - 6:00 às 22:00"
          category="Academia"
          phone="(11) 3456-7890"
          website="www.smartfit.com.br"
        />

        {/* Card de Localização */}
        <ProviderLocationCard
          address={currentProvider.address}
          neighborhood="Icaraí"
          city="Niterói"
          distance="2km"
          isProviderView={true}
        />
      </ScrollView>
    </View>
  );
}
