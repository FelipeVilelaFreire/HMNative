import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { BaseModal, LocationModal, DistanceModal, ScheduleModal, CategoryModal, HobbyModal } from '@/src/components/modals';
import RatingModal from '@/src/components/modals/RatingModal/RatingModal';
import { hobbies } from '@/src/mocks/hobbies';
import { styles } from './FilterModal.styles';

interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
  onApplyFilters: (filters: FilterState) => void;
  initialFilters?: FilterState;
}

export interface FilterState {
  location: string;
  distance: number;
  schedule: string[];
  categories: string[];
  hobbies: string[];
  rating: number;
}

export default function FilterModal({
  visible,
  onClose,
  onApplyFilters,
  initialFilters,
}: FilterModalProps) {
  // Estados dos filtros
  const [selectedLocation, setSelectedLocation] = useState(
    initialFilters?.location || 'R. Quinze de Novembro 40'
  );
  const [selectedDistance, setSelectedDistance] = useState(
    initialFilters?.distance || 20
  );
  const [selectedSchedule, setSelectedSchedule] = useState<string[]>(
    initialFilters?.schedule || []
  );
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialFilters?.categories || []
  );
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>(
    initialFilters?.hobbies || []
  );
  const [selectedRating, setSelectedRating] = useState(
    initialFilters?.rating || 0
  );

  // Estados dos modais internos
  const [isLocationModalVisible, setIsLocationModalVisible] = useState(false);
  const [isDistanceModalVisible, setIsDistanceModalVisible] = useState(false);
  const [isScheduleModalVisible, setIsScheduleModalVisible] = useState(false);
  const [isCategoryModalVisible, setIsCategoryModalVisible] = useState(false);
  const [isHobbyModalVisible, setIsHobbyModalVisible] = useState(false);
  const [isRatingModalVisible, setIsRatingModalVisible] = useState(false);

  // Lógica de sincronização: Categorias → Hobbies
  useEffect(() => {
    // Quando categorias mudam, atualizar hobbies
    const hobbiesFromCategories = selectedCategories.flatMap(categoryId =>
      hobbies.filter(hobby => hobby.categoryId === categoryId).map(hobby => hobby.id)
    );

    // Manter hobbies que não são das categorias selecionadas (avulsos)
    const avulsoHobbies = selectedHobbies.filter(hobbyId => {
      const hobby = hobbies.find(h => h.id === hobbyId);
      return hobby && !selectedCategories.includes(hobby.categoryId);
    });

    // Combinar hobbies das categorias + avulsos
    const newHobbies = [...new Set([...hobbiesFromCategories, ...avulsoHobbies])];

    if (JSON.stringify(newHobbies.sort()) !== JSON.stringify(selectedHobbies.sort())) {
      setSelectedHobbies(newHobbies);
    }
  }, [selectedCategories]);

  // Lógica de sincronização: Hobbies → Categorias
  useEffect(() => {
    // Verificar se todos os hobbies de uma categoria foram desmarcados
    const categoriesToRemove = selectedCategories.filter(categoryId => {
      const categoryHobbies = hobbies.filter(hobby => hobby.categoryId === categoryId);
      const selectedCategoryHobbies = categoryHobbies.filter(hobby =>
        selectedHobbies.includes(hobby.id)
      );
      return selectedCategoryHobbies.length === 0;
    });

    if (categoriesToRemove.length > 0) {
      setSelectedCategories(prev =>
        prev.filter(id => !categoriesToRemove.includes(id))
      );
    }
  }, [selectedHobbies]);

  const handleApplyFilters = () => {
    const filters: FilterState = {
      location: selectedLocation,
      distance: selectedDistance,
      schedule: selectedSchedule,
      categories: selectedCategories,
      hobbies: selectedHobbies,
      rating: selectedRating,
    };

    onApplyFilters(filters);
    onClose();
  };

  const handleClearFilters = () => {
    setSelectedLocation('R. Quinze de Novembro 40');
    setSelectedDistance(20);
    setSelectedSchedule([]);
    setSelectedCategories([]);
    setSelectedHobbies([]);
    setSelectedRating(0);
  };

  const handleSelectLocation = (location: string) => {
    setSelectedLocation(location);
  };

  const handleSelectDistance = (distance: number) => {
    setSelectedDistance(distance);
  };

  const handleSelectSchedule = (schedules: string[]) => {
    setSelectedSchedule(schedules);
  };

  const handleSelectRating = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleSelectCategories = (categories: string[]) => {
    setSelectedCategories(categories);
  };

  const handleSelectHobbies = (hobbies: string[]) => {
    setSelectedHobbies(hobbies);
  };

  // Contar filtros ativos
  const activeFiltersCount =
    (selectedLocation !== 'R. Quinze de Novembro 40' ? 1 : 0) +
    (selectedDistance !== 20 ? 1 : 0) +
    selectedSchedule.length +
    selectedCategories.length +
    selectedHobbies.length +
    (selectedRating > 0 ? 1 : 0);

  return (
    <>
      <BaseModal
        visible={visible}
        onClose={onClose}
        height={0.9}
        enableDragAnywhere={false}
        title={
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Filtros</Text>
            {activeFiltersCount > 0 && (
              <Text style={styles.subtitle}>
                {activeFiltersCount} {activeFiltersCount === 1 ? 'filtro ativo' : 'filtros ativos'}
              </Text>
            )}
          </View>
        }
      >
        {/* Conteúdo scrollável */}
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {/* Seção 1: Localização */}
          <TouchableOpacity
            style={styles.filterSection}
            onPress={() => setIsLocationModalVisible(true)}
            activeOpacity={0.7}
          >
            <View style={styles.filterSectionLeft}>
              <View style={[styles.filterIconContainer, { backgroundColor: colors.primaryBackground }]}>
                <Ionicons name="location" size={24} color={colors.primary} />
              </View>
              <View style={styles.filterSectionInfo}>
                <Text style={styles.filterSectionTitle}>Localização</Text>
                <Text style={styles.filterSectionValue}>{selectedLocation}</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.gray400} />
          </TouchableOpacity>

          {/* Seção 2: Distância */}
          <TouchableOpacity
            style={styles.filterSection}
            onPress={() => setIsDistanceModalVisible(true)}
            activeOpacity={0.7}
          >
            <View style={styles.filterSectionLeft}>
              <View style={[styles.filterIconContainer, { backgroundColor: colors.primaryBackground }]}>
                <Ionicons name="navigate" size={24} color={colors.primary} />
              </View>
              <View style={styles.filterSectionInfo}>
                <Text style={styles.filterSectionTitle}>Distância</Text>
                <Text style={styles.filterSectionValue}>Até {selectedDistance} km</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.gray400} />
          </TouchableOpacity>

          {/* Seção 3: Horário */}
          <TouchableOpacity
            style={styles.filterSection}
            onPress={() => setIsScheduleModalVisible(true)}
            activeOpacity={0.7}
          >
            <View style={styles.filterSectionLeft}>
              <View style={[styles.filterIconContainer, { backgroundColor: colors.scheduleBackground }]}>
                <Ionicons name="time" size={24} color={colors.schedule} />
              </View>
              <View style={styles.filterSectionInfo}>
                <Text style={styles.filterSectionTitle}>Horário</Text>
                <Text style={styles.filterSectionValue}>
                  {selectedSchedule.length > 0 ? `${selectedSchedule.length} selecionados` : 'Qualquer horário'}
                </Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.gray400} />
          </TouchableOpacity>

          {/* Seção 4: Categorias */}
          <TouchableOpacity
            style={styles.filterSection}
            onPress={() => setIsCategoryModalVisible(true)}
            activeOpacity={0.7}
          >
            <View style={styles.filterSectionLeft}>
              <View style={[styles.filterIconContainer, { backgroundColor: colors.hobbyBackground }]}>
                <Ionicons name="grid" size={24} color={colors.hobby} />
              </View>
              <View style={styles.filterSectionInfo}>
                <Text style={styles.filterSectionTitle}>Categorias</Text>
                <Text style={styles.filterSectionValue}>
                  {selectedCategories.length > 0 ? `${selectedCategories.length} selecionadas` : 'Todas'}
                </Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.gray400} />
          </TouchableOpacity>

          {/* Seção 4.5: Hobbies */}
          <TouchableOpacity
            style={styles.filterSection}
            onPress={() => setIsHobbyModalVisible(true)}
            activeOpacity={0.7}
          >
            <View style={styles.filterSectionLeft}>
              <View style={[styles.filterIconContainer, { backgroundColor: colors.hobbyBackground }]}>
                <FontAwesome5 name="running" size={20} color={colors.hobby} />
              </View>
              <View style={styles.filterSectionInfo}>
                <Text style={styles.filterSectionTitle}>Hobbies</Text>
                <Text style={styles.filterSectionValue}>
                  {selectedHobbies.length > 0 ? `${selectedHobbies.length} selecionados` : 'Todos'}
                </Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.gray400} />
          </TouchableOpacity>

          {/* Seção 5: Avaliação */}
          <TouchableOpacity
            style={styles.filterSection}
            onPress={() => setIsRatingModalVisible(true)}
            activeOpacity={0.7}
          >
            <View style={styles.filterSectionLeft}>
              <View style={[styles.filterIconContainer, { backgroundColor: colors.starBackground }]}>
                <Ionicons name="star" size={24} color={colors.star} />
              </View>
              <View style={styles.filterSectionInfo}>
                <Text style={styles.filterSectionTitle}>Avaliação</Text>
                <Text style={styles.filterSectionValue}>
                  {selectedRating > 0 ? `${selectedRating}+ estrelas` : 'Todas as avaliações'}
                </Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.gray400} />
          </TouchableOpacity>

          <View style={{ height: 20 }} />
        </ScrollView>

        {/* Footer com botões */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.clearButton}
            onPress={handleClearFilters}
            activeOpacity={0.7}
          >
            <Text style={styles.clearButtonText}>Limpar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.applyButton}
            onPress={handleApplyFilters}
            activeOpacity={0.7}
          >
            <Text style={styles.applyButtonText}>
              Aplicar {activeFiltersCount > 0 && `(${activeFiltersCount})`}
            </Text>
          </TouchableOpacity>
        </View>
      </BaseModal>

      {/* LocationModal - Modal dentro do modal */}
      <LocationModal
        visible={isLocationModalVisible}
        onClose={() => setIsLocationModalVisible(false)}
        onSelectLocation={handleSelectLocation}
        currentLocation={selectedLocation}
      />

      {/* DistanceModal - Modal dentro do modal */}
      <DistanceModal
        visible={isDistanceModalVisible}
        onClose={() => setIsDistanceModalVisible(false)}
        onSelectDistance={handleSelectDistance}
        currentDistance={selectedDistance}
      />

      {/* ScheduleModal - Modal dentro do modal */}
      <ScheduleModal
        visible={isScheduleModalVisible}
        onClose={() => setIsScheduleModalVisible(false)}
        onSelectSchedule={handleSelectSchedule}
        currentSchedule={selectedSchedule}
      />

      {/* RatingModal - Modal dentro do modal */}
      <RatingModal
        visible={isRatingModalVisible}
        onClose={() => setIsRatingModalVisible(false)}
        onSelectRating={handleSelectRating}
        currentRating={selectedRating}
      />

      {/* CategoryModal - Modal dentro do modal */}
      <CategoryModal
        visible={isCategoryModalVisible}
        onClose={() => setIsCategoryModalVisible(false)}
        onSelectCategories={handleSelectCategories}
        selectedCategories={selectedCategories}
      />

      {/* HobbyModal - Modal dentro do modal */}
      <HobbyModal
        visible={isHobbyModalVisible}
        onClose={() => setIsHobbyModalVisible(false)}
        onSelectHobbies={handleSelectHobbies}
        selectedHobbies={selectedHobbies}
        selectedCategories={selectedCategories}
      />
    </>
  );
}
