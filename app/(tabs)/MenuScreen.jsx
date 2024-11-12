import { Text, View, TouchableOpacity } from 'react-native';
import { Link, Stack } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const MenuScreen = () => {
    return (
      <View style={styles.screen}>
        
        <Text style={styles.title}>Pet-sit</Text>
        <Text style={styles.subtitle}>I want to:</Text>

        <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('PetSittersList')}>
          <Text style={styles.optionText}>find someone to take care of my pet</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('PetSit')}>
          <Text style={styles.optionText}>take care of someone's pet</Text>
        </TouchableOpacity>

        <View style={styles.bottomNav}>
          <Link href="/MenuScreen"> <Ionicons name="home" size={24} color="black" /> </Link>
          <Link href="/PetSit"> <Ionicons name="paw" size={24} color="black" /> </Link>
          <Link href="/PetSittersList"> <Ionicons name="people" size={24} color="black" /> </Link>
          <Link href="/settings"> <Ionicons name="settings" size={24} color="black" /> </Link>
        </View>
  
      </View>
    );
  }
  
const styles = {
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
    title: {
      fontSize: 35,
      fontWeight: 'bold',
      color: '#333',
  },
    subtitle: {
      fontSize: 20,
      color: '#666',
      textAlign: 'center',
      marginVertical: 40,
  },
    optionButton: {
      backgroundColor: '#ece0d1',
      paddingVertical: 35,
      paddingHorizontal: 40,
      borderRadius: 10,
      marginVertical: 10,
      width: '100%',
  },
    optionText: {
      fontSize: 25,
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

export default MenuScreen;
