import React from 'react';
import { View, Text, Image } from 'react-native';
import { User } from '@/src/mocks/user';
import { styles } from './UserDataCard.styles';

interface UserDataCardProps {
  user: User;
}

export default function UserDataCard({ user }: UserDataCardProps) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: user.avatar }}
        style={styles.avatar}
        resizeMode="cover"
      />
      <View style={styles.userInfo}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.nickname}>{user.nickname}</Text>
      </View>
    </View>
  );
}
