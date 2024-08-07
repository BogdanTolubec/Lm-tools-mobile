import React, { Component, Dispatch, SetStateAction, useEffect, useState } from "react";
import { calculationDataT1, calculationDataT2, calculationDataT3, calculationDataT4 } from "../../../../utills/CalculationConsts";
import { Alert, GestureResponderEvent, Text, TextInput,  View } from "react-native";
import calculation_data_input_form from "./CalculationDataInputFormStyles";
import SubmitButton from "../../../../Components/SubmitButton/SubmitButton";
import { validateInputTypeNumber } from "../../../../utills/functions/validationFunctions";
import NumericInput from "../../../../Components/NumericInput/NumericInput";

function CalculationDataInputForm( { childToParent }: any): React.JSX.Element {

    const refInput = React.useRef<Text>(null);

    const calculationResults: Record<string, number> = {
        foodCount: 0,
        stoneCount: 0,
        woodCount: 0,
        oreCount: 0,
        goldCount: 0,
        trainingTime: 0,
    }

    const [armyCount, setArmyCount] = useState<number>(0)
    const [trainingSpeed, setTrainingSpeed] = useState<number>(0)
    const [subsidy, setSubsidy] = useState<number>(0)

    const[currentArmyTypeSelect, setCurrentArmyTypeSelect] = useState<string>("infantry")
    const[currentTierSelect, setCurrentTierSelect] = useState<string>("t1")

    const[currentStyle, setCurrentStyle] = useState<React.CSSProperties>()

        //functions zone

    const setMaterialsCount = (calculationDataArmyTypeRss: Array<number>, trainingTime: Array<number>) => {
        
        calculationResults.foodCount = armyCount * (calculationDataArmyTypeRss[0] * (1 - subsidy / 100))
        calculationResults.stoneCount = armyCount * (calculationDataArmyTypeRss[1] * (1 - subsidy / 100))
        calculationResults.woodCount = armyCount * (calculationDataArmyTypeRss[2] * (1 - subsidy / 100))
        calculationResults.oreCount = armyCount * (calculationDataArmyTypeRss[3] * (1 - subsidy / 100))
        calculationResults.goldCount = armyCount * (calculationDataArmyTypeRss[4] * (1 - subsidy / 100))

        calculationResults.trainingTime = (armyCount * trainingTime[0]) / (1 + trainingSpeed / 100)
    }

    const calculateMaterials = () => {

        if(currentArmyTypeSelect === (null || undefined) || currentTierSelect === (null || undefined)){
            return Alert.alert("Set up all values before calculating!")
        }

        const tier = currentTierSelect.replaceAll(" ", "") // important! delete all " " from text
        const armyType = currentArmyTypeSelect.replaceAll(" ", "")

        switch (tier) {

            case "t1": {
                switch(armyType){
                    case "infantry": {
                        setMaterialsCount(calculationDataT1.infantryRssT1, calculationDataT1.secondsTrainingSpeedT1)
                        break;
                    }

                    case "ranged": {
                        setMaterialsCount(calculationDataT1.rangedRssT1, calculationDataT1.secondsTrainingSpeedT1)
                        break;
                    }

                    case "cavalry": {
                        setMaterialsCount(calculationDataT1.cavalryRssT1, calculationDataT1.secondsTrainingSpeedT1)
                        break;
                    }

                    case "siege": {
                        setMaterialsCount(calculationDataT1.siegeRssT1, calculationDataT1.secondsTrainingSpeedT1)
                        break;
                    }

                    default: {
                        break;
                    }
                }
                break;
            }

            case "t2": {
                switch(armyType){
                    case "infantry": {
                        setMaterialsCount(calculationDataT2.infantryRssT2, calculationDataT2.secondsTrainingSpeedT2)
                        break;
                    }

                    case "ranged": {
                        setMaterialsCount(calculationDataT2.rangedRssT2, calculationDataT2.secondsTrainingSpeedT2)
                        break;
                    }

                    case "cavalry": {
                        setMaterialsCount(calculationDataT2.cavalryRssT2, calculationDataT2.secondsTrainingSpeedT2)
                        break;
                    }

                    case "siege": {
                        setMaterialsCount(calculationDataT2.siegeRssT2, calculationDataT2.secondsTrainingSpeedT2)
                        break;
                    }

                    default: {
                        break;
                    }
                }
                break;
            }

            case "t3": {
                switch(armyType){
                    case "infantry": {
                        setMaterialsCount(calculationDataT3.infantryRssT3, calculationDataT3.secondsTrainingSpeedT3)
                        break;
                    }

                    case "ranged": {
                        setMaterialsCount(calculationDataT3.rangedRssT3, calculationDataT3.secondsTrainingSpeedT3)
                        break;
                    }

                    case "cavalry": {
                        setMaterialsCount(calculationDataT3.cavalryRssT3, calculationDataT3.secondsTrainingSpeedT3)
                        break;
                    }

                    case "siege": {
                        setMaterialsCount(calculationDataT3.siegeRssT3, calculationDataT3.secondsTrainingSpeedT3)
                        break;
                    }

                    default: {
                        break;
                    }
                }
                break;
            }

            case "t4": {
                switch(armyType){
                    case "infantry": {
                        setMaterialsCount(calculationDataT4.infantryRssT4, calculationDataT4.secondsTrainingSpeedT4)
                        break;
                    }

                    case "ranged": {
                        setMaterialsCount(calculationDataT4.rangedRssT4, calculationDataT4.secondsTrainingSpeedT4)
                        break;
                    }

                    case "cavalry": {
                        setMaterialsCount(calculationDataT4.cavalryRssT4, calculationDataT3.secondsTrainingSpeedT4)
                        break;
                    }

                    case "siege": {
                        setMaterialsCount(calculationDataT4.siegeRssT4, calculationDataT4.secondsTrainingSpeedT4)
                        break;
                    }

                    default: {
                        break;
                    }
                }
                break;
            }

            default: {
                break;
            }
        }
    }

    const calculateAndSendData = () => {
        calculateMaterials()
        childToParent(calculationResults)
        console.log("Result: ", calculationResults)
    }
    
    return(
        <View style = {calculation_data_input_form.wrapper}>
            <View style = {calculation_data_input_form.select_section}>
                <Text style = {calculation_data_input_form.check_label_off}
                onPress = {(e) => {
                    setCurrentArmyTypeSelect("infantry")
                }}> infantry </Text>

                <Text ref = {refInput} style = {calculation_data_input_form.check_label_off} 
                onPress = {(e) => {
                    if(refInput.current !== null){
                    refInput.current.focus()
                    }
                    setCurrentArmyTypeSelect("ranged")
                }}> ranged </Text>

                <Text style = {calculation_data_input_form.check_label_off} 
                onPress = {(e) => {
                    setCurrentArmyTypeSelect("cavalry")
                }}> cavalry </Text>

                <Text style = {calculation_data_input_form.check_label_off} 
                onPress = {(e) => {
                    setCurrentArmyTypeSelect("siege")
                }}> siege </Text>
            </View>

            <View style = {calculation_data_input_form.select_section}>
                <Text style = {calculation_data_input_form.check_label_off} 
                onPress = {(e) => {
                    setCurrentTierSelect("t1")
                }}> t1 </Text>

                <Text style = {calculation_data_input_form.check_label_off} 
                onPress = {(e) => {
                    setCurrentTierSelect("t2")
                }}> t2 </Text>

                <Text style = {calculation_data_input_form.check_label_off} 
                onPress = {(e) => {
                    setCurrentTierSelect("t3")
                }}> t3 </Text>

                <Text style = {calculation_data_input_form.check_label_off} 
                onPress = {(e) => {
                    setCurrentTierSelect("t4")
                }}> t4 </Text>
            </View>

            <Text style = {calculation_data_input_form.text_input_labels}>Training speed (%): </Text>
            <NumericInput placeholder = "100" styles = {calculation_data_input_form.text_input}
             minValue = {0} maxValue = {999} setParentElementState = {(state) => {setTrainingSpeed(state)}}/>

            <Text style = {calculation_data_input_form.text_input_labels}> Army count: </Text>
            <NumericInput placeholder = "100.000" styles = {calculation_data_input_form.text_input} 
             minValue = {0} maxValue = {999_999_999} setParentElementState = {(state) => {setArmyCount(state)}}/>

            <Text style = {calculation_data_input_form.text_input_labels}> Subsidy (%): </Text>
            <NumericInput placeholder = "40" styles = {calculation_data_input_form.text_input}
            minValue = {0} maxValue = {40} maxLength = {3} setParentElementState = {(state) => {setSubsidy(state)}}/>

            <SubmitButton onPress = {(e: GestureResponderEvent) => {calculateAndSendData()}} title = "Calculate"/>
        </View>
    );
}

export default CalculationDataInputForm