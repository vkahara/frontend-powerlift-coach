import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link, Stack, useLocalSearchParams, useRouter } from "expo-router";
import HeaderCard from "../components/HeaderCard";


export default function App() {
    const router = useRouter()
    const params = useLocalSearchParams()
  return (
      <View className='flex-1 items-center justify-center bg-zinc-400'>
        <Text className='text-3xl' style={{paddingBottom: 50}}>Powerlifting Coach App</Text>
        <StatusBar style='auto' />
        <View className='flex-1 items-center justify-around bg-zinc-400'>
          <HeaderCard content={"sign-up"} onPress={() => router.push("/register")}/>
        <HeaderCard content={"sign-in"} onPress={() => router.push("/login")}/>  
        </View>
      </View>
    
  );
}
