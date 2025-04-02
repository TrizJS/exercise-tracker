import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';

export default function RepetitionExercise({ route, navigation }) {
  const { exercise, exercises } = route.params;
  const [count, setCount] = useState(0);
  const suggested = exercises.find(e => e.id === exercise.suggestedId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{exercise.name} Repetition</Text>
      <Button
        title={`Suggested: ${suggested.name}`}
        type="solid"
        buttonStyle={[styles.button, { backgroundColor: '#a8e6cf' }]}
        onPress={() => {
          const screen = suggested.type === 'repetition' ? 'RepetitionExercise' : 'DurationExercise';
          navigation.push(screen, { exercise: suggested, exercises });
        }}
      />
      <Text style={styles.counter}>Rep Count: {count}</Text>
      <Button title="Add" onPress={() => setCount(count + 1)} buttonStyle={styles.button} />
      <Button title="Reset" onPress={() => setCount(0)} buttonStyle={styles.button} />
      <Button title="Home" onPress={() => navigation.navigate('Home')} buttonStyle={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  counter: { fontSize: 20, marginVertical: 10 },
  button: { backgroundColor: '#9be7c4', borderRadius: 20, marginVertical: 5, width: 200 }
});
