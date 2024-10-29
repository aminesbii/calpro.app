import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, Stack } from 'expo-router';

export default function Home() {
  const [permission, requestPermission] = useCameraPermissions();
  const isPermissionGranted = permission?.granted;

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: "Overview", headerShown: false }} />
      
      <Text style={styles.title}>QR Code Scanner</Text>
      
      <View style={{ gap: 20 }}>
        <Pressable onPress={requestPermission}>
          <Text style={styles.buttonStyle}>Request Permissions</Text>
        </Pressable>
        
        <Link href="/scanner" asChild>
          <Pressable disabled={!isPermissionGranted}>
            <Text
              style={[
                styles.buttonStyle,
                { opacity: !isPermissionGranted ? 0.5 : 1 },
              ]}
            >
              Scan Code
            </Text>
          </Pressable>
        </Link>
      </View>
      <CameraView 


style={StyleSheet.absoluteFillObject}
facing="back"
onBarcodeScanned={({ data }) => {
console.log("data", data);
}}
      /> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonStyle: {
    fontSize: 18,
    color: 'blue',
    padding: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 8,
  },
});
