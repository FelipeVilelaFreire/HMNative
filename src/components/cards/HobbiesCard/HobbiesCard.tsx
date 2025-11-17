import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { HobbyCard } from '@/src/components/cards/HobbyCard';
import { Modal } from '@/src/components/ui/Modal';
import { DeleteHobbyModal, EditHobbiesModal, AddHobbyModal } from './components';
import { hobbies, Hobby } from '@/src/mocks/hobbies';
import { styles, ICON_SIZE, ARROW_SIZE } from './HobbiesCard.styles';

export default function HobbiesCard() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [selectedHobby, setSelectedHobby] = useState<Hobby | null>(null);
  const animatedHeight = useRef(new Animated.Value(0)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(animatedHeight, {
        toValue: isExpanded ? 1 : 0,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(rotateAnim, {
        toValue: isExpanded ? 1 : 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, [isExpanded]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleEditPress = () => {
    setIsEditModalVisible(true);
  };

  const handleDeleteFromEdit = (hobby: Hobby) => {
    setIsEditModalVisible(false);
    setSelectedHobby(hobby);
    setIsDeleteModalVisible(true);
  };

  const handleAddHobby = () => {
    setIsEditModalVisible(false);
    setIsAddModalVisible(true);
  };

  const handleSelectHobby = (hobby: Hobby) => {
    console.log('Hobby selecionado:', hobby.name);
    // TODO: Implementar lógica de adicionar hobby à lista do usuário
    setIsAddModalVisible(false);
    setIsEditModalVisible(true); // Volta para o modal de editar
  };

  const handleCloseAddModal = () => {
    setIsAddModalVisible(false);
    setIsEditModalVisible(true); // Volta para o modal de editar
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalVisible(false);
    setSelectedHobby(null);
    setIsEditModalVisible(true); // Reabre o modal de editar
  };

  const handleCloseEditModal = () => {
    setIsEditModalVisible(false);
  };

  const handleConfirmDelete = () => {
    console.log('Hobby deletado:', selectedHobby?.name);
    // TODO: Implementar lógica de deletar hobby
    setIsDeleteModalVisible(false);
    setSelectedHobby(null);
    // Reabre o modal de editar
    setIsEditModalVisible(true);
  };

  const heightInterpolate = animatedHeight.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300],
  });

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View style={[styles.container, isExpanded && styles.expanded]}>
      <TouchableOpacity
        style={styles.header}
        onPress={toggleExpand}
        activeOpacity={0.7}
      >
        <FontAwesome5 name="running" size={ICON_SIZE} color={colors.hobby} />
        <Text style={styles.title}>Meus Hobbies</Text>
        <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
          <FontAwesome5
            name="chevron-down"
            size={ARROW_SIZE}
            color={colors.secondary}
          />
        </Animated.View>
      </TouchableOpacity>

      <Animated.View
        style={[
          styles.content,
          {
            maxHeight: heightInterpolate,
            opacity: animatedHeight,
            overflow: 'hidden',
          },
        ]}
      >
        <View style={styles.hobbiesContainer}>
          {hobbies.slice(0, 6).map((hobby) => (
            <HobbyCard
              key={hobby.id}
              hobby={hobby}
            />
          ))}
          {isExpanded && (
            <TouchableOpacity
              style={styles.editButton}
              onPress={handleEditPress}
              activeOpacity={0.7}
            >
              <FontAwesome5 name="edit" size={16} color={colors.primary} />
              <Text style={styles.editButtonText}>Editar</Text>
            </TouchableOpacity>
          )}
        </View>
      </Animated.View>

      {/* Modal de Editar Hobbies */}
      <Modal visible={isEditModalVisible} onClose={handleCloseEditModal}>
        <EditHobbiesModal
          onDeleteHobby={handleDeleteFromEdit}
          onAddHobby={handleAddHobby}
          onCancel={handleCloseEditModal}
        />
      </Modal>

      {/* Modal de Deletar Hobby */}
      <Modal visible={isDeleteModalVisible} onClose={handleCloseDeleteModal}>
        {selectedHobby && (
          <DeleteHobbyModal
            hobby={selectedHobby}
            onConfirm={handleConfirmDelete}
            onCancel={handleCloseDeleteModal}
          />
        )}
      </Modal>

      {/* Modal de Adicionar Hobby */}
      <Modal visible={isAddModalVisible} onClose={handleCloseAddModal}>
        <AddHobbyModal
          onSelectHobby={handleSelectHobby}
          onCancel={handleCloseAddModal}
          excludeIds={hobbies.slice(0, 6).map(h => h.id)}
        />
      </Modal>
    </View>
  );
}
