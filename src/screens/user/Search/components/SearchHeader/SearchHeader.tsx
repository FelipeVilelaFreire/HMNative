import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { styles } from './SearchHeader.styles';

interface SearchHeaderProps {
  onPress?: () => void;
  onFilterPress?: () => void;
}

export default function SearchHeader({ onPress, onFilterPress }: SearchHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.searchButton} onPress={onPress} activeOpacity={0.7}>
          <Ionicons name="search-outline" size={18} color={colors.secondary} />
          <Text style={styles.searchText}>Começe a sua pesquisa</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterButton} onPress={onFilterPress} activeOpacity={0.7}>
          <Ionicons name="options-outline" size={22} color={colors.secondary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
