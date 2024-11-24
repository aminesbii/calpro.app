import { View, Text, TextInput, TouchableOpacity, Button} from 'react-native' 
import React, { useState } from 'react'
import Feather from '@expo/vector-icons/Feather';

const SearchInput = ( { title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
const [search , setSearch] = useState('');
const preformSearch = () =>{
  console.warn("Searching for:", search);   
  setSearch('');
}


  return (
      <View className="border-2 border-gray-300 w-full h-16 px-4 bg-black rounded-3xl focus:border-secondary-100 items-center flex-row space-x-4">
        <TextInput
          className="flex-1 text-base text-white font-pregular mt-0.5"
          value={search}
          placeholderTextColor= '#646464'
          placeholder="searh for any food"
          onChangeText={setSearch}
        />
        {search && <Button title='search' onPress={preformSearch}/>}

        <TouchableOpacity>
         <Feather name="search" size={24} color="#e50914" />
        </TouchableOpacity>
      </View>
  )
}

export default SearchInput
