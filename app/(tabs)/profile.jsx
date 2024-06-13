import { View, Text } from 'react-native'
import React from 'react'
import { useUserLogin } from '../../fetching/login'

const Profile = () => {
    const { loading, error, data} = useUserLogin("testikauttaja", "kissa1234")
    if (loading) return <Text>Loading user</Text>
    if (error) return <Text>Error: {error}</Text>
    console.log("user: ",data)
  return (
    <View>
      <Text>profile</Text>
    </View>
  )
}

export default Profile