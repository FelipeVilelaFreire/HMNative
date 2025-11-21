import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { Space } from '@/src/mocks/management';
import { styles } from './EditSpaceModal.styles';

interface EditSpaceModalProps {
  visible: boolean;
  space: Space | null;
  onClose: () => void;
  onSave: (space: Space) => void;
}

// Opções de tipos de espaço
const SPACE_TYPES = ['Quadra', 'Sala', 'Piscina', 'Campo', 'Ginásio', 'Estúdio', 'Outro'];

// Opções de ícones
const ICON_OPTIONS = [
  'futbol', 'basketball-ball', 'volleyball-ball', 'swimmer', 'spa',
  'dumbbell', 'running', 'biking', 'table-tennis', 'golf-ball',
  'bowling-ball', 'chess', 'music', 'paint-brush', 'camera',
];

// Opções de cores
const COLOR_OPTIONS = [
  '#10B981', '#3B82F6', '#8B5CF6', '#F59E0B', '#EF4444',
  '#EC4899', '#06B6D4', '#84CC16', '#6366F1', '#14B8A6',
];

// Amenidades comuns
const COMMON_AMENITIES = [
  'Vestiário', 'Ar-condicionado', 'Iluminação', 'Som', 'Espelhos',
  'Rede', 'Aquecimento', 'Raias', 'Chuveiros', 'Armários',
];

export default function EditSpaceModal({ visible, space, onClose, onSave }: EditSpaceModalProps) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [capacity, setCapacity] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('futbol');
  const [selectedColor, setSelectedColor] = useState('#10B981');
  const [amenities, setAmenities] = useState<string[]>([]);
  const [customAmenity, setCustomAmenity] = useState('');

  // Preenche o form quando o space muda
  useEffect(() => {
    if (space) {
      setName(space.name);
      setType(space.type);
      setCapacity(space.capacity.toString());
      setSelectedIcon(space.icon);
      setSelectedColor(space.color);
      setAmenities([...space.amenities]);
    }
  }, [space]);

  const handleClose = () => {
    onClose();
  };

  const handleSave = () => {
    if (!space || !name || !type || !capacity) return;

    onSave({
      ...space,
      name,
      type,
      capacity: parseInt(capacity, 10),
      icon: selectedIcon,
      color: selectedColor,
      amenities,
    });

    onClose();
  };

  const toggleAmenity = (amenity: string) => {
    setAmenities(prev =>
      prev.includes(amenity)
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    );
  };

  const addCustomAmenity = () => {
    if (customAmenity.trim() && !amenities.includes(customAmenity.trim())) {
      setAmenities(prev => [...prev, customAmenity.trim()]);
      setCustomAmenity('');
    }
  };

  const isFormValid = name && type && capacity;

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
            <Text style={styles.title}>Editar Espaço</Text>
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
            {/* Preview */}
            <View style={styles.previewSection}>
              <View style={[styles.previewIcon, { backgroundColor: selectedColor }]}>
                <FontAwesome5 name={selectedIcon} size={28} color={colors.white} solid />
              </View>
              <Text style={styles.previewName}>{name || 'Nome do Espaço'}</Text>
              <Text style={styles.previewType}>{type || 'Tipo'}</Text>
            </View>

            {/* Nome */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nome do espaço</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Ex: Quadra 1"
                placeholderTextColor={colors.gray400}
              />
            </View>

            {/* Tipo */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Tipo</Text>
              <View style={styles.typeSelector}>
                {SPACE_TYPES.map((t) => (
                  <TouchableOpacity
                    key={t}
                    style={[
                      styles.typeOption,
                      type === t && {
                        borderColor: selectedColor,
                        backgroundColor: `${selectedColor}15`
                      }
                    ]}
                    onPress={() => setType(t)}
                    activeOpacity={0.7}
                  >
                    <Text style={[
                      styles.typeOptionText,
                      type === t && { color: selectedColor, fontWeight: '600' as const }
                    ]}>
                      {t}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Capacidade */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Capacidade (pessoas)</Text>
              <TextInput
                style={styles.input}
                value={capacity}
                onChangeText={setCapacity}
                placeholder="Ex: 20"
                placeholderTextColor={colors.gray400}
                keyboardType="number-pad"
              />
            </View>

            {/* Ícone */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Ícone</Text>
              <View style={styles.iconSelector}>
                {ICON_OPTIONS.map((icon) => (
                  <TouchableOpacity
                    key={icon}
                    style={[
                      styles.iconOption,
                      selectedIcon === icon && {
                        borderColor: selectedColor,
                        backgroundColor: `${selectedColor}15`
                      }
                    ]}
                    onPress={() => setSelectedIcon(icon)}
                    activeOpacity={0.7}
                  >
                    <FontAwesome5
                      name={icon}
                      size={18}
                      color={selectedIcon === icon ? selectedColor : colors.gray500}
                      solid
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Cor */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Cor</Text>
              <View style={styles.colorSelector}>
                {COLOR_OPTIONS.map((color) => (
                  <TouchableOpacity
                    key={color}
                    style={[
                      styles.colorOption,
                      { backgroundColor: color },
                      selectedColor === color && styles.colorOptionSelected
                    ]}
                    onPress={() => setSelectedColor(color)}
                    activeOpacity={0.7}
                  >
                    {selectedColor === color && (
                      <FontAwesome5 name="check" size={12} color={colors.white} />
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Comodidades */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Comodidades</Text>
              <View style={styles.amenitiesSelector}>
                {COMMON_AMENITIES.map((amenity) => (
                  <TouchableOpacity
                    key={amenity}
                    style={[
                      styles.amenityOption,
                      amenities.includes(amenity) && {
                        borderColor: selectedColor,
                        backgroundColor: `${selectedColor}15`
                      }
                    ]}
                    onPress={() => toggleAmenity(amenity)}
                    activeOpacity={0.7}
                  >
                    {amenities.includes(amenity) && (
                      <FontAwesome5 name="check" size={10} color={selectedColor} />
                    )}
                    <Text style={[
                      styles.amenityOptionText,
                      amenities.includes(amenity) && { color: selectedColor }
                    ]}>
                      {amenity}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              {/* Adicionar comodidade personalizada */}
              <View style={styles.customAmenityRow}>
                <TextInput
                  style={styles.customAmenityInput}
                  value={customAmenity}
                  onChangeText={setCustomAmenity}
                  placeholder="Adicionar outra..."
                  placeholderTextColor={colors.gray400}
                  onSubmitEditing={addCustomAmenity}
                />
                <TouchableOpacity
                  style={[styles.addAmenityButton, { backgroundColor: selectedColor }]}
                  onPress={addCustomAmenity}
                  activeOpacity={0.7}
                >
                  <FontAwesome5 name="plus" size={12} color={colors.white} />
                </TouchableOpacity>
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
              <FontAwesome5 name="save" size={16} color={colors.white} />
              <Text style={styles.saveButtonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
