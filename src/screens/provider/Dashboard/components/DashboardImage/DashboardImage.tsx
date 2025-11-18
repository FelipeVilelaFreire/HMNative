import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './DashboardImage.styles';

interface DashboardImageProps {
  imageUrl?: string;
  providerId: string;
}

export default function DashboardImage({ imageUrl, providerId }: DashboardImageProps) {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        {imageUrl ? (
          <Image
            source={{ uri: imageUrl }}
            style={styles.avatar}
            resizeMode="cover"
          />
        ) : (
          <View style={[styles.avatar, styles.placeholderAvatar]} />
        )}
      </View>
    </View>
  );
}
