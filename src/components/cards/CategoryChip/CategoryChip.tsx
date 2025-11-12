import { View, Text, StyleSheet } from 'react-native';

interface CategoryChipProps {
  // Props serão definidas depois
}

export default function CategoryChip(props: CategoryChipProps) {
  return (
    <View style={styles.container}>
      <Text>CategoryChip - A fazer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 16,
  },
});
