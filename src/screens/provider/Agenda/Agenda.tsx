import React from 'react';
import { View } from 'react-native';
import { ProviderHeader } from '@/src/components/layout';
import { CalendarContainer } from './components';
import { styles } from './Agenda.styles';

export default function Agenda() {
  return (
    <View style={styles.container}>
      {/* Header com nome do Provider */}
      <ProviderHeader />

      <View style={styles.content}>
        <CalendarContainer />
      </View>
    </View>
  );
}
