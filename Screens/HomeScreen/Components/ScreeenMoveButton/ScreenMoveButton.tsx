import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import screeen_move_button_styles from "./ScreenMoveButtonStyles";

function ScreenMoveButon ( obj : {navigation: any, destinationScreeen: string, title: string}): React.JSX.Element {
    const {navigation, destinationScreeen, title} = obj

    return(
        <TouchableOpacity style = {screeen_move_button_styles.wrapper}
            onPress = {() => {navigation?.navigate("Onboarding", {screen: destinationScreeen})}}>
                <Text style = {screeen_move_button_styles.text}> {title} </Text>
        </TouchableOpacity>
    );
}

export default ScreenMoveButon