import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Animated } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useUserMode } from '@/src/contexts';
import { colors } from '@/src/theme';
import { styles } from './TransitionScreen.styles';

interface TransitionScreenProps {
  visible: boolean;
}

interface IconState {
  scale: Animated.Value;
  opacity: Animated.Value;
  loaded: boolean;
}

export default function TransitionScreen({ visible }: TransitionScreenProps) {
  const { targetMode } = useUserMode();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Estados e animações para os 3 ícones
  const [icon1] = useState<IconState>({
    scale: useRef(new Animated.Value(0)).current,
    opacity: useRef(new Animated.Value(0)).current,
    loaded: false,
  });
  const [icon2] = useState<IconState>({
    scale: useRef(new Animated.Value(0)).current,
    opacity: useRef(new Animated.Value(0)).current,
    loaded: false,
  });
  const [icon3] = useState<IconState>({
    scale: useRef(new Animated.Value(0)).current,
    opacity: useRef(new Animated.Value(0)).current,
    loaded: false,
  });

  const [iconsLoaded, setIconsLoaded] = useState([false, false, false]);

  useEffect(() => {
    if (visible) {
      // Fade in do background
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      // Reset estados
      setIconsLoaded([false, false, false]);

      // Anima ícone 1 (corrida)
      setTimeout(() => {
        Animated.parallel([
          Animated.timing(icon1.scale, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(icon1.opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ]).start();
      }, 300);

      // Anima ícone 2 (música)
      setTimeout(() => {
        Animated.parallel([
          Animated.timing(icon2.scale, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(icon2.opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ]).start();
      }, 700);

      // Anima ícone 3 (mapa)
      setTimeout(() => {
        Animated.parallel([
          Animated.timing(icon3.scale, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(icon3.opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ]).start();
      }, 1100);
    } else {
      // Fade out
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        // Reset animações
        icon1.scale.setValue(0);
        icon1.opacity.setValue(0);
        icon2.scale.setValue(0);
        icon2.opacity.setValue(0);
        icon3.scale.setValue(0);
        icon3.opacity.setValue(0);
      });
    }
  }, [visible]);

  if (!visible && fadeAnim._value === 0) {
    return null;
  }

  const isProviderMode = targetMode === 'provider';
  const transitionText = isProviderMode
    ? 'Trocando para Modo Provedor'
    : 'Trocando para Modo Usuário';

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim,
        },
      ]}
      pointerEvents={visible ? 'auto' : 'none'}
    >
      <View style={styles.content}>
        <Text style={styles.title}>HobbyMap</Text>
        <Text style={styles.subtitle}>{transitionText}</Text>

        {/* Container dos 3 ícones */}
        <View style={styles.iconsRow}>
          {/* Ícone 1 - Corrida */}
          <Animated.View
            style={[
              styles.iconBox,
              {
                opacity: icon1.opacity,
                transform: [{ scale: icon1.scale }],
              },
            ]}
          >
            <FontAwesome5 name="running" size={24} color={colors.primary} />
          </Animated.View>

          {/* Ícone 2 - Música */}
          <Animated.View
            style={[
              styles.iconBox,
              {
                opacity: icon2.opacity,
                transform: [{ scale: icon2.scale }],
              },
            ]}
          >
            <FontAwesome5 name="music" size={24} color={colors.primary} />
          </Animated.View>

          {/* Ícone 3 - Mapa */}
          <Animated.View
            style={[
              styles.iconBox,
              {
                opacity: icon3.opacity,
                transform: [{ scale: icon3.scale }],
              },
            ]}
          >
            <FontAwesome5 name="map-marked-alt" size={24} color={colors.primary} />
          </Animated.View>
        </View>
      </View>
    </Animated.View>
  );
}
