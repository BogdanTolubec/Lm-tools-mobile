import React, { useState } from "react"
import { Image, View } from "react-native"
import piece_info from "./PieceInfo.styles"
import ModalComponent from "../../../../../Components/ModalComponent/ModalComponent"
import PieceSelector from "../PieceSelector.modal/PieceSelector"
import { ImgPathConsts, pieceTypes } from "../../../../../utills/enums"
import { gearSet, Piece } from "../../../../../utills/types"
import shared_styles from "../../../../../utills/sharedStyles.styles"
import PieceOfSet from "../Piece/Piece"
import JewelsInPiece from "../JewelsInPiece/JewelsInPiece"
import StatsList from "../StatsList/StatsList"
import Jewel from "../Jewel/Jewel"
import ImageInWrapper from "../../../../../Components/ImageInWrapper/ImageInWrapper"

type Props = {
    pieceSelected: Piece | undefined,
    pieceTypeSelected: pieceTypes,
    gearSetSelected: gearSet
}

function PieceInfo({pieceSelected, pieceTypeSelected, gearSetSelected}: Props): React.JSX.Element {

    const [isPieceSelectorModalActive, setIsPieceSelectorModalActive] = useState<boolean>(false)

    return(
        <View style = {piece_info.wrapper}>

            <View style = {piece_info.gear_and_jewels_row}>

                <View style = {piece_info.piece_img_wrapper}>
                    <PieceOfSet piece = { pieceSelected } 
                    onPress = {() => {setIsPieceSelectorModalActive(!isPieceSelectorModalActive)}}/>
                </View>

                <View style = {piece_info.jewels_wrapper}>
                    {
                        pieceSelected?.jewels.map((jewel, index) => 
                            {
                                if(jewel){
                                    return(
                                        <View key = { index } style = {piece_info.jewel_wrapper}>
                                            <Jewel jewel = {jewel}/>
                                        </View>
                                    )
                                }

                                else {
                                    return(
                                        <ImageInWrapper key = {index} imageSource = {ImgPathConsts.jewelsPlaceHolderImage} 
                                            wrapperStyles = {piece_info.jewel_wrapper}/>
                                    )
                                }
                            }
                        )
                    }
                </View>

            </View>  

            <View>
                <StatsList statsToShow = {pieceSelected?.stats}/>  
            </View>     

            <ModalComponent visible = {isPieceSelectorModalActive} setVisible = {setIsPieceSelectorModalActive} children = {
                <PieceSelector pieceType = {pieceTypeSelected} gearSet = {gearSetSelected}/>
            }/>

        </View>
    )
}

export default PieceInfo