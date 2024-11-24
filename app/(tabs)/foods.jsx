import { StyleSheet, Text, View, FlatList } from 'react-native';
import FoodListItem from '../../components/FoodListItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchInput from '../../components/SearchInput';
import { StatusBar } from 'expo-status-bar';

const foodItems = [
  { label: "Pizza", cal: 75, brand: "Dominos" },
  { label: "Bergur", cal: 75, brand: "Dominos" },
  { label: "Coffee", cal: 100, brand: "Americano" },
  { label: "Green Tea", cal: 100, brand: "Americano" },
  { label: "Ice Coffee", cal: 100, brand: "Benyder" },
  { label: "Coffee", cal: 100, brand: "Americano" },
  { label: "Coffee", cal: 100, brand: "Americano" },
  { label: "Coffee", cal: 100, brand: "Americano" },
  { label: "Coffee", cal: 100, brand: "Americano" },
  { label: "Coffee", cal: 100, brand: "Americano" },
];

export default function Foods() {
  return (
    <SafeAreaView style={styled.container}>
      <View style={styled.search}>
        <SearchInput />
      </View>
      <FlatList
        data={foodItems}
        renderItem={({ item }) => <FoodListItem item={item} />}
        keyExtractor={(item, index) => index.toString()} // Ensure each item has a unique key
        contentContainerStyle={{ padding: 13, gap: 7 }}
      />
    </SafeAreaView>
  );
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  search: {
    padding: 10,
  },
});

