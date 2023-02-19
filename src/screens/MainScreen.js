import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MainScreen = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Disini Main</Text>
    </View>
  );
};

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
});

export default MainScreen;
