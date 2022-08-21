import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCards from './RestaurantCards'

export default function FeaturedRow({id , title , description , featuredCategory}) {
  return (
    <View>
          <View className="mt-4 flex-row items-center justify-between px-4">
              <Text className="font-bold text-lg">{title}</Text>
              <ArrowRightIcon color = "#00CCBB"/>
          </View>
          <Text className="text-xs text-gray-500 px-4">{description}</Text>
          <ScrollView
              horizontal={true}
              className="pt-4"
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                  paddingHorizontal: 15,
              }}
          >
              {/* RestaurantCards */}
              <RestaurantCards
                id = {123} 
                imageurl = "https://links.papareact.com/wru"
                title = "yo sushih"
                rating = {4.5}
                genre = "Japanese"
                address = "123 main St"
                short_description = "this is a short description"
                dishes = {[]}
                long = {20}
                lat = {0}
              />
              <RestaurantCards
                id = {123} 
                imageurl = "https://links.papareact.com/wru"
                title = "yo sushih"
                rating = {4.5}
                genre = "Japanese"
                address = "123 main St"
                short_description = "this is a short description"
                dishes = {[]}
                long = {20}
                lat = {0}
              />
              <RestaurantCards
                id = {123} 
                imageurl = "https://links.papareact.com/wru"
                title = "yo sushih"
                rating = {4.5}
                genre = "Japanese"
                address = "123 main St"
                short_description = "this is a short description"
                dishes = {[]}
                long = {20}
                lat = {0}
              />
              <RestaurantCards
                id = {123} 
                imageurl = "https://links.papareact.com/wru"
                title = "yo sushih"
                rating = {4.5}
                genre = "Japanese"
                address = "123 main St"
                short_description = "this is a short description"
                dishes = {[]}
                long = {20}
                lat = {0}
              />
          </ScrollView>
    </View>
  )
}