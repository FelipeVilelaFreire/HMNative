import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { styles } from './WarningModal.styles';

interface WarningModalProps {
  visible: boolean;
  title?: string;
  message: string;
  subtext?: string;
  cancelText?: string;
  confirmText?: string;
  onCancel: () => void;
  onConfirm: () => void;
  iconName?: string;
  iconColor?: string;
}

export default function WarningModal({
  visible,
  title = 'Atenção',
  message,
  subtext = 'Deseja continuar mesmo assim?',
  cancelText = 'Cancelar',
  confirmText = 'Confirmar',
  onCancel,
  onConfirm,
  iconName = 'exclamation-triangle',
  iconColor = colors.warning,
}: WarningModalProps) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        {/* Ícone de aviso */}
        <View style={[styles.iconContainer, { backgroundColor: `${iconColor}20` }]}>
          <FontAwesome5 name={iconName} size={36} color={iconColor} />
        </View>

        {/* Título */}
        <Text style={styles.title}>{title}</Text>

        {/* Mensagem */}
        <Text style={styles.message}>{message}</Text>

        {/* Subtexto */}
        {subtext && <Text style={styles.subtext}>{subtext}</Text>}

        {/* Botões */}
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={onCancel}
            activeOpacity={0.7}
          >
            <Text style={styles.cancelText}>{cancelText}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.confirmButton, { backgroundColor: iconColor }]}
            onPress={onConfirm}
            activeOpacity={0.7}
          >
            <Text style={styles.confirmText}>{confirmText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
