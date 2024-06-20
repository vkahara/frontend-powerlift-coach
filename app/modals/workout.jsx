import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useWeekData } from "../../contexts/WeekDataContext";
import ExerciseBox from "../../components/ExerciseBox";

const Workout = () => {
  const { weekData, selectedDay } = useWeekData();
  const exercises = weekData.days[selectedDay].exercises;

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#2D5563", "#162A32"]} style={styles.background} />
      <Text style={styles.dayText}>Päivä numero {selectedDay + 1}</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {exercises.map((exercise, index) => (
          <ExerciseBox key={index} exercise={exercise} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  dayText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 20,
    lineHeight: 24,
    color: '#FFFFFF',
    textAlign: 'center',
    marginVertical: 20,
  },
  scrollViewContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

export default Workout;
