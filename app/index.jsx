import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";


export default function App() {
  return (
    
      <View className='flex-1 items-center justify-center bg-zinc-400'>
        <Text className='text-3xl'>Powerlifting Coach App</Text>
        <StatusBar style='auto' />
        <Link href='/home' style={{ color: "blue" }}>
          Home
        </Link>
      </View>
    
  );
}
