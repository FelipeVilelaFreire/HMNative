import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, Animated, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { styles } from './AddActivityModal.styles';
import { WarningModal } from '@/src/components/modals';

interface AddActivityModalProps {
  visible: boolean;
  onClose: () => void;
  selectedDate: Date | null;
  selectedTime: string | null;
}

type EventType = 'unique' | 'recurring';
type Frequency = 'weekly' | 'biweekly' | 'monthly';
type PickerType = 'none' | 'date' | 'endDate' | 'startTime' | 'endTime' | 'recurrenceEndDate';
type RecurrenceEndType = 'never' | 'date' | 'occurrences';

const DAYS_OF_WEEK = [
  { key: 'dom', label: 'Dom' },
  { key: 'seg', label: 'Seg' },
  { key: 'ter', label: 'Ter' },
  { key: 'qua', label: 'Qua' },
  { key: 'qui', label: 'Qui' },
  { key: 'sex', label: 'Sex' },
  { key: 'sab', label: 'Sáb' },
];

const FREQUENCIES = [
  { key: 'weekly', label: 'Toda semana' },
  { key: 'biweekly', label: 'Quinzenal' },
  { key: 'monthly', label: 'Todo mês' },
];

const MONTHS = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const WEEK_DAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

const ACTIVITY_COLORS = [
  { key: 'purple', color: '#667eea' },
  { key: 'blue', color: '#3b82f6' },
  { key: 'green', color: '#10b981' },
  { key: 'yellow', color: '#f59e0b' },
  { key: 'red', color: '#ef4444' },
  { key: 'pink', color: '#ec4899' },
  { key: 'cyan', color: '#06b6d4' },
  { key: 'orange', color: '#f97316' },
];

// Mock: Horário de funcionamento do provider (será substituído por dados reais)
const MOCK_OPERATING_HOURS = {
  providerName: 'FutvoleiFreire',
  schedule: {
    dom: null, // fechado
    seg: { start: '09:00', end: '18:00' },
    ter: { start: '09:00', end: '18:00' },
    qua: { start: '09:00', end: '18:00' },
    qui: { start: '09:00', end: '18:00' },
    sex: { start: '09:00', end: '18:00' },
    sab: null, // fechado
  } as Record<string, { start: string; end: string } | null>,
};

