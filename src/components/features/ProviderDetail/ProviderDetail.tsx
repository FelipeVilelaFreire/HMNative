import React, { useRef } from 'react';
import { View, ScrollView, Animated, KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from '@/src/mocks/providers';
import { ProviderDetailHeader, ProviderDetailImage, ProviderModal } from './components';
import { styles } from './ProviderDetail.styles';

interface ProviderDetailProps {
  provider: Provider;
  isOwner?: boolean;          // Se o usuário é o dono deste provider/academia
  isEditing?: boolean;         // Se está no modo de edição
  isDashboard?: boolean;       // Se está visualizando como dashboard (visão do provedor)
  isCreating?: boolean;        // Se está criando um novo provider
  onSave?: (provider: Provider) => void;
  onCancel?: () => void;
  onBack?: () => void;
}

export default function ProviderDetail({
  provider,
  isOwner = false,
  isEditing = false,
  isDashboard = false,
  isCreating = false,
  onSave,
  onCancel,
  onBack,
}: ProviderDetailProps) {
  // Animated value para o scroll da tela
  const scrollY = useRef(new Animated.Value(0)).current;

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
          {/* Avatar da academia/provider */}
          <ProviderDetailImage imageUrl={provider.avatar} providerId={provider.id} />

          {/* Modal do provider - parte do scroll */}
          <ProviderModal
            provider={provider}
            isOwner={isOwner}
            isDashboard={isDashboard}
          />
        </Animated.ScrollView>

        {/* Header fixo por cima de tudo */}
        <ProviderDetailHeader
          onBackPress={onBack}
          scrollY={scrollY}
          isOwner={isOwner}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
