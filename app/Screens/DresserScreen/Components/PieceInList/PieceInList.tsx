import React from "react";
import { Image, Text, View } from "react-native";
import { ImgPathConsts } from "../../../../../utills/enums";
import { Pieces } from "../../../../../utills/types";
import piece_in_list from "./PieceInListStyles";

type Props = {
    pieceData: Pieces,
}

function PieceInList({pieceData}: Props): React.JSX.Element {
    return(
        <View style = {piece_in_list.wrapper}>
            <View>
                <Image source = { {uri: ImgPathConsts.rootAssetsImgPath + pieceData.image_path || ImgPathConsts.piecePlaceholderImage}}
                    resizeMode = "stretch" style = {piece_in_list.img}/>
            </View>
                <Text> {pieceData.name} </Text>
        </View>
    );
}

export default PieceInList