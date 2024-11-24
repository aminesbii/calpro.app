import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const IndexsLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="calculator"
          options={{
            headerShown: true,
            headerTitle: "Macros Calculator",
            headerStyle: { backgroundColor:"#111111" },
            headerTintColor: 'white', 
            headerTitleStyle: { fontSize: 18},
            headerTitleAlign: 'center', 
          }}
        />

        <Stack.Screen
          name="sleep"
          options={{
            headerShown: true,
            headerTitle: "sleeping routin",
            headerStyle: { backgroundColor:"#111111" },
            headerTintColor: 'white', 
            headerTitleStyle: {  fontSize: 18},
            headerTitleAlign: 'center', 
          }}
        />
 
        <Stack.Screen
          name="timer"
          options={{
            headerShown: true,
            headerTitle: "Timer",
            headerStyle: { backgroundColor:"#111111" },
            headerTintColor: 'white', 
            headerTitleStyle: {  fontSize: 18,},
            headerTitleAlign: 'center', 
          }}
        />

        <Stack.Screen
          name="workout"
          options={{
            headerShown: true,
            headerTitle: "Workout",
            headerStyle: { backgroundColor:"#111111" },
            headerTintColor: 'white', 
            headerTitleStyle: { fontSize: 18,},
            headerTitleAlign: 'center', 
          }}
        />
      </Stack>
    </>
  );
};

export default IndexsLayout;
