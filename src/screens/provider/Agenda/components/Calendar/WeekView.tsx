import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '@/src/theme';
import { styles } from './Calendar.styles';

interface WeekViewProps {
  currentDate: Date;
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
}

const DAYS_OF_WEEK = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

// Horários de 6h às 22h
const TIME_SLOTS = [
  '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
  '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
  '18:00', '19:00', '20:00', '21:00', '22:00',
];

export default function WeekView({ currentDate, selectedDate, onDateSelect }: WeekViewProps) {
  // Obter os dias da semana atual
  const getWeekDays = () => {
    const startOfWeek = new Date(currentDate);
    const day = startOfWeek.getDay();
    startOfWeek.setDate(startOfWeek.getDate() - day);

    const weekDays: Date[] = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      weekDays.push(date);
    }

    return weekDays;
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const weekDays = getWeekDays();

  return (
    <View style={styles.weekViewGrid}>
      {/* Header com dias da semana */}
      <View style={styles.weekGridHeader}>
        {/* Espaço vazio no canto superior esquerdo */}
        <View style={styles.weekGridTimeColumn} />

        {/* Colunas dos dias */}
        {weekDays.map((date, index) => {
          const today = isToday(date);
          const dayOfMonth = date.getDate();

          return (
            <View key={index} style={styles.weekGridDayHeader}>
              <Text style={styles.weekGridDayLabel}>{DAYS_OF_WEEK[index]}</Text>
              <Text
                style={[
                  styles.weekGridDayNumber,
                  today && styles.weekGridDayNumberToday,
                ]}
              >
                {dayOfMonth}
              </Text>
            </View>
          );
        })}
      </View>

      {/* Grid de horários */}
      <ScrollView style={styles.weekGridScroll} showsVerticalScrollIndicator={false}>
        {TIME_SLOTS.map((time, timeIndex) => (
          <View key={time} style={styles.weekGridRow}>
            {/* Coluna de horário */}
            <View style={styles.weekGridTimeCell}>
              <Text style={styles.weekGridTimeText}>{time}</Text>
            </View>

            {/* Células para cada dia */}
            {weekDays.map((date, dayIndex) => {
              const today = isToday(date);

              // Mock: adiciona atividade em alguns slots
              const hasActivity = dayIndex === 2 && timeIndex === 2; // Quarta às 8h

              return (
                <TouchableOpacity
                  key={dayIndex}
                  style={[
                    styles.weekGridCell,
                    today && styles.weekGridCellToday,
                  ]}
                  onPress={() => onDateSelect(date)}
                  activeOpacity={0.7}
                >
                  {hasActivity && (
                    <View style={styles.weekGridActivity}>
                      <Text style={styles.weekGridActivityText} numberOfLines={2}>
                        Yoga matinal
                      </Text>
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
}
