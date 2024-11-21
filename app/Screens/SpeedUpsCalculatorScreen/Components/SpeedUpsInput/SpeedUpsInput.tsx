import React, { useEffect, useRef, useState } from "react";
import speed_ups_input from "./SpeedUpsInput.styles";
import { ImageBackground, StyleProp, Text, View } from "react-native";
import NumericInput from "../../../../../Components/NumericInput/NumericInput";
import { maxItemsInBagValue } from "../../../../../utills/consts";
import shared_styles from "../../../../../utills/sharedStyles.styles";
import { IconPathConsts } from "../../../../../utills/enums";

type Props = {
    indexInArray: number,
    speedUpValueInMinutes: number,
    changeTimeOfInputInArray: (timeToAddInMinutes: number, index: number) => void
}

function SpeedUpsInput({speedUpValueInMinutes, indexInArray, changeTimeOfInputInArray}: Props): React.JSX.Element {
    const [inputValue, setInputValue] = useState<number>(0)

    const minutesInHour = 60
    const minutesInDay = minutesInHour * 24
    
    useEffect(() => {
        changeTimeOfInputInArray(speedUpValueInMinutes * inputValue, indexInArray)
    },[inputValue])

    function speedUpValueUserFriendlyVisualisation(timeInMinutes: number): string{
        if(timeInMinutes > 0 && timeInMinutes <= 60)
            return timeInMinutes + "m"

        if(timeInMinutes > 60 && timeInMinutes <= minutesInDay)
            return timeInMinutes / minutesInHour + "h"

        if(timeInMinutes > minutesInDay && timeInMinutes <= minutesInDay * 3)
            return timeInMinutes / minutesInDay + "d"

        return ""
    }

    function backgroundColorSetByTime(timeInMinutes: number): string{
        if(timeInMinutes >= 1 && timeInMinutes <= 60) return "#1EB02B"

        if(timeInMinutes >= 180 && timeInMinutes <= 1440) return "#233D99"

        if(timeInMinutes >= 4320) return "#B22222"
 
        return ""
    }

    return(
        <View style = {speed_ups_input.wrapper}>
            <View style = {speed_ups_input.icon_wrapper}>
                <ImageBackground source = {{uri: IconPathConsts.speedUpIcon}} resizeMode = "stretch" 
                    style = {[speed_ups_input.speed_up_icon, {backgroundColor: backgroundColorSetByTime(speedUpValueInMinutes)}]}>

                    <Text style = {speed_ups_input.text}> { speedUpValueUserFriendlyVisualisation(speedUpValueInMinutes) } </Text>

                </ImageBackground>
            </View>

            <NumericInput minValue = {0} maxValue = {maxItemsInBagValue} 
                setParentElementState = {setInputValue} styles = {speed_ups_input.input}/>
        </View>
    );
}

export default SpeedUpsInput