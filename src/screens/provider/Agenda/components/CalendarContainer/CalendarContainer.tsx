import React, { useState } from 'react';
import { View, Animated } from 'react-native';
import { CalendarHeader } from '../CalendarHeader';
import { MonthView } from '../MonthView';
import { WeekView } from '../WeekView';
import { DayView } from '../DayView';
import { AddActivityModal } from '../AddActivityModal';
import { styles } from './CalendarContainer.styles';

export type ViewMode = 'month' | 'week' | 'day';

interface CalendarContainerProps {
  onDateSelect?: (date: Date) => void;
}

export default function CalendarContainer({ onDateSelect }: CalendarContainerProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('month');
  const [showMenu, setShowMenu] = useState(false);
  const fadeAnim = useState(new Animated.Value(1))[0];

  // Estado do modal de adicionar atividade
  const [showActivityModal, setShowActivityModal] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [modalDate, setModalDate] = useState<Date | null>(null);

  const handleViewModeChange = (mode: ViewMode) => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();

    setViewMode(mode);
    setShowMenu(false);
  };

  // Navegação
  const handlePrevious = () => {
    const newDate = new Date(currentDate);
    if (viewMode === 'day') {
      newDate.setDate(currentDate.getDate() - 1);
    } else if (viewMode === 'week') {
      newDate.setDate(currentDate.getDate() - 7);
    } else {
      newDate.setMonth(currentDate.getMonth() - 1);
    }
    setCurrentDate(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(currentDate);
    if (viewMode === 'day') {
      newDate.setDate(currentDate.getDate() + 1);
    } else if (viewMode === 'week') {
      newDate.setDate(currentDate.getDate() + 7);
    } else {
      newDate.setMonth(currentDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  // Handler para seleção de data
  const handleDateSelect = (date: Date, goToDay: boolean = false) => {
    setSelectedDate(date);
    if (goToDay) {
      setCurrentDate(date);
      handleViewModeChange('day');
    }
    onDateSelect?.(date);
  };

  // Handler para abrir modal de adicionar atividade
  const handleTimeSlotPress = (date: Date, time: string) => {
    setModalDate(date);
    setSelectedTime(time);
    setShowActivityModal(true);
  };

  // Handler para fechar modal
  const handleCloseActivityModal = () => {
    setShowActivityModal(false);
    setSelectedTime(null);
    setModalDate(null);
  };

  return (
    <View style={styles.container}>
      <CalendarHeader
        currentDate={currentDate}
        viewMode={viewMode}
        showMenu={showMenu}
        onToggleMenu={() => setShowMenu(!showMenu)}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onViewModeChange={handleViewModeChange}
      />

      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        {viewMode === 'day' ? (
          <DayView
            currentDate={currentDate}
            onTimeSlotPress={handleTimeSlotPress}
          />
        ) : viewMode === 'week' ? (
          <WeekView
            currentDate={currentDate}
            selectedDate={selectedDate}
            onDateSelect={(date) => handleDateSelect(date, true)}
            onTimeSlotPress={handleTimeSlotPress}
          />
        ) : (
          <MonthView
            currentDate={currentDate}
            selectedDate={selectedDate}
            onDateSelect={(date) => handleDateSelect(date, true)}
          />
        )}
      </Animated.View>

      {/* Modal de adicionar atividade */}
      <AddActivityModal
        visible={showActivityModal}
        onClose={handleCloseActivityModal}
        selectedDate={modalDate}
        selectedTime={selectedTime}
      />
    </View>
  );
}
