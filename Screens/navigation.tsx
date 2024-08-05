import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen/Screen/HomeScreen";
import TrainingCalculatorScreen from "./TrainingCalculatorScreen/Screen/TrainingCalculatorScreen";
import { NavigatorScreenParams } from "@react-navigation/native";
import { ScreensEnum } from "../utills/enums";
import DresserScreen from "./DresserScreen/Screen/DresserScreen";
import AddNewPieceScreen from "./AddNewPieceScreen/Screen/AddNewPieceScreen";

export type RootStackParamList = {
    Onboarding: NavigatorScreenParams<OnboardingStackParamList >
}

export type OnboardingStackParamList = {
    HomeScreen: undefined
    TrainingCalculatorScreen: undefined
    DresserScreen: undefined
    AddNewPieceScreen: undefined
}

const RootStack = createNativeStackNavigator<RootStackParamList>()
const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>()

const OnboardingNavigator = () => {
    return(
        <OnboardingStack.Navigator screenOptions = {
            {headerShown: false}
            }>
            <OnboardingStack.Screen name = {ScreensEnum.home} component = {HomeScreen}/>
            <OnboardingStack.Screen name = {ScreensEnum.calculator} component = {TrainingCalculatorScreen}/>
            <OnboardingStack.Screen name = {ScreensEnum.dresser} component = {DresserScreen}/>
            <OnboardingStack.Screen name = {ScreensEnum.addNewPiece} component = {AddNewPieceScreen}/>
        </OnboardingStack.Navigator>
    );
}

export const RootNavigator = () => {
    return(
        <RootStack.Navigator 
        screenOptions = {
            {headerShown: false}
            }>
            <RootStack.Screen name = {"Onboarding"} component = {OnboardingNavigator}/>
        </RootStack.Navigator>
    );
}