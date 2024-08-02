import React, { Component, Dispatch, SetStateAction, useEffect, useState } from "react";
import { calculationDataT1, calculationDataT2, calculationDataT3, calculationDataT4 } from "../../../../utills/CalculationConsts";
import { Alert, GestureResponderEvent, Text, TextInput,  View } from "react-native";
import calculation_data_input_form from "./CalculationDataInputFormStyles";
import SubmitButton from "../../../../Components/SubmitButton/SubmitButton";

function CalculationDataInputForm( { childToParent }: any): React.JSX.Element {

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

    const[currentArmyTypeSelect, setCurrentArmyTypeSelect] = useState<string>("")
    const[currentTierSelect, setCurrentTierSelect] = useState<string>("")

    const[currentStyle, setCurrentStyle] = useState<React.CSSProperties>()

        //functions zone
    const setOnStylesOnCurrentElementByClick = (element: any, /*currentElementState: string,*/
         setCurrentFunction: any, /*styleOnName: React.CSSProperties, styleOffName: React.CSSProperties*/) => {
        //if(currentElementState !== ""){ //set previous selected element to off mode
        //    element.props.style = styleOffName
        //}

        setCurrentFunction(element)

        //element.props.style = styleOnName // change element mode to on
    }

    const setMaterialsCount = (calculationDataArmyTypeRss: Array<number>, trainingTime: Array<number>) => {
        
        calculationResults.foodCount = armyCount * (calculationDataArmyTypeRss[0] * (1 - subsidy / 100))
        calculationResults.stoneCount = armyCount * (calculationDataArmyTypeRss[1] * (1 - subsidy / 100))
        calculationResults.woodCount = armyCount * (calculationDataArmyTypeRss[2] * (1 - subsidy / 100))
        calculationResults.oreCount = armyCount * (calculationDataArmyTypeRss[3] * (1 - subsidy / 100))
        calculationResults.goldCount = armyCount * (calculationDataArmyTypeRss[4] * (1 - subsidy / 100))

        calculationResults.trainingTime = (armyCount * trainingTime[0]) / (1 + trainingSpeed / 100)
    }

    const calculateMaterials = () => {
        console.log("army type selected: " + currentArmyTypeSelect)
        if(currentArmyTypeSelect == null || currentTierSelect == null){
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
                onPress = {(text) => {
                    setCurrentArmyTypeSelect(text.toString())
                    console.log("text: " + text)
                }}> infantry </Text>

                <Text style = {calculation_data_input_form.check_label_off} 
                onPress = {(text) => () => {
                    setCurrentArmyTypeSelect(text.toString())
                }}> ranged </Text>

                <Text style = {calculation_data_input_form.check_label_off} 
                onPress = {(text) => () => {
                    setCurrentArmyTypeSelect(text.toString())
                }}> cavalry </Text>

                <Text style = {calculation_data_input_form.check_label_off} 
                onPress = {(text) => () => {
                    setCurrentArmyTypeSelect(text.toString())
                }}> siege </Text>
            </View>

            <View style = {calculation_data_input_form.select_section}>
                <Text style = {calculation_data_input_form.check_label_off} 
                onPress = {(text) => () => {
                    setCurrentTierSelect(text.toString())
                }}> t1 </Text>

                <Text style = {calculation_data_input_form.check_label_off} 
                onPress = {(text) => () => {
                    setCurrentTierSelect(text.toString())
                }}> t2 </Text>

                <Text style = {calculation_data_input_form.check_label_off} 
                onPress = {(text) => () => {
                    setCurrentTierSelect(text.toString())
                }}> t3 </Text>

                <Text style = {calculation_data_input_form.check_label_off} 
                onPress = {(text) => () => {
                    setCurrentTierSelect(text.toString())
                }}> t4 </Text>
            </View>

            <Text style = {calculation_data_input_form.text_input_labels}>Training speed (%): </Text>
            <TextInput placeholder = "100" style = {calculation_data_input_form.text_input} onChangeText = {(text: string) => {
                setTrainingSpeed(Number(text))
            }}></TextInput>

            <Text style = {calculation_data_input_form.text_input_labels}> Army count: </Text>
            <TextInput placeholder = "100.000" style = {calculation_data_input_form.text_input} onChangeText = {(text: string) => {
                setArmyCount(Number(text))
            }}></TextInput>

            <Text style = {calculation_data_input_form.text_input_labels}> Subsidy (%): </Text>
            <TextInput placeholder = "40" style = {calculation_data_input_form.text_input} onChangeText = {(text: string) => {
                setSubsidy(Number(text))
            }}></TextInput>

            <SubmitButton onPress = {(e: GestureResponderEvent) => {calculateAndSendData()}} title = "Calculate"/>
        </View>
    );
}

export default CalculationDataInputForm