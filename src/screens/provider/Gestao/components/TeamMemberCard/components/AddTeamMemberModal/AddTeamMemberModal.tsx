import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, TextInput, Switch, Image, ActivityIndicator } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import {
  RoleType,
  Permission,
  permissionLabels,
  roleLabels
} from '@/src/mocks/management';
import { styles } from './AddTeamMemberModal.styles';

interface AddTeamMemberModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (member: NewTeamMember) => void;
}

export interface NewTeamMember {
  userId: string;
  name: string;
  nickname: string;
  email: string;
  avatar?: string;
  roleType: RoleType;
  permissions: Permission[];
}

// Mock de usuários disponíveis para busca
const MOCK_USERS = [
  { id: 'u1', name: 'Lucas Mendes', nickname: 'lucasm', email: 'lucas@email.com', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150' },
  { id: 'u2', name: 'Fernanda Costa', nickname: 'fecosta', email: 'fernanda@email.com', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' },
  { id: 'u3', name: 'Roberto Almeida', nickname: 'robalmeida', email: 'roberto@email.com', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150' },
  { id: 'u4', name: 'Juliana Santos', nickname: 'jusantos', email: 'juliana@email.com', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150' },
  { id: 'u5', name: 'Pedro Oliveira', nickname: 'pedroo', email: 'pedro@email.com', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150' },
  { id: 'u6', name: 'Amanda Lima', nickname: 'amandalima', email: 'amanda@email.com', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150' },
];

const ALL_PERMISSIONS: Permission[] = ['edit_team', 'manage_activities', 'edit_establishment'];
const ROLE_OPTIONS: RoleType[] = ['owner', 'manager', 'instructor', 'employee'];

type SelectedUser = typeof MOCK_USERS[0] | null;

export default function AddTeamMemberModal({ visible, onClose, onSave }: AddTeamMemberModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof MOCK_USERS>([]);
  const [selectedUser, setSelectedUser] = useState<SelectedUser>(null);
  const [roleType, setRoleType] = useState<RoleType>('employee');
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Simula busca com debounce
  useEffect(() => {
    if (searchQuery.length < 2) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    const timer = setTimeout(() => {
      const query = searchQuery.toLowerCase();
      const results = MOCK_USERS.filter(
        user =>
          user.name.toLowerCase().includes(query) ||
          user.nickname.toLowerCase().includes(query)
      );
      setSearchResults(results);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const resetForm = () => {
    setSearchQuery('');
    setSearchResults([]);
    setSelectedUser(null);
    setRoleType('employee');
    setPermissions([]);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSelectUser = (user: typeof MOCK_USERS[0]) => {
    setSelectedUser(user);
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleRemoveUser = () => {
    setSelectedUser(null);
  };

  const handleSave = () => {
    if (!selectedUser) return;

    onSave({
      userId: selectedUser.id,
      name: selectedUser.name,
      nickname: selectedUser.nickname,
      email: selectedUser.email,
      avatar: selectedUser.avatar,
      roleType,
      permissions,
    });

    resetForm();
    onClose();
  };

  const togglePermission = (permission: Permission) => {
    setPermissions(prev =>
      prev.includes(permission)
        ? prev.filter(p => p !== permission)
        : [...prev, permission]
    );
  };

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      statusBarTranslucent
      onRequestClose={handleClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Adicionar Membro</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleClose}
              activeOpacity={0.7}
            >
              <FontAwesome5 name="times" size={18} color={colors.gray600} />
            </TouchableOpacity>
          </View>

          {/* Content */}
          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            {/* Busca de Usuário */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Buscar usuário</Text>

              {selectedUser ? (
                // Usuário selecionado
                <View style={styles.selectedUserCard}>
                  <View style={styles.selectedUserInfo}>
                    {selectedUser.avatar ? (
                      <Image source={{ uri: selectedUser.avatar }} style={styles.selectedUserAvatar} />
                    ) : (
                      <View style={styles.selectedUserAvatarPlaceholder}>
                        <Text style={styles.selectedUserAvatarText}>
                          {selectedUser.name.substring(0, 2).toUpperCase()}
                        </Text>
                      </View>
                    )}
                    <View style={styles.selectedUserText}>
                      <Text style={styles.selectedUserName}>{selectedUser.name}</Text>
                      <Text style={styles.selectedUserNickname}>@{selectedUser.nickname}</Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.removeUserButton}
                    onPress={handleRemoveUser}
                    activeOpacity={0.7}
                  >
                    <FontAwesome5 name="times" size={14} color={colors.error} />
                  </TouchableOpacity>
                </View>
              ) : (
                // Campo de busca
                <View style={styles.searchContainer}>
                  <View style={styles.searchInputWrapper}>
                    <FontAwesome5 name="search" size={14} color={colors.gray400} style={styles.searchIcon} />
                    <TextInput
                      style={styles.searchInput}
                      value={searchQuery}
                      onChangeText={setSearchQuery}
                      placeholder="Digite nome ou @nickname"
                      placeholderTextColor={colors.gray400}
                      autoCapitalize="none"
                    />
                    {isSearching && (
                      <ActivityIndicator size="small" color={colors.primary} />
                    )}
                  </View>

                  {/* Resultados da busca */}
                  {searchResults.length > 0 && (
                    <View style={styles.searchResults}>
                      {searchResults.map((user) => (
                        <TouchableOpacity
                          key={user.id}
                          style={styles.searchResultItem}
                          onPress={() => handleSelectUser(user)}
                          activeOpacity={0.7}
                        >
                          {user.avatar ? (
                            <Image source={{ uri: user.avatar }} style={styles.searchResultAvatar} />
                          ) : (
                            <View style={styles.searchResultAvatarPlaceholder}>
                              <Text style={styles.searchResultAvatarText}>
                                {user.name.substring(0, 2).toUpperCase()}
                              </Text>
                            </View>
                          )}
                          <View style={styles.searchResultText}>
                            <Text style={styles.searchResultName}>{user.name}</Text>
                            <Text style={styles.searchResultNickname}>@{user.nickname}</Text>
                          </View>
                          <FontAwesome5 name="plus-circle" size={18} color={colors.primary} />
                        </TouchableOpacity>
                      ))}
                    </View>
                  )}

                  {/* Nenhum resultado */}
                  {searchQuery.length >= 2 && !isSearching && searchResults.length === 0 && (
                    <View style={styles.noResults}>
                      <FontAwesome5 name="user-slash" size={20} color={colors.gray400} />
                      <Text style={styles.noResultsText}>Nenhum usuário encontrado</Text>
                    </View>
                  )}
                </View>
              )}
            </View>

            {/* Configurações (só aparece se usuário selecionado) */}
            {selectedUser && (
              <>
                {/* Função */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Função</Text>
                  <View style={styles.roleSelector}>
                    {ROLE_OPTIONS.map((role) => {
                      const isSelected = roleType === role;
                      const roleColors = colors.roles[role];
                      return (
                        <TouchableOpacity
                          key={role}
                          style={[
                            styles.roleOption,
                            isSelected && {
                              borderColor: roleColors.border,
                              backgroundColor: roleColors.background,
                            }
                          ]}
                          onPress={() => setRoleType(role)}
                          activeOpacity={0.7}
                        >
                          <Text style={[
                            styles.roleOptionText,
                            isSelected && {
                              color: roleColors.text,
                              fontWeight: '600' as const,
                            }
                          ]}>
                            {roleLabels[role]}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>

                {/* Permissões */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Permissões</Text>
                  <View style={styles.permissionsSection}>
                    {ALL_PERMISSIONS.map((permission) => (
                      <View key={permission} style={styles.permissionRow}>
                        <Text style={styles.permissionLabel}>
                          {permissionLabels[permission]}
                        </Text>
                        <Switch
                          value={permissions.includes(permission)}
                          onValueChange={() => togglePermission(permission)}
                          trackColor={{ false: colors.gray300, true: colors.primaryBackground }}
                          thumbColor={permissions.includes(permission) ? colors.primary : colors.white}
                        />
                      </View>
                    ))}
                  </View>
                </View>
              </>
            )}
          </ScrollView>

          {/* Footer */}
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={handleClose}
              activeOpacity={0.7}
            >
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.saveButton, !selectedUser && styles.saveButtonDisabled]}
              onPress={handleSave}
              activeOpacity={0.7}
              disabled={!selectedUser}
            >
              <FontAwesome5 name="user-plus" size={16} color={colors.white} />
              <Text style={styles.saveButtonText}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
