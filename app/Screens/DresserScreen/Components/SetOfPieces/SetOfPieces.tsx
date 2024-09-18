import React from "react";
import Piece from "../Piece/Piece";
import { Text, View } from "react-native";
import set_of_pieces from "./SetOfPieceStyles";
import { gearSet} from "../../../../../utills/types";
import { ImgPathConsts, pieceTypes } from "../../../../../utills/enums";
import MenuIcon from "../../../../../Components/MenuIcon/MenuIcon";
import { gearSetPlaceHolder } from "../../../../../utills/consts";

type Props = {
    title: string | null,
    gearSet: gearSet,
    onPieceSelected: (pieceType: pieceTypes) => void,
    onMenuClicked: () => void,
    onTitleCklicked: () => void,
}

function SetOfPieces ({gearSet, title, onPieceSelected, onMenuClicked, onTitleCklicked}: Props): React.JSX.Element {

    if(gearSet === undefined)  gearSet = gearSetPlaceHolder 

    function setGearPath(image_path: string | undefined): string{
        return  ImgPathConsts.rootAssetsImgPath + (image_path !== undefined ? image_path :
                ImgPathConsts.piecePlaceholderImage.substring(10))
    }
    
    return(
        <View style = {set_of_pieces.wrapper}>
            <View style = {set_of_pieces.gear_box}>

                <View style = {set_of_pieces.first_row}>
                    <MenuIcon onPress = {() => {onMenuClicked()}}/>
                    <Text style = {set_of_pieces.title} onPress = {() => {
                       onTitleCklicked()
                        }}> {title == undefined ? ("Set " + gearSet.id, gearSet.title = "Set " + gearSet.id) : title /*yes '==' because handling null too*/} </Text>
                </View>

                <View style = {set_of_pieces.start_of_set}>
                    <Piece pieceImgPath = {{uri: setGearPath(gearSet?.mainHand?.image_path)}} 
                    onPress = {() => onPieceSelected(pieceTypes.mainHand)} pieceRareness = {gearSet.mainHand?.rareness}
                    jewelsArray = {[gearSet.mainHand?.jewels?.jewel_1, gearSet.mainHand?.jewels?.jewel_2, gearSet.mainHand?.jewels?.jewel_3]}/>

                    <Piece pieceImgPath = {{uri: setGearPath(gearSet?.secondHand?.image_path)}}
                    onPress = {() => onPieceSelected(pieceTypes.secondHand)} pieceRareness = {gearSet.secondHand?.rareness}
                    jewelsArray = {[gearSet.secondHand?.jewels?.jewel_1, gearSet.secondHand?.jewels?.jewel_2, gearSet.secondHand?.jewels?.jewel_3]}/>
                </View>

                <View style = {set_of_pieces.center_of_set_wrapper}>

                    <View style = {set_of_pieces.center_of_set}>           
                        <Piece pieceImgPath = {{uri: setGearPath(gearSet?.helmet?.image_path)}}
                        onPress = {() => onPieceSelected(pieceTypes.helmet)} pieceRareness = {gearSet.helmet?.rareness}
                        jewelsArray = {[gearSet.helmet?.jewels?.jewel_1, gearSet.helmet?.jewels?.jewel_2, gearSet.helmet?.jewels?.jewel_3]}/>

                        <Piece pieceImgPath = {{uri: setGearPath(gearSet?.accessory1?.image_path)}}
                        onPress = {() => onPieceSelected(pieceTypes.accessory1)} pieceRareness = {gearSet.accessory1?.rareness}
                        jewelsArray = {[gearSet.accessory1?.jewels?.jewel_1, gearSet.accessory1?.jewels?.jewel_2, gearSet.accessory1?.jewels?.jewel_3]}/>
                    </View>

                    <View style = {set_of_pieces.center_of_set}>
                        <Piece pieceImgPath = {{uri: setGearPath(gearSet?.plate?.image_path)}}
                        onPress = {() => onPieceSelected(pieceTypes.plate)} pieceRareness = {gearSet.plate?.rareness}
                        jewelsArray = {[gearSet.plate?.jewels?.jewel_1, gearSet.plate?.jewels?.jewel_2, gearSet.plate?.jewels?.jewel_3]}/>

                        <Piece pieceImgPath = {{uri: setGearPath(gearSet?.accessory2?.image_path)}}
                        onPress = {() => onPieceSelected(pieceTypes.accessory2)} pieceRareness = {gearSet.accessory2?.rareness}
                        jewelsArray = {[gearSet.accessory2?.jewels?.jewel_1, gearSet.accessory2?.jewels?.jewel_2, gearSet.accessory2?.jewels?.jewel_3]}/>
                    </View>

                </View>
                
                    <View style = {set_of_pieces.end_of_set}>           
                        <Piece pieceImgPath = {{uri: setGearPath(gearSet?.boots?.image_path)}}
                        onPress = {() => onPieceSelected(pieceTypes.boots)} pieceRareness = {gearSet.boots?.rareness}
                        jewelsArray = {[gearSet.boots?.jewels?.jewel_1, gearSet.boots?.jewels?.jewel_2, gearSet.boots?.jewels?.jewel_3]}/>

                        <Piece pieceImgPath = {{uri: setGearPath(gearSet?.accessory3?.image_path)}}
                        onPress = {() => onPieceSelected(pieceTypes.accessory3)} pieceRareness = {gearSet.accessory3?.rareness}
                        jewelsArray = {[gearSet.accessory3?.jewels?.jewel_1, gearSet.accessory3?.jewels?.jewel_2, gearSet.accessory3?.jewels?.jewel_3]}/>
                    </View>
                </View>
            </View>
    );
}

export default SetOfPieces