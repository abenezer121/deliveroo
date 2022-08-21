import { View, Text , Image , TouchableOpacity } from 'react-native'
import React from 'react'
import { LocationMarkerIcon, StarIcon } from 'react-native-heroicons/outline'


export default function RestaurantCards({
    id, 
    imageurl,
    title,
    rating,
    genre,
    address,

    short_description,
    dishes,
    long,
    lat,
    
}) {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image source={{ uri: imageurl }} className="h-36 w-64 rounded-sm" />
          <View className="px-3 pb-4">
              <Text className="font-bold text-lg pt-2">{title}</Text>
              <View className = "flex-row items-center space-x-1">
                  <StarIcon color="green" size={22} opacity={0.5} />
                  <Text className="text-xs text-gray-500">
                      <Text className="text-green-500">{rating} . { genre}</Text>    
                  </Text>
                  
              </View>
              <View className="flex-row items-center space-x-1">
                  <LocationMarkerIcon color="gray" size={22} opacity={0.4} />
                  <Text className="text-xs text-gray-500"> Nearby . {address}</Text>
              </View>
            </View>
      </TouchableOpacity>
  )
}