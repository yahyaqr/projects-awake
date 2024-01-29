import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';

function TimeRemaining(props) {
  const { time, totalTime } = props;

  useEffect(() => {
    if (time === 0) {
      props.sendTimeRemainingDataToParent();
    }
  }, [time]);

  return (
    <ProgressBar
      progress={time / totalTime}
      color={'#1CB0F6'}
      style={styles.progressBar}
    />
  );
}

const styles = StyleSheet.create({
  progressBar: {
    height: '20px',
    backgroundColor: '#fafafa',
  },
});

export default TimeRemaining;
