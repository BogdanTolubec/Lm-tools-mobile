import React from "react";
import { GestureResponderEvent, Image, ImageBackground, ImageSourcePropType, TouchableOpacity, View } from "react-native";
import piece from "./PieceStyles";
import { ImgPathConsts, rareness } from "../../../../../utills/enums";
import { setGearImageBackgroundByRareness } from "../../../../../utills/functions/imagesFunctions";

type Props = {
    pieceImgPath: ImageSourcePropType | undefined, 
    juewelsImgsPathArray?: Array<ImageSourcePropType | undefined>,
    pieceRareness: rareness | undefined,
    onPress?: (event: GestureResponderEvent) => void, 
}

function Piece({pieceImgPath, juewelsImgsPathArray, onPress, pieceRareness = rareness.common}: Props): React.JSX.Element {

    let piece_rareness_background_image_path = setGearImageBackgroundByRareness(pieceRareness)
    
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