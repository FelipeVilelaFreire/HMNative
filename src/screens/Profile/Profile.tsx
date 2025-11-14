import { View, StyleSheet, ScrollView, Animated } from 'react-native';
import { useRef } from 'react';
import { colors } from '@/src/theme';
import { ProfileHeader, UserDataCard } from './components';
import { HobbiesCard, ScheduleCard } from '@/src/components/cards';
import { currentUser } from '@/src/mocks/user';

export default function Profile() {
  const scrollY = useRef(new Animated.Value(0)).current;

  const handleNotificationPress = () => {
    console.log('Notificações pressionado');
  };

  return (
    <View style={styles.container}>
      <ProfileHeader onNotificationPress={handleNotificationPress} scrollY={scrollY} />

      <Animated.ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <UserDataCard user={currentUser} />
        <HobbiesCard />
        <ScheduleCard />
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 0,
    paddingBottom: 32,
    gap: 16,
  },
});
