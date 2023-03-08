import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import SeachBar from '../components/SeachBar';
import {ChevronRightIcon} from 'react-native-heroicons/outline';
import HeaderRow from '../components/HeaderRow';
import FeaturedRowCategories from '../components/FeaturedRowCategories';
import FeaturedArticlePopular from '../components/FeaturedArticlePopular';
import FeaturedArticleNew from '../components/FeaturedArticleNew';
import FeaturingTendance from '../components/FeaturingTendance';

const FabricantRoute = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="m-3">
        <SeachBar text="Fabricants de recherche" />
      </View>
      
    </SafeAreaView>
  );
};

export default FabricantRoute;
