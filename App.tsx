/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TrainingCalculatorMain from './Screens/TrainingCalculatorScreen/TrainingCalculatorMain/TrainingCalculatorMain';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen/Screen/HomeScreen';

function App(): React.JSX.Element {
  
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name = 'HomeScreen' component = {HomeScreen}/>
       <Stack.Screen name = 'TrainingCalculatorScreen' component = {TrainingCalculatorMain}/>                    
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;