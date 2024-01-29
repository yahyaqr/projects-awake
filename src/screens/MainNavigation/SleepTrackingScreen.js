import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

// Import Components
import DataCard from '../../components/Card/DataCard';

function ProfileScreen() {
  return (
    <SafeAreaView style={styles.layout}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sleep Data</Text>
      </View>
      <ScrollView style={styles.content}>
        <DataCard
          headerText={'03:00 PM'}
          subheaderText={'Wednesday, Feb 20 2023'}
        ></DataCard>
        <DataCard
          headerText={'01:00 PM'}
          subheaderText={'Wednesday, Feb 20 2023'}
        ></DataCard>
        <DataCard
          headerText={'11:00 AM'}
          subheaderText={'Wednesday, Feb 20 2023'}
        ></DataCard>
        <DataCard
          headerText={'09:00 AM'}
          subheaderText={'Wednesday, Feb 20 2023'}
        ></DataCard>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '20px',
    paddingRight: '20px',
    maxHeight: '75px',
    width: '100%',
  },
  headerText: {
    fontSize: '24px',
    fontWeight: '700',
  },
  content: {
    height: '400px',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
});

export default ProfileScreen;
