import { View, StyleSheet, ScrollView, Animated } from 'react-native';
import { useRef, useState } from 'react';
import { useRouter } from 'expo-router';
import { colors } from '@/src/theme';
import { ProfileHeader, UserDataCard } from './components';
import { HobbiesCard, ScheduleCard, SwitchModeCard } from '@/src/components/cards';
import { Modal } from '@/src/components/ui/Modal';
import { SelectProviderModal } from '@/src/components/modals';
import { currentUser } from '@/src/mocks/user';
import { UserProvider } from '@/src/mocks/userProviders';
import { useUserMode } from '@/src/contexts';

export default function Profile() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [isSelectProviderModalVisible, setIsSelectProviderModalVisible] = useState(false);
  const { toggleMode, isUserMode } = useUserMode();
  const router = useRouter();

  const handleNotificationPress = () => {
    console.log('Notificações pressionado');
  };

  const handleSwitchModePress = () => {
    // Se está no modo usuário, abre o modal de seleção
    if (isUserMode) {
      setIsSelectProviderModalVisible(true);
    } else {
      // Se está no modo provedor, volta para usuário diretamente
      toggleMode();
      // Navega para a Home após pequeno delay (para a transição iniciar)
      setTimeout(() => {
        router.push('/(tabs)/home');
      }, 100);
    }
  };

  const handleSelectProvider = (provider: UserProvider) => {
    console.log('Provedor selecionado:', provider.name);
    // TODO: Armazenar qual provedor foi selecionado
    setIsSelectProviderModalVisible(false);
    // Faz a transição para modo provedor
    toggleMode();
    // Navega para o Dashboard após pequeno delay (para a transição iniciar)
    setTimeout(() => {
      router.push('/(tabs)/dashboard');
    }, 100);
  };

  const handleCancelSelectProvider = () => {
    setIsSelectProviderModalVisible(false);
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
        bounces={false}
        alwaysBounceVertical={false}
        overScrollMode="never"
      >
        <UserDataCard user={currentUser} />
        <HobbiesCard />
        <ScheduleCard />
        <SwitchModeCard onPress={handleSwitchModePress} />
      </Animated.ScrollView>

      {/* Modal de Seleção de Provedor */}
      <Modal visible={isSelectProviderModalVisible} onClose={handleCancelSelectProvider}>
        <SelectProviderModal
          onSelectProvider={handleSelectProvider}
          onCancel={handleCancelSelectProvider}
        />
      </Modal>
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
