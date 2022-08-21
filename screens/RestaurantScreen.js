import { View, Text , Image, TouchableOpacity } from 'react-native'
import React , {useLayoutEffect} from 'react'
import { useNavigation , useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { ArrowLeftIcon , ChevronRightIcon, LocationMarkerIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';
export default function RestaurantScreen() {
    const navigation = useNavigation();
    useLayoutEffect(() => { 
        navigation.setOptions({
            headerShown: false
        });
    }, [])
    const {
        params: {
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
        }
    } = useRoute();
  return (
    <ScrollView>
       
              <View className="relative">
                  <Image source={{ uri: imageurl }} className="h-56 w-full bg-gray-300 p-4" />
              <TouchableOpacity onPress={ navigation.goBack} className = "absolute top-14 left-5 p-2 bg-gray-200 rounded-full">
                  <ArrowLeftIcon size = {20} color = "#00CCBB"/>
              </TouchableOpacity>    
          </View>
          <View className="bg-white">
              <View className="px-4">
                  <Text className="text-3xl font-bold">{title}</Text>
                  <View className="flex-row space-x-2 my-1">
                      <View className="flex-row space-x-1 items-center ">
                      <StarIcon color="green" size={22} opacity={0.5} />
                      <Text className="text-xs text-gray-500">
                            <Text className="text-green-500">{rating} . { genre}</Text>    
                          </Text>
                      </View>
                      
                      <View className="flex-row space-x-1 items-center ">
                      <LocationMarkerIcon color="gray" size={22} opacity={0.4} />
                      <Text className="text-xs text-gray-500">
                            <Text className="text-green-500">Nearby . { address}</Text>    
                          </Text>
                      </View>
                      
                  </View>
                  <Text className="text-xs text-gray-500 mt-2 pb-4">{short_description}</Text> 
                  <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                      <QuestionMarkCircleIcon color="gray" size={20} opacity={0.6} />
                      <Text className="pl-2 flex-1 text-md font-bold">Have a food alergy?</Text>
                      <ChevronRightIcon color = "#00CCBB" size = {20} />
                  </TouchableOpacity>
                 
              </View>
          </View>
           <View>
                      <Text className="px-4 pt-6 mb-3 font-bold text-xl">
                          Menu
                      </Text>
          </View>
          {/* Dishrows */}
          {
              dishes.map((dish, index) => { 
                  <DishRow 
                      key={dish.id} 
                      id={dish._id}
                      name={dish.name}
                      price={dish.price}
                      description={dish.description}
                      image = {dish.image}
                  />  
              })
          }

    </ScrollView>
  )
}