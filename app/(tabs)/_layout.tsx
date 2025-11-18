import { Tabs } from 'expo-router';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

import { HapticTab } from '@/components/haptic-tab';
import { colors, footerShadow } from '@/src/theme';
import { useUserMode } from '@/src/contexts';

export default function TabLayout() {
  const { isUserMode } = useUserMode();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,        // Roxo quando ativo
        tabBarInactiveTintColor: colors.secondary,    // Preto quando inativo
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopWidth: 0, // Remove borda padrão
          height: 90,
          paddingBottom: 20,
          paddingTop: 12,
          ...footerShadow, // Aplica sombra customizada
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '500',
        },
      }}>
      {/* USER MODE TABS */}
      <Tabs.Screen
        name="home"
        options={{
          href: isUserMode ? '/(tabs)/home' : null,
          title: 'Início',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          href: isUserMode ? '/(tabs)/explore' : null,
          title: 'Explorar',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          href: isUserMode ? '/(tabs)/favorites' : null,
          title: 'Favoritos',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5
              name="heart"
              size={22}
              color={color}
              solid={focused}  // Coração preenchido quando ativo
            />
          ),
        }}
      />

      {/* PROVIDER MODE TABS */}
      <Tabs.Screen
        name="dashboard"
        options={{
          href: !isUserMode ? '/(tabs)/dashboard' : null,
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="gestao"
        options={{
          href: !isUserMode ? '/(tabs)/gestao' : null,
          title: 'Gestão',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5
              name="tasks"
              size={22}
              color={color}
              solid={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          href: !isUserMode ? '/(tabs)/add' : null,
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.addButton, focused && styles.addButtonFocused]}>
              <FontAwesome5
                name="plus"
                size={28}
                color={colors.white}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="agenda"
        options={{
          href: !isUserMode ? '/(tabs)/agenda' : null,
          title: 'Agenda',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "calendar" : "calendar-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />

      {/* SHARED PROFILE TAB */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5
              name="user"
              size={22}
              color={color}
              solid={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  addButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20, // Eleva o botão acima do footer
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  addButtonFocused: {
    backgroundColor: colors.primary,
    transform: [{ scale: 1.05 }],
  },
});
