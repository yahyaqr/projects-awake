import React, { useState } from 'react';
import { Pressable, View, Text } from 'react-native';

// Import Theme from React Native Paper
import { Provider } from 'react-native-paper';
import { theme } from './src/core/ReactNativePaperTheme';

// Import Authentication from Firebase
// import auth from '@react-native-firebase/auth';
// import firebase from '@react-native-firebase/app';
// import { firebaseConfig } from './src/core/FirebaseConfig';

// Import Navigators from React Navigation
import { NavigationContainer } from '@react-navigation/native';
import UserNavigator from './src/navigator/UserNavigator';
import AppNavigator from './src/navigator/AppNavigator';

function App() {
  const [user, setUser] = useState();

  if (!user) {
    return (
      <Provider theme={theme}>
        <NavigationContainer>
          <UserNavigator />
        </NavigationContainer>
      </Provider>
    );
  }

  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}
export default App;
