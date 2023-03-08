import { View, Text, TouchableOpacity, SafeAreaView, TextInput, ScrollView, Image, StatusBar } from 'react-native'
import React,{useState, useEffect, useContext} from 'react'
import { BuildingStorefrontIcon, HeartIcon, ArrowLeftIcon, CameraIcon, ShoppingCartIcon,FireIcon, TruckIcon, ChevronRightIcon, EllipsisVerticalIcon, MagnifyingGlassIcon, ArrowRightIcon } from 'react-native-heroicons/outline'
import CargoImage from '../images/cargo.png'
import { urlFor } from '../../sanity'
import { ArticleContext } from '../context/ArticleContext'
import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'


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
    
  const navigation = useNavigation()
   
  return (
    <SafeAreaView className="relative flex-1 bg-white">
      <StatusBar backgroundColor="black" className="bg-black/40" />
      <View
        className={`absolute top-0 w-full p-3 space-x-2 flex-row z-10 items-center ${headerBg}`}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="rounded-full bg-black/40 items-center justify-center w-[30px] h-[30px]">
          <ArrowLeftIcon size={24} color="white" />
        </TouchableOpacity>
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
        className="h-[300px]"
        onMomentumScrollBegin={() => onScrolledEnd()}
        onScroll={() => onScrolled()}>
        <View className="w-full h-[300px]">
          <Image
            source={{uri: urlFor(image).url()}}
            className="w-full h-[300px]"
          />
        </View>
        <ScrollView className="h-[700px] flex-1 relative">
          <ScrollView
            horizontal={true}
            contentContainerStyle={{
              paddingVertical: 20,
              paddingHorizontal: 10,
            }}
            className="space-x-4">
            <View>
              <Text className="font-bold text-black">{price} XAF</Text>
              <Text className="text-xs text-black">commande min: 1 piece</Text>
            </View>
            <View>
              <Text className="font-bold text-black">
                {price - price * 0.1} XAF
              </Text>
              <Text className="text-xs text-black">100-999 piece</Text>
            </View>
            <View>
              <Text className="font-bold text-black">
                {price - price * 0.3} XAF
              </Text>
              <Text className="text-xs text-black">1000-9999 piece</Text>
            </View>
            <View>
              <Text className="font-bold text-black">
                {price - price * 0.6} XAF
              </Text>
              <Text className="text-xs text-black"> {'>='}10000 piece</Text>
            </View>
          </ScrollView>

          <View className="p-3 py-6 border flex-row items-center justify-between border-gray-300">
            <Text className="text-black">{description}</Text>
            <HeartIcon size={24} color="black" />
          </View>
          <View className="p-3 py-6 border flex-row items-center justify-between border-gray-300">
            <View className="flex-row space-x-2">
              <FireIcon size={24} color="black" />
              <Text className="text-black">{category.title}</Text>
            </View>
            <ChevronRightIcon size={24} color="black" />
          </View>
          <View className="border-b">
            <Text className="text-black p-3 font-semibold text-lg">
              Details de l'achat
            </Text>
            <View className="px-3 py-6 border-gray-300 space-y-4">
              <View className="flex-row space-x-2 ">
                <TruckIcon size={24} color="black" />
                <Text className="text-black">Expedition</Text>
              </View>

              <Text className="text-black px-6">
                <Text className=" underline">Contactez le fournisseur</Text> pour negocier les details
                d'expedition
              </Text>
            </View>
          </View>
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