import React, { useEffect, useState } from "react";
import { StyleProp, TextInput, TextStyle } from "react-native";
import { validateInputTypeNumber } from "../../utills/functions/validation.functions";

type Props = {
    minValue: number, 
    maxValue: number,
    placeholder?: string | undefined, 
    styles: StyleProp<TextStyle>,
    setParentElementState: ((state: number) => void), 
    maxLength?: number | undefined
}

function NumericInput({minValue, maxValue, placeholder, styles, setParentElementState, maxLength}: Props): React.JSX.Element {

    const[inputValue, setInputValue] = useState<string>("")
    
    useEffect(() => {
        setParentElementState(Number(inputValue))
    },[inputValue])

    return(
        <TextInput value = {inputValue} keyboardType = "numeric" style = {styles} maxLength = {maxLength || maxValue.toString().length}
            onChangeText = { (text) =>{
                validateInputTypeNumber(text.replaceAll(" ", ""), minValue, maxValue, setInputValue)
            }
        } placeholder = {placeholder} />
    );
}

export default NumericInput