import React from 'react'
import { TouchableOpacity, View } from 'react-native';
import modal_component from './ModalComponent.styles';

type Props = {
    visible: boolean,
    children: React.JSX.Element,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

function ModalComponent({visible, children, setVisible}: Props): React.JSX.Element {

    return(
        <View style = {[modal_component.wrapper,
        visible ? {height: "100%", width: "100%", zIndex: 100} : {height: 0, width: 0, zIndex: -1}]}>
            <TouchableOpacity style = {modal_component.background} onPress = {() => {setVisible(false)}}/>
            <View style = {modal_component.content}>
                {children}
            </View>
        </View>
    );
}

export default ModalComponent