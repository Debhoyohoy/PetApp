import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native-web'

const AuthLayout = () => {
  return (
    <>
        <Stack>
            <Stack.Screen
                name="sign-in"
                options={{headerShown: false}}
    />
    <Stack.Screen
        name = "sign-up"
        options = {{headerShown: false}}
    />
    </Stack>
    <StatusBar backgroundColor="blue" style="light"/>
    </>
  )
}

export default AuthLayout 