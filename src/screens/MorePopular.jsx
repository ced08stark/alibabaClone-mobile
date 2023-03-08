import {View, Text, ScrollView, SafeAreaView, RefreshControl} from 'react-native';
import React, {useContext, useEffect, useState, useCallback} from 'react'
import ArticleComponent from '../components/ArticleComponent';
import CargoImage from '../images/cargo.png';
import { useRoute } from '@react-navigation/native';
import { CategoyContext } from '../context/CategoryContext';
import client from '../../sanity';
import article from '../../sanity/schemas/article';
import category from '../../sanity/schemas/category';

var results = [];
const MorePopular = () => {
  
  const {currentCategory} = useContext(CategoyContext);
  const [articles, setArticles] = useState([]);
   const [filters, setFilters] = useState([]);
   const [refreshing, setRefreshing] = useState(true);
   
    const onRefresh = useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);
    const getData = async () => {
      results = [];
      await client
        .fetch(
          `*[_type == "article" ]{
            ...,
            type->{
              ...,
            }
         
          
        }`,
        )
        .then(data => setArticles(data));
        setRefreshing(false);
        
    }; 
 useEffect(() => {
   getData();
   //console.log(articles.length);
   if (articles.length > 0) {
      results = articles.filter(article => article.type?._id == currentCategory?._id);
     //console.log(currentCategory[0]?._id);
     //console.log(articles);
   }
 }, [articles]);

 
 
  
  return (
    <ScrollView
      contentContainerStyle={{paddingHorizontal: 10, paddingBottom: 50}}
      className="bg-gray-50"
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {results.map((article) => (
        <ArticleComponent
          key={article._id}
          id={article?._id}
          title={article?.name}
          description={article?.description}
          image={article?.image}
          price={article?.price}
          quantity={article?.quantity}
          categories={article?.categories}
          rating={article?.rating}
          date={article?.createdAt}
        />
      ))}
    </ScrollView>
  );
}

export default MorePopular