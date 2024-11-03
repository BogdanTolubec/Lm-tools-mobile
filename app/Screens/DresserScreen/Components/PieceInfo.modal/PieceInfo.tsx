import React, { useEffect, useState } from "react"
import { View } from "react-native"
import piece_info from "./PieceInfo.styles"
import { IconPathConsts, pieceTypes, rareness } from "../../../../../utills/enums"
import { gearSet,  jewel,  Piece } from "../../../../../utills/types"
import PieceOfSet from "../Piece/Piece"
import StatsList from "../StatsList/StatsList"
import Jewel from "../Jewel/Jewel"
import ModalComponent from "../../../../../Components/ModalComponent/ModalComponent"
import ItemsSelector from "../PieceOrJewelsSelector.modal/ItemsSelector"
import { getAllJewelsByRareness, getAllPiecesByTypeAndRareness, getDBConnection } from "../../../../../utills/functions/db-service"
import PieceInList from "../PieceInSelectorList/PieceInSelectorList"
import JewelInList from "../JewelInSelectorList/JewelInSelectorList"
import { calculatePieceStats } from "../../../../../utills/functions/statsCalculation.functions"
import ImageInWrapper from "../../../../../Components/ImageInWrapper/ImageInWrapper"

type Props = {
    pieceSelected: Piece | undefined,
    pieceType: pieceTypes,

    gearSetSelected: gearSet,
    isOuterModalVisible: boolean,

    setInnerModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
    setGearSet: React.Dispatch<React.SetStateAction<gearSet>>,
}

