import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../../sanity';

const ArticlePopular = ({id, image, title, description}) => {
  return (
    <TouchableOpacity className="bg-gray-200/60 space-y-2 p-2 ml-3 rounded-lg items-center">
      <Image source={{uri: urlFor(image).url()}} className="rounded-xl w-[120px] h-[120px]" />
      <Text className="text-black font-bold text-center">{title}</Text>
      <Text className="text-gray-600 text-center w-32 text-xs">{description}</Text>
    </TouchableOpacity>
  );
}

export default ArticlePopular