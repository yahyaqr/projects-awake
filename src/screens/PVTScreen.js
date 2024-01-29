import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import TimeRemaining from '../components/PVT/TimeRemaining';
import MotivationText from '../components/PVT/MotivationText';
import Character from '../components/PVT/Character';
import CountingText from '../components/PVT/CountingText';

const MainScreen = () => {
  const navigation = useNavigation();
  const millisecondsArray = [];
  const totalTime = 10;

  const handleTimeRemainingData = (data) => {
    setMilliseconds(0);
    setTime(totalTime);
    navigation.navigate('GameEnded');
  };

  const handleCharacterData = (data) => {
    setCueVisible(!cueVisible);
    setMilliseconds(0);
    millisecondsArray.push(data.milliseconds);
  };

  // DECREASING TIME
  const [time, setTime] = useState(totalTime);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // INCREASING MILISECONDS
  const [cueVisible, setCueVisible] = useState(false);
  const [milliseconds, setMilliseconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setMilliseconds((prevMilliseconds) => prevMilliseconds + 1);
    }, 1);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={styles.container}>
      <TimeRemaining
        sendTimeRemainingDataToParent={handleTimeRemainingData}
        time={time}
        totalTime={totalTime}
        style={styles.timeRemaining}
      />
      <View style={styles.center}>
        <MotivationText milliseconds={milliseconds} cueVisible={cueVisible} />
        <Character
          sendCharacterDataToParent={handleCharacterData}
          milliseconds={milliseconds}
          cueVisible={cueVisible}
        />
        <CountingText milliseconds={milliseconds} cueVisible={cueVisible} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  center: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainScreen;
