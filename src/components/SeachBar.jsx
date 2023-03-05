import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { PhotoIcon, MagnifyingGlassIcon, CameraIcon, VideoCameraIcon, VideoCameraSlashIcon } from 'react-native-heroicons/outline';
import React from 'react'

const SeachBar = ({text}) => {
  return (
    <View className="flex flex-row space-x-2 px-1 bg-gray-200 rounded-full text-black w-full items-center">
      <TextInput
        placeholder={text}
        placeholderTextColor="black"
        className="flex-1 text-black pl-4"
      />
      <TouchableOpacity>
        <CameraIcon color="black" fill="white" size={25} />
      </TouchableOpacity>
      <TouchableOpacity className="w-[35px] h-[35px] bg-black rounded-full flex justify-center items-center">
        <MagnifyingGlassIcon color="white" fill="black" size={20} />
      </TouchableOpacity>
    </View>
  );
}

export default SeachBar