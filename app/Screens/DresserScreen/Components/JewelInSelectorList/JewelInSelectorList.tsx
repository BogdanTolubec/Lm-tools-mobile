import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { ImgPathConsts} from "../../../../../utills/enums";
import { gearSet, jewel, Piece } from "../../../../../utills/types";
import StatsList from "../StatsList/StatsList";
import { firstLetterCapitalizer } from "../../../../../utills/functions/userFriendlyVisualisation.functions";
import { setGearImageBackgroundByRareness } from "../../../../../utills/functions/images.functions";
import ImageInWrapper from "../../../../../Components/ImageInWrapper/ImageInWrapper";
import piece_in_selector_list from "../PieceInSelectorList/PieceInSelectorList.styles";
import shared_styles from "../../../../../utills/sharedStyles.styles";

type Props = {
    gearSet: gearSet | undefined,
    selectedJewelInPiece: jewel | undefined,
    selectedJewelInPieceId: number,
    listJewel: jewel | undefined,
    piece: Piece | undefined,
    setGearSet: React.Dispatch<React.SetStateAction<gearSet>>,
}

function JewelInList({gearSet, selectedJewelInPiece, listJewel, piece, selectedJewelInPieceId, setGearSet}: Props): React.JSX.Element {

    let item_rareness_background_image_path = setGearImageBackgroundByRareness(listJewel?.rareness)

    function updatePiece(newJewel: jewel | undefined, piece: Piece | undefined): void {

        if(piece && newJewel && gearSet){
            let isJewelValid: boolean = true
            let keyOfUpdatedGearSet: keyof typeof gearSet
            let updatedGearSet: gearSet = {
                ...gearSet
            }

            for(const pieceJewel of piece.jewels){ //same type of jewel in one piece is restricted!
                if(pieceJewel?.jewel_id === newJewel.jewel_id && ( selectedJewelInPiece ? selectedJewelInPiece.jewel_id !== newJewel.jewel_id : true))
                    isJewelValid = false
            }

            if(isJewelValid && updatedGearSet){

                for(keyOfUpdatedGearSet in updatedGearSet){    
                    if(keyOfUpdatedGearSet === piece.type){
                        updatedGearSet[keyOfUpdatedGearSet]!.jewels[selectedJewelInPieceId] = newJewel // not null operaor because of check on not-null in previous lines
                    }
                }
    
                setGearSet(updatedGearSet)
            }
        }
    }

    return(
        <View style = {piece_in_selector_list.wrapper}>
            <TouchableOpacity style = {piece_in_selector_list.first_row}>
                <View style = {piece_in_selector_list.rareness_background_img_wrapper}>
                    <ImageBackground  source = {{uri: item_rareness_background_image_path}} style = {piece_in_selector_list.rareness_background_img_wrapper}>
                        <ImageInWrapper wrapperStyles = {piece_in_selector_list.img_wrapper}
                            imageSource = { ImgPathConsts.rootAssetsImgPath + listJewel?.imagePath ||
                                ImgPathConsts.jewelsPlaceHolderImage} 
                                    onPress = {() => {updatePiece(listJewel, piece)}}/>
                    </ImageBackground>
                </View>

                <Text style = {shared_styles.stats_text}> {firstLetterCapitalizer(listJewel?.name || "")} </Text>
            </TouchableOpacity>

            <StatsList statsToShow = {listJewel?.stats}/>
        </View>
    );
}

export default JewelInList