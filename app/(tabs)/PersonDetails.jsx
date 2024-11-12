import React from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const PersonDetails = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Pet-sit</Text>
      <Link href="/PetSittersList" style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </Link>

      {/* Profile Image */}
      <Image
        source={{ uri: 'https://i.pinimg.com/736x/1e/7b/e9/1e7be9fc2783cc988ed9eda8065d9fe4.jpg' }} // Replace with actual image URL
        style={styles.profileImage}
      />
      
      {/* Person Info */}
      <Text style={styles.name}>Ana</Text>
      <View style={styles.tagsContainer}>
        <Text style={styles.tag}>Dog walking</Text>
        <Text style={styles.tag}>Pet daycare</Text>
        <Text style={styles.tag}>Drop-in visits</Text>
        <Text style={styles.tag}>Playing</Text>
      </View>
      
      {/* Bio */}
      <Text style={styles.bio}>
        Hello, my name is Ana. I'm a psychology student and pet lover. I can take care of your pet and send you photo updates regularly.
      </Text>
      
      {/* Send Request Button */}
      <TouchableOpacity style={styles.requestButton}>
        <Link href="/Confirmation" style={styles.requestButtonText}>Send Request</Link>
      </TouchableOpacity>
      
      {/* Navigation Tabs */}   
      <View style={styles.navigationTabs}>
        <Link href="/Home" style={styles.tabButton}>Home</Link>
        <Link href="/Dates" style={styles.tabButton}>Dates</Link>
        <Link href="/Sitters" style={styles.tabButton}>Sitters</Link>
        <Link href="/Settings" style={styles.tabButton}>Settings</Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 10, 
    backgroundColor: '#FFF7F3',
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
    padding: 10,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    left: 10,
  },
  header: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 20 
  },
  profileImage: { 
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    alignSelf: 'center' 
  },
  name: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginTop: 10 
  },
  tagsContainer: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'center', 
    marginVertical: 10 
  },
  tag: { 
    backgroundColor: '#EAEAEA', 
    padding: 5, 
    margin: 5, 
    borderRadius: 15 
  },
  bio: { 
    fontSize: 14, 
    textAlign: 'center', 
    marginVertical: 10 
  },
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginTop: 20 
  },
  requestButton: { 
    backgroundColor: '#000', 
    padding: 15, 
    borderRadius: 10, 
    alignItems: 'center', 
    marginVertical: 20 
  },
  requestButtonText: { 
    color: '#FFF', 
    fontWeight: 'bold' 
  },
  navigationTabs: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    borderTopWidth: 1, 
    borderTopColor: '#EAEAEA', 
    paddingTop: 10 
  },
  tabButton: { 
    fontSize: 16, 
    color: '#000',
    padding: 8 
  },
});

export default PersonDetails;
    