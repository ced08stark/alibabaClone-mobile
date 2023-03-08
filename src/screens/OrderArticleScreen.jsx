import { View, Text, TouchableOpacity, SafeAreaView, TextInput, ScrollView, Image } from 'react-native'
import React,{useState, useEffect, useContext} from 'react'
import { BuildingStorefrontIcon, ArrowLeftIcon, CameraIcon, ShoppingCartIcon, EllipsisVerticalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import CargoImage from '../images/cargo.png'
import { urlFor } from '../../sanity'
import { ArticleContext } from '../context/ArticleContext'
import { useRoute } from '@react-navigation/native'



const OrderArticleScreen = () => {
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
    const [headerBg, SetHeaderBg] = useState('bg-transparent');
    const onScrolled = () =>{
        SetHeaderBg('bg-black/30');
    }
    const onScrolledEnd = () =>{
        SetHeaderBg('bg-transparent');
    }
    
    const {currentArticle} = useContext(ArticleContext);
   
  return (
    <SafeAreaView className="relative flex-1 bg-white">
      <View
        className={`absolute top-0 w-full p-3 space-x-2 flex-row z-10 items-center ${headerBg}`}>
        <View className="rounded-full bg-black/40 items-center justify-center w-[30px] h-[30px]">
          <ArrowLeftIcon size={24} color="white" />
        </View>
        <View
          className={`flex-row px-1 h-10 rounded-full w-2/3 items-center bg-black/40`}>
          <MagnifyingGlassIcon size={12} color="white" />
          <TextInput className="text-xs" placeholder="chaussure pour homme" />
        </View>
        <View className=" bg-black/40 w-[30px] h-[30px] rounded-full items-center justify-center">
          <CameraIcon size={24} color="white" />
        </View>
        <View className=" bg-black/40 w-[30px] h-[30px] rounded-full items-center justify-center">
          <EllipsisVerticalIcon size={24} color="white" />
        </View>
      </View>
      <ScrollView
        className="h-[1000px]"
        onScrollEndDrag={() => onScrolledEnd()}
        onScroll={() => onScrolled()}>
        <View className="w-full h-[500px]">
          <Image
            source={{uri: urlFor(image).url()}}
            className="w-full h-[300px]"
          />
        </View>
        <ScrollView className="h-[1000px] flex-1">
          <View className="w-full h-[500px]">
            <Image source={CargoImage} className="w-full" />
          </View>
          <Text>tototototo</Text>
          <Text>tototototo</Text>
          <Text>tototototo</Text>
          <Text>tototototo</Text>
        </ScrollView>
      </ScrollView>
      <View className="absolute bottom-0 w-full p-3 px-4 flex-row items-center justify-between bg-white">
        <View>
          <BuildingStorefrontIcon size={24} fill="transparent" color="black" />
          <Text className="text-black">magasin</Text>
        </View>
        <TouchableOpacity className="px-2 py-2 rounded-full border-black border text-center items-center justify-center">
          <Text className="font-bold text-black">Discuter maintenant</Text>
        </TouchableOpacity>
        <TouchableOpacity className="px-2 py-2 rounded-full bg-orange-600 items-center justify-center">
          <Text className="font-bold text-white">Commander</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default OrderArticleScreen