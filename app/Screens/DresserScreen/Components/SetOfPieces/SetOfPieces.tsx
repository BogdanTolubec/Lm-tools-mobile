import React, { useEffect, useState } from "react";
import Piece from "../Piece/Piece";
import { Text, View } from "react-native";
import { ImgPathConsts } from "../../../../../utills/enums";
import set_of_pieces from "./SetOfPieceStyles";
import { gearSet, gearStats} from "../../../../../utills/types";
import ErrorPage from "../../../ErrorScreen/ErrorScreen";

type Props = {
    title: string,
    gearSet: gearSet | undefined
}

function SetOfPieces ({title = "SET 1", gearSet}: Props): React.JSX.Element {

    const [gearsStats, setGearsStats] = useState<gearStats[]>()

    if(gearSet){
        
    const path = `aset:/img${gearSet.helmet.image_path}`

    console.log("path: " + path)
    
    return(
        <View style = {set_of_pieces.wrapper}>
            <View style = {set_of_pieces.gear_box}>

                <Text style = {set_of_pieces.title}> {title} </Text>

                <View style = {set_of_pieces.start_of_set}>
                    <Piece pieceImgPath = {{uri: ImgPathConsts.placeholderImage}}/>
                    <Piece pieceImgPath = {{uri: ImgPathConsts.placeholderImage}}/>
                </View>

                <View style = {set_of_pieces.center_of_set_wrapper}>

                    <View style = {set_of_pieces.center_of_set}>           
                        <Piece pieceImgPath = {{uri: path}}/>
                        <Piece pieceImgPath = {{uri: ImgPathConsts.placeholderImage}}/>
                    </View>

                    <View style = {set_of_pieces.center_of_set}>
                        <Piece pieceImgPath = {{uri: ImgPathConsts.placeholderImage}}/>
                        <Piece pieceImgPath = {{uri: ImgPathConsts.placeholderImage}}/>
                    </View>

                </View>
                
                <View style = {set_of_pieces.end_of_set}>           
                    <Piece pieceImgPath = {{uri: ImgPathConsts.placeholderImage}}/>
                    <Piece pieceImgPath = {{uri: ImgPathConsts.placeholderImage}}/>
                </View>
            </View>
        </View>
    );
}
    else return <ErrorPage/>
}

export default SetOfPieces