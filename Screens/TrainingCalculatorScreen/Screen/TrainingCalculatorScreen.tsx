import React, { useState } from "react";
import { Button, ImageBackground, ScrollView, View } from "react-native";
import training_calculator_styles from "./TrainingCalculatorScreenStyles"
import CalculationDataInputForm from "../Components/CalculationDataInputForm/CalculationDataInputForm";
import CalculationDataOutputForm from "../Components/CalculationDataOutputForm/CalculationDataOutputForm";
import { ImgPathConsts } from "../../../utills/enums";

function TrainingCalculatorMain(): React.JSX.Element {

    const [calculationResults, setCalculationResults] = useState<Record<string, number>>({
        foodCount: 0,
        stoneCount: 0,
        woodCount: 0,
        oreCount: 0,
        goldCount: 0,
        trainingTime: 0,
    })

    const childToParent = (calculationResults: Record<string, number>) => {
        setCalculationResults(calculationResults)
    }

    return(
        <ScrollView contentContainerStyle = {training_calculator_styles.scrollViewStyles}>
            <View style = {training_calculator_styles.wrapper}>
                <ImageBackground source = {ImgPathConsts.backgroundImage} resizeMode = "cover"  style = {training_calculator_styles.background_img}>
                    
                    <CalculationDataInputForm childToParent = {childToParent}/>
                    <CalculationDataOutputForm calculationResults = {calculationResults}/>

                </ImageBackground>
            </View>
        </ScrollView>
    );
}

export default TrainingCalculatorMain