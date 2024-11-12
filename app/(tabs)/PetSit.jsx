import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const PetSitApp = () => {
  const [filter, setFilter] = useState('All');

  const pets = [
    { id: 1, name: 'Hubert', type: 'Cat', date: '04/09/2023', imageUrl: 'https://i.pinimg.com/736x/ad/f3/25/adf32528f530e1ee61492a97dc597220.jpg' },
    { id: 2, name: 'Buddy', type: 'Dog', date: '12/08/2023', imageUrl: 'https://i.pinimg.com/736x/b4/55/1f/b4551f8d549b7e6f7f63d789fa06fb3b.jpg' },
    { id: 3, name: 'Neko', type: 'Cat', date: '05/07/2023', imageUrl: 'https://i.pinimg.com/236x/e1/79/a2/e179a2e27ef9bebf4d6b3b39094e8b60.jpg' },
    { id: 4, name: 'Doge', type: 'Dog', date: '03/09/2023', imageUrl: 'https://i.pinimg.com/564x/ea/8c/0a/ea8c0afb4a12f088b49dcd2c4ca352f5.jpg' },
    { id: 5, name: 'Milan', type: 'Cat', date: '21/08/2023', imageUrl: 'https://i.pinimg.com/564x/17/00/6d/17006d72bdfdee9a77866d46a427de36.jpg' },
    { id: 6, name: 'Toffee', type: 'Dog', date: '15/09/2023', imageUrl: 'https://i.pinimg.com/564x/a1/bf/7f/a1bf7f9b34ce242a9f1c9cb1e25b39aa.jpg' },
  ];

  const filteredPets = pets.filter((pet) => filter === 'All' || pet.type === filter);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href="/MenuScreen" style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color="black" />
        </Link>
        <Text style={styles.title}>Pet-sit</Text>
      </View>

      <TextInput style={styles.searchInput} placeholder="Enter your location" />

      <View style={styles.filterButtons}>
        {['All', 'Cat', 'Dog', 'Other'].map((type) => (
          <TouchableOpacity
            key={type}
            style={[styles.filterButton, filter === type && styles.activeFilterButton]}
            onPress={() => setFilter(type)}
          >
            <Text style={filter === type ? styles.activeFilterText : styles.filterText}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.petList}>
        {filteredPets.map((pet) => (
          <View key={pet.id} style={styles.petCard}>
            <Image source={{ uri: pet.imageUrl }} style={styles.petImage} />
            <View style={styles.petInfo}>
              <Text style={styles.petName}>{pet.name}</Text>
              <Text style={styles.petDetails}>{pet.type}</Text>
              <Text style={styles.petDate}>Since {pet.date}</Text>
            </View>
            <Link
              href={`/PetDetails?name=${pet.name}&imageUrl=${pet.imageUrl}&type=${pet.type}&description=Hi, I'm ${pet.name}!`}
              asChild
            >
              <TouchableOpacity style={styles.bookButton}>
                <Text style={styles.bookButtonText}>Details</Text>
              </TouchableOpacity>
            </Link>
          </View>
        ))}
      </ScrollView>

      <View style={styles.bottomNav}>
          <Link href="/MenuScreen"> <Ionicons name="home" size={24} color="black" /> </Link>
          <Link href="/PetSit"> <Ionicons name="paw" size={24} color="black" /> </Link>
          <Link href="/PetSittersList"> <Ionicons name="people" size={24} color="black" /> </Link>
          <Link href="/settings"> <Ionicons name="settings" size={24} color="black" /> </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F3',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#555',
  },
  searchInput: {
    borderWidth: 1.5,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#D8A1A8',
    borderRadius: 8,
  },
  activeFilterButton: {
    backgroundColor: '#A28497',
  },
  filterText: {
    fontSize: 14,
    color: '#fff',
  },
  activeFilterText: {
    fontSize: 14,
    color: '#333',
  },
  petList: {
    marginTop: 8,
  },
  petCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    marginBottom: 8,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  petImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  petInfo: {
    flex: 1,
  },
  petName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  petDetails: {
    fontSize: 14,
    color: '#777',
    marginTop: 2,
  },
  petDate: {
    fontSize: 12,
    color: '#AAA',
    marginTop: 4,
  },
  bookButton: {
    backgroundColor: '#A28497',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  bookButtonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#f5f0e7',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
});

export default PetSitApp;
