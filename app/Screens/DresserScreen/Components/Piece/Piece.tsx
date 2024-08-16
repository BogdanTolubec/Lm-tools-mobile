import React from "react";
import { Image, ImageBackground, ImageSourcePropType, View } from "react-native";
import piece from "./PieceStyles";
import { ImgPathConsts } from "../../../../../utills/enums";

function Piece(obj: {pieceImgPath: ImageSourcePropType | undefined, juewelsImgsPathArray?: Array<ImageSourcePropType | undefined>}): React.JSX.Element {

    const {pieceImgPath, juewelsImgsPathArray} = obj

    return(
        <View style = {piece.wrapper}>
            <ImageBackground style = {piece.piece_img} source = {pieceImgPath}>
            {
            juewelsImgsPathArray !== undefined ? (
                <View style = {piece.juewels_wrapper}>
                    <Image style = {piece.juewels_img} source = {juewelsImgsPathArray[0]} alt="" />
                    <Image style = {piece.juewels_img} source = {juewelsImgsPathArray[1]} alt="" />
                    <Image style = {piece.juewels_img} source= {juewelsImgsPathArray[2]} alt="" />
                </View>) :

                (<View style = {piece.juewels_wrapper}>
                    <Image style = {piece.juewels_img} source = {ImgPathConsts.placeholderImage} alt="" />
                    <Image style = {piece.juewels_img} source = {ImgPathConsts.placeholderImage} alt="" />
                    <Image style = {piece.juewels_img} source = {ImgPathConsts.placeholderImage} alt="" />
                </View>)
            }
            </ImageBackground>
        </View>
    );
}

export default Piece