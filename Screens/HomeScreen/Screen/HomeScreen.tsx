import React from "react";
import { ImageBackground, View } from "react-native";
import training_calculator_styles from "../../TrainingCalculatorScreen/Screen/TrainingCalculatorScreenStyles";
import ScreenMoveButon from "../Components/ScreeenMoveButton/ScreenMoveButton";
import { ScreensEnum } from "../../../utills/enums";
import { useAppNavigation } from "../../../utills/useAppNavigation";

function HomeScreen(): React.JSX.Element {

    const navigation = useAppNavigation()
    const backgroundImageUri = require("../../../public/img/utills/pagesBackgroundImg.jpg")
    
    return(
        <View style = {training_calculator_styles.wrapper}>
            <ImageBackground source = {backgroundImageUri} resizeMode = "cover" style = {training_calculator_styles.background_img}>
                <ScreenMoveButon navigation = {navigation} destinationScreeen = {ScreensEnum.calculator} title = "Training calculator"/>
                <ScreenMoveButon navigation = {navigation} destinationScreeen = {ScreensEnum.dresser} title = "Dresser"/>
                <ScreenMoveButon navigation = {navigation} destinationScreeen = {ScreensEnum.addNewPiece} title = "Add new piece"/>
            </ImageBackground>
        </View>
    );
}

export default HomeScreen;