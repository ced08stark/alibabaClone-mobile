import { View, Text, Image } from 'react-native'
import * as Animable from 'react-native-animatable'
import React, {useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'



const SplashScreen = () => {
    const navigation =  useNavigation();

    useEffect(() => {
        setTimeout(()=>{
            navigation.navigate('HomeTab');
        }, 5000)
    });
  return (
    <View className="flex-1 relative items-center justify-center bg-white">
      <View className="absolute bottom-10">
        <Image
          source={require('../images/alibaba.png')}
          className="w-64 h-16"
        />
        <Animable.Text animation="zoomInUp" className="text-gray-400 text-sm text-center">
          Powered by alibaba clone
        </Animable.Text>
      </View>
    </View>
  );
}

export default SplashScreen