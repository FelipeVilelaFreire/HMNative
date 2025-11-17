import React from 'react';
import { View, Text } from 'react-native';
import { Activity } from '@/src/mocks/activities';
import { activityReviews } from '@/src/mocks/reviews';
import { ActivityInitialData, ActivityInfoCard, ActivityProviderCard, ActivityLocationCard, ActivityAboutCard, ActivityProvidedByCard, ActivityReviewsCard } from './components';
import { styles } from './ActivityModal.styles';

interface ActivityModalProps {
  activity: Activity;
  onProviderPress?: () => void;
}

export default function ActivityModal({ activity, onProviderPress }: ActivityModalProps) {
  // Filtrar avaliações da atividade atual
  const reviews = activityReviews.filter(review => review.activityId === activity.id);

  return (
    <View style={styles.container}>
      {/* Conteúdo do modal */}
      <View style={styles.content}>
        <Text style={styles.title}>{activity.name}</Text>
        <Text style={styles.description}>{activity.description}</Text>

        {/* Dados Iniciais */}
        <View style={styles.initialDataWrapper}>
          <ActivityInitialData
            distance={activity.location.distance}
            rating={activity.rating}
            reviewsCount={activity.reviewsCount}
          />
        </View>

        {/* Informações da Atividade */}
        <View style={styles.infoCardWrapper}>
          <ActivityInfoCard
            schedule={activity.schedule}
            price={activity.price}
            category={activity.category}
          />
        </View>

        {/* Provider/Academia */}
        <View style={styles.providerCardWrapper}>
          <ActivityProviderCard
            providerName={activity.provider.name}
            providerAvatar={activity.provider.logo}
            onPress={onProviderPress}
          />
        </View>

        {/* Localização */}
        <View style={styles.locationCardWrapper}>
          <ActivityLocationCard
            address={activity.location.address}
            neighborhood={activity.location.neighborhood}
            city={activity.location.city}
            distance={activity.location.distance}
          />
        </View>

        {/* Sobre */}
        <View style={styles.aboutCardWrapper}>
          <ActivityAboutCard description={activity.description} />
        </View>

        {/* Fornecido por */}
        <View style={styles.providedByCardWrapper}>
          <ActivityProvidedByCard
            providerName={activity.provider.name}
            providerAvatar={activity.provider.logo}
            rating={4.8}
            reviewsCount={342}
            onPress={onProviderPress}
          />
        </View>

        {/* Avaliações */}
        <View style={styles.reviewsCardWrapper}>
          <ActivityReviewsCard reviews={reviews} />
        </View>
      </View>
    </View>
  );
}
