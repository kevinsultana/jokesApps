import {Image} from 'react-native';
import React from 'react';

export default function Background() {
  return (
    <Image
      source={require('../assets/background.png')}
      style={{
        flex: 1,
        resizeMode: 'contain',
        position: 'absolute',
        opacity: 0.1,
      }}
    />
  );
}
