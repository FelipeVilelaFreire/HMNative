import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './DayView.styles';

interface DayViewProps {
  currentDate: Date;
  onTimeSlotPress?: (date: Date, time: string) => void;
}

const DAYS_OF_WEEK = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

const TIME_SLOTS = [
  '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
  '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
  '18:00', '19:00', '20:00', '21:00', '22:00', '23:00',
  '00:00', '01:00', '02:00', '03:00', '04:00', '05:00',
];

export default function DayView({ currentDate, onTimeSlotPress }: DayViewProps) {
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
    <View style={styles.container}>
      {/* Header com o dia */}
      <View style={styles.header}>
        <View style={styles.timeColumn} />

        <View style={styles.dayHeader}>
          <Text style={styles.dayLabel}>{dayOfWeek}</Text>
          <Text
            style={[
              styles.dayNumber,
              today && styles.dayNumberToday,
            ]}
          >
            {dayOfMonth}
          </Text>
        </View>
      </View>

      {/* Grid de horários */}
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {TIME_SLOTS.map((time, timeIndex) => {
          const hasActivity = timeIndex === 2 || timeIndex === 8;

          return (
            <View key={time} style={styles.row}>
              <View style={styles.timeCell}>
                <Text style={styles.timeText}>{time}</Text>
              </View>

              <TouchableOpacity
                style={styles.cell}
                onPress={() => onTimeSlotPress?.(currentDate, time)}
                activeOpacity={0.7}
              >
                {hasActivity && (
                  <View style={styles.activity}>
                    <Text style={styles.activityText} numberOfLines={3}>
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
