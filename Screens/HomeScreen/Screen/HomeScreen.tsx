import React from "react";
import { ImageBackground, View } from "react-native";
import training_calculator_styles from "../../TrainingCalculatorScreen/TrainingCalculatorMain/TrainingCalculatorMainStyles";
import ScreenMoveButon from "../ScreeenMoveButton/ScreenMoveButton";
import { ScreensEnum } from "../../TrainingCalculatorScreen/Utills/enums";

function HomeScreen({ navigation }: any): React.JSX.Element {

    const backgroundImageUri = require("../../../public/img/utills/pagesBackgroundImg.jpg")
    
    return(
        <View style = {training_calculator_styles.wrapper}>
            <ImageBackground source = {backgroundImageUri} resizeMode = "cover" style = {training_calculator_styles.background_img}>
                <ScreenMoveButon navigation = {navigation} destinationScreeen = {ScreensEnum.calculator}/>
            </ImageBackground>
        </View>
    );
}

export default HomeScreen;