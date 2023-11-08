import { View, DrawerLayoutAndroid, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import DropDownPicker from "./dropdown-picker";

const Header = ({ navigation }) => {
  return (
    <SafeAreaView className="px-3 py-2">
      <View className="flex-row justify-between items-center">
        <View className="flex-row space-x-4 items-center">
          <Pressable
            className="mr-3"
            onPress={() => {
              navigation.getParent("LeftDrawer").toggleDrawer();
            }}
          >
            <Icon name="menu" size={30} color="#000" />
          </Pressable>
          {/* <DropDownPicker /> */}
          <DropDownPicker />
        </View>
        <View className="flex-row space-x-3 items-center">
          <Icon name="magnify" size={30} color="#000" />
          <Pressable onPress={() => navigation.getParent().toggleDrawer()}>
            <Entypo name="user" size={30} color="#000" />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
