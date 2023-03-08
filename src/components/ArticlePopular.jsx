import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../../sanity';
import { useNavigation } from '@react-navigation/native';


const ArticlePopular = ({
  id,
  image,
  title,
  description,
  price,
  quantity,
  category,
  date,
  rating
}) => {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity 

      onPress={() =>
        navigation.navigate('Article', {
          id,
          image,
          title,
          description,
          price,
          quantity,
          category,
          date,
          rating,
        })
      }
      className="bg-gray-200/60 space-y-2 p-2 ml-3 rounded-lg items-center">
      <View className="w-[120px] border h-[120px] rounded-xl">
        <Image
          source={{uri: urlFor(image).url()}}
          className="rounded-xl w-[120px] h-[120px]"
        />
      </View>
      <Text className="text-black font-bold text-center">{title}</Text>
      <Text className="text-gray-600 text-center w-32 text-xs">
        {description}
      </Text>
    </TouchableOpacity>
  );
};

export default ArticlePopular