import React, { useEffect, useState } from "react";
import { ImageBackground, Text, View } from "react-native";
import SpeedUpsInput from "../Components/SpeedUpsInput/SpeedUpsInput";
import { ImgPathConsts } from "../../../../utills/enums";
import { speedUpsValuesArray } from "../../../../utills/consts";
import speed_ups_calculator_screen from "./SpeedUpsCalculatorScreen.styles";
import { timeConverterToStringInDaysHoursMinutesFormat } from "../../../../utills/functions/userFriendlyVisualisation.functions";
import shared_styles from "../../../../utills/sharedStyles.styles";
import { minutesInHour } from "../../../../utills/functions/timeConvertFunctions";

function SpeedUpsCalculatorScreen(): React.JSX.Element{

    const initialArrayForInputs: Array<number> = []

    speedUpsValuesArray.forEach(() => { //automaticaly generates array of 0 by array of icons/values for calculations
        initialArrayForInputs.push(0)
    });

    const [timeByInputsArray, setTimeByInputsArray] = useState<Array<number>>(initialArrayForInputs)
    const [result, setResult] = useState<number>(0)

    function changeTimeOfInputInArray(timeToAddInMinutes: number, index: number): void{
        let updatedArray: Array<number> = {...timeByInputsArray}
        updatedArray[index] = timeToAddInMinutes
        setTimeByInputsArray(updatedArray)
    }

    useEffect(() => {
        let sum: number = 0

        for(let i = 0; i < initialArrayForInputs.length; i++) sum += timeByInputsArray[i]

        setResult(sum)
    }, [timeByInputsArray])

    return(
        <View style = {speed_ups_calculator_screen.wrapper}>
            <ImageBackground source = {{uri: ImgPathConsts.backgroundImage}} resizeMode = "cover" style = {shared_styles.background_img}>
                <View style = {speed_ups_calculator_screen.inputs_wrapper}>
                    {
                        speedUpsValuesArray.map((speedUpValue, index) =>
                            <View key = {index} style = {speed_ups_calculator_screen.input_area_wrapper}>
                                <View style = {speed_ups_calculator_screen.input_wrapper}>
                                    <SpeedUpsInput indexInArray = {index}
                                        speedUpValueInMinutes = {speedUpValue}
                                        changeTimeOfInputInArray = {changeTimeOfInputInArray}/>
                                </View>
                            </View>
                        )
                    }
                </View>

                <View style = {speed_ups_calculator_screen.results_wrapper}>
                    <Text style = {speed_ups_calculator_screen.result_text}> 
                        Summary time: {timeConverterToStringInDaysHoursMinutesFormat(result * minutesInHour)}
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
}

export default SpeedUpsCalculatorScreen