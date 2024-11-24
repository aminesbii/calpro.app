import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import React from 'react';

const Minbutton = ({ title, handlePress, containerStyles, textStyles, isLoading, Icon }) => {
  return (
    <TouchableOpacity 
      onPress={handlePress}
      activeOpacity={0.7}
      className={`${containerStyles} ${isLoading ? 'opacity-50': ''}`}
      disabled={isLoading}
    >
      <View className="p-1 m-1 items-center justify-center"  style={styles.board}>
        {Icon && <View className="m-2 "  style={styles.icon}>{Icon}</View>}
        <Text className={`text-white font-pregular text-lg ${textStyles}`}> {title} </Text>

      </View>
    </TouchableOpacity>
  );
};

export default Minbutton;

const styles = StyleSheet.create({
  board: {
    borderRadius: 10,
    height: 110,
    width: 167,
    backgroundColor: "#1c1c1e" ,
    // shadowColor: "#191919", 
  },
  icon:{
    alignItems: 'center',
    padding:10,
    borderRadius: 30,
    width: 50,
    height: 50,
    backgroundColor:'red',
  }
})