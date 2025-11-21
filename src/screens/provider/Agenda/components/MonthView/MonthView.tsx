import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './MonthView.styles';

const DAYS_OF_WEEK = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

interface MonthViewProps {
  currentDate: Date;
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
}

export default function MonthView({ currentDate, selectedDate, onDateSelect }: MonthViewProps) {
  // Obter dias do mês atual
  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: (number | null)[] = [];

    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      day === selectedDate.getDate() &&
      currentDate.getMonth() === selectedDate.getMonth() &&
      currentDate.getFullYear() === selectedDate.getFullYear()
    );
  };

  const days = getDaysInMonth();

  return (
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
                onDateSelect(newDate);
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
  );
}
