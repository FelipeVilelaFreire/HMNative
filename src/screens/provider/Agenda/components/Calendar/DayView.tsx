import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '@/src/theme';
import { styles } from './Calendar.styles';

interface DayViewProps {
  currentDate: Date;
  onDateSelect?: (date: Date) => void;
}

const DAYS_OF_WEEK = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

// Horários de 6h às 22h
const TIME_SLOTS = [
  '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
  '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
  '18:00', '19:00', '20:00', '21:00', '22:00',
];

export default function DayView({ currentDate, onDateSelect }: DayViewProps) {
  const isToday = () => {
    const today = new Date();
    return (
      currentDate.getDate() === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const dayOfWeek = DAYS_OF_WEEK[currentDate.getDay()];
  const dayOfMonth = currentDate.getDate();
  const today = isToday();

  return (
    <View style={styles.dayViewGrid}>
      {/* Header com o dia */}
      <View style={styles.dayGridHeader}>
        {/* Espaço vazio no canto superior esquerdo */}
        <View style={styles.dayGridTimeColumn} />

        {/* Dia */}
        <View style={styles.dayGridDayHeader}>
          <Text style={styles.dayGridDayLabel}>{dayOfWeek}</Text>
          <Text
            style={[
              styles.dayGridDayNumber,
              today && styles.dayGridDayNumberToday,
            ]}
          >
            {dayOfMonth}
          </Text>
        </View>
      </View>

      {/* Grid de horários */}
      <ScrollView style={styles.dayGridScroll} showsVerticalScrollIndicator={false}>
        {TIME_SLOTS.map((time, timeIndex) => {
          // Mock: adiciona atividade em alguns slots
          const hasActivity = timeIndex === 2 || timeIndex === 8; // 8h e 14h

          return (
            <View key={time} style={styles.dayGridRow}>
              {/* Coluna de horário */}
              <View style={styles.dayGridTimeCell}>
                <Text style={styles.dayGridTimeText}>{time}</Text>
              </View>

              {/* Célula do horário */}
              <TouchableOpacity
                style={styles.dayGridCell}
                onPress={() => onDateSelect?.(currentDate)}
                activeOpacity={0.7}
              >
                {hasActivity && (
                  <View style={styles.dayGridActivity}>
                    <Text style={styles.dayGridActivityText} numberOfLines={3}>
                      {timeIndex === 2 ? 'Yoga matinal' : 'Pilates avançado'}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          );
        })}
        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
}
