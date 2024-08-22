import React, { useCallback, useEffect, useState } from "react";
import Piece from "../Piece/Piece";
import { Text, View } from "react-native";
import set_of_pieces from "./SetOfPieceStyles";
import { gearSet} from "../../../../../utills/types";
import { ImgPathConsts } from "../../../../../utills/enums";
import { getDBConnection, getGearSetById } from "../../../../../utills/functions/db-service";

type Props = {
    title: string,
    gearSetId: number | undefined
}

function SetOfPieces ({title = "SET 1", gearSetId}: Props): React.JSX.Element {

    const [gearSet, setGearSet] = useState<gearSet>()

    const loadDataCallback = useCallback(async () => {
        try{
            const db = await getDBConnection()
            const setOfPieces = await getGearSetById(db, gearSetId || 1)

            setGearSet(setOfPieces)
        }
        catch(e){
            console.error(e)
        }
    }, [gearSetId])

    useEffect(() => {
        loadDataCallback()
    }, [loadDataCallback])

    function setGearPath(image_path: string | undefined): string{
        return  `asset:/img` + (image_path !== undefined ? image_path : ImgPathConsts.piecePlaceholderImage.substring(10))
    }
        
    const rootAssetsPath = `asset:/img`
    
    return(
        <View style = {set_of_pieces.wrapper}>
            <View style = {set_of_pieces.gear_box}>

                <Text style = {set_of_pieces.title}> {title} </Text>

                <View style = {set_of_pieces.start_of_set}>
                    <Piece pieceImgPath = {{uri: setGearPath(gearSet?.mainHand?.image_path)}}/>
                    <Piece pieceImgPath = {{uri: setGearPath(gearSet?.secondHand?.image_path)}}/>
                </View>

                <View style = {set_of_pieces.center_of_set_wrapper}>

                    <View style = {set_of_pieces.center_of_set}>           
                        <Piece pieceImgPath = {{uri: setGearPath(gearSet?.helmet?.image_path)}}/>
                        <Piece pieceImgPath = {{uri: setGearPath(gearSet?.accessory1?.image_path)}}/>
                    </View>

                    <View style = {set_of_pieces.center_of_set}>
                        <Piece pieceImgPath = {{uri: setGearPath(gearSet?.plate?.image_path)}}/>
                        <Piece pieceImgPath = {{uri: setGearPath(gearSet?.accessory2?.image_path)}}/>
                    </View>

                </View>
                
                <View style = {set_of_pieces.end_of_set}>           
                    <Piece pieceImgPath = {{uri: setGearPath(gearSet?.boots?.image_path)}}/>
                    <Piece pieceImgPath = {{uri: setGearPath(gearSet?.accessory3?.image_path)}}/>
                </View>
            </View>
        </View>
    );
}

export default SetOfPieces