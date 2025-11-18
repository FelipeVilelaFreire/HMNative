import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useUserMode } from '@/src/contexts';
import { ProviderHeader } from '@/src/components/layout';
import { styles } from './Agenda.styles';

export default function Agenda() {
  const { mode } = useUserMode();

  return (
    <View style={styles.container}>
      {/* Header com nome do Provider */}
      <ProviderHeader />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Agenda</Text>
          <Text style={styles.subtitle}>Gerencie seus horários e compromissos</Text>
        </View>

        <View style={styles.calendarPlaceholder}>
          <Text style={styles.placeholderText}>Calendário de agendamentos</Text>
        </View>

        <View style={styles.upcomingSection}>
          <Text style={styles.sectionTitle}>Próximos Agendamentos</Text>
          <Text style={styles.placeholder}>Nenhum agendamento próximo</Text>
        </View>
      </ScrollView>
    </View>
  );
}
