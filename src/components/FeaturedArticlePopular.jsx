import {View, Text, ScrollView, RefreshControl} from 'react-native';
import React, {useState, useEffect, useLayoutEffect, useCallback} from 'react';

import HeaderRow from './HeaderRow';
import CargoImage from '../images/cargo.png';
import client from '../../sanity';
import ArticlePopular from './ArticlePopular';



const FeaturedArticlePopular = () => {
  const [articlePopulars, setArticlePopular] = useState([]);
  const [refreshing, setRefreshing] = useState(true);
    
   useEffect(() => {
    
    client
      .fetch(
        `*[_type == "tendance" && name == "popular(s)"]{
        ...,
        articles[] ->{
          ...,
        }
       }[0]`,
      )
      .then(data => setArticlePopular(data?.articles));
      setRefreshing(false);
       
  }, [articlePopulars]);
  
  
  

  return (
    <View className="pt-4">
      <HeaderRow title="Populaire(s)" showArrow={true} />
      <ScrollView
        horizontal
        contentContainerStyle={{paddingVertical: 5}}
        showsHorizontalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} />
        }>
        {articlePopulars?.map(article => (
          <ArticlePopular
            key={article._id}
            id={article._id}
            title={article.name}
            description={article.description}
            image={article?.image}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default FeaturedArticlePopular