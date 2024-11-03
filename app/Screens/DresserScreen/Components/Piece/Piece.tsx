import React from "react";
import { GestureResponderEvent, ImageBackground, TouchableOpacity, View } from "react-native";
import piece_in_set from "./Piece.styles";
import { IconPathConsts, ImgPathConsts, rareness } from "../../../../../utills/enums";
import { setGearImageBackgroundByRareness } from "../../../../../utills/functions/images.functions";
import { Piece } from "../../../../../utills/types";import ImageInWrapper from "../../../../../Components/ImageInWrapper/ImageInWrapper";
;

type Props = {
    piece: Piece | undefined,
    onPress?: () => void,
    jewels?: React.JSX.Element
}

function PieceOfSet({piece, jewels, onPress}: Props): React.JSX.Element {

    const piece_rareness_background_image_path = setGearImageBackgroundByRareness(piece?.rareness)
    
    return(
        <TouchableOpacity onPress = {onPress} style = {piece_in_set.wrapper}>
            <ImageBackground source = {{uri: piece_rareness_background_image_path}} style = {piece_in_set.rareness_background_img}>
                <View style = {piece_in_set.piece_img_wrapper}>
                    <ImageBackground style = {piece_in_set.piece_img} 
                        source = {{uri: ImgPathConsts.rootAssetsImgPath + piece?.imagePath}}>
                        
                        {
                            piece?.rareness === rareness.tempered ?
                            <ImageInWrapper imageSource = {IconPathConsts.temperedIcon} 
                                wrapperStyles = {piece_in_set.temperStarIconWrapper}/> :

                            <></>
                        }

                        {   
                            jewels ?

                            <View style = {piece_in_set.jewels_wrapper}>
                                {jewels}
                            </View> :

                            <></>
                        }

                    </ImageBackground>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
}

export default PieceOfSet