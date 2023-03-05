import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import HeaderRow from './HeaderRow'
import Category from './Category'
import CategoryImage from '../images/categorie.png';
import ObjectifImage from '../images/objectif.png';
import EnqueteImage from '../images/enquete.png';
import CargoImage from '../images/cargo.png';
import LangueImage from '../images/langue.png';
import CommandeImage from '../images/commande.png';

const FeaturedRowCategories = () => {
    const ListCategories = [
      {
        id: 1,
        text: 'Toutes les categories',
        image: CategoryImage,
        color: 'bg-orange-500',
      },
      {
        id: 2,
        text: 'Demande de devis',
        image: ObjectifImage,
        color: 'bg-sky-800',
      },
      {
        id: 3,
        text: 'Avantage du Buyers club',
        image: EnqueteImage,
        color: 'bg-yellow-400',
      },
      {
        id: 4,
        text: 'Pret a expedier',
        image: CommandeImage,
        color: 'bg-pink-800',
      },
      {
        id: 5,
        text: 'Selection mondiale',
        image: LangueImage,
        color: 'bg-blue-600',
      },
      {
        id: 6,
        text: 'Services logistique',
        image: CargoImage,
        color: 'bg-green-800',
      },
      {
        id: 7,
        text: 'Expedition directe',
        image: CommandeImage,
        color: 'bg-purple-800',
      },
    ];
  return (
    <View className="pt-4 ">
      <HeaderRow title="Pour votre entreprise" showArrow={false} />
      <ScrollView
        horizontal
        contentContainerStyle={{paddingVertical: 5}}
        showsHorizontalScrollIndicator={false}>
        {ListCategories.map(category => (
          <Category
            key={category.id}
            text={category.text}
            image={category.image}
            color={category.color}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default FeaturedRowCategories