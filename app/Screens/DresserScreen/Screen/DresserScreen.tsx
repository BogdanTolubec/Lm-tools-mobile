import React, { useCallback, useEffect, useState } from "react";
import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import dresser_screen from "./DresserScreenStyles";
import { ImgPathConsts, pieceTypes } from "../../../../utills/enums";
import SetOfPieces from "../Components/SetOfPieces/SetOfPieces";
import { getAllGearSets, getDBConnection } from "../../../../utills/functions/db-service";
import Swapper from "../../../../Components/Swapper/Swapper";
import { gearSetData } from "../../../../utills/types";
import ModalComponent from "../../../../Components/ModalComponent/ModalComponent";
import PieceSelector from "../Components/PieceSelector/PieceSelector";

function DresserScreen(): React.JSX.Element{

    const [currentGearSetData, setCurrentGearSetData] = useState<gearSetData>({id: 1, title: "MIX"})
    const [allGearSetsData, setAllGearsSetsData] = useState<gearSetData[]>([currentGearSetData])

    const [isModalActive, setIsModalActive] = useState<boolean>(false)
    const [currentTypeOfGearSelected, setCurrentGearTypeSelected] = useState<string>(pieceTypes.mainHand)

    const childToParent = (returnData: any): void => {
        setCurrentGearSetData(returnData)
    }

    function onPieceSelected(type: string): void{
        if(type in pieceTypes){
            setIsModalActive(!isModalActive)
            setCurrentGearTypeSelected(type)
        }
    }

    const loadDataCallback = useCallback(async () => {
        try{
            const db = await getDBConnection()
            const allGearSets = await getAllGearSets(db)

            setAllGearsSetsData(allGearSets)
        }
        catch(e){
            console.error(e)
        }
    }, [])

    useEffect(() => {
        loadDataCallback()
    }, [loadDataCallback])
    
    return(
        <SafeAreaView>
            <View style = {dresser_screen.wrapper}>
                <ImageBackground style = {dresser_screen.backgroundImg} source = {{uri: ImgPathConsts.backgroundImage}} resizeMode = "cover">

                    <ModalComponent visible = {isModalActive} setVisible = {setIsModalActive} children = {
                        <PieceSelector/>
                    }/>
                    
                    <Swapper centerComponent = {
                        <SetOfPieces title = {currentGearSetData.title} gearSetId = {currentGearSetData.id} onPieceSelected = {onPieceSelected}/>
                    } componentDataArray = {allGearSetsData} childToParent = {childToParent}/>
                            
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
}

export default DresserScreen