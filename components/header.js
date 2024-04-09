import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={[styles.title, { textAlign: 'center',color: 'white' }]}>My ToDo List</Text>
      <Text style={{textAlign: 'center', color: 'white',  }}>This application was made by Srivarshini</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 75,
    paddingTop: 5, // Adjust this value to shift the content vertically
    backgroundColor: '#E572BA',
  },
  title: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
  }
});