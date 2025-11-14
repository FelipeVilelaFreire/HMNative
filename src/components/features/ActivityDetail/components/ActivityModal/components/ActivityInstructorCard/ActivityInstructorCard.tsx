import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './ActivityInstructorCard.styles';

// TODO: Implementar componente completo do instrutor
// Este componente será desenvolvido posteriormente com:
// - Avatar do instrutor
// - Nome e informações do instrutor
// - Rating e avaliações do instrutor
// - Outras informações relevantes

interface ActivityInstructorCardProps {
  // TODO: Adicionar props necessárias (instructorId, instructorName, etc)
}

export default function ActivityInstructorCard(props: ActivityInstructorCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Instrutor</Text>
      {/* TODO: Implementar card do instrutor aqui */}
    </View>
  );
}
