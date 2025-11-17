import React, { useRef } from 'react';
import { View, Text, ScrollView, Animated, KeyboardAvoidingView, Platform } from 'react-native';
import { Activity } from '@/src/mocks/activities';
import { ActivityDetailHeader, ActivityDetailImage, ActivityModal } from './components';
import { styles } from './ActivityDetail.styles';

interface ActivityDetailProps {
  activity: Activity;
  isProvider?: boolean;      // Se o usuário é o provedor desta atividade
  isEditing?: boolean;        // Se está no modo de edição
  isCreating?: boolean;       // Se está criando uma nova atividade
  onSave?: (activity: Activity) => void;
  onCancel?: () => void;
  onBack?: () => void;
  onProviderPress?: () => void; // Callback para quando clicar no provider
}

export default function ActivityDetail({
  activity,
  isProvider = false,
  isEditing = false,
  isCreating = false,
  onSave,
  onCancel,
  onBack,
  onProviderPress,
}: ActivityDetailProps) {
  // Animated value para o scroll da tela
  const scrollY = useRef(new Animated.Value(0)).current;

  const handleFavoriteToggle = (isFavorited: boolean) => {
    console.log('Favorited:', isFavorited);
    // TODO: Implementar lógica de favoritar
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={0}
    >
      <View style={styles.container}>
        {/* Conteúdo scrollável da tela inteira */}
        <Animated.ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
        >
          {/* Imagem no topo - 47% da tela */}
          <ActivityDetailImage imageUrl={activity.coverImage} activityId={activity.id} />

          {/* Modal da atividade - parte do scroll */}
          <ActivityModal activity={activity} onProviderPress={onProviderPress} />
        </Animated.ScrollView>

        {/* Header fixo por cima de tudo */}
        <ActivityDetailHeader
          onBackPress={onBack}
          onFavoriteToggle={handleFavoriteToggle}
          scrollY={scrollY}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
