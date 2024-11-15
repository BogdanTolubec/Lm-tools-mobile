import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { IconPathConsts } from "../../../utills/enums";
import swapper from "./Swapper.styles";

type Props = {
    componentsCount: number
    centerComponent: React.JSX.Element,
    childToParent: (id: number) => void,
}

function Swapper({centerComponent, componentsCount, childToParent}: Props): React.JSX.Element {

    const[swapperIterator, setSwapperIterator] = useState<number>(0)

    useEffect(() => {
        setSwapperIterator(0)
        childToParent(0)
    }, [])

    useEffect(() => {
        childToParent(swapperIterator)
    }, [swapperIterator])

    return(
        <View style = {swapper.wrapper}>
            <TouchableOpacity style = {swapper.icon_wrapper} onPress = {() => {
                if(swapperIterator > 0)
                    setSwapperIterator(swapperIterator - 1)
            }}>
                <Image source = {{uri: IconPathConsts.leftArrowIcon}} style = {swapper.icon} resizeMode = "cover"/>
            </TouchableOpacity>

                <View style = {swapper.centerComponent}>
                    {centerComponent}
                </View>

            <TouchableOpacity style = {swapper.icon_wrapper} onPress = {() => {
                if(swapperIterator < (componentsCount - 1))
                    setSwapperIterator(swapperIterator + 1)
            }}>
                <Image source = {{uri: IconPathConsts.rightArrowIcon}} style = {swapper.icon}/>
            </TouchableOpacity>
        </View>
    );
}

export default Swapper