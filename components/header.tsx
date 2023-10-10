import {
  View,
  Animated,
  Easing,
  useWindowDimensions,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import SelectDropdown from "react-native-select-dropdown";
import { PropsWithChildren, useRef, useState } from "react";
import type { EasingFunction } from "react-native";

const values = ["Home", "Popular"];

const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const fadeAnimation = useRef(new Animated.Value(0)).current;
  const opacity = new Animated.Value(0);
  const { width } = useWindowDimensions();

  const animatedCaret = (easing: EasingFunction) => {
    opacity.setValue(0);
    Animated.timing(opacity, {
      toValue: 0,
      easing,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView className="px-3 py-2">
      <View className="flex-row justify-between items-center">
        <View className="flex-row space-x-4 items-center">
          <View className="mr-2">
            <Icon name="menu" size={30} color="#000" />
          </View>
          {/* <DropDownPicker /> */}
          <SelectDropdown
            defaultValueByIndex={0}
            onFocus={() => animatedCaret(Easing.ease)}
            buttonTextStyle={{ fontWeight: "bold" }}
            buttonStyle={{ width: 130, borderRadius: 8 }}
            defaultButtonText="Home"
            dropdownStyle={{
              width: width,
              marginTop: -17,
              flex: 1,
              justifyContent: "space-between",
              flexDirection: "row",
              marginLeft: -50,
            }}
            renderDropdownIcon={(selectedItem, index) => {
              return (
                <Animated.View>
                  {selectedItem ? (
                    <Entypo name="chevron-small-up" size={30} color="#000" />
                  ) : (
                    <Entypo name="chevron-small-down" size={30} color="#000" />
                  )}
                </Animated.View>
              );
            }}
            rowStyle={{ height: 70, padding: 10 }}
            renderCustomizedRowChild={(selecteditem, index, isSelected) => {
              return (
                <View
                  className={`flex-row items-center h-full border-none outline-none px-3 ${
                    isSelected && "bg-gray-200"
                  }`}
                >
                  {selecteditem === "Home" ? (
                    <Entypo name="home" size={20} color="#4a4d4b" />
                  ) : (
                    <Icon
                      name="arrow-top-right-thin-circle-outline"
                      size={20}
                      color="#4a4d4b"
                    />
                  )}
                  <Text className="ml-4 font-bold text-gray-600">
                    {selecteditem}
                  </Text>
                </View>
              );
            }}
            data={values}
            onSelect={(selectedItem, index) => {}}
          />
        </View>

        <View className="flex-row space-x-3 items-center">
          <Icon name="magnify" size={30} color="#000" />
          <Entypo name="user" size={30} color="#000" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
