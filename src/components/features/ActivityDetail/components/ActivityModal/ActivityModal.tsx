import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Activity } from '@/src/mocks/activities';
import { activityReviews } from '@/src/mocks/reviews';
import { colors } from '@/src/theme';
import { ActivityInitialData, ActivityInfoCard, ActivityProviderCard, ActivityLocationCard, ActivityAboutCard, ActivityProvidedByCard, ActivityReviewsCard } from './components';
import { styles } from './ActivityModal.styles';

interface ActivityModalProps {
  activity: Activity;
  onProviderPress?: () => void;
  isEditing?: boolean;
  onActivityChange?: (updatedActivity: Partial<Activity>) => void;
}

export default function ActivityModal({
  activity,
  onProviderPress,
  isEditing = false,
  onActivityChange
}: ActivityModalProps) {
  // Estado local para os campos editáveis
  const [title, setTitle] = useState(activity.name);
  const [description, setDescription] = useState(activity.description);
  const [schedule, setSchedule] = useState(activity.schedule);
  const [price, setPrice] = useState(activity.price.toString());
  const [category, setCategory] = useState(activity.category);
  const [address, setAddress] = useState(activity.location.address);
  const [neighborhood, setNeighborhood] = useState(activity.location.neighborhood);
  const [city, setCity] = useState(activity.location.city);

  // Atualizar estado quando activity mudar
  useEffect(() => {
    setTitle(activity.name);
    setDescription(activity.description);
    setSchedule(activity.schedule);
    setPrice(activity.price.toString());
    setCategory(activity.category);
    setAddress(activity.location.address);
    setNeighborhood(activity.location.neighborhood);
    setCity(activity.location.city);
  }, [activity]);

  // Notificar mudanças quando os campos forem editados
  useEffect(() => {
    if (isEditing && onActivityChange) {
      onActivityChange({
        name: title,
        description,
        schedule,
        price: parseFloat(price) || activity.price,
        category,
        location: {
          ...activity.location,
          address,
          neighborhood,
          city,
        },
      });
    }
  }, [title, description, schedule, price, category, address, neighborhood, city, isEditing]);

  // Filtrar avaliações da atividade atual
  const reviews = activityReviews.filter(review => review.activityId === activity.id);

  return (
    <View style={styles.container}>
      {/* Conteúdo do modal */}
      <View style={styles.content}>
        {isEditing ? (
          <TextInput
            style={styles.titleInput}
            value={title}
            onChangeText={setTitle}
            placeholder="Título da atividade"
            placeholderTextColor={colors.gray400}
          />
        ) : (
          <Text style={styles.title}>{activity.name}</Text>
        )}
        {isEditing ? (
          <TextInput
            style={styles.descriptionInput}
            value={description}
            onChangeText={setDescription}
            placeholder="Subtítulo"
            placeholderTextColor={colors.gray400}
          />
        ) : (
          <Text style={styles.description}>{activity.description}</Text>
        )}

        {/* Dados Iniciais - não editável */}
        <View style={[styles.initialDataWrapper, { opacity: isEditing ? 0.5 : 1 }]}>
          <ActivityInitialData
            distance={activity.location.distance}
            rating={activity.rating}
            reviewsCount={activity.reviewsCount}
          />
        </View>

        {/* Informações da Atividade */}
        <View style={styles.infoCardWrapper}>
          <ActivityInfoCard
            schedule={isEditing ? schedule : activity.schedule}
            price={isEditing ? parseFloat(price) || activity.price : activity.price}
            category={isEditing ? category : activity.category}
            isEditing={isEditing}
            onChangeSchedule={setSchedule}
            onChangePrice={setPrice}
            onChangeCategory={setCategory}
          />
        </View>

        {/* Provider/Academia - não editável */}
        <View style={[styles.providerCardWrapper, { opacity: isEditing ? 0.5 : 1 }]}>
          <ActivityProviderCard
            providerName={activity.provider.name}
            providerAvatar={activity.provider.logo}
            onPress={isEditing ? undefined : onProviderPress}
          />
        </View>

        {/* Localização */}
        <View style={styles.locationCardWrapper}>
          <ActivityLocationCard
            address={isEditing ? address : activity.location.address}
            neighborhood={isEditing ? neighborhood : activity.location.neighborhood}
            city={isEditing ? city : activity.location.city}
            distance={activity.location.distance}
            isEditing={isEditing}
            onChangeAddress={setAddress}
            onChangeNeighborhood={setNeighborhood}
            onChangeCity={setCity}
          />
        </View>

        {/* Sobre */}
        <View style={styles.aboutCardWrapper}>
          <ActivityAboutCard
            description={isEditing ? description : activity.description}
            isEditing={isEditing}
            onChangeDescription={setDescription}
          />
        </View>

        {/* Fornecido por - não editável */}
        <View style={[styles.providedByCardWrapper, { opacity: isEditing ? 0.5 : 1 }]}>
          <ActivityProvidedByCard
            providerName={activity.provider.name}
            providerAvatar={activity.provider.logo}
            rating={4.8}
            reviewsCount={342}
            onPress={isEditing ? undefined : onProviderPress}
          />
        </View>

        {/* Avaliações - não editável */}
        <View style={[styles.reviewsCardWrapper, { opacity: isEditing ? 0.5 : 1 }]}>
          <ActivityReviewsCard reviews={reviews} />
        </View>
      </View>
    </View>
  );
}
