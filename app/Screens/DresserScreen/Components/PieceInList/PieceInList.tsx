import React from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { ImgPathConsts, pieceTypes, rareness } from "../../../../../utills/enums";
import { gearSet, Piece } from "../../../../../utills/types";
import piece_in_list from "./PieceInList.styles";
import StatsList from "../StatsList/StatsList";
import { firstLetterCapitalizer } from "../../../../../utills/functions/userFriendlyVisualisation.functions";
import { setGearImageBackgroundByRareness } from "../../../../../utills/functions/images.functions";
import shared_styles from "../../../../../utills/sharedStyles.styles";

type Props = {
    pieceData: Piece,
    pieceRareness: rareness,
    pieceType: pieceTypes,
    gearSet?: gearSet,
}

function PieceInList({pieceData, pieceRareness, pieceType, gearSet}: Props): React.JSX.Element {

    let piece_rareness_background_image_path = setGearImageBackgroundByRareness(pieceRareness)

    function updateGearSet(): void {
        if(gearSet){
            switch (pieceType){
                case pieceTypes.mainHand: {
                    gearSet.mainHand = pieceData; gearSet.mainHand.rareness = pieceRareness; break
                }

                case pieceTypes.helmet: {
                    gearSet.helmet = pieceData; gearSet.helmet.rareness = pieceRareness; break
                }

                case pieceTypes.plate: {
                    gearSet.plate = pieceData; gearSet.plate.rareness = pieceRareness; break
                }

                case pieceTypes.boots: {
                    gearSet.boots = pieceData; gearSet.boots.rareness = pieceRareness; break
                }

                case pieceTypes.secondHand: {
                    gearSet.secondHand = pieceData; gearSet.secondHand.rareness = pieceRareness; break
                }

                case pieceTypes.accessory1: {
                    gearSet.accessory1 = pieceData; gearSet.accessory1.rareness = pieceRareness; break
                }

                case pieceTypes.accessory2: {
                    gearSet.accessory2 = pieceData; gearSet.accessory2.rareness = pieceRareness; break
                }

                case pieceTypes.accessory3: {
                    gearSet.accessory3 = pieceData; gearSet.accessory3.rareness = pieceRareness; break
                }
            }
        }
    }

    return(
        <View key={pieceData.piece_id} style = {piece_in_list.wrapper}>
            <TouchableOpacity style = {piece_in_list.first_row} onPress = {() => {updateGearSet()}}>
                <View style = {piece_in_list.rareness_background_img_wrapper}>
                    <ImageBackground  source = {{uri: piece_rareness_background_image_path}} style = {piece_in_list.rareness_background_img_wrapper}>
                        <View style = {piece_in_list.img_wrapper}>
                            <Image source = { {uri: ImgPathConsts.rootAssetsImgPath + pieceData.image_path ||
                                ImgPathConsts.piecePlaceholderImage}} style = {shared_styles.img_in_view}/>
                        </View>
                    </ImageBackground>
                </View>

                <Text> {firstLetterCapitalizer(pieceData.name)} </Text>
            </TouchableOpacity>

            <StatsList key = {pieceData.piece_id} statsToShow = {pieceData.stats}/>
        </View>
    );
}

export default PieceInList