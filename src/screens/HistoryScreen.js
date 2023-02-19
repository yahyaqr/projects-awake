import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HistoryScreen = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Disini History</Text>
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

export default HistoryScreen;
