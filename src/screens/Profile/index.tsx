import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';

const profileItems = [
  {
    id: '1',
    title: 'My Listings',
    subtitle: 'Already have 12 listings',
    icon: 'layers-outline',
    route: '/my-listings',
  },
  {
    id: '2',
    title: 'Settings',
    subtitle: 'Account, help, contact',
    icon: 'settings-outline',
    route: '/settings',
  },
];

export default function ProfileScreen() {
  const router = useRouter();
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Profile</Text>
        <Pressable style={styles.headerAction} onPress={() => null}>
          <Ionicons name="create-outline" size={22} color="#4F63AC" />
        </Pressable>
      </View>

      <View style={styles.userCard}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarInitials}>E</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Elina Hovakimyan</Text>
          <Text style={styles.userEmail}>hello@pgmail.com</Text>
        </View>
      </View>

      <View style={styles.menuCard}>
        {profileItems.map((item, index) => (
          <Pressable
            key={item.id}
            style={[styles.menuRow, index === profileItems.length - 1 && styles.menuRowLast]}
            onPress={() => item.route && router.push(item.route)}
          >
            <View style={styles.rowLeft}>
              <View style={styles.menuIconBox}>
                <Ionicons name={item.icon as any} size={20} color="#4F63AC" />
              </View>
              <View style={styles.menuText}>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </Pressable>
        ))}
      </View>

      <Button
        title="Add a new listing"
        onPress={() => router.push('/new-listing')}
        style={styles.ctaButton}
        textStyle={styles.ctaButtonText}
      />
    </ScrollView>
  );
}
