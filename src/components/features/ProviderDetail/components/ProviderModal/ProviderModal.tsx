import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Provider } from '@/src/mocks/providers';
import { activities } from '@/src/mocks/activities';
import ProviderInitialData from './components/ProviderInitialData';
import ProviderInfoCard from './components/ProviderInfoCard';
import ProviderActivitiesCarousel from './components/ProviderActivitiesCarousel';
import ProviderLocationCard from './components/ProviderLocationCard';
import ProviderReviewsCard from './components/ProviderReviewsCard';
import { styles } from './ProviderModal.styles';

interface ProviderModalProps {
  provider: Provider;
  isOwner?: boolean;
  isDashboard?: boolean;
}

export default function ProviderModal({
  provider,
  isOwner = false,
  isDashboard = false,
}: ProviderModalProps) {
  const router = useRouter();
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  // Filtrar atividades deste provider (mock)
  const providerActivities = activities.filter(
    (activity) => activity.provider.id === provider.id
  );

  const handleActivityPress = (activity: any) => {
    router.push(`/detail/${activity.id}`);
  };

  // Mock de avaliações
  const mockReviews = [
    {
      id: '1',
      userName: 'João Silva',
      userNickname: '@joaosilva',
      userAvatar: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      daysAgo: 2,
      comment: 'Excelente estrutura! Instrutores muito atenciosos e equipamentos de qualidade.',
    },
    {
      id: '2',
      userName: 'Maria Santos',
      userNickname: '@mariasantos',
      userAvatar: 'https://i.pravatar.cc/150?img=45',
      rating: 4,
      daysAgo: 5,
      comment: 'Ótimo lugar para praticar esportes. Ambiente agradável e limpo.',
    },
    {
      id: '3',
      userName: 'Pedro Costa',
      userNickname: '@pedrocosta',
      userAvatar: 'https://i.pravatar.cc/150?img=33',
      rating: 5,
      daysAgo: 7,
      comment: 'Melhor academia da região! Variedade de atividades e horários flexíveis.',
    },
  ];

  return (
    <View style={styles.modalContainer}>
      {/* Título do Provider */}
      <Text style={styles.providerName}>{provider.name}</Text>

      {/* Descrição do Provider */}
      {provider.description && (
        <Text
          style={styles.description}
          numberOfLines={isDescriptionExpanded ? undefined : 2}
          onPress={toggleDescription}
        >
          {provider.description}
        </Text>
      )}

      {/* Dados Iniciais: Distância, Avaliação e Número de Avaliações */}
      <ProviderInitialData
        distance="2km"
        rating={provider.rating}
        reviewsCount={provider.reviewsCount}
      />

      {/* Informações do Provider: Horário, Categoria, Telefone e Site */}
      <ProviderInfoCard
        openingHours={provider.openingHours?.monday || 'Seg a Sex: 06:00 - 22:00'}
        category="Esportes"
        phone={provider.contact?.phone || '(11) 3456-7890'}
        website={provider.contact?.website || 'hobbymap.com.br'}
      />

      {/* Carrossel de Atividades */}
      {providerActivities.length > 0 && (
        <ProviderActivitiesCarousel
          activities={providerActivities}
          onActivityPress={handleActivityPress}
        />
      )}

      {/* Localização */}
      {provider.location && (
        <ProviderLocationCard
          address={provider.location.address}
          neighborhood={provider.location.city}
          city={provider.location.state}
          distance="2km"
        />
      )}

      {/* Avaliações */}
      <ProviderReviewsCard reviews={mockReviews} />
    </View>
  );
}
