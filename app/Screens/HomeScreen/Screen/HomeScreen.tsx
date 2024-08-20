import React from "react";
import { ImageBackground, View } from "react-native";
import training_calculator_styles from "../../TrainingCalculatorScreen/Screen/TrainingCalculatorScreenStyles";
import { ImgPathConsts, ScreensEnum } from "../../../../utills/enums";
import ErrorPage from "../../ErrorScreen/ErrorScreen";

function HomeScreen(): React.JSX.Element {
    
    return(
        <View style = {training_calculator_styles.wrapper}>
            <ImageBackground source = {{uri: ImgPathConsts.backgroundImage}} resizeMode = "cover" style = {training_calculator_styles.background_img}>
                <ErrorPage/>
            </ImageBackground>
        </View>
    );
}

export default HomeScreen;