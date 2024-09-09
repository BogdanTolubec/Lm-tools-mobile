import React, { useCallback, useEffect, useState } from "react";
import { ImageBackground, SafeAreaView, View } from "react-native";
import dresser_screen from "./DresserScreenStyles";
import { ImgPathConsts, pieceTypes } from "../../../../utills/enums";
import SetOfPieces from "../Components/SetOfPieces/SetOfPieces";
import { getAllGearSets, getDBConnection, getGearSetById, updateGearSet } from "../../../../utills/functions/db-service";
import Swapper from "../../../../Components/Swapper/Swapper";
import { gearSet, gearSetData } from "../../../../utills/types";
import ModalComponent from "../../../../Components/ModalComponent/ModalComponent";
import PieceSelector from "../Components/PieceSelector/PieceSelector";
import GearSetMenu from "../Components/GearSetMenu/GearSetMenu";
import { gearSetPlaceHolder } from "../../../../utills/consts";

function DresserScreen(): React.JSX.Element{

    const [currentGearSetData, setCurrentGearSetData] = useState<gearSetData>({id: 1, title: "MIX"})
    const [allGearSetsData, setAllGearsSetsData] = useState<gearSetData[]>([currentGearSetData])
    const [gearSet, setGearSet] = useState<gearSet>(gearSetPlaceHolder)

    const [isPieceSelectorModalActive, setIsPieceSelectorModalActive] = useState<boolean>(false)
    const [isMenuModalActive, setIsMenuModalActive] = useState<boolean>(false)

    const [currentTypeOfGearSelected, setCurrentGearTypeSelected] = useState<pieceTypes>(pieceTypes.mainHand)

    const childToParent = (id: number): void => {
        setCurrentGearSetData(allGearSetsData[id])
    }

    function onPieceSelected(type: pieceTypes): void {
        setIsPieceSelectorModalActive(!isPieceSelectorModalActive)
        setCurrentGearTypeSelected(type)
    }

    function onMenuClicked(): void {
        setIsMenuModalActive(!isMenuModalActive)
    }

    const loadGearSetsDataCallback = useCallback(async () => {
        try{
            const db = await getDBConnection()
            const allGearSets = await getAllGearSets(db)

            setAllGearsSetsData(allGearSets)
        }
        catch(e){
            console.error(e)
        }
    }, [])

    const loadGearSetCallback = useCallback(async () => {
        try{
            const db = await getDBConnection()
            const setOfPieces = await getGearSetById(db, currentGearSetData.id)

            setGearSet(setOfPieces)
        }
        catch(e){
            console.error(e)
        }
    }, [currentGearSetData])

    useEffect(() => {
        loadGearSetsDataCallback().then(() => {
            loadGearSetCallback()
        })
    }, [loadGearSetCallback])
    
    return(
        <SafeAreaView>
            <View style = {dresser_screen.wrapper}>
                <ImageBackground style = {dresser_screen.backgroundImg} source = {{uri: ImgPathConsts.backgroundImage}} resizeMode = "cover">

                    <ModalComponent visible = {isPieceSelectorModalActive} setVisible = {setIsPieceSelectorModalActive} children = {
                        <PieceSelector pieceType = {currentTypeOfGearSelected} gearSet = {gearSet}/>
                    }/>

                    <ModalComponent visible = {isMenuModalActive} setVisible = {setIsMenuModalActive} children={
                        <GearSetMenu gearSet = {gearSet}/>
                    }/>
                    
                    <Swapper centerComponent = {
                        <SetOfPieces gearSet = {gearSet} title =  {currentGearSetData.title} onPieceSelected = {onPieceSelected}
                        onMenuClicked = {onMenuClicked}/>
                    } componentsCount = {allGearSetsData.length} childToParent = {childToParent}/>
                            
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
}

export default DresserScreen