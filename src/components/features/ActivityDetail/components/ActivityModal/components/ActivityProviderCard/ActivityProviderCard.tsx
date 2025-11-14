import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './ActivityProviderCard.styles';

interface ActivityProviderCardProps {
  providerName: string;
  providerAvatar: string;
}

export default function ActivityProviderCard({ providerName, providerAvatar }: ActivityProviderCardProps) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: providerAvatar }}
        style={styles.avatar}
        resizeMode="cover"
      />
      <Text style={styles.providerName}>{providerName}</Text>
    </View>
  );
}
