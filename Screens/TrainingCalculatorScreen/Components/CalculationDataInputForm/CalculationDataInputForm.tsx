import React, { Component, Dispatch, SetStateAction, useEffect, useState } from "react";
import { calculationDataT1, calculationDataT2, calculationDataT3, calculationDataT4 } from "../../../../utills/CalculationConsts";
import { Alert, GestureResponderEvent, Pressable, Text, TextInput,  View } from "react-native";
import calculation_data_input_form from "./CalculationDataInputFormStyles";
import SubmitButton from "../../../../Components/SubmitButton/SubmitButton";
import NumericInput from "../../../../Components/NumericInput/NumericInput";
import CheckLabel from "../CheckLabel/CheckLabel";

function CalculationDataInputForm( { childToParent }: any): React.JSX.Element {

    const calculationResults: Record<string, number> = {
        foodCount: 0,
        stoneCount: 0,
        woodCount: 0,
        oreCount: 0,
        goldCount: 0,
        trainingTime: 0,
    }

    const armyTypeLabelsInfo = [{ id: 1, text: "infantry"}, { id: 2, text: "ranged"}, { id: 3, text: "cavalry"}, { id:4, text: "siege"}]
    const tierLabelsInfo = [{ id: 1, text: "t1"}, { id: 2, text: "t2"}, { id: 3, text: "t3"}, { id:4, text: "t4"}]

    const [armyCount, setArmyCount] = useState<number>(0)
    const [trainingSpeed, setTrainingSpeed] = useState<number>(0)
    const [subsidy, setSubsidy] = useState<number>(0)

    const[currentArmyTypeSelect, setCurrentArmyTypeSelect] = useState<string>("infantry")
    const[currentTierSelect, setCurrentTierSelect] = useState<string>("t1")

    const[selectedArmyTypeId, setSelectedArmyTypeId] = useState<number>(0)
    const[selectedTierId, setSelectedTierId] = useState<number>(0)

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
                        setMaterialsCount(calculationDataT4.cavalryRssT4, calculationDataT4.secondsTrainingSpeedT4)
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
    }
    
    return(
        <View style = {calculation_data_input_form.wrapper}>
            <View style = {calculation_data_input_form.select_section}>

                {armyTypeLabelsInfo.map((label) => 
                    <CheckLabel key = {label.id} itemId = {label.id} text = {label.text} selectedId = {selectedArmyTypeId}
                    setStateFunction = {setCurrentArmyTypeSelect} setSelectedFunction = {setSelectedArmyTypeId}/>
                )}

            </View>

            <View style = {calculation_data_input_form.select_section}>

                {tierLabelsInfo.map((label) => 
                    <CheckLabel  key = {label.id} itemId = {label.id} text = {label.text} selectedId = {selectedTierId}
                    setStateFunction = {setCurrentTierSelect} setSelectedFunction = {setSelectedTierId}/>
                )}

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