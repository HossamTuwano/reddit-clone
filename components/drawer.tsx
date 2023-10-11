import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const DrawerNavigator = createDrawerNavigator();

const Feed = () => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

const Article = () => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};
export default function Drawer() {
  return (
    <DrawerNavigator.Navigator>
      <DrawerNavigator.Screen name="Feed" component={Feed} />
      <DrawerNavigator.Screen name="Article" component={Article} />
    </DrawerNavigator.Navigator>
  );
}
