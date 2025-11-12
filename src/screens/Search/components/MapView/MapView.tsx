import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './MapView.styles';

export default function MapView() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80' }}
        style={styles.mapImage}
      />
    </View>
  );
}
