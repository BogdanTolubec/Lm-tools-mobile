import React from "react";
import { GestureResponderEvent, Image, ImageBackground, ImageSourcePropType, TouchableOpacity, View } from "react-native";
import piece from "./PieceStyles";
import { ImgPathConsts, rareness } from "../../../../../utills/enums";

type Props = {
    pieceImgPath: ImageSourcePropType | undefined, 
    juewelsImgsPathArray?: Array<ImageSourcePropType | undefined>,
    pieceRareness: rareness | undefined,
    onPress?: (event: GestureResponderEvent) => void, 
}

function Piece({pieceImgPath, juewelsImgsPathArray, onPress, pieceRareness = rareness.common}: Props): React.JSX.Element {

    let piece_rareness_background_image_path = ""

    switch (pieceRareness){
        case rareness.common: {piece_rareness_background_image_path = ImgPathConsts.commonPieceBackgroundImage; break}
        case rareness.uncommon: {piece_rareness_background_image_path = ImgPathConsts.uncommonPieceBackgroundImage; break}
        case rareness.rare: {piece_rareness_background_image_path = ImgPathConsts.rarePieceBackgroundImage; break}
        case rareness.epic: {piece_rareness_background_image_path = ImgPathConsts.epicPieceBackgroundImage; break}
        case rareness.legendary: {piece_rareness_background_image_path = ImgPathConsts.legendaryPieceBackgroundImage; break}
        case rareness.mythic: {piece_rareness_background_image_path = ImgPathConsts.mythicPieceBackgroundImage; break}
        case rareness.tempered: {piece_rareness_background_image_path = ImgPathConsts.temperedPieceBackgroundImage; break}
        default: {piece_rareness_background_image_path = ImgPathConsts.commonPieceBackgroundImage}
    }
    
    return(
        <TouchableOpacity onPress = {onPress} style = {piece.wrapper}>
            <ImageBackground source = {{uri: piece_rareness_background_image_path}} style = {piece.rareness_background_img_wrapper}>
                <View style = {piece.piece_img_wrapper}>
                    <ImageBackground style = {piece.piece_img} source = {pieceImgPath}>
                    {
                    juewelsImgsPathArray !== undefined ? (
                        <View style = {piece.juewels_wrapper}>
                                <Image style = {piece.juewels_img} source = {juewelsImgsPathArray[0]}/>
                                <Image style = {piece.juewels_img} source = {juewelsImgsPathArray[1]}/>
                                <Image style = {piece.juewels_img} source = {juewelsImgsPathArray[2]}/>
                        </View>) :

                        (<View style = {piece.juewels_wrapper}>
                            <Image style = {piece.juewels_img} source = {{uri: ImgPathConsts.juewelsPlaceHolderImage}}/>
                            <Image style = {piece.juewels_img} source = {{uri: ImgPathConsts.juewelsPlaceHolderImage}}/>
                            <Image style = {piece.juewels_img} source = {{uri: ImgPathConsts.juewelsPlaceHolderImage}}/>
                        </View>)
                    }
                    </ImageBackground>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
}

export default Piece