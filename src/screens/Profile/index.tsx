import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>John Doe</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>john.doe@example.com</Text>

        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.value}>+1 234 567 890</Text>

        <Text style={styles.label}>Address:</Text>
        <Text style={styles.value}>123 Furniture St, City, Country</Text>
      </View>
    </View>
  );
}