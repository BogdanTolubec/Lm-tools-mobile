import React from "react";
import { ImageBackground, View } from "react-native";
import { ImgPathConsts } from "../../../../../utills/enums";
import { setGearImageBackgroundByRareness } from "../../../../../utills/functions/images.functions";
import { jewel } from "../../../../../utills/types";
import shared_styles from "../../../../../utills/sharedStyles.styles";
import jewels_in_piece from "./JewelsInPiece.styles";
import ImageInWrapper from "../../../../../Components/ImageInWrapper/ImageInWrapper";

type Props = {
    jewels: Array<jewel | undefined> | undefined,
}

function JewelsInPiece({jewels}: Props): React.JSX.Element {

    if(jewels){ return(
        <View style = {jewels_in_piece.wrapper}>
            {   
                jewels.map((jewel, index) => {
                    const jewel_rareness_background_image_path = jewel ? setGearImageBackgroundByRareness(jewel.rareness)
                        : ImgPathConsts.jewelsPlaceHolderImage

                        return (
                            <View key = {index} style = {jewels_in_piece.jewel_wrapper}>
                                <ImageBackground source = {{uri: jewel_rareness_background_image_path}} style = {shared_styles.img_in_view}>
                                        <ImageInWrapper wrapperStyles = {jewels_in_piece.jewel_img_wrapper} 
                                            imageSource = { jewel?.image_path ? 
                                                (ImgPathConsts.rootAssetsImgPath + jewel?.image_path) :
                                                ImgPathConsts.jewelsPlaceHolderImage
                                            }/>
                                </ImageBackground>
                            </View>
                        )
                        }
                    )
            }
        </View>
    )}

    else{
        return(
            <View style = {jewels_in_piece.wrapper}>
                <View style = {jewels_in_piece.jewel_wrapper}>
                    <ImageBackground source = {{uri: ImgPathConsts.jewelsPlaceHolderImage}} style = {shared_styles.img_in_view}/>
                </View>
                
                <View style = {jewels_in_piece.jewel_wrapper}>
                    <ImageBackground source = {{uri: ImgPathConsts.jewelsPlaceHolderImage}} style = {shared_styles.img_in_view}/>
                </View>

                <View style = {jewels_in_piece.jewel_wrapper}>
                    <ImageBackground source = {{uri: ImgPathConsts.jewelsPlaceHolderImage}} style = {shared_styles.img_in_view}/>
                </View>
            </View>
    )}
}

export default JewelsInPiece