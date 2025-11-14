import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { Activity } from '@/src/mocks/activities';
import { ActivityCardImage, ActivityCardContent } from './components';
import { styles } from './ActivityCard.styles';

export type ActivityCardVariant = 'big' | 'medium';

interface ActivityCardProps {
  activity: Activity;
  variant?: ActivityCardVariant;
  onPress?: () => void;
}

function ActivityCard({
  activity,
  variant = 'big',
  onPress
}: ActivityCardProps) {
  return (
    <TouchableOpacity
      style={[
        styles.card,
        variant === 'big' ? styles.cardBig : styles.cardMedium,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <ActivityCardImage
        imageUrl={activity.coverImage}
        activityName={activity.name}
        activityId={activity.id}
        variant={variant}
      />

      <ActivityCardContent activity={activity} variant={variant} />
    </TouchableOpacity>
  );
}

// Memorizar componente para evitar re-renders desnecessários
export default memo(ActivityCard, (prevProps, nextProps) => {
  return (
    prevProps.activity.id === nextProps.activity.id &&
    prevProps.variant === nextProps.variant
  );
});
