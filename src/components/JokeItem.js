import React from 'react';
import {Pressable, Text, View, Alert} from 'react-native';
import styles from '../styles/styles';

export default function JokeItem({joke}) {
  const showDialog = () => {
    Alert.alert('Jokes Details', joke);
  };

  return (
    <View style={styles.jokeContainer}>
      <Pressable onPress={showDialog}>
        <Text style={styles.jokeText}>- {joke}</Text>
      </Pressable>
    </View>
  );
}
