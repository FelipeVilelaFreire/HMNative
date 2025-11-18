import { View, Dimensions } from 'react-native';
import { useState, useCallback } from 'react';
import { SearchHeader, MapView, ActivitiesModal } from './components';
import { activities } from '@/src/mocks/activities';
import { styles } from './Search.styles';

const { height: screenHeight } = Dimensions.get('window');

export default function Search() {
  // Área útil = 80% da tela (excluindo header 11% e footer 9%)
  const USEFUL_AREA_HEIGHT = screenHeight * 0.80;

  // Modal varia entre 15%, 45% e 100% da área útil (80%)
  const MIN_MODAL_HEIGHT = USEFUL_AREA_HEIGHT * 0.15; // 15% dos 80%
  const MID_MODAL_HEIGHT = USEFUL_AREA_HEIGHT * 0.45; // 45% dos 80%
  const MAX_MODAL_HEIGHT = USEFUL_AREA_HEIGHT; // 100% dos 80%
  const INITIAL_MODAL_HEIGHT = USEFUL_AREA_HEIGHT * 0.15; // Começa minimizado

  const [modalHeight, setModalHeight] = useState(INITIAL_MODAL_HEIGHT);

  // Modal está maximizado quando ocupa 100% da área útil
  const isModalMaximized = modalHeight >= MAX_MODAL_HEIGHT - 20;

  const handleSearchPress = () => {
    console.log('Abrir pesquisa');
  };

  const handleFilterPress = () => {
    console.log('Abrir filtros');
  };

  const handleModalDrag = useCallback((newHeight: number) => {
    const clampedHeight = Math.max(MIN_MODAL_HEIGHT, Math.min(MAX_MODAL_HEIGHT, newHeight));
    setModalHeight(clampedHeight);
  }, [MIN_MODAL_HEIGHT, MAX_MODAL_HEIGHT]);

  return (
    <View style={styles.container}>
      {/* Header fixo - 11% */}
      <View style={styles.headerContainer}>
        <SearchHeader onPress={handleSearchPress} onFilterPress={handleFilterPress} />
      </View>

      {/* Área útil - 80% fixo (mapa + modal) */}
      <View style={[styles.usefulArea, { height: USEFUL_AREA_HEIGHT }]}>
        {/* Mapa FIXO - sempre 80% da tela, não muda */}
        <View style={styles.mapContainer}>
          <MapView />
        </View>

        {/* Modal sobreposto ao mapa - varia de 15%, 45% e 100% dos 80% */}
        <View style={styles.modalContainer}>
          <ActivitiesModal
            height={modalHeight}
            activitiesCount={activities.length}
            activities={activities}
            onDrag={handleModalDrag}
            minHeight={MIN_MODAL_HEIGHT}
            midHeight={MID_MODAL_HEIGHT}
            maxHeight={MAX_MODAL_HEIGHT}
            isMaximized={isModalMaximized}
          />
        </View>
      </View>
    </View>
  );
}
