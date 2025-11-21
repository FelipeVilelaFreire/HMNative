import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, TextInput, Switch } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import {
  TeamMember,
  RoleType,
  Permission,
  permissionLabels,
  roleLabels
} from '@/src/mocks/management';
import { styles } from './EditTeamMemberModal.styles';

interface EditTeamMemberModalProps {
  visible: boolean;
  member: TeamMember | null;
  onClose: () => void;
  onSave: (member: TeamMember) => void;
}

const ALL_PERMISSIONS: Permission[] = ['edit_team', 'manage_activities', 'edit_establishment'];
const ROLE_OPTIONS: RoleType[] = ['manager', 'instructor', 'employee'];

export default function EditTeamMemberModal({ visible, member, onClose, onSave }: EditTeamMemberModalProps) {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [roleType, setRoleType] = useState<RoleType>('employee');
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [isActive, setIsActive] = useState(true);

  // Preenche o form quando o member muda
  useEffect(() => {
    if (member) {
      setName(member.name);
      setNickname(member.nickname);
      setEmail(member.email);
      setPhone(member.phone);
      setRoleType(member.roleType);
      setPermissions([...member.permissions]);
      setIsActive(member.isActive);
    }
  }, [member]);

  const handleClose = () => {
    onClose();
  };

  const handleSave = () => {
    if (!member || !name || !nickname || !email) return;

    onSave({
      ...member,
      name,
      nickname,
      email,
      phone,
      roleType,
      permissions,
      isActive,
    });

    onClose();
  };

  const togglePermission = (permission: Permission) => {
    setPermissions(prev =>
      prev.includes(permission)
        ? prev.filter(p => p !== permission)
        : [...prev, permission]
    );
  };

  // Não permite editar owner para outro role
  const isOwner = member?.roleType === 'owner';

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
            <Text style={styles.title}>Editar Membro</Text>
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
            {/* Status Ativo/Inativo */}
            <View style={styles.statusSection}>
              <View style={styles.statusRow}>
                <View>
                  <Text style={styles.statusLabel}>Status do Membro</Text>
                  <Text style={styles.statusValue}>
                    {isActive ? 'Ativo' : 'Inativo'}
                  </Text>
                </View>
                <Switch
                  value={isActive}
                  onValueChange={setIsActive}
                  trackColor={{ false: colors.gray300, true: colors.primaryBackground }}
                  thumbColor={isActive ? colors.primary : colors.white}
                  disabled={isOwner}
                />
              </View>
            </View>

            {/* Nome */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nome completo</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Ex: João Silva"
                placeholderTextColor={colors.gray400}
              />
            </View>

            {/* Nickname */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nickname (username)</Text>
              <TextInput
                style={styles.input}
                value={nickname}
                onChangeText={setNickname}
                placeholder="Ex: joaosilva"
                placeholderTextColor={colors.gray400}
                autoCapitalize="none"
              />
            </View>

            {/* Email */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Ex: joao@email.com"
                placeholderTextColor={colors.gray400}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Telefone */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Telefone</Text>
              <TextInput
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
                placeholder="Ex: (11) 98765-4321"
                placeholderTextColor={colors.gray400}
                keyboardType="phone-pad"
              />
            </View>

            {/* Função */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Função</Text>
              {isOwner ? (
                <View style={styles.ownerBadge}>
                  <FontAwesome5 name="crown" size={12} color="#B8860B" />
                  <Text style={styles.ownerBadgeText}>Proprietário</Text>
                </View>
              ) : (
                <View style={styles.roleSelector}>
                  {ROLE_OPTIONS.map((role) => (
                    <TouchableOpacity
                      key={role}
                      style={[
                        styles.roleOption,
                        roleType === role && styles.roleOptionSelected
                      ]}
                      onPress={() => setRoleType(role)}
                      activeOpacity={0.7}
                    >
                      <Text style={[
                        styles.roleOptionText,
                        roleType === role && styles.roleOptionTextSelected
                      ]}>
                        {roleLabels[role]}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
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
                      disabled={isOwner}
                    />
                  </View>
                ))}
              </View>
            </View>
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
              style={styles.saveButton}
              onPress={handleSave}
              activeOpacity={0.7}
            >
              <FontAwesome5 name="save" size={16} color={colors.white} />
              <Text style={styles.saveButtonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
