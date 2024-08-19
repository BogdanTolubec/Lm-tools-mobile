import React, { useCallback, useEffect, useState } from "react";
import Piece from "../Piece/Piece";
import { Text, View } from "react-native";
import { ImgPathConsts } from "../../../../../utills/enums";
import set_of_pieces from "./SetOfPieceStyles";
import { gearStats, Pieces } from "../../../../../utills/types";
import { getDBConnection, getPieces } from "../../../../../utills/functions/db-service";

type Props = {
    title: string,
    gearSet?: {
        id: number,
        mainHand: Pieces,
        helmet: Pieces,
        plate: Pieces,
        boots: Pieces,
        secondHand: Pieces,
        accessories: [ Pieces, Pieces, Pieces ],
    }
}

function SetOfPieces ({title = "SET 1", gearSet}: Props): React.JSX.Element {

    const [gearsStats, setGearsStats] = useState<gearStats[]>()

    const loadDataCallback = useCallback(async () => {
        try{
            const db = await getDBConnection()
            const setOfPieces = await getPieces(db)
            
            console.log("Fetch result: " + JSON.stringify(setOfPieces[0]))
        }
        catch(e){
            console.error(e)
        }
    }, [])

    useEffect(() => {
        loadDataCallback()
        /*setGearsStats([gearSet?.mainHand.stats, gearSet?.helmet.stats, gearSet?.plate.stats,
            gearSet?.boots.stats, gearSet?.secondHand.stats, gearSet?.accessories[0].stats, 
            gearSet?.accessories[1].stats, gearSet?.accessories[2].stats])*/
    }, [loadDataCallback])
    
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