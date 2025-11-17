import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { ICONS } from '@/src/constants';
import { ReviewCard, AddReviewCard } from '@/src/components/features/ActivityDetail/components/ActivityModal/components/ActivityReviewsCard/components';
import { styles, CARD_WIDTH } from './ProviderReviewsCard.styles';

interface Review {
  id: string;
  userName: string;
  userNickname: string;
  userAvatar: string;
  rating: number;
  daysAgo: number;
  comment: string;
}

interface ProviderReviewsCardProps {
  reviews: Review[];
}

export default function ProviderReviewsCard({ reviews }: ProviderReviewsCardProps) {
  const [isAddingReview, setIsAddingReview] = useState(false);

  const handleAddReview = (rating: number, comment: string) => {
    // Aqui você pode adicionar a lógica para salvar a avaliação
    console.log('Nova avaliação:', { rating, comment });
    setIsAddingReview(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Avaliações</Text>
        {!isAddingReview && (
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => setIsAddingReview(true)}
            activeOpacity={0.7}
          >
            <Ionicons name={ICONS.add} size={16} color={colors.gray600} />
            <Text style={styles.addButtonText}>Adicionar avaliação</Text>
          </TouchableOpacity>
        )}
      </View>

      {isAddingReview ? (
        <View style={styles.addReviewWrapper}>
          <AddReviewCard
            onCancel={() => setIsAddingReview(false)}
            onSubmit={handleAddReview}
          />
        </View>
      ) : (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.carouselContainer}
          snapToInterval={CARD_WIDTH}
          decelerationRate="fast"
        >
          {reviews.map((review) => (
            <View key={review.id} style={styles.cardWrapper}>
              <ReviewCard
                userName={review.userName}
                userNickname={review.userNickname}
                userAvatar={review.userAvatar}
                rating={review.rating}
                daysAgo={review.daysAgo}
                comment={review.comment}
              />
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
