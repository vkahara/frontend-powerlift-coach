import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useWeekData } from "../../contexts/WeekDataContext";
import { useRouter } from "expo-router";

const Home = () => {
  const { weekData, loading, error, setSelectedDay } = useWeekData();
  const router = useRouter();

  if (loading) return <Text>LOADING USERDATA 👺👺👺👺👺</Text>;
  if (error) return <Text>💀💀💀 {error.message}</Text>;

  const handleDayPress = (dayIndex) => {
    setSelectedDay(dayIndex);
    router.push("modals/workout");
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#2D5563", "#162A32"]}
        style={styles.background}
      />
      <View style={styles.weekInfo}>
        <View style={styles.rectangle9} />
        <Text style={styles.daysOut}>112 Days Out</Text>
        <Text style={styles.week}>Week 1</Text>
      </View>
      <View style={styles.buttonMenu}>
        {weekData &&
          weekData.days.map((day, index) => (
            <View
              key={index}
              style={styles.button}
              onTouchEnd={() => handleDayPress(index)}
            >
              <View style={styles.rectangle} />
              <Text style={styles.day}>Day {index + 1}</Text>
            </View>
          ))}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D5563"
  },
  background: {
    ...StyleSheet.absoluteFillObject
  },
  weekInfo: {
    width: 347,
    height: 177,
    marginTop: 62,
    marginHorizontal: 22,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    position: "relative"
  },
  rectangle9: {
    position: "absolute",
    width: 347,
    height: 177,
    backgroundColor: "#1E3E49",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 10
  },
  daysOut: {
    position: "absolute",
    width: 229,
    height: 24,
    left: 59,
    top: 113,
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 24,
    textAlign: "center",
    color: "#E9ECF5",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
  },
  week: {
    position: "absolute",
    width: 266,
    height: 73,
    left: 41,
    top: 52,
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: 60,
    lineHeight: 73,
    textAlign: "center",
    color: "#E9ECF5",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
  },
  buttonMenu: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 20
  },
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
