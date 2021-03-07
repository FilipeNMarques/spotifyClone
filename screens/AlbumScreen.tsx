import { useRoute } from '@react-navigation/native'
import React from 'react'
import { Text, FlatList, Image, TouchableOpacity } from 'react-native'
import AlbumHeader from '../components/AlbumHeader'
import SongListItem from '../components/SongListItem'

import { View } from '../components/Themed'
import albumDetails from '../data/AlbumDetails'
const AlbumScreen = () => {
  const route = useRoute()

  React.useEffect(() => {
    console.log(route)
  }, [])

  return (
    <View>
      <FlatList
        ListHeaderComponent={() => <AlbumHeader album={albumDetails}/>}
        data={albumDetails.songs}
        renderItem={({item}) => <SongListItem song={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}



export default AlbumScreen