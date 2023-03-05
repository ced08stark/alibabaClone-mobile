import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'


const Category = ({text, image, color}) => {
  return (
    <TouchableOpacity className={`flex flex-row ${color} p-2 ml-3 rounded-lg items-center space-x-2`}>
      <Text className="w-20 text-white font-bold">{text}</Text>
      <Image source={image} className="w-[40px] h-[40px]" />
    </TouchableOpacity>
  );
}

export default Category