import React from 'react';
import { View } from 'react-native';
import { Carousel } from '@/src/components/ui';
import { Activity } from '@/src/mocks/activities';
import { styles } from './ProviderActivitiesCarousel.styles';

interface ProviderActivitiesCarouselProps {
  activities: Activity[];
  onActivityPress?: (activity: Activity) => void;
}

export default function ProviderActivitiesCarousel({
  activities,
  onActivityPress,
}: ProviderActivitiesCarouselProps) {
  return (
    <View style={styles.container}>
      <Carousel
        title="Atividades Oferecidas"
        activities={activities}
        variant="medium"
        onCardPress={onActivityPress}
      />
    </View>
  );
}
