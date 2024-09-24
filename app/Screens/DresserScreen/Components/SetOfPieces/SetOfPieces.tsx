import React from "react";
import { Text, View } from "react-native";
import set_of_pieces from "./SetOfPiece.styles";
import { gearSet, Piece} from "../../../../../utills/types";
import { ImgPathConsts, pieceTypes } from "../../../../../utills/enums";
import MenuIcon from "../../../../../Components/MenuIcon/MenuIcon";
import { gearSetPlaceHolder } from "../../../../../utills/consts";
import PieceOfSet from "../Piece/Piece";

type Props = {
    title: string | null,
    gearSet: gearSet,
    onPieceSelected: (piece: Piece | undefined, pieceType: pieceTypes) => void,
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
                    <PieceOfSet piece = {gearSet.mainHand}
                    onPress = {() => onPieceSelected(gearSet?.mainHand, pieceTypes.mainHand)} />

                    <PieceOfSet piece = {gearSet.secondHand}
                    onPress = {() => onPieceSelected(gearSet?.secondHand, pieceTypes.secondHand)} />
                </View>

                <View style = {set_of_pieces.center_of_set_wrapper}>

                    <View style = {set_of_pieces.center_of_set}>           
                        <PieceOfSet piece = {gearSet.helmet}
                        onPress = {() => onPieceSelected(gearSet?.helmet, pieceTypes.helmet)} />

                        <PieceOfSet piece = {gearSet.accessory1}
                        onPress = {() => onPieceSelected(gearSet?.accessory1, pieceTypes.accessory1)}/>
                    </View>

                    <View style = {set_of_pieces.center_of_set}>
                        <PieceOfSet piece = {gearSet.plate}
                        onPress = {() => onPieceSelected(gearSet?.plate, pieceTypes.plate)} />

                        <PieceOfSet piece = {gearSet.accessory2}
                        onPress = {() => onPieceSelected(gearSet?.accessory2, pieceTypes.accessory2)} />
                    </View>

                </View>
                
                    <View style = {set_of_pieces.end_of_set}>           
                        <PieceOfSet piece = {gearSet.boots}
                        onPress = {() => onPieceSelected(gearSet?.boots, pieceTypes.boots)} />

                        <PieceOfSet piece = {gearSet.accessory3}
                        onPress = {() => onPieceSelected(gearSet?.accessory3, pieceTypes.accessory3)} />
                    </View>
                </View>
            </View>
    );
}

export default SetOfPieces