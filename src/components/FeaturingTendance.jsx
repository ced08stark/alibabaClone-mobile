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
   }, [articleLive]);
  return (
    <View className="pt-4">
      <HeaderRow title="Juste pour vous" showArrow={false} />
      <View className="flex justify-between flex-row space-x-2">
        <ArticleSpecial />
        <View className="space-y-4">
          {articleLive?.map((article, index) => (
            <ArticleLive
              key={article._id}
              isLive={false}
              id={article?._id}
              title={article?.name}
              description={article?.description}
              image={article?.image}
              price={article?.price}
              quantity={article?.quantity}
              category={article?.type}
              rating={article?.rating}
              date={article?.createdAt}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

export default FeaturingTendance