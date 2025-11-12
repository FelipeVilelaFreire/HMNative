import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { styles } from './ActivityDetails.styles';

export default function ActivityDetails() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>Activity Details - ID: {id}</Text>
    </View>
  );
}
