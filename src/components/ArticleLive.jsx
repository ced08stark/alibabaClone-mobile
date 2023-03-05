import {View, Text, TouchableOpacity, Image} from 'react-native';
import {urlFor} from '../../sanity';
import * as Animatable from 'react-native-animatable'

const ArticleLive = ({image, title, description, isLive}) => {
  return (
    <TouchableOpacity className="relative bg-gray-200/60 m-1 mr-3 rounded-lg">
      <View className="">
        <Image
          source={{uri: urlFor(image).url()}}
          className="rounded-xl w-36 h-36"
        />
      </View>
      {isLive ? (
        <View className="absolute">
          <Text className="text-black font-bold ml-3 top-1 left-1">
            {title}
          </Text>
        </View>
      ) : (
        <View className="absolute items-center flex-row rounded-tl-xl bg-black px-2 py-1">
          <Animatable.Image
            source={require('../images/led.gif')}
            className="w-10 h-5"
          />
          
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ArticleLive;
