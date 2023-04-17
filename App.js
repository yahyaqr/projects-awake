import React from 'react';

// Import Theme from React Native Paper
import { Provider } from 'react-native-paper';
import { theme } from './src/core/ReactNativePaperTheme';

// Import User Context
import { UserProvider } from './src/core/UserContext';

// Import Navigators from React Navigation
import { NavigationContainer } from '@react-navigation/native';
import UserNavigator from './src/navigator/UserNavigator';

function App() {
  return (
    <Provider theme={theme}>
      <UserProvider>
        <NavigationContainer>
          <UserNavigator />
        </NavigationContainer>
      </UserProvider>
    </Provider>
  );
}
export default App;
