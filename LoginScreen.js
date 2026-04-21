
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

export default function LoginScreen({ navigation }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = () => {
    // Simple logic check
    if (password !== 'salford123') {
      setError(true);
    } else {
      setError(false);
      navigation.navigate('Dashboard');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>University of Salford</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="Student Email" 
        placeholderTextColor={Colors.textSecondary}
      />
      
      <TextInput 
        style={[styles.input, error && styles.inputError]} 
        placeholder="Password" 
        secureTextEntry
        onChangeText={(text) => {
          setPassword(text);
          if(error) setError(false);
        }}
      />

      {error && <Text style={styles.errorText}>Incorrect password. Please try again.</Text>}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: '800', color: Colors.darkIndigo, marginBottom: 40, textAlign: 'center' },
  input: { borderBottomWidth: 1, borderBottomColor: Colors.textSecondary, padding: 10, marginBottom: 20, fontSize: 16 },
  inputError: { borderBottomColor: Colors.errorRed },
  errorText: { color: Colors.errorRed, fontSize: 12, marginBottom: 20 },
  button: { backgroundColor: Colors.primaryBlue, padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: Colors.white, fontWeight: 'bold', fontSize: 16 }
});
