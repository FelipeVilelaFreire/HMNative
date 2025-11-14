import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import ScheduleTableRow from '@/src/components/schedule/DayScheduleItem/DayScheduleItem';
import { userScheduleGrid, hours, extraHours, daysLabels, daysOfWeek } from '@/src/mocks/schedules';
import { styles, ICON_SIZE, ARROW_SIZE } from './ScheduleCard.styles';

export default function ScheduleCard() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [schedule, setSchedule] = useState(userScheduleGrid);
  const [showExtraHours, setShowExtraHours] = useState(false);
  const animatedHeight = useRef(new Animated.Value(0)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const allHours = showExtraHours ? [...hours, ...extraHours] : hours;

  const handleToggle = (hour: string, day: string) => {
    setSchedule(prev => ({
      ...prev,
      [hour]: {
        ...prev[hour],
        [day]: !prev[hour][day as keyof typeof prev[typeof hour]]
      }
    }));
  };

  const handleColumnToggle = (day: string) => {
    const allTrue = allHours.every(hour => schedule[hour][day as keyof typeof schedule[typeof hour]]);

    setSchedule(prev => {
      const updated = { ...prev };
      allHours.forEach(hour => {
        updated[hour] = {
          ...updated[hour],
          [day]: !allTrue
        };
      });
      return updated;
    });
  };

  const handleRowToggle = (hour: string) => {
    const allTrue = daysOfWeek.every(day => schedule[hour][day as keyof typeof schedule[typeof hour]]);

    setSchedule(prev => ({
      ...prev,
      [hour]: daysOfWeek.reduce((acc, day) => ({
        ...acc,
        [day]: !allTrue
      }), prev[hour])
    }));
  };

  const handleToggleAll = () => {
    const allTrue = allHours.every(hour =>
      daysOfWeek.every(day => schedule[hour][day as keyof typeof schedule[typeof hour]])
    );

    setSchedule(prev => {
      const updated = { ...prev };
      allHours.forEach(hour => {
        updated[hour] = daysOfWeek.reduce((acc, day) => ({
          ...acc,
          [day]: !allTrue
        }), prev[hour]);
      });
      return updated;
    });
  };

  useEffect(() => {
    Animated.parallel([
      Animated.timing(animatedHeight, {
        toValue: isExpanded ? 1 : 0,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(rotateAnim, {
        toValue: isExpanded ? 1 : 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, [isExpanded, showExtraHours]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const heightInterpolate = animatedHeight.interpolate({
    inputRange: [0, 1],
    outputRange: [0, showExtraHours ? 1000 : 650],
  });

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View style={[styles.container, isExpanded && styles.expanded]}>
      <TouchableOpacity
        style={styles.header}
        onPress={toggleExpand}
        activeOpacity={0.7}
      >
        <FontAwesome5 name="calendar-alt" size={ICON_SIZE} color={colors.schedule} />
        <Text style={styles.title}>Meus Horários</Text>
        <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
          <FontAwesome5
            name="chevron-down"
            size={ARROW_SIZE}
            color={colors.secondary}
          />
        </Animated.View>
      </TouchableOpacity>

      <Animated.View
        style={[
          styles.content,
          {
            maxHeight: heightInterpolate,
            opacity: animatedHeight,
          },
        ]}
      >
        <View style={styles.scheduleContainer}>
          {/* Header da tabela */}
          <View style={styles.tableHeader}>
            <TouchableOpacity
              style={styles.headerHourCell}
              onPress={handleToggleAll}
              activeOpacity={0.7}
            >
              <Text style={styles.headerText}>Horário</Text>
            </TouchableOpacity>
            {daysLabels.map((day, index) => (
              <TouchableOpacity
                key={day}
                style={styles.headerDayCell}
                onPress={() => handleColumnToggle(daysOfWeek[index])}
                activeOpacity={0.7}
              >
                <Text style={styles.headerText}>{day}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Linhas de horários */}
          {allHours.map((hour) => (
            <ScheduleTableRow
              key={hour}
              hour={hour}
              schedule={schedule[hour]}
              onToggle={handleToggle}
              onRowToggle={handleRowToggle}
            />
          ))}
        </View>

        {/* Botão para mostrar horários extras */}
        <TouchableOpacity
          style={styles.extraHoursButton}
          onPress={() => setShowExtraHours(!showExtraHours)}
          activeOpacity={0.7}
        >
          <FontAwesome5
            name={showExtraHours ? 'minus' : 'plus'}
            size={14}
            color={colors.schedule}
          />
          <Text style={styles.extraHoursText}>
            {showExtraHours ? 'Menos horários' : 'Mais horários'}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
