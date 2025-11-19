import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './DaySchedule.styles';

interface DayScheduleProps {
  selectedDate: Date;
  onBack: () => void;
}

const TIME_SLOTS = [
  '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
  '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
  '18:00', '19:00', '20:00', '21:00', '22:00',
];

export default function DaySchedule({ selectedDate, onBack }: DayScheduleProps) {
  const formattedDate = selectedDate.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  const dayOfWeek = selectedDate.toLocaleDateString('pt-BR', {
    weekday: 'long'
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <FontAwesome5 name="chevron-left" size={20} color="#4A5568" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.dayOfWeek}>{dayOfWeek}</Text>
          <Text style={styles.date}>{formattedDate}</Text>
        </View>
      </View>

      {/* Time Slots */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {TIME_SLOTS.map((time) => (
          <View key={time} style={styles.timeSlot}>
            <Text style={styles.timeText}>{time}</Text>
            <View style={styles.slotContent}>
              <Text style={styles.emptySlotText}>Disponível</Text>
            </View>
          </View>
        ))}
        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
}
