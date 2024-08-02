import React from "react";
import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import submit_button from "./SubmitButtonStyles";

function SubmitButton(obj: {onPress: ((event: GestureResponderEvent) => void) | undefined, title: string}): React.JSX.Element {

    const {onPress, title} = obj

    return(
        <TouchableOpacity onPress = {onPress} style = {submit_button.wrapper}>
            <LinearGradient colors = {["rgb(44,32,109)","rgb(200,46,189)"]}>
                <Text style = {submit_button.text}> {title} </Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

export default SubmitButton