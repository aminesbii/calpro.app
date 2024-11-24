import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Redirect, router } from 'expo-router';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "Amine Sbii",
    country: "Tunisia",
    goal: "lose",
    totalTime: "2h 30m",
    caloriesBurned: 7200,
    tasksDone: 1,
  });

  useEffect(() => { }, []);

  return (
    <SafeAreaView style={styles.container} >
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileSection} className=" flex flex-row">
      <Image source={images.profile} style={styles.profileImage}/>
      <View className=" mt-7">
        <Text className=" font-psemibold text-white text-xl">{userData.name}</Text>
        <Text style={styles.country}>{userData.country}</Text>
        <Text style={styles.country}>current goal is to {userData.goal} weight</Text>
        </View> 
      </View>


      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Ionicons name="time-outline" size={25} color="yellow" />
          <Text style={styles.statValue}>{userData.totalTime}</Text>
          <Text style={styles.statLabel}>Total time</Text>
        </View>
        <View style={styles.statItem}>
          <FontAwesome5 name="fire" size={24} color="#ff4500" />
          <Text style={styles.statValue}>{userData.caloriesBurned} cal</Text>
          <Text style={styles.statLabel}>Burned</Text>
        </View>
        <View style={styles.statItem}>
          <Ionicons name="checkmark-circle" size={25} color="#32cd32" />
          <Text style={styles.statValue}>{userData.tasksDone}</Text>
          <Text style={styles.statLabel}>Goal Done</Text>
        </View>
      </View>


      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="person-outline" size={25} color="white" />
          <Text style={styles.menuText}>Personal</Text>
          <Ionicons name="chevron-forward" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="notifications-outline" size={25} color="white" />
          <Text style={styles.menuText}>Notification</Text>
          <Ionicons name="chevron-forward" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="settings-outline" size={25} color="white" />
          <Text style={styles.menuText}>General</Text>
          <Ionicons name="chevron-forward" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="help-circle-outline" size={25} color="white" />
          <Text style={styles.menuText}>Help</Text>
          <Ionicons name="chevron-forward" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/sign-up')}>
        <MaterialIcons name="logout" size={25} color="white" />
          <Text style={styles.menuText}>Log Out</Text>
          <Ionicons name="chevron-forward" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'black',
    padding: 8,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 10,
    gap: 15
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginTop: 30,
    borderColor: '#1c1c1e',
    borderWidth: 3 ,

  },
  country: {
    fontSize: 15,
    color: '#888',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    padding:15
    
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
  },
  statLabel: {
    fontSize: 12,
    color: 'white',
  },
  menuContainer: {
    borderRadius: 10,   
    padding: 8,
    backgroundColor: '#1c1c1e',
    paddingHorizontal: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,

  },
  menuText: {
    fontSize: 16,
    color: 'white',
    flex: 1,
    marginLeft: 10,
  },
});

export default Profile;
