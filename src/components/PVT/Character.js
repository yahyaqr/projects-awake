import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';

import imgBangun from '../../assets/Bangun.png';
import imgTidur from '../../assets/Tidur.png';

function Character(props) {
  const { milliseconds, cueVisible } = props;

  useEffect(() => {
    const interval = setInterval(() => {
      props.sendCharacterDataToParent(true);
    }, Math.floor(Math.random() * 10000) + 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    props.sendCharacterDataToParent({ milliseconds });
  };

  return (
    <>
      {cueVisible ? (
        <img
          src={imgTidur}
          alt='Sleep, press me!'
          onClick={handleClick}
          style={styles.clickableImage}
          draggable={false}
        />
      ) : (
        <img
          src={imgBangun}
          alt='Awake, no cue!'
          style={styles.image}
          draggable={false}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    cursor: 'default',
    maxHeight: '350px',
  },
  clickableImage: {
    cursor: 'pointer',
    maxHeight: '350px',
  },
});

export default Character;
