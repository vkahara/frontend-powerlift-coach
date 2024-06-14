import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { router } from 'expo-router'
import AppContext from '../../stateStore/usercontext'

const Register = () => {
    const user = useContext(AppContext)
  return (
    <View>
      <Text onPress={() => router.push('(tabs)/home')}>register</Text>
    </View>
  )
}

export default Register
