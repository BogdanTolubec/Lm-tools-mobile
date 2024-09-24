import React, { useState } from "react"
import { View } from "react-native"
import piece_info from "./PieceInfo.styles"
import ModalComponent from "../../../../../Components/ModalComponent/ModalComponent"
import PieceSelector from "../PieceSelector.modal/PieceSelector"
import { pieceTypes } from "../../../../../utills/enums"
import { gearSet, Piece } from "../../../../../utills/types"
import shared_styles from "../../../../../utills/sharedStyles.styles"
import PieceOfSet from "../Piece/Piece"

type Props = {
    pieceSelected: Piece | undefined,
    pieceTypeSelected: pieceTypes,
    gearSetSelected: gearSet
}

function PieceInfo({pieceSelected, pieceTypeSelected, gearSetSelected}: Props): React.JSX.Element {

    const [isPieceSelectorModalActive, setIsPieceSelectorModalActive] = useState<boolean>(false)

    return(
        <View style = {shared_styles.modal_box_default_wrapper}>

            <PieceOfSet piece = {pieceSelected} onPress = {() => {setIsPieceSelectorModalActive(!isPieceSelectorModalActive)}}/>
            

            <ModalComponent visible = {isPieceSelectorModalActive} setVisible = {setIsPieceSelectorModalActive} children = {
                <PieceSelector pieceType = {pieceTypeSelected} gearSet = {gearSetSelected}/>
            }/>

        </View>
    )
}

export default PieceInfo