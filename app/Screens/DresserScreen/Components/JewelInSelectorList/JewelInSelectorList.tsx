import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { ImgPathConsts} from "../../../../../utills/enums";
import { jewel, Piece } from "../../../../../utills/types";
import StatsList from "../StatsList/StatsList";
import { firstLetterCapitalizer } from "../../../../../utills/functions/userFriendlyVisualisation.functions";
import { setGearImageBackgroundByRareness } from "../../../../../utills/functions/images.functions";
import ImageInWrapper from "../../../../../Components/ImageInWrapper/ImageInWrapper";
import piece_in_selector_list from "../PieceInSelectorList/PieceInSelectorList.styles";
import shared_styles from "../../../../../utills/sharedStyles.styles";

type Props = {
    selectedJewel: jewel | undefined,
    selectedJewelInPieceId: number,
    listJewel: jewel | undefined,
    piece: Piece | undefined,
}

function JewelInList({selectedJewel, listJewel, piece, selectedJewelInPieceId}: Props): React.JSX.Element {

    let item_rareness_background_image_path = setGearImageBackgroundByRareness(listJewel?.rareness)

    function updateGearSet(newJewel: jewel | undefined, piece: Piece | undefined): void {

        if(piece && newJewel){
            let isJewelValid = true

            for(const pieceJewel of piece.jewels){ //same type of jewel in one piece is restricted!
                if(pieceJewel?.jewel_id === newJewel.jewel_id && ( selectedJewel ? selectedJewel.jewel_id !== newJewel.jewel_id : true))
                    isJewelValid = false
            }

            if(isJewelValid)
                piece.jewels[selectedJewelInPieceId] = newJewel     
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
                                    onPress = {() => {updateGearSet(listJewel, piece)}}/>
                    </ImageBackground>
                </View>

                <Text style = {shared_styles.stats_text}> {firstLetterCapitalizer(listJewel?.name || "")} </Text>
            </TouchableOpacity>

            <StatsList statsToShow = {listJewel?.stats}/>
        </View>
    );
}

export default JewelInList