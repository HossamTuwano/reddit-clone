import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import { DrawerLayoutAndroid } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
