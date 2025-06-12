// import MovieCard from '@/components/movieCard';
// import SearchBar from '@/components/SearchBar';
// import TrendingCard from '@/components/trendingCard';
// import { icons } from '@/constants/icons';
// import { images } from '@/constants/images';
// import { fetchMovies } from '@/services/api';
// import { getTrendingMovies } from '@/services/appWrite';
// import useFetch from '@/services/useFetch';
// import { useRouter } from 'expo-router';
// import { ActivityIndicator, FlatList, Image, Pressable, Text, View } from 'react-native';

// export default function Index() {
//     const router = useRouter();

//     const { data: trendingMovies, loading: trendingLoading, error: trendingError } = useFetch(getTrendingMovies);

//     const { data: movies, loading: moviesLoading, error: moviesError } = useFetch(() => fetchMovies({ query: '' }));

//     return (
//         <View className='flex-1 bg-primary'>
//             <Image source={images.bg} className='absolute w-full z-0' />

//             <View className='flex-1 px-2 min-h-screen pb-3'>
//                 <View className='flex-1 px-2 min-h-screen pb-3'>
//                     {moviesLoading || trendingLoading ? (
//                         <ActivityIndicator size='large' color='#0000ff' className='mt-20 self-center' />
//                     ) : moviesError || trendingError ? (
//                         <Text className='text-white mt-20 text-center'>
//                             Error: {moviesError?.message || trendingError?.message}
//                         </Text>
//                     ) : (
//                         <FlatList
//                             data={movies}
//                             renderItem={({ item }) => <MovieCard {...item} />}
//                             keyExtractor={(item) => item.imdbID.toString()}
//                             numColumns={3}
//                             columnWrapperStyle={{
//                                 justifyContent: 'flex-start',
//                                 gap: 20,
//                                 padding: 5,
//                                 marginBottom: 10,
//                             }}
//                             className='mt-2 pb-32'
//                             ListHeaderComponent={
//                                 <>
//                                     <Image source={icons.logo} className='w-12 h-10 mt-20 mb-5 mx-auto' />
//                                     <Pressable onPress={() => router.push('/search')}>
//                                         <SearchBar placeholder='Search for a movie' editable={false} />
//                                     </Pressable>

//                                     {trendingMovies && (
//                                         <View className='mt-10'>
//                                             <Text className='text-lg text-white font-bold mb-3'>Trending Movies</Text>
//                                             <FlatList
//                                                 horizontal
//                                                 showsHorizontalScrollIndicator={false}
//                                                 ItemSeparatorComponent={() => <View className='w-4' />}
//                                                 className='mb-4 mt-3'
//                                                 data={trendingMovies}
//                                                 renderItem={({ item, index }) => (
//                                                     <TrendingCard movie={item} index={index} />
//                                                 )}
//                                                 keyExtractor={(item) => item.movie_id.toString()}
//                                             />
//                                         </View>
//                                     )}
//                                     <Text className='text-lg text-white font-bold mt-5 mb-3'>Latest Movies</Text>
//                                 </>
//                             }
//                             showsVerticalScrollIndicator={false}
//                             contentContainerStyle={{ paddingBottom: 40 }}
//                         />
//                     )}
//                 </View>
//             </View>
//         </View>
//     );
// }

import { View, Text, Image, ScrollView, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'
import SearchBar from '@/components/SearchBar'
import { useRouter } from 'expo-router';
import useFetch from '@/services/useFetch'
import { fetchMovies } from '@/services/api'
import MovieCard from '@/components/movieCard'


const index = () => {
    const router = useRouter();
     const { data: movies, loading: moviesLoading, error: moviesError } = useFetch(() => fetchMovies({ query: '' }));
  return (
    <View className='flex-1 bg-primary pb-3'>
        <Image source={images.bg} className='absolute w-full z-0' />

        <View className='flex-1 px-5 min-h-screen' >
          <Image source={icons.logo} className='w-12 h-10 mt-20 mb-5 mx-auto'/>
             {moviesLoading ? (<ActivityIndicator size='large' color='#0000ff' className='mt-20 self-center'/> ) : moviesError ? (
            <Text>Error{moviesError?.message }</Text>
        ):
        (
            <View className='flex-1 mt-5'>
            <SearchBar 
            onPress={()=>{router.push("/search")}}
            placeholder='search for a movie'/>

            <>
            <Text className='text-lg text-white font-bold mt-5 mb-3'>Latest Movies</Text>
                    
                    <FlatList 
                     data={movies} 
                   renderItem={({ item }) => <MovieCard {...item} />}
                     
                     keyExtractor={(item)=>item.imdbID.toString()} numColumns={3}
                     columnWrapperStyle={{
                        justifyContent: 'flex-start',
                        gap: 20,
                        padding:5,
                        marginBottom:10,

                    }}
                     className='mt-3 pb-32 ' />
    
            </>
          </View>
          


        )
        }

        </View> 
        
      
    </View>
  )
}

export default index