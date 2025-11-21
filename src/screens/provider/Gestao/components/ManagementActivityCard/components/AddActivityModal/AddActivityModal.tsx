import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, TextInput, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { spaces, Space } from '@/src/mocks/management';
import { styles } from './AddActivityModal.styles';

interface AddActivityModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (activity: NewActivity) => void;
}

export interface NewActivity {
  name: string;
  description: string;
  category: string;
  price: number;
  schedule: string;
  coverImage: string;
  spaceId: string;
  spaceName: string;
}

// Categorias disponíveis
const CATEGORIES = [
  'Esportes', 'Bem-estar', 'Música', 'Artes', 'Dança',
  'Fitness', 'Natação', 'Lutas', 'Jogos', 'Educação'
];

// Imagens de exemplo
const SAMPLE_IMAGES = [
  'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80',
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
  'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&q=80',
  'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80',
  'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80',
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
];

export default function AddActivityModal({ visible, onClose, onSave }: AddActivityModalProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [schedule, setSchedule] = useState('');
  const [selectedImage, setSelectedImage] = useState(SAMPLE_IMAGES[0]);
  const [selectedSpace, setSelectedSpace] = useState<Space | null>(null);

  const resetForm = () => {
    setName('');
    setDescription('');
    setCategory('');
    setPrice('');
    setSchedule('');
    setSelectedImage(SAMPLE_IMAGES[0]);
    setSelectedSpace(null);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSave = () => {
    if (!name || !category || !price || !selectedSpace) return;

    onSave({
      name,
      description,
      category,
      price: parseFloat(price),
      schedule,
      coverImage: selectedImage,
      spaceId: selectedSpace.id,
      spaceName: selectedSpace.name,
    });

    resetForm();
    onClose();
  };

  const isFormValid = name && category && price && selectedSpace;

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      statusBarTranslucent
      onRequestClose={handleClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Nova Atividade</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleClose}
              activeOpacity={0.7}
            >
              <FontAwesome5 name="times" size={18} color={colors.gray600} />
            </TouchableOpacity>
          </View>

          {/* Content */}
          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            {/* Preview da imagem */}
            <View style={styles.imagePreview}>
              <Image source={{ uri: selectedImage }} style={styles.previewImage} />
              <View style={styles.imageOverlay}>
                <Text style={styles.previewName}>{name || 'Nome da Atividade'}</Text>
                <Text style={styles.previewCategory}>{category || 'Categoria'}</Text>
              </View>
            </View>

            {/* Seletor de Imagem */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Imagem de capa</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.imageSelector}>
                  {SAMPLE_IMAGES.map((img, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.imageThumbnail,
                        selectedImage === img && styles.imageThumbnailSelected
                      ]}
                      onPress={() => setSelectedImage(img)}
                      activeOpacity={0.7}
                    >
                      <Image source={{ uri: img }} style={styles.thumbnailImage} />
                      {selectedImage === img && (
                        <View style={styles.selectedBadge}>
                          <FontAwesome5 name="check" size={10} color={colors.white} />
                        </View>
                      )}
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </View>

            {/* Nome */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nome da atividade</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Ex: Futebol de Campo"
                placeholderTextColor={colors.gray400}
              />
            </View>

            {/* Descrição */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Descrição</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={description}
                onChangeText={setDescription}
                placeholder="Descreva a atividade..."
                placeholderTextColor={colors.gray400}
                multiline
                numberOfLines={3}
                textAlignVertical="top"
              />
            </View>

            {/* Categoria */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Categoria</Text>
              <View style={styles.categorySelector}>
                {CATEGORIES.map((cat) => (
                  <TouchableOpacity
                    key={cat}
                    style={[
                      styles.categoryOption,
                      category === cat && styles.categoryOptionSelected
                    ]}
                    onPress={() => setCategory(cat)}
                    activeOpacity={0.7}
                  >
                    <Text style={[
                      styles.categoryOptionText,
                      category === cat && styles.categoryOptionTextSelected
                    ]}>
                      {cat}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Preço */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Preço (R$)</Text>
              <TextInput
                style={styles.input}
                value={price}
                onChangeText={setPrice}
                placeholder="Ex: 50.00"
                placeholderTextColor={colors.gray400}
                keyboardType="decimal-pad"
              />
            </View>

            {/* Horário */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Horário</Text>
              <TextInput
                style={styles.input}
                value={schedule}
                onChangeText={setSchedule}
                placeholder="Ex: Seg a Sex - 8:00 às 10:00"
                placeholderTextColor={colors.gray400}
              />
            </View>

            {/* Espaço */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Espaço</Text>
              <View style={styles.spaceSelector}>
                {spaces.map((space) => (
                  <TouchableOpacity
                    key={space.id}
                    style={[
                      styles.spaceOption,
                      selectedSpace?.id === space.id && {
                        borderColor: space.color,
                        backgroundColor: `${space.color}15`
                      }
                    ]}
                    onPress={() => setSelectedSpace(space)}
                    activeOpacity={0.7}
                  >
                    <View style={[styles.spaceIcon, { backgroundColor: space.color }]}>
                      <FontAwesome5 name={space.icon} size={14} color={colors.white} solid />
                    </View>
                    <Text style={[
                      styles.spaceOptionText,
                      selectedSpace?.id === space.id && { color: space.color }
                    ]}>
                      {space.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </ScrollView>

          {/* Footer */}
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={handleClose}
              activeOpacity={0.7}
            >
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.saveButton, !isFormValid && styles.saveButtonDisabled]}
              onPress={handleSave}
              activeOpacity={0.7}
              disabled={!isFormValid}
            >
              <FontAwesome5 name="plus-circle" size={16} color={colors.white} />
              <Text style={styles.saveButtonText}>Criar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
