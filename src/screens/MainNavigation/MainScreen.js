import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import PVT from '../../components/PVT/PVT';

const MainScreen = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleEndGame = (data) => {
    setGameStarted(data);
  };

  return (
    <View style={styles.layout}>
      {gameStarted ? (
        <PVT sendDataToParent={handleEndGame} />
      ) : (
        <Button title='Start Game' onPress={handleStartGame} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainScreen;
