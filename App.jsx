
import React, {useEffect, useState} from 'react';
import {TailwindProvider} from 'tailwindcss-react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTabScreen from './src/screens/HomeTabScreen';
import SplashScreen from './src/screens/SplashScreen';
import ArticleScreen from './src/screens/ArticleScreen';
import { CategoyContext } from './src/context/CategoryContext';




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
  const [currentCategory, setCurrentCategory] = useState({});

  
  return (
    <TailwindProvider>
      <CategoyContext.Provider value={{currentCategory, setCurrentCategory}}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="Splash">
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="HomeTab" component={HomeTabScreen} />
            <Stack.Screen name="Article" component={ArticleScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </CategoyContext.Provider>
    </TailwindProvider>
  );
}



export default App;
