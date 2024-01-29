import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import imgBangun from '../../assets/Bangun.png';

const MainScreen = () => {
  const navigation = useNavigation();
  const handleStartGame = () => {
    navigation.navigate('PVT');
  };

  return (
    <View style={styles.layout}>
      <img src={imgBangun} style={styles.image} draggable={false} />
      <Pressable style={styles.startButton} onPress={handleStartGame}>
        <Text style={styles.text}>START GAME</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    cursor: 'default',
    maxHeight: '350px',
  },
  startButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30px',
    width: '275px',
    maxHeight: '75px',
    backgroundColor: '#56C0B8',
    border: '3px solid #1F0E0D',
    shadowColor: '#111',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    borderRadius: '10px',
  },
  text: {
    fontWeight: 700,
    fontSize: '24px',
    userSelect: 'none',
  },
});

export default MainScreen;