function PieceInfo({pieceSelected, pieceType, gearSetSelected, isOuterModalVisible, setInnerModalVisible, setGearSet}: Props): React.JSX.Element {

    const [isItemSelectorModalActive, setIsItemSelectorModalActive] = useState<boolean>(false)

    const [pieceToChange, setPieceToChange] = useState<Piece | undefined>()
    const [jewelSelected, setJewelSelected] = useState<jewel | undefined>(undefined)

    const [itemsList, setItemsList] = useState<React.JSX.Element[] | React.JSX.Element>(<></>)
    const [rarenessData, setRarenessData] = useState<Array<{rareness: rareness, iconPath: string}>>([])

    const [currentItemType, setCurrentItemType] = useState<"piece" | "jewel">("piece")
    const [selectedJewelInPieceId, setSelectedJewelInPieceId] = useState<number>(0)

    function onPieceSelection(): void{
        setRarenessData([
                {rareness: rareness.common, iconPath: IconPathConsts.commonChooseLableIcon}, 
                {rareness: rareness.uncommon, iconPath: IconPathConsts.uncommonChooseLableIcon}, 
                {rareness: rareness.rare, iconPath: IconPathConsts.rareChooseLableIcon}, 
                {rareness: rareness.epic, iconPath: IconPathConsts.epicChooseLableIcon}, 
                {rareness: rareness.legendary, iconPath: IconPathConsts.legendaryChooseLableIcon},
                {rareness: rareness.mythic, iconPath: IconPathConsts.mythicChooseLableIcon}]
        )
        
        setCurrentItemType("piece")
        onChooseRarenessLabelPress("piece", rareness.common, pieceToChange, undefined, pieceType)  // undefined is important :)
        setIsItemSelectorModalActive(!isItemSelectorModalActive)
    }

    function onJewelSelection(jewel: jewel | undefined, jewelInPieceId: number): void{
            setJewelSelected(jewel) //selected jewel save
            setSelectedJewelInPieceId(jewelInPieceId)

            setRarenessData([
                {rareness: rareness.common, iconPath: IconPathConsts.commonChooseLableIcon}, 
                {rareness: rareness.uncommon, iconPath: IconPathConsts.uncommonChooseLableIcon}, 
                {rareness: rareness.rare, iconPath: IconPathConsts.rareChooseLableIcon}, 
                {rareness: rareness.epic, iconPath: IconPathConsts.epicChooseLableIcon}, 
                {rareness: rareness.legendary, iconPath: IconPathConsts.legendaryChooseLableIcon}]
            ) // rareness for choose labels

            setCurrentItemType("jewel")
            onChooseRarenessLabelPress("jewel", rareness.common, pieceToChange, jewel, undefined) // undefined in the end is important :)
            setIsItemSelectorModalActive(!isItemSelectorModalActive)
    }

    function onPieceInListPress(selectedPiece: Piece | undefined): void {
        setPieceToChange(selectedPiece)
    }

    async function getPiecesList(pieceType: pieceTypes, currentRarenessSelected: rareness): Promise<Piece[]> {
        try{
            const db = await getDBConnection()
            return await getAllPiecesByTypeAndRareness(db, pieceType, currentRarenessSelected)

        } catch(e){
            console.log("On piece in PieceInfo selection error: " + JSON.stringify(e))
            return []
        }
    }

    async function getJewelsList(currentRarenessSelected: rareness): Promise<jewel[]> {
        try{
            const db = await getDBConnection()
            return await getAllJewelsByRareness(db, currentRarenessSelected)

        } catch(e){
            console.log("On jewel in PieceInfo selection error: " + JSON.stringify(e))
            return []
        }
    }

    async function onChooseRarenessLabelPress(itemType: "piece" | "jewel",currentRareness: rareness, 
        pieceSelected: Piece | undefined, jewelSelected?: jewel | undefined, pieceType?: pieceTypes): Promise<void>{

        if(itemType === "piece" && pieceType){
                
            const piecesByTypeAndRareness = await getPiecesList(pieceType, currentRareness)
    
            setItemsList(
                piecesByTypeAndRareness.map((piece, index) => 
                    <PieceInList key = {index} piece = {piece} pieceType = {pieceType} gearSet = {gearSetSelected} 
                        onPress = {onPieceInListPress} setGearSet = {setGearSet}/>
                )
            )
        }

        if(itemType === "jewel"){
            try{
                const jewelsByTypeAndRareness = await getJewelsList(currentRareness)
    
                setItemsList(
                    jewelsByTypeAndRareness.map((listJewel, index) => 
                        <JewelInList key = {index} selectedJewelInPieceId = {selectedJewelInPieceId} piece = {pieceSelected} 
                            selectedJewelInPiece = {jewelSelected} listJewel = {listJewel} setGearSet = {setGearSet}
                            gearSet = {gearSetSelected}/>
                    )
                )
    
            } catch(e){
                console.log("On jewel in PieceInfo selection error: " + JSON.stringify(e))
            }
        }
    }

    useEffect(() => {
        setPieceToChange(pieceSelected)
    }, [pieceSelected])

    useEffect(() => {
        if(!isOuterModalVisible) setIsItemSelectorModalActive(false) // close inner modal if outer modal is closed (may be now I don't need it...)

        setInnerModalVisible(isItemSelectorModalActive) // send to dresser screen checking predicat on clothing outer modal
    }, [isItemSelectorModalActive ,isOuterModalVisible])

    return(
        <View style = {piece_info.wrapper}>

            <View style = {piece_info.gear_and_jewels_row}>

                <View style = {piece_info.piece_img_wrapper}>
                    <PieceOfSet piece = { pieceToChange } 
                        onPress = {() => {onPieceSelection()}}/>
                </View>
        
                <View style = {piece_info.jewels_wrapper}>
                    {
                        pieceToChange?.jewels.map((jewel, index) => 
                            {
                                return(
                                    <View key = { index } style = {piece_info.jewel_wrapper}>
                                        <Jewel jewel = {jewel} onPress = {
                                                () => {onJewelSelection(jewel, index)}
                                            }/>
                                    </View>
                                )
                            }
                        )
                    }
                </View>

            </View>
            
            <View style = {piece_info.temperSectionWrapper}>
                <ImageInWrapper imageSource = {IconPathConsts.temperedIcon} wrapperStyles = {piece_info.temperIconWrapper}/>
            </View>

            <View style = {piece_info.stats_wrapper}>
                <StatsList statsToShow = {calculatePieceStats(pieceToChange)}/>  
            </View>

            <ModalComponent visible = {isItemSelectorModalActive} setVisible = {setIsItemSelectorModalActive} children={
                <ItemsSelector itemType = {currentItemType} itemsList = {itemsList} rarenessData = {rarenessData} 
                    pieceSelected = {pieceToChange} pieceType = {pieceType} jewelSelected = {jewelSelected} 
                    onChooseRarenessLabelPress = {onChooseRarenessLabelPress}/>
            }/>   
        </View>
    )
}

export default PieceInfo