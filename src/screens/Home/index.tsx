import { useFavorites } from '@/context/FavoritesContext';
import { PRODUCTS } from '@/data/products';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Image, Pressable, Text, TextInput, View } from 'react-native';
import styles from './styles';

const CATEGORIES = ['All', 'Chairs', 'Tables', 'Sofas', 'Beds'];

const Home: React.FC = () => {
  const router = useRouter();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === 'All' || item.category === selectedCategory),
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.smallText}>Find All You Need</Text>
          <Text style={styles.title}>Discover furniture</Text>
        </View>

        <Pressable style={styles.avatarButton}>
          <Ionicons name="person-circle-outline" size={36} color="#ffffff" />
        </Pressable>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search for furniture"
          placeholderTextColor="#9CA3AF"
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.searchInput}
        />
      </View>

      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={[...CATEGORIES]}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Pressable
            style={[
              styles.categoryChip,
              item === selectedCategory && styles.categoryChipActive,
            ]}
            onPress={() => setSelectedCategory(item)}
          >
            <Text
              style={
                item === selectedCategory
                  ? styles.categoryTextActive
                  : styles.categoryText
              }
            >
              {item}
            </Text>
          </Pressable>
        )}
        style={styles.categoriesList}
      />

      <Text style={styles.sectionTitle}>Popular</Text>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.productRow}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Pressable
              style={styles.heartBadge}
              onPress={() => toggleFavorite(item.id)}
            >
              <Ionicons
                name={isFavorite(item.id) ? 'heart' : 'heart-outline'}
                size={18}
                color={isFavorite(item.id) ? '#EF4444' : '#9CA3AF'}
              />
            </Pressable>
            <Pressable
              style={styles.productCardContent}
              onPress={() => router.push(`/product/${item.id}`)}
            >
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <View style={styles.cardFooter}>
                <Text style={styles.productPrice}>{item.price}</Text>
                <Text style={styles.productButton}>+</Text>
              </View>
            </Pressable>
          </View>
        )}
      />

    </View>
  );
};

export default Home;
