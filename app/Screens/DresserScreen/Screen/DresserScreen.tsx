import React, { useCallback, useEffect, useState } from "react";
import { ImageBackground, SafeAreaView, View } from "react-native";
import dresser_screen from "./DresserScreenStyles";
import { ImgPathConsts } from "../../../../utills/enums";
import SetOfPieces from "../Components/SetOfPieces/SetOfPieces";
import { getAllGearSets, getDBConnection } from "../../../../utills/functions/db-service";
import Swapper from "../../../../Components/Swapper/Swapper";
import { gearSetData } from "../../../../utills/types";

function DresserScreen(): React.JSX.Element{

    const [currentGearSetData, setCurrentGearSetData] = useState<gearSetData>({id: 1, title: "MIX"})
    const [allGearSetsData, setAllGearsSetsData] = useState<gearSetData[]>([currentGearSetData])

    const childToParent = (returnData: any): void => {
        setCurrentGearSetData(returnData)
        console.log("Current: " + JSON.stringify(currentGearSetData))
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
                    
                    <Swapper centerComponent = {
                        <SetOfPieces title = {currentGearSetData.title} gearSetId = {currentGearSetData.id}/>
                    } componentDataArray = {allGearSetsData} childToParent = {childToParent}/>
                            
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
}

export default DresserScreen