import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function Topbar() {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.info}>
        <Ionicons name='trophy-outline' size={24} color='black' />
        <Text style={styles.infoText}>Level 5</Text>
      </View>
      <View style={styles.info}>
        <Ionicons name='heart-outline' size={24} color='black' />
        <Text style={styles.infoText}>Health 80%</Text>
      </View>
      <View style={styles.info}>
        <Ionicons name='flash-outline' size={24} color='black' />
        <Text style={styles.infoText}>Streak 3</Text>
      </View>
      <View style={styles.info}>
        <Ionicons name='coins-outline' size={24} color='black' />
        <Text style={styles.infoText}>Coins 100</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingTop: '20px',
    paddingBottom: '20px',
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    marginLeft: 5,
  },
});

export default Topbar;
