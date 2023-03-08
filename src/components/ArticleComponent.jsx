import { View, Text, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import { urlFor } from '../../sanity'
import {useContext} from 'react';
import {CategoyContext} from '../context/CategoryContext';
import { TrophyIcon } from 'react-native-heroicons/outline';



const ArticleComponent = ({
  id,
  image,
  description,
  price,
  quantity,
  rating,
  date,
  category,
}) => {
 
 
 const [today, setDate] = useState(null);

  
  return (
    <View className="flex-row space-x-2 p-2 border-b border-gray-400">
      <View className="bg-gray-100 rounded-xl p-1">
        <Image
          source={{uri: urlFor(image).url()}}
          className="w-32 h-32 rounded-xl"
        />
      </View>
      <View className="space-y-1 text-black">
        <Text className="text-black w-[75%]">{description}</Text>
        <Text className="font-bold text-black ">{price} XAF</Text>
        <Text className="text-black">{quantity} Pieces (MOQ)</Text>
        <View className="flex-row space-x-1 items-center">
          <Text className="text-black">Score de popularite: {rating}</Text>
          <TrophyIcon size={11} color="red" />
        </View>

        <Text className="text-black">10 jour(s) deja</Text>
      </View>
    </View>
  );
};

export default ArticleComponent