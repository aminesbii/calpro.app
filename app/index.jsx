import { StatusBar } from 'expo-status-bar';
import {ScrollView, Text, View, Image } from 'react-native';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode='contain'
          />

          <Image 
            source={images.cards}
            className="max-w--[380px] w-full h-[300px]"
            resizeMode='contain'
          />

          <View className="relative mt-5">
             <Text className="text-3xl text-white font-boldd text-center">Achieve Peak Performance with{' '} 
             <Text className="text-secondary-100">CalPro</Text>
             </Text>
             <Image 
               source={images.path}
               className ="w-[136px] h-[15px] absolute -bottom-2 -right-8"
               resizeMode='contain'
               />  
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">Where strength meets strategy, take control of your fitness journey with CalPro.</Text>

          <CustomButton
             title="Continue with email"
             handlePress={() => router.push('/sign-in')}
             containerStyles="w-full mt-7"
          />

           <Link href="/home" className="text-lg  mt-7 font-psemibold text-secondary" >Home</Link>
        </View>
      </ScrollView>

      <StatusBar backgroundColor='#161622' style='light'/> 
    </SafeAreaView>
  );  
}


