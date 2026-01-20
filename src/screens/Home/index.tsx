import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';

const CATEGORIES = ['Chairs', 'Tables', 'Sofas', 'Beds'];
const PRODUCTS = [
  { id: '1', name: 'Modern chair', price: '' },
  { id: '2', name: 'Wooden table', price: '' },
  { id: '3', name: 'Cozy sofa', price: '' },
];

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discover furniture</Text>

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
          <View style={styles.productCard}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
