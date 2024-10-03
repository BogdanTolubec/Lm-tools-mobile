import React, {  useCallback, useEffect, useState } from "react"
import { ScrollView, View } from "react-native";
import piece_selector from "./PieceOrJewelsSelector.styles";
import { IconPathConsts, rareness } from "../../../../../utills/enums";
import { getAllJewelsByRareness, getAllPiecesByTypeAndRareness , getDBConnection } from "../../../../../utills/functions/db-service";
import { gearSet, jewel, Piece } from "../../../../../utills/types";
import PieceInList from "../PieceInSelectorList/PieceInSelectorList";
import ImageInWrapper from "../../../../../Components/ImageInWrapper/ImageInWrapper";
import JewelInList from "../JewelInSelectorList/JewelInSelectorList";

type Props = {
    selectedPiece: Piece | undefined,
    pieceToChange?: Piece | undefined,
    jewelToChange?: jewel,
    gearSet?: gearSet,
}

function PieceOrJewelsSelector({selectedPiece, pieceToChange, jewelToChange, gearSet}: Props): React.JSX.Element {

    const [piecesByTypeAndRareness, setPiecesByTypeAndRareness] = useState<Piece[]>([])
    const [jewelsByRareness, setJewelsByRareness] = useState<jewel[]>([])

    const [currentRarenessSelected, setCurrentRarenessSelected] = useState<rareness>(rareness.common)
    const chooseLabelDataArray: Array<{rareness: rareness, iconPath: string}> = jewelToChange ?
    [
        {rareness: rareness.common, iconPath: IconPathConsts.commonChooseLableIcon}, 
        {rareness: rareness.uncommon, iconPath: IconPathConsts.uncommonChooseLableIcon}, 
        {rareness: rareness.rare, iconPath: IconPathConsts.rareChooseLableIcon}, 
        {rareness: rareness.epic, iconPath: IconPathConsts.epicChooseLableIcon}, 
        {rareness: rareness.legendary, iconPath: IconPathConsts.legendaryChooseLableIcon}, 
    ] :

    [
        {rareness: rareness.common, iconPath: IconPathConsts.commonChooseLableIcon}, 
        {rareness: rareness.uncommon, iconPath: IconPathConsts.uncommonChooseLableIcon}, 
        {rareness: rareness.rare, iconPath: IconPathConsts.rareChooseLableIcon}, 
        {rareness: rareness.epic, iconPath: IconPathConsts.epicChooseLableIcon}, 
        {rareness: rareness.legendary, iconPath: IconPathConsts.legendaryChooseLableIcon},
        {rareness: rareness.mythic, iconPath: IconPathConsts.mythicChooseLableIcon}
    ]

    const itemInList = (piecesArray: Piece[], jewelsArray: jewel[], piece?: Piece, jewel?: jewel): 
        React.JSX.Element[] | React.JSX.Element => {

        if(piece) return(

            piecesArray.map((piece, index) => 
                <PieceInList key = {index} piece = {piece} gearSet = {gearSet}/>
            )
        )

        if(jewel) return(
            jewelsArray.map((jewelFromArray, index) =>
                <JewelInList key = {index} selectedJewel = {jewel} listJewel = {jewelFromArray} piece = {selectedPiece}/>
            )
        )

        else return (
            <></>
        )
    }

    const loadDataCallback = useCallback(async () => {
        try{
            const db = await getDBConnection()
            if(pieceToChange) 
                setPiecesByTypeAndRareness(await getAllPiecesByTypeAndRareness(db, pieceToChange.type, currentRarenessSelected))

            if(jewelToChange) 
                setJewelsByRareness(await getAllJewelsByRareness(db, currentRarenessSelected))
        }
        catch(e){
            console.error(e)
        }
    }, [pieceToChange, jewelToChange, currentRarenessSelected])

    useEffect(() => {
        loadDataCallback()
    }, [loadDataCallback])

    return(
        <View style = {piece_selector.wrapper}>
            <ScrollView style = {piece_selector.selector}>
                {   
                    itemInList(piecesByTypeAndRareness, jewelsByRareness, pieceToChange, jewelToChange)
                }
            </ScrollView>
            
            <View style = {piece_selector.filter_wrapper}>
                {
                    chooseLabelDataArray.map((data, index) => 
                        <ImageInWrapper key = {index} wrapperStyles = {piece_selector.choose_label_rareness_wrapper}
                            imageSource = {data.iconPath}
                            onPress = {() => {setCurrentRarenessSelected(data.rareness)}}/>
                    )
                }
            </View>
        </View>
    );
}

export default PieceOrJewelsSelector