import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { ICONS } from '@/src/constants';
import { currentUser } from '@/src/mocks/user';
import { styles } from './AddReviewCard.styles';

interface AddReviewCardProps {
  onCancel: () => void;
  onSubmit: (rating: number, comment: string) => void;
}

export default function AddReviewCard({ onCancel, onSubmit }: AddReviewCardProps) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    if (rating > 0 && comment.trim()) {
      onSubmit(rating, comment);
      setRating(0);
      setComment('');
    }
  };

  // Função para renderizar as estrelas interativas
  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      const isFilled = i <= rating;

      stars.push(
        <TouchableOpacity
          key={`star-${i}`}
          onPress={() => setRating(i)}
          activeOpacity={0.7}
        >
          <Ionicons
            name={isFilled ? ICONS.star : ICONS.starOutline}
            size={20}
            color={colors.star}
          />
        </TouchableOpacity>
      );
    }

    return stars;
  };

  return (
    <View style={styles.card}>
      {/* Header com Avatar e Informações do Usuário */}
      <View style={styles.header}>
        <Image
          source={{ uri: currentUser.avatar }}
          style={styles.avatar}
          resizeMode="cover"
        />
        <View style={styles.userInfo}>
          <View style={styles.userNameRow}>
            <Text style={styles.userName}>{currentUser.name}</Text>
            <Text style={styles.youLabel}> (Você)</Text>
          </View>
          <Text style={styles.userNickname}>{currentUser.nickname}</Text>
        </View>
      </View>

      {/* Seletor de Rating */}
      <View style={styles.ratingRow}>
        <View style={styles.starsContainer}>
          {renderStars()}
        </View>
      </View>

      {/* Campo de Comentário */}
      <View style={styles.commentContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="Escreva sua avaliação..."
          placeholderTextColor={colors.gray400}
          value={comment}
          onChangeText={setComment}
          multiline
        />
      </View>

      {/* Botões de Ação */}
      <View style={styles.actionsRow}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={onCancel}
          activeOpacity={0.7}
        >
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.submitButton,
            (!rating || !comment.trim()) && styles.submitButtonDisabled
          ]}
          onPress={handleSubmit}
          activeOpacity={0.7}
          disabled={!rating || !comment.trim()}
        >
          <Text style={styles.submitButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
