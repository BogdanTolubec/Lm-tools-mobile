import React from "react";
import { GestureResponderEvent, ImageBackground, TouchableOpacity, View } from "react-native";
import piece_in_set from "./Piece.styles";
import { ImgPathConsts } from "../../../../../utills/enums";
import { setGearImageBackgroundByRareness } from "../../../../../utills/functions/images.functions";
import { Piece } from "../../../../../utills/types";
import JewelsInPiece from "../JewelsInPiece/JewelsInPiece";

type Props = {
    piece: Piece | undefined,
    onPress?: (event: GestureResponderEvent) => void,
    jewels?: React.JSX.Element
}

function PieceOfSet({piece, jewels, onPress}: Props): React.JSX.Element {

    const piece_rareness_background_image_path = setGearImageBackgroundByRareness(piece?.rareness)
    
    return(
        <TouchableOpacity onPress = {onPress} style = {piece_in_set.wrapper}>
            <ImageBackground source = {{uri: piece_rareness_background_image_path}} style = {piece_in_set.rareness_background_img}>
                <View style = {piece_in_set.piece_img_wrapper}>
                    <ImageBackground style = {piece_in_set.piece_img} 
                        source = {{uri: ImgPathConsts.rootAssetsImgPath + piece?.image_path}}>
                        
                        <View style = {piece_in_set.jewels_wrapper}>
                            {jewels}
                        </View>

                    </ImageBackground>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
}

export default PieceOfSet