import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DayButton = ({ day, index, handleDayPress }) => {
  return (
    <View
      key={index}
      style={styles.button}
      onTouchEnd={() => handleDayPress(index)}
    >
      <View style={styles.rectangle} />
      <Text style={styles.day}>Day {index + 1}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 322,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  rectangle: {
    position: "absolute",
    width: 322,
    height: 60,
    backgroundColor: "#379472",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 10
  },
  day: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 29,
    textAlign: "center",
    color: "#E9ECF5",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
  }
});

export default DayButton;
