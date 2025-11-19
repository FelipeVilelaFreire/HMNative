import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { BaseModal } from '@/src/components/modals';
import { userScheduleGrid, hours, extraHours, daysLabels, daysOfWeek } from '@/src/mocks/schedules';
import { styles } from './ScheduleModal.styles';

interface ScheduleModalProps {
  visible: boolean;
  onClose: () => void;
  onSelectSchedule: (schedules: string[]) => void;
  currentSchedule: string[];
}

const PERIOD_OPTIONS = [
  {
    value: 'morning',
    label: 'Manhã',
    description: '06:00 - 12:00',
    icon: 'sunny',
  },
  {
    value: 'afternoon',
    label: 'Tarde',
    description: '12:00 - 18:00',
    icon: 'partly-sunny',
  },
  {
    value: 'evening',
    label: 'Noite',
    description: '18:00 - 00:00',
    icon: 'moon',
  },
  {
    value: 'lateNight',
    label: 'Madrugada',
    description: '00:00 - 06:00',
    icon: 'moon-outline',
  },
];

type TabType = 'periods' | 'custom';

export default function ScheduleModal({
  visible,
  onClose,
  onSelectSchedule,
  currentSchedule,
}: ScheduleModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>('periods');
  const [selectedSchedules, setSelectedSchedules] = useState<string[]>(currentSchedule);
  const [hasInitialized, setHasInitialized] = useState(false);
  const [showExtraHours, setShowExtraHours] = useState(false);

  const allHours = showExtraHours ? [...hours, ...extraHours] : hours;

  // Auto-selecionar horários do perfil do usuário quando modal abrir
  useEffect(() => {
    if (visible && !hasInitialized) {
      const userScheduleSelections: string[] = [];

      hours.forEach((hour) => {
        daysOfWeek.forEach((day) => {
          const isInUserSchedule = userScheduleGrid[hour][day as keyof typeof userScheduleGrid[typeof hour]];
          if (isInUserSchedule) {
            const cellValue = `table_${day}_${hour}`;
            userScheduleSelections.push(cellValue);
          }
        });
      });

      // Adicionar às seleções existentes (se houver)
      setSelectedSchedules(prev => {
        const combined = [...prev, ...userScheduleSelections];
        // Remover duplicatas
        return Array.from(new Set(combined));
      });

      setHasInitialized(true);
    }

    // Resetar quando o modal fechar
    if (!visible && hasInitialized) {
      setHasInitialized(false);
    }
  }, [visible, hasInitialized]);

  // Detectar qual modo está ativo
  const getActiveMode = (): 'periods' | 'custom' | null => {
    if (selectedSchedules.some(s => ['morning', 'afternoon', 'evening', 'lateNight'].includes(s))) {
      return 'periods';
    }
    if (selectedSchedules.some(s => s.startsWith('table_'))) {
      return 'custom';
    }
    return null;
  };

  const handleToggleSchedule = (schedule: string, mode: 'periods' | 'custom') => {
    const currentMode = getActiveMode();

    // Se está selecionando de um modo diferente, limpar seleções antigas
    if (currentMode && currentMode !== mode) {
      setSelectedSchedules([schedule]);
      return;
    }

    // Se é o mesmo modo ou não há modo ativo, toggle normal
    if (selectedSchedules.includes(schedule)) {
      setSelectedSchedules(selectedSchedules.filter(s => s !== schedule));
    } else {
      setSelectedSchedules([...selectedSchedules, schedule]);
    }
  };

  const handleToggleTableCell = (day: string, hour: string) => {
    const cellValue = `table_${day}_${hour}`;
    handleToggleSchedule(cellValue, 'custom');
  };

  // Selecionar toda a coluna (dia)
  const handleSelectColumn = (day: string) => {
    const currentMode = getActiveMode();
    const columnCells = allHours.map(hour => `table_${day}_${hour}`);

    // Se está mudando de modo, limpar seleções antigas
    if (currentMode && currentMode !== 'custom') {
      setSelectedSchedules(columnCells);
      return;
    }

    // Verificar se todos da coluna já estão selecionados
    const allSelected = columnCells.every(cell => selectedSchedules.includes(cell));

    if (allSelected) {
      // Desmarcar toda a coluna
      setSelectedSchedules(selectedSchedules.filter(s => !columnCells.includes(s)));
    } else {
      // Marcar toda a coluna
      const newSelections = [...selectedSchedules];
      columnCells.forEach(cell => {
        if (!newSelections.includes(cell)) {
          newSelections.push(cell);
        }
      });
      setSelectedSchedules(newSelections);
    }
  };

  // Selecionar toda a linha (horário)
  const handleSelectRow = (hour: string) => {
    const currentMode = getActiveMode();
    const rowCells = daysOfWeek.map(day => `table_${day}_${hour}`);

    // Se está mudando de modo, limpar seleções antigas
    if (currentMode && currentMode !== 'custom') {
      setSelectedSchedules(rowCells);
      return;
    }

    // Verificar se todos da linha já estão selecionados
    const allSelected = rowCells.every(cell => selectedSchedules.includes(cell));

    if (allSelected) {
      // Desmarcar toda a linha
      setSelectedSchedules(selectedSchedules.filter(s => !rowCells.includes(s)));
    } else {
      // Marcar toda a linha
      const newSelections = [...selectedSchedules];
      rowCells.forEach(cell => {
        if (!newSelections.includes(cell)) {
          newSelections.push(cell);
        }
      });
      setSelectedSchedules(newSelections);
    }
  };

  // Selecionar toda a tabela
  const handleSelectAll = () => {
    const currentMode = getActiveMode();
    const allCells: string[] = [];

    allHours.forEach(hour => {
      daysOfWeek.forEach(day => {
        allCells.push(`table_${day}_${hour}`);
      });
    });

    // Se está mudando de modo, limpar seleções antigas
    if (currentMode && currentMode !== 'custom') {
      setSelectedSchedules(allCells);
      return;
    }

    // Verificar se todos já estão selecionados
    const allSelected = allCells.every(cell => selectedSchedules.includes(cell));

    if (allSelected) {
      // Desmarcar tudo
      setSelectedSchedules([]);
    } else {
      // Marcar tudo
      setSelectedSchedules(allCells);
    }
  };

  const handleApply = () => {
    onSelectSchedule(selectedSchedules);
    onClose();
  };

  const handleClear = () => {
    setSelectedSchedules([]);
  };

  const renderTabButton = (tab: TabType, label: string) => {
    const isActive = activeTab === tab;
    return (
      <TouchableOpacity
        key={tab}
        style={[styles.tabButton, isActive && styles.tabButtonActive]}
        onPress={() => setActiveTab(tab)}
        activeOpacity={0.7}
      >
        <Text style={[styles.tabButtonText, isActive && styles.tabButtonTextActive]}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderPeriodsTab = () => (
    <>
      <View style={styles.scheduleList}>
        {PERIOD_OPTIONS.map((option) => {
          const isSelected = selectedSchedules.includes(option.value);
          return (
            <TouchableOpacity
              key={option.value}
              style={[
                styles.scheduleItem,
                isSelected && {
                  borderColor: colors.schedule,
                  backgroundColor: colors.scheduleLight
                }
              ]}
              onPress={() => handleToggleSchedule(option.value, 'periods')}
              activeOpacity={0.7}
            >
              <View style={styles.scheduleItemLeft}>
                <View style={styles.scheduleIconContainer}>
                  <Ionicons
                    name={option.icon as any}
                    size={28}
                    color={colors.schedule}
                  />
                </View>
                <View style={styles.scheduleItemInfo}>
                  <Text
                    style={[
                      styles.scheduleItemLabel,
                      isSelected && { color: colors.schedule }
                    ]}
                  >
                    {option.label}
                  </Text>
                  <Text style={styles.scheduleItemDescription}>
                    {option.description}
                  </Text>
                </View>
              </View>
              {isSelected && (
                <Ionicons name="checkmark-circle" size={24} color={colors.schedule} />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );

  const renderCustomTab = () => (
    <View style={styles.tableContainer}>
      <Text style={styles.tableDescription}>
        Clique nos dias/horários para marcar. Clique nos cabeçalhos para selecionar tudo.
      </Text>

      <View style={styles.tableLegend}>
        <View style={styles.legendItem}>
          <View style={[styles.legendBox, { backgroundColor: colors.schedule }]} />
          <Text style={styles.legendText}>Selecionado</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendBox, { backgroundColor: colors.scheduleHover, borderWidth: 1, borderColor: colors.scheduleBorder }]} />
          <Text style={styles.legendText}>Seu horário de preferência</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendBox, { backgroundColor: colors.white, borderWidth: 1, borderColor: colors.gray200 }]} />
          <Text style={styles.legendText}>Outro horário</Text>
        </View>
      </View>

      <View style={styles.scheduleTable}>
        {/* Header da tabela */}
        <View style={styles.tableHeader}>
          <TouchableOpacity
            style={styles.headerHourCell}
            onPress={handleSelectAll}
            activeOpacity={0.7}
          >
            <Text style={[styles.headerText, styles.headerTextClickable]}>Horário</Text>
          </TouchableOpacity>
          {daysLabels.map((day, index) => (
            <TouchableOpacity
              key={day}
              style={styles.headerDayCell}
              onPress={() => handleSelectColumn(daysOfWeek[index])}
              activeOpacity={0.7}
            >
              <Text style={[styles.headerText, styles.headerTextClickable]}>{day}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Linhas de horários - SEM scroll interno */}
        {allHours.map((hour) => (
          <View key={hour} style={styles.tableRow}>
            <TouchableOpacity
              style={styles.hourCell}
              onPress={() => handleSelectRow(hour)}
              activeOpacity={0.7}
            >
              <Text style={[styles.hourText, styles.hourTextClickable]}>{hour}</Text>
            </TouchableOpacity>
            {daysOfWeek.map((day) => {
              const isInUserSchedule = userScheduleGrid[hour][day as keyof typeof userScheduleGrid[typeof hour]];
              const cellValue = `table_${day}_${hour}`;
              const isSelected = selectedSchedules.includes(cellValue);

              return (
                <TouchableOpacity
                  key={day}
                  style={[
                    styles.dayCell,
                    isInUserSchedule && !isSelected && styles.dayCellInSchedule,
                    isSelected && styles.dayCellSelected,
                  ]}
                  onPress={() => handleToggleTableCell(day, hour)}
                  activeOpacity={0.7}
                >
                  {isSelected && (
                    <Ionicons name="checkmark" size={14} color={colors.white} />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        ))}

        {/* Botão para mostrar horários extras - DENTRO do container da tabela */}
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
      </View>
    </View>
  );

  return (
    <BaseModal
      visible={visible}
      onClose={onClose}
      height={0.88}
      title={<Text style={styles.title}>Horários</Text>}
    >
      {/* Aviso de instrução */}
      <View style={styles.modeWarning}>
        <Ionicons name="information-circle" size={20} color={colors.schedule} />
        <Text style={styles.modeWarningText}>
          Filtre por <Text style={styles.modeWarningTextBold}>Períodos</Text> ou <Text style={styles.modeWarningTextBold}>Personalizado</Text>
        </Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {renderTabButton('periods', 'Períodos')}
        {renderTabButton('custom', 'Personalizado')}
      </View>

      {/* Tab Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {activeTab === 'periods' && renderPeriodsTab()}
        {activeTab === 'custom' && renderCustomTab()}

        <View style={{ height: 20 }} />
      </ScrollView>

      {/* Footer com botões */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.clearButton}
          onPress={handleClear}
          activeOpacity={0.7}
        >
          <Text style={styles.clearButtonText}>Limpar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.applyButton}
          onPress={handleApply}
          activeOpacity={0.7}
        >
          <Text style={styles.applyButtonText}>
            Aplicar {selectedSchedules.length > 0 && `(${selectedSchedules.length})`}
          </Text>
        </TouchableOpacity>
      </View>
    </BaseModal>
  );
}
