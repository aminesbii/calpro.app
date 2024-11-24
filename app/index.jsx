import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link, Redirect, router } from 'expo-router';
import CustomButton from '../components/CustomButton';
import { useGlobalContext } from '../context/GlobalProvider';
import SplashScreen from './SplashScreen'; // Import the splash screen
import { ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const { isLoading, isLoggedIn } = useGlobalContext();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000); // 3-second splash screen
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (showSplash) return <SplashScreen />; // Show splash screen if true

  if (!isLoading && isLoggedIn) return <Redirect href="/home" />; // Redirect if logged in

  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('C:/Users/Amine/OneDrive/Desktop/CalPro/assets/images/imga.jpeg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.mainText}>ACHIEVE YOUR PEAK FORM</Text>
        <Text style={styles.subText}>BUILD YOUR FITNESS START TRACKER ACHIEVE BODY GOALS</Text>

        <CustomButton
          title="Create account now"
          handlePress={() => router.push('/sign-up')}
          containerStyles="w-full mt-4"
        />
        <Link href="/home" style={styles.linkText}>
          click me if you have an account
        </Link>
      </View>
      <StatusBar style='light' />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end', // Aligns content at the bottom
    paddingHorizontal: 20,
    paddingBottom: 40, // Adds some padding at the bottom to prevent content from being too close to the edge
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark overlay for better text contrast
  },
  mainText: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
  },
  subText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '300',
    marginTop: 6,
    marginBottom: 10,
  },
  linkText: {
    fontSize: 14,
    color: '#e50914',
    marginTop: 20,
  },
});
