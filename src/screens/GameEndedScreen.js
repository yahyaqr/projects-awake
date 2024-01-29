import React from 'react';
import { StyleSheet, View, Text, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {
  const navigation = useNavigation();

  const backToMain = () => {
    navigation.navigate('AppNavigator');
  };

  const tryAgain = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'PVT' }],
    });
    // navigation.navigate('PVT');
  };
  return (
    <View style={styles.container}>
      <View style={styles.textLayout}>
        <Text style={styles.text}>Time's up!</Text>
      </View>
      <View style={styles.layout}>
        <Pressable style={styles.loginButton}>
          <Button title='Back to Main' onPress={backToMain} />
        </Pressable>
        <Pressable style={styles.loginButton}>
          <Button title='Try Again' onPress={tryAgain} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  textLayout: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  layout: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontWeight: 700,
    fontSize: '24px',
    textAlign: 'center',
    userSelect: 'none',
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

export default MainScreen;
