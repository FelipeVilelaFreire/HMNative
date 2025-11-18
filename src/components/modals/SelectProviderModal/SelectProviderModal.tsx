import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { userProviders, UserProvider } from '@/src/mocks/userProviders';
import { styles } from './SelectProviderModal.styles';

interface SelectProviderModalProps {
  onSelectProvider: (provider: UserProvider) => void;
  onCancel: () => void;
}

const getProviderIcon = (type: UserProvider['type']) => {
  switch (type) {
    case 'gym':
      return 'dumbbell';
    case 'studio':
      return 'om';
    case 'club':
      return 'users';
    default:
      return 'building';
  }
};

const getRoleLabel = (role: UserProvider['role']) => {
  switch (role) {
    case 'owner':
      return 'Proprietário';
    case 'admin':
      return 'Funcionário';
    case 'manager':
      return 'Gerente';
    case 'instructor':
      return 'Instrutor';
    default:
      return role;
  }
};

const getRoleColors = (role: UserProvider['role']) => {
  // Mapeia admin para employee
  const roleKey = role === 'admin' ? 'employee' : role;

  if (roleKey in colors.roles) {
    return colors.roles[roleKey as keyof typeof colors.roles];
  }

  return {
    border: colors.gray300,
    background: colors.gray100,
  };
};

export default function SelectProviderModal({ onSelectProvider, onCancel }: SelectProviderModalProps) {
  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Selecione o Estabelecimento</Text>

      {/* Descrição */}
      <Text style={styles.description}>
        Escolha qual estabelecimento você deseja gerenciar
      </Text>

      {/* Lista de provedores */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.providersContainer}
        showsVerticalScrollIndicator={false}
      >
        {userProviders.map((provider) => {
          const roleColors = getRoleColors(provider.role);

          return (
            <TouchableOpacity
              key={provider.id}
              style={[
                styles.providerCard,
                {
                  borderColor: roleColors.border,
                  borderLeftColor: roleColors.border,
                },
              ]}
              onPress={() => onSelectProvider(provider)}
              activeOpacity={0.7}
            >
            {provider.imageUrl ? (
              <Image
                source={{ uri: provider.imageUrl }}
                style={styles.providerImage}
              />
            ) : (
              <View style={styles.iconContainer}>
                <FontAwesome5
                  name={getProviderIcon(provider.type)}
                  size={24}
                  color={colors.primary}
                />
              </View>
            )}
            <View style={styles.providerInfo}>
              <Text style={styles.providerName}>{provider.name}</Text>
              <View
                style={[
                  styles.roleBadge,
                  {
                    borderColor: getRoleColors(provider.role).border,
                    backgroundColor: getRoleColors(provider.role).background,
                  },
                ]}
              >
                <Text style={styles.roleBadgeText}>{getRoleLabel(provider.role)}</Text>
              </View>
              <Text style={styles.providerAddress}>{provider.address}</Text>
            </View>
            <FontAwesome5 name="chevron-right" size={16} color={colors.gray400} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Botão Cancelar */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={onCancel}
          activeOpacity={0.7}
        >
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
