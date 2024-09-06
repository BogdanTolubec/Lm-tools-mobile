import React from "react"
import { View } from "react-native";
import SubmitButton from "../../../../../Components/SubmitButton/SubmitButton";
import { getDBConnection, updateGearSet } from "../../../../../utills/functions/db-service";
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
        <View>
            <SubmitButton title = "Change title" onPress = {onChangeTitle}/>
            <SubmitButton title = "Save changes" onPress = {onSaveChanges}/>
        </View>
    );
}

export default GearSetMenu