import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Button from '../../../components/Button';
import styles from './styles';

const SignIn: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>

      <View style={styles.form}>
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
          placeholder="Enter your password"
          secureTextEntry
        />
      </View>

      <Button title="Sign in" />
    </View>
  );
};

export default SignIn;
