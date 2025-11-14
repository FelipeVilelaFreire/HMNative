import React from 'react';
import { View, Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';
import { styles } from './ActivityDetailImage.styles';

const { height: screenHeight } = Dimensions.get('window');
const IMAGE_HEIGHT = screenHeight * 0.47; // 47% da altura da tela

interface ActivityDetailImageProps {
  imageUrl: string;
  activityId: string;
}

export default function ActivityDetailImage({ imageUrl, activityId }: ActivityDetailImageProps) {
  return (
    <View style={[styles.container, { height: IMAGE_HEIGHT }]}>
      <Animated.Image
        source={{ uri: imageUrl }}
        style={styles.image}
        resizeMode="cover"
        sharedTransitionTag={`activity-image-${activityId}`}
      />
    </View>
  );
}
