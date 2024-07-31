import React from "react";
import { View } from "react-native";
import screeen_move_button_styles from "./ScreenMoveButtonStyles";

function ScreenMoveButon ( obj : {navigation: any, destinationScreeen: string}): React.JSX.Element {
    const {navigation, destinationScreeen} = obj

    return(
        <View style = {screeen_move_button_styles.wrapper}
            onTouchEnd = {() => {navigation?.navigate(destinationScreeen)}}>
        </View>
    );
}

export default ScreenMoveButon