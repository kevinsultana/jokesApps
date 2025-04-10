import React, {useEffect, useRef} from 'react';
import {Animated, Pressable, Text} from 'react-native';
import styles from '../styles/styles';

export default function AnimatedJokeItem({joke, onPress, delay = 0}) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(10)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 300,
        delay,
        useNativeDriver: true,
      }),
    ]).start();
  }, [delay, fadeAnim, translateY, scaleAnim]);

  return (
    <Animated.View
      style={[
        styles.jokeContainer,
        {
          opacity: fadeAnim,
          transform: [{translateY}, {scale: scaleAnim}],
        },
      ]}>
      <Pressable onPress={onPress}>
        <Text style={styles.jokeText}>- {joke}</Text>
      </Pressable>
    </Animated.View>
  );
}
