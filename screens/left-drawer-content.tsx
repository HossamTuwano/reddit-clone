import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

export default function LeftDrawerContent() {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView className="mt-3 flex space-y-6 px-3">
      <View className="flex-row space-x-8 items-center">
        <FontAwesome name="feed" size={20} color="black" />
        <Text>All</Text>
      </View>
      <View className="flex-row space-x-8 items-center">
        <FontAwesome5 name="user-circle" size={20} color="black" />
        <Pressable onPress={() => navigation.navigate("LoginScreen")}>
          <Text>Log in to add your communities</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
