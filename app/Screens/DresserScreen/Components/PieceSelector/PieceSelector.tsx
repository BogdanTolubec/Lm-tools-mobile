import React, { useCallback, useEffect, useState } from "react"
import { ScrollView, Text, View } from "react-native";
import piece_selector from "./PieceSelectorStyles";
import PieceRarenessChooseLabel from "../PieceRarenessChooseLabel/PieceRarenessChooseLabel";
import { pieceTypes, rareness } from "../../../../../utills/enums";
import { getAllPiecesByType, getDBConnection } from "../../../../../utills/functions/db-service";
import { Pieces } from "../../../../../utills/types";

type Props = {
    pieceType: pieceTypes
}

function PieceSelector({pieceType}: Props): React.JSX.Element {

    const [currentRarenessSelected, setCurrentRarenessSelected] = useState<rareness>(rareness.common)
    const [piecesByType, setPiecesByType] = useState<Pieces[]>([])

    const loadDataCallback = useCallback(async () => {
        try{
            const db = await getDBConnection()
            setPiecesByType(await getAllPiecesByType(db, pieceType))
        }
        catch(e){
            console.error(e)
        }
    }, [pieceType])

    useEffect(() => {
        loadDataCallback()
    }, [loadDataCallback])

    return(
        <View style = {piece_selector.wrapper}>
            <ScrollView>
                {
                    piecesByType.map((piece) => 
                        <Text key = {piece.id}> Name: {piece.name}, Type: {piece.type}</Text>
                    )
                }
            </ScrollView>
            
            <View style = {piece_selector.filter_wrapper}>
                <PieceRarenessChooseLabel labelRareness = {rareness.common} setStateFunction = {setCurrentRarenessSelected}/>
                <PieceRarenessChooseLabel labelRareness = {rareness.uncommon} setStateFunction = {setCurrentRarenessSelected}/>
                <PieceRarenessChooseLabel labelRareness = {rareness.rare} setStateFunction = {setCurrentRarenessSelected}/>
                <PieceRarenessChooseLabel labelRareness = {rareness.epic} setStateFunction = {setCurrentRarenessSelected}/>
                <PieceRarenessChooseLabel labelRareness = {rareness.legendary} setStateFunction = {setCurrentRarenessSelected}/>
                <PieceRarenessChooseLabel labelRareness = {rareness.mythic} setStateFunction = {setCurrentRarenessSelected}/>
            </View>
        </View>
    );
}

export default PieceSelector