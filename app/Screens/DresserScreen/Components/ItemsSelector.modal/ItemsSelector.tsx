import React from "react"
import { ScrollView, View } from "react-native";
import piece_selector from "./ItemsSelector.styles";
import { pieceTypes, rareness } from "../../../../../utills/enums";
import ImageInWrapper from "../../../../../Components/ImageInWrapper/ImageInWrapper";
import { jewel, Piece } from "../../../../../utills/types";

type Props = {
    itemType: "piece" | "jewel",
    pieceSelected: Piece | undefined,
    jewelSelected: jewel | undefined,
    pieceType: pieceTypes,

    itemsList: React.JSX.Element | React.JSX.Element[],
    rarenessData: Array<{rareness: rareness, iconPath: string}>,
    onChooseRarenessLabelPress: (itemType: "piece" | "jewel", currentRareness: rareness, 
        pieceSelected: Piece | undefined, jewelSelected?: jewel | undefined, pieceType?: pieceTypes,) => Promise<void>
}

function ItemsSelector({itemType, itemsList, rarenessData, pieceSelected, jewelSelected, pieceType, onChooseRarenessLabelPress}: Props): 
    React.JSX.Element {

    return(
        <View style = {piece_selector.wrapper}>
            <ScrollView style = {piece_selector.selector}>
                {itemsList}
            </ScrollView>
            
            <View style = {piece_selector.filter_wrapper}>
                {
                    rarenessData.map((data, index) => 
                        <ImageInWrapper key = {index} wrapperStyles = {piece_selector.choose_label_rareness_wrapper}
                            imageSource = {data.iconPath}
                            onPress = {() => {
                                onChooseRarenessLabelPress(itemType, data.rareness, pieceSelected, jewelSelected, pieceType)
                            }
                        }/>
                    )
                }
            </View>
        </View>
    );
}

export default ItemsSelector