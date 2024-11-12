import React from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function PetSittersListScreen() {
  const topRatedSitters = [
    { name: 'Nala', rating: '4.5 ⭐', reviews: 12, imageUrl: 'https://i.pinimg.com/736x/1e/7b/e9/1e7be9fc2783cc988ed9eda8065d9fe4.jpg' },
    { name: 'Anu', rating: '4.7 ⭐', reviews: 8, imageUrl: 'https://i.pinimg.com/564x/ac/4a/3e/ac4a3efd820b5b87716e3a3aaa6178f6.jpg' },
    { name: 'Brett', rating: '4.9 ⭐', reviews: 15, imageUrl: 'https://i.pinimg.com/564x/0f/73/8d/0f738d76e52845d2a0fa85a8cc0d9fef.jpg' },
  ];

  const sittersInYourArea = [
    { name: 'Cindy', rating: '4.5 ⭐', reviews: 20, imageUrl: 'https://i.pinimg.com/564x/e2/b5/13/e2b5138297464a06f7ab8193f8754368.jpg' },
    { name: 'Paul', rating: '4.6 ⭐', reviews: 10, imageUrl: 'https://i.pinimg.com/736x/4b/36/13/4b3613b9885a89c366ea7be3c47a8efb.jpg' },
    { name: 'Alice', rating: '4.8 ⭐', reviews: 5, imageUrl: 'https://i.pinimg.com/564x/ed/2e/60/ed2e60bdd428d763bbcc898f36b0ed94.jpg' },
  ];

  return (
    <View style={styles.screen}>
      <Link href="/MenuScreen" style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </Link>

      <Text style={styles.title}>Pet Sitters</Text>
      <TextInput
        placeholder="Enter your location"
        style={styles.searchInput}
      />

      <Text style={styles.sectionTitle}>Top Rated Sitters</Text>
      <ScrollView horizontal style={styles.listContainer}>
        {topRatedSitters.map(sitter => (
          <SitterCard key={sitter.name} sitter={sitter} />
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Sitters in Your Area</Text>
      <ScrollView horizontal style={styles.listContainer}>
        {sittersInYourArea.map(sitter => (
          <SitterCard key={sitter.name} sitter={sitter} />
        ))}
      </ScrollView>

      <View style={styles.joinContainer}>
        <Text style={styles.joinButtonText}>Want to become a pet sitter? Join our gang!</Text>
        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.joinButtonText}>Join Now!</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <Link href="/MenuScreen"> <Ionicons name="home" size={24} color="black" /> </Link>
        <Link href="/PetSit"> <Ionicons name="paw" size={24} color="black" /> </Link>
        <Link href="/PetSittersList"> <Ionicons name="people" size={24} color="black" /> </Link>
        <Link href="/settings"> <Ionicons name="settings" size={24} color="black" /> </Link>
      </View>
    </View>
  );
}

const SitterCard = ({ sitter }) => (
  <Link
    href={{
      pathname: '/PersonDetails',
      params: { name: sitter.name, rating: sitter.rating, reviews: sitter.reviews, imageUrl: sitter.imageUrl },
    }}
    style={styles.sitterBox}
  >
    <Image source={{ uri: sitter.imageUrl }} style={styles.sitterImage} />
    <Text style={styles.sitterName}>{sitter.name}</Text>
    <Text style={styles.rating}>{sitter.rating}</Text>
    <Text style={styles.reviewCount}>{sitter.reviews} Reviews</Text>
  </Link>
);

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFF7F3',
    padding: 10,
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#f8f0e3',
    padding: 10,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    left: 10,
  },
  title: {
    fontSize: 2,
    fontWeight: 'bold',
    color: '#333',
  },
  searchInput: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
    width: '105%',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 3,
    alignSelf: 'flex-start',
  },
  listContainer: {
    flexDirection: 'row',
    marginVertical: 0.1,
  },
  sitterBox: {
    alignItems: 'center',
    marginHorizontal: 7,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 3,
    width: 100,
    height: 140,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  sitterImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 5,
  },
  sitterBox: {
    alignItems: 'center',
    marginHorizontal: 7,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 3,
    width: 100,
    height: 140,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  sitterImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 5,
  },
  sitterName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginTop: 5,
  },
  rating: {
    fontSize: 14,
    color: '#FFD700',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 2,
  },
  reviewCount: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
  },
  joinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },
  joinButton: {
    backgroundColor: '#ece0d1',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 8,
    marginLeft: 5,
  },
  joinButtonText: {
    fontSize: 18,
    color: '#333',
  },
  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    backgroundColor: '#f5f0e7',
  },
};