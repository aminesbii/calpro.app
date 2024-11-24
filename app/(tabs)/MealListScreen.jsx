import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Alert } from 'react-native';

const MealListScreen = ({ route, navigation }) => {
  const { category } = route.params;
  const [meals, setMeals] = useState([]);

  const deleteMeal = (id) => {
    Alert.alert('Confirm Delete', 'Are you sure?', [
      { text: 'Cancel' },
      { text: 'Yes', onPress: () => setMeals(meals.filter((meal) => meal.id !== id)) },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category} Meals</Text>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.mealCard}>
            <Text>{item.name}</Text>
            <Button title="Edit" onPress={() => navigation.navigate('AddMeal', { meal: item })} />
            <Button title="Delete" onPress={() => deleteMeal(item.id)} />
          </View>
        )}
      />
      <Button title="Add Meal" onPress={() => navigation.navigate('AddMeal', { category })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  mealCard: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
});
