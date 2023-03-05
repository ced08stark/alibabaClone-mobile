
import React, {useEffect} from 'react';
import {TailwindProvider} from 'tailwindcss-react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTabScreen from './src/screens/HomeTabScreen';
import SplashScreen from './src/screens/SplashScreen';



import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  
} from 'react-native';





function App() {
  const isDarkMode = useColorScheme() === 'dark';
  
  const Stack = createNativeStackNavigator();

  
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="HomeTab" component={HomeTabScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}



export default App;
