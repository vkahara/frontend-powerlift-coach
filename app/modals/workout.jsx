import { View, Text } from "react-native";
import React from "react";
import { useWeekData } from "../../contexts/WeekDataContext";
import ExerciseBox from "./ExerciseBox";

const Workout = () => {
  const { weekData, selectedDay } = useWeekData();
  const exercises = weekData.days[selectedDay].exercises;

  return (
    <View>
      <Text>Päivä numero {selectedDay + 1}</Text>
      {exercises.map((exercise, index) => (
        <View key={index}>
          <ExerciseBox exercise={exercise} />
        </View>
      ))}
    </View>
  );
};

export default Workout;
