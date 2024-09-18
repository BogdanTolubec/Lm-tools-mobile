import React from "react";
import { GestureResponderEvent, Image, ImageBackground, ImageSourcePropType, TouchableOpacity, View } from "react-native";
import piece from "./PieceStyles";
import { ImgPathConsts, rareness } from "../../../../../utills/enums";
import { setGearImageBackgroundByRareness } from "../../../../../utills/functions/imagesFunctions";
import { jewel } from "../../../../../utills/types";

type Props = {
    pieceImgPath: ImageSourcePropType | undefined, 
    jewelsArray?: Array<jewel | undefined>,
    pieceRareness: rareness | undefined,
    onPress?: (event: GestureResponderEvent) => void, 
}

function Piece({pieceImgPath, jewelsArray, onPress, pieceRareness = rareness.common}: Props): React.JSX.Element {

    const piece_rareness_background_image_path = setGearImageBackgroundByRareness(pieceRareness)
    
    return(
        <TouchableOpacity onPress = {onPress} style = {piece.wrapper}>
            <ImageBackground source = {{uri: piece_rareness_background_image_path}} style = {piece.rareness_background_img}>
                <View style = {piece.piece_img_wrapper}>
                    <ImageBackground style = {piece.piece_img} source = {pieceImgPath}>
                        <View style = {piece.jewels_wrapper}>
                            {
                            jewelsArray?.map((jewel, index) => {
                                const jewel_rareness_background_image_path = jewel ? setGearImageBackgroundByRareness(jewel.rareness)
                                : ImgPathConsts.jewelsPlaceHolderImage

                                return (
                                    <View key = {index} style = {piece.jewel_wrapper}>
                                        <ImageBackground source = {{uri: jewel_rareness_background_image_path}} style = {piece.img_in_view}>
                                            <View style = {piece.jewel_img_wrapper}>
                                                <Image style = {piece.img_in_view} 
                                                    source = {{uri: jewel?.image_path ? (ImgPathConsts.rootAssetsImgPath + jewel?.image_path) :
                                                        ImgPathConsts.jewelsPlaceHolderImage
                                                    }}/>
                                            </View>
                                        </ImageBackground>
                                    </View>
                                )
                                }
                            )}
                        </View>
                    </ImageBackground>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
}

export default Piece