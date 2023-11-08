import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

export default function LoginScreen() {
  return (
    <SafeAreaView className="flex-1 h-full w-full">
      <ScrollView
        horizontal
        className="flex-1 h-full w-full"
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <View className="w-screen border p-3 items-center">
          <View className="flex-row justify-between border w-full">
            <View>
              <Text>back icon</Text>
            </View>
            <View>
              <Text>redit icon</Text>
            </View>
            <View>
              <Text>sign up</Text>
            </View>
          </View>

          <View>
            <Text>login in to reddit</Text>
          </View>

          <View className="">
            <Pressable>
              <Text>google icon</Text>
              <Text>continuew with goole</Text>
            </Pressable>
          </View>

          <View>
            <Text>or</Text>
          </View>
          <View>
            <Text>input one</Text>
            <Text>input two</Text>
          </View>

          <Text>fogrot password?</Text>

          <Text>
            by continuing, you agree to our User Agreement and acknowledgement
            that you under stand the privacy policy
          </Text>

          <Pressable>
            <Text>continue</Text>
          </Pressable>
        </View>

        <View className="w-screen p-3">
          <Text>sign up screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
