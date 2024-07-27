/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
import TrainingCalculatorMain from './Screens/TrainingCalculatorScreen/TrainingCalculatorMain/TrainingCalculatorMain';
/*import { createNativeStackNavigator } from '@react-navigation/native-stack';
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'TrainingCalculator' component = {TrainingCalculatorMain}/>
      </Stack.Navigator>
    </NavigationContainer>*/

function App(): React.JSX.Element {
  
  //const Stack = createNativeStackNavigator();

  return (
    <TrainingCalculatorMain/>
  );
}

export default App;