import React, { useState } from 'react';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import ActivityDetail from '@/src/components/features/ActivityDetail/ActivityDetail';
import { Activity } from '@/src/mocks/activities';

export default function AddActivityPage() {
  const router = useRouter();
  const { images } = useLocalSearchParams<{ images?: string }>();

  // Parse das imagens selecionadas
  const selectedImages = images ? JSON.parse(images) : [];
  const coverImage = selectedImages[0] || 'https://via.placeholder.com/400x300';

  // Atividade vazia para criação
  const emptyActivity: Activity = {
    id: 'new',
    name: '',
    description: '',
    coverImage: coverImage,
    category: '',
    rating: 0,
    reviewsCount: 0,
    price: 0,
    schedule: '',
    location: {
      address: '',
      neighborhood: '',
      city: '',
      distance: '',
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    provider: {
      id: 'current-provider',
      name: 'Academia Fitness Pro', // TODO: Pegar do contexto do provider logado
      logo: 'https://via.placeholder.com/100',
    },
    isFavorite: false,
    images: selectedImages,
  };

  const [newActivity, setNewActivity] = useState<Activity>(emptyActivity);

  const handleBack = () => {
    router.back();
  };

  const handleSave = () => {
    console.log('Salvar nova atividade:', newActivity);
    // TODO: Implementar lógica de salvar atividade
    // Validar campos obrigatórios
    // Fazer request para API
    // Navegar de volta para Gestão
    router.push('/gestao');
  };

  const handleCancel = () => {
    router.back();
  };

  const handleActivityChange = (updatedData: Partial<Activity>) => {
    setNewActivity((prev) => ({
      ...prev,
      ...updatedData,
      location: {
        ...prev.location,
        ...(updatedData.location || {}),
      },
    }));
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ActivityDetail
        activity={newActivity}
        onBack={handleBack}
        isProvider={true}
        isEditing={true}
        isCreating={true}
        onSave={handleSave}
        onCancel={handleCancel}
        onEditPress={() => {}}
        onActivityChange={handleActivityChange}
      />
    </>
  );
}
