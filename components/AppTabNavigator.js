import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ExchangeScreen from '../screens/ExchangeScreen';
import HomeScreen from '../screens/HomeScreen';
import { AppStackNavigator } from './AppStackNavigator'


export const AppTabNavigator = createBottomTabNavigator({
  ExchangeItems : {
    screen: ExchangeScreen,
    navigationOptions :{

      tabBarLabel : "Exchange Items",
    }
  },
  Home : {
    screen: AppStackNavigator,
    navigationOptions :{

      tabBarLabel : "Home",
    }
  }
});