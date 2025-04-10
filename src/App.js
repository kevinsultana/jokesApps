import {View} from 'react-native';
import React from 'react';
import Home from './screens/Home';
import styles from './styles/styles';
import Background from './components/Background';

export default function App() {
  return (
    <View style={styles.container}>
      <Background />
      <Home />
    </View>
  );
}
