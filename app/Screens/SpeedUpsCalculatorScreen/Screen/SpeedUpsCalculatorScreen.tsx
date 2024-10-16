import React from "react";
import { ImageBackground, View } from "react-native";
import SpeedUpsInput from "../Components/SpeedUpsInput/SpeedUpsInput";
import { IconPathConsts, ImgPathConsts } from "../../../../utills/enums";
import speed_ups_calculator_screen from "./SpeedUpsCalculatorScreen.styles";
import home from "../../HomeScreen/Screen/HomeScreen.styles";

function SpeedUpsCalculatorScreen(): React.JSX.Element{
    return(
        <View style = {speed_ups_calculator_screen.wrapper}>
            <ImageBackground source = {{uri: ImgPathConsts.backgroundImage}} resizeMode = "cover" style = {home.background_img}>
                <View style = {speed_ups_calculator_screen.inputs_wrapper}>
                    <View style = {speed_ups_calculator_screen.input_wrapper}>
                        <SpeedUpsInput imagePath = {IconPathConsts.speedUpIcon}/>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

export default SpeedUpsCalculatorScreen