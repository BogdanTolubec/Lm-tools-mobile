import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ImgPathConsts } from "../../../../../utills/enums";
import { Pieces } from "../../../../../utills/types";
import piece_in_list from "./PieceInListStyles";
import StatsList from "../StatsList/StatsList";
import { firstLetterCapitalizer } from "../../../../../utills/functions/userFriendlyVisualisation";

type Props = {
    pieceData: Pieces,
}

function PieceInList({pieceData}: Props): React.JSX.Element {
    return(
        <View style = {piece_in_list.wrapper}>
            <TouchableOpacity style = {piece_in_list.first_row}>
                <View style = {piece_in_list.img_wrapper}>
                    <Image source = { {uri: ImgPathConsts.rootAssetsImgPath + pieceData.image_path || ImgPathConsts.piecePlaceholderImage}}
                        resizeMode = "cover" style = {piece_in_list.image}/>
                </View>
                <Text> {firstLetterCapitalizer(pieceData.name)} </Text>
            </TouchableOpacity>

            <StatsList piece = {pieceData}/>
        </View>
    );
}

export default PieceInList