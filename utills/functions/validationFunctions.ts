import React from "react"
import { TextInput } from "react-native"

export function validateInputTypeNumber(value: string, minValue: number, maxValue: number, 
    setStateFunction: React.Dispatch<React.SetStateAction<string>>): void
    {       
        if(!value.includes("-")){
            const numberValue = Number(value)

            if((minValue || maxValue) < 0 || ((minValue || maxValue) > 999_999_999)) //testing range and value being adequate
                {setStateFunction("")}
    
            if(numberValue >= minValue && numberValue <= maxValue)
                {setStateFunction(value)}
                
    
            else
                {setStateFunction(value.substring(0 , value.length - 1))}
        }
        else {
            setStateFunction("")
        }
}

export const validateInputStringBySymbols = (value: string, setStateFunction: React.Dispatch<React.SetStateAction<string>>,
     inputRef: TextInput | null) => { // string validation on special symbols

    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if(!format.test(value)){
        setStateFunction(value)
    }
    else{
        inputRef?.setState(0)
    }
}