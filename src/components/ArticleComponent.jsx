import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, {useEffect, useState, useContext} from 'react'
import { urlFor } from '../../sanity'
import {ArticleContext} from '../context/ArticleContext';
import CargoImage from '../images/cargo.png'
import {TrophyIcon, BookmarkIcon, StarIcon} from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';


const ArticleComponent = ({
  id,
  image,
  title,
  description,
  price,
  quantity,
  rating,
  date,
  category,
  index
}) => {
 
 
 const [today, setDate] = useState(null); 
 const navigation = useNavigation();
 
 const onPressed = () =>{
   
    navigation.navigate('OrderArticle', {
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
 }

  
  return (
    <TouchableOpacity onPress={() => onPressed()} className="flex-row relative space-x-2 p-2 border-b border-gray-400">
      <View className="absolute top-0 left-1 z-10">
        <View className="relative items-center justify-center">
          <BookmarkIcon size={42} fill="orange" />
          <Text className="text-white absolute font-bold">{index}</Text>
        </View>
      </View>
      <View className="bg-gray-100 rounded-xl p-1">
        {image? (
          <Image
            source={{uri: urlFor(image).url()}}
            className="w-32 h-32 rounded-xl"
          />
        ) : (
          <Image
            source={CargoImage}
            className="w-32 h-32 rounded-xl"
          />
        )}
      </View>
      <View className="space-y-1 text-black">
        <Text className="text-black w-[75%]">{description}</Text>
        <Text className="font-bold text-black ">{price} XAF</Text>
        <Text className="text-black">{quantity} Pieces (MOQ)</Text>
        <View className="flex-row space-x-1 items-center">
          <Text className="text-black">Score de popularite:</Text>
          <View className="flex-row">
            <StarIcon size={18} fill="orange" />
            <Text className="text-black">{rating}</Text>
          </View>
        </View>
        <Text className="text-black">10 jour(s) deja</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ArticleComponent