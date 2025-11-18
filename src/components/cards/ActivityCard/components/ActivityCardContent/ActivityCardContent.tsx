import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Activity } from '@/src/mocks/activities';
import { colors } from '@/src/theme';
import { ActivityCardVariant } from '../../ActivityCard';
import { styles, ICON_SIZE_18, ICON_SIZE_20 } from './ActivityCardContent.styles';

interface ActivityCardContentProps {
  activity: Activity;
  variant?: ActivityCardVariant;
  spaceName?: string;
}

export default function ActivityCardContent({ activity, variant = 'big', spaceName }: ActivityCardContentProps) {
  // Tamanhos proporcionais para medium (aproximadamente 65% do big)
  const iconStar = variant === 'big' ? ICON_SIZE_18 : 12;
  const iconLocation = variant === 'big' ? ICON_SIZE_20 : 13;
  const iconSmall = variant === 'big' ? ICON_SIZE_18 : 12;

  return (
    <View style={[styles.content, variant === 'medium' && styles.contentMedium]}>
      <View style={styles.header}>
        <Text style={[styles.title, variant === 'medium' && styles.titleMedium]} numberOfLines={1}>
          {activity.name}
        </Text>
        <View style={styles.rating}>
          <Ionicons name="star" size={iconStar} color={colors.star} />
          <Text style={[styles.ratingText, variant === 'medium' && styles.ratingTextMedium]}>{activity.rating}</Text>
        </View>
      </View>

      <View style={styles.locationRow}>
        <Ionicons name="location-outline" size={iconLocation} color={colors.primary} />
        <Text style={[styles.locationName, variant === 'medium' && styles.locationNameMedium]} numberOfLines={1}>
          {activity.location.neighborhood} - {activity.location.city}
        </Text>
        <Text style={[styles.distance, variant === 'medium' && styles.distanceMedium]}>{activity.location.distance}</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.scheduleContainer}>
          <Ionicons name="time-outline" size={iconSmall} color={colors.schedule} />
          <Text style={[styles.scheduleText, variant === 'medium' && styles.scheduleTextMedium]}>{activity.schedule}</Text>
        </View>
        {variant === 'big' && (
          <View style={styles.priceContainer}>
            <Ionicons name="cash-outline" size={iconSmall} color={colors.price} />
            <Text style={styles.priceText}>R$ {activity.price}</Text>
          </View>
        )}
      </View>

      {spaceName && (
        <View style={styles.spaceContainer}>
          <Ionicons name="business-outline" size={iconSmall} color={colors.space} />
          <Text style={[styles.spaceText, variant === 'medium' && styles.spaceTextMedium]}>{spaceName}</Text>
        </View>
      )}
    </View>
  );
}
