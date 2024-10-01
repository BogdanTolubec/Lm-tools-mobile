import React from "react"
import { TouchableOpacity } from "react-native";
import { rareness, rarenessColors } from "../../../../../utills/enums";
import piece_rareness_choose_label from "./PieceRarenessChooseLabel.styles";

type Props = {
    labelRareness: rareness,
    onPress: (currentRareness: rareness) => void,
}

function PieceRarenessChooseLabel({labelRareness, onPress}: Props):React.JSX.Element {

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
        onPress = {() => onPress(labelRareness)}/>
    );
}

export default PieceRarenessChooseLabel