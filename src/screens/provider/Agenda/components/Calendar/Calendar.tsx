import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { styles } from './Calendar.styles';
import WeekView from './WeekView';
import DayView from './DayView';

interface CalendarProps {
  onDateSelect?: (date: Date) => void;
}

const DAYS_OF_WEEK = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const MONTHS = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

type ViewMode = 'month' | 'week' | 'day';

export default function Calendar({ onDateSelect }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('month');
  const [showMenu, setShowMenu] = useState(false);
  const fadeAnim = useState(new Animated.Value(1))[0];

  const handleViewModeChange = (mode: ViewMode) => {
    // Animação de fade
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

  // Navegar para mês anterior
  const goToPreviousMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  // Navegar para próximo mês
  const goToNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  // Navegar para semana anterior
  const goToPreviousWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  // Navegar para próxima semana
  const goToNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  // Navegar para dia anterior
  const goToPreviousDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  // Navegar para próximo dia
  const goToNextDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  // Voltar para hoje
  const goToToday = () => {
    setCurrentDate(new Date());
  };

  // Navegação baseada no modo de visualização
  const handlePrevious = () => {
    if (viewMode === 'day') {
      goToPreviousDay();
    } else if (viewMode === 'week') {
      goToPreviousWeek();
    } else {
      goToPreviousMonth();
    }
  };

  const handleNext = () => {
    if (viewMode === 'day') {
      goToNextDay();
    } else if (viewMode === 'week') {
      goToNextWeek();
    } else {
      goToNextMonth();
    }
  };

  // Obter dias do mês atual
  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: (number | null)[] = [];

    // Adicionar dias vazios antes do primeiro dia
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Adicionar os dias do mês
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  // Verificar se é hoje
  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  // Verificar se está selecionado
  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      day === selectedDate.getDate() &&
      currentDate.getMonth() === selectedDate.getMonth() &&
      currentDate.getFullYear() === selectedDate.getFullYear()
    );
  };

  // Selecionar dia
  const handleDayPress = (day: number) => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    setSelectedDate(newDate);
    onDateSelect?.(newDate);
  };

  const days = getDaysInMonth();

  return (
    <View style={styles.container}>
      {/* Header com navegação */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.monthYear}>
            {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
          </Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => setShowMenu(!showMenu)}
            activeOpacity={0.7}
          >
            <FontAwesome5 name="ellipsis-v" size={16} color={colors.secondary} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={handlePrevious}
            activeOpacity={0.7}
          >
            <FontAwesome5 name="chevron-left" size={16} color={colors.secondary} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={handleNext}
            activeOpacity={0.7}
          >
            <FontAwesome5 name="chevron-right" size={16} color={colors.secondary} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Menu Dropdown */}
      {showMenu && (
        <View style={styles.menuDropdown}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleViewModeChange('month')}
            activeOpacity={0.7}
          >
            <FontAwesome5 name="calendar-alt" size={16} color={colors.secondary} />
            <Text style={styles.menuItemText}>Visualização Mensal</Text>
            {viewMode === 'month' && (
              <FontAwesome5 name="check" size={16} color={colors.primary} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleViewModeChange('week')}
            activeOpacity={0.7}
          >
            <FontAwesome5 name="calendar-week" size={16} color={colors.secondary} />
            <Text style={styles.menuItemText}>Visualização Semanal</Text>
            {viewMode === 'week' && (
              <FontAwesome5 name="check" size={16} color={colors.primary} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleViewModeChange('day')}
            activeOpacity={0.7}
          >
            <FontAwesome5 name="calendar-day" size={16} color={colors.secondary} />
            <Text style={styles.menuItemText}>Visualização Diária</Text>
            {viewMode === 'day' && (
              <FontAwesome5 name="check" size={16} color={colors.primary} />
            )}
          </TouchableOpacity>
        </View>
      )}

      {/* Conteúdo baseado no modo de visualização com animação */}
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        {viewMode === 'day' ? (
          <DayView
            currentDate={currentDate}
            onDateSelect={(date) => {
              setSelectedDate(date);
              onDateSelect?.(date);
            }}
          />
        ) : viewMode === 'week' ? (
          <WeekView
            currentDate={currentDate}
            selectedDate={selectedDate}
            onDateSelect={(date) => {
              setSelectedDate(date);
              setCurrentDate(date);
              handleViewModeChange('day');
            }}
          />
        ) : (
          <>
          {/* Dias da semana */}
          <View style={styles.weekDays}>
            {DAYS_OF_WEEK.map((day) => (
              <View key={day} style={styles.weekDayCell}>
                <Text style={styles.weekDayText}>{day}</Text>
              </View>
            ))}
          </View>

          {/* Grid de dias */}
          <View style={styles.daysGrid}>
        {days.map((day, index) => {
          if (day === null) {
            return <View key={`empty-${index}`} style={styles.dayCell} />;
          }

          const today = isToday(day);
          const selected = isSelected(day);

          // Mock: mostra atividade apenas em alguns dias
          const hasActivity = day % 3 === 0 && day <= 20;
          const activityTitle = hasActivity ? 'Yoga matinal' : null;

          return (
            <TouchableOpacity
              key={day}
              style={[
                styles.dayCell,
                today && styles.todayCell,
                selected && styles.selectedCell,
              ]}
              onPress={() => {
                const newDate = new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth(),
                  day
                );
                setSelectedDate(newDate);
                setCurrentDate(newDate);
                handleViewModeChange('day');
              }}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.dayText,
                  today && styles.todayText,
                  selected && styles.selectedText,
                ]}
              >
                {day}
              </Text>
              {activityTitle && (
                <View style={styles.activityIndicator}>
                  <Text
                    style={[
                      styles.activityText,
                      selected && styles.activityTextSelected,
                    ]}
                    numberOfLines={2}
                  >
                    {activityTitle}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
          </View>
        </>
        )}
      </Animated.View>
    </View>
  );
}
