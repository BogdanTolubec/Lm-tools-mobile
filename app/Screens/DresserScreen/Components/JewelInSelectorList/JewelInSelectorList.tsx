import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { ImgPathConsts} from "../../../../../utills/enums";
import { jewel, Piece } from "../../../../../utills/types";
import StatsList from "../StatsList/StatsList";
import { firstLetterCapitalizer } from "../../../../../utills/functions/userFriendlyVisualisation.functions";
import { setGearImageBackgroundByRareness } from "../../../../../utills/functions/images.functions";
import ImageInWrapper from "../../../../../Components/ImageInWrapper/ImageInWrapper";
import piece_in_selector_list from "../PieceInSelectorList/PieceInSelectorList.styles";

type Props = {
    selectedJewel: jewel | undefined,
    listJewel: jewel | undefined,
    piece: Piece | undefined,
}

function JewelInList({selectedJewel, listJewel, piece}: Props): React.JSX.Element {

    let item_rareness_background_image_path = setGearImageBackgroundByRareness(listJewel?.rareness)

    function updateGearSet(newJewel: jewel | undefined, piece: Piece | undefined): void {
        console.log("Im workin!")
        if(piece && newJewel){
            let isJewelValid = true

            for(const pieceJewel of piece.jewels){ //same type of jewel in one piece is restricted!
                if(pieceJewel?.jewel_id === newJewel.jewel_id && selectedJewel?.jewel_id !== newJewel.jewel_id)
                    isJewelValid = false
            }

            if(isJewelValid){
                for(let i = 0; i < piece.jewels.length; i++){ //changing jewel
                    if(piece.jewels[i]?.jewel_id === selectedJewel?.jewel_id)
                        piece.jewels[i] = newJewel
                }
            }

            console.log("new piece: " + JSON.stringify(piece))
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

                <Text> {firstLetterCapitalizer(listJewel?.name || "")} </Text>
            </TouchableOpacity>

            <StatsList statsToShow = {listJewel?.stats}/>
        </View>
    );
}

export default JewelInList