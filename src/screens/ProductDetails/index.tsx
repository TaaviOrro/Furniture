import { useFavorites } from '@/context/FavoritesContext';
import { PRODUCTS } from '@/data/products';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';

type ProductDetailsProps = {
  id: string;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ id }) => {
  const router = useRouter();
  const { toggleFavorite, isFavorite } = useFavorites();
  const product = PRODUCTS.find((item) => item.id === id) ?? PRODUCTS[0];
  const favorited = isFavorite(product.id);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.headerRow}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#4F63AC" />
        </Pressable>
        <Pressable
          style={styles.actionButton}
          onPress={() => toggleFavorite(product.id)}
        >
          <Ionicons
            name={favorited ? 'heart' : 'heart-outline'}
            size={22}
            color={favorited ? '#EF4444' : '#4F63AC'}
          />
        </Pressable>
      </View>

      <View style={styles.imageWrapper}>
        <Image source={{ uri: product.image }} style={styles.image} resizeMode="cover" />
      </View>

      <View style={styles.content}>
        <View style={styles.titleRow}>
          <View>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.location}>{product.location}</Text>
          </View>
          <Text style={styles.price}>{product.price}</Text>
        </View>

        <View style={styles.metaRow}>
          <View style={styles.metaChip}>
            <Text style={styles.metaChipText}>New</Text>
          </View>
          <View style={styles.metaChip}>
            <Text style={styles.metaChipText}>20 cm</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>{product.description}</Text>

        <Button
          title="Contact Seller"
          onPress={() => null}
          style={styles.contactButton}
          textStyle={styles.contactButtonText}
        />
      </View>
    </ScrollView>
  );
};

export default ProductDetails;
