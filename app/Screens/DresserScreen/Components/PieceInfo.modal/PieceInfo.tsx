import React, { useEffect, useState } from "react"
import { View } from "react-native"
import piece_info from "./PieceInfo.styles"
import { ImgPathConsts } from "../../../../../utills/enums"
import { gearSet,  jewel,  Piece } from "../../../../../utills/types"
import PieceOfSet from "../Piece/Piece"
import StatsList from "../StatsList/StatsList"
import Jewel from "../Jewel/Jewel"
import ImageInWrapper from "../../../../../Components/ImageInWrapper/ImageInWrapper"
import ModalComponent from "../../../../../Components/ModalComponent/ModalComponent"
import PieceOrJewelsSelector from "../PieceOrJewelsSelector.modal/PieceOrJewelsSelector"

type Props = {
    pieceSelected: Piece | undefined,
    gearSetSelected: gearSet,
    isOuterModalVisible: boolean,
}

function PieceInfo({pieceSelected, gearSetSelected, isOuterModalVisible}: Props): React.JSX.Element {

    const [isPieceSelectorModalActive, setIsPieceSelectorModalActive] = useState<boolean>(false)
    
    const [pieceToChange, setPieceToChange] = useState<Piece | undefined>(undefined)
    const [jewelToChange, setJewelToChange] = useState<jewel | undefined>(undefined)

    function onPieceOrJewelSelection(piece?: Piece, jewel?: jewel): void{
        if(piece){
            setPieceToChange(pieceSelected)
            setJewelToChange(undefined)
            setIsPieceSelectorModalActive(!isPieceSelectorModalActive)
        }

        if(jewel){
            setJewelToChange(jewel)
            setPieceToChange(undefined)
            setIsPieceSelectorModalActive(!isPieceSelectorModalActive)
        }
    }

    useEffect(() => {
        if(!isOuterModalVisible)
            setIsPieceSelectorModalActive(false)
    }, [isOuterModalVisible])

    return(
        <View style = {piece_info.wrapper}>

            <View style = {piece_info.gear_and_jewels_row}>

                <View style = {piece_info.piece_img_wrapper}>
                    <PieceOfSet piece = { pieceSelected } 
                    onPress = {() => {onPieceOrJewelSelection(pieceSelected)}}/>
                </View>

                <View style = {piece_info.jewels_wrapper}>
                    {
                        pieceSelected?.jewels.map((jewel, index) => 
                            {
                                if(jewel) return(
                                    <View key = { index } style = {piece_info.jewel_wrapper}>
                                        <Jewel jewel = {jewel} onPress = {() => {onPieceOrJewelSelection(undefined, jewel)}}/>
                                    </View>
                                )

                                else return(
                                    <ImageInWrapper key = {index} imageSource = {ImgPathConsts.jewelsPlaceHolderImage} 
                                        wrapperStyles = {piece_info.jewel_wrapper}/>
                                )
                            }
                        )
                    }
                </View>

            </View>  

            <View style = {piece_info.stats_wrapper}>
                <StatsList statsToShow = {pieceSelected?.stats}/>  
            </View>

            <ModalComponent visible = {isPieceSelectorModalActive} setVisible = {setIsPieceSelectorModalActive} children={
                <PieceOrJewelsSelector pieceToChange = {pieceToChange} jewelToChange = {jewelToChange}
                    gearSet = {gearSetSelected} selectedPiece = {pieceSelected}/>
            }/>   
        </View>
    )
}

export default PieceInfo