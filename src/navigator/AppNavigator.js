import React from 'react';

// Import Navigators from React Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import Screen
import ProfileScreen from '../screens/MainNavigation/ProfileScreen';
import MainScreen from '../screens/MainNavigation/MainScreen';
import SleepTrackingScreen from '../screens/MainNavigation/SleepTrackingScreen';
import Topbar from '../components/TopBar';

// Import Icon
import ActiveBookIcon from '../assets/Icons/BottomTab/Active/ActiveBookIcon';
import ActiveArmchairIcon from '../assets/Icons/BottomTab/Active/ActiveArmchairIcon';
import ActiveUserIcon from '../assets/Icons/BottomTab/Active/ActiveUserIcon';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='Main'
      screenOptions={{
        header: () => <Topbar />,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTop: '4px #EBEBEB solid',
          height: 70,
          elevation: 5,
          shadowOffset: { width: 0, height: 0 },
        },
        tabBarActiveBackgroundColor: '#FCF6FD',
        tabBarInactiveBackgroundColor: '#FCF6FD',
      }}
    >
      <Tab.Screen
        name='Sleep Tracking'
        component={SleepTrackingScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <ActiveBookIcon
                size={'60'}
                fillColor={'#C49E8A'}
                strokeColor={'#A56957'}
              ></ActiveBookIcon>
            ) : (
              <ActiveBookIcon
                size={'60'}
                fillColor={'none'}
                strokeColor={'#AFAFAF'}
              ></ActiveBookIcon>
            ),
        }}
      />
      <Tab.Screen
        name='Main'
        component={MainScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <ActiveArmchairIcon
                size={'60'}
                fillColor={'#C49E8A'}
                strokeColor={'#A56957'}
              ></ActiveArmchairIcon>
            ) : (
              <ActiveArmchairIcon
                size={'60'}
                fillColor={'none'}
                strokeColor={'#AFAFAF'}
              ></ActiveArmchairIcon>
            ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <ActiveUserIcon
                size={'60'}
                fillColor={'#C49E8A'}
                strokeColor={'#A56957'}
              ></ActiveUserIcon>
            ) : (
              <ActiveUserIcon
                size={'60'}
                fillColor={'none'}
                strokeColor={'#AFAFAF'}
              ></ActiveUserIcon>
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
