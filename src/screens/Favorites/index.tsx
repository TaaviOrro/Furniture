import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import styles from './styles';

const FAVORITE_PRODUCTS = [
  { id: '1', name: 'Favorite Chair', price: '$199' },
  { id: '2', name: 'Favorite Table', price: '$299' },
  { id: '3', name: 'Favorite Sofa', price: '$499' },
];

export default function FavoritesScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Favorites</Text>
      <FlatList
        data={FAVORITE_PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.productCard}
            onPress={() => router.push(`/product/${item.id}`)}
          >
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}