/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabLayout from './(tabs)/_layout';

function App(): React.JSX.Element {
  return (
    <TabLayout/>
  );
}

export default App;