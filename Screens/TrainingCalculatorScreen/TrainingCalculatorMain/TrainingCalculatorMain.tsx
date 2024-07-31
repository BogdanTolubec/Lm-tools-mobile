import React, { useState } from "react";
import { Button, ImageBackground, ScrollView, View } from "react-native";
import training_calculator_styles from "./TrainingCalculatorMainStyles"

function TrainingCalculatorMain({ navigation }: any): React.JSX.Element {
    const backgroundImageUri = require("../../../public/img/utills/pagesBackgroundImg.jpg")
    const [calculationResults, setCalculationResults] = useState(0)

    const childToParent = (calculationResults: number) => {
        setCalculationResults(calculationResults)
    }

    return(
        <ScrollView contentContainerStyle = {training_calculator_styles.scrollViewStyles}>
            <View style = {training_calculator_styles.wrapper}>
                <ImageBackground source = {backgroundImageUri} resizeMode = "cover"  style = {training_calculator_styles.background_img}>
                    <Button title = "Go Home" onPress = {() => {
                        navigation.goBack()
                    }}/>
                </ImageBackground>
            </View>
        </ScrollView>
    );
}

export default TrainingCalculatorMain