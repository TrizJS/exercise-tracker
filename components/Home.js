import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';

const exercises = [
  { id: '1', name: 'Push Ups', type: 'repetition', suggestedId: '2' },
  { id: '2', name: 'Planks', type: 'duration', suggestedId: '1' }
];

export default function Home({ navigation }) {
  const renderItem = ({ item }) => (
    <Button
      title={item.name}
      type="solid"
      onPress={() => {
        const screen = item.type === 'repetition' ? 'RepetitionExercise' : 'DurationExercise';
        navigation.navigate(screen, { exercise: item, exercises });
      }}
      buttonStyle={styles.button}
      titleStyle={{ fontWeight: 'bold' }}
      containerStyle={{ marginVertical: 5 }}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercises</Text>
      <FlatList data={exercises} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#9be7c4',
    borderRadius: 20,
    width: 200
  }
});
