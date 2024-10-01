import React, { ReactNode, useCallback, useEffect, useState } from "react"
import { ScrollView, View } from "react-native";
import piece_selector from "./PieceSelector.styles";
import PieceRarenessChooseLabel from "../PieceRarenessChooseLabel/PieceRarenessChooseLabel";
import { pieceTypes, rareness } from "../../../../../utills/enums";
import { getAllPiecesByTypeAndRareness , getDBConnection } from "../../../../../utills/functions/db-service";
import { gearSet, Piece } from "../../../../../utills/types";
import PieceInList from "../PieceInList/PieceInList";
import shared_styles from "../../../../../utills/sharedStyles.styles";

type Props = {
    pieceType: pieceTypes,
    gearSet?: gearSet,
}

function PieceSelector({pieceType, gearSet}: Props): React.JSX.Element {

    const [currentRarenessSelected, setCurrentRarenessSelected] = useState<rareness>(rareness.common)
    const [piecesByTypeAndRareness, setPiecesByTypeAndRareness] = useState<Piece[]>([])
    const rarenessArray: rareness[] = [rareness.common, rareness.uncommon, rareness.rare, rareness.epic, rareness.legendary, rareness.mythic]

    function onChooseRarenessSelected(currentRareness: rareness): void{
        setCurrentRarenessSelected(currentRareness)
    }
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
        <View style = {shared_styles.modal_box_default_wrapper}>
            <ScrollView style = {piece_selector.selector}>
                {
                    piecesByTypeAndRareness.map((piece, index) => 
                        <PieceInList key = {index} pieceData = {piece} pieceRareness = {currentRarenessSelected}
                        pieceType = {pieceType}    gearSet = {gearSet}/>
                    )
                }
            </ScrollView>
            
            <View style = {piece_selector.filter_wrapper}>
                {
                    rarenessArray.map((rareness, index) => 
                        <PieceRarenessChooseLabel key = {index} labelRareness = {rareness} onPress = {onChooseRarenessSelected}/>
                    )
                }
            </View>
        </View>
    );
}

export default PieceSelector