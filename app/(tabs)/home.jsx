import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>

      <Text>home</Text>
    </View>
  )
}

export default Home


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#2D5563',
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 300,
    },
    button: {
      padding: 15,
      alignItems: 'center',
      borderRadius: 5,
    },
    text: {
      backgroundColor: 'transparent',
      fontSize: 15,
      color: '#fff',
    },
  });