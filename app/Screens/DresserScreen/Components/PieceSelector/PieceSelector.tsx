import React, { useEffect, useState } from "react"
import { ScrollView, View } from "react-native";
import piece_selector from "./PieceSelectorStyles";
import PieceRarenessChooseLabel from "../PieceRarenessChooseLabel/PieceRarenessChooseLabel";
import { rareness } from "../../../../../utills/enums";

type Props = {

}

function PieceSelector({}: Props): React.JSX.Element {

    const [currentRarenessSelected, setCurrentRarenessSelected] = useState<rareness>(rareness.common)

    useEffect(() => {
        console.log("Current rareness: " + currentRarenessSelected)
    }, [currentRarenessSelected])

    return(
        <View style = {piece_selector.wrapper}>
            <ScrollView>
                
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