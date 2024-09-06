import React from "react";
import Piece from "../Piece/Piece";
import { GestureResponderEvent, Text, View } from "react-native";
import set_of_pieces from "./SetOfPieceStyles";
import { gearSet} from "../../../../../utills/types";
import { ImgPathConsts, pieceTypes } from "../../../../../utills/enums";
import MenuIcon from "../../../../../Components/MenuIcon/MenuIcon";

type Props = {
    title: string,
    gearSet?: gearSet,
    onPieceSelected: (pieceType: pieceTypes) => void,
    onMenuClicked: () => void,
}

function SetOfPieces ({gearSet, title, onPieceSelected, onMenuClicked}: Props): React.JSX.Element {

    function setGearPath(image_path: string | undefined): string{
        return  ImgPathConsts.rootAssetsImgPath + (image_path !== undefined ? image_path :
                ImgPathConsts.piecePlaceholderImage.substring(10))
    }
    
    return(
        <View style = {set_of_pieces.wrapper}>
            <View style = {set_of_pieces.gear_box}>

                <View style = {set_of_pieces.first_row}>
                    <MenuIcon onPress = {() => {onMenuClicked()}}/>
                    <Text style = {set_of_pieces.title}> {title} </Text>
                </View>

                <View style = {set_of_pieces.start_of_set}>
                    <Piece pieceImgPath = {{uri: setGearPath(gearSet?.mainHand?.image_path)}} 
                    onPress = {() => onPieceSelected(pieceTypes.mainHand)} pieceRareness = {gearSet?.rarenessArray.mainHandRareness}/>

                    <Piece pieceImgPath = {{uri: setGearPath(gearSet?.secondHand?.image_path)}}
                    onPress = {() => onPieceSelected(pieceTypes.secondHand)} pieceRareness = {gearSet?.rarenessArray.secondHandRareness}/>
                </View>

                <View style = {set_of_pieces.center_of_set_wrapper}>

                    <View style = {set_of_pieces.center_of_set}>           
                        <Piece pieceImgPath = {{uri: setGearPath(gearSet?.helmet?.image_path)}}
                        onPress = {() => onPieceSelected(pieceTypes.helmet)} pieceRareness = {gearSet?.rarenessArray.helmetRareness}/>

                        <Piece pieceImgPath = {{uri: setGearPath(gearSet?.accessory1?.image_path)}}
                        onPress = {() => onPieceSelected(pieceTypes.accessory1)} pieceRareness = {gearSet?.rarenessArray.accessory1Rarenes}/>
                    </View>

                    <View style = {set_of_pieces.center_of_set}>
                        <Piece pieceImgPath = {{uri: setGearPath(gearSet?.plate?.image_path)}}
                        onPress = {() => onPieceSelected(pieceTypes.plate)} pieceRareness = {gearSet?.rarenessArray.plateRareness}/>

                        <Piece pieceImgPath = {{uri: setGearPath(gearSet?.accessory2?.image_path)}}
                        onPress = {() => onPieceSelected(pieceTypes.accessory2)} pieceRareness = {gearSet?.rarenessArray.accessory2Rareness}/>
                    </View>

                </View>
                
                    <View style = {set_of_pieces.end_of_set}>           
                        <Piece pieceImgPath = {{uri: setGearPath(gearSet?.boots?.image_path)}}
                        onPress = {() => onPieceSelected(pieceTypes.boots)} pieceRareness = {gearSet?.rarenessArray.bootsRareness}/>

                        <Piece pieceImgPath = {{uri: setGearPath(gearSet?.accessory3?.image_path)}}
                        onPress = {() => onPieceSelected(pieceTypes.accessory3)} pieceRareness = {gearSet?.rarenessArray.accessory3Rareness}/>
                    </View>
                </View>

            </View>
    );
}

export default SetOfPieces