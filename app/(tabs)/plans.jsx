import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { StatusBar } from 'expo-status-bar';

const Plans = () => {
  const [mealName, setMealName] = useState('');
  const [mealList, setMealList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Breakfast');
  const [editingMeal, setEditingMeal] = useState(null); // To handle editing state

  const categories = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];

  const addMeal = () => {
    if (mealName.trim()) {
      if (editingMeal) {
        // Update meal if editing
        setMealList(mealList.map(meal => 
          meal.name === editingMeal.name ? { ...meal, name: mealName } : meal
        ));
        setEditingMeal(null);
      } else {
        // Add new meal
        setMealList([...mealList, { category: selectedCategory, name: mealName }]);
      }
      setMealName('');
    }
  };

  const removeMeal = (mealToRemove) => {
    setMealList(mealList.filter(meal => meal.name !== mealToRemove.name));
  };

  const startEditing = (mealToEdit) => {
    setMealName(mealToEdit.name);
    setEditingMeal(mealToEdit);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            {/* Meal Categories */}
            <FlatList
              data={categories}
              horizontal
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.categoryButton,
                    selectedCategory === item && styles.selectedCategory,
                  ]}
                  onPress={() => setSelectedCategory(item)}
                >
                  <Text style={styles.categoryText}>{item}</Text>
                </TouchableOpacity>
              )}
            />

            {/* Add or Edit Meal Input */}
            <View style={styles.inputContainer}>

              <TextInput
                style={styles.input}
                placeholder={`Add ${selectedCategory} Meal`}
                placeholderTextColor="gray"
                value={mealName}
                onChangeText={setMealName}
              />
              <TouchableOpacity style={styles.addButton} onPress={addMeal}>
                <Text style={styles.addButtonText}>{editingMeal ? 'Update' : 'Add'}</Text>
              </TouchableOpacity>

            </View>
          </>
        }
        data={mealList.filter((meal) => meal.category === selectedCategory)}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={({ item }) => (
        <View style={styles.list}>
          <View style={styles.mealItem}>
            <Text style={styles.mealText} className=" text-xl text-white font-bold">{item.name}</Text>
            <View style={styles.actions}>
              <TouchableOpacity onPress={() => startEditing(item)} style={styles.actionButton}>
              <Feather name="edit" size={20} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => removeMeal(item)} style={styles.actionButton}>
              <AntDesign name="delete" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          </View>
        )}
      />
       <StatusBar style='light' backgroundColor='black' />
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    marginTop: 28,
    flex: 1,
    padding: 20,
  },
  categoryButton: {
    marginRight: 10,
    padding: 10,
    backgroundColor: '#1c1c1e',
    borderRadius: 10,
  },
  selectedCategory: {
    backgroundColor: 'red',
  },
  categoryText: {
    color: '#fff',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderColor: '#1c1c1e',
    borderWidth: 2,
    borderRightWidth:0,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    paddingHorizontal: 10,
    height: 65,
    color: '#fff',
  },
  addButton: {
    backgroundColor: 'red',
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,

  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  list:{
    marginTop: 8,  
    padding: 8,
    borderRadius:15,
    backgroundColor: '#1c1c1e',
    paddingHorizontal: 12,
  },
  mealItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
  },
  mealText: {
    fontSize: 16,
    color: 'white',
    flex: 1,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    marginLeft: 20,
    padding: 2,

  },
  actionText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Plans;
