import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import SelectDropdown from "react-native-select-dropdown";

const countries = ["Home", "Popular"];

const Header = () => {
  return (
    <SafeAreaView className="px-3 py-2">
      <View className="flex-row justify-between items-center">
        <View className="flex-row space-x-4 items-center">
          <View className="mr-2">
            <Icon name="menu" size={30} color="#000" />
          </View>
          {/* <DropDownPicker /> */}
          <SelectDropdown
            buttonTextStyle= {{fontWeight: 'bold'}}
            buttonStyle={{ width:130, borderRadius:8}}
            defaultButtonText="Home"
            renderDropdownIcon={() => (
              <Entypo name="chevron-small-down" size={30} />
            )}
            data={countries}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
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
