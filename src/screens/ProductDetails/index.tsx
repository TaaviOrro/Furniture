import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

type ProductDetailsProps = {
  id: string;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ id }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product details</Text>
      <Text style={styles.subtitle}>Product id: {id}</Text>
    </View>
  );
};

export default ProductDetails;
