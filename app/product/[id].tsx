import { useLocalSearchParams, useRouter } from 'expo-router';
import { View } from 'react-native';
import Button from '../../src/components/Button';
import ProductDetailsScreen from '../../src/screens/ProductDetails';

export default function ProductDetailsRoute() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1 }}>
      <ProductDetailsScreen id={id ?? 'unknown'} />
      <View style={{ padding: 24 }}>
        <Button title="Go back" onPress={() => router.back()} />
      </View>
    </View>
  );
}
