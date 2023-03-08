import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react'
import Swiper from 'react-native-swiper';
import {urlFor} from '../../sanity';
import client from '../../sanity';





const ArticleSpecial = () => {
  const [articleSpecial, setArticleSpecial] = useState([]);


  useEffect(() => {
    client
      .fetch(
        `*[_type == "category"]{
        ...,
       
        }
       `,
      )
      .then(data => setArticleSpecial(data));
  }, [articleSpecial]);
  
  return (
    <View className="w-[180px] h-[300px] bg-gray-200/60 m-1 ml-3 rounded-xl relative overflow-hidden">
      <Swiper
        horizontal={true}
        autoplay={true}
        loop={true}
        showsButtons={false}
        activeDotColor="#f97216">
        {articleSpecial?.map(article => (
          <View
            key={article._id}
            className="w-full h-full items-center justify-center rounded-xl">
            <Image
              source={{uri: urlFor(article.image).url()}}
              className="w-[180px] h-[300px]"
            />
          </View>
        ))}
      </Swiper>
      <TouchableOpacity className="absolute bottom-12 left-7  rounded-full  bg-black/30 px-8 py-2 text-sm">
       
        <Text className="text-white font-semibold">voir plus</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ArticleSpecial