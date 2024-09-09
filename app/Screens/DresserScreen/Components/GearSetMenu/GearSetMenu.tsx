import React from "react"
import { View } from "react-native";
import SubmitButton from "../../../../../Components/SubmitButton/SubmitButton";
import { getDBConnection, updateGearSet } from "../../../../../utills/functions/db-service";
import gear_set_menu from "./GearSetMenuStyles";
import { gearSet } from "../../../../../utills/types";

type Props = {
    gearSet: gearSet
}

function GearSetMenu({gearSet}: Props): React.JSX.Element {

    const onChangeTitle = (): void => {
        gearSet.title = "Hello Kitty"
    }

    const onSaveChanges = async (): Promise<void> => {
        try{
            const db = await getDBConnection() 
            await updateGearSet(db, gearSet)
        }
        catch(e){
            console.log(e)
        }
    }

    return(
        <View style = {gear_set_menu.wrapper}>
            <View style = {gear_set_menu.buttons_wrapper}>
                <View style = {gear_set_menu.button_wrapper}>
                    <SubmitButton title = "Change title" onPress = {onChangeTitle}/>
                </View>

                <View style = {gear_set_menu.button_wrapper}>
                    <SubmitButton title = "Save changes" onPress = {onSaveChanges}/>
                </View>
            </View>
        </View>
    );
}

export default GearSetMenu