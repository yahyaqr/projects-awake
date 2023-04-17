import React, { useContext } from 'react';
import { Button, View, Text } from 'react-native';
import axios from 'axios';

// Import User Context
import { UserContext } from '../core/UserContext';

function LoginScreen({ navigation }) {
  const { setUser } = useContext(UserContext);

  const handleLogin = async () => {
    try {
      // Create a user object with the login data
      const user = {
        email: 'aqrom.yahya75@gmail.com',
        password: '1234567890',
      };
      // Fetch the users data from the json-server
      const response = await axios.get('http://localhost:3000/users');
      const users = response.data;
      console.log(users);
      // Check if the provided email and password match any user in the users data
      const loggedInUser = users.find(
        (u) => u.email === user.email && u.password === user.password,
      );
      if (loggedInUser) {
        // Update the user context with the logged-in user data
        setUser(loggedInUser);
        // Navigate to the main app screen
        navigation.navigate('AppNavigator', { screen: 'Main', initial: false });
      } else {
        console.log('Invalid email or password'); // Handle invalid login
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title='Login' onPress={handleLogin} />
      <Button
        title='Register'
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}

export default LoginScreen;
