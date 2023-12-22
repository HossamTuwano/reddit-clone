import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { CustomButtonProps } from "../../types";

export default function CustomButton({ uri, title }: CustomButtonProps) {
  return (
    <View className='w-full rounded-full  bg-gray-300  p-3'>
      <Pressable className='flex-row'>
        <View className='h-5 w-5'>
          <Image source={uri} resizeMode='cover' className='w-full h-full' />
        </View>
        <View className='flex-1 flex-row justify-center '>
          <Text className='font-bold'>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
