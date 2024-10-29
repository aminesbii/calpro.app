import { StyleSheet,Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
const FoodListItem = ({ item }) => {
    return(
      <View className="bg-gray-300 border-1 border-gray-200 rounded-xl " style={styles.container}>
      <View style={{ flex: 1, gap: 5}}>
        <Text className=" text-xl text-white font-bold">{item.label}</Text>
        <Text className="  text-gray-100 font-bold">{item.cal} cal , {item.brand}</Text>
        </View>
        <AntDesign name="pluscircleo" size={24} color="white" />
      </View>
    )
  }
export default FoodListItem;


const styles = StyleSheet.create({
  container: {
  padding: 11 ,
  gap: 4 ,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  }
  })
  
