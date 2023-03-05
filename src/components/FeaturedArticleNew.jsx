import {View, Text, ScrollView, RefreshControl} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import ArticlePopular from './ArticlePopular';
import HeaderRow from './HeaderRow';
import CargoImage from '../images/cargo.png';
import ArticleNew from './ArticleNew';
import { urlFor } from '../../sanity';
import client from '../../sanity';

const FeaturedArticleNew = () => {
   const [articleNews, setArticleNew] = useState([]);
   const [refreshing, setRefreshing] = useState(false);
   const onRefresh = useCallback(() => {
     setRefreshing(true);
     setTimeout(() => {
       setRefreshing(false);
     }, 2000);
   }, []);

   useEffect(() => {
     client
       .fetch(
         `*[_type == "tendance" && name == "Nouvaute(s)"]{
        ...,
        articles[] ->{
          ...,
        }
       }[0]`,
       )
       .then(data => setArticleNew(data?.articles));
   });
  return (
    <View className="pt-4">
      <HeaderRow title="Nouveautes(s)" showArrow={true} />
      <ScrollView
        horizontal
        contentContainerStyle={{paddingVertical: 5}}
        showsHorizontalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
        {articleNews?.map((article) => (
          <ArticleNew
            key={article._id}
            id={article._id}
            price={article.price}
            quantity={article.quantity}
            image={article.image}
          />
        ))}

        
      </ScrollView>
    </View>
  );
}

export default FeaturedArticleNew