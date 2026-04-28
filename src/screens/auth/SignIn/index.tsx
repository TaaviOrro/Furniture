import React, { useState } from 'react';
import { Alert, Pressable, Text, TextInput, View } from 'react-native';
import Button from '../../../components/Button';
import styles from './styles';

type SignInProps = {
  onSubmit?: () => void;
  onSignUp?: () => void;
};

const SignIn: React.FC<SignInProps> = ({ onSubmit, onSignUp }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {

    if (!name.trim() || !password.trim()) {
      Alert.alert('Error', 'Please enter both your name and password.');
      return;
    }

    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign In</Text>
      <Text style={styles.subtitle}>
        Welcome back! Log in to continue shopping beautiful furniture.
      </Text>

      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <Button title="Sign in" onPress={handleSignIn} />

      <Text style={styles.orText}>Or continue with</Text>
      <Pressable style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </Pressable>

      <View style={styles.bottomRow}>
        <Text style={styles.bottomText}>Don&apos;t have an account?</Text>
        <Pressable onPress={onSignUp}>
          <Text style={styles.bottomLink}> Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignIn;