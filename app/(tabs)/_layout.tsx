import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

import { HapticTab } from '@/components/haptic-tab';
import { colors, footerShadow } from '@/src/theme';

export default function TabLayout() {
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
      <Tabs.Screen
        name="home"
        options={{
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
