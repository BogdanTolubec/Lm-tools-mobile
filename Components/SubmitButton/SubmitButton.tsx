import React from "react";
import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import submit_button from "./SubmitButtonStyles";

function SubmitButton(obj: {onPress: ((event: GestureResponderEvent) => void) | undefined, title: string}): React.JSX.Element {

    const {onPress, title} = obj

    return(
        <TouchableOpacity onPress = {onPress} style = {submit_button.wrapper}>
            <LinearGradient style = {submit_button.gradient} colors = {["rgb(11, 170, 211)","rgb(33, 77, 99)"]}>
                <Text style = {submit_button.text}> {title} </Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

export default SubmitButton