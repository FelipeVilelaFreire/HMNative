import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './MapView.styles';

export default function MapView() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/Maps.png')}
        style={styles.mapImage}
        resizeMode="cover"
      />
    </View>
  );
}
