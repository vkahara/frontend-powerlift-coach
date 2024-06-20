import React from "react";
import { View, Text } from "react-native";

const ExerciseBox = ({ exercise }) => {
  return (
    <View>
      <Text>Exercise: {exercise.name}</Text>
      <Text>Sets: {exercise.sets}</Text>
      <Text>Reps: {exercise.reps}</Text>
      <Text>Intensity: {exercise.intensity}</Text>
      <Text>Load: {exercise.load}</Text>
      <Text>RPE: {exercise.rpe}</Text>
    </View>
  );
};

export default ExerciseBox;
