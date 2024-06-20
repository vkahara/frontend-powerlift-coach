import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ExerciseBox = ({ exercise }) => {
  return (
    <View style={styles.exerciseBox}>
      <Text style={styles.exerciseName}>{exercise.name}</Text>
      <Text style={styles.exerciseDetail}>Sets: {exercise.sets}</Text>
      <Text style={styles.exerciseDetail}>Reps: {exercise.reps}</Text>
      <Text style={styles.exerciseDetail}>Intensity: {exercise.intensity}</Text>
      <Text style={styles.exerciseDetail}>Load: {exercise.load}</Text>
      <Text style={styles.exerciseDetail}>RPE: {exercise.rpe}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  exerciseBox: {
    width: 347,
    backgroundColor: "#1E3E49",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  exerciseName: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 20,
    lineHeight: 24,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  exerciseDetail: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 18,
    color: '#FFFFFF',
    marginBottom: 5,
  },
});

export default ExerciseBox;
