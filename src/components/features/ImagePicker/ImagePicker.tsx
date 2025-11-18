import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Alert, Dimensions } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { styles } from './ImagePicker.styles';

const { width: screenWidth } = Dimensions.get('window');
const IMAGE_SIZE = (screenWidth - 6) / 3; // 3 colunas com 2px de gap

interface ImagePickerProps {
  onCancel: () => void;
  onNext: (selectedUris: string[]) => void;
  maxSelection?: number;
}

export default function ImagePicker({ onCancel, onNext, maxSelection = 10 }: ImagePickerProps) {
  const [hasPermission, setHasPermission] = useState(false);
  const [photos, setPhotos] = useState<MediaLibrary.Asset[]>([]);
  const [selectedPhotos, setSelectedPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    requestPermissions();
  }, []);

  const requestPermissions = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === 'granted') {
      setHasPermission(true);
      loadPhotos();
    } else {
      Alert.alert(
        'Permissão necessária',
        'Precisamos de acesso à sua galeria para selecionar fotos.'
      );
    }
  };

  const loadPhotos = async () => {
    try {
      const { assets } = await MediaLibrary.getAssetsAsync({
        first: 50,
        mediaType: 'photo',
        sortBy: ['creationTime'],
      });
      setPhotos(assets);
    } catch (error) {
      console.error('Erro ao carregar fotos:', error);
      Alert.alert('Erro', 'Não foi possível carregar as fotos da galeria.');
    } finally {
      setLoading(false);
    }
  };

  const togglePhotoSelection = (uri: string) => {
    setSelectedPhotos((prev) => {
      if (prev.includes(uri)) {
        return prev.filter((item) => item !== uri);
      } else {
        if (prev.length >= maxSelection) {
          Alert.alert('Limite atingido', `Você pode selecionar até ${maxSelection} fotos.`);
          return prev;
        }
        return [...prev, uri];
      }
    });
  };

  const handleNext = () => {
    if (selectedPhotos.length === 0) {
      Alert.alert('Selecione uma foto', 'Você precisa selecionar pelo menos uma foto para continuar.');
      return;
    }
    onNext(selectedPhotos);
  };

  const renderPhoto = ({ item }: { item: MediaLibrary.Asset }) => {
    const isSelected = selectedPhotos.includes(item.uri);
    const selectionIndex = selectedPhotos.indexOf(item.uri);

    return (
      <TouchableOpacity
        style={[styles.photoContainer, { width: IMAGE_SIZE, height: IMAGE_SIZE }]}
        onPress={() => togglePhotoSelection(item.uri)}
        activeOpacity={0.8}
      >
        <Image source={{ uri: item.uri }} style={styles.photo} />

        {/* Overlay quando selecionado */}
        {isSelected && <View style={styles.selectedOverlay} />}

        {/* Número de seleção */}
        <View style={[styles.selectionBadge, isSelected && styles.selectionBadgeActive]}>
          {isSelected ? (
            <Text style={styles.selectionNumber}>{selectionIndex + 1}</Text>
          ) : (
            <View style={styles.selectionCircle} />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <View style={styles.emptyState}>
          <Ionicons name="images-outline" size={64} color={colors.gray400} />
          <Text style={styles.emptyText}>Sem permissão para acessar a galeria</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onCancel} style={styles.headerButton}>
          <Text style={styles.cancelText}>Cancelar</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Nova Atividade</Text>

        <TouchableOpacity
          onPress={handleNext}
          style={styles.headerButton}
          disabled={selectedPhotos.length === 0}
        >
          <Text style={[
            styles.nextText,
            selectedPhotos.length === 0 && styles.nextTextDisabled
          ]}>
            Próximo
          </Text>
        </TouchableOpacity>
      </View>

      {/* Preview da primeira foto selecionada */}
      {selectedPhotos.length > 0 && (
        <View style={styles.previewContainer}>
          <Image
            source={{ uri: selectedPhotos[0] }}
            style={styles.previewImage}
            resizeMode="cover"
          />
        </View>
      )}

      {/* Grid de fotos */}
      <FlatList
        data={photos}
        renderItem={renderPhoto}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.row}
        ListEmptyComponent={
          loading ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>Carregando fotos...</Text>
            </View>
          ) : (
            <View style={styles.emptyState}>
              <Ionicons name="images-outline" size={64} color={colors.gray400} />
              <Text style={styles.emptyText}>Nenhuma foto encontrada</Text>
            </View>
          )
        }
      />

      {/* Footer com contagem */}
      {selectedPhotos.length > 0 && (
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            {selectedPhotos.length} {selectedPhotos.length === 1 ? 'foto selecionada' : 'fotos selecionadas'}
          </Text>
        </View>
      )}
    </View>
  );
}
