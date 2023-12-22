import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CustomButton, CustomTextInput } from "../components";

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className='flex-1 h-full w-full'>
      <ScrollView
        horizontal
        className='flex-1 h-full w-full'
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <View className='w-screen  p-3 items-center  space-y-6'>
          <View className='flex-row justify-between w-full'>
            <Pressable onPress={() => navigation.goBack()}>
              <AntDesign name='arrowleft' size={24} color='gray' />
            </Pressable>
            <View className='h-9 w-9'>
              <Image
                source={require("../assets/reddt.png")}
                resizeMode='cover'
                className='w-full h-full'
              />
            </View>
            <Pressable onPress={() => {}}>
              <Text className='text-gray-400 font-bold'>Sign up</Text>
            </Pressable>
          </View>

          <View>
            <Text className='text-xl font-bold'>Login in to Reddit</Text>
          </View>

          <View className='w-full '>
            <CustomButton
              uri={require("../assets/google.png")}
              title='Continue with google'
            />
          </View>

          <View className='flex-row w-10 items-center space-x-4 w-full  '>
            <View className='border-t-2 flex-1 border-gray-400'></View>
            <Text className='uppercase font-bold text-gray-400'>or</Text>
            <View className='border-t-2 flex-1 border-gray-400'></View>
          </View>

          <View className='w-full space-y-3 '>
            <View>
              <CustomTextInput placeholder='Email or Username' />
            </View>
            <View>
              <CustomTextInput placeholder='Password' />
            </View>
          </View>

          <View className='w-full flex-row justify-start'>
            <Text>Forgot password?</Text>
          </View>

          <View className='flex-1 justify-end w-full space-y-3'>
            <View className='flex-row justify-center mb-6'>
              <Text className='text-justify text-xs w-80'>
                by continuing, you agree to our User Agreement and
                acknowledgement that you under stand the privacy policy
              </Text>
            </View>

            <View>
              <CustomButton uri={{}} title='Continue' />
            </View>
          </View>
        </View>

        <View className='w-screen p-3'>
          <Text>sign up screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
