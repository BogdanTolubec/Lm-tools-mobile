import React from "react";
import { ImageBackground, View } from "react-native";
import { ImgPathConsts } from "../../../utills/enums";
import dresser_screen from "./DresserScreenStyles";

function DresserScreen(): React.JSX.Element{
    
    return(
        <View style = {dresser_screen.wrapper}>
            <ImageBackground style = {dresser_screen.backgroundImg} source = {ImgPathConsts.backgroundImage} resizeMode = "cover">

            </ImageBackground>
        </View>
    );
}

export default DresserScreen