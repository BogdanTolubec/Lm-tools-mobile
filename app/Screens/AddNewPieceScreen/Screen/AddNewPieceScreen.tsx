import React, { useState } from "react";
import { Alert, GestureResponderEvent, ImageBackground, Text, TextInput, View } from "react-native";
import add_new_piece from "./AddNewPieceScreenStyles";
import { ImgPathConsts } from "../../../../utills/enums";
import NumericInput from "../../../../Components/NumericInput/NumericInput";
import TextInputForms from "../../../../Components/TextInputForms/TextInputForms";
//import ErrorPage from "../../ErrorPage/ErrorPage";

function AddNewPieceScreen(): React.JSX.Element {

    const [pieceName, setPieceName] = useState('')
    const [pieceType, setPieceType] = useState('hand 1')
    const [pieceRareness, setPieceRareness] = useState('common')

    const [armyAtk, setArmyAtk] = useState(0)
    const [armyHP, setArmyHp] = useState(0)
    const [armyDeff, setArmyDeff] = useState(0)

    const [infantryAtk, setInfantryAtk] = useState(0)
    const [infantryHP, setInfantryHp] = useState(0)
    const [infantryDeff, setInfantryDeff] = useState(0)

    const [rangedAtk, setRangedAtk] = useState(0)
    const [rangedHP, setRangedHp] = useState(0)
    const [rangedDeff, setRangedDeff] = useState(0)

    const [cavalryAtk, setCavalryAtk] = useState(0)
    const [cavalryHP, setCavalryHp] = useState(0)
    const [cavalryDeff, setCavalryDeff] = useState(0)

    const [pieceIcon, setPieceIcon] = useState('')

    const addPiece = () => {

        if(pieceIcon === '')
        return Alert.alert("Image is invalid. Please check it")

        try{

            const formData = new FormData()

            formData.append("name", pieceName)
            formData.append("type", pieceType)
            formData.append("rareness", pieceRareness)
            formData.append("armyAtk", armyAtk)
            formData.append("armyHp", armyHP)
            formData.append("armyDeff", armyDeff)
            formData.append("pieceIcon", pieceIcon)

            formData.append("infantryAtk", infantryAtk)
            formData.append("infantryHp", infantryHP)
            formData.append("infantryDeff", infantryDeff)

            formData.append("rangedAtk", rangedAtk)
            formData.append("rangedHp", rangedHP)
            formData.append("rangedDeff", rangedDeff)

            formData.append("cavalryAtk", cavalryAtk)
            formData.append("cavalryHp", cavalryHP)
            formData.append("cavalryDeff", cavalryDeff)

        } catch(e){
            return (<View></View>/*(<ErrorScreen/>)*/)
        }
    }

    /*function dropHandler(ev: GestureResponderEvent) {
        ev.preventDefault()
      
        if (ev.dataTransfer.items) {
            // If dropped items aren't files, reject them
            if (ev.dataTransfer.items[0].kind !== "file"){
                setPieceIcon("")
                return Alert.alert("Not a file uploaded!")
            }

            const img = ev.dataTransfer.items[0].getAsFile()

            if (img.type === "image/png" || img.type === "image/jpeg" || img.type === "image/jpg"){
              setPieceIcon(img)
            }

            else{
                Alert.alert("Your file is not an image!")
            }
        } else {
            const file = ev.dataTransfer.items[0]
            console.log(`… file.name = ${file.type}`)
        }
    }*/

    function dragOverHandler(ev: GestureResponderEvent) {
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
    }
    
    return(
        <View style = {add_new_piece.wrapper}>
            <ImageBackground style = {add_new_piece.backgroundImg} source = {ImgPathConsts.backgroundImage} resizeMode = "cover">

            <View style = {add_new_piece.form}>
                <View style = {add_new_piece.question}>
                    <Text style = {add_new_piece.label}> Name </Text>
                    <TextInputForms styles = {add_new_piece.input} setParentElementState = {setPieceName} maxLength = {80}/>
                </View>

                <View>
                    <Text style = {add_new_piece.label}> Rareness </Text>
                </View>
            </View>

               

            </ImageBackground>
        </View>
    );
}

export default AddNewPieceScreen