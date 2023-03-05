import { View, Text } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'

const HeaderRow = ({title, showArrow}) => {
  return (
    <View className="flex flex-row p-3 items-center ">
      <Text className="flex-1 text-lg font-semibold text-black">{title}</Text>
      {showArrow && <ArrowRightIcon color="black" fill="white" size={25} />}
    </View>
  );
}

export default HeaderRow