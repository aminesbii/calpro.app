import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import { Image } from 'react-native'

const home = () => {
  return (
    <SafeAreaView className=" h-full bg-black">
         <View className="flex my-6 px-4 space-y-6">
           <View className=" flex justify-between items-start flex-row mb-6 " >
               <View>
                  <Text className=" font-pmedium text-sm text-gray-100">Welcom Back</Text>
                  <Text className=" font-psemibold text-2xl text-white">Amine Sbii</Text>
              </View>

              <View className="mt-1.5 ">
                <Image 
                   source={images.logoSmall}
                   className="w-9 h-10"
                   resizeMode="contain"
                />
             </View>
            </View>
          </View>
    </SafeAreaView>
  )
}

export default home

const styles = StyleSheet.create({})