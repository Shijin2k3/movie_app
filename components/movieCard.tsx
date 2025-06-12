import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const MovieCard = ({ imdbID,
    Title,
    Year,
    Type,
    Poster,
}: {
    imdbID: string;
    Title: string;
    Year: string;
    Type: string;
    Poster: string;}) => {
  return (
   <Link href={`/movies/${imdbID}`}>
      <TouchableOpacity className='w-[120px]'>
        <Image source={{ uri: Poster }} className='w-full h-52 rounded-lg' resizeMode='cover' />
        <Text className='text-sm font-bold text-white mt-2 mb-1' numberOfLines={1}>
          {Title}
        </Text>
        <View className='flex-row items-center justify-start gap-x-1'>
          <Image source={require('@/assets/icons/star.png')} className='w-4 h-4' />
          <Text className='text-xs text-white font-bold uppercase'>{(Math.random() * 9 + 1).toFixed(1)}</Text>
        </View>
        <View className='flex-row items-center justify-between mb-3'>
          <Text className='text-xs text-light-300 font-medium mt-1'>{Year}</Text>
          <Text className='text-xs text-light-300 font-medium uppercase'>{Type}</Text>
        </View> 
      </TouchableOpacity>
   </Link>
  )
}

export default MovieCard
