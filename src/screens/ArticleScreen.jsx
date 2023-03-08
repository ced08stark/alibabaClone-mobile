import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  useWindowDimensions,
  StatusBar
} from 'react-native';
import React, {useEffect} from 'react'
import {
  ChevronLeftIcon,
  PhotoIcon,
  MagnifyingGlassIcon,
  CameraIcon,
  VideoCameraIcon,
  VideoCameraSlashIcon,
} from 'react-native-heroicons/outline';
import HeaderProduct from '../components/HeaderProduct';
import {TabBar} from 'react-native-tab-view';
import {TabView, SceneMap} from 'react-native-tab-view';
import MorePopular from './MorePopular';
import MoreLike from './MoreLike';
import VentePopular from './VentePopular';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import {useContext} from 'react';
import {ArticleContext} from '../context/ArticleContext';

const renderScene = SceneMap({
  popular: MorePopular,
  vente: VentePopular,
  like: MoreLike,
});



const ArticleScreen = () => {
    const {
      params: {
        id,
        image,
        title,
        description,
        price,
        quantity,
        category,
        date,
        rating,
      },
    } = useRoute();
    
    const {setCurrentArticle} = useContext(ArticleContext);
     useEffect(() => {
       setCurrentArticle({
         id,
         image,
         title,
         description,
         price,
         quantity,
         category,
         date,
         rating,
       });
     }, [setCurrentArticle]);
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      {
        key: 'popular',
        title: 'Les plus populaires',
      },
      {key: 'vente', title: 'Ventes a la une'},
      {key: 'like', title: 'Mieux evalues'},
    ]);
    const navigator  = useNavigation()
   
    
    const renderTabBar = props => (
      <TabBar
        {...props}
        indicatorStyle={{backgroundColor: 'black'}}
        style={{backgroundColor: 'transparent', elevation: 0}}
        inactiveColor="gray"
        activeColor="black"
        labelStyle={{textTransform: 'none', textAlign: 'left', fontSize: 13, fontWeight: 'bold'}}
        
      />
    );
    
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar backgroundColor='white' />
      <View className="flex-row px-4 items-center justify-between py-2">
        <TouchableOpacity onPress={() => navigator.goBack()}>
          <ChevronLeftIcon color="black" fill="transparent" size={24} />
        </TouchableOpacity>
        <Text className="text-black font-bold text-[16px]">Produits les mieux classes</Text>
        <TouchableOpacity>
          <MagnifyingGlassIcon color="black" fill="transparent" size={24} />
        </TouchableOpacity>
      </View>
      <HeaderProduct
        titleCategorie={category?.title}
        titleArticle={category?.description}
        color="bg-blue-200"
      />
      <View className="flex-row flex-1">
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
          renderTabBar={renderTabBar}
        />
      </View>
    </SafeAreaView>
  );
}

export default ArticleScreen