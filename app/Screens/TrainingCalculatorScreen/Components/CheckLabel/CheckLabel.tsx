import React from 'react'
import { Text, TouchableHighlight } from 'react-native'
import check_label from './CheckLabelStyles'

type Props = {
    setStateFunction?: React.Dispatch<React.SetStateAction<string>>,
    text: string,
    itemId: number,
    selectedId: number,
    setSelectedFunction: React.Dispatch<React.SetStateAction<number>>
}

function CheckLabel( {setStateFunction, text, itemId, selectedId, setSelectedFunction}: Props): React.JSX.Element {

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