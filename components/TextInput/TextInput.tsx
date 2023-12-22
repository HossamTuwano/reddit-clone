import { TextInput, View } from "react-native";
import React from "react";
import { CustomInputProps } from "../../types";
export default function CustomTextInput({ placeholder }: CustomInputProps) {
  return (
    <View className='w-full rounded-xl overflow-hidden'>
      <TextInput placeholder={placeholder} className='bg-gray-300 p-3' />
    </View>
  );
}
