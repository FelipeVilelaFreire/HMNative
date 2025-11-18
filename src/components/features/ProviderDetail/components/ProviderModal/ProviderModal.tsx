import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { Provider } from '@/src/mocks/providers';
import { activities } from '@/src/mocks/activities';
import ProviderInitialData from './components/ProviderInitialData';
import ProviderInfoCard from './components/ProviderInfoCard';
import ProviderActivitiesCarousel from './components/ProviderActivitiesCarousel';
import ProviderLocationCard from './components/ProviderLocationCard';
import ProviderReviewsCard from './components/ProviderReviewsCard';
import { styles } from './ProviderModal.styles';
import { colors } from '@/src/theme';

interface ProviderModalProps {
  provider: Provider;
  isOwner?: boolean;
  isDashboard?: boolean;
  isEditing?: boolean;
  onSave?: (data: any) => void;
  onHasChanges?: (hasChanges: boolean) => void;
}

export default function ProviderModal({
  provider,
  isOwner = false,
  isDashboard = false,
  isEditing = false,
  onSave,
  onHasChanges,
}: ProviderModalProps) {
  const router = useRouter();
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  // Estados para edição
  const [editedName, setEditedName] = useState(provider.name);
  const [editedDescription, setEditedDescription] = useState(provider.description || '');
  const [editedOpeningHours, setEditedOpeningHours] = useState(provider.openingHours?.monday || 'Seg a Sex: 06:00 - 22:00');
  const [editedCategory, setEditedCategory] = useState('Esportes');
  const [editedPhone, setEditedPhone] = useState(provider.contact?.phone || '(11) 3456-7890');
  const [editedWebsite, setEditedWebsite] = useState(provider.contact?.website || 'hobbymap.com.br');

  // Verificar se houve mudanças
  const hasChanges = isEditing && (
    editedName !== provider.name ||
    editedDescription !== (provider.description || '') ||
    editedOpeningHours !== (provider.openingHours?.monday || 'Seg a Sex: 06:00 - 22:00') ||
    editedCategory !== 'Esportes' ||
    editedPhone !== (provider.contact?.phone || '(11) 3456-7890') ||
    editedWebsite !== (provider.contact?.website || 'hobbymap.com.br')
  );

  // Notificar o componente pai sobre mudanças
  useEffect(() => {
    if (onHasChanges) {
      onHasChanges(hasChanges);
    }
  }, [hasChanges, onHasChanges]);

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const handleSave = () => {
    if (onSave) {
      onSave({
        name: editedName,
        description: editedDescription,
        openingHours: editedOpeningHours,
        category: editedCategory,
        phone: editedPhone,
        website: editedWebsite,
      });
    }
  };

  // Filtrar atividades deste provider (mock)
  const providerActivities = activities.filter(
    (activity) => activity.provider.id === provider.id
  );

  const handleActivityPress = (activity: any) => {
    router.push(`/detail/${activity.id}`);
  };

  const handleNonEditableClick = () => {
    Alert.alert(
      'Campo não editável',
      'Este campo não pode ser editado no momento.',
      [{ text: 'OK' }]
    );
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
      {isEditing ? (
        <TextInput
          style={[styles.providerName, styles.editableText]}
          value={editedName}
          onChangeText={setEditedName}
          placeholder="Nome do estabelecimento"
          placeholderTextColor={colors.gray400}
        />
      ) : (
        <Text style={styles.providerName}>{provider.name}</Text>
      )}

      {/* Descrição do Provider */}
      {isEditing ? (
        <TextInput
          style={[styles.description, styles.editableText]}
          value={editedDescription}
          onChangeText={setEditedDescription}
          placeholder="Descrição"
          placeholderTextColor={colors.gray400}
          multiline
          numberOfLines={4}
        />
      ) : (
        provider.description && (
          <Text
            style={styles.description}
            numberOfLines={isDescriptionExpanded ? undefined : 2}
            onPress={toggleDescription}
          >
            {provider.description}
          </Text>
        )
      )}

      {/* Dados Iniciais: Distância, Avaliação e Número de Avaliações */}
      <TouchableOpacity
        activeOpacity={isEditing ? 1 : 0.7}
        onPress={isEditing ? handleNonEditableClick : undefined}
        disabled={!isEditing}
        style={{ opacity: isEditing ? 0.5 : 1 }}
      >
        <ProviderInitialData
          distance="2km"
          rating={provider.rating}
          reviewsCount={provider.reviewsCount}
        />
      </TouchableOpacity>

      {/* Informações do Provider: Horário, Categoria, Telefone e Site */}
      <ProviderInfoCard
        openingHours={editedOpeningHours}
        category={editedCategory}
        phone={editedPhone}
        website={editedWebsite}
        isEditing={isEditing}
        onChangeOpeningHours={setEditedOpeningHours}
        onChangeCategory={setEditedCategory}
        onChangePhone={setEditedPhone}
        onChangeWebsite={setEditedWebsite}
      />

      {/* Carrossel de Atividades */}
      {providerActivities.length > 0 && (
        <TouchableOpacity
          activeOpacity={isEditing ? 1 : 0.7}
          onPress={isEditing ? handleNonEditableClick : undefined}
          disabled={!isEditing}
          style={{ opacity: isEditing ? 0.5 : 1 }}
        >
          <ProviderActivitiesCarousel
            activities={providerActivities}
            onActivityPress={(isEditing || isOwner) ? () => {} : handleActivityPress}
          />
        </TouchableOpacity>
      )}

      {/* Localização */}
      {provider.location && (
        <ProviderLocationCard
          address={provider.location.address}
          neighborhood={provider.location.city}
          city={provider.location.state}
          distance="2km"
          isEditing={isEditing}
        />
      )}

      {/* Avaliações */}
      <TouchableOpacity
        activeOpacity={isEditing ? 1 : 0.7}
        onPress={isEditing ? handleNonEditableClick : undefined}
        disabled={!isEditing}
        style={{ opacity: isEditing ? 0.5 : 1 }}
      >
        <ProviderReviewsCard reviews={mockReviews} isOwner={isOwner} />
      </TouchableOpacity>
    </View>
  );
}
