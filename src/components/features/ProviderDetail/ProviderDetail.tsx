import React, { useRef, useState } from 'react';
import { View, ScrollView, Animated, KeyboardAvoidingView, Platform, TouchableOpacity, Text } from 'react-native';
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
  onEditPress?: () => void;    // Callback quando o botão de editar é pressionado
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
  onEditPress,
}: ProviderDetailProps) {
  // Animated value para o scroll da tela
  const scrollY = useRef(new Animated.Value(0)).current;

  // Estado para rastrear se há mudanças
  const [hasChanges, setHasChanges] = useState(false);

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
          <ProviderDetailImage imageUrl={provider.avatar} providerId={provider.id} isEditing={isEditing} />

          {/* Modal do provider - parte do scroll */}
          <ProviderModal
            provider={provider}
            isOwner={isOwner}
            isDashboard={isDashboard}
            isEditing={isEditing}
            onSave={onSave}
            onHasChanges={setHasChanges}
          />
        </Animated.ScrollView>

        {/* Header fixo por cima de tudo */}
        <ProviderDetailHeader
          onBackPress={onBack}
          scrollY={scrollY}
          isOwner={isOwner}
          onEditPress={onEditPress}
          isEditing={isEditing}
        />

        {/* Botão flutuante Salvar - aparece apenas quando há mudanças */}
        {hasChanges && (
          <View style={styles.floatingButtonContainer}>
            <TouchableOpacity
              style={styles.saveButton}
              activeOpacity={0.8}
              onPress={onSave}
            >
              <Text style={styles.saveButtonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}
