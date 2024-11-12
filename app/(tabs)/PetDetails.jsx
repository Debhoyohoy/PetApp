import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, Link } from 'expo-router';

const PetDetails = () => {
  const { name, imageUrl, type, description } = useLocalSearchParams();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Link href="/PetSit" style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#444" />
        </Link>
        <Text style={styles.title}>Pet-sit</Text>
      </View>

      <Image source={{ uri: imageUrl }} style={styles.petImage} />

      <View style={styles.infoContainer}>
        <Text style={styles.petName}>{name}</Text>
        <Text style={styles.petDetails}>{type}</Text>
      </View>

      <View style={styles.tagsContainer}>
        {['Junior', 'Loves company', 'Playful', 'Cheerful', 'Cuddly'].map((tag) => (
          <View key={tag} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.description}>
        {description || "Hi, I'm a playful pet that loves attention and fun times!"}
      </Text>

      <TouchableOpacity 
        style={styles.actionButton} 
        onPress={() => navigation.navigate('Confirmation')}>
        <Text style={styles.actionButtonText}>I want to cat-sit!</Text>
      </TouchableOpacity>
      
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFF7F3',
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  backButton: {
    padding: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#444',
    marginLeft: 10,
  },
  petImage: {
    width: '100%',
    height: 220,
    borderRadius: 15,
    marginBottom: 20,
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  petName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 3,
  },
  petDetails: {
    fontSize: 16,
    color: '#666',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  tag: {
    backgroundColor: '#D8A1A8',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  description: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 30,
  },
  actionButton: {
    backgroundColor: '#444',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  actionButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PetDetails;
