import React, { useState } from "react";
import { ImageBackground, ScrollView, Text, TextComponent, View } from "react-native";
import styles from "./TrainingCalculatorMainStyles"

function TrainingCalculatorMain(): React.JSX.Element {
    const backgroundImageUri = require("../../../public/img/utills/pagesBackgroundImg.jpg")
    const [calculationResults, setCalculationResults] = useState(0)

    const childToParent = (calculationResults: number) => {
        setCalculationResults(calculationResults)
    }

    return(
        <ScrollView contentContainerStyle = {styles.scrollViewStyles}>
            <View style = {styles.training_calculator_main_wrapper}>
                <ImageBackground source = {backgroundImageUri} resizeMode = "cover"  style = {styles.img}>
                    <Text style = {styles.textBasic}> {"Home Screen"} </Text>
                </ImageBackground>
            </View>
        </ScrollView>
    );
}

export default TrainingCalculatorMain