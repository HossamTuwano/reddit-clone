import { View, Text, Modal } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Communities, Chat, Create, Inbox } from "./screens";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "./components/header";
import {
  DrawerNavigationProp,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import RightDrawerContent from "./screens/right-drawer-content";
import LeftDrawerContent from "./screens/left-drawer-content";
import AuthScreen from "./screens/AuthScreen";
import LoginScreen from "./screens/LoginScreen";

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
const LeftDrawer = createDrawerNavigator();
const RightDrawer = createDrawerNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = "";
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

function LeftDrawerNavigator() {
  return (
    <></>
    // <LeftDrawer.Navigator
    //   screenOptions={{
    //     headerShown: false,
    //   }}
    // >
    //   <LeftDrawer.Screen name="Left" component={TabNavigator} />
    // </LeftDrawer.Navigator>
  );
}
function RightDrawerNavigator() {
  return (
    <RightDrawer.Navigator
      id="LeftDrawer"
      drawerContent={LeftDrawerContent}
      screenOptions={{
        drawerPosition: "left",
        drawerStyle: { width: 300 },
        header: ({ navigation }) => {
          return <Header navigation={navigation} />;
        },
      }}
    >
      <RightDrawer.Screen name="Sign up" component={TabNavigator} />
    </RightDrawer.Navigator>
  );
  0;
}

export default function StackNavigator() {
  return (
    <LeftDrawer.Navigator
      id="RightDrawer"
      drawerContent={RightDrawerContent}
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
      }}
    >
      <LeftDrawer.Screen name="Right" component={RightDrawerNavigator} />

      <Stack.Group>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
      </Stack.Group>
    </LeftDrawer.Navigator>
  );
}
