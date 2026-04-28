import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import Button from '../../../components/Button';
import styles from './styles';

type SignUpProps = {
  onSubmit?: () => void;
  onSignIn?: () => void;
};

const SignUp: React.FC<SignUpProps> = ({ onSubmit, onSignIn }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>
      <Text style={styles.subtitle}>Create your account and start discovering furniture you'll love.</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} placeholder="Enter your name" />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Create a password"
          secureTextEntry
        />
      </View>

      <Text style={styles.agreement}>I agree with Terms & Privacy</Text>
      <Button title="Sign Up" onPress={onSubmit} />

      <Text style={styles.orText}>Or sign up with</Text>
      <Pressable style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Sign up with Google</Text>
      </Pressable>

      <View style={styles.bottomRow}>
        <Text style={styles.bottomText}>Already have an account?</Text>
        <Pressable onPress={onSignIn}>
          <Text style={styles.bottomLink}> Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUp;

