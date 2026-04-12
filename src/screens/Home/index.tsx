import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import styles from './styles';

const CATEGORIES = ['Chairs', 'Tables', 'Sofas', 'Beds'];
const PRODUCTS = [
  { id: '1', name: 'Modern chair', price: '' },
  { id: '2', name: 'Wooden table', price: '' },
  { id: '3', name: 'Cozy sofa', price: '' },
];

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discover furniture</Text>

      <View style={styles.navButtons}>
        <Pressable style={styles.navButton} onPress={() => router.push('/favorites' as any)}>
          <Text style={styles.navButtonText}>Favorites</Text>
        </Pressable>
        <Pressable style={styles.navButton} onPress={() => router.push('/profile' as any)}>
          <Text style={styles.navButtonText}>Profile</Text>
        </Pressable>
      </View>

      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        horizontal
        data={CATEGORIES}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.categoryChip}>
            <Text style={styles.categoryText}>{item}</Text>
          </View>
        )}
        style={styles.categoriesList}
      />

      <Text style={styles.sectionTitle}>Popular products</Text>
      <FlatList
        data={PRODUCTS}
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
};

export default Home;
