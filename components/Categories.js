import { ScrollView , View, Text } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
export default function Categories() {
  return (
      <ScrollView
          className="px-4"
          contentContainerStyle={{
              paddintHorizontal: 15,
              paddingTop : 10
          }}
          horizontal={true}
        showsHorizontalScrollIndicator={false}
        >
      
            {/* CateogryCard */}
            <CategoryCard imageUrl="https://links.papareact.com/wru" title="Restaurants" />
            <CategoryCard imageUrl="https://links.papareact.com/wru" title="Restaurants" />
            <CategoryCard imageUrl="https://links.papareact.com/wru" title="Restaurants" />
            <CategoryCard imageUrl="https://links.papareact.com/wru" title="Restaurants" />
            <CategoryCard imageUrl="https://links.papareact.com/wru" title="Restaurants" />
            <CategoryCard imageUrl="https://links.papareact.com/wru" title="Restaurants" />
            <CategoryCard imageUrl="https://links.papareact.com/wru" title="Restaurants" />
            <CategoryCard imageUrl="https://links.papareact.com/wru" title="Restaurants" />
            <CategoryCard imageUrl="https://links.papareact.com/wru" title="Restaurants" />
            <CategoryCard imageUrl="https://links.papareact.com/wru" title="Restaurants" />
            <CategoryCard imageUrl="https://links.papareact.com/wru" title="Restaurants" />
            <CategoryCard imageUrl="https://links.papareact.com/wru" title="Restaurants" />
          
    </ScrollView>
  )
}