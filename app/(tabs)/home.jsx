import React, { useState, useRef } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../../components/Card';
import { images } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import { Link, router } from 'expo-router';
import Minbutton from '../../components/Minbutton';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';


const { width } = Dimensions.get('window');

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  const navigation = useNavigation();
  const calorieData = [
    { id: '1', name: 'Calories', baseGoal: 3000, remaining: 2070, food: 200, exercise: 0 },
    { id: '2', name: 'Macros', baseGoal: 1800, remaining: 1500, food: 300, exercise: 0 },
    { id: '3', name: 'Carbs', baseGoal: 2200, remaining: 2000, food: 200, exercise: 0 },
  ];

  // useRef to persist onViewableItemsChanged function
  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

    const topImages = [
    { id: '1', bodypart: 'Upper Body', source: require('C:/Users/Amine/OneDrive/Desktop/CalPro/assets/images/imgb.jpeg') },
    { id: '2', bodypart: 'Lower Body', source: require('C:/Users/Amine/OneDrive/Desktop/CalPro/assets/images/imgc.jpeg') },
    { id: '3', bodypart: 'Cardio',source: require('C:/Users/Amine/OneDrive/Desktop/CalPro/assets/images/imgd.jpeg') },
  ];



  const renderTopItem = ({ item }) => (
    <TouchableOpacity style={styles.topCard}>
      <Image source={item.source} style={styles.topImage} resizeMode="cover" />
      <Text style={styles.topCardText}>{item.bodypart}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={() => router.push('/profile')}>
           <Text style={styles.welcomeText}>Welcome Back</Text>
            <Text style={styles.userName}>Amine Sbii</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity><Image source={images.logoSmall} style={styles.logo} resizeMode="contain"/></TouchableOpacity>
      </View>
      <ScrollView className="h-full ">
      <Text style={styles.progressText}>Today's progress</Text>

      <FlatList
        data={calorieData}
        horizontal
        pagingEnabled
        snapToInterval={width * 0.8 + 24} // Adjust snap interval to include gap
        snapToAlignment="center"
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={[styles.cardContainer, { marginRight: 20 }]}>
            <Card
              name={item.name}
              baseGoal={item.baseGoal}
              food={item.food}
              exercise={item.exercise}
              remaining={item.remaining}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      />

      {/* Pagination dots */}
      <View style={styles.pagination}>
        {calorieData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: currentIndex === index ? '#e50914' : '#333333' },
            ]}
          />
        ))}
      </View>
           

      <View className="mt-6 mb-4">
      <Text style={styles.progressText}>Training Plans</Text>
      <FlatList
        data={topImages}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderTopItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.topList}
      />
    </View>

    <Text style={styles.progressText}>Discover</Text>
      <View style={styles.boardcont} className=" w-full flex flex-row items-center">
        <View>

          <Minbutton 
              className="items-center" 
              title="Calculator"
              handlePress={() => router.push('/calculator')}
              Icon={<MaterialCommunityIcons name="calculator-variant-outline" size={28} color="white" />}
          />

          <Minbutton 
              className="items-center" 
              title="Workout"
              handlePress={() => router.push('/workout')}
              Icon={<MaterialCommunityIcons name="dumbbell" size={28} color="white" />}
            />

        </View>
        <View>
 
           <Minbutton 
              className="items-center" 
              title="Timer"
              handlePress={() => router.push('/timer')}
              Icon={<MaterialCommunityIcons name="timer-outline" size={28} color="white" />}
            />

         <Minbutton 
              className="items-center" 
              title="Sleep"
              handlePress={() => router.push('/sleep')}
              Icon={<MaterialCommunityIcons name="bed-outline" size={28} color="white" />}
            />
        </View>
      </View> 
            
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 9,
    paddingLeft: 16,
    paddingRight: 16,
  },
  welcomeText: {
    color: '#aaa',
    fontSize: 14,
  },
  userName: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  logo: {
    width: 36,
    height: 40,
  },
  progressText: {
    color: 'white',
    fontSize: 18,
    margin:15
  },
  cardContainer: {
    width: width * 0.8,
    alignItems: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 20,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 20,
    marginBottom: 10,
  },
  planText: {
    fontSize: 18,
    fontWeight: '300',
    color: 'white',
    paddingLeft: 20,
    marginBottom: 10,
  },
  topList: {
    paddingLeft: 20,
  },
  topCard: {
    width: width * 0.7,
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  topImage: {
    width: '100%',
    height: 200,
  },
  topCardText: {
    position: 'absolute',
    top: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: '#F7BB0E',
    width: 'auto',
    height: 40,
    padding: 8,
    borderTopRightRadius: 10, 
    borderBottomRightRadius: 10, 
    shadowColor: 'orange', // Shadow color (black)
    shadowOffset: { width: 2, height: 2 }, // Offset for shadow
    shadowOpacity: 10, // Opacity of shadow
    shadowRadius: 5, // Blur radius for shadow
    elevation: 5, // Adds shadow on Android
  },
  boardcont:{
    marginBottom: 25,
    marginLeft: 20,
    marginRight: 20,
    marginTop: -8,
  },
  todayText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 20,
    marginTop: 20,
  },
  bottomList: {
    paddingLeft: 20,
    paddingBottom: 20,
  },
  bottomCard: {
    width: width * 0.4,
    marginRight: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  bottomImage: {
    width: '100%',
    height: 120,
  },
  bottomCardText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  durationText: {
    position: 'absolute',
    top: 10,
    left: 10,
    fontSize: 12,
    fontWeight: '300',
    color: '#fff',
  },
});


export default Home;
