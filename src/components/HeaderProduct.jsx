import { View, Text } from 'react-native'
import React from 'react'

const HeaderProduct = ({titleCategorie, titleArticle, color}) => {
  return (
    <View className={`items-center flex space-y-1 p-6 ${color}`}>
      <Text className="font-bold text-sm text-black">{titleCategorie}</Text>
      <Text className="font-bold text-lg leading-6  tracking-tight text-center text-black">{titleArticle}</Text>
      <Text className="text-xs text-center text-black">
        Les produits sont automatiquement classe en fonction des demandes des
        acheteurs. Mise a jour quotidenne.
      </Text>
    </View>
  );
}

export default HeaderProduct