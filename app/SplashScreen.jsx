import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper'; // Add this spinner

export default function SplashScreen() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        CalPro
      </Text>
      <ActivityIndicator size="large" color="white" style={styles.loader} />
      <Text style={styles.load}>please wait...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e50914',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 50, 
  },
  loader: {
    position: 'relative',
    bottom: 20, 
  },
  load: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white', 
  }
});
