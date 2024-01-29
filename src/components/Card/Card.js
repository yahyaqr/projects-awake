import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Card(props) {
  const { headerText, subheaderText, children } = props;

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardHeaderText}>{headerText}</Text>
        <Text style={styles.cardSubheaderText}>{subheaderText}</Text>
      </View>
      <View style={styles.cardBody}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    width: '100%',
    borderWidth: 2,
    borderColor: '#111111',
    borderRadius: '5px',
    marginBottom: '10px',
  },
  cardHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxHeight: '45px',
    padding: '10px',
    backgroundColor: '#EBEAEB',
    borderBottomWidth: 1,
    borderColor: '#111111',
  },
  cardHeaderText: {
    fontSize: '16px',
    fontWeight: '700',
  },
  cardSubheaderText: {
    fontSize: '16px',
    fontWeight: '400',
  },
  cardBody: {
    padding: '10px',
    backgroundColor: '#F3F0F4',
  },
});

export default Card;
