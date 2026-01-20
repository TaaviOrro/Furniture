import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import Button from '../src/components/Button';

export default function SignUp() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'center' }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 24 }}>
        Sign up
      </Text>
      <Button title="Go back" onPress={() => router.back()} />
    </View>
  );
}
