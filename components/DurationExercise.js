import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';

export default function DurationExercise({ route, navigation }) {
  const { exercise, exercises } = route.params;
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);
  const suggested = exercises.find(e => e.id === exercise.suggestedId);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [running]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{exercise.name} Duration</Text>
      <Text style={styles.timer}>{new Date(seconds * 1000).toISOString().substr(11, 8)}</Text>
      <Button
        title={running ? 'Pause' : 'Start'}
        onPress={() => setRunning(!running)}
        buttonStyle={styles.button}
      />
      <Button
        title="Reset"
        onPress={() => { setSeconds(0); setRunning(false); }}
        buttonStyle={styles.button}
      />
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
        buttonStyle={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  timer: { fontSize: 32, marginBottom: 20 },
  button: { backgroundColor: '#9be7c4', borderRadius: 20, marginVertical: 5, width: 200 }
});
