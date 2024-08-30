import React, { Dispatch, SetStateAction, useState } from 'react'
import { Dimensions, TouchableOpacity, View } from 'react-native';
import modal_component from './ModalComponentStyles';

type Props = {
    visible: boolean,
    children: React.JSX.Element,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

function ModalComponent({visible, children, setVisible}: Props): React.JSX.Element {

    return(
        <View style = {[modal_component.wrapper,
        visible ? {height: Dimensions.get("window").height, width: Dimensions.get("window").width} : {height: 0, width: 0}]}>
            <TouchableOpacity style = {modal_component.background} onPress = {() => {setVisible(false)}}>
                {children}
            </TouchableOpacity>
        </View>
    );
}

export default ModalComponent