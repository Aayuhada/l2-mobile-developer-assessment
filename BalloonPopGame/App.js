import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';

const App = () => {
  const [seconds, setSeconds] = useState(120); // Game duration is 2 minutes
  const [score, setScore] = useState(0);

  // Timer logic
  useEffect(() => {
    let interval = null;
    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      Alert.alert("Time's up!", `Your score: ${score}`, [{ text: 'OK' }]);
    }
    return () => clearInterval(interval);
  }, [seconds]);

  // Dummy function for popping balloons
  const popBalloon = () => {
    setScore(score + 2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>Time: {Math.floor(seconds / 60)}:{seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}</Text>
      <Text style={styles.score}>Score: {score}</Text>
      <TouchableOpacity style={styles.balloon} onPress={popBalloon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  timer: {
    fontSize: 24,
    marginBottom: 10,
  },
  score: {
    fontSize: 24,
    marginBottom: 20,
  },
  balloon: {
    width: 50,
    height: 70,
    backgroundColor: 'red',
    borderRadius: 25,
  },
});

export default App;
