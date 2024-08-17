import React, { useEffect, useState } from 'react'
import { StyleProp, TextInput, TextStyle } from 'react-native'
import { validateInputStringBySymbols } from '../../utills/functions/validationFunctions'

type Props = {
    placeholder?: string,
    styles: StyleProp<TextStyle>, 
    setParentElementState: ((state: string) => void), 
    maxLength: number,
}

export default function TextInputForms({ placeholder, styles, setParentElementState, maxLength}: Props) {

    const[inputValue, setInputValue] = useState<string>("")
    
    useEffect(() => {
        setParentElementState(inputValue)
    },[inputValue])

  return (
    <TextInput value = {inputValue} placeholder = {placeholder} maxLength = {maxLength}
    onChangeText = { (text: string) => {
            validateInputStringBySymbols(text, setInputValue)
        }
    } style = {styles}>
        
    </TextInput>
  )
}