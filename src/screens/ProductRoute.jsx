import {View, Text, ScrollView, RefreshControl, SafeAreaView} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import SeachBar from '../components/SeachBar';
import {ChevronRightIcon} from 'react-native-heroicons/outline';
import HeaderRow from '../components/HeaderRow';
import FeaturedRowCategories from '../components/FeaturedRowCategories';
import FeaturedArticlePopular from '../components/FeaturedArticlePopular';
import FeaturedArticleNew from '../components/FeaturedArticleNew';
import FeaturingTendance from '../components/FeaturingTendance';
import client from '../../sanity';

const ProductRoute = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="m-3">
        <SeachBar text="Recherche les produits ou" />
      </View>
      <ScrollView
        className="flex-1 bg-gray-50"
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            enabled={true}
            colors={['#f97216']}
          />
        }>
        <Text className="text-xs text-black text-center">
          Vous etes protege lorsque vous vous apptovisionnez sur AI...
          <ChevronRightIcon color="white" fill="black" size={10} />
        </Text>
        <FeaturedRowCategories />
        <FeaturedArticlePopular />
        <FeaturedArticleNew />
        <FeaturingTendance />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductRoute;
