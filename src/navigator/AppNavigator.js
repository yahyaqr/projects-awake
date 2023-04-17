import React from 'react';

// Import Navigators from React Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import Screen
import ProfileScreen from '../screens/MainNavigation/ProfileScreen';
import MainScreen from '../screens/MainNavigation/MainScreen';
import SleepTrackingScreen from '../screens/MainNavigation/SleepTrackingScreen';
import Topbar from '../components/TopBar';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Sleep Tracking'
        component={SleepTrackingScreen}
        options={{ header: () => <Topbar /> }}
      />
      <Tab.Screen
        name='Main'
        component={MainScreen}
        options={{ header: () => <Topbar /> }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{ header: () => <Topbar /> }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
