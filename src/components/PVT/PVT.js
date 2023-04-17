import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import TimeRemaining from './TimeRemaining';
import imgBangun from '../../assets/Bangun.png';
import imgTidur from '../../assets/Tidur.png';
import axios from 'axios';
import { UserContext } from '../../core/UserContext';

function PVT(props) {
  const { user } = useContext(UserContext);

  const [cueVisible, setCueVisible] = useState(false);
  const [progressBar, setProgressBar] = useState(undefined);
  const [gameEnded, setGameEnded] = useState(false);

  // reactionTimes adalah array dari milliseconds
  const [reactionTimes, setReactionTimes] = useState([]);
  const [milliseconds, setMilliseconds] = useState(0);

  useEffect(() => {
    // Function to increment milliseconds
    const incrementMilliseconds = () => {
      setMilliseconds((prevMilliseconds) => prevMilliseconds + 1);
    };

    // Check if cue is visible
    if (cueVisible) {
      // Set interval only if cue is visible
      const interval = setInterval(incrementMilliseconds, 0);

      // Clear interval on cleanup
      return () => {
        clearInterval(interval);
      };
    }
  }, [cueVisible]); // Add cueVisible as a dependency

  useEffect(() => {
    const randomInterval = Math.floor(Math.random() * 8000) + 2000;
    const timer = setInterval(() => {
      setCueVisible(true);
    }, randomInterval);

    return () => clearInterval(timer);
  }, []);

  function handlePress() {
    if (cueVisible) {
      const reactionTimes = milliseconds;
      console.log(reactionTimes);
      setReactionTimes((prevReactionTimes) => [
        ...prevReactionTimes,
        reactionTimes,
      ]);
      setMilliseconds(0);
      setCueVisible(false);
    }
  }

  const resetGame = () => {
    setReactionTimes([]);
    setMilliseconds(0);
    setCueVisible(false);
    setProgressBar(undefined);
    setGameEnded(false);
  };

  const handleChildData = (data) => {
    setProgressBar(data);
    if (data === 0) {
      setGameEnded(true);
    }
  };

  useEffect(() => {
    if (progressBar === 0 && reactionTimes.length > 0) {
      axios
        .post('http://localhost:3000/reactionTimes', {
          userId: user.id,
          data: reactionTimes,
        })
        .then(() => {
          console.log('Reaction times data saved successfully');
        })
        .catch((error) => {
          console.log({ userId: user.id, data: reactionTimes });
          console.error('Failed to save reaction times data', error);
        });
    }
  }, [progressBar, reactionTimes]);

  return (
    <View>
      {gameEnded ? (
        <>
          <Text style={styles.text}>
            Time's up! Your reaction time was{' '}
            {JSON.stringify(reactionTimes, null, 0)}.
          </Text>
          <View>
            <Button
              title='Back to Main'
              onPress={() => props.sendDataToParent(false)}
            />
            <Button title='Try Again' onPress={() => resetGame()} />
          </View>
        </>
      ) : (
        <>
          <TimeRemaining sendDataToParent={handleChildData} />
          <View style={styles.center}>
            {cueVisible ? (
              <img
                src={imgTidur}
                alt='Press me!'
                onClick={handlePress}
                style={{ cursor: 'pointer' }}
                draggable={false}
              />
            ) : (
              <img
                src={imgBangun}
                alt='No cue'
                style={{ cursor: 'default' }}
                draggable={false}
              />
            )}
            <Text style={styles.text}>{milliseconds}</Text>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    margin: 20,
  },
});

export default PVT;
