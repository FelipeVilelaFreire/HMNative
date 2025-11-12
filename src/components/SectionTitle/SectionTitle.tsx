import React from 'react';
import { Text } from 'react-native';
import { styles } from './SectionTitle.styles';

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return <Text style={styles.title}>{title}</Text>;
}
