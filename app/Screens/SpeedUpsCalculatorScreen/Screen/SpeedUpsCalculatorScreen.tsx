import React from "react";
import { ImageBackground, View } from "react-native";
import SpeedUpsInput from "../Components/SpeedUpsInput/SpeedUpsInput";
import { ImgPathConsts } from "../../../../utills/enums";
import home from "../../HomeScreen/Screen/HomeScreen.styles";
import { speedUpsIconValueArray } from "../../../../utills/consts";
import speed_ups_calculator_screen from "./SpeedUpsCalculatorScreen.styles";

function SpeedUpsCalculatorScreen(): React.JSX.Element{
    return(
        <View style = {speed_ups_calculator_screen.wrapper}>
            <ImageBackground source = {{uri: ImgPathConsts.backgroundImage}} resizeMode = "cover" style = {home.background_img}>
                <View style = {speed_ups_calculator_screen.inputs_wrapper}>
                    {
                        speedUpsIconValueArray.map((speedUpData, index) =>
                            <View key = {index} style = {speed_ups_calculator_screen.input_wrapper}>
                                <SpeedUpsInput imagePath = {speedUpData.imagePath}/>
                            </View>
                        )
                    }
                </View>

                <View style = {speed_ups_calculator_screen.results_wrapper}>

                </View>
            </ImageBackground>
        </View>
    );
}

export default SpeedUpsCalculatorScreen