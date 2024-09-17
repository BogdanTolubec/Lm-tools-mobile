import React from "react"
import { TouchableOpacity } from "react-native";
import { rareness, rarenessColors } from "../../../../../utills/enums";
import piece_rareness_choose_label from "./PieceRarenessChooseLabelStyles";

type Props = {
    labelRareness: rareness,
    setStateFunction: React.Dispatch<React.SetStateAction<rareness>>,
}

function PieceRarenessChooseLabel({setStateFunction, labelRareness}: Props):React.JSX.Element {

    let backgroundColor = ""

    switch (labelRareness){
        case rareness.common: {backgroundColor = rarenessColors.common; break;}
        case rareness.uncommon: {backgroundColor = rarenessColors.uncommon; break;}
        case rareness.rare: {backgroundColor = rarenessColors.rare; break;}
        case rareness.epic: {backgroundColor = rarenessColors.epic; break;}
        case rareness.legendary: {backgroundColor = rarenessColors.legendary; break;}
        case rareness.mythic: {backgroundColor = rarenessColors.mythic; break;}
    }

    return(
        <TouchableOpacity style = {[piece_rareness_choose_label.wrapper, {backgroundColor: backgroundColor}]} 
        onPress = {() => setStateFunction(labelRareness)}/>
    );
}

export default PieceRarenessChooseLabel