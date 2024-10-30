import React from "react";
import { Alert, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { ImgPathConsts, pieceTypes} from "../../../../../utills/enums";
import { gearSet, Piece } from "../../../../../utills/types";
import StatsList from "../StatsList/StatsList";
import { firstLetterCapitalizer } from "../../../../../utills/functions/userFriendlyVisualisation.functions";
import { setGearImageBackgroundByRareness } from "../../../../../utills/functions/images.functions";
import ImageInWrapper from "../../../../../Components/ImageInWrapper/ImageInWrapper";
import piece_in_selector_list from "./PieceInSelectorList.styles";

type Props = {
    piece: Piece | undefined,
    pieceType: pieceTypes | undefined,

    gearSet: gearSet | undefined,
    onPress: (selectedPiece: Piece | undefined) => void,

    setGearSet: React.Dispatch<React.SetStateAction<gearSet>>
}

function PieceInList({piece, pieceType, gearSet, onPress, setGearSet}: Props): React.JSX.Element {

    let item_rareness_background_image_path = setGearImageBackgroundByRareness(piece?.rareness)

    function updateGearSet(piece: Piece | undefined, pieceType: pieceTypes | undefined): void {
        if(gearSet && piece){
            let keyOfUpdatedGearSet: keyof typeof gearSet
            let updatedGearSet: gearSet = {
                ...gearSet
            }

            for(keyOfUpdatedGearSet in updatedGearSet){
                if(piece.type === keyOfUpdatedGearSet){
                    updatedGearSet[keyOfUpdatedGearSet] = piece
                    setGearSet(updatedGearSet)
                }
            }

        }
    }

    return(
        <View style = {piece_in_selector_list.wrapper}>
            <TouchableOpacity style = {piece_in_selector_list.first_row}>
                <View style = {piece_in_selector_list.rareness_background_img_wrapper}>
                    <ImageBackground  source = {{uri: item_rareness_background_image_path}} style = {piece_in_selector_list.rareness_background_img_wrapper}>
                        <ImageInWrapper wrapperStyles = {piece_in_selector_list.img_wrapper}
                            imageSource = { ImgPathConsts.rootAssetsImgPath + piece?.imagePath ||
                                ImgPathConsts.jewelsPlaceHolderImage} onPress = {() => {
                                        updateGearSet(piece, pieceType)
                                        onPress(piece)
                                    }}/>
                    </ImageBackground>
                </View>

                <Text> {firstLetterCapitalizer(piece?.name || "")} </Text>
            </TouchableOpacity>

            <StatsList statsToShow = {piece?.stats}/>
        </View>
    );
}

export default PieceInList