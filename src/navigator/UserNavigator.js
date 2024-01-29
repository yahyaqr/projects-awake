import React, { useContext, useEffect } from 'react';

// Import Navigators from React Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import Component
import Topbar from '../components/TopBar';

// Import Context
import { UserContext } from '../core/UserContext';

// Import Screen and Navigator
import AppNavigator from './AppNavigator';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PVTScreen from '../screens/PVTScreen';
import GameEndedScreen from '../screens/GameEndedScreen';

const Stack = createNativeStackNavigator();

function UserNavigator() {
  const { user } = useContext(UserContext);

  useEffect(() => {
    checkStoredUser();
  }, []);

  const checkStoredUser = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        // If there is a stored user, navigate to AppNavigator (Main Screen)
        navigation.reset({
          index: 0,
          routes: [{ name: 'AppNavigator' }],
        });
      }
    } catch (error) {
      console.log('Error retrieving stored user:', error);
    }
  };

  return (
    <Stack.Navigator>
      {!user ? (
        <>
          <Stack.Screen name='Login / Register' component={LoginScreen} />
          <Stack.Screen name='Register' component={RegisterScreen} />
        </>
      ) : (
        <>
          <Stack.Screen
            name='AppNavigator'
            component={AppNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='PVT'
            component={PVTScreen}
            options={{ header: () => <Topbar /> }}
          />
          <Stack.Screen
            name='GameEnded'
            component={GameEndedScreen}
            options={{ header: () => <Topbar /> }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default UserNavigator;
