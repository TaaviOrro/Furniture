import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';

const categories = ['Chair', 'Table', 'Sofa', 'Bed'];

export default function NewListingScreen() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Chair');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.headerRow}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={22} color="#4F63AC" />
        </Pressable>
        <Text style={styles.title}>Create a new listing</Text>
      </View>

      <Text style={styles.sectionLabel}>Upload photos</Text>
      <View style={styles.photoRow}>
        {[1, 2, 3].map((index) => (
          <Pressable key={index} style={styles.photoBox} onPress={() => null}>
            <Ionicons name="image-outline" size={24} color="#9CA3AF" />
          </Pressable>
        ))}
      </View>

      <Text style={styles.fieldLabel}>Title</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Listing title"
        placeholderTextColor="#9CA3AF"
        style={styles.input}
      />

      <Text style={styles.fieldLabel}>Category</Text>
      <View style={styles.categoryRow}>
        {categories.map((item) => (
          <Pressable
            key={item}
            style={[
              styles.categoryButton,
              item === category && styles.categoryButtonActive,
            ]}
            onPress={() => setCategory(item)}
          >
            <Text
              style={item === category ? styles.categoryTextActive : styles.categoryText}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.fieldLabel}>Price</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        placeholder="Enter price in USD"
        placeholderTextColor="#9CA3AF"
        keyboardType="numeric"
        style={styles.input}
      />

      <Text style={styles.fieldLabel}>Description</Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Tell us more..."
        placeholderTextColor="#9CA3AF"
        style={[styles.input, styles.textArea]}
        multiline
      />

      <Button
        title="Submit"
        onPress={() => null}
        style={styles.submitButton}
        textStyle={styles.submitButtonText}
      />
    </ScrollView>
  );
}
