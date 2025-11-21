import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { Activity } from '@/src/mocks/activities';
import { useUserMode } from '@/src/contexts';
import { ActivityCardImage, ActivityCardContent } from './components';
import { styles } from './ActivityCard.styles';

export type ActivityCardVariant = 'big' | 'medium';

interface ActivityCardProps {
  activity: Activity;
  variant?: ActivityCardVariant;
  onPress?: () => void;
  spaceName?: string;
  fullWidth?: boolean;
}

function ActivityCard({
  activity,
  variant = 'big',
  onPress,
  spaceName,
  fullWidth = false,
}: ActivityCardProps) {
  const { mode } = useUserMode();
  const isProvider = mode === 'provider';

  return (
    <TouchableOpacity
      style={[
        styles.card,
        variant === 'big' ? styles.cardBig : styles.cardMedium,
        fullWidth && styles.cardFullWidth,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <ActivityCardImage
        imageUrl={activity.coverImage}
        activityName={activity.name}
        activityId={activity.id}
        variant={variant}
        showFavorite={!isProvider}
      />

      <ActivityCardContent activity={activity} variant={variant} spaceName={spaceName} />
    </TouchableOpacity>
  );
}

// Memorizar componente para evitar re-renders desnecessários
export default memo(ActivityCard, (prevProps, nextProps) => {
  return (
    prevProps.activity.id === nextProps.activity.id &&
    prevProps.variant === nextProps.variant &&
    prevProps.fullWidth === nextProps.fullWidth
  );
});
