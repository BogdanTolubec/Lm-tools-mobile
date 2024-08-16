import { Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconPathConsts, ScreensEnum } from '../../utills/enums';
import HomeScreen from '../Screens/HomeScreen/Screen/HomeScreen';
import TrainingCalculatorMain from '../Screens/TrainingCalculatorScreen/Screen/TrainingCalculatorScreen';
import TrainingCalculatorScreen from '../Screens/TrainingCalculatorScreen/Screen/TrainingCalculatorScreen';
import DresserScreen from '../Screens/DresserScreen/Screen/DresserScreen';
import AddNewPieceScreen from '../Screens/AddNewPieceScreen/Screen/AddNewPieceScreen';
import TabIcon from './TabIcon/TabIcon';

function TabLayout(): React.JSX.Element {

  const Tab = createBottomTabNavigator();

  return (
    <>
        <NavigationContainer>
            <Tab.Navigator screenOptions = {{
                tabBarActiveTintColor: "#FFA001",
                tabBarInactiveTintColor: "#CDCDE0",
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: "#161622",
                borderTopWidth: 1,
                borderTopColor: "#232533",
                height: 80,
          },
        }}>
                <Tab.Screen name = {ScreensEnum.home} component = {HomeScreen} options = {
                    {
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => {
                            return (
                                <TabIcon 
                                icon = {IconPathConsts.homeIcon}
                                color = {color}
                                name = {"Home"}
                                focused = {focused}/>
                            )
                        }
                    }
                }/>

                <Tab.Screen name = {ScreensEnum.calculator} component = {TrainingCalculatorScreen} options = {
                    {
                        title: "Calculator",
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => {
                            return (
                                <TabIcon 
                                icon = {IconPathConsts.calculatorIcon}
                                color = {color}
                                name = {"Calculator"}
                                focused = {focused}/>
                            )
                        }
                    }
                }/>

                <Tab.Screen name = {ScreensEnum.dresser} component = {DresserScreen} options = {
                    {
                        title: "Dresser",
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => {
                            return (
                                <TabIcon 
                                icon = {IconPathConsts.gearIcon}
                                color = {color}
                                name = {"Dresser"}
                                focused = {focused}/>
                            )
                        }
                    }
                }/>

                <Tab.Screen name = {ScreensEnum.addNewPiece} component = {AddNewPieceScreen} options = {
                    {
                        title: "Add piece",
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => {
                            return (
                                <TabIcon 
                                icon = {IconPathConsts.plusIcon}
                                color = {color}
                                name = {"Add piece"}
                                focused = {focused}/>
                            )
                        }
                    }
                }/>

            </Tab.Navigator>
        </NavigationContainer>
    </>
  )
}

export default TabLayout