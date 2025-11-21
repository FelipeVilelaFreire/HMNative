import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { ViewMode } from '../CalendarContainer';
import { styles } from './CalendarHeader.styles';

const MONTHS = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

interface CalendarHeaderProps {
  currentDate: Date;
  viewMode: ViewMode;
  showMenu: boolean;
  onToggleMenu: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onViewModeChange: (mode: ViewMode) => void;
}

export default function CalendarHeader({
  currentDate,
  viewMode,
  showMenu,
  onToggleMenu,
  onPrevious,
  onNext,
  onViewModeChange,
}: CalendarHeaderProps) {
  return (
    <>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.monthYear}>
            {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
          </Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={onToggleMenu}
            activeOpacity={0.7}
          >
            <FontAwesome5 name="ellipsis-v" size={14} color={colors.secondary} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={onPrevious}
            activeOpacity={0.7}
          >
            <FontAwesome5 name="chevron-left" size={14} color={colors.secondary} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={onNext}
            activeOpacity={0.7}
          >
            <FontAwesome5 name="chevron-right" size={14} color={colors.secondary} />
          </TouchableOpacity>
        </View>
      </View>

      {showMenu && (
        <View style={styles.menuDropdown}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => onViewModeChange('month')}
            activeOpacity={0.7}
          >
            <FontAwesome5 name="calendar-alt" size={16} color={colors.secondary} />
            <Text style={styles.menuItemText}>Mensal</Text>
            {viewMode === 'month' && (
              <FontAwesome5 name="check" size={16} color={colors.primary} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => onViewModeChange('week')}
            activeOpacity={0.7}
          >
            <FontAwesome5 name="calendar-week" size={16} color={colors.secondary} />
            <Text style={styles.menuItemText}>Semanal</Text>
            {viewMode === 'week' && (
              <FontAwesome5 name="check" size={16} color={colors.primary} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => onViewModeChange('day')}
            activeOpacity={0.7}
          >
            <FontAwesome5 name="calendar-day" size={16} color={colors.secondary} />
            <Text style={styles.menuItemText}>Diário</Text>
            {viewMode === 'day' && (
              <FontAwesome5 name="check" size={16} color={colors.primary} />
            )}
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
