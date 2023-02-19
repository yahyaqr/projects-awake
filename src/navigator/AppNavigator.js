import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HistoryScreen from './screens/HistoryScreen';
import MainScreen from './screens/MainScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='History' component={HistoryScreen} />
      <Tab.Screen name='Main' component={MainScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
