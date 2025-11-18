import React from 'react';
import { View, Dimensions, TouchableOpacity, Text } from 'react-native';
import Animated from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { styles } from './ActivityDetailImage.styles';

const { height: screenHeight } = Dimensions.get('window');
const IMAGE_HEIGHT = screenHeight * 0.47; // 47% da altura da tela

interface ActivityDetailImageProps {
  imageUrl: string;
  activityId: string;
  isEditing?: boolean;
  isCreating?: boolean;
  onImagePress?: () => void;
}

export default function ActivityDetailImage({
  imageUrl,
  activityId,
  isEditing = false,
  isCreating = false,
  onImagePress
}: ActivityDetailImageProps) {
  return (
    <View style={[styles.container, { height: IMAGE_HEIGHT }]}>
      <Animated.Image
        source={{ uri: imageUrl }}
        style={styles.image}
        resizeMode="cover"
        sharedTransitionTag={`activity-image-${activityId}`}
      />

      {/* Overlay editável */}
      {isEditing && (
        <TouchableOpacity
          style={styles.editOverlay}
          onPress={onImagePress}
          activeOpacity={0.8}
        >
          <View style={styles.editContent}>
            <Ionicons name="camera" size={40} color={colors.white} />
            <Text style={styles.editText}>
              {isCreating ? 'Adicionar foto' : 'Alterar foto'}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}
