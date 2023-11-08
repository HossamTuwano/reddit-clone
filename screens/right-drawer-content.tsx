import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export default function RightDrawerContent() {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView className="flex p-4">
      <View className="flex h-full">
        <View className="flex items-center">
          {/* icon */}
          <View className="mb-4">
            <FontAwesome name="user-circle" size={80} color="black" />
          </View>
          {/* text */}
          <Text className="text-center leading-loose ">
            Sign up to upvote the best content, customize your info, share your
            feed, and more!
          </Text>

          {/* horizontal line */}
          <View className="bg-red-900 text-red-900 mb-2" />
        </View>

        {/* icon button */}
        <View className="flex-1 ">
          <Pressable
            className="flex-row space-x-4 items-center"
            onPress={() => navigation.navigate("AuthScreen")}
          >
            <FontAwesome5 name="user-circle" size={24} color="black" />
            <Text>Sign up / Log in</Text>
          </Pressable>
        </View>

        {/* drawer_footer --setting */}
        <Pressable
          className="flex-row items-center space-x-4"
          onPress={() => console.log("hey")}
        >
          <Ionicons name="settings-outline" size={24} color="black" />
          <Text>Settings</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
