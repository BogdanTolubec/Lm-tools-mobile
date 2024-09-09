import React from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { ImgPathConsts, pieceTypes, rareness } from "../../../../../utills/enums";
import { gearSet, Pieces } from "../../../../../utills/types";
import piece_in_list from "./PieceInListStyles";
import StatsList from "../StatsList/StatsList";
import { firstLetterCapitalizer } from "../../../../../utills/functions/userFriendlyVisualisation";
import { setGearImageBackgroundByRareness } from "../../../../../utills/functions/imagesFunctions";
import { updateGearSet } from "../../../../../utills/functions/db-service";

type Props = {
    pieceData: Pieces,
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
                    gearSet.mainHand = pieceData; gearSet.rarenessArray.mainHandRareness = pieceRareness; break
                }

                case pieceTypes.helmet: {
                    gearSet.helmet = pieceData; gearSet.rarenessArray.helmetRareness = pieceRareness; break
                }

                case pieceTypes.plate: {
                    gearSet.plate = pieceData; gearSet.rarenessArray.plateRareness = pieceRareness; break
                }

                case pieceTypes.boots: {
                    gearSet.boots = pieceData; gearSet.rarenessArray.bootsRareness = pieceRareness; break
                }

                case pieceTypes.secondHand: {
                    gearSet.secondHand = pieceData; gearSet.rarenessArray.secondHandRareness = pieceRareness; break
                }

                case pieceTypes.accessory1: {
                    gearSet.accessory1 = pieceData; gearSet.rarenessArray.accessory1Rarenes = pieceRareness; break
                }

                case pieceTypes.accessory2: {
                    gearSet.accessory2 = pieceData; gearSet.rarenessArray.accessory2Rareness = pieceRareness; break
                }

                case pieceTypes.accessory3: {
                    gearSet.accessory3 = pieceData; gearSet.rarenessArray.accessory3Rareness = pieceRareness; break
                }
            }
        }
    }

    return(
        <View key={pieceData.id} style = {piece_in_list.wrapper}>
            <TouchableOpacity style = {piece_in_list.first_row} onPress = {() => {updateGearSet()}}>
                <View style = {piece_in_list.rareness_background_img_wrapper}>
                    <ImageBackground  source = {{uri: piece_rareness_background_image_path}} style = {piece_in_list.rareness_background_img_wrapper}>
                        <View style = {piece_in_list.img_wrapper}>
                            <Image source = { {uri: ImgPathConsts.rootAssetsImgPath + pieceData.image_path || ImgPathConsts.piecePlaceholderImage}}
                                style = {piece_in_list.image}/>
                        </View>
                    </ImageBackground>
                </View>

                <Text> {firstLetterCapitalizer(pieceData.name)} </Text>
            </TouchableOpacity>

            <StatsList key = {pieceData.id} piece = {pieceData}/>
        </View>
    );
}

export default PieceInList