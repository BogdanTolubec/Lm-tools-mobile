/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootNavigator } from './Screens/navigation';

function App(): React.JSX.Element {
  
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  );
}

export default App;