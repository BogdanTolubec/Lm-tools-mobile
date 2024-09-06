import React, { useCallback, useEffect, useState } from "react";
import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import dresser_screen from "./DresserScreenStyles";
import { ImgPathConsts, pieceTypes } from "../../../../utills/enums";
import SetOfPieces from "../Components/SetOfPieces/SetOfPieces";
import { getAllGearSets, getDBConnection, getGearSetById, updateGearSet } from "../../../../utills/functions/db-service";
import Swapper from "../../../../Components/Swapper/Swapper";
import { gearSet, gearSetData } from "../../../../utills/types";
import ModalComponent from "../../../../Components/ModalComponent/ModalComponent";
import PieceSelector from "../Components/PieceSelector/PieceSelector";

function DresserScreen(): React.JSX.Element{

    const [currentGearSetData, setCurrentGearSetData] = useState<gearSetData>({id: 1, title: "MIX"})
    const [allGearSetsData, setAllGearsSetsData] = useState<gearSetData[]>([currentGearSetData])
    const [gearSet, setGearSet] = useState<gearSet>()

    const [isModalActive, setIsModalActive] = useState<boolean>(false)
    const [currentTypeOfGearSelected, setCurrentGearTypeSelected] = useState<pieceTypes>(pieceTypes.mainHand)

    const childToParent = (id: number): void => {
        setCurrentGearSetData(allGearSetsData[id])
    }

    const updateSetByClick = async (gearSet: gearSet) => {
        try{
            const db = await getDBConnection()
            const updatedGearSet = await updateGearSet(db, gearSet)
        }
        catch(e){
            console.log(e)
        }
    }

    function onPieceSelected(type: pieceTypes): void{
        setIsModalActive(!isModalActive)
        setCurrentGearTypeSelected(type)
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

                    <ModalComponent visible = {isModalActive} setVisible = {setIsModalActive} children = {
                        <PieceSelector pieceType = {currentTypeOfGearSelected} gearSet = {gearSet}/>
                    }/>
                    
                    <Swapper centerComponent = {
                        <SetOfPieces gearSet = {gearSet} title =  {currentGearSetData.title} onPieceSelected = {onPieceSelected}/>
                    } componentsCount = {allGearSetsData.length} childToParent = {childToParent}/>
                            
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
}

export default DresserScreen