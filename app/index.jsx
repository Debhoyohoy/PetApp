import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';

export default function App() {
    return (
      <View style={styles.screen}>
        <Image
          source={{ uri: 'https://i.pinimg.com/564x/93/39/6f/93396f72b1b9477e974065431365d601.jpg' }}
          style={styles.profileImage}
        />
        <Text style={styles.title}>Pet-sit</Text>
        <Text style={styles.subtitle}>Over 1000 certified pet sitters are available for your beloved ones!</Text>
        <TouchableOpacity style={styles.button}>
          <Link href="MenuScreen">Let's begin!</Link>
        </TouchableOpacity>
      </View> 
    );
  }
  
  const styles = {
    screen: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
      paddingVertical: 40,
    },
    profileImage: {
      width: 150,
      height: 150,
      borderRadius: 50,
      marginBottom: 20,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#333',
    },
    subtitle: {
      fontSize: 20,
      color: '#666',
      textAlign: 'center',
      marginVertical: 10,
    },
    button: {
      backgroundColor: '#333',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      marginTop: 20,
      fontSize: 25,
    },
    buttonText: {
      color: '#fff',
      fontSize: 25,
    },
  };
