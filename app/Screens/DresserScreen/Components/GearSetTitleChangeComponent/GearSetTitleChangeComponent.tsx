import React, { useState } from "react"
import { Text, TextInput, View } from "react-native";
import SubmitButton from "../../../../../Components/SubmitButton/SubmitButton";
import { gearSet } from "../../../../../utills/types";
import gear_set_title_change_component from "./GearSetTitleChangeComponentStyles";
import { validateInputStringBySymbols } from "../../../../../utills/functions/validationFunctions";

type Props = {
    gearSet: gearSet,
}

function GearSetTitleChangeComponent({gearSet}: Props): React.JSX.Element {

    const [newTitle, setNewTitle] = useState<string>("")

    const onChangeTitle = (newTitle: string): void => {
        gearSet.title = newTitle
    }

    return(
        <View style = {gear_set_title_change_component.wrapper}>
            <Text style = {gear_set_title_change_component.modal_title}> Change title </Text>

            <TextInput value = {newTitle} onChangeText = {(text) => {
                validateInputStringBySymbols(text, setNewTitle)
            }} style = {gear_set_title_change_component.input} maxLength = {10}/>

            <View style = {gear_set_title_change_component.button_wrapper}>
                <SubmitButton title = "Submit" onPress = {() => {onChangeTitle(newTitle)}}/>
            </View>
        </View>
    );
}

export default GearSetTitleChangeComponent