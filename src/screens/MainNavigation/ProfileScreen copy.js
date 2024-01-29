import React, { useContext, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  CheckBox,
} from 'react-native';

// Import User Context
import { UserContext } from '../../core/UserContext';

function ProfileScreen({ navigation }) {
  const { user, logout } = useContext(UserContext);
  const [trialLength, setTrialLength] = useState('600');
  const [lapseThreshold, setLapseThreshold] = useState('500');
  const [showInstructions, setShowInstructions] = useState(false);

  const handleLogout = () => {
    logout(navigation);
  };

  const handleSaveSettings = () => {
    // Save trial settings to server or do any other desired action
    console.log('Trial Length (sec):', trialLength);
    console.log('Lapse Threshold (ms):', lapseThreshold);
    console.log('Show Instructions:', showInstructions);
  };

  return (
    <View style={styles.layout}>
      <View>
        <Text>User ID: {user.id}</Text>
        <Text>Name: {user.fullname}</Text>
        <Text>Email: {user.email}</Text>
        <Text>Age: {user.age}</Text>
        <Text>Gender: {user.gender}</Text>
      </View>
      <View style={styles.settingsContainer}>
        <Text style={styles.settingsTitle}>Trial Settings</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Input Trial Length (sec):</Text>
          <TextInput
            style={styles.input}
            value={trialLength}
            onChangeText={setTrialLength}
            keyboardType='numeric'
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Input Lapse Threshold (ms):</Text>
          <TextInput
            style={styles.input}
            value={lapseThreshold}
            onChangeText={setLapseThreshold}
            keyboardType='numeric'
          />
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={showInstructions}
            onValueChange={setShowInstructions}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Check button Show Instructions</Text>
        </View>
        <Button title='Save Settings' onPress={handleSaveSettings} />
      </View>
      <Button title='Logout' onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
  settingsContainer: {
    marginTop: 20,
  },
  settingsTitle: {
    fontSize: 24,
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    marginRight: 8,
  },
});

export default ProfileScreen;
