import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors, typography } from '@/src/theme';

export default function AddActivity() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Nova Atividade</Text>
          <Text style={styles.subtitle}>Adicione uma nova atividade ao seu catálogo</Text>
        </View>

        <View style={styles.formPlaceholder}>
          <FontAwesome5 name="plus-circle" size={64} color={colors.primary} />
          <Text style={styles.placeholderText}>Formulário de criação de atividade</Text>
        </View>

        <TouchableOpacity style={styles.createButton} activeOpacity={0.8}>
          <Text style={styles.createButtonText}>Criar Atividade</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 24,
  },
  title: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: typography.fontSize.base,
    color: colors.gray600,
  },
  formPlaceholder: {
    backgroundColor: colors.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.gray200,
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 300,
    marginBottom: 24,
  },
  placeholderText: {
    fontSize: typography.fontSize.lg,
    color: colors.gray500,
    fontWeight: typography.fontWeight.medium,
    marginTop: 16,
    textAlign: 'center',
  },
  createButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 32,
  },
  createButtonText: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.white,
  },
});
