import React, { useContext, useEffect, useState } from 'react'; // Fixed import statement
import { StyleSheet, Text, View } from 'react-native';
import { UserContext } from '../../core/UserContext';
import axios from 'axios';

const SleepTrackingScreen = () => {
  const { user } = useContext(UserContext);
  const [reactionTimes, setReactionTimes] = useState([]); // Added state for reaction times

  useEffect(() => {
    // Fetch reaction times data when component mounts
    fetchReactionTimesData();
  }, []); // Empty dependency array to ensure it runs only once on mount

  // Retrieve the reaction time data from db.json
  const fetchReactionTimesData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/reactionTimes?userId=${user.id}`, // Use template literals to interpolate user.id in URL
      );
      const reactionTimes = response.data;
      setReactionTimes(reactionTimes); // Update reaction times state with fetched data
    } catch (error) {
      console.error('Failed to fetch reaction times data:', error);
    }
  };

  // Extract the reaction times from the data array
  const allReactionTimes = reactionTimes.map((item) => item.data).flat();

  // Calculate the mean reaction time
  const meanReactionTime =
    allReactionTimes.reduce((acc, time) => acc + time, 0) /
    allReactionTimes.length;

  // Set the threshold for identifying lapses (in milliseconds)
  const threshold = 200;

  // Count the number of lapses
  const lapses = allReactionTimes.filter((time) => time > threshold).length;

  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Sleep Tracking Data</Text>
      <Text style={styles.text}>
        Mean Reaction Time: {meanReactionTime.toFixed(2)} ms
      </Text>
      <Text style={styles.text}>Lapses: {lapses}</Text>
      {/* Display other calculated data or analysis results */}
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
});

export default SleepTrackingScreen;
