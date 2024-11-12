import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const SettingsScreen = () => {
  const [accountInfo, setAccountInfo] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
  });

  const handleInputChange = (field, value) => {
    setAccountInfo((prevInfo) => ({ ...prevInfo, [field]: value }));
  };

  const handleSave = () => {
    console.log('Account Information Updated:', accountInfo);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header title="Settings" />

      <Text style={styles.sectionTitle}>Account Information</Text>
      {Object.keys(accountInfo).map((field) => (
        <InputField
          key={field}
          placeholder={capitalize(field)}
          value={accountInfo[field]}
          onChangeText={(value) => handleInputChange(field, value)}
          keyboardType={field === 'email' ? 'email-address' : field === 'phone' ? 'phone-pad' : 'default'}
        />
      ))}

      <SaveButton onPress={handleSave} />

      <BottomNav
        navItems={[
          { href: '/MenuScreen', icon: 'home' },
          { href: '/PetSit', icon: 'paw' },
          { href: '/PetSittersList', icon: 'people' },
          { href: '/settings', icon: 'settings' },
        ]}
      />
    </ScrollView>
  );
};

const Header = ({ title }) => (
  <View style={styles.header}>
    <Link href="/MenuScreen" style={styles.backButton}>
      <Ionicons name="arrow-back" size={22} color="black" />
    </Link>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const InputField = ({ placeholder, value, onChangeText, keyboardType }) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    keyboardType={keyboardType}
  />
);

const SaveButton = ({ onPress }) => (
  <TouchableOpacity style={styles.saveButton} onPress={onPress}>
    <Text style={styles.saveButtonText}>Save Changes</Text>
  </TouchableOpacity>
);

const BottomNav = ({ navItems }) => (
  <View style={styles.bottomNav}>
    {navItems.map((item, index) => (
      <Link key={index} href={item.href}>
        <Ionicons name={item.icon} size={24} color="black" />
      </Link>
    ))}
  </View>
);

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F3',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 12,
  },
  saveButton: {
    backgroundColor: '#A28497',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
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

export default SettingsScreen;
