import React from "react";
import { ImageBackground, View } from "react-native";
import add_new_piece_styles from "./AddNewPieceScreenStyles";
import { ImgPathConsts } from "../../../../utills/enums";

function AddNewPieceScreen(): React.JSX.Element {
    
    return(
        <View style = {add_new_piece_styles.wrapper}>
            <ImageBackground style = {add_new_piece_styles.backgroundImg} source = {ImgPathConsts.backgroundImage} resizeMode = "cover">

            </ImageBackground>
        </View>
    );
}

export default AddNewPieceScreen