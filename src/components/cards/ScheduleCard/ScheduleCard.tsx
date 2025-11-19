import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import ScheduleTableRow from '@/src/components/schedule/DayScheduleItem/DayScheduleItem';
import { EditScheduleModal } from '@/src/components/modals/EditScheduleModal';
import { userScheduleGrid, hours, extraHours, daysLabels, daysOfWeek } from '@/src/mocks/schedules';
import { styles, ICON_SIZE, ARROW_SIZE } from './ScheduleCard.styles';

export default function ScheduleCard() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [schedule, setSchedule] = useState(userScheduleGrid);
  const [showExtraHours, setShowExtraHours] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const animatedHeight = useRef(new Animated.Value(0)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const allHours = showExtraHours ? [...hours, ...extraHours] : hours;

  const handleSaveSchedule = (newSchedule: any) => {
    setSchedule(newSchedule);
    // Aqui você pode adicionar lógica para salvar no backend
    console.log('Horários salvos:', newSchedule);
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
        {/* Botão Editar */}
        <View style={styles.editButtonContainer}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => setIsEditModalVisible(true)}
            activeOpacity={0.7}
          >
            <FontAwesome5 name="edit" size={14} color={colors.schedule} />
            <Text style={styles.editButtonText}>Editar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.scheduleContainer}>
          {/* Header da tabela (não clicável) */}
          <View style={styles.tableHeader}>
            <View style={styles.headerHourCell}>
              <Text style={styles.headerText}>Horário</Text>
            </View>
            {daysLabels.map((day) => (
              <View key={day} style={styles.headerDayCell}>
                <Text style={styles.headerText}>{day}</Text>
              </View>
            ))}
          </View>

          {/* Linhas de horários (não clicáveis) */}
          {allHours.map((hour) => (
            <View key={hour} style={styles.row}>
              <View style={styles.hourCell}>
                <Text style={styles.hourText}>{hour}</Text>
              </View>
              {daysOfWeek.map((day) => (
                <View
                  key={day}
                  style={[
                    styles.dayCell,
                    schedule[hour][day as keyof typeof schedule[typeof hour]] && styles.dayCellActive
                  ]}
                />
              ))}
            </View>
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

      {/* Modal de edição */}
      <EditScheduleModal
        visible={isEditModalVisible}
        onClose={() => setIsEditModalVisible(false)}
        onSave={handleSaveSchedule}
        initialSchedule={schedule}
      />
    </View>
  );
}
