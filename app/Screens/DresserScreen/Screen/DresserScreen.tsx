import React, { useCallback, useEffect, useState } from "react";
import { ImageBackground, SafeAreaView, View } from "react-native";
import dresser_screen from "./DresserScreenStyles";
import { ImgPathConsts } from "../../../../utills/enums";
import SetOfPieces from "../Components/SetOfPieces/SetOfPieces";
import { getDBConnection, getGearSetById, getPieces } from "../../../../utills/functions/db-service";
import { gearSet } from "../../../../utills/types";

function DresserScreen(): React.JSX.Element{

    const [currentGearSet, setCurrentGearSet] = useState<gearSet>()

    const loadDataCallback = useCallback(async () => {
        try{
            const db = await getDBConnection()
            const setOfPieces = await getGearSetById(db, 1)

            setCurrentGearSet(setOfPieces)
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
                    <SetOfPieces title = "MIX" gearSet = {currentGearSet}/>        
                </ImageBackground>
            </View>
        </SafeAreaView>

    );
}

export default DresserScreen