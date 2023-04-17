import React from 'react';

// Import Navigators from React Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Screen and Navigator
import AppNavigator from './AppNavigator';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

function UserNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />
      <Stack.Screen
        name='AppNavigator'
        component={AppNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default UserNavigator;
