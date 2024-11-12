import React from 'react';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Confirmation = () => {
  return (
    <div style={styles.container}>
      <Link href="/PetSittersList" style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </Link>
      <h1 style={styles.title}>Pet-sit</h1>
      <p style={styles.message}>Your request for pet-sitting has been sent.</p>
      <p style={styles.message}>The owner will contact you shortly with further details.</p>
      <Link href="/PetSittersList" style={styles.beginButton}>
        Let’s Begin!
      </Link>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#f5e6dc',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    height: '100vh',
  },
  backButton: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    color: '#333',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#444',
    marginBottom: '15px',
  },
  message: {
    fontSize: '18px',
    marginBottom: '10px',
    lineHeight: '1.5',
    color: '#555',
  },
  beginButton: {
    marginTop: '20px',
    padding: '12px 20px',
    backgroundColor: '#333',
    color: '#fff',
    fontSize: '18px',
    fontWeight: 'bold',
    borderRadius: '8px',
    textDecoration: 'none',
    textAlign: 'center',
    cursor: 'pointer',
    display: 'inline-block',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.2s ease',
  },
};

export default Confirmation;
