import React, { useState } from "react";
import { Image, ImageBackground, TouchableOpacity, View } from "react-native";
import { IconPathConsts } from "../../utills/enums";
import swapper from "./SwapperStyles";

type Props = {
    componentDataArray: any[]
    centerComponent: React.JSX.Element,
    childToParent: (returnData: any) => void,
}

function Swapper({centerComponent, componentDataArray, childToParent}: Props): React.JSX.Element {

    const[swapperIterator, setSwapperIterator] = useState<number>(0)

    return(
        <View style = {swapper.wrapper}>
            <TouchableOpacity style = {swapper.icon_wrapper} onPress = {() => {
                if(swapperIterator < componentDataArray.length - 1){
                    setSwapperIterator(swapperIterator + 1)
                    childToParent(componentDataArray[swapperIterator])
                }
            }}>
                <Image source = {{uri: IconPathConsts.leftArrowIcon}} style = {swapper.icon} resizeMode = "cover"/>
            </TouchableOpacity>

                <View style = {swapper.centerComponent}>
                    {centerComponent}
                </View>

            <TouchableOpacity style = {swapper.icon_wrapper} onPress = {() => {
                if(swapperIterator > 0){
                    setSwapperIterator(swapperIterator - 1)
                    childToParent(componentDataArray[swapperIterator])
                }
            }}>
                <Image source = {{uri: IconPathConsts.rightArrowIcon}} style = {swapper.icon}/>
            </TouchableOpacity>
        </View>
    );
}

export default Swapper