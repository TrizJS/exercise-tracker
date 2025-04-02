import React from 'react';
import { View, FlatList } from 'react-native';
import { Button } from '@rneui/themed';

const exercises = [
  { id: '1', name: 'Push Ups', type: 'repetition', suggestedId: '2' },
  { id: '2', name: 'Plank', type: 'duration', suggestedId: '1' }
];

export default function Home({ navigation }) {
  const renderItem = ({ item }) => (
    <Button
      title={item.name}
      onPress={() => {
        const targetScreen = item.type === 'repetition' ? 'RepetitionExercise' : 'DurationExercise';
        navigation.navigate(targetScreen, { exercise: item, exercises });
      }}
      style={{ marginVertical: 10 }}
    />
  );

  return (
    <View style={{ padding: 20 }}>
      <FlatList data={exercises} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>
  );
}
