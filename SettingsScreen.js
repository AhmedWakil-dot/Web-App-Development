import React from 'react';
import { View, Text, Switch, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../constants/Colors';

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <Text style={styles.item}>Edit Profile</Text>
        <Text style={styles.item}>Change Password</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.row}>
          <Text style={styles.item}>Class Reminders</Text>
          <Switch value={true} trackColor={{ true: Colors.primaryBlue }} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.lightBackground },
  header: { fontSize: 28, fontWeight: 'bold', padding: 20, color: Colors.darkIndigo },
  section: { backgroundColor: Colors.white, marginBottom: 10, paddingHorizontal: 20 },
  sectionTitle: { fontSize: 14, color: Colors.textSecondary, marginVertical: 10, textTransform: 'uppercase' },
  item: { fontSize: 16, paddingVertical: 15, borderBottomWidth: 0.5, borderBottomColor: Colors.lightBackground },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }
});
