import React, { useContext, useState } from 'react';
import { View, Button, Picker, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';

// Import User Context
import { UserContext } from '../core/UserContext';

function RegisterScreen({ navigation }) {
  const { setUser } = useContext(UserContext);
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Male');

  const handleRegister = async () => {
    try {
      // Create a user object with the form data
      const user = {
        fullname,
        email,
        password,
        age,
        gender,
      };
      // Send a POST request to json-server to add the user data
      await axios.post('http://34.101.218.37:8000/users', user);
      // Update the user context with the registered user data
      const response = await axios.get('http://34.101.218.37:8000/users');
      const users = response.data;
      const userData = users.find(
        (u) => u.email === user.email && u.password === user.password,
      );
      setUser(userData);
      // Navigate to the main app screen
      navigation.navigate('AppNavigator', { screen: 'Main', initial: false });
    } catch (error) {
      console.error('Error registering user:', error);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Full Name'
        value={fullname}
        onChangeText={(text) => setFullname(text)}
      />
      <TextInput
        style={styles.input}
        placeholder='Email'
        value={email}
        keyboardType='email-address'
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        value={password}
        keyboardType='password'
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder='Age'
        value={age}
        keyboardType='numeric'
        onChangeText={(text) => setAge(text)}
      />
      <Picker
        style={styles.input}
        selectedValue={gender}
        onValueChange={(itemValue) => setGender(itemValue)}
        label='Gender'
      >
        <Picker.Item label='Male' value='Male' />
        <Picker.Item label='Female' value='Female' />
      </Picker>
      <Button title='Register' mode='contained' onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default RegisterScreen;
