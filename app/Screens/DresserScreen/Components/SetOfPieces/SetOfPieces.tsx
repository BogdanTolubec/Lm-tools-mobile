import React from "react";
import Piece from "../Piece/Piece";
import { Text, View } from "react-native";
import { ImgPathConsts } from "../../../../../utills/enums";
import set_of_pieces from "./SetOfPieceStyles";

type Props = {
    title: string,
}

function SetOfPieces ({title = "SET 1"}: Props): React.JSX.Element {
    
    return(
        <View style = {set_of_pieces.wrapper}>
            <View style = {set_of_pieces.gear_box}>

                <Text style = {set_of_pieces.title}> {title} </Text>

                <View style = {set_of_pieces.start_of_set}>
                    <Piece pieceImgPath = {ImgPathConsts.placeholderImage}/>
                    <Piece pieceImgPath = {ImgPathConsts.placeholderImage}/>
                </View>

                <View style = {set_of_pieces.center_of_set_wrapper}>

                    <View style = {set_of_pieces.center_of_set}>           
                        <Piece pieceImgPath = {ImgPathConsts.placeholderImage}/>
                        <Piece pieceImgPath = {ImgPathConsts.placeholderImage}/>
                    </View>

                    <View style = {set_of_pieces.center_of_set}>
                        <Piece pieceImgPath = {ImgPathConsts.placeholderImage}/>
                        <Piece pieceImgPath = {ImgPathConsts.placeholderImage}/>
                    </View>

                </View>
                
                <View style = {set_of_pieces.end_of_set}>           
                    <Piece pieceImgPath = {ImgPathConsts.placeholderImage}/>
                    <Piece pieceImgPath = {ImgPathConsts.placeholderImage}/>
                </View>
            </View>
        </View>
    );
}

export default SetOfPieces