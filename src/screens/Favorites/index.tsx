import { useFavorites } from '@/context/FavoritesContext';
import { PRODUCTS } from '@/data/products';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Image, Pressable, Text, View } from 'react-native';
import styles from './styles';

export default function FavoritesScreen() {
  const router = useRouter();
  const { favorites, toggleFavorite } = useFavorites();
  const favoriteProducts = PRODUCTS.filter((item) => favorites.includes(item.id));

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Favorites</Text>
        <Text style={styles.count}>{favoriteProducts.length} items</Text>
      </View>

      <FlatList
        data={favoriteProducts}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No favorites yet. Tap the heart on a product to save it.</Text>
          </View>
        }
        renderItem={({ item }) => (
          <Pressable
            style={styles.productCard}
            onPress={() => router.push(`/product/${item.id}`)}
          >
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.productInfo}>
              <View style={styles.productText}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productSubtitle}>{item.subtitle}</Text>
              </View>
              <View style={styles.productMeta}>
                <Text style={styles.productPrice}>{item.price}</Text>
                <Pressable
                  style={styles.heartButton}
                  onPress={() => toggleFavorite(item.id)}
                >
                  <Ionicons name="heart" size={18} color="#EF4444" />
                </Pressable>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}
