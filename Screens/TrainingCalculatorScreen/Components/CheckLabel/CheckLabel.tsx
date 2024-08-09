import React from 'react'
import { Text, TouchableHighlight } from 'react-native'
import check_label from './CheckLabelStyles'

function CheckLabel(obj: {setStateFunction?: React.Dispatch<React.SetStateAction<string>>, text: string, itemId: number,
    selectedId: number, setSelectedFunction: React.Dispatch<React.SetStateAction<number>>}): React.JSX.Element {

    const {text, itemId, selectedId, setStateFunction, setSelectedFunction} = obj

    const onFocusColor: string = "rgb(45, 77, 200)"
    const onFocusEndColor: string = "rgb(35, 67, 88)"

    return(
    <TouchableHighlight style = {
        [ check_label.wrapper, itemId === selectedId ? {backgroundColor: onFocusColor} : {backgroundColor: onFocusEndColor} ]
    }

        onPress = {(e) => {
            if(setStateFunction)
            { setStateFunction(text) }

            setSelectedFunction(itemId)
        }}>
        <Text style = {check_label.text}> {text} </Text>
    </TouchableHighlight>
    )
}

export default CheckLabel