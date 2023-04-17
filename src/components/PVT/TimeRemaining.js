import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-native-paper';

function TimeRemaining(props) {
  const totalTime = 20;
  const [time, setTime] = useState(totalTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((time) => {
        props.sendDataToParent(time - 1); // Call sendDataToParent inside setInterval callback
        return time - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <ProgressBar progress={time / totalTime} />;
}

export default TimeRemaining;
