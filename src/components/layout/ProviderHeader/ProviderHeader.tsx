import React from 'react';
import { View, Text } from 'react-native';
import { userProviders } from '@/src/mocks/userProviders';
import { styles } from './ProviderHeader.styles';

export default function ProviderHeader() {
  // TODO: Pegar o provider selecionado pelo usuário
  // Por enquanto, usando o primeiro da lista
  const currentProvider = userProviders[0];

  return (
    <View style={styles.container}>
      <Text style={styles.providerName} numberOfLines={1}>
        {currentProvider.name}
      </Text>
    </View>
  );
}
