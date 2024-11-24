import { StyleSheet,Text, TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
const FoodListItem = ({ item }) => {
    return(
      <TouchableOpacity >
      <View className="bg-gray-400 rounded-xl " style={styles.container}>      
      <View style={{ flex: 1, gap: 5}}>
        <Text className=" text-xl text-white font-bold">{item.label}</Text>
        <Text className="  text-gray-100 font-bold">{item.cal} cal , {item.brand}</Text>
        </View>
        <TouchableOpacity>
          <AntDesign name="pluscircleo" size={25} color="white" />
        </TouchableOpacity>
        </View>
      </TouchableOpacity>
    )
  }
export default FoodListItem;


const styles = StyleSheet.create({
  container: {
  padding: 11 ,
  gap: 10,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  }
  })
  
