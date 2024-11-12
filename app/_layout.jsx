import { useFonts} from 'expo-font'
import { useEffect } from 'react'
import { Stack,SplashScreen } from 'expo-router'
import React from 'react'

SplashScreen.preventAutoHideAsync();

const layout = () => {
    const [fontsLoaded, error] = useFonts({
        "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
        "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
       
      });
      
      useEffect(() => {
        if (error) throw error;
      
        if (fontsLoaded) {
          SplashScreen.hideAsync();
        }
      }, [fontsLoaded, error]);
      
      if (!fontsLoaded && !error) {
        return null;
      }
      
    return (
        <Stack>
            <Stack.Screen name = "index" options={{headerShown:false}}/>
            <Stack.Screen name = "(tabs)/MenuScreen" options={{headerShown:false}}/>
            <Stack.Screen name = "(tabs)/PetSittersList" options={{headerShown:false}}/>
            <Stack.Screen name = "(tabs)/PetSit" options={{headerShown:false}}/> 
            <Stack.Screen name = "(tabs)/PetDetails" options={{headerShown:false}}/>
            <Stack.Screen name = "(tabs)/settings" options={{headerShown:false}}/>
            <Stack.Screen name = "(tabs)/Confirmation" options={{headerShown:false}}/>
            <Stack.Screen name = "(tabs)/PersonDetails" options={{headerShown:false}}/>
        </Stack>
    )
}

export default layout