import React from 'react';

// Import Theme from React Native Paper
import { Provider } from 'react-native-paper';
import { theme } from './src/core/ReactNativePaperTheme';

// Import Authentication from Firebase
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import { FIREBASE_CONFIG } from './src/core/FirebaseConfig';

// Import Navigators from React Navigation
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/AppNavigator';

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

const App = () => (
  <Provider theme={theme}>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
