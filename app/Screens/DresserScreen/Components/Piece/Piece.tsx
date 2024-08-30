import React from "react";
import { GestureResponderEvent, Image, ImageBackground, ImageSourcePropType, TouchableOpacity, View } from "react-native";
import piece from "./PieceStyles";
import { ImgPathConsts } from "../../../../../utills/enums";

type Props = {
    pieceImgPath: ImageSourcePropType | undefined, 
    juewelsImgsPathArray?: Array<ImageSourcePropType | undefined>,
    onPress?: (event: GestureResponderEvent) => void, 
}

function Piece({pieceImgPath, juewelsImgsPathArray, onPress}: Props): React.JSX.Element {

    return(
        <TouchableOpacity onPress = {onPress} style = {piece.wrapper}>
            <ImageBackground style = {piece.piece_img} source = {pieceImgPath}>
            {
            juewelsImgsPathArray !== undefined ? (
                <View style = {piece.juewels_wrapper}>
                    <Image style = {piece.juewels_img} source = {juewelsImgsPathArray[0]}/>
                    <Image style = {piece.juewels_img} source = {juewelsImgsPathArray[1]}/>
                    <Image style = {piece.juewels_img} source= {juewelsImgsPathArray[2]}/>
                </View>) :

                (<View style = {piece.juewels_wrapper}>
                    <Image style = {piece.juewels_img} source = {{uri: ImgPathConsts.juewelsPlaceHolderImage}}/>
                    <Image style = {piece.juewels_img} source = {{uri: ImgPathConsts.juewelsPlaceHolderImage}}/>
                    <Image style = {piece.juewels_img} source = {{uri: ImgPathConsts.juewelsPlaceHolderImage}}/>
                </View>)
            }
            </ImageBackground>
        </TouchableOpacity>
    );
}

export default Piece