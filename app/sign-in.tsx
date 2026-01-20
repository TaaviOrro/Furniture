import { useRouter } from 'expo-router';
import SignInScreen from '../src/screens/auth/SignIn';

export default function SignIn() {
  const router = useRouter();

  return <SignInScreen onSubmit={() => router.push('/home')} />;
}
