import { useRouter } from 'expo-router';
import SplashScreen from '../src/screens/auth/Splash';

export default function App() {
  const router = useRouter();

  return (
    <SplashScreen
      onSignUp={() => router.push('/sign-up')}
      onSignIn={() => router.push('/sign-in')}
    />
  );
}
