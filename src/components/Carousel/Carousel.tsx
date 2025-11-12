import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { ActivityCard } from '@/src/components/cards/ActivityCard';
import { Activity } from '@/src/mocks/activities';
import { ActivityCardVariant } from '@/src/components/cards/ActivityCard/ActivityCard';
import { styles } from './Carousel.styles';

interface CarouselProps {
  title?: string;
  activities: Activity[];
  variant?: ActivityCardVariant;
  onCardPress?: (activity: Activity) => void;
  isFirst?: boolean;
}

export default function Carousel({
  title,
  activities,
  variant = 'medium',
  onCardPress,
  isFirst = false
}: CarouselProps) {
  return (
    <View style={[styles.carouselContainer, isFirst && { marginTop: 10 }]}>
      {title && <Text style={styles.title}>{title}</Text>}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
        decelerationRate="fast"
        snapToInterval={variant === 'medium' ? undefined : undefined}
      >
        {activities.map((activity, index) => (
          <View
            key={activity.id}
            style={[
              styles.cardWrapper,
              index === 0 && styles.firstCard,
              index === activities.length - 1 && styles.lastCard
            ]}
          >
            <ActivityCard
              activity={activity}
              variant={variant}
              onPress={() => onCardPress?.(activity)}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
