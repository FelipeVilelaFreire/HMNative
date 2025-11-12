import React, { useCallback, useRef, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  runOnJS,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import { ActivityCard } from '@/src/components/cards/ActivityCard';
import { Activity } from '@/src/mocks/activities';
import { styles } from './ActivitiesModal.styles';

interface ActivitiesModalProps {
  height: number;
  activitiesCount: number;
  activities: Activity[];
  onDrag: (newHeight: number) => void;
  minHeight: number;
  midHeight: number;
  maxHeight: number;
  isMaximized: boolean;
}

const SPRING_CONFIG = {
  damping: 30,           // Aumentado: mais freio = mais suave
  stiffness: 180,        // Diminuído: menos velocidade = mais lento
  mass: 0.8,             // Aumentado: mais peso = mais inércia
  overshootClamping: false,
  restDisplacementThreshold: 0.01,
  restSpeedThreshold: 0.01,
};

export default function ActivitiesModal({
  height,
  activitiesCount,
  activities,
  onDrag,
  minHeight,
  midHeight,
  maxHeight,
  isMaximized
}: ActivitiesModalProps) {
  const router = useRouter();
  const scrollViewRef = useRef<ScrollView>(null);
  const scrollOffset = useSharedValue(0);
  const [scrollEnabled, setScrollEnabled] = useState(isMaximized);

  // Sincronizar scrollEnabled com isMaximized
  React.useEffect(() => {
    setScrollEnabled(isMaximized);
  }, [isMaximized]);

  // Usar useCallback para memorizar a função e evitar recriações
  const handleCardPress = useCallback((activity: Activity) => {
    try {
      console.log('Navegando para atividade:', activity.id);
      router.push(`/detail/${activity.id}`);
    } catch (error) {
      console.error('Erro ao navegar:', error);
    }
  }, [router]);

  // Snap para posições definidas
  const snapToPosition = useCallback((targetHeight: number) => {
    onDrag(targetHeight);
  }, [onDrag]);

  // Determinar snap point mais próximo (transições sequenciais: min ↔ mid ↔ max)
  const getSnapPoint = (currentHeight: number, velocity: number) => {
    'worklet';

    // Determinar direção do movimento
    const isMovingUp = velocity < 0;

    // Pontos de decisão: 27.5% (entre min e mid) e 70% (entre mid e max)
    const lowerThreshold = (minHeight + midHeight) / 2;  // ~27.5%
    const upperThreshold = (midHeight + maxHeight) / 2;  // ~70%

    // Se está abaixo de 27.5% → está em Min
    if (currentHeight < lowerThreshold) {
      // De Min, vai para Mid se puxar pra cima, senão fica em Min
      return isMovingUp ? midHeight : minHeight;
    }

    // Se está acima de 70% → está em Max
    if (currentHeight > upperThreshold) {
      // De Max, vai para Mid se puxar pra baixo, senão fica em Max
      return isMovingUp ? maxHeight : midHeight;
    }

    // Se está entre 27.5% e 70% → está em Mid
    // De Mid, pode ir para Max (puxando pra cima) ou Min (puxando pra baixo)
    return isMovingUp ? maxHeight : minHeight;
  };

  // Handler para scroll do ScrollView
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollOffset.value = event.contentOffset.y;
    },
  });

  // Callbacks para controlar scroll
  const disableScroll = useCallback(() => {
    setScrollEnabled(false);
  }, []);

  const enableScroll = useCallback(() => {
    setScrollEnabled(isMaximized);
  }, [isMaximized]);

  // Gesture para o handle
  const handlePanGesture = Gesture.Pan()
    .activeOffsetY([-10, 10])
    .failOffsetX([-20, 20])
    .onBegin(() => {
      // Bloquear scroll quando começar a arrastar o handle
      runOnJS(disableScroll)();
    })
    .onUpdate((event) => {
      const newHeight = height - event.translationY;
      const clampedHeight = Math.max(minHeight, Math.min(maxHeight, newHeight));
      runOnJS(onDrag)(clampedHeight);
    })
    .onEnd((event) => {
      const targetHeight = getSnapPoint(height, event.velocityY);
      runOnJS(snapToPosition)(targetHeight);

      // Reativar scroll baseado no estado
      runOnJS(enableScroll)();
    });

  const animatedStyle = useAnimatedStyle(() => ({
    height: withSpring(height, SPRING_CONFIG),
  }));

  // Animação para o handle aparecer/desaparecer
  const handleAnimatedStyle = useAnimatedStyle(() => ({
    opacity: withTiming(isMaximized ? 0 : 1, { duration: 300 }),
    height: withTiming(isMaximized ? 0 : 29, { duration: 300 }),
  }));

  return (
    <Animated.View
      style={[
        styles.container,
        animatedStyle,
        isMaximized && styles.containerMaximized,
      ]}
    >
      {/* Handle com animação - desaparece quando maximizado */}
      <GestureDetector gesture={handlePanGesture}>
        <Animated.View
          style={[
            styles.handleContainer,
            handleAnimatedStyle,
          ]}
        >
          <View style={styles.handle} />
        </Animated.View>
      </GestureDetector>

      {/* Título fixo fora do scroll */}
      <View style={styles.header}>
        <Text style={styles.title}>Mais de {activitiesCount} atividades</Text>
      </View>

      {/* Área de conteúdo com scroll quando maximizado */}
      <Animated.ScrollView
        ref={scrollViewRef}
        style={styles.content}
        contentContainerStyle={styles.cardsContainer}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        bounces={isMaximized}
        scrollEnabled={scrollEnabled}
        nestedScrollEnabled={true}
        onScroll={scrollHandler}
      >
        {activities.slice(0, 4).map((activity, index) => (
          <View key={activity.id} style={{ marginBottom: index < 3 ? 16 : 0 }}>
            <ActivityCard
              activity={activity}
              variant="big"
              onPress={() => handleCardPress(activity)}
            />
          </View>
        ))}
      </Animated.ScrollView>
    </Animated.View>
  );
}
