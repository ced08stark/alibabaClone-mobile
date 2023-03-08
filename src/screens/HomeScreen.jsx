import { View, Text, SafeAreaView, ScrollView, useWindowDimensions } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBar } from 'react-native-tab-view';
import {TabView, SceneMap} from 'react-native-tab-view';
import FabricantRoute from './FabricantRoute';
import ProductRoute from './ProductRoute';


const renderScene = SceneMap({
  product: ProductRoute,
  fabrican: FabricantRoute,
});

const HomeScreen = () => {
  const layout = useWindowDimensions();
   const [index, setIndex] = React.useState(0);
   const [routes] = React.useState([
     {key: 'product', title: 'Product'},
     {key: 'fabrican', title: 'Fabrican'},
   ]);

   const renderTabBar = props => (
     <TabBar
       {...props}
       indicatorStyle={{backgroundColor: 'black'}}
       style={{backgroundColor: 'white', elevation: 0}}
       inactiveColor="gray"
       activeColor="black"
       labelStyle={{textTransform: 'capitalize'}}
     />
   );

    
   

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabBar}
    />
  );
}

export default HomeScreen