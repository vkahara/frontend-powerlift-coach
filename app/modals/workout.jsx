import { View, Text } from "react-native";
import React from "react";
import { useWeekData } from "../../contexts/WeekDataContext";

const Workout = () => {
  const { weekData, selectedDay } = useWeekData();

  const exercises = weekData.days[selectedDay].exercises;

  //MEIKÄ ON CODE JUMALA KATO MUA
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

const ExerciseBox = ({exercise}) => {

  return(
    <View>
    {console.log("EXERCISEJKDSJFLDS", exercise)}
    <Text>Exercise: {exercise.name}</Text>
    <Text>Sets: {exercise.sets}</Text>
    <Text>Reps: {exercise.reps}</Text>
    <Text>Intensity: {exercise.intensity}</Text>
    <Text>Load: {exercise.load}</Text>
    <Text>RPE: {exercise.rpe}</Text>
  </View>
  )
  
}

export default Workout;
