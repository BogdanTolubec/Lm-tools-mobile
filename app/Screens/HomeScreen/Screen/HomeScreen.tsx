import React from "react";
import { ImageBackground, Text, View } from "react-native";
import training_calculator_styles from "../../TrainingCalculatorScreen/Screen/TrainingCalculatorScreenStyles";
import { ImgPathConsts} from "../../../../utills/enums";
import home from "./HomeScreenStyles";

function HomeScreen(): React.JSX.Element {
    
    return(
        <View style = {home.wrapper}>
            <ImageBackground source = {{uri: ImgPathConsts.backgroundImage}} resizeMode = "cover" style = {home.background_img}>
                <Text style = {home.greetings_text}>
                    Greetings!
                </Text>
            </ImageBackground>
        </View>
    );
}

export default HomeScreen;