import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './ActivityAboutCard.styles';

interface ActivityAboutCardProps {
  description: string;
}

export default function ActivityAboutCard({ description }: ActivityAboutCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Sobre:</Text>
      <Text style={styles.descriptionText}>{description}</Text>
    </View>
  );
}
