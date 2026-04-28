import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import styles from './styles';

const helpItems = [
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact Us' },
  { id: 'privacy', label: 'Privacy & Terms' },
];

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.headerRow}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={22} color="#4F63AC" />
        </Pressable>
        <Text style={styles.title}>Settings</Text>
      </View>

      <Text style={styles.sectionLabel}>Personal information</Text>
      <View style={styles.card}>
        <View style={styles.fieldRow}>
          <Text style={styles.fieldLabel}>Name</Text>
          <Text style={styles.fieldValue}>Elina Hovakimyan</Text>
        </View>
        <View style={styles.fieldRow}>
          <Text style={styles.fieldLabel}>Email</Text>
          <Text style={styles.fieldValue}>hello@pgmail.com</Text>
        </View>
      </View>

      <Text style={styles.sectionLabel}>Help Center</Text>
      <View style={styles.card}>
        {helpItems.map((item) => (
          <Pressable key={item.id} style={styles.menuRow} onPress={() => null}>
            <Text style={styles.menuRowText}>{item.label}</Text>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}
