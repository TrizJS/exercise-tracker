import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from '@rneui/themed';

export default function DurationExercise({ route, navigation }) {
  const { exercise, exercises } = route.params;
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const suggested = exercises.find(ex => ex.id === exercise.suggestedId);

  const startTimer = () => {
    if (!running) {
      setRunning(true);
      const interval = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);

      setTimeout(() => {
        clearInterval(interval);
        setRunning(false);
      }, 10000); // 10s for demo
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>{exercise.name}</Text>
      <Text style={{ fontSize: 20, marginVertical: 10 }}>Time: {time} seconds</Text>

      <Button title="Start Timer" onPress={startTimer} />
      <Button title="Reset" onPress={() => setTime(0)} style={{ marginTop: 10 }} />
      <Button title="Go to Suggested" onPress={() => {
        const screen = suggested.type === 'repetition' ? 'RepetitionExercise' : 'DurationExercise';
        navigation.push(screen, { exercise: suggested, exercises });
      }} style={{ marginTop: 10 }} />
      <Button title="Home" onPress={() => navigation.navigate('Home')} style={{ marginTop: 10 }} />
    </View>
  );
}
