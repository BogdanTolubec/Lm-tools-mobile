import React from "react";
import { Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import submit_button from "./SubmitButton.styles";

type Props = {
    onPress: (() => void) | undefined,
    title: string
}

function SubmitButton( {onPress, title}: Props ): React.JSX.Element {

    return(
        <TouchableOpacity onPress = {onPress} style = {submit_button.wrapper}>
            <LinearGradient style = {submit_button.gradient} colors = {["rgb(11, 170, 211)","rgb(33, 77, 99)"]}>
                <Text style = {submit_button.text}> {title} </Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

export default SubmitButton