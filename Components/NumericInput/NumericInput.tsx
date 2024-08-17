import React, { useEffect, useState } from "react";
import { StyleProp, TextInput, TextStyle } from "react-native";
import { validateInputTypeNumber } from "../../utills/functions/validationFunctions";

function NumericInput(obj: {minValue: number, maxValue: number,
    placeholder?: string | undefined, styles: StyleProp<TextStyle>,
    setParentElementState: ((state: number) => void), maxLength?: number | undefined}): React.JSX.Element {

    const {styles, maxLength, minValue, maxValue, setParentElementState} = obj
    const[inputValue, setInputValue] = useState<string>("")
    
    useEffect(() => {
        setParentElementState(Number(inputValue))
    },[inputValue])

    return(
        <TextInput value = {inputValue} keyboardType = "numeric" style = {styles} maxLength = {maxLength}
        onChangeText = { (text) =>{
            validateInputTypeNumber(text.replaceAll(" ", ""), minValue, maxValue, setInputValue)
        }
        }/>
    );
}

export default NumericInput