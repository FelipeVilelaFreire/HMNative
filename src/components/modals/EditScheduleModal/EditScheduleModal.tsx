import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { hours, extraHours, daysLabels, daysOfWeek } from '@/src/mocks/schedules';
import { styles } from './EditScheduleModal.styles';

interface EditScheduleModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (schedule: any) => void;
  initialSchedule: any;
}

export default function EditScheduleModal({ visible, onClose, onSave, initialSchedule }: EditScheduleModalProps) {
  const [schedule, setSchedule] = useState(initialSchedule);
  const [showExtraHours, setShowExtraHours] = useState(false);

  const allHours = showExtraHours ? [...hours, ...extraHours] : hours;

  const handleToggle = (hour: string, day: string) => {
    setSchedule((prev: any) => ({
      ...prev,
      [hour]: {
        ...prev[hour],
        [day]: !prev[hour][day as keyof typeof prev[typeof hour]]
      }
    }));
  };

  const handleColumnToggle = (day: string) => {
    const allTrue = allHours.every(hour => schedule[hour][day as keyof typeof schedule[typeof hour]]);

    setSchedule((prev: any) => {
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

    setSchedule((prev: any) => ({
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

    setSchedule((prev: any) => {
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

  const handleSave = () => {
    onSave(schedule);
    onClose();
  };

  const handleCancel = () => {
    setSchedule(initialSchedule); // Reset ao cancelar
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Editar Horários</Text>
            <TouchableOpacity onPress={handleCancel} activeOpacity={0.7}>
              <FontAwesome5 name="times" size={24} color={colors.secondary} />
            </TouchableOpacity>
          </View>

          {/* Conteúdo scrollável */}
          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            {/* Instrução de uso */}
            <View style={styles.instructionBanner}>
              <Ionicons name="information-circle" size={20} color={colors.schedule} />
              <View style={styles.instructionTextContainer}>
                <Text style={styles.instructionText}>
                  Clique nos <Text style={styles.instructionTextBold}>dias</Text> ou <Text style={styles.instructionTextBold}>horários</Text> para selecionar coluna/linha inteira
                </Text>
                <Text style={styles.instructionText}>
                  Clique em <Text style={styles.instructionTextBold}>"Horário"</Text> para selecionar tudo
                </Text>
              </View>
            </View>

            {/* Legenda */}
            <View style={styles.legendContainer}>
              <View style={styles.legendItem}>
                <View style={styles.legendBox} />
                <Text style={styles.legendText}>Horário selecionado</Text>
              </View>
            </View>

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
                <View key={hour} style={styles.row}>
                  <TouchableOpacity
                    style={styles.hourCell}
                    onPress={() => handleRowToggle(hour)}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.hourText}>{hour}</Text>
                  </TouchableOpacity>

                  {daysOfWeek.map((day) => {
                    const isActive = schedule[hour][day as keyof typeof schedule[typeof hour]];
                    return (
                      <TouchableOpacity
                        key={day}
                        style={[
                          styles.dayCell,
                          isActive && styles.dayCellActive
                        ]}
                        onPress={() => handleToggle(hour, day)}
                        activeOpacity={0.7}
                      >
                        {isActive && (
                          <Ionicons name="checkmark" size={14} color={colors.white} />
                        )}
                      </TouchableOpacity>
                    );
                  })}
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
          </ScrollView>

          {/* Footer com botões */}
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={handleCancel}
              activeOpacity={0.7}
            >
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleSave}
              activeOpacity={0.7}
            >
              <FontAwesome5 name="check" size={16} color={colors.white} />
              <Text style={styles.saveButtonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
