import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

import Card from './Card';
import TogglingRowCard from './TogglingRowCard';

function TrialSettingsCard(props) {
  const [inputSettings, setInputSettings] = useState(false);
  const { headerText, subheaderText } = props;

  const handleButton = () => {
    setInputSettings(!inputSettings);
  };

  return (
    <Card headerText={headerText} subheaderText={subheaderText}>
      <View style={styles.row}>
        <TogglingRowCard
          inputSettings={inputSettings}
          dataTitle={'Trial Length'}
          data={'trialLength'}
        />
      </View>
      <View style={styles.row}>
        <TogglingRowCard
          inputSettings={inputSettings}
          dataTitle={'Lapse Threshold'}
          data={'lapseThreshold'}
        />
      </View>
      <View style={styles.row}>
        <TogglingRowCard
          inputSettings={inputSettings}
          dataTitle={'Show Instructions'}
          data={'showInstructions'}
        />
      </View>
      <View style={[styles.row, styles.paddingAddition]}>
        {inputSettings ? (
          <Pressable style={styles.changeButtonSubmit} onPress={handleButton}>
            <Text style={styles.changeButtonSubmitText}>Submit Changes</Text>
          </Pressable>
        ) : (
          <Pressable style={styles.changeButton} onPress={handleButton}>
            <Text style={styles.changeButtonText}>Change Trial Settings</Text>
          </Pressable>
        )}
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
  changeButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '7.5px',
    padding: '10px',
    height: '40px',
    width: '100%',
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '5px',
    backgroundColor: '#F8F6F9',
  },
  changeButtonSubmit: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '7.5px',
    padding: '10px',
    height: '40px',
    width: '100%',
    fontSize: 14,
    color: '#116A4C',
    borderWidth: 1,
    borderColor: '#116A4C',
    borderRadius: '5px',
    backgroundColor: '#D4FFAB',
  },
  changeButtonText: {
    color: 'rgba(0, 0, 0, 0.5)',
  },
  changeButtonSubmitText: {
    MozUserSelect: 'none',
    WebkitUserSelect: 'none',
    msUserSelect: 'none',
    color: '#116A4C',
  },
});

export default TrialSettingsCard;
