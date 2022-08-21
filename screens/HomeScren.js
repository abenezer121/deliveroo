import { Text, View , SafeAreaView , Image} from 'react-native'
import React, { Component , useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'

import { UserIcon , ChevronDownIcon, AdjustmentsIcon , SearchIcon} from "react-native-heroicons/outline";
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
    return (
        <SafeAreaView className="bg-white pt-5">
           
                <View className="flex-row items-center space-x-2 w-full px-4">
                        <Image source={{ uri: 'https://links.papareact.com/wru' }}
                        className = "h-7 w-7 bg-gray-300 rounded-full"/>
                    
                    <View className="flex-1 mx-2">
                        <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
                        <Text className="font-bold text-xl">Current Location
                        <ChevronDownIcon size = {20} color = "#00CCBB" />
                        </Text>
                    </View>
                    <UserIcon  size={35} color="#00CCBB" />
            </View>
            {/* search */}
            <View className="flex-row items-center space-x-2 pb-2 px-4">
                <View className="flex-row flex-1 space-x-2  bg-gray-200 p-3">
                    <SearchIcon color="gray" size={20} />
                    <TextInput
                        placeholder="Restaurant and cuisines"
                        keyboardType='default'
                    />
                </View>
                <AdjustmentsIcon size={30} color="#00CCBB" />
            </View>

            {/* body here */}
            <ScrollView className="bg-gray-100"
                contentContainerStyle={{
                    paddingBottom: 120
            }}
            >
                <View>
                    {/* category  */}
                    <Categories/>
                    {/* featured rows */}
                    <FeaturedRow
                        id={1}
                        categoryId = {1}
                        title="Featured"
                        description="Pain placements from our partners"
                        featuredCategory="featured" />
                    
                    <FeaturedRow
                        id={2}
                         categoryId = {2}
                        title="Tasty Discounts"
                        description="Everyone's been enjoying these juicy discounts!"
                        featuredCategory="discounts" />
                    
                    <FeaturedRow
                        id={3}
                        categoryId = {3}
                        title="Offers near you"
                        description="Why not support your local restaurant tonight!"
                        featuredCategory = "offers"/>
                    {/*  */}
                </View>
            </ScrollView>
           
            
        </SafeAreaView>
        
    )

}

export default HomeScreen;

