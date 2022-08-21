import { View, Text, ScrollView } from 'react-native'
import React , {useLayoutEffect} from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCards from './RestaurantCards'

export default function FeaturedRow({id , title , description , categoryId , data}) {
  
  

  useLayoutEffect(() => {
    
       
    }, [])
     
   
  
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
        {
          data.map((item, index) => { 
            return <RestaurantCards
                id ={ item.index} 
                imageurl = {item.imageurl}
                title = {item.title}
                rating = {item.rating}
                genre = {item.genre}
                address = {item.address}
                short_description = {item.short_description}
                dishes = {item.dishes}
                long = {item.long}
                lat = {item.lat}
              />

          })
        }
              
              
          </ScrollView>
    </View>
  )
}