import { View, Text } from "react-native";
import React from "react";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Home, Communities, Chat, Create, Inbox } from "./screens";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 

type RootStackParamList = {
  Home: undefined;
  Communities: undefined;
  Chat: undefined;
  Create: undefined;
  Inbox: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Communities")
            iconName = focused ? "account-group" : "account-group-outline";
            else if(route.name === 'Create') iconName = focused ? 'plus' : 'plus'; 
            else if(route.name === 'Chat') iconName = focused ? 'chat-processing' : 'chat-processing-outline'; 
            else if(route.name === 'Inbox') iconName = focused ? 'bell' : 'bell-outline'; 

          return (
            <>
              <MaterialCommunityIcons size={size} focused={focused} name={iconName} />
            </>
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
      <Tab.Screen
        name="Communities"
        options={{ headerShown: false }}
        component={Communities}
      />
      <Tab.Screen
        name="Create"
        options={{ headerShown: false }}
        component={Create}
      />
      <Tab.Screen
        name="Chat"
        options={{ headerShown: false }}
        component={Chat}
      />
      <Tab.Screen
        name="Inbox"
        options={{ headerShown: false }}
        component={Inbox}
      />
    </Tab.Navigator>
  );
}
