
import React, {useEffect, useState} from 'react';
import {TailwindProvider} from 'tailwindcss-react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTabScreen from './src/screens/HomeTabScreen';
import SplashScreen from './src/screens/SplashScreen';
import ArticleScreen from './src/screens/ArticleScreen';
import OrderArticleScreen from './src/screens/OrderArticleScreen';
import { ArticleContext } from './src/context/ArticleContext';





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
  const [currentArticle, setCurrentArticle] = useState({});

  
  return (
    <TailwindProvider>
      <ArticleContext.Provider value={{currentArticle, setCurrentArticle}}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="Splash">
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="HomeTab" component={HomeTabScreen} />
            <Stack.Screen name="Article" component={ArticleScreen} />
            <Stack.Screen name="OrderArticle" component={OrderArticleScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ArticleContext.Provider>
    </TailwindProvider>
  );
}



export default App;
