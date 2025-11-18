import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { UserModeProvider, useUserMode } from '@/src/contexts';
import { TransitionScreen } from '@/src/components/ui';

function RootNavigator() {
  const colorScheme = useColorScheme();
  const { isTransitioning } = useUserMode();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="detail/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="provider/[id]" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
      <TransitionScreen visible={isTransitioning} />
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <UserModeProvider>
        <RootNavigator />
      </UserModeProvider>
    </GestureHandlerRootView>
  );
}
