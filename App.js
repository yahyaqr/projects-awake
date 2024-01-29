import React from 'react';

// Import User Context
import { UserProvider } from './src/core/UserContext';

// Import Navigators from React Navigation
import { NavigationContainer } from '@react-navigation/native';
import UserNavigator from './src/navigator/UserNavigator';

function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <UserNavigator />
      </NavigationContainer>
    </UserProvider>
  );
}
export default App;
