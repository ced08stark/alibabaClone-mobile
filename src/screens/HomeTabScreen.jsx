import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import UserScreen from './UserScreen';
import ShopScreen from './ShopScreen';
import InformationScreen from './InformationScreen';
import MessengerScreen from './MessengerScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  SparklesIcon,
  HomeModernIcon,
  HomeIcon,
  UserIcon,
  UserCircleIcon,
  ShoppingCartIcon,
  ShoppingBagIcon,
  InformationCircleIcon,
  SignalIcon,
  SignalSlashIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ChatBubbleBottomCenterIcon,
  ChatBubbleLeftEllipsisIcon,
  ChatBubbleBottomCenterTextIcon
} from 'react-native-heroicons/outline';

const HomeTabScreen = () => {
    const Tab = createBottomTabNavigator();
  return (
    
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? (
                <HomeIcon color="white" fill="#f97216" size={42} />
              ) : (
                <HomeIcon color="gray" fill="white" size={30} />
              );
            } else if (route.name === 'User') {
              iconName = focused ? (
                <UserCircleIcon color="white" fill="#f97216" size={42} />
              ) : (
                <UserCircleIcon color="gray" fill="white" size={30} />
              );
            } else if (route.name === 'Shop') {
              iconName = focused ? (
                <ShoppingBagIcon color="white" fill="#f97216" size={42} />
              ) : (
                <ShoppingBagIcon color="gray" fill="white" size={30} />
              );
            } else if (route.name === 'Info') {
              iconName = focused ? (
                <InformationCircleIcon color="white" fill="#f97216" size={42} />
              ) : (
                <InformationCircleIcon color="gray" fill="white" size={30} />
              );
            } else if (route.name === 'Message') {
              iconName = focused ? (
                <ChatBubbleOvalLeftEllipsisIcon
                  color="#f97216"
                  fill="white"
                  size={42}
                />
              ) : (
                <ChatBubbleBottomCenterTextIcon
                  color="gray"
                  fill="white"
                  size={30}
                />
              );
            }

            // You can return any component that you like here!
            return iconName;
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Info" component={InformationScreen} />
        <Tab.Screen name="Message" component={MessengerScreen} />
        <Tab.Screen name="User" component={UserScreen} />
        <Tab.Screen name="Shop" component={ShopScreen} />
      </Tab.Navigator>
    
  );
}

export default HomeTabScreen;