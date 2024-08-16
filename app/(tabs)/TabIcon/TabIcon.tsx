import React from "react"
import { ColorValue, Image, ImageSourcePropType, Text, View } from "react-native";
import tab_icon from "./TabIconStyles";

function TabIcon (obj: { icon: ImageSourcePropType | undefined, color: ColorValue | undefined, name: string, focused: boolean }): React.JSX.Element {

    const {icon, color, name, focused} = obj

    return (
      <View style = {tab_icon.wrapper}>
        <Image
          source={icon}
          resizeMode="contain"
          tintColor={color}
          style = {tab_icon.img}
        />
        <Text
          style={{ color: color }}
        >
          {name}
        </Text>
      </View>
    );
  };

export default TabIcon