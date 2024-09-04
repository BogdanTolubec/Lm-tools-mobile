import React, { useCallback, useEffect, useState } from "react";
import Piece from "../Piece/Piece";
import { Text, View } from "react-native";
import set_of_pieces from "./SetOfPieceStyles";
import { gearSet} from "../../../../../utills/types";
import { ImgPathConsts, pieceTypes } from "../../../../../utills/enums";
import { getDBConnection, getGearSetById } from "../../../../../utills/functions/db-service";

type Props = {
    title: string,
    gearSetId: number | undefined,
    onPieceSelected: (pieceType: pieceTypes) => void
}

function SetOfPieces ({title = "SET 1", gearSetId = 1, onPieceSelected}: Props): React.JSX.Element {

    const [gearSet, setGearSet] = useState<gearSet>()
    const pieceImageSize = {height: 85, width: 85}

    const loadDataCallback = useCallback(async () => {
        try{
            const db = await getDBConnection()
            const setOfPieces = await getGearSetById(db, gearSetId)

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
        return  ImgPathConsts.rootAssetsImgPath + (image_path !== undefined ? image_path :
            ImgPathConsts.piecePlaceholderImage.substring(10))
    }
    
    return(
        <View style = {set_of_pieces.wrapper}>
            <View style = {set_of_pieces.gear_box}>

                <Text style = {set_of_pieces.title}> {title} </Text>

                <View style = {set_of_pieces.start_of_set}>
                    <Piece pieceImgPath = {{uri: setGearPath(gearSet?.mainHand?.image_path)}} 
                    onPress = {() => onPieceSelected(pieceTypes.mainHand)} pieceRareness = {gearSet?.rarenessArray[0]}/>

                    <Piece pieceImgPath = {{uri: setGearPath(gearSet?.secondHand?.image_path)}}
                    onPress = {() => onPieceSelected(pieceTypes.secondHand)} pieceRareness = {gearSet?.rarenessArray[4]}/>
                </View>

                <View style = {set_of_pieces.center_of_set_wrapper}>

                    <View style = {set_of_pieces.center_of_set}>           
                        <Piece pieceImgPath = {{uri: setGearPath(gearSet?.helmet?.image_path)}}
                        onPress = {() => onPieceSelected(pieceTypes.helmet)} pieceRareness = {gearSet?.rarenessArray[1]}/>

                        <Piece pieceImgPath = {{uri: setGearPath(gearSet?.accessory1?.image_path)}}
                        onPress = {() => onPieceSelected(pieceTypes.accessory)} pieceRareness = {gearSet?.rarenessArray[5]}/>
                    </View>

                    <View style = {set_of_pieces.center_of_set}>
                        <Piece pieceImgPath = {{uri: setGearPath(gearSet?.plate?.image_path)}}
                        onPress = {() => onPieceSelected(pieceTypes.plate)} pieceRareness = {gearSet?.rarenessArray[2]}/>

                        <Piece pieceImgPath = {{uri: setGearPath(gearSet?.accessory2?.image_path)}}
                        onPress = {() => onPieceSelected(pieceTypes.accessory)} pieceRareness = {gearSet?.rarenessArray[6]}/>
                    </View>

                </View>
                
                    <View style = {set_of_pieces.end_of_set}>           
                        <Piece pieceImgPath = {{uri: setGearPath(gearSet?.boots?.image_path)}}
                        onPress = {() => onPieceSelected(pieceTypes.boots)} pieceRareness = {gearSet?.rarenessArray[3]}/>

                        <Piece pieceImgPath = {{uri: setGearPath(gearSet?.accessory3?.image_path)}}
                        onPress = {() => onPieceSelected(pieceTypes.accessory)} pieceRareness = {gearSet?.rarenessArray[7]}/>
                    </View>
                </View>
            </View>
    );
}

export default SetOfPieces