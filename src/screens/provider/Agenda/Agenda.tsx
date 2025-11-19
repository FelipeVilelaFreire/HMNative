import React from 'react';
import { View } from 'react-native';
import { ProviderHeader } from '@/src/components/layout';
import { Calendar } from './components';
import { styles } from './Agenda.styles';

export default function Agenda() {
  return (
    <View style={styles.container}>
      {/* Header com nome do Provider */}
      <ProviderHeader />

      <View style={styles.content}>
        <Calendar />
      </View>
    </View>
  );
}
