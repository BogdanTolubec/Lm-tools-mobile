import React from "react";
import { Image, ImageBackground, ImageSourcePropType, View } from "react-native";
import piece from "./PieceStyles";
import { ImgPathConsts } from "../../../../../utills/enums";

type Props = {
    pieceImgPath: ImageSourcePropType | undefined, 
    juewelsImgsPathArray?: Array<ImageSourcePropType | undefined>
}

function Piece({pieceImgPath, juewelsImgsPathArray}: Props): React.JSX.Element {

    return(
        <View style = {piece.wrapper}>
            <ImageBackground style = {piece.piece_img} source = {pieceImgPath}>
            {
            juewelsImgsPathArray !== undefined ? (
                <View style = {piece.juewels_wrapper}>
                    <Image style = {piece.juewels_img} source = {juewelsImgsPathArray[0]}/>
                    <Image style = {piece.juewels_img} source = {juewelsImgsPathArray[1]}/>
                    <Image style = {piece.juewels_img} source= {juewelsImgsPathArray[2]}/>
                </View>) :

                (<View style = {piece.juewels_wrapper}>
                    <Image style = {piece.juewels_img} source = {ImgPathConsts.placeholderImage}/>
                    <Image style = {piece.juewels_img} source = {ImgPathConsts.placeholderImage}/>
                    <Image style = {piece.juewels_img} source = {ImgPathConsts.placeholderImage}/>
                </View>)
            }
            </ImageBackground>
        </View>
    );
}

export default Piece