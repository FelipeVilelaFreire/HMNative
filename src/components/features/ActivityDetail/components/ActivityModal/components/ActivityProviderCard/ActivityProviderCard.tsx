import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './ActivityProviderCard.styles';

interface ActivityProviderCardProps {
  providerName: string;
  providerAvatar: string;
  onPress?: () => void;
}

export default function ActivityProviderCard({ providerName, providerAvatar, onPress }: ActivityProviderCardProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Image
        source={{ uri: providerAvatar }}
        style={styles.avatar}
        resizeMode="cover"
      />
      <Text style={styles.providerName}>{providerName}</Text>
    </TouchableOpacity>
  );
}
