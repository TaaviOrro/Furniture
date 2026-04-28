import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';
import ProductDetailsScreen from '../../src/screens/ProductDetails';

export default function ProductDetailsRoute() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1 }}>
      <ProductDetailsScreen id={id ?? '1'} />
    </View>
  );
}
