import React from 'react';
import { View, Image, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './ProviderDetailImage.styles';
import { colors } from '@/src/theme';

interface ProviderDetailImageProps {
  imageUrl?: string;
  providerId: string;
  isEditing?: boolean;
}

export default function ProviderDetailImage({ imageUrl, providerId, isEditing = false }: ProviderDetailImageProps) {
  const handleEditImage = () => {
    Alert.alert(
      'Editar Foto',
      'Funcionalidade de upload de imagem será implementada em breve.',
      [{ text: 'OK' }]
    );
  };

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

        {isEditing && (
          <TouchableOpacity
            style={styles.editButton}
            activeOpacity={0.7}
            onPress={handleEditImage}
          >
            <FontAwesome5 name="pen" size={16} color={colors.white} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
