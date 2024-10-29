import { StyleSheet, Text, View, FlatList } from 'react-native';
import FoodListItem from '../../components/FoodListItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchInput from '../../components/SearchInput';

const foodItems = [
  { label: "Pizza", cal: 75, brand: "Dominos" },
  { label: "Pizza", cal: 75, brand: "Dominos" },
  { label: "Coffee", cal: 100, brand: "Americano" },
  { label: "Coffee", cal: 100, brand: "Americano" },
  { label: "Coffee", cal: 100, brand: "Americano" },
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
        contentContainerStyle={{ padding: 10, gap: 5 }}
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
