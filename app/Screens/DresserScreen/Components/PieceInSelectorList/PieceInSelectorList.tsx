import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { ImgPathConsts, pieceTypes} from "../../../../../utills/enums";
import { gearSet, Piece } from "../../../../../utills/types";
import StatsList from "../StatsList/StatsList";
import { firstLetterCapitalizer } from "../../../../../utills/functions/userFriendlyVisualisation.functions";
import { setGearImageBackgroundByRareness } from "../../../../../utills/functions/images.functions";
import ImageInWrapper from "../../../../../Components/ImageInWrapper/ImageInWrapper";
import piece_in_selector_list from "./PieceInSelectorList.styles";

type Props = {
    piece: Piece | undefined,

    gearSet: gearSet | undefined,
}

function PieceInList({piece, gearSet}: Props): React.JSX.Element {

    let item_rareness_background_image_path = setGearImageBackgroundByRareness(piece?.rareness)

    function updateGearSet(piece: Piece | undefined): void {
        if(gearSet){
            switch (piece?.type){
                case pieceTypes.mainHand: {
                    gearSet.mainHand = piece; gearSet.mainHand.rareness = piece.rareness; break
                }

                case pieceTypes.helmet: {
                    gearSet.helmet = piece; gearSet.helmet.rareness = piece.rareness; break
                }

                case pieceTypes.plate: {
                    gearSet.plate = piece; gearSet.plate.rareness = piece.rareness; break
                }

                case pieceTypes.boots: {
                    gearSet.boots = piece; gearSet.boots.rareness = piece.rareness; break
                }

                case pieceTypes.secondHand: {
                    gearSet.secondHand = piece; gearSet.secondHand.rareness = piece.rareness; break
                }

                case pieceTypes.accessory1: {
                    gearSet.accessory1 = piece; gearSet.accessory1.rareness = piece.rareness; break
                }

                case pieceTypes.accessory2: {
                    gearSet.accessory2 = piece; gearSet.accessory2.rareness = piece.rareness; break
                }

                case pieceTypes.accessory3: {
                    gearSet.accessory3 = piece; gearSet.accessory3.rareness = piece.rareness; break
                }
            }
        }
    }

    return(
        <View style = {piece_in_selector_list.wrapper}>
            <TouchableOpacity style = {piece_in_selector_list.first_row} onPress = {() => {updateGearSet(piece)}}>
                <View style = {piece_in_selector_list.rareness_background_img_wrapper}>
                    <ImageBackground  source = {{uri: item_rareness_background_image_path}} style = {piece_in_selector_list.rareness_background_img_wrapper}>
                        <ImageInWrapper wrapperStyles = {piece_in_selector_list.img_wrapper}
                            imageSource = { ImgPathConsts.rootAssetsImgPath + piece?.imagePath ||
                                ImgPathConsts.jewelsPlaceHolderImage}/>
                    </ImageBackground>
                </View>

                <Text> {firstLetterCapitalizer(piece?.name || "")} </Text>
            </TouchableOpacity>

            <StatsList statsToShow = {piece?.stats}/>
        </View>
    );
}

export default PieceInList