import { Image, View, Text, ScrollView , Alert} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link , router} from 'expo-router';
import { signIn } from '../../lib/appwrite';


const SignIn = () => {
      const [form, setFrom] = useState({
        email: '',
        password: ''
      })
      const [isSubmitting, setisSubmitting] = useState(false)
  const submit = async () => {
  if (!form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all the fields');
      return;
  }
  setisSubmitting(true);

  try {
      await signIn(form.email, form.password);
      router.replace('/home');
  } catch (error) {
      Alert.alert('Error', error.message);
  } finally {
    setisSubmitting(false);
  }
};


  return (
     <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        < View className="w-full justify-center min-h-[80vh] px-4 my-6">
          <Image source={images.logo}
          resizeMode='contain'
          className="w-[115px] h-[53px] "/>
          <Text className="text-xl text-white text-semibold mt-7 font-psemibold">Log In to CalPro</Text>

          <FormField 
              title="Email"
              value={form.email}
              handleChangeText={(e) => setFrom({ ...form, email: e})}
              otherStyles="mt-7"
              keyboardType="email-address"
          />
 
          <FormField 
              title="Password"
              value={form.password}
              handleChangeText={(e) => setFrom({ ...form, password: e})}
              otherStyles="mt-7"
          />

          <CustomButton
              title="Sign In"
              handlePress={submit}
              containerStyles="mt-7"
              isLoading = {isSubmitting}
          /> 

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
               Don't have account?
            </Text>
            <Link href="/sign-up" className='text-lg font-psemibold text-secondary'>Sign Up</Link>
          </View>
        </View>
      </ScrollView>
     </SafeAreaView>
  )
}

export default SignIn