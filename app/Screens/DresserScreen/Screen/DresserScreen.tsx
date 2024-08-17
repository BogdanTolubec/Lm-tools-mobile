import React from "react";
import { ImageBackground, SafeAreaView, View } from "react-native";
import dresser_screen from "./DresserScreenStyles";
import { ImgPathConsts } from "../../../../utills/enums";
import SetOfPieces from "../Components/SetOfPieces/SetOfPieces";

function DresserScreen(): React.JSX.Element{
    
    return(
        <SafeAreaView>
            <View style = {dresser_screen.wrapper}>
                <ImageBackground style = {dresser_screen.backgroundImg} source = {ImgPathConsts.backgroundImage} resizeMode = "cover">
                    <SetOfPieces title = "MIX"/>        
                </ImageBackground>
            </View>
        </SafeAreaView>

    );
}

export default DresserScreen