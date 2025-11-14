import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { colors } from '@/src/theme';
import { styles } from './DayScheduleItem.styles';

interface ScheduleTableRowProps {
  hour: string;
  schedule: {
    seg: boolean;
    ter: boolean;
    qua: boolean;
    qui: boolean;
    sex: boolean;
    sab: boolean;
    dom: boolean;
  };
  onToggle: (hour: string, day: string) => void;
  onRowToggle: (hour: string) => void;
}

export default function ScheduleTableRow({ hour, schedule, onToggle, onRowToggle }: ScheduleTableRowProps) {
  const days = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'];

  return (
    <View style={styles.row}>
      <TouchableOpacity
        style={styles.hourCell}
        onPress={() => onRowToggle(hour)}
        activeOpacity={0.7}
      >
        <Text style={styles.hourText}>{hour}</Text>
      </TouchableOpacity>

      {days.map((day) => (
        <TouchableOpacity
          key={day}
          style={[
            styles.dayCell,
            schedule[day as keyof typeof schedule] && styles.dayCellActive
          ]}
          onPress={() => onToggle(hour, day)}
          activeOpacity={0.7}
        />
      ))}
    </View>
  );
}
