import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Button from '../../../components/Button';
import styles from './styles';

type SignUpProps = {
  onSubmit?: () => void;
};

const SignUp: React.FC<SignUpProps> = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>

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

      <Button title="Create account" onPress={onSubmit} />
    </View>
  );
};

export default SignUp;

