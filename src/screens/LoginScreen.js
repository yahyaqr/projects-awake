import React, { useContext } from 'react';
import { StyleSheet, Pressable, Button, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import { UserContext } from '../core/UserContext';

function LoginScreen({ navigation }) {
  const { setUser } = useContext(UserContext);

  const handleLogin = async () => {
    try {
      const user = {
        email: 'aqrom.yahya75@gmail.com',
        password: '1234567890',
      };
      const response = await axios.get('http://34.101.218.37:8000/users');
      const users = response.data;

      const loggedInUser = users.find(
        (u) => u.email === user.email && u.password === user.password,
      );
      if (loggedInUser) {
        setUser(loggedInUser);
        await AsyncStorage.setItem('@user', JSON.stringify(loggedInUser));
        navigation.navigate('AppNavigator', { screen: 'Main', initial: false });
      } else {
        console.log('Invalid email or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <View style={styles.layout}>
      <Pressable style={styles.loginButton}>
        <Button title='Login' onPress={handleLogin}></Button>
      </Pressable>
      <Pressable style={styles.loginButton}>
        <Button
          title='Register'
          onPress={() => navigation.navigate('Register')}
        ></Button>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButton: {
    flex: 1,
    maxHeight: '60px',
    width: '90%',
    fontWeight: 700,
    fontSize: '24px',
    userSelect: 'none',
  },
});

export default LoginScreen;
