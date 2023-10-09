import { View, Text } from "react-native";
import React from "react";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Home, Communities, Chat, Create, Inbox } from "./screens";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "./components/header";

type RootStackParamList = {
  Home: undefined;
  Communities: undefined;
  Chat: undefined;
  Create: undefined;
  Inbox: undefined;
  Header: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          // focused ? color = 'black' ? : color='gray';

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Communities")
            iconName = focused ? "account-group" : "account-group-outline";
          else if (route.name === "Create")
            iconName = focused ? "plus" : "plus";
          else if (route.name === "Chat")
            iconName = focused ? "chat-processing" : "chat-processing-outline";
          else if (route.name === "Inbox")
            iconName = focused ? "bell" : "bell-outline";

          return (
            <MaterialCommunityIcons
              size={size}
              focused={focused}
              name={iconName}
              color={color}
            />
          );
        },
        tabBarLabelStyle: { paddingBottom: 3 },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Communities" component={Communities} />
      <Tab.Screen name="Create" component={Create} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Inbox" component={Inbox} />
    </Tab.Navigator>
  );
}

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ navigation, options, route, back }) => {
          return <Header />;
        },
      }}
    >
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}
