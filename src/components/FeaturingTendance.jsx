import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import HeaderRow from './HeaderRow';
import ArticleSpecial from './ArticleSpecial';
import ArticleLive from './ArticleLive';
import CargoImage from '../images/cargo.png';
import client from '../../sanity';

const FeaturingTendance = () => {
   const [articleLive, setArticleLive] = useState([]);

   useEffect(() => {
     client
       .fetch(
         `*[_type == "tendance" && name == "Live(s)"]{
        ...,
        articles[] ->{
          ...,
        }
       }[0]`,
       )
       .then(data => setArticleLive(data?.articles));
   });
  return (
    <View className="pt-4">
      <HeaderRow title="Juste pour vous" showArrow={false} />
      <View className="flex justify-between flex-row space-x-2">
        <ArticleSpecial />
        <View className="space-y-4">
          {articleLive?.map((article, index) => (
            <ArticleLive
              key={article._id}
              image={article.image}
              isLive={false}
              title="plein feu sur l'economie"
              description="null"
            />
          ))}

        </View>
      </View>
    </View>
  );
}

export default FeaturingTendance