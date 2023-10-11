import SelectDropdown from "react-native-select-dropdown";
import Entypo from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Text, View, useWindowDimensions } from "react-native";

const values = ["Home", "Popular"];

const DropDownPicker = () => {
  const { width } = useWindowDimensions();

  return (
    <SelectDropdown
      defaultValueByIndex={0}
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
      renderDropdownIcon={(selectedItem, index) =>
        selectedItem ? (
          <Entypo name="chevron-small-up" size={30} color="#000" />
        ) : (
          <Entypo name="chevron-small-down" size={30} color="#000" />
        )
      }
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
            <Text className="ml-4 font-bold text-gray-600">{selecteditem}</Text>
          </View>
        );
      }}
      data={values}
      onSelect={(selectedItem, index) => {}}
    />
  );
};

export default DropDownPicker;
