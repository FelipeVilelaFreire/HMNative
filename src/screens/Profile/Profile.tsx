import { View, Text, StyleSheet } from 'react-native';
import { colors, textStyles } from '@/src/theme';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Text style={styles.body}>Seu perfil - Em construção</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 20,
  },
  title: {
    ...textStyles.h2,
    color: colors.primary,
    marginBottom: 16,
  },
  body: {
    ...textStyles.body1,
    color: colors.gray600,
  },
});
