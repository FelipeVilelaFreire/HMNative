import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '@/src/theme';
import { styles } from './WeekView.styles';

interface WeekViewProps {
  currentDate: Date;
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
  onTimeSlotPress?: (date: Date, time: string) => void;
}

const DAYS_OF_WEEK = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

const TIME_SLOTS = [
  '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
  '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
  '18:00', '19:00', '20:00', '21:00', '22:00', '23:00',
  '00:00', '01:00', '02:00', '03:00', '04:00', '05:00',
];

export default function WeekView({ currentDate, selectedDate, onDateSelect, onTimeSlotPress }: WeekViewProps) {
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
    <View style={styles.container}>
      {/* Header com dias da semana */}
      <View style={styles.header}>
        <View style={styles.timeColumn} />

        {weekDays.map((date, index) => {
          const today = isToday(date);
          const dayOfMonth = date.getDate();

          return (
            <View key={index} style={styles.dayHeader}>
              <Text style={styles.dayLabel}>{DAYS_OF_WEEK[index]}</Text>
              <Text
                style={[
                  styles.dayNumber,
                  today && styles.dayNumberToday,
                ]}
              >
                {dayOfMonth}
              </Text>
            </View>
          );
        })}
      </View>

      {/* Grid de horários */}
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {TIME_SLOTS.map((time, timeIndex) => (
          <View key={time} style={styles.row}>
            <View style={styles.timeCell}>
              <Text style={styles.timeText}>{time}</Text>
            </View>

            {weekDays.map((date, dayIndex) => {
              const today = isToday(date);
              const hasActivity = dayIndex === 2 && timeIndex === 2;

              return (
                <TouchableOpacity
                  key={dayIndex}
                  style={styles.cell}
                  onPress={() => onTimeSlotPress?.(date, time)}
                  activeOpacity={0.7}
                >
                  {hasActivity && (
                    <View style={styles.activity}>
                      <Text style={styles.activityText} numberOfLines={2}>
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
