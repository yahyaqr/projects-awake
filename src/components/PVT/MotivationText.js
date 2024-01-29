import React from 'react';
import { StyleSheet, Text } from 'react-native';

const MotivationText = (props) => {
  const { milliseconds, cueVisible } = props;

  return (
    <>
      {cueVisible ? (
        <Text style={styles.text}>
          {milliseconds <= 100 ? 'Awesome!' : 'Bad!'}
        </Text>
      ) : (
        <Text style={styles.text}>No Cue</Text>
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

export default MotivationText;
