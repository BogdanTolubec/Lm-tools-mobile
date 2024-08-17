import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import calculation_data_output_form_styles from "./CalculationDataOutputFormStyles";
import { userFriendlyBigNumbersVisualisation } from "../../../../../utills/functions/userFriendlyVisualisation";

type Props = {
    calculationResults: Record<string, number>
}

function CalculationDataOutputForm( {calculationResults}: Props ): React.JSX.Element {

    const[foodCount, setFoodCount] = useState(0)
    const[stoneCount, setStoneCount] = useState(0)
    const[woodCount, setWoodCount] = useState(0)
    const[oreCount, setOreCount] = useState(0)
    const[goldCount, setGoldCount] = useState(0)
    const[trainingTime, setTrainingTime] = useState(0)

    useEffect(() => { //setting values when result changes
        if(calculationResults != undefined) {
            setFoodCount(calculationResults.foodCount)
            setStoneCount(calculationResults.stoneCount)
            setWoodCount(calculationResults.woodCount)
            setOreCount(calculationResults.oreCount)
            setGoldCount(calculationResults.goldCount)
            setTrainingTime(calculationResults.trainingTime)
        }
    }, [calculationResults])

    return(
        <View style = {calculation_data_output_form_styles.wrapper}>
            <View style = {calculation_data_output_form_styles.rss_output_segment}>
                <View style = {calculation_data_output_form_styles.rss_output}>
                    <Text> Food: {userFriendlyBigNumbersVisualisation(foodCount)} </Text>
                </View>

                <View style = {calculation_data_output_form_styles.rss_output}>
                    <Text> Stone: {userFriendlyBigNumbersVisualisation(stoneCount)} </Text>
                </View>

                <View style = {calculation_data_output_form_styles.rss_output}>
                    <Text> Wood: {userFriendlyBigNumbersVisualisation(woodCount)} </Text>
                </View>
            </View>

            <View style = {calculation_data_output_form_styles.rss_output_segment}>
                <View style = {calculation_data_output_form_styles.rss_output}>
                    <Text> Ore: {userFriendlyBigNumbersVisualisation(oreCount)} </Text>
                </View>

                <View style = {calculation_data_output_form_styles.rss_output}>
                    <Text> Gold: {userFriendlyBigNumbersVisualisation(goldCount)} </Text>
                </View>

                <View style = {calculation_data_output_form_styles.rss_output}>
                    <Text> Speed ups: { Math.floor(trainingTime/3600/24) }d {" "}
                        { Math.floor(trainingTime/3600) % 24}h {" "}
                        { Math.floor(trainingTime/60) % 60}m {" "}</Text>
                </View>
            </View>
        </View>
    );
}

export default CalculationDataOutputForm