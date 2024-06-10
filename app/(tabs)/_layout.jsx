import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'
import React from 'react'

const TabIcon = ({icon, color, name, focused}) => {
    return ( 
    <View>
        <Image 
        source={icon}
        resizeMode='contain' 
        tintColor={color} 
        className="w-6 h-6"
         />
    </View>
    )
}

const TabsLayout = () => {
  return (
    <>
    <Tabs screenOptions={{ 
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
            backgroundColor: '#161622',
            borderTopColor: '#232533',
            height: 100,
        }
        }}>
        <Tabs.Screen 
        name='home'
        options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({color, focused }) => (
                <TabIcon 
                icon={icons.home2}
                color={color}
                name="Home"
                focused={focused}
                 />
            )
        }}/>
        <Tabs.Screen 
        name='profile'
        options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({color, focused }) => (
                <TabIcon 
                icon={icons.profile2}
                color={color}
                name="Profile"
                focused={focused}
                 />
            )
        }}/>
        <Tabs.Screen 
        name='settings'
        options={{
            title: 'Settings',
            headerShown: false,
            tabBarIcon: ({color, focused }) => (
                <TabIcon 
                icon={icons.settings}
                color={color}
                name="Settings"
                focused={focused}
                 />
            )
        }}/>
    </Tabs>
    </>
  )
}

export default TabsLayout