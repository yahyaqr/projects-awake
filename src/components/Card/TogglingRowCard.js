import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function TogglingRowCard(props) {
  const { inputSettings, dataTitle, data } = props;
  const [userData, setUserData] = useState({});
  const [text, onChangeText] = useState(userData[data]);

  const checkUserInfo = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('@user');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        return parsedUser;
      }
    } catch (error) {
      console.log('Error retrieving login status:', error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await checkUserInfo(data);
        setUserData(data);
      } catch (error) {
        console.error('Error retrieving user id:', error);
      }
    };

    fetchUserData();
  }, []);

  //   http://34.101.218.37:8000/users/1
  return (
    <View style={styles.row}>
      <Text style={styles.rowTitle}>{dataTitle}</Text>
      {inputSettings ? (
        <TextInput
          style={styles.rowContentInput}
          onChangeText={onChangeText}
          value={userData[data]}
        />
      ) : (
        <Text style={styles.rowContent}>
          {userData[data] === true ? 'True' : userData[data]}
        </Text>
      )}
    </View>
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
  rowContentInput: {
    padding: '5px',
    fontSize: '16px',
    fontWeight: '400',
    borderWidth: '1px',
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '5px',
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
  changeButtonText: {
    MozUserSelect: 'none',
    WebkitUserSelect: 'none',
    msUserSelect: 'none',
    color: 'rgba(0, 0, 0, 0.5)',
  },
});

export default TogglingRowCard;
