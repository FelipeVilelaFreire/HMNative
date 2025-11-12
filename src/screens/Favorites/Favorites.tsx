import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '@/src/theme';
import { ActivityCard } from '@/src/components/cards/ActivityCard';
import { activities } from '@/src/mocks/activities';

export default function Favorites() {
  const router = useRouter();

  // Mockando atividades favoritas (primeiras 6 atividades)
  const favoriteActivities = activities.slice(0, 6);

  const handleCardPress = (activityId: string) => {
    router.push(`/detail/${activityId}`);
  };

  const renderItem = ({ item }: { item: typeof activities[0] }) => (
    <View style={styles.cardWrapper}>
      <ActivityCard
        activity={item}
        variant="medium"
        onPress={() => handleCardPress(item.id)}
      />
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.title}>Meus favoritos</Text>
      <Text style={styles.subtitle}>
        {favoriteActivities.length} atividades favoritas
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteActivities}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 16,
    marginBottom: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.secondary,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.secondary,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  row: {
    marginBottom: 24,
  },
  cardWrapper: {
    width: '48%',
    marginHorizontal: '1%',
  },
});
