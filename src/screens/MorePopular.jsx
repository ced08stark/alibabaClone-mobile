import {View, Text, ScrollView, SafeAreaView, RefreshControl} from 'react-native';
import React, {useContext, useEffect, useState, useCallback} from 'react'
import ArticleComponent from '../components/ArticleComponent';
import CargoImage from '../images/cargo.png';
import { useRoute } from '@react-navigation/native';
import { ArticleContext } from '../context/ArticleContext';
import client from '../../sanity';
import article from '../../sanity/schemas/article';
import category from '../../sanity/schemas/category';

var results = [];
const MorePopular = () => {
  
  const {currentArticle} = useContext(ArticleContext);
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
      results = articles.filter(
        article =>
          article.type?._id == currentArticle.category?._id &&
          article?.name != currentArticle?.title,
      );
      
     //console.log(currentCategory[0]?._id);
     
   }
 }, [articles]);

 
 
  
  return (
    <ScrollView
      contentContainerStyle={{paddingHorizontal: 10, paddingBottom: 50}}
      className="bg-gray-50"
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <ArticleComponent
        key={currentArticle._id}
        id={currentArticle?._id}
        title={currentArticle?.title}
        description={currentArticle?.description}
        image={currentArticle?.image}
        price={currentArticle?.price}
        quantity={currentArticle?.quantity}
        category={currentArticle?.category}
        rating={currentArticle?.rating}
        date={currentArticle?.date}
        index={1}
      />
      {results?.map((article, index) => (
        <ArticleComponent
          key={article._id}
          id={article?._id}
          title={article?.name}
          description={article?.description}
          image={article?.image}
          price={article?.price}
          quantity={article?.quantity}
          category={article?.type}
          rating={article?.rating}
          date={article?.createdAt}
          index={index+2}
        />
      ))}
    </ScrollView>
  );
}

export default MorePopular