import React from "react";
import { ImageBackground, SafeAreaView, View } from "react-native";
import dresser_screen from "./DresserScreenStyles";
import Piece from "../Components/Piece/Piece";
import { ImgPathConsts } from "../../../../utills/enums";

function DresserScreen(): React.JSX.Element{
    
    return(
        <View style = {dresser_screen.wrapper}>
            <ImageBackground style = {dresser_screen.backgroundImg} source = {ImgPathConsts.backgroundImage} resizeMode = "cover">
                <Piece pieceImgPath = {ImgPathConsts.placeholderImage} />           
            </ImageBackground>
        </View>

    );
}

export default DresserScreen