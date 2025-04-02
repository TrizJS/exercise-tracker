import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from '@rneui/themed';

export default function RepetitionExercise({ route, navigation }) {
  const { exercise, exercises } = route.params;
  const [count, setCount] = useState(0);

  const suggested = exercises.find(ex => ex.id === exercise.suggestedId);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>{exercise.name}</Text>
      <Text style={{ fontSize: 20, marginVertical: 10 }}>Count: {count}</Text>

      <Button title="Add Rep" onPress={() => setCount(count + 1)} />
      <Button title="Reset" onPress={() => setCount(0)} style={{ marginTop: 10 }} />
      <Button title="Go to Suggested" onPress={() => {
        const screen = suggested.type === 'repetition' ? 'RepetitionExercise' : 'DurationExercise';
        navigation.push(screen, { exercise: suggested, exercises });
      }} style={{ marginTop: 10 }} />
      <Button title="Home" onPress={() => navigation.navigate('Home')} style={{ marginTop: 10 }} />
    </View>
  );
}
