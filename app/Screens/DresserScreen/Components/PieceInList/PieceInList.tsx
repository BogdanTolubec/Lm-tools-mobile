import React from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { ImgPathConsts, rareness } from "../../../../../utills/enums";
import { Pieces } from "../../../../../utills/types";
import piece_in_list from "./PieceInListStyles";
import StatsList from "../StatsList/StatsList";
import { firstLetterCapitalizer } from "../../../../../utills/functions/userFriendlyVisualisation";

type Props = {
    pieceData: Pieces,
    pieceRareness: rareness,
}

function PieceInList({pieceData, pieceRareness}: Props): React.JSX.Element {

    let piece_rareness_background_image_path = ""

    switch (pieceRareness){
        case rareness.common: {piece_rareness_background_image_path = ImgPathConsts.commonPieceBackgroundImage; break}
        case rareness.uncommon: {piece_rareness_background_image_path = ImgPathConsts.uncommonPieceBackgroundImage; break}
        case rareness.rare: {piece_rareness_background_image_path = ImgPathConsts.rarePieceBackgroundImage; break}
        case rareness.epic: {piece_rareness_background_image_path = ImgPathConsts.epicPieceBackgroundImage; break}
        case rareness.legendary: {piece_rareness_background_image_path = ImgPathConsts.legendaryPieceBackgroundImage; break}
        case rareness.mythic: {piece_rareness_background_image_path = ImgPathConsts.mythicPieceBackgroundImage; break}
        case rareness.tempered: {piece_rareness_background_image_path = ImgPathConsts.temperedPieceBackgroundImage; break}
        default: {piece_rareness_background_image_path = ImgPathConsts.commonPieceBackgroundImage}
    }
    

    return(
        <View style = {piece_in_list.wrapper}>
            <TouchableOpacity style = {piece_in_list.first_row}>
                <View style = {piece_in_list.rareness_background_img_wrapper}>
                    <ImageBackground source = {{uri: piece_rareness_background_image_path}} style = {piece_in_list.rareness_background_img_wrapper}>
                        <View style = {piece_in_list.img_wrapper}>
                            <Image source = { {uri: ImgPathConsts.rootAssetsImgPath + pieceData.image_path || ImgPathConsts.piecePlaceholderImage}}
                                style = {piece_in_list.image}/>
                        </View>
                    </ImageBackground>
                </View>

                <Text> {firstLetterCapitalizer(pieceData.name)} </Text>
            </TouchableOpacity>

            <StatsList piece = {pieceData}/>
        </View>
    );
}

export default PieceInList