export default function AddActivityModal({
  visible,
  onClose,
  selectedDate,
  selectedTime,
}: AddActivityModalProps) {
  const [eventType, setEventType] = useState<EventType>('unique');
  const [date, setDate] = useState<Date>(new Date());
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [endTime, setEndTime] = useState<Date>(new Date());
  const [frequency, setFrequency] = useState<Frequency>('weekly');
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState('#667eea');

  // Estados para data de término (Evento Único)
  const [hasEndDate, setHasEndDate] = useState(false);
  const [endDate, setEndDate] = useState<Date>(new Date());

  // Estados para término da recorrência (Evento Recorrente)
  const [recurrenceEndType, setRecurrenceEndType] = useState<RecurrenceEndType>('never');
  const [recurrenceEndDate, setRecurrenceEndDate] = useState<Date>(new Date());
  const [occurrencesCount, setOccurrencesCount] = useState('10');

  // Estado para modal de aviso de horário fora do funcionamento
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');

  // Estado para controlar os pickers personalizados
  const [activePicker, setActivePicker] = useState<PickerType>('none');
  const [showPicker, setShowPicker] = useState(false);

  // Animação para o picker overlay
  const pickerOpacity = useRef(new Animated.Value(0)).current;
  const pickerScale = useRef(new Animated.Value(0.9)).current;

  // Estado temporário para o date picker
  const [pickerDate, setPickerDate] = useState<Date>(new Date());
  const [pickerMonth, setPickerMonth] = useState<Date>(new Date());

  // Estado temporário para o time picker
  const [pickerHour, setPickerHour] = useState(0);
  const [pickerMinute, setPickerMinute] = useState(0);

  // Atualiza os valores quando o modal abre
  useEffect(() => {
    if (visible && selectedDate) {
      setDate(selectedDate);
    }
    if (visible && selectedTime) {
      const [hours, minutes] = selectedTime.split(':');
      const start = new Date();
      start.setHours(parseInt(hours), parseInt(minutes || '0'), 0);
      setStartTime(start);

      // Calcula horário de término (1 hora depois)
      const end = new Date(start);
      end.setHours(start.getHours() + 1);
      setEndTime(end);
    }
  }, [visible, selectedDate, selectedTime]);

  // Animação do picker overlay
  useEffect(() => {
    if (activePicker !== 'none') {
      setShowPicker(true);
      Animated.parallel([
        Animated.timing(pickerOpacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.spring(pickerScale, {
          toValue: 1,
          friction: 8,
          tension: 100,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(pickerOpacity, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(pickerScale, {
          toValue: 0.9,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start(() => setShowPicker(false));
    }
  }, [activePicker]);

  // Formatadores
  const formatDate = (d: Date) => {
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const formatTime = (d: Date) => {
    const hours = d.getHours().toString().padStart(2, '0');
    const minutes = d.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  // Toggle day selection
  const toggleDay = (dayKey: string) => {
    setSelectedDays(prev =>
      prev.includes(dayKey)
        ? prev.filter(d => d !== dayKey)
        : [...prev, dayKey]
    );
  };

  // Reset quando fecha
  const handleClose = () => {
    setEventType('unique');
    setDate(new Date());
    setStartTime(new Date());
    setEndTime(new Date());
    setFrequency('weekly');
    setSelectedDays([]);
    setSelectedColor('#667eea');
    setHasEndDate(false);
    setEndDate(new Date());
    setRecurrenceEndType('never');
    setRecurrenceEndDate(new Date());
    setOccurrencesCount('10');
    setActivePicker('none');
    onClose();
  };

  // Funções do Date Picker
  const openDatePicker = () => {
    setPickerDate(date);
    setPickerMonth(new Date(date));
    setActivePicker('date');
  };

  const getDaysInMonth = (d: Date) => {
    const year = d.getFullYear();
    const month = d.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days: { day: number; isCurrentMonth: boolean; date: Date }[] = [];

    // Dias do mês anterior
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDay - 1; i >= 0; i--) {
      days.push({
        day: prevMonthLastDay - i,
        isCurrentMonth: false,
        date: new Date(year, month - 1, prevMonthLastDay - i),
      });
    }

    // Dias do mês atual
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        date: new Date(year, month, i),
      });
    }

    // Dias do próximo mês
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(year, month + 1, i),
      });
    }

    return days;
  };

  const isToday = (d: Date) => {
    const today = new Date();
    return (
      d.getDate() === today.getDate() &&
      d.getMonth() === today.getMonth() &&
      d.getFullYear() === today.getFullYear()
    );
  };

  const isSameDay = (d1: Date, d2: Date) => {
    return (
      d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getFullYear() === d2.getFullYear()
    );
  };

  const handlePrevMonth = () => {
    setPickerMonth(new Date(pickerMonth.getFullYear(), pickerMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setPickerMonth(new Date(pickerMonth.getFullYear(), pickerMonth.getMonth() + 1, 1));
  };

  const confirmDatePicker = () => {
    if (activePicker === 'date') {
      setDate(pickerDate);
    } else if (activePicker === 'endDate') {
      setEndDate(pickerDate);
    } else if (activePicker === 'recurrenceEndDate') {
      setRecurrenceEndDate(pickerDate);
    }
    setActivePicker('none');
  };

  // Funções para abrir os pickers de data específicos
  const openEndDatePicker = () => {
    setPickerDate(endDate);
    setPickerMonth(new Date(endDate));
    setActivePicker('endDate');
  };

  const openRecurrenceEndDatePicker = () => {
    setPickerDate(recurrenceEndDate);
    setPickerMonth(new Date(recurrenceEndDate));
    setActivePicker('recurrenceEndDate');
  };

  // Funções do Time Picker
  const openStartTimePicker = () => {
    setPickerHour(startTime.getHours());
    setPickerMinute(startTime.getMinutes());
    setActivePicker('startTime');
  };

  const openEndTimePicker = () => {
    setPickerHour(endTime.getHours());
    setPickerMinute(endTime.getMinutes());
    setActivePicker('endTime');
  };

  const confirmTimePicker = () => {
    const newTime = new Date();
    newTime.setHours(pickerHour, pickerMinute, 0);

    if (activePicker === 'startTime') {
      setStartTime(newTime);
      // Se o horário de início mudou e é maior que o fim, verifica se precisa ajustar
      const startHours = pickerHour * 60 + pickerMinute;
      const endHours = endTime.getHours() * 60 + endTime.getMinutes();

      if (eventType === 'unique' && endHours < startHours && endHours !== 0) {
        // Horário fim é menor que início (evento noturno)
        if (!hasEndDate) {
          setHasEndDate(true);
          setEndDate(new Date(date.getTime() + 24 * 60 * 60 * 1000));
        }
      }
    } else if (activePicker === 'endTime') {
      setEndTime(newTime);

      // Verifica se é evento noturno (horário fim < horário início)
      const startHours = startTime.getHours() * 60 + startTime.getMinutes();
      const endHours = pickerHour * 60 + pickerMinute;

      if (eventType === 'unique' && endHours < startHours) {
        // Horário fim é menor que início (evento noturno) - adiciona data de término automaticamente
        if (!hasEndDate) {
          setHasEndDate(true);
          setEndDate(new Date(date.getTime() + 24 * 60 * 60 * 1000)); // dia seguinte
        }
      } else if (eventType === 'unique' && hasEndDate && endHours >= startHours) {
        // Se o horário fim é maior ou igual ao início e as datas são iguais, remove a data de término
        const sameDay = date.getDate() === endDate.getDate() &&
                        date.getMonth() === endDate.getMonth() &&
                        date.getFullYear() === endDate.getFullYear();
        if (sameDay) {
          setHasEndDate(false);
        }
      }
    }
    setActivePicker('none');
  };

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 12 }, (_, i) => i * 5);

  // Verifica se o evento está fora do horário de funcionamento
  const checkOperatingHours = (): { isOutside: boolean; message: string } => {
    const dayKeys = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
    const dayFullNames = ['Domingos', 'Segundas-feiras', 'Terças-feiras', 'Quartas-feiras', 'Quintas-feiras', 'Sextas-feiras', 'Sábados'];
    const dayOfWeek = dayKeys[date.getDay()];
    const dayFullName = dayFullNames[date.getDay()];
    const schedule = MOCK_OPERATING_HOURS.schedule[dayOfWeek];
    const providerName = MOCK_OPERATING_HOURS.providerName;

    const startMinutes = startTime.getHours() * 60 + startTime.getMinutes();
    const endMinutes = endTime.getHours() * 60 + endTime.getMinutes();

    // Se o dia está fechado
    if (!schedule) {
      return {
        isOutside: true,
        message: `Este evento está fora do horário de funcionamento do estabelecimento "${providerName}".`,
      };
    }

    // Converte horários de funcionamento para minutos
    const [openHour, openMin] = schedule.start.split(':').map(Number);
    const [closeHour, closeMin] = schedule.end.split(':').map(Number);
    const openMinutes = openHour * 60 + openMin;
    const closeMinutes = closeHour * 60 + closeMin;

    // Verifica se o horário está fora do funcionamento
    if (startMinutes < openMinutes || endMinutes > closeMinutes) {
      return {
        isOutside: true,
        message: `Este evento está fora do horário de funcionamento do estabelecimento "${providerName}".\n\nHorário de funcionamento: ${schedule.start} às ${schedule.end}.`,
      };
    }

    return { isOutside: false, message: '' };
  };

  // Handler para o botão Adicionar
  const handleAddActivity = () => {
    const { isOutside, message } = checkOperatingHours();

    if (isOutside) {
      setWarningMessage(message);
      setShowWarningModal(true);
    } else {
      // Adiciona diretamente (aqui entraria a lógica de salvar)
      confirmAddActivity();
    }
  };

  // Confirma a adição mesmo fora do horário
  const confirmAddActivity = () => {
    // TODO: Aqui entrará a lógica real de salvar a atividade
    console.log('Atividade adicionada:', {
      eventType,
      date,
      endDate: hasEndDate ? endDate : null,
      startTime,
      endTime,
      frequency: eventType === 'recurring' ? frequency : null,
      selectedDays: eventType === 'recurring' ? selectedDays : null,
      recurrenceEndType: eventType === 'recurring' ? recurrenceEndType : null,
      recurrenceEndDate: eventType === 'recurring' && recurrenceEndType === 'date' ? recurrenceEndDate : null,
      occurrencesCount: eventType === 'recurring' && recurrenceEndType === 'occurrences' ? occurrencesCount : null,
      color: selectedColor,
    });
    setShowWarningModal(false);
    handleClose();
  };

  // Título do date picker baseado no tipo
  const getDatePickerTitle = () => {
    switch (activePicker) {
      case 'date':
        return hasEndDate || eventType === 'recurring' ? 'Data de Início' : 'Data';
      case 'endDate':
        return 'Data de Término';
      case 'recurrenceEndDate':
        return 'Termina em';
      default:
        return 'Selecionar Data';
    }
  };

  // Renderiza o conteúdo do Date Picker
  const renderDatePicker = () => (
    <View style={styles.datePickerContainer}>
      {/* Header */}
      <View style={styles.datePickerHeader}>
        <Text style={styles.datePickerTitle}>
          {MONTHS[pickerMonth.getMonth()]} {pickerMonth.getFullYear()}
        </Text>
        <View style={styles.datePickerNav}>
          <TouchableOpacity
            style={styles.datePickerNavButton}
            onPress={handlePrevMonth}
            activeOpacity={0.7}
          >
            <FontAwesome5 name="chevron-left" size={14} color={colors.secondary} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.datePickerNavButton}
            onPress={handleNextMonth}
            activeOpacity={0.7}
          >
            <FontAwesome5 name="chevron-right" size={14} color={colors.secondary} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Week Days Header */}
      <View style={styles.datePickerWeekDays}>
        {WEEK_DAYS.map((day) => (
          <View key={day} style={styles.datePickerWeekDay}>
            <Text style={styles.datePickerWeekDayText}>{day}</Text>
          </View>
        ))}
      </View>

      {/* Days Grid */}
      <View style={styles.datePickerDays}>
        {getDaysInMonth(pickerMonth).map((item, index) => {
          const selected = isSameDay(item.date, pickerDate);
          const today = isToday(item.date);

          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.datePickerDay,
                today && !selected && styles.datePickerDayToday,
                selected && styles.datePickerDaySelected,
                !item.isCurrentMonth && styles.datePickerDayOtherMonth,
              ]}
              onPress={() => setPickerDate(item.date)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.datePickerDayText,
                  selected && styles.datePickerDayTextSelected,
                ]}
              >
                {item.day}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Footer */}
      <View style={styles.datePickerFooter}>
        <TouchableOpacity
          style={styles.datePickerCancelButton}
          onPress={() => setActivePicker('none')}
          activeOpacity={0.7}
        >
          <Text style={styles.datePickerCancelText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.datePickerConfirmButton}
          onPress={confirmDatePicker}
          activeOpacity={0.7}
        >
          <Text style={styles.datePickerConfirmText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // Renderiza o conteúdo do Time Picker
  const renderTimePicker = () => (
    <View style={styles.timePickerContainer}>
      <Text style={styles.timePickerTitle}>
        {activePicker === 'startTime' ? 'Horário de Início' : 'Horário de Término'}
      </Text>

      <View style={styles.timePickerContent}>
        {/* Hours */}
        <ScrollView style={styles.timePickerColumn} showsVerticalScrollIndicator={false}>
          {hours.map((hour) => (
            <TouchableOpacity
              key={hour}
              style={[
                styles.timePickerItem,
                pickerHour === hour && styles.timePickerItemSelected,
              ]}
              onPress={() => setPickerHour(hour)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.timePickerItemText,
                  pickerHour === hour && styles.timePickerItemTextSelected,
                ]}
              >
                {hour.toString().padStart(2, '0')}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.timePickerSeparator}>:</Text>

        {/* Minutes */}
        <ScrollView style={styles.timePickerColumn} showsVerticalScrollIndicator={false}>
          {minutes.map((minute) => (
            <TouchableOpacity
              key={minute}
              style={[
                styles.timePickerItem,
                pickerMinute === minute && styles.timePickerItemSelected,
              ]}
              onPress={() => setPickerMinute(minute)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.timePickerItemText,
                  pickerMinute === minute && styles.timePickerItemTextSelected,
                ]}
              >
                {minute.toString().padStart(2, '0')}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.datePickerFooter}>
        <TouchableOpacity
          style={styles.datePickerCancelButton}
          onPress={() => setActivePicker('none')}
          activeOpacity={0.7}
        >
          <Text style={styles.datePickerCancelText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.datePickerConfirmButton}
          onPress={confirmTimePicker}
          activeOpacity={0.7}
        >
          <Text style={styles.datePickerConfirmText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // Renderiza o formulário principal
  const renderMainForm = () => (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.title}>Adicionar Atividade</Text>
        </View>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={handleClose}
          activeOpacity={0.7}
        >
          <FontAwesome5 name="times" size={20} color={colors.gray600} />
        </TouchableOpacity>
      </View>

      {/* Conteúdo */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Tipo de Evento */}
        <Text style={styles.sectionLabel}>Tipo de Evento</Text>
        <View style={styles.eventTypeContainer}>
          <TouchableOpacity
            style={[
              styles.eventTypeOption,
              eventType === 'unique' && styles.eventTypeOptionActive,
            ]}
            onPress={() => setEventType('unique')}
            activeOpacity={0.7}
          >
            <View style={[
              styles.eventTypeIcon,
              eventType === 'unique' && styles.eventTypeIconActive,
            ]}>
              <FontAwesome5
                name="calendar-day"
                size={20}
                color={eventType === 'unique' ? colors.white : colors.primary}
              />
            </View>
            <Text style={[
              styles.eventTypeText,
              eventType === 'unique' && styles.eventTypeTextActive,
            ]}>
              Evento Único
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.eventTypeOption,
              eventType === 'recurring' && styles.eventTypeOptionActive,
            ]}
            onPress={() => setEventType('recurring')}
            activeOpacity={0.7}
          >
            <View style={[
              styles.eventTypeIcon,
              eventType === 'recurring' && styles.eventTypeIconActive,
            ]}>
              <FontAwesome5
                name="redo"
                size={20}
                color={eventType === 'recurring' ? colors.white : colors.primary}
              />
            </View>
            <Text style={[
              styles.eventTypeText,
              eventType === 'recurring' && styles.eventTypeTextActive,
            ]}>
              Evento Recorrente
            </Text>
          </TouchableOpacity>
        </View>

        {/* Opções de Recorrência (só aparece quando é evento recorrente) */}
        {eventType === 'recurring' && (
          <View style={styles.recurringContainer}>
            {/* Frequência */}
            <Text style={styles.sectionLabel}>Com qual frequência?</Text>
            <View style={styles.frequencyContainer}>
              {FREQUENCIES.map((freq) => (
                <TouchableOpacity
                  key={freq.key}
                  style={[
                    styles.frequencyOption,
                    frequency === freq.key && styles.frequencyOptionActive,
                  ]}
                  onPress={() => setFrequency(freq.key as Frequency)}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      styles.frequencyText,
                      frequency === freq.key && styles.frequencyTextActive,
                    ]}
                  >
                    {freq.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Dias da semana */}
            <Text style={styles.sectionLabel}>Em quais dias?</Text>
            <View style={styles.daysContainer}>
              {DAYS_OF_WEEK.map((day) => (
                <TouchableOpacity
                  key={day.key}
                  style={[
                    styles.dayOption,
                    selectedDays.includes(day.key) && styles.dayOptionActive,
                  ]}
                  onPress={() => toggleDay(day.key)}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      styles.dayText,
                      selectedDays.includes(day.key) && styles.dayTextActive,
                    ]}
                  >
                    {day.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* Data e Horário */}
        <Text style={styles.sectionLabel}>Data e Horário</Text>
        <View style={styles.dateTimeContainer}>
          {/* Data Início */}
          <TouchableOpacity
            style={styles.inputGroup}
            onPress={openDatePicker}
            activeOpacity={0.7}
          >
            <View style={styles.inputIconContainer}>
              <FontAwesome5 name="calendar" size={16} color={colors.primary} />
            </View>
            <View style={styles.inputContent}>
              <Text style={styles.inputLabel}>
                {hasEndDate || eventType === 'recurring' ? 'Data Início' : 'Data'}
              </Text>
              <Text style={styles.input}>{formatDate(date)}</Text>
            </View>
            <FontAwesome5 name="chevron-down" size={14} color={colors.gray400} />
          </TouchableOpacity>

          {/* Data Fim (apenas para Evento Único com hasEndDate) */}
          {eventType === 'unique' && hasEndDate && (
            <TouchableOpacity
              style={styles.inputGroup}
              onPress={openEndDatePicker}
              activeOpacity={0.7}
            >
              <View style={styles.inputIconContainer}>
                <FontAwesome5 name="calendar-check" size={16} color={colors.primary} />
              </View>
              <View style={styles.inputContent}>
                <Text style={styles.inputLabel}>Data Término</Text>
                <Text style={styles.input}>{formatDate(endDate)}</Text>
              </View>
              <TouchableOpacity
                onPress={() => setHasEndDate(false)}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <FontAwesome5 name="times" size={14} color={colors.gray400} />
              </TouchableOpacity>
            </TouchableOpacity>
          )}

          {/* Link para adicionar data de término (apenas para Evento Único sem hasEndDate) */}
          {eventType === 'unique' && !hasEndDate && (
            <TouchableOpacity
              style={styles.addEndDateButton}
              onPress={() => {
                setHasEndDate(true);
                setEndDate(new Date(date.getTime() + 24 * 60 * 60 * 1000)); // dia seguinte
              }}
              activeOpacity={0.7}
            >
              <FontAwesome5 name="plus" size={12} color={colors.primary} />
              <Text style={styles.addEndDateText}>Adicionar data de término</Text>
            </TouchableOpacity>
          )}

          {/* Horários */}
          <View style={styles.timeRow}>
            <TouchableOpacity
              style={[styles.inputGroup, styles.timeInput]}
              onPress={openStartTimePicker}
              activeOpacity={0.7}
            >
              <View style={styles.inputIconContainer}>
                <FontAwesome5 name="clock" size={16} color={colors.primary} />
              </View>
              <View style={styles.inputContent}>
                <Text style={styles.inputLabel}>Início</Text>
                <Text style={styles.input}>{formatTime(startTime)}</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.timeSeparator}>
              <FontAwesome5 name="arrow-right" size={14} color={colors.gray400} />
            </View>

            <TouchableOpacity
              style={[styles.inputGroup, styles.timeInput]}
              onPress={openEndTimePicker}
              activeOpacity={0.7}
            >
              <View style={styles.inputIconContainer}>
                <FontAwesome5 name="clock" size={16} color={colors.gray400} />
              </View>
              <View style={styles.inputContent}>
                <Text style={styles.inputLabel}>Término</Text>
                <Text style={styles.input}>{formatTime(endTime)}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Termina (apenas para Evento Recorrente) */}
        {eventType === 'recurring' && (
          <>
            <Text style={[styles.sectionLabel, { marginTop: 20 }]}>Termina</Text>
            <View style={styles.recurrenceEndContainer}>
              {/* Opção: Nunca */}
              <TouchableOpacity
                style={[
                  styles.recurrenceEndOption,
                  recurrenceEndType === 'never' && styles.recurrenceEndOptionActive,
                ]}
                onPress={() => setRecurrenceEndType('never')}
                activeOpacity={0.7}
              >
                <View style={[
                  styles.radioButton,
                  recurrenceEndType === 'never' && styles.radioButtonActive,
                ]}>
                  {recurrenceEndType === 'never' && <View style={styles.radioButtonInner} />}
                </View>
                <Text style={[
                  styles.recurrenceEndText,
                  recurrenceEndType === 'never' && styles.recurrenceEndTextActive,
                ]}>
                  Nunca
                </Text>
              </TouchableOpacity>

              {/* Opção: Em uma data */}
              <TouchableOpacity
                style={[
                  styles.recurrenceEndOption,
                  recurrenceEndType === 'date' && styles.recurrenceEndOptionActive,
                ]}
                onPress={() => setRecurrenceEndType('date')}
                activeOpacity={0.7}
              >
                <View style={[
                  styles.radioButton,
                  recurrenceEndType === 'date' && styles.radioButtonActive,
                ]}>
                  {recurrenceEndType === 'date' && <View style={styles.radioButtonInner} />}
                </View>
                <Text style={[
                  styles.recurrenceEndText,
                  recurrenceEndType === 'date' && styles.recurrenceEndTextActive,
                ]}>
                  Em uma data
                </Text>
                {recurrenceEndType === 'date' && (
                  <TouchableOpacity
                    style={styles.recurrenceEndDateButton}
                    onPress={openRecurrenceEndDatePicker}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.recurrenceEndDateText}>{formatDate(recurrenceEndDate)}</Text>
                    <FontAwesome5 name="chevron-down" size={10} color={colors.primary} />
                  </TouchableOpacity>
                )}
              </TouchableOpacity>

              {/* Opção: Após X ocorrências */}
              <TouchableOpacity
                style={[
                  styles.recurrenceEndOption,
                  recurrenceEndType === 'occurrences' && styles.recurrenceEndOptionActive,
                ]}
                onPress={() => setRecurrenceEndType('occurrences')}
                activeOpacity={0.7}
              >
                <View style={[
                  styles.radioButton,
                  recurrenceEndType === 'occurrences' && styles.radioButtonActive,
                ]}>
                  {recurrenceEndType === 'occurrences' && <View style={styles.radioButtonInner} />}
                </View>
                <Text style={[
                  styles.recurrenceEndText,
                  recurrenceEndType === 'occurrences' && styles.recurrenceEndTextActive,
                ]}>
                  Após
                </Text>
                {recurrenceEndType === 'occurrences' && (
                  <View style={styles.occurrencesInputContainer}>
                    <TextInput
                      style={styles.occurrencesInput}
                      value={occurrencesCount}
                      onChangeText={setOccurrencesCount}
                      keyboardType="number-pad"
                      maxLength={3}
                    />
                    <Text style={styles.occurrencesLabel}>ocorrências</Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </>
        )}

        {/* Cor na Agenda */}
        <Text style={[styles.sectionLabel, { marginTop: 24 }]}>Cor na Agenda</Text>
        <View style={styles.colorContainer}>
          {ACTIVITY_COLORS.map((colorItem) => (
            <TouchableOpacity
              key={colorItem.key}
              style={[
                styles.colorOption,
                selectedColor === colorItem.color && styles.colorOptionSelected,
              ]}
              onPress={() => setSelectedColor(colorItem.color)}
              activeOpacity={0.7}
            >
              <View style={[styles.colorInner, { backgroundColor: colorItem.color }]} />
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ height: 20 }} />
      </ScrollView>

      {/* Footer com botões */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={handleClose}
          activeOpacity={0.7}
        >
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={handleAddActivity}
          activeOpacity={0.7}
        >
          <FontAwesome5 name="plus" size={16} color={colors.white} />
          <Text style={styles.confirmButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      statusBarTranslucent
      onRequestClose={activePicker !== 'none' ? () => setActivePicker('none') : handleClose}
    >
      <View style={styles.overlay}>
        {renderMainForm()}

        {/* Overlay para os pickers */}
        {showPicker && (
          <Animated.View
            style={[
              styles.pickerOverlay,
              { opacity: pickerOpacity }
            ]}
          >
            <Animated.View style={{ transform: [{ scale: pickerScale }] }}>
              {(activePicker === 'date' || activePicker === 'endDate' || activePicker === 'recurrenceEndDate') && renderDatePicker()}
              {(activePicker === 'startTime' || activePicker === 'endTime') && renderTimePicker()}
            </Animated.View>
          </Animated.View>
        )}

        {/* Modal de aviso para horário fora do funcionamento */}
        <WarningModal
          visible={showWarningModal}
          message={warningMessage}
          onCancel={() => setShowWarningModal(false)}
          onConfirm={confirmAddActivity}
        />
      </View>
    </Modal>
  );
}
