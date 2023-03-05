import { View, Text, TouchableOpacity, Image } from 'react-native'
import { urlFor } from '../../sanity';



const ArticleNew = ({id, image, price, quantity}) => {
  return (
    <TouchableOpacity className="space-y-2 ">
      <View className="bg-gray-200/60 ml-3  items-center rounded-lg">
        <Image
          source={{uri: urlFor(image).url()}}
          className="rounded-xl w-[120px] h-[120px]"
        />
      </View>
      <View>
        <Text className="text-black font-bold ml-3">{price} XAF</Text>
        <Text className="text-gray-600 text-xs ml-3">{quantity} Pieces</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ArticleNew