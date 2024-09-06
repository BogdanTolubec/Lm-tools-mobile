import React, { useCallback, useEffect, useState } from "react"
import { ScrollView, View } from "react-native";
import piece_selector from "./PieceSelectorStyles";
import PieceRarenessChooseLabel from "../PieceRarenessChooseLabel/PieceRarenessChooseLabel";
import { pieceTypes, rareness } from "../../../../../utills/enums";
import { getAllPiecesByTypeAndRareness , getDBConnection } from "../../../../../utills/functions/db-service";
import { gearSet, Pieces } from "../../../../../utills/types";
import PieceInList from "../PieceInList/PieceInList";

type Props = {
    pieceType: pieceTypes,
    gearSet?: gearSet,
}

function PieceSelector({pieceType, gearSet}: Props): React.JSX.Element {

    const [currentRarenessSelected, setCurrentRarenessSelected] = useState<rareness>(rareness.common)
    const [piecesByTypeAndRareness, setPiecesByTypeAndRareness] = useState<Pieces[]>([])
 
    const loadDataCallback = useCallback(async () => {
        try{
            const db = await getDBConnection()
            setPiecesByTypeAndRareness(await getAllPiecesByTypeAndRareness(db, pieceType, currentRarenessSelected))
        }
        catch(e){
            console.error(e)
        }
    }, [pieceType, currentRarenessSelected])

    useEffect(() => {
        loadDataCallback()
    }, [loadDataCallback])

    return(
        <View style = {piece_selector.wrapper}>
            <ScrollView style = {piece_selector.selector}>
                {
                    piecesByTypeAndRareness.map((piece, index) => 
                        <PieceInList key = {index} pieceData = {piece} pieceRareness = {currentRarenessSelected}
                        pieceType = {pieceType}    gearSet = {gearSet}/>
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