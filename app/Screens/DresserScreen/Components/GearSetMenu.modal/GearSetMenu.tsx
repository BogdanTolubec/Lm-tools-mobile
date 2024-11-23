import React from "react"
import { Alert, View } from "react-native";
import SubmitButton from "../../../../../Components/SubmitButton/SubmitButton";
import { createGearSet, deleteGearSetById, getDBConnection } from "../../../../../utills/functions/db-service";
import gear_set_menu from "./GearSetMenu.styles";
import { gearSet} from "../../../../../utills/types";

type Props = {
    title: string | null,
    gearSet: gearSet,
    changeGearSetsCount: () => void,
}

function GearSetMenu({gearSet, title, changeGearSetsCount}: Props): React.JSX.Element {

    const onCreateGearSet = async (): Promise<void> => {
        try{
            const db = await getDBConnection() 
            const result = await createGearSet(db)

            changeGearSetsCount()

            if(!result){
                Alert.alert("Cannot create new gear set...")
            }
        }
        catch(e){
            console.log(e)
        }
    }

    const onDeleteGearSet = async (): Promise<void> => {
        try{
            const db = await getDBConnection() 
            const result = await deleteGearSetById(db, gearSet.id)

            changeGearSetsCount()

            if(!result){
                Alert.alert("Cannot delete gear set...")
            }
        }
        catch(e){
            console.log(e)
        }
    }

    return(
        <View style = {gear_set_menu.wrapper}>
            <View style = {gear_set_menu.buttons_wrapper}>

                <View style = {gear_set_menu.button_wrapper}>
                    <SubmitButton title = "Add new gear set" onPress = {() => {onCreateGearSet()}}/>
                </View>

                <View style = {gear_set_menu.button_wrapper}>
                    <SubmitButton title = "Delete current gear set" onPress = {() => {onDeleteGearSet()}}/>
                </View>
                
            </View>
        </View>
    );
}

export default GearSetMenu