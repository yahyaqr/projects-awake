import React from 'react';
import { StyleSheet, Text } from 'react-native';

const CountingText = (props) => {
  const { milliseconds, cueVisible } = props;
  return (
    <>
      {cueVisible ? (
        <Text style={styles.text}>{milliseconds}</Text>
      ) : (
        <Text style={styles.text}>0</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    textAlign: 'center',
    margin: 20,
  },
});

export default CountingText;
