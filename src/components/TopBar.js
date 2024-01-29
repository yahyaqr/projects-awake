import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BrainIcon from '../assets/Icons/Topbar/BrainIcon';
import FireIcon from '../assets/Icons/Topbar/FireIcon';
import CoinIcon from '../assets/Icons/Topbar/CoinIcon';

function Topbar() {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.info}>
        <BrainIcon size='40' color='#FFFFFF'></BrainIcon>
        <Text style={[styles.infoText, styles.colorBrain]}>10</Text>
      </View>
      <View style={styles.info}>
        <FireIcon size='40' color='#FFFFFF'></FireIcon>
        <Text style={[styles.infoText, styles.colorFire]}>15</Text>
      </View>
      <View style={styles.info}>
        <CoinIcon size='40' color='#FFFFFF'></CoinIcon>
        <Text style={[styles.infoText, styles.colorCoin]}>1500</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: '12px',
    paddingBottom: '12px',
    backgroundColor: '#FCF6FD',
    borderBottomWidth: 4,
    borderBottomColor: '#EBEAEB',
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    fontSize: 28,
    marginLeft: 5,
  },
  colorBrain: {
    color: '#EB5851',
  },
  colorFire: {
    color: '#FF9600',
  },
  colorCoin: {
    color: '#3BB0F0',
  },
});

export default Topbar;
