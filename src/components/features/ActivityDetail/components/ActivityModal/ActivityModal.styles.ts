import { StyleSheet } from 'react-native';
import { colors, typography } from '@/src/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: -16, // Sobrepõe um pouco a imagem
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 36,
    alignItems: 'center',
  },
  initialDataWrapper: {
    marginTop: 28,
    width: '100%',
  },
  infoCardWrapper: {
    marginTop: 32,
    width: '100%',
  },
  providerCardWrapper: {
    marginTop: 40,
    width: '100%',
  },
  locationCardWrapper: {
    marginTop: 40,
    width: '100%',
  },
  aboutCardWrapper: {
    marginTop: 40,
    width: '100%',
  },
  providedByCardWrapper: {
    marginTop: 40,
    width: '100%',
  },
  reviewsCardWrapper: {
    marginTop: 40,
    width: '100%',
  },
  title: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary,
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.regular,
    color: colors.gray600,
    lineHeight: 22,
    textAlign: 'center',
  },
});
