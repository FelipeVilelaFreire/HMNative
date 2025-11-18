import { View, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { LocationPicker } from './components';
import { Carousel } from '@/src/components/ui';
import { activities } from '@/src/mocks/activities';
import { Activity } from '@/src/mocks/activities';
import { styles } from './Home.styles';

export default function Home() {
  const router = useRouter();

  // Filtrar atividades por categoria
  const esportes = activities.filter((a) => a.category === 'Esportes');
  const bemEstar = activities.filter((a) => a.category === 'Bem-estar');
  const musica = activities.filter((a) => a.category === 'Música');
  const artes = activities.filter((a) => a.category === 'Artes');
  const porDistancia = [...activities].sort((a, b) =>
    parseFloat(a.location.distance) - parseFloat(b.location.distance)
  );

  const handleCardPress = (activity: Activity) => {
    router.push(`/detail/${activity.id}`);
  };

  return (
    <View style={styles.container}>
      <LocationPicker />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Carrossel Recomendados */}
        <Carousel
          title="Recomendados"
          activities={activities.slice(0, 6)}
          variant="medium"
          onCardPress={handleCardPress}
          isFirst
        />

        {/* Carrossel Perto de Você */}
        <Carousel
          title="Perto de Você"
          activities={porDistancia.slice(0, 6)}
          variant="medium"
          onCardPress={handleCardPress}
        />

        {/* Carrossel Esportes */}
        <Carousel
          title="Esportes"
          activities={esportes}
          variant="medium"
          onCardPress={handleCardPress}
        />

        {/* Carrossel Bem-estar */}
        <Carousel
          title="Bem-estar"
          activities={bemEstar}
          variant="medium"
          onCardPress={handleCardPress}
        />

        {/* Carrossel Música */}
        <Carousel
          title="Música"
          activities={musica}
          variant="medium"
          onCardPress={handleCardPress}
        />

        {/* Carrossel Artes */}
        <Carousel
          title="Artes"
          activities={artes}
          variant="medium"
          onCardPress={handleCardPress}
        />
      </ScrollView>
    </View>
  );
}
