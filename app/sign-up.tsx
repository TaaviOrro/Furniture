import { useRouter } from 'expo-router';
import SignUpScreen from '../src/screens/auth/SignUp';

export default function SignUp() {
  const router = useRouter();

  return (
    <SignUpScreen
      onSubmit={() => router.push('/home')}
      onSignIn={() => router.push('/sign-in')}
    />
  );
}
