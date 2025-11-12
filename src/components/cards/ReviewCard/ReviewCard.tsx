import { View, Text, StyleSheet } from 'react-native';

interface ReviewCardProps {
  // Props serão definidas depois
}

export default function ReviewCard(props: ReviewCardProps) {
  return (
    <View style={styles.container}>
      <Text>ReviewCard - A fazer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
});
