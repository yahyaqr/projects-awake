import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Card from './Card';

function DataCard(props) {
  const { headerText, subheaderText } = props;

  return (
    <Card headerText={headerText} subheaderText={subheaderText}>
      <View style={styles.row}>
        <Text style={styles.rowTitle}>Mean</Text>
        <Text style={styles.rowContent}>564.00</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.rowTitle}>Median</Text>
        <Text style={styles.rowContent}>500.00</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.rowTitle}>Max</Text>
        <Text style={styles.rowContent}>913.00</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.rowTitle}>Min</Text>
        <Text style={styles.rowContent}>123.00</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.rowTitle}>Lapses</Text>
        <Text style={styles.rowContent}>5</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxHeight: '45px',
    paddingTop: '7.5px',
    paddingBottom: '7.5px',
  },
  paddingAddition: {
    paddingBottom: '15px',
  },
  rowTitle: {
    fontSize: '16px',
    opacity: '75%',
    color: '#111111',
  },
  rowContent: {
    fontSize: '16px',
    fontWeight: '400',
  },
});

export default DataCard;